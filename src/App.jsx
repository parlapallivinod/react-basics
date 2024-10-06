import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReduxExmples from './components/ReduxExamples'
import Home from './components/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/redux' element={<ReduxExmples />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
