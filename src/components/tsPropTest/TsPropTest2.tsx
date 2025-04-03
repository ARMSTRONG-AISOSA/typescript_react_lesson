import './tsPropTest.css';

// Define TypeScript type for props
type Movie = {
  name: string;
  date: string;
  boxOffice: number;
  plotSummary: string;
};

// This defines a TypeScript type alias for props in this case specifing that "TsPropTest2Props"has a property called data
type TsPropTest2Props = {
  // Ensures data property is an array of Movie objects.
  data: Movie[];
}

// Uses React.FC<T> to enforce type safety.
const TsPropTest2: React.FC<TsPropTest2Props> = ({ data }) => {
  return (
    <div>
      <h2>Movie List: External Data</h2>
      <ul>
        {data.map((movie, index) => (
          <li key={index}>
            <h3>{movie.name}</h3>
            <p><b>{movie.date}</b></p>
            <p><b>$ {movie.boxOffice.toLocaleString()}</b></p>
            <p><b>{movie.plotSummary}</b></p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TsPropTest2;
