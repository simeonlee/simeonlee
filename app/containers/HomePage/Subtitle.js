import Section from './Section';

const Subtitle = Section.extend`
  // text-align: center;
  // font-style: italic;
  color: white;
  z-index: 999;
  font-size: 24px;
  position: relative;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  text-decoration: none;
  font-family: kepler-std-display, georgia, serif;
  letter-spacing: .04em;
  // font-weight: 100;
  font-style: italic;
  margin: 24px 30% 0 0;
  padding: 0;
  width: 36%;
  min-width: 360px;
  line-height: 1.4em;
`;

export default Subtitle;