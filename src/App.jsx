import { Routes , Route, Link } from "react-router-dom";
import BlueColor from "./Blue.jsx";
import RedColor from "./Red.jsx";


const App = () => {
  

  return (
    <>
      <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <Link to='/'>Home</Link>
        <Link to='/red'>Red</Link>
        <Link to='/blue'>Blue</Link>    
       </div>
      <div id="main-section">
        <Routes>
          <Route path='/blue' element={BlueColor()}/>
          <Route path='/red' element={RedColor()}/>
          <Route path='/' element={''}/>
        </Routes>
        </div>
    </div>

    </>
  )
}

export default App
