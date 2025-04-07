// Incoming data types
type Props = {
    name: string;
    age: number;
    isMarried: boolean;
    country: Countries;
};

// Used for a specific range of values
enum Countries {
    Brazil = "Brazil",
    France = "France",
    India = "India",
    Japan = "Japan",
    UnitedStates = "United States",
}

type EnumTest1Props = {
    data: Props[];
}


const EnumTest1: React.FC<EnumTest1Props> = ({ data }) => {
    return (
        <>
            {data.map((personData, index) => (
                <div key={index}>
                    <p>Name: {personData.name}</p>
                    <p>Age: {personData.age}</p>
                    <p>This person is {personData.isMarried ? "is married" : "is single"}.</p>
                    <p>Name: {personData.country}</p>
                </div>
            ))}
        </>
    )
}

export default EnumTest1
