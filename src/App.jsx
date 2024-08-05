import { TopBar } from './components/TopBar'
import { Routes } from './components/Routes'
import { SWRConfig } from 'swr'
import { UserProvider } from './context/user'
import { CartProvider } from './context/cart'

import './App.css'

function App() {
  return (
    <SWRConfig value={{
      fetcher: (...args) => fetch(...args).then(res => res.json()),
    }}>
      <UserProvider>
        <CartProvider>
          <TopBar />
          <Routes />
        </CartProvider>
      </UserProvider>
    </SWRConfig>
  )
}

export default App
