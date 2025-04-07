import './enumTestPage.css';
import { userData } from '../../data/data';
import EnumTest1 from '../../components/enumTest/EnumTest1';
import EnumTest2 from '../../components/enumTest/EnumTest2';
import { Countries } from '../../components/enumTest/EnumTest2'; //Imported Enum for use


const EnumTestPage = () => {
    return (
        <div>
            <h2>Enum Test Page</h2>

            <div>
                <h3>Imported User Data</h3>
                <p>Name: {userData[0].name}</p>
                <p>Age: {userData[0].age}</p>
                <p>This person is {userData[0].isMarried ? "is married" : "is single"}.</p>
                <p>Name: {userData[0].country}</p>
            </div>

            <br />
            <div>
                <h3>Imported Multiple User Data & Component</h3>
                <EnumTest1
                    data={userData}
                />
            </div>

            <br />
            <div>
                <h3>Inputed User Data & Imported Component</h3>
                <EnumTest2
                    name={"Feigi Benson"}
                    age={24}
                    isMarried={false}
                    country={Countries.Brazil}
                />
            </div>

        </div>
    )
}

export default EnumTestPage
