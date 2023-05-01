/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {useState} from "react";
import ChatHistory from "./ChatHistory";
const ListContact = () => {
  const [contacts, setContacts] = useState([{
    name: "mohamed haddaoui",
    img: "https://cdn.intra.42.fr/users/d4d754cbf571f0b52778dfedbd79de0f/mhaddaou.jpg",
    lastMessage: "Hello",
  },{
    name: "said mia",
    img: "https://cdn.intra.42.fr/users/0b44db41c0aff8300d8d24f0717cc7da/smia.jpg",
    lastMessage: "are you there?",
    url: "https://jsonplaceholder.typicode.com/posts",
  }]);
  return (
    <div>
      <h2 className="text-lg font-medium mb-4">Contacts</h2>
      <ul>
        {contacts.map((contact) =>(
          <li className="flex items-center py-2">
            <Link href={contact.img}>
            <img className="w-8 h-8 rounded-full mr-3" src={contact.img} alt="" />
            </Link>
            <Link href={<ChatHistory url={contact.url}/>}>
            <div className="flex-1">
            <h3 className="text-gray-900 font-medium">{contact.name}</h3>
            <p className="text-gray-600 text-sm">{contact.lastMessage}</p>
          </div>
            </Link>
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default ListContact;
