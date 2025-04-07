import { Routes, Route } from 'react-router-dom';
import './App.css';
import ErrorPage from './pages/errorPage/ErrorPage';
import Home from './pages/home/Home';
import PropTestPage from './pages/propTestPage/PropTestPage';
import HooksTestPage from './pages/hooksTestPage/HooksTestPage';
import Navbar from './components/navbar/Navbar';
import ContextTestPage from './pages/contextTestPage/ContextTestPage';
import EnumTestPage from './pages/enumTestPage/EnumTestPage';

function App() {

  return (
    <main>
      <Navbar />
      <Routes>
        <Route
          path='/typescript_react_lesson'
          element={<Home />}
        />
        <Route
          path='/typescript_react_lesson/prop_test_page'
          element={<PropTestPage />}
        />
        <Route
          path='/typescript_react_lesson/hook_test_page'
          element={<HooksTestPage />}
        />
        <Route
          path='/typescript_react_lesson/context_test_page'
          element={<ContextTestPage />}
        />
        <Route
          path='/typescript_react_lesson/enum_test_page'
          element={<EnumTestPage />}
        />
        {/* Catch all route for 404 erros */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </main>
  )
}

export default App
