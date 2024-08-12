import { useState } from 'react'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import Feature from './components/features/Feature'
import Customers from './components/customers/Customers'
import Widget from './components/widget/Widget'
import Sidebar from './components/Sidebar'
import Weather from './components/Weather'
//import Test from './components/Test'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    
     <Header/>
     <Main/>
    <Feature/>
    <Customers/>
    <Widget/>   
    <Footer/> 
   </div>
  )
}

export default App
