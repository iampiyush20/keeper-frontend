import React from 'react'
import "./App.css";
import Header from '../src/component/header/Header';
import Addkeeper from '../src/component/addkeeper/AddKeeper';
import Showkeeper from '../src/component/showkeeper/ShowKeeper'
const App = () => {
  return (
  <>
  <div className="App">
  <Header/>
 <Addkeeper />
 {/* <Showkeeper/> */}
  </div>
  </>
  )
}

export default App