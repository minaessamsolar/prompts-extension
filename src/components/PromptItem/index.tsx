import React,{FC} from "react";
import { Container,ToolDiv } from "./styles";


interface Propsprops {
    title : string,
    count : number
}
 const PromptItem : FC<Propsprops> = ({title,count}) =>{

    return (
        <Container>
            <p>
                {title}
            </p>
            <ToolDiv>
                <button>Open</button>
                <select>
                    <option>{count} sources</option>
                </select>
            </ToolDiv>
        </Container>
    )
}
export default PromptItem;