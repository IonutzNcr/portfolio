import './App.css'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import { ContactPage } from './pages/ContactPage'
import { ProjetsPage } from './pages/ProjetsPage'
import { PresentationPage } from './pages/PresentationPage'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PresentationPage />} />
          <Route path="/projets" element={<ProjetsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
