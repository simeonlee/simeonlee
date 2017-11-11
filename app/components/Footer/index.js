import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import ReachOut from './ReachOut';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <ReachOut>
        Get in touch
      </ReachOut>
      <section>
        <div>
          Instagram
        </div>
        <div>
          Twitter
        </div>
        <div>
          LinkedIn
        </div>
      </section>
    </Wrapper>
  );
}

export default Footer;
