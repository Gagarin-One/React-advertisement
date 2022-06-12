import React from 'react';
import s from './App.module.scss';
import Main from './Components/MainPage/MainPage'
function App() {
  return (
    <div className={s.app}>
      <div className={s.header}>
        <p>React Ad</p>
      </div>
      <Main/>
    </div>
  );
}

export default App;
