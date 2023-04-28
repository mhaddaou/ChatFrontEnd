import React from "react";

const ChatAp = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 bg-gray-100 overflow-y-scroll">
        {/* Message history */}
      </div>
      <div className="bg-gray-200 p-4">
        <form className="flex">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-white border border-gray-300 p-2 rounded-lg focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg ml-2"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatAp;
