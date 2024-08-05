import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './style/Theme.jsx'
import { FiltersProvider } from './context/filter.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </ThemeProvider>
)
