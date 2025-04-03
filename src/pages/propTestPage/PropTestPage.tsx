import TsPropTest1 from '../../components/tsPropTest/TsPropTest1';
import TsPropTest2 from '../../components/tsPropTest/TsPropTest2';
import TsPropTest3 from '../../components/tsPropTest/TsPropTest3';
import { animeData, movieData } from '../../data/data';
import './propTestPage.css';


// Simulating a fetch function
const fetchUserData = () => (
    {
        name: ["James", "Hobbs"],
        age: 28,
        gender: "Male",
        profession: "Accontant",
        hobbies: ["Video Games, ", "Jogging "],
        isMarried: false
    }
);
const fetchedUser = fetchUserData();

// Simulating a fetch function for an array of obj. data
const fetchUserDataArray = () => (
    [{
        name: ["James", "Hobbs"],
        age: 28,
        gender: "Male",
        profession: "Accontant",
        hobbies: ["Video Games, ", "Jogging "],
        isMarried: false
    },
    {
        name: ["Samantha", "Higgins"],
        age: 27,
        gender: "Female",
        profession: "Nurse",
        hobbies: ["Music, ", "Card Games "],
        isMarried: true
    },
    {
        name: ["Bennadect", "Cruz"],
        age: 22,
        gender: "Female",
        profession: "Bar",
        hobbies: ["Swimming, ", "Sight seeing "],
        isMarried: false
    }]
);
const fetchedUserArray = fetchUserDataArray();






const PropTestPage = () => {
    return (
        <div>
            <h2>Prop Test Page</h2>
            <TsPropTest1
                name={["Collin", "Terry"]}
                age={23}
                gender={"Male"}
                profession={"Programmer"}
                hobbies={["Sudoku, ", "Calisthenics "]}
                isMarried={true}
            />

            <br /> <br />
            {/* Simulated function */}
            <TsPropTest1
                name={fetchedUser.name}
                age={fetchedUser.age}
                gender={fetchedUser.gender}
                profession={fetchedUser.profession}
                hobbies={fetchedUser.hobbies}
                isMarried={fetchedUser.isMarried}
            />

            <br /> <br />
            {/* Simulated array object function */}
            <TsPropTest1
                name={fetchedUserArray[1].name}
                age={fetchedUserArray[1].age}
                gender={fetchedUserArray[1].gender}
                profession={fetchedUserArray[1].profession}
                hobbies={fetchedUserArray[1].hobbies}
                isMarried={fetchedUserArray[1].isMarried}
            />

            {/* External TypeScript Data */}
            <TsPropTest2 data={movieData} />

            {/* External TypeScript Data */}
            <TsPropTest3 data={animeData} />
        </div>
    )
}

export default PropTestPage
