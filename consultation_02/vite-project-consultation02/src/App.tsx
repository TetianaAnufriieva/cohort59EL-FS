import type { JSX } from 'react'
import './App.css'
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher'
import InputMirror from './components/InputMirror/InputMirror'
import { ThemeSwitcherFromTeacher } from './components/ThemeSwitcherFromTeacher/ThemeSwitcherFromTeacher'
import { InputMirrorFromTeacher } from './components/InputMirrorFromTeacher/InputMirrorFromTeacher'

function App(): JSX.Element {

  return (
    <div>
     <ThemeSwitcher />
     <ThemeSwitcherFromTeacher />
     <InputMirror />
     <InputMirrorFromTeacher />
    </div>
  )
}

export default App
