
import { useState ,useEffect  } from "react";
import { FiSend } from 'react-icons/fi';
import Avatar from "./Avatar";
import axios from "axios";
export default function ChatHistory({ chatHistory } : any) {
  // async function fetchData(url : string) {
  //   const response = await axios.get(url) ;
  //   return response.data;
  // }
  
  const [messages, setMessages] = useState([]);
  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetchData(props.url);
  //     setMessages(response);
  //   }
  //   getData();
  // }, []);

  const [newMessage, setNewMessage] = useState("");

  
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
        name: "med",
        "email": "lkdjf",
        body: inputValue,
      }]);}
    // setVal("");
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto relative scrollbar scrollbar-thumb-green-400 scrollbar-w-1 scrollbar-track-slate-100 scrollbar- ">
      <Avatar src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" name="mohamed haddaoui"/>
      {chatHistory.map((message : any) => (
       
        <div key={message.id} className={`mb-4 flex justify-${message.id %2 == 0  ? "end" : "start"}`}> 
        <div className={`${
              message.id % 2 == 0  ? "bg-blue-500 text-white" : "bg-blue-100"
            } py-2 px-4 rounded-lg`}>
          {message.body}</div></div>
         
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

