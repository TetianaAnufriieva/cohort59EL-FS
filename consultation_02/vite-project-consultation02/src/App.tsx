import type { JSX } from 'react'
import './App.css'
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher'
import InputMirror from './components/InputMirror/InputMirror'

function App(): JSX.Element {

  return (
    <div>
     <ThemeSwitcher />
     <InputMirror />
    </div>
  )
}

export default App
