import React, { useState } from "react";
import logo from "../../Image/logoPng.png";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { FaHome, FaUser } from 'react-icons/fa';
import { MdHomeRepairService, MdWebStories, MdContactPhone } from 'react-icons/md';



const Container = styled.div`
  position: fixed;

  .active {
    border-right: 4px solid #0085FF;
    i {
      color: #0085FF;
    }
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: var(--black);
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

// const Logo = styled.div`
//   width: 2rem;

//   img {
//     width: 100%;
//     height: auto;
//   }
// `;

const SlickBar = styled.ul`
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--black);

  padding: 2rem 0;

  position: absolute;
  top: 6rem;
  left: 0;

  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;

  display: flex;
  padding-left: 1rem;

  &:hover {
    border-right: 4px solid var(--white);

    i {
      color: var(--white);
    }

    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
    
  }

  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }

  i {
    color: #9ca3af;
  }

`;

const Text = styled.span`
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;
`;


const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  return (
    <Container className="z-50">
      <Button clicked={click} onClick={() => handleClick()}></Button>
      <SidebarContainer>

        {/* <Logo> */}
          <img className="w-30" src={logo} alt="logo" />
        {/* </Logo> */}

        <SlickBar clicked={click}>

          {/* home  */}
          <Item
            onClick={() => setClick(false)}
            exact
            activelass="active"
            to="/"
          >
            <i><FaHome className="w-6 h-6" /></i>
            <Text clicked={click}>Home</Text>
          </Item>

          {/* about  */}
          <Item
            onClick={() => setClick(false)}
            activeclass="active"
            to="/about"
          >
            <i><FaUser className="w-6 h-6" /></i>
            <Text clicked={click}>About</Text>
          </Item>

          {/* service */}
          <Item
            onClick={() => setClick(false)}
            activeclass="active"
            to="/services"
          >
            <i><MdHomeRepairService className="w-6 h-6" /></i>
            <Text clicked={click}>Service</Text>
          </Item>

          {/* project  */}
          <Item
            onClick={() => setClick(false)}
            activeclass="active"
            to="/project"
          >
            <i><MdWebStories className="w-6 h-6" /></i>
            <Text clicked={click}>Projects</Text>
          </Item>

          {/* contact  */}
          <Item
            onClick={() => setClick(false)}
            activeclass="active"
            to="/contact"
          >
            <i><MdContactPhone className="w-6 h-6" /></i>
            <Text clicked={click}>Contact</Text>
          </Item>

        </SlickBar>


      </SidebarContainer>
    </Container>
  );
};

export default Sidebar;
