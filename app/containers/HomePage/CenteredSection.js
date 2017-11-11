import Section from './Section';

const CenteredSection = Section.extend`
  // text-align: center;
  color: white;
  z-index: 999;
  font-size: 72px;
  position: relative;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  text-decoration: none;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 100;
  letter-spacing: .05em;
  margin: 0 6% 15px 0;
  padding: 0;
  width: 60%;
  min-width: 360px;
  line-height: 1.3em;
`;

export default CenteredSection;
