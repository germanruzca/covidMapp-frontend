import React, { useState } from "react";
import { Search } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import getData from '../Card/index'

const Component = ({province, setProvince, getData}) => {
  const handleInputCharge = ({target}) => {
    setProvince(target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(province)
  }
  return (
    <Search>
      <Search.Input>
      <form onSubmit={handleSubmit}>
        <input
          name={"place"}
          placeholder={"Search for a place..."}
          type={"text"}
          readOnly={false}
          value={province}
          onChange={handleInputCharge}
        />
        <Search.Button onClick={()=> {
          console.log('Me cliclio')
          return getData()
        }}>
          <FontAwesomeIcon icon={faSearch} />
        </Search.Button>
      </form>
      </Search.Input>
    </Search>
  );
};

export { Component as Search };
export default Component;
