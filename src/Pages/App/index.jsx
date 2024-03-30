import './App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'

import NotFound from '../NotFound'
import SignIn from '../SignIn'

function App() {
  return (    
      <div className='bg-red-100'>
       <Home/>
       <MyAccount/>
       <MyOrder/>
       <MyOrders/>
       <NotFound/>
       <SignIn/>

      </div>      
  )
}

export default App
