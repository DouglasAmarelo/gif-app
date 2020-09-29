import React from 'react';

// import Random from '../Random_V1';
// import Tag from '../Tag_V1';

import Random2 from '../Random_V2';
import Tag2 from '../Tag_V2';

import * as S from './App.style';

const App = () => (
  <S.AppContainer>
    <h1>Random GIF Application</h1>

    <S.MainContainer>
      {/* <Tag />
      <Random /> */}
      <Tag2 />
      <Random2 />
    </S.MainContainer>
  </S.AppContainer>
);

export default App;
