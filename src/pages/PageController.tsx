import React,{ useState, useEffect, ReactNode} from "react";
import { PageStatus } from "../utils/";
import Signin from "./Signin";
 
export const PageController = ()=>{
    
    const [currentPage,setCurrentPage] = useState<PageStatus>(PageStatus.SIGNIN)
     

    function renderPage(currentPage : PageStatus):any{
        switch(currentPage){
            case PageStatus.SIGNIN :
                return <Signin pageHandler = {setCurrentPage}/>    
            break;
            
            case PageStatus.SIGNUP :
                 return <Signin pageHandler = {setCurrentPage}/>
            break;
        }
    }

 return renderPage(currentPage);
}