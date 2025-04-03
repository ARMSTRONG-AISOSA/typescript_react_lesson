import './tsPropTest.css';

// Props Interface
interface Props {
  name: string[];
  age: number;
  gender: string;
  profession: string;
  hobbies: string[];
  isMarried: boolean;
}

const TsPropTest = (props: Props) => {
  return (
    <div>
      <p>First Name: {props.name[0]}</p>
      <p>Last Name: {props.name[1]}</p>
      <p>Age: {props.age}</p>
      <p>Gender: {props.gender}</p>
      <p>Profession: {props.profession}</p>
      <p>Hobbies: {props.hobbies}</p>
      <p>This person {props.isMarried ? "is married" : "is Single"}</p>
    </div>
  )
};

export default TsPropTest;
