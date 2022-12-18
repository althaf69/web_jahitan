import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import Login from './components/Login'
import Register from './components/Register'
import Home from './Pages/Home'
import { Routes, Route} from 'react-router-dom';
import { BrowserView } from 'react-device-detect';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Suspense>
      <BrowserView>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path= '/login' element={<Login />} />
        <Route path= '/register' element={<Register />} />
      </Routes>
      </BrowserView>
    </Suspense>
  )
}

export default App
