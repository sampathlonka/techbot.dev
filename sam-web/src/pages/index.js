
import { useState } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);

  const handleMessageSend = () => {
    // Add logic to send message
  };

  return (
    <div className="flex flex-col h-full">
      <div className="overflow-auto flex-grow">
        {/* Render chat messages here */}
        {messages.map((message, index) => (
          <div key={index} className="flex justify-end mb-2">
            <div className="bg-blue-500 text-white py-2 px-4 rounded-lg max-w-3/4">
              {message}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2">
        <input
          type="text"
          placeholder="Type your message here"
          className="px-2 py-1 rounded-lg border-gray-300 w-full"
        />
        <button
          onClick={handleMessageSend}
          className="bg-blue-500 text-white px-4 py-1 rounded-lg ml-2"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default function ChatPage() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow">
        {/* Render other components here */}
      </div>
      <div className="px-4 py-2 bg-gray-200">
        <ChatBox />
      </div>
    </div>
  );
}