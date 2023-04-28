import CircleImage from "../Circl";
import MessageInput from "../MessageInput";
import ContactList from "../listContact";
import ChatApp from "../ChatHistory";
import InputChat from "./Home";
export default function Tome() {
    return (
      <>

    <div className="flex flex-row h-screen">
      <div className="w-1/4 bg-gray-100 p-4">
      <ContactList />
      </div>
      <div className="w-1/2 bg-white p-4">
      <ChatApp />
      </div>
      <div className="w-1/4 bg-gray-100 p-4">Input Field</div>
    </div>

      </>
    );
        }