import icono from '../assets/icono.png'
import { SearchIcon } from './icons/SearchIcon'

export function TopBar() {
  return (
    <header>
      <nav>
        <span>
          <img src={icono} alt="icono de facitodo" />
        </span>
        <form>
          <input type="text" />
          <button>
            <SearchIcon />
          </button>
        </form>
      </nav>
    </header>
  )
}