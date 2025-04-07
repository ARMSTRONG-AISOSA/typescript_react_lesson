import React, { createContext, useEffect, useState } from "react";

// You can use this for data in whatever component you use the context api
export interface User {
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
  updateUser: (id: string) => void; //Note-Index =>1.4
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
        name: "Luna",
        age: 27,
        isMarried: false,
        gender: "female",
        profession: "Designer",
        hobbies: ["Painting", "Yoga"]
      }
    ]);
  }, [])

  // Functions
  // add User Function
  const addUser = (user: User): void => {
    return //returns nothing
  };

  // update User Function
  const updateUser = (id: string): void => {
    return
  };

  // delete User Function
  const deleteUser = (id: string): void => {
    return
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