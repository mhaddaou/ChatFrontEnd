import CircleImage from "../Circl";
import MessageInput from "../MessageInput";
import ContactList from "../listContact";
import ChatApp from "../ChatHistory";
import Avatar from "../Avatar";
import InputChat from "./Home";
export default function Tome() {
    return (
      <div className="bg-saliha">

    <div className="flex flex-row h-screen gap-1">
      <div className="w-1/4 bg-sky-900 p-4">
      <ContactList />
      </div>
      <div className="w-1/2 bg-rtn p-4 h-full">
      <ChatApp />
      </div>
      <div className="w-1/4 bg-sky-900 p-4">Input Field</div>
    </div>

      </div>
    );
        }