import { Routes, Route } from 'react-router-dom';
import './App.css';
import ErrorPage from './pages/errorPage/ErrorPage';
import Home from './pages/home/Home';

function App() {

  return (
    <main>
      {/* Navbar */}
      <Routes>
        <Route
          path='/typescript_react_lesson'
          element={<Home />}
        />
        {/* Catch all route for 404 erros */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </main>
  )
}

export default App
