import Helloword from "./components/Helloword";
import Container from "./components/Container";
import Image from "./components/Image";
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import {showtext} from '../src/redux/showtext'
function App() {
  const [text,setText] = useState('')
  const handleChange = (e) => {
    setText(e.target.value)
  }
  
  const dispatch = useDispatch()
  return (
    <div className="App">
      
      <Container>
      <input value={text} onChange={handleChange}/>
      <button onClick={() => dispatch(showtext(text))}>Showtext</button>
      <Helloword/>
      </Container>
      {/* <Image/> */}
    </div>
  );
}
export default App;
