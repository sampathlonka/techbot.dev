import { useState } from "react";

export default function Home() {
  const [apiKey, setApikey] = useState('');
  const API_URL = "https://api.openai.com/v1/chat/completions"

  async function sendRequest() {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Beareer ' + apiKey,
      },
      body: JSON.stringify({
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": "Hello!"}]
      }),
    });

    const responseJson = await response.json();

    console.log('responseJson', responseJson)
  }

  return <div className="flex flex-col h-screen">
    <nav className="shadow px-4 py-2  felx flex-row justify-between items-center">
      <div>Jobot</div>
      <div>
        <input 
        type="password"
        className="border p-2 rounded"
        onChange = {e => setApikey(e.target.value)}
        value={apiKey}
        placeholder="Paste API Key here" />
      </div>
    </nav>
    <div className="p-4">
      <button
      className="border rounded-md p-2 bg-blue-500 hover:bg-blue-600"
      onClick={sendRequest}>
        Send Request
      </button>
    </div>
  </div>
}