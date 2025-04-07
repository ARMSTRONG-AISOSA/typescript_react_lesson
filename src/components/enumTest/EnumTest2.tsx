// Incoming data types

interface Props {
    name: string;
    age: number;
    isMarried: boolean;
    country: Countries;
};


// Used for a specific range of values
// Exported to be used else where
export enum Countries {
    Brazil = "Brazil",
    France = "France",
    India = "India",
    Japan = "Japan",
    UnitedStates = "United States",
}



const EnumTest2 = (props: Props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>This person is {props.isMarried ? "is married" : "is single"}.</p>
            <p>Country: {props.country}</p>
        </div>
    )
}

export default EnumTest2
