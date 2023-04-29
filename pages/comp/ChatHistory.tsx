/* eslint-disable @next/next/no-img-element */

// import MessageInput from "./MessageInput";

// const ChatApp = () => {
//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex-grow-0 bg-gray-100 p-4">
//         <h2 className="text-lg font-medium mb-4">Message History</h2>
//         <ul>
//           <li className="flex items-start mb-4">
//             <img
//               className="w-8 h-8 rounded-full mr-3"
//               src="https://via.placeholder.com/48"
//               alt="Avatar"
//             />
//             <div className="flex-1">
//               <div className="flex items-center mb-1">
//                 <h3 className="text-gray-900 font-medium mr-2">John Doe</h3>
//                 <span className="text-gray-600 text-sm">4:30 PM</span>
//               </div>
//               <p className="text-gray-800">Hi there!</p>
//             </div>
//           </li>
//           <li className="flex items-start mb-4">
//             <img
//               className="w-8 h-8 rounded-full mr-3"
//               src="https://via.placeholder.com/48"
//               alt="Avatar"
//             />
//             <div className="flex-1">
//               <div className="flex items-center mb-1">
//                 <h3 className="text-gray-900 font-medium mr-2">Jane Smith</h3>
//                 <span className="text-gray-600 text-sm">4:35 PM</span>
//               </div>
//               <p className="text-gray-800">How are you?</p>
//             </div>
//           </li>
//         </ul>
//       </div>
//       <div className="flex-grow bg-white p-4">
//         <h2 className="text-lg font-medium mb-4">Chat Area</h2>
//         <ul className="mb-4">
//           <li className="flex items-start mb-4">
//             <img
//               className="w-8 h-8 rounded-full mr-3"
//               src="https://via.placeholder.com/48"
//               alt="Avatar"
//             />
//             <div className="flex-1">
//               <div className="flex items-center mb-1">
//                 <h3 className="text-gray-900 font-medium mr-2">John Doe</h3>
//                 <span className="text-gray-600 text-sm">4:30 PM</span>
//               </div>
//               <p className="text-gray-800">Hi there!</p>
//             </div>
//           </li>
//           <li className="flex items-start mb-4">
//             <img
//               className="w-8 h-8 rounded-full mr-3"
//               src="https://via.placeholder.com/48"
//               alt="Avatar"
//             />
//             <div className="flex-1">
//               <div className="flex items-center mb-1">
//                 <h3 className="text-gray-900 font-medium mr-2">Jane Smith</h3>
//                 <span className="text-gray-600 text-sm">4:35 PM</span>
//               </div>
//               <p className="text-gray-800">How are you?</p>
//             </div>
//           </li>
//         </ul>
//             <MessageInput />

//         {/* <form className="flex">
//           <input
//             className="flex-1 bg-gray-200 p-2 rounded-lg"
//             type="text"
//             placeholder="Type your message here..."
//           />
//           <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg ml-2">Send</button>
// </form> */}
// </div>
// </div>
//   );
// }

// export default ChatApp;
import { useState } from "react";

const ChatHistory = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there!",
      sender: "user",
    },
    {
      id: 2,
      text: "Hey, how are you?",
      sender: "friend",
    },
    {
      id: 3,
      text: "I'm doing pretty well, thanks for asking. How about you?",
      sender: "user",
    },
    {
      id: 4,
      text: "Not too bad. What have you been up to?",
      sender: "friend",
    },
    {
      id: 5,
      text: "Not much, just hanging out at home. How about you?",
      sender: "user",
    },
    {
      id: 6,
      text: "Same here. Did you catch the game last night?",
      sender: "friend",
    },
    {
      id: 7,
      text: "No, I didn't. Who won?",
      sender: "user",
    },
    {
      id: 8,
      text: "The Lakers beat the Suns in overtime.",
      sender: "friend",
    },
    {
      id: 5,
      text: "Not much, just hanging out at home. How about you?",
      sender: "user",
    },
    {
      id: 6,
      text: "Same here. Did you catch the game last night?",
      sender: "friend",
    },
    {
      id: 7,
      text: "No, I didn't. Who won?",
      sender: "user",
    },
    {
      id: 8,
      text: "The Lakers beat the Suns in overtime.",
      sender: "friend",
    },
    {
      id: 5,
      text: "Not much, just hanging out at home. How about you?",
      sender: "user",
    },
    {
      id: 6,
      text: "Same here. Did you catch the game last night?",
      sender: "friend",
    },
    {
      id: 7,
      text: "No, I didn't. Who won?",
      sender: "user",
    },
    {
      id: 8,
      text: "The Lakers beat the Suns in overtime.",
      sender: "friend",
    },
    {
      id: 5,
      text: "Not much, just hanging out at home. How about you?",
      sender: "user",
    },
    {
      id: 6,
      text: "Same here. Did you catch the game last night?",
      sender: "friend",
    },
    {
      id: 7,
      text: "No, I didn't. Who won?",
      sender: "user",
    },
    {
      id: 8,
      text: "The Lakers beat the Suns in overtime.",
      sender: "friend",
    },
    {
      id: 5,
      text: "Not much, just hanging out at home. How about you?",
      sender: "user",
    },
    {
      id: 6,
      text: "Same here. Did you catch the game last night?",
      sender: "friend",
    },
    {
      id: 7,
      text: "No, I didn't. Who won?",
      sender: "user",
    },
    {
      id: 8,
      text: "The Lakers beat the Suns in overtime.",
      sender: "friend",
    },
    {
      id: 5,
      text: "Not much, just hanging out at home. How about you?",
      sender: "user",
    },
    {
      id: 6,
      text: "Same here. Did you catch the game last night?",
      sender: "friend",
    },
    {
      id: 7,
      text: "No, I didn't. Who won?",
      sender: "user",
    },
    {
      id: 8,
      text: "The Lakers beat the Suns in overtime.",
      sender: "friend",
    }
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleMessageSend = () => {
    if (newMessage) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: newMessage,
          sender: "user",
        },
      ]);
      setNewMessage("");
    }
  };
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event : any) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event : any) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      // Do something with the input value, like send it to the server
      setInputValue("");
    }
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {messages.map((message) => (
       
        <div key={message.id} className={`mb-4 flex justify-${message.sender === "user" ? "end" : "start"}`}> 
        <div className={`${
              message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"
            } py-2 px-4 rounded-lg`}>
          {message.text}</div></div>
      ))}
       <div className="mt-auto ">
        <form onSubmit={handleSubmit}>
        <div className="flex items-center ">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type a message..."
          className="flex-grow p-2 rounded-lg mr-2"
          />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
          Send
        </button>
      </div>
    </form>
      </div>
    </div>
  );
};

export default ChatHistory;

