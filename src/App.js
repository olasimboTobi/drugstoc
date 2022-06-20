import {useState} from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Content from './components/Content'
// import {Routes, Route} from 'react-router-dom'
import Modal from './components/Modal'
import './App.css';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const HandleClick = ()=> {
    setIsOpen(true);
  }
  const HandleFalseClick = ()=> {
    setIsOpen(false);
  }
     
  return (
    <div className="app">
      <Header  toggle= {HandleClick}/>
      {isOpen && <Modal setIsOpen={ HandleFalseClick}/>}
      <Search/>
      {/* <Routes>
        <Route path="/addTask" element={<AddModal/>}/>
      </Routes> */}
      <Content/>
      
    </div>
  )
}

export default App;
