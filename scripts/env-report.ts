import os from 'os'
import { execSync } from 'child_process'

const tryRun = (command: string): string | null => {
  try {
    return execSync(command, { encoding: 'utf8' }).trim()
  } catch (error) {
    return null
  }
}

const formatBytes = (bytes: number): string => {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'] as const
  let size = bytes
  let unitIndex = 0

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024
    unitIndex += 1
  }

  const precision = size < 10 && unitIndex > 0 ? 1 : 0
  return `${size.toFixed(precision)} ${units[unitIndex]}`
}

type ReportValue = string | number | boolean | null

type EnvironmentReport = {
  runtime: {
    node: string
    v8: string | undefined
    npm: ReportValue
  }
  system: {
    platform: string
    architecture: string
    cpu: string | undefined
    memory: {
      total: string
      free: string
    }
  }
  repository: {
    branch: ReportValue
    commit: ReportValue
    worktreeDirty: boolean
  }
  environment: {
    nodeEnv: ReportValue
    nextPublicApiBaseUrl: ReportValue
  }
}

const gitBranch = tryRun('git rev-parse --abbrev-ref HEAD')
const gitCommit = tryRun('git rev-parse --short HEAD')

const report: EnvironmentReport = {
  runtime: {
    node: process.version,
    v8: process.versions.v8,
    npm: tryRun('npm --version'),
  },
  system: {
    platform: `${os.platform()} ${os.release()}`,
    architecture: os.arch(),
    cpu: os.cpus()?.[0]?.model,
    memory: {
      total: formatBytes(os.totalmem()),
      free: formatBytes(os.freemem()),
    },
  },
  repository: {
    branch: gitBranch,
    commit: gitCommit,
    worktreeDirty: (tryRun('git status --porcelain') ?? '').length > 0,
  },
  environment: {
    nodeEnv: process.env.NODE_ENV ?? null,
    nextPublicApiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL ?? null,
  },
}

console.log('Environment snapshot:\n')
console.log(JSON.stringify(report, null, 2))
