import React from 'react';
import s from './App.module.scss';
import Main from './Components/MainPage/MainPage'
function App() {
  return (
    <div>
      <div className={s.header}>
        <p>React Ad</p>
      </div>
    <div className={s.app}>
      <Main/>
    </div>
    </div>
  );
}

export default App;
