import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: #FFF;
  opacity: 0.5;
  transition: opacity .15s ease-out;
  margin: 16px;

  &:hover {
    opacity: 1.0;
  }

  &:active {
    color: #FFF;
  }
`;
