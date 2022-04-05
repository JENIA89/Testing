// import { useEffect, useState } from "react";


// function App() {
//     const [data, setData] = useState(null)
//     const [toggle, setToggle] = useState(false)
//     const [value, setValue] = useState('')

//     const onClick = () => setToggle(prev => !prev)

//     useEffect(() => {
//       const id = setTimeout(() => {
//         setData({})
//       }, 1000);
    
//       return () => {
//         clearTimeout(id)
//       }
//     }, [data])
    
//   return (
//     <div>
//         <h1 data-testid='value-elem'>{value}</h1>
//         {toggle &&  <div data-testid='toggle-elem'>toggle</div>}
//         {data && <div style={{color: 'red'}}>data</div>}
//         <h1>Hello world</h1>
//         <button data-testid='toggle-btn' onClick={onClick}>click me</button>
//         <input onChange={e => setValue(e.target.value)} type='text' placeholder='input value'/>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import {Link} from 'react-router-dom'

import AppRouter from './router/AppRouter'

const App = () => {
  return (
    <div>
        <Link to='/' data-testid='main-link'>Main</Link>
        <Link to='/about' data-testid='about-link'>About</Link>
        <Link to='/users' data-testid='users-link'>Users</Link>
        <AppRouter />
    </div>
  )
}

export default App