

export function Button({l, d, id,c,z, s, edit})
{
    
    function click1(e){
console.log("r");
   d(id);
    }
const lists1=l || [];

    function edit1(){

        console.log("click2 fired!", z);
 const updatedList = lists1.map(i => 
        i.id === id ? {...i, work:"3"  }: i
    );
   
    c(updatedList);

    }
   
   return(
   
   <button type="button" className="absolute right-0 flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" onClick={()=>s(true)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"  />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-700" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" strokeWidth="2" onClick={click1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>);}