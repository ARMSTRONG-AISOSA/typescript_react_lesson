import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/typescript_react_lesson'>Home</Link>
            <Link to='/typescript_react_lesson/hook_test_page'>Hook-Test-Page</Link>
            <Link to='/typescript_react_lesson/prop_test_page'>Prop-Test-Page</Link>
            <Link to='/typescript_react_lesson/context_test_page'>Context-Test-Page</Link>
            <Link to='/typescript_react_lesson/enum_test_page'>Enum-Test-Page</Link>
        </div>
    )
}

export default Navbar
