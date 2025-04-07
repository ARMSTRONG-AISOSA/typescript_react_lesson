import { useContext } from 'react';
import { UserContext } from '../../context/UserContextProvider';
import './contextTestPage.css';

const ContextTestPage = () => {

    const { users, addUser, deleteUser, updateUser } = useContext(UserContext);

    return (
        <div>
            <h2>Context Api Test Page</h2>

            <div></div>
        </div>
    )
}

export default ContextTestPage
