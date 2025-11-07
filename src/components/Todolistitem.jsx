import { Button } from "../Button.jsx";
import "tailwindcss";
// @import "tailwindcss";
import { useState,  } from "react"; 

export function Todolistitem( {l , d , c}){
    
 const [editmode, seteditmode]=useState(false);
// const lists1=[{
//     work: l || "work1",
//     status: true
// },
// {
//     work: "work22" ,
//     status: false
// }
    
//jkjj


// ];
const lists1=l || [];

 function edit(item){

        console.log("click2 fired!", item.work);
 const updatedList = lists1.map(i => 
        i.id === id ? {...i, work:e.target.value  }: i
    );
    c(updatedList);    }

  
//  const [renderTrigger, setRenderTrigger] = useState(false) // فقط برای رندر
//  useEffect(() => {
//         setRenderTrigger(prev => !prev);
//     }, [l]);
// const [lists1,setlists1]=useState(l);
function check(item)
    {
     const updatedList = lists1.map(i => 
         i.id === item.id ? {...i, status: !i.status} : i
           );
         c(updatedList);

     console.log()
     console.log("Updated list:", updatedList);

    }

//     return(
        
//     <span>
//  {  lists1.map((item) => ( 



//    <li key={item.id} className="relative flex items-center justify-between px-2 py-6 border-b">
                  
    
//       {
//         editmode ? 
//         (<span><input type="text" className=" text-red-700" checked={item.status || false } onChange={()=>{}}  value={"go to home"}/>
//     <Button l={l} d={d} id={item.id} c={c} z={item.work} s={seteditmode} edit={edit}/></span>  )
//         :
//         (<span><div>
//                         <input type="checkbox" className="" checked={item.status || false } onChange={()=>check(item)} />
//                         <p  className={`inline-block mt-1 ml-2 text-gray-700  border-opacity-50 focus:ring-offset-yellow-400 ${item.status ? 'line-through':''}  `}>{item?.work}</p>

                
//                     </div>
//                  < Button l={l} d={d} id={item.id} c={c} z={item.work} s={seteditmode} edit={edit}/>
//                  </span>
                
// )}

//     </li>

// ))}</span>



//     );

return( <li key={item.id} className="relative flex items-center justify-between px-2 py-6 border-b">
                  
    
      {
        editmode ? 
        (
        <span><input type="text" className=" text-red-700" checked={item.status || false } onChange={()=>{}}  value={"go to home"}/>
    <Button l={l} d={d} id={item.id} c={c} z={item.work} s={seteditmode} edit={edit}/></span>
      )
        :

        (
        <span><div>
                        <input type="checkbox" className="" checked={item.status || false } onChange={()=>check(item)} />
                        <p  className={`inline-block mt-1 ml-2 text-gray-700  border-opacity-50 focus:ring-offset-yellow-400 ${item.status ? 'line-through':''}  `}>{item?.work}</p>

                
                    </div>
                 < Button l={l} d={d} id={item.id} c={c} z={item.work} s={seteditmode} edit={edit}/>
                 </span>
                
)
}

    </li>);

}
