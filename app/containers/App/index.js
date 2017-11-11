/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
// import PortfolioPage from 'containers/PortfolioPage/Loadable';
// import AboutPage from 'containers/AboutPage/Loadable';
// import ResumePage from 'containers/ResumePage/Loadable';
// import BlogPage from 'containers/BlogPage/Loadable';
// import ContactPage from 'containers/ContactPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s | Simeon Lee"
        defaultTitle="Simeon Lee"
      >
        <meta name="description" content="Simeon Lee's online porfolio" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/*
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/resume" component={ResumePage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/contact" component={ContactPage} />
        */}
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/*
      <Footer />
      */}
    </AppWrapper>
  );
}
