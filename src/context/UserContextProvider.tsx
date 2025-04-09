import React, { createContext, useEffect, useState } from "react";

// You can use this for data in whatever component you use the context api
export interface User {
  id: string;
  name: string;
  age: number;
  isMarried: boolean;
  gender: string;
  profession: string;
  hobbies: string[];
}


// Interface(type): it defines the shape of an object (being returned). Index==>1.1
interface UserContextType {
  users: User[] | null; //Note-Index =>1.2
  addUser: (user: User) => void; //Note-Index =>1.3
  updateUser: (id: string, updatedFields: Partial<User>) => void; //Note-Index =>1.4
  deleteUser: (id: string) => void;
}

// Context initial value so it doesn't display an error
const contextInitialValues = {
  users: null,
  addUser: () => null,
  updateUser: () => null,
  deleteUser: () => null,
}

// This/these interface will be used as the type for the value provided by a Context Provider ensuring that everything using the context will know the exact shape and expected types, giving type safety.
// Global Variable
export const UserContext = createContext<UserContextType>(contextInitialValues);


// interface to define the children props being wrapped 
interface Props {
  children: React.ReactNode;
}

// Context provider/wrapper
export const UserContextProvider = (props: Props) => {
  // State
  const [users, setUsers] = useState<User[] | null>(null);

  // Mimicing an api call
  useEffect(() => {
    setUsers([
      {
        id: "1",
        name: "Luna",
        age: 27,
        isMarried: false,
        gender: "female",
        profession: "Designer",
        hobbies: ["Painting", "Yoga"]
      }
    ]);
  }, [])

  // Functionsreturn
  // add User Function
  const addUser = (user: User): void => {
    setUsers(prev => prev ? [...prev, user] : [user]);

    // prev ? [...prev, user]
    // if users already has entries	Append the new user to the existing list
    // : [user]
    // users is null (no users yet)	Create a new array and add the first user
  };

  // update User Function
  const updateUser = (id: string, updatedFields: Partial<User>): void => {
    setUsers(prev => prev?.map(user => user.id === id ? { ...user, ...updatedFields } : user) ?? null);
  };

  // delete User Function
  const deleteUser = (id: string): void => {
    setUsers(prev => prev?.filter(user => user.id !== id) ?? null);

    // prev => ...
    // This is a callback function that takes the previous state (prev) and returns a new one to setUsers.

    // .filter() returns a new array containing only the elements that return true for the condition inside it.

    // user.id !== id:
    // For each user, who do not match the id stay in the list so the one with the matching ID is removed.

    // prev?:
    // This is optional chaining, in case prev is null. It prevents JavaScript from throwing an error if prev is null.

    // ?? null : This is the nullish coalescing operator.
    // If prev was null to begin with, then prev?.filter(...) will evaluate to undefined. So, "?? null" ensures that if filtering results in undefined, we instead set the new state to null.
  };

  const contextValue = {
    users,
    addUser,
    updateUser,
    deleteUser,
  }


  return <UserContext.Provider
    value={contextValue}
  >{props.children}</UserContext.Provider>
}


export default UserContextProvider;