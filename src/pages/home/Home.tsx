import TsPropTest from '../../components/tsPropTest/TsPropTest';

const Home = () => {

  interface Props {
    name: string[];
    age: number;
    gender: string;
    profession: string;
    hobbies: string[];
    isMarried: boolean;
  }

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
  )

  // Simulating a fetch function for an array of data
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
      isMarried: true
    }]
  )

  const fetchedUser = fetchUserData();


  const stringData: string = "Tony"

  return (
    <div>
      <h1>HoMe Page</h1>
      <p>{stringData}</p>

      <div>
        <TsPropTest
          name={["Collin", "Terry"]}
          age={23}
          gender={"Male"}
          profession={"Programmer"}
          hobbies={["Sudoku, ", "Calisthenics "]}
          isMarried={true}
        />

        <br /> <br />
        {/* Simulated function */}
        <TsPropTest
          name={fetchedUser.name}
          age={fetchedUser.age}
          gender={fetchedUser.gender}
          profession={fetchedUser.profession}
          hobbies={fetchedUser.hobbies}
          isMarried={fetchedUser.isMarried}
        />
      </div>
    </div>
  )
}

export default Home
