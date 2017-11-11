/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Subtitle from './Subtitle';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Module from './Module';
import Background from './sect--1__bg.jpg';
import Img from './Img';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Simeon Lee's online porfolio homepage" />
        </Helmet>
        <div>
          <Module>
            <Img src={Background} alt="Simeon Lee - sect--1__bg" />
            <CenteredSection>
              Engineer of Bits and Designer of Pixels
            </CenteredSection>
            <Subtitle>
              Hey, I'm Simeon Lee, welcome to my corner of the internet.
              I'm a software engineer interested in the practical execution 
              of business ideas and artful experiences.
            </Subtitle>
            <Subtitle>
              Currently I work at Primary Data, where I manage the implementation of 
              an extraordinarily data-intensive user interface by day, but I like to tinker
              with ideas and explore the world of photography by night. Thanks for visiting,
              don't forget to check out some of the stuff I've made recently in my portfolio
              and check out my photography to see where I've been recently.
            </Subtitle>
          </Module>
          <Module style={{background: '#edeeef', minHeight: 'auto', padding: '96px 60px'}}>
            Blah
          </Module>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);

/*
<Section>
  <H2>
    <FormattedMessage {...messages.trymeHeader} />
  </H2>
  <Form onSubmit={this.props.onSubmitForm}>
    <label htmlFor="username">
      <FormattedMessage {...messages.trymeMessage} />
      <AtPrefix>
        <FormattedMessage {...messages.trymeAtPrefix} />
      </AtPrefix>
      <Input
        id="username"
        type="text"
        placeholder="mxstbr"
        value={this.props.username}
        onChange={this.props.onChangeUsername}
      />
    </label>
  </Form>
  <ReposList {...reposListProps} />
</Section>
*/