import { createContext,useContext,useState ,useEffect} from "react"; 

const Context =createContext();


const Provider= ({children})=>{ 
    
    const [currentUsers,setcurrentUsers]=useState([])
    
    useEffect(() => {
        console.log("currentuser:",currentUsers)
     }, [currentUsers]);
     
    const data={
        currentUsers,
        setcurrentUsers
    }

    return(
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}
export default Provider;

export const Users=()=>useContext(Context)