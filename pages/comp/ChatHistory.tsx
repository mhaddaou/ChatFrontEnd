
import { useState ,  } from "react";
import { FiSend } from 'react-icons/fi';
import Avatar from "./Avatar";
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
    // {
    //   id: 5,
    //   text: "Not much, just hanging out at home. How about you?",
    //   sender: "user",
    // },
    // {
    //   id: 6,
    //   text: "Same here. Did you catch the game last night?",
    //   sender: "friend",
    // },
    // {
    //   id: 7,
    //   text: "No, I didn't. Who won?",
    //   sender: "user",
    // },
    // {
    //   id: 8,
    //   text: "The Lakers beat the Suns in overtime.",
    //   sender: "friend",
    // },
    // {
    //   id: 5,
    //   text: "Not much, just hanging out at home. How about you?",
    //   sender: "user",
    // },
    // {
    //   id: 6,
    //   text: "Same here. Did you catch the game last night?",
    //   sender: "friend",
    // },
    // {
    //   id: 7,
    //   text: "No, I didn't. Who won?",
    //   sender: "user",
    // },
    // {
    //   id: 8,
    //   text: "The Lakers beat the Suns in overtime.",
    //   sender: "friend",
    // },
    // {
    //   id: 5,
    //   text: "Not much, just hanging out at home. How about you?",
    //   sender: "user",
    // },
    // {
    //   id: 6,
    //   text: "Same here. Did you catch the game last night?",
    //   sender: "friend",
    // },
    // {
    //   id: 7,
    //   text: "No, I didn't. Who won?",
    //   sender: "user",
    // },
    // {
    //   id: 8,
    //   text: "The Lakers beat the Suns in overtime.",
    //   sender: "friend",
    // }
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

      setInputValue("");
    }
  };
  const click = ()=>{
    {
      // var r : string= messages.length % 2 == 0 ? "user" : "friend";
      if (inputValue != "")
      setMessages([...messages, {
        id: messages.length + 1,
        text: inputValue,
        
        sender: "friend",
      }]);}
    // setVal("");
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto relative scrollbar scrollbar-thumb-green-400 scrollbar-w-1 scrollbar-track-slate-100 scrollbar- ">
      <Avatar src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" name="mohamed haddaoui"/>
      {messages.map((message) => (
       
        <div key={message.id} className={`mb-4 flex justify-${message.sender === "user" ? "end" : "start"}`}> 
        <div className={`${
              message.sender === "user" ? "bg-blue-500 text-white" : "bg-blue-100"
            } py-2 px-4 rounded-lg`}>
          {message.text}</div></div>
         
      ))}
       <div className="mt-auto sticky bottom-0  ">
        <form onSubmit={handleSubmit}>
        <div className="flex items-center ">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type a message..."
          className="flex-grow p-2 rounded-lg mr-2 bg-bginp w-2 sm:w-full h-full"
          />
          <button type="submit" onClick={click}><FiSend className=" text-white w-5 h-5 mr-2 " /></button>
       
      </div>
    </form>
      </div>
      {/* <Link href="/Read">Read input</Link> */}
    </div>
    
  );
};

export default ChatHistory;

