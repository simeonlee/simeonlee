import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 0 1em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: .15em;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  color: #FFF;
  opacity: 0.5;
  transition: opacity .15s ease-out;

  &:hover {
    opacity: 1.0;
  }

  &:active {
    color: #FFF;
  }
`;
