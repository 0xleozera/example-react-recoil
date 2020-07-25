import React from 'react';
import { RecoilRoot } from 'recoil';

import UserPage from './pages/UsersPage';

function App() {
  return (
    <RecoilRoot>
      <UserPage />
    </RecoilRoot>
  );
}

export default App;
