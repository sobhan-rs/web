import { useState } from "react";
import { Button } from "../Button.jsx";
import { Todolist } from "../components/Todolist.jsx";
import { v4 as uuidv4 } from 'uuid';


export function Todos(){
    const [inputmatn,setinputmatn]=useState('');
    const [todo,settodo]=useState([{work:"goto work",status:false, id:1},{work:"comeback" ,status:false,  id:2}]);

    function onchang1(e){
        setinputmatn(e.target.value)
}
    function addwork(e) {console.log(e.key);
        if (e.key === "Enter" && inputmatn.trim() !== '') {
            // // اضافه کردن کار جدید به لیست
            settodo([  { work: inputmatn ,status:false , id:uuidv4()},...todo ]);
            // // پاک کردن input
            setinputmatn('');
            
        }
    }
    function del(ltd){

        // settodo([]);

let v= todo.filter((b)=> 
    {return b.id !==ltd});
      console.log(v);
      settodo(v);

    }



    return(
    <div className="bg-pink-100 min-h-screen">
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full px-4 py-8  shadow bg-white">
                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP sobhan</h1>
                </div>
                <div className="relative">
                    <input type="text" placeholder="What needs to be done today?"
                    className="w-full px-2 py-3 border rounded outline-none border-grey-600"  value={inputmatn} onKeyDown={addwork} onChange={onchang1} />
                </div>
                <Todolist l={todo} d={del} c={settodo}/>
            </div>
        </div>
         
    </div>
   
)


}