import React from 'react';
import Layout from './components/layout';
import Profile from './components/profile';
import { ResetCSS } from './global/resetCSS.js';
const App = () => {
  return (
    <main>
          <ResetCSS />
      <Layout>
        <Profile />
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
};

export default App;
