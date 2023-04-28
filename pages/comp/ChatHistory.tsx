/* eslint-disable @next/next/no-img-element */


const ChatApp = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow-0 bg-gray-100 p-4">
        <h2 className="text-lg font-medium mb-4">Message History</h2>
        <ul>
          <li className="flex items-start mb-4">
            <img
              className="w-8 h-8 rounded-full mr-3"
              src="https://via.placeholder.com/48"
              alt="Avatar"
            />
            <div className="flex-1">
              <div className="flex items-center mb-1">
                <h3 className="text-gray-900 font-medium mr-2">John Doe</h3>
                <span className="text-gray-600 text-sm">4:30 PM</span>
              </div>
              <p className="text-gray-800">Hi there!</p>
            </div>
          </li>
          <li className="flex items-start mb-4">
            <img
              className="w-8 h-8 rounded-full mr-3"
              src="https://via.placeholder.com/48"
              alt="Avatar"
            />
            <div className="flex-1">
              <div className="flex items-center mb-1">
                <h3 className="text-gray-900 font-medium mr-2">Jane Smith</h3>
                <span className="text-gray-600 text-sm">4:35 PM</span>
              </div>
              <p className="text-gray-800">How are you?</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex-grow bg-white p-4">
        <h2 className="text-lg font-medium mb-4">Chat Area</h2>
        <ul className="mb-4">
          <li className="flex items-start mb-4">
            <img
              className="w-8 h-8 rounded-full mr-3"
              src="https://via.placeholder.com/48"
              alt="Avatar"
            />
            <div className="flex-1">
              <div className="flex items-center mb-1">
                <h3 className="text-gray-900 font-medium mr-2">John Doe</h3>
                <span className="text-gray-600 text-sm">4:30 PM</span>
              </div>
              <p className="text-gray-800">Hi there!</p>
            </div>
          </li>
          <li className="flex items-start mb-4">
            <img
              className="w-8 h-8 rounded-full mr-3"
              src="https://via.placeholder.com/48"
              alt="Avatar"
            />
            <div className="flex-1">
              <div className="flex items-center mb-1">
                <h3 className="text-gray-900 font-medium mr-2">Jane Smith</h3>
                <span className="text-gray-600 text-sm">4:35 PM</span>
              </div>
              <p className="text-gray-800">How are you?</p>
            </div>
          </li>
        </ul>
        <form className="flex">
          <input
            className="flex-1 bg-gray-200 p-2 rounded-lg"
            type="text"
            placeholder="Type your message here..."
          />
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg ml-2">Send</button>
</form>
</div>
</div>
  );
}

export default ChatApp;