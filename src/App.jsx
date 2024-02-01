import { useState } from 'react';
import Modal from './Modal';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="modal">
      <h1>User Details Modal</h1>
      <button onClick={()=> setIsOpen(true)}>Open Form</button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  )
}

export default App
