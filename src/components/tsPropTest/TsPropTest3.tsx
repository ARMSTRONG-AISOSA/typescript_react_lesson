import './tsPropTest.css';

// Prop data type
type Anime = {
  title: string;
  releaseYear: number;
  episodes: number;
  genre: string[];
  synopsis: string;
};

type TsPropTest3Props = {
  data: Anime[],
}

const TsPropTest3: React.FC<TsPropTest3Props> = ({ data }) => {
  return (
    <div>
      <h2>AnimeList: External Data</h2>
      <ul>
        {data.map((anime, index) => (
          <li key={index}>
            <h3>{anime.title}</h3>
            <p><b>Release year: {anime.releaseYear}</b></p>
            <p><b>Number of episodes: {anime.episodes}</b></p>
            <p><b>Genre: {anime.genre.join(", ")}</b></p>
            <p><b>Synopsis: {anime.synopsis}</b></p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TsPropTest3
