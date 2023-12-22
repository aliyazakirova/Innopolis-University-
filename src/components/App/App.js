import React from 'react';
import Styles from './App.module.css';
// import Header from '../Header/Header';
// import Aside from '../Aside/Aside';
import Main from '../Main/Main';

function App() {
  return (
    <div className={Styles.wrapper}>
      {/* <Header></Header> */}
      {/* <Aside></Aside> */}
      <Main></Main> 
    </div>
  );
}

export default App;
