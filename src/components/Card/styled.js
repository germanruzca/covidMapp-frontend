import styled from "styled-components";
import { mobileDevice } from "../../constants/constants"



export const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #f8f9fa;
  width: 280px;
  height: 420px;
  position: absolute;
  padding-top: 20px;
  top: 360px;
  right: 40%;
  @media ${mobileDevice} {
    top: 400px;
    right: 50px;
  }

  /* border: solid 1px #000; */
`;

Card.Circle = styled.div`
  display: flex;
  width: 120px;
  height: 50px;
  margin: 0 30%;
  transform: translateY(-100%);
  padding-bottom: 8px;
`;
Card.Pieces = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 1px;
`;

Card.Title = styled.h1`
  color: #000000;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 500;
  margin: 1px;
`;

Card.Text = styled.h1`
  color: #000;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 500;
`;

Card.Safe = styled.h1`
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  color: ${props =>props.isSafe ? '#3d9' : '#e24a4a'};
  font-size: 20px;
`;

Card.More = styled.h1`
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  color: #e24a4a;
  font-size: 15px;
  > a{text-decoration: none;
  color: #000} 
`;

Card.MoreInfoPart = styled.div`
  display: flex;
  justify-content: center;
`;

Card.MoreInfo = styled.h1`
  margin: 0 20px;
  font-family: "Roboto", sans-serif;
  color: #e24a4a;
  font-size: 13px;
  > a{text-decoration: none;
  color: #000} 
`;

Card.Info = styled.div`
  display: flex;
  flex-direction: column;
`;
Card.InfoTitle = styled.div`
  align-self: center;
  font-family: "Roboto", sans-serif;
  color: #e24a4a;
  font-size: 20px;
  padding-bottom: 10px;
  font-weight: bold;
`;

Card.InfoData = styled.div`
  display: flex;
  justify-content: space-around;
`;

Card.InfoSquared = styled.div`
  display: flex;
  flex-direction: column;
`;
Card.InfoText = styled.div`
  text-align: center;
  color: #00c5ff;
  font-family: "Roboto", sans-serif;
`;
Card.InfoPara = styled.div`
  text-align: center;
  font-family: "Roboto", sans-serif;
`;

export default Card;
