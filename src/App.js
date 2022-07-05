import Articles from './components/Articles/Articles';
import Header from './components/Header/Header';
import {BrowserRouter, Route,Routes } from 'react-router-dom';
import About from './components/About/About';
const App =() => {
  return (
    <BrowserRouter>
    <Header/>
       <Routes>
      <Route path='/' exact element={<Articles/>}>
        </Route>
        <Route path='/about' element={<About/>}>
        </Route>
        </Routes>
        </BrowserRouter>
  );
}

export default App;
