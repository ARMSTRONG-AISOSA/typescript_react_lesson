import './contextTestPage.css';
import React, { useContext, useState } from 'react';
import { User, UserContext } from '../../context/UserContextProvider';
import { v4 as uuidv4 } from 'uuid'; //Note-Index =>2.1

const ContextTestPage = () => {

    const { users, addUser, deleteUser, updateUser } = useContext(UserContext);

    // Temporary state for form input
    const [newUser, setNewUser] = useState({
        name: "",
        age: "",
        gender: "",
        profession: "",
        isMarried: false,
        hobbies: ""
    });

    //Note-Index =>2.2
    // Handle input changes
    // This function handles input field changes in a form 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        // extract key data(name, value, type, and checked) from e.
        const { name, value, type, checked } = e.target;


        // Updating the state object newUser using setNewUser.
        setNewUser((prev) => ({

            // For understanding chexk Index =>2.2
            ...prev, [name]: type === "checkbox" ? checked : value,
        }));

    };

    const handleAddUser = () => {
        const userToAdd: User = {
            id: uuidv4(),
            name: newUser.name,
            age: Number(newUser.age),
            gender: newUser.gender,
            profession: newUser.profession,
            isMarried: newUser.isMarried,
            hobbies: newUser.hobbies.split(",").map((h) => h.trim())
        };

        // Calling the function "addUser" and passing in the "userToAdd" variable
        addUser(userToAdd);

        // Resetting the "newUser" value
        setNewUser({
            name: "",
            age: "",
            gender: "",
            profession: "",
            isMarried: false,
            hobbies: ""
        });
    }

    return (
        <div className='container'>
            <h2>Context Api Test Page</h2><br />

            <h3>Add User</h3>

            <div className='formFields'>
                <label htmlFor="name">Name: </label>
                <input type="text" placeholder='Enter Your Name' name='name' id='name' value={newUser.name} onChange={handleChange} />

                <label htmlFor="age">Age: </label>
                <input type="number" placeholder='Enter Your Age' name='age' id='age' value={newUser.age} onChange={handleChange} />

                <label htmlFor="gender">Gender: </label>
                <input type="text" placeholder='Enter Your Gender' name='gender' id='gender' value={newUser.gender} onChange={handleChange} />

                <label htmlFor="profession">Profession: </label>
                <input type="text" placeholder='Enter Your Profession' name='profession' id='profession' value={newUser.profession} onChange={handleChange} />

                <label htmlFor="hobbies">Hobbies: </label>
                <input type="text" placeholder='Hobbies (comma-separated)' name='hobbies' id='hobbies' value={newUser.hobbies} onChange={handleChange} />

                <label htmlFor="isMarried">Are you married: <input type="checkbox" name='isMarried' id='isMarried' checked={newUser.isMarried} onChange={handleChange} /></label>

                {/* Button */}
                <div className='formBtn'>
                    <button
                        onClick={handleAddUser}
                    >Add User</button>
                </div>

                <hr />

                <h3>All Users</h3>

                <div>
                    {users?.length ? (
                        users.map((user) => (
                            <div key={user.id} className='userData'>
                                <p><b>Name:</b> {user.name}</p>
                                <p><b>Age:</b> {user.age}</p>
                                <p><b>Gender:</b> {user.gender}</p>
                                <p><b>Profession:</b> {user.profession}</p>
                                <p><b>Marital Status:</b> {user.isMarried ? "Married" : "Single"}</p>
                                <p><b>Hobbies:</b> {user.hobbies.join(", ")}</p>

                                <div>
                                    <button onClick={() => deleteUser(user.id)}>Remove</button>

                                    <button onClick={() => updateUser(user.id, { profession: "Updated Developer", age: user.age + 1 })}>Update Info</button>
                                </div>

                            </div>
                        ))
                    )
                        :
                        (
                            <p>No users available.</p>
                        )}
                </div>

            </div>
        </div>
    )
}

export default ContextTestPage
