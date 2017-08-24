import React from 'react';
import Page from '../layouts/main';
import UserMenu from '../components/UserMenu';

export default props => (
  <Page>
    <UserMenu url={props.url} />
  </Page>
);
