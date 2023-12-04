import { TopBar } from './components/TopBar'
import { Routes } from './components/Routes'
import { SWRConfig } from 'swr'


import './App.css'

function App() {
  return (
    <SWRConfig value={{
      fetcher: (...args) => fetch(...args).then(res => res.json()),
    }}>
      <TopBar />
      <Routes />
    </SWRConfig>
  )
}

export default App
