import { useState } from 'react';
import Page from './components/Page';
import './index.css';

function App() {

  const [changePage, setChangePage] = useState(1);

  console.log(changePage);

  return (
    <div className="App">
      <div className="container">


     <Page pageNumber={1} passChangePage = {changePage} passSetChangePage = {setChangePage}/>
     <Page pageNumber={2} passChangePage = {changePage} passSetChangePage = {setChangePage}/>
     {/* <Page pageNumber={3} passChangePage = {changePage} passSetChangePage = {setChangePage}/>
     <Page pageNumber={4} passChangePage = {changePage} passSetChangePage = {setChangePage}/>
     <Page pageNumber={5} passChangePage = {changePage} passSetChangePage = {setChangePage}/>  */}

    <div className="second">
      <h1 className={changePage === 1? "show2" : "dontShow"}>Hello.</h1>
      <h1 className={changePage === 2? "show2" : "dontShow"}>Hello again.</h1>
      <h1 className={changePage === 3? "show2" : "dontShow"}>Hello again.</h1>

      </div>

      </div>
    </div>
  );
}

export default App;
