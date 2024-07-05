'use client'

import { useState } from "react"

function Chat() {
    const [text, setText] = useState('')
    const [messages, setMessages] = useState([])

    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log(text);
    }


  return (
      <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr, auto]">
          <div>
              <h2 className="text-5xl">messages</h2>
          </div>
          <form onSubmit={handleSubmit} className="max-w-4xl pt-12">
              <div className="join w-full">
                  <input 
                      type="text" 
                      placeholder="Message GeniusGPT" 
                      className="input input-bordered join-item w-full"
                      value={text}
                      required
                      onChange={(e)=>setText(e.target.value)}
                  />
                  <button className="btn btn-primary join-item" type="submit"></button>
              </div>
          </form>
    </div>
  )
}

export default Chat