import { useEffect, useState } from "react";


function App() {
    const [data, setData] = useState(null)
    const [toggle, setToggle] = useState(false)

    const onClick = () => setToggle(prev => !prev)

    useEffect(() => {
      const id = setTimeout(() => {
        setData({})
      }, 1000);
    
      return () => {
        clearTimeout(id)
      }
    }, [data])
    
  return (
    <div>
        {toggle &&  <div data-testid='toggle-elem'>toggle</div>}
        {data && <div style={{color: 'red'}}>data</div>}
        <h1>Hello world</h1>
        <button data-testid='toggle-btn' onClick={onClick}>click me</button>
        <input type='text' placeholder='input value'/>
    </div>
  );
}

export default App;
