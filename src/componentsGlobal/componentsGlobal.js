import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  background-color: salmon;
  border: solid black 3px;
  border-radius: 1rem;
  margin-top: 3rem;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  background-color: whitesmoke;
  border: black solid 3px;
  border-radius: 1rem;
  padding: 0.5em;
  margin: 1rem;
  color: black;
  font-weight: 700;

  hover: {
    transform: scale(1.2);
  }
`;
