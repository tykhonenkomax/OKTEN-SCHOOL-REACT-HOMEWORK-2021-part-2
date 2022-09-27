import React from 'react';

import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()

  return (
      <div>
      <RoutesStyle>
        <NavLink to={'/home'}>HOME</NavLink>
        <NavLink to={'/users'}>USERS</NavLink>
        <NavLink to={'/posts'}>POSTS</NavLink>
        <NavLink to={'/about'}>ABOUT</NavLink>
      </RoutesStyle>
        <hr/>
        <hr/>
      <ButtonPositionStyle>
        <ButtonStyle onClick={()=>navigate(-1)}>PREV</ButtonStyle>
        <ButtonStyle onClick={()=>navigate(1)}>NEXT</ButtonStyle>
      </ButtonPositionStyle>
        <hr/>
        <hr/>
        <br/>
      </div>
  );
};


const RoutesStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: tomato;
  height: 100px;
`
const ButtonPositionStyle = styled.div`
  display: flex;
  justify-content: center;
`
const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
border: 2px solid black;
  height: 50px;
  width: 150px;
  margin-left: 50px;
  font-family: "Andale Mono",serif;
`

export {Header};

