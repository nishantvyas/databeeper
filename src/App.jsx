import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="container">
      <h1 className="logo">
        data<span>beeper</span>
      </h1>
      <p className="tagline">Something great is in the works.</p>
      <span className="status">Coming Soon</span>
      <footer className="footer">
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <span className="divider">|</span>
          <Link to="/terms">Terms of Service</Link>
        </div>
        <p>&copy; 2025 DataBeeper LLC</p>
      </footer>
    </div>
  )
}

export default App
