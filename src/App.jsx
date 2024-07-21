import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import HeaderContent from './Components/HeaderContent/HeaderContent'
import BodyContent from './Components/BodyContent/BodyContent';
import SecondContent from './Components/SecondContent/SecondContent';
import FooterContent from './Components/FooterContent/FooterContent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <HeaderContent/>
      <BodyContent/>
      <SecondContent/>
      <FooterContent/>
      
    </>
  )
}

export default App
