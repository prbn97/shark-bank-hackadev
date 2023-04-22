import styled from "styled-components";



export const Container = styled.div`
  .mainContent-style{
  display: flex;
  justify-content: center;
  width: 984px;
  height: 472px;
  margin: auto;
  margin-top: 248px;
  gap: 161px;
  }
  .main_image-responsive{
    @media screen and (max-width: 1023px){
      display: none;
    }
  }

`;


export const Form = styled.div`
  min-width: 343px;
  height: 708px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

`;

export const FormTitle = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;

  color: #EBEBEB;
`;

export const FieldSet = styled.div`
  width: 343px;
  height: 344px;
  padding: 24px;

  background: #D9D9D9;
  border-radius: 26px;
  
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
  gap: 24px;

  .container_botoes{
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

`;


