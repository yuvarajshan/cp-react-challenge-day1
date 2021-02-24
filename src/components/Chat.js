import { InfoOutlined, StarBorderOutlined as StarBorderOutlinedIcon } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

const Chat = () => {
    return (
       <Container>
           <ContainerHeader>
             <Main>
                <ChannelHeader>
                    <ChannelName>
                        # cp-channel                     
                    </ChannelName>
                    <StarBorderOutlinedIcon/>     
                </ChannelHeader>
                <ChannelDescription>
                    Company based announcements and work based matters 
                </ChannelDescription>
             </Main>  
            
             <DetailsContainer>
                <DetailsLink>
                    Details 
                </DetailsLink>
                <InfoOutlined/>
             </DetailsContainer>   
           </ContainerHeader>      
        </Container>       
    )
}

export default Chat

const ContainerHeader = styled.div`
    border-bottom:1px solid darkslategray;
     display:flex;
     padding-bottom:8px;  
`

const Main = styled.div`
    display:flex;  
    flex-direction: column;
    margin-left:16px;
    margin-top:8px;
    color:white;
`

const Container = styled.div`    
   background-color:#232323;
`

const ChannelHeader = styled.div`
    display:flex;

    svg{
        font-size:17px;
    }
`

const ChannelName = styled.div`
    font-size:14px;
    font-weight: bold;
`

const DetailsContainer = styled.div`
    display:flex;
    align-items:center;
    padding-right:16px;
    position:absolute;
    right:0;
    color: lightgray;
    margin-top:10px;
    
    svg{
        font-size:20px;
        font-weight:700;
    }
`

const DetailsLink = styled.div`
    margin-right: 6px;    
`

const ChannelDescription = styled.div`
    display:block;
    color:lightgray;
    margin-top:12px;
    font-size:13px;
`;
