import React from 'react'
import {HashRouter, Route} from 'react-router-dom'
import './App.css'
import {HomePage, LoginPage} from "./pages";

const App: React.FC = () => {
  return (
      <div>
        <HashRouter hashType='hashbang'>
            <Route exact path='/' component={LoginPage} />
            <Route path='/home' component={HomePage} />
        </HashRouter>
      </div>
  )
}

export default App
