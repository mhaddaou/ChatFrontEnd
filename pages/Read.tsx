import { useState } from 'react';

export default function MyForm() {
  const [val, setVal] = useState("");
  const [messages, setMessages] = useState([{
    id: 1,
    message: "Hello World"
  },
  {
    id: 2,
    message: "Hy"
  },]);
  const click = ()=>{
    setMessages([...messages, {
      id: messages.length + 1,
      message: val
    }]);
    // setVal("");
  }

  return (
    <div className='flex items-center justify-center mt-9'>
      <div>{
        messages.map((message) =>{
          return <div key={message.id}>{message.message}</div>
        })
        }</div>
      <input placeholder='write here' onChange={(e) =>{
        setVal(e.target.value) 
      }}>
      </input>
      <button onClick={click}>add</button>
    </div>
  );

}
