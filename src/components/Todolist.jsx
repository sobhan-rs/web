
import { Button } from "../Button.jsx";
import { Todolistitem } from "./Todolistitem.jsx";

export function Todolist({l , d ,c}){

return(

    <div>

        <ul className="list-reset">
                 <Todolistitem l={l} d={d} c={c}/>
                
                </ul>
    </div>
)

}