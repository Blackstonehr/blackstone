'use client'

import { useState } from 'react'

interface ChatMessage {
  sender: string
  message: string
  timestamp: string
}

export default function CommunicationPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (!input.trim()) return
    setMessages([
      ...messages,
      { sender: 'You', message: input.trim(), timestamp: new Date().toLocaleTimeString() },
    ])
    setInput('')
  }

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Foreman Communication</h1>
      <div className="flex h-[500px]">
        {/* Sidebar with placeholder users */}
        <aside className="w-1/4 pr-4 border-r border-neutral-700">
          <h2 className="text-lg font-semibold mb-2">Site Leaders</h2>
          <ul className="space-y-2">
            {['Alice', 'Bob', 'Charlie'].map((name) => (
              <li key={name} className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-neon-green"></span>
                <span className="text-neutral-300">{name}</span>
              </li>
            ))}
          </ul>
        </aside>
        {/* Chat area */}
        <section className="flex-1 flex flex-col ml-4">
          <div className="flex-1 overflow-y-auto p-4 bg-neutral-800 rounded-t-lg">
            {messages.length === 0 ? (
              <p className="text-neutral-500">No messages yet. Start a conversation!</p>
            ) : (
              messages.map((msg, idx) => (
                <div key={idx} className="mb-2">
                  <span className="font-semibold text-neon-blue mr-1">{msg.sender}:</span>
                  <span className="text-neutral-200">{msg.message}</span>
                  <span className="text-xs text-neutral-500 ml-2">{msg.timestamp}</span>
                </div>
              ))
            )}
          </div>
          <div className="p-2 bg-neutral-700 rounded-b-lg flex space-x-2">
            <input
              type="text"
              className="flex-1 p-2 rounded bg-neutral-800 text-neutral-100 placeholder-neutral-500 border border-neutral-600"
              placeholder="Type a message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') sendMessage()
              }}
            />
            <button
              className="px-3 py-2 rounded bg-neon-blue text-neutral-900 font-medium"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </section>
      </div>
    </main>
  )
}