import { useState } from "react";
import ChatApp from "../ChatApp";
import ChatHistory from "../ChatHistory";
import Link from "next/link";


export default function Tome() {
  const [chatHistory, setChatHistory] = useState([]);

  function handleContactClick(contactId : any) : void{
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${contactId}`)
      .then(response => response.json())
      .then(data => {
        setChatHistory(data);
      });
  }

  
    
  return (
    <div className="bg-saliha">
      <div className="flex flex-row h-screen gap-1">
        <div className="w-1/4 bg-sky-900 p-4">
          <ContactList onContactClick={handleContactClick} />
        </div>
        <div className="w-1/2 bg-rtn p-4 h-full">
          <ChatHistory chatHistory={chatHistory} />
        </div>
        <div className="w-1/4 bg-sky-900 p-4">Input Field</div>
      </div>
    </div>
  );
}

function ContactList({  onContactClick }) {
  const contacts = [
    { id: 1, name: 'Alice' ,img: "https://cdn.intra.42.fr/users/0b44db41c0aff8300d8d24f0717cc7da/smia.jpg",},
    { id: 2, name: 'Bob',img: "https://cdn.intra.42.fr/users/d4d754cbf571f0b52778dfedbd79de0f/mhaddaou.jpg", },
    { id: 3, name: 'Charlie',img: "https://cdn.intra.42.fr/users/d4d754cbf571f0b52778dfedbd79de0f/mhaddaou.jpg", }
  ];

  function handleClick(contactId) {
    onContactClick(contactId);
  }

  return (
  // 
  <div>
      <h2 className="text-lg font-medium mb-4">Contacts</h2>


    <ul>
    {contacts.map((contact) =>(
          <li className="flex items-center py-2">
            <Link href={contact.img}>
            <img className="w-8 h-8 rounded-full mr-3" src={contact.img} alt="" />
            </Link>
            <button key={contact.id} onClick={()=>handleClick(contact.id)}>
            <div className="flex-1">
            <h3 className="text-gray-900 font-medium">{contact.name}</h3>
            {/* <p className="text-gray-600 text-sm">{contact.lastMessage}</p> */}
          </div>
            </button>
          </li>
        ))}

     
    </ul>
  </div>
  );
}


