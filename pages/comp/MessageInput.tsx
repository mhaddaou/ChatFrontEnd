
const MessageInput = () => {
  return (


    <form className="row-span-1 ">
    <div className="flex items-center border-t border-gray-300 py-2 px-1 lg:px-4 lg:py-6">
      <input
        type="text"
        placeholder="Type your message here"
        className="flex-1 border w-16 h-11 lg:w-64 border-gray-400 rounded-lg px-4 py-2 mr-2"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-4 py-2"
      >
        Send
      </button>
    </div>
  </form>
  );
};

export default MessageInput;
