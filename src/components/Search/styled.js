  import styled from "styled-components";
  import { mobileDevice } from "../../constants/constants"

  export const Search = styled.div`
    display: flex;
    width: 50%;
    height: 50px;
    background: #f8f9fa;
    border-top-left-radius: 50px !important;
    border-bottom-left-radius: 50px !important;
    border-top-right-radius: 50px !important;
    border-bottom-right-radius: 50px !important;
    position: absolute;
    top: 40px;
    right: 25%;
    @media ${mobileDevice} {
      width: 80%;
      top: 50px;
      right: 60px;
    }
  `
  Search.Button = styled.button`
  position: relative;
    left: 700px;
    top: -30px;
    background: transparent;
    border: transparent;
    font-size:35px;
    cursor: pointer;
    @media ${mobileDevice} {
      font-size:30px;
      top: -28px;
      left: 285px;
    }
  `

  Search.Input = styled.div`
    font-family: "Roboto", sans-serif;
    padding: 16px;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    > form > input {
      -webkit-appearance: none;
      -moz-appearance: textfield;
      width: 100%;
      margin-right: 5px;
      font-size: 20px;
      background-color: transparent;
      color: #212529;
      border: none;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
  `;



  export default Search;