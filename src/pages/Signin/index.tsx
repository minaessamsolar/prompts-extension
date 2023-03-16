import React, { FC } from 'react';

import ExtensionLayout from '../../components/Layout/ExtensionLayout';
 
import SettingIcon from '../../assets/image/setting.png'
import { ButtonWrapper, Container,InnerContainer } from './styles';
import { TitleDiv,QuestionDiv,CreateDiv ,SelectDiv,SelectWrapper,FooterDiv} from './styles'; 
import { PageStatus } from '../../utils/index'; 
import PromptItem from '../../components/PromptItem';
interface HomeProps {
  pageHandler : React.Dispatch<React.SetStateAction<PageStatus>>
}

const Signin: FC<HomeProps> = ({ pageHandler}) => {
  
  return (
    <ExtensionLayout previousPage=''>
          <Container>
              <InnerContainer>
                
                <TitleDiv>
                  <div>
                    Create a new Prompt
                  </div>
                  <img src =  {SettingIcon} style = {{width : 20,height : 20}}/>
                </TitleDiv>
                <QuestionDiv>                  
                    <p>Are you happy with Pitch Helper? </p>
                    <ButtonWrapper>
                      <button> Yes </button>
                      <button> No </button>
                    </ButtonWrapper>
                </QuestionDiv>
                <CreateDiv>
                  <p> 3 Pitches found for @analyticindex.com</p>
                  <div style = {{cursor : 'pointer'}} > <b>+ Create new Prompt</b></div>
                </CreateDiv>
                <SelectDiv>
                    <SelectWrapper>
                      <select>       
                        <option value="html">Type</option>
                      </select>
                      <select style ={{width : 120}}>       
                        <option value="html">Departments</option>
                      </select>
                    </SelectWrapper>
                    <select style ={{width : 120,fontSize :11,height :25}}>       
                      <option value="html">Search a Prompt</option>
                    </select>
                </SelectDiv>
                <div style = {{maxHeight : 185,overflow :'auto'}}>
                  <PromptItem title = "Analytic Index prompts" count = {2} />
                  <PromptItem title = "Analytic Index prompts" count = {2} />
                  <PromptItem title = "Analytic Index prompts" count = {2} />
                  <PromptItem title = "Analytic Index prompts" count = {2} />
                  <PromptItem title = "Analytic Index prompts" count = {2} />
                  <PromptItem title = "Analytic Index prompts" count = {2} />
                </div>
              <FooterDiv>
                <p>Save Leads in</p>
                <select>
                  <option>
                      Mike's Leads
                  </option>
                </select>
              </FooterDiv>
              </InnerContainer>
             
          </Container>
    </ExtensionLayout>
  );
};

export default Signin;