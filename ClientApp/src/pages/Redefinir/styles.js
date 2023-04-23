import styled from "styled-components";



export const Container = styled.div`
  .mainContent-style{
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  margin: 5rem;
  /*margin-top: 248px;*/
  gap: 8rem;
  }
  .main_image-responsive{
    @media screen and (max-width: 64rem){
      display: none;
    }
  }

`;


export const Content = styled.div`
  min-width: 21.5rem;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

`;

export const ContainerContentTitle = styled.div`
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.75rem;

  color: #EBEBEB;
`;

export const ContainerContentField = styled.div`
  width: 21.5rem;
  height: 343px;
  padding: 1.5rem;

  background: #D9D9D9;
  border-radius: 1.5rem;
  
  .fieldSet_text{
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #101626;
  }

  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  .container_botoes{
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

`;


