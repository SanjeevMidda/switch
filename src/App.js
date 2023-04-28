import { useState } from 'react';
import './index.css';

function App() {

  const [status, setStatus] = useState(false);

  function changeContent(){
    setStatus(!status);
  }

  return (
    <div className="App">
   
    <div className="switch" onClick={changeContent}>S</div>

    <div className={status? "content" : "updateContent"}>
      <h1>CONTENT</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, consequatur? Sed, consequatur omnis explicabo cumque rem, eligendi optio nostrum asperiores doloremque dolorum perspiciatis sapiente sunt. Ut harum sed aperiam quo.</p>
    </div>
    </div>
  );
}

export default App;
