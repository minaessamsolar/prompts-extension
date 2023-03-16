
import React, { FC,ReactNode } from 'react';

import {  
       Container ,
       PreviousLink
} from './styles';
import LeftIcon from '../../../assets/image/left_arrow.png'
 

interface ExtensionLayoutProps {
  previousPage : string,
  children ?: ReactNode
}

const ExtensionLayout: FC<ExtensionLayoutProps> = ({ previousPage,children}) => {
 
return (
    <Container>
        { previousPage != '' &&
        <PreviousLink >
           <span>
            <img src = {LeftIcon}/>
                <a href = {previousPage} >Back</a> 
           </span>
        </PreviousLink> }
       {children}
    </Container>
  );
};

export default ExtensionLayout;