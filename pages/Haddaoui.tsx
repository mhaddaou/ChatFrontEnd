import axios from 'axios';
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

export default function Haddaoui({props} : any){
    return (
       <div className="flex flex-col h-full overflow-y-auto relative scrollbar scrollbar-thumb-green-400 scrollbar-w-1 scrollbar-track-slate-100 ">
        {props.map((prop : any) =>(
            <div key={prop.id} className={`mb-4 flex justify-${prop.id % 2 == 0  ? "end" : "start"}`}> <div className={`${
                props.id % 2 ==  0 ? "bg-blue-500 text-white" : "bg-blue-100"} py-2 px-4 rounded-lg`}>
            {prop.body}</div></div>
        ))}
       </div>
    );
}

export async function getStaticProps() {
    try{
       const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
       return {
         props: {props: res.data}, // will be passed to the page component as props
       }
    }catch(e){
        console.log(e);
    }
  }