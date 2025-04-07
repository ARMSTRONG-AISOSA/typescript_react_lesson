type Movie = {
    name: string;
    date: string;
    boxOffice: number;
    plotSummary: string;
}

type Anime = {
    title: string;
    releaseYear: number;
    episodes: number;
    genre: string[];
    synopsis: string;
};

type User = {
    name: string;
    age: number;
    isMarried: boolean;
    country: Countries;
};
enum Countries {
    Brazil = "Brazil",
    France = "France",
    India = "India",
    Japan = "Japan",
    UnitedStates = "United States",
}

const movieData: Movie[] = [
    { name: "Inception", date: "2010-07-16", boxOffice: 829895144, plotSummary: "A skilled thief enters the dreams of others to steal secrets." },
    { name: "The Dark Knight", date: "2008-07-18", boxOffice: 1004558444, plotSummary: "Batman battles the Joker in Gotham City." },
    { name: "Interstellar", date: "2014-11-07", boxOffice: 677471339, plotSummary: "A team of astronauts travels through a wormhole to find a new home for humanity." },
    { name: "Avatar", date: "2009-12-18", boxOffice: 2923706029, plotSummary: "A marine on an alien planet becomes torn between following orders and protecting the world he learns to call home." },
    { name: "Titanic", date: "1997-12-19", boxOffice: 2262488191, plotSummary: "A romance blossoms aboard the ill-fated RMS Titanic." }
];


const animeData: Anime[] = [
    {
        title: "Attack on Titan",
        releaseYear: 2013,
        episodes: 89,
        genre: ["Action", "Drama", "Fantasy", "Military"],
        synopsis:
            "In a world where humanity is on the brink of extinction due to gigantic man-eating Titans, young Eren Yeager joins the Survey Corps to fight back and uncover the truth about their world."
    },
    {
        title: "Death Note",
        releaseYear: 2006,
        episodes: 37,
        genre: ["Psychological", "Thriller", "Supernatural", "Mystery"],
        synopsis:
            "A high school student, Light Yagami, finds a mysterious notebook that allows him to kill anyone by writing their name in it. He begins a crusade to rid the world of criminals, attracting the attention of a genius detective known as L."
    },
    {
        title: "One Piece",
        releaseYear: 1999,
        episodes: 1000,
        genre: ["Adventure", "Fantasy", "Action", "Comedy"],
        synopsis:
            "Monkey D. Luffy, a boy with the power to stretch like rubber, sets sail with his crew to find the legendary One Piece treasure and become the Pirate King."
    },
    {
        title: "Demon Slayer: Kimetsu no Yaiba",
        releaseYear: 2019,
        episodes: 55,
        genre: ["Action", "Supernatural", "Historical", "Drama"],
        synopsis:
            "After his family is slaughtered by demons, young Tanjiro Kamado trains to become a demon slayer in hopes of avenging them and saving his sister, who was turned into a demon."
    },
    {
        title: "Naruto",
        releaseYear: 2002,
        episodes: 720, // Naruto (220) + Shippuden (500)
        genre: ["Action", "Adventure", "Martial Arts", "Fantasy"],
        synopsis:
            "Naruto Uzumaki, a young ninja with a powerful demon fox sealed inside him, embarks on a journey to become the strongest ninja and gain the respect of his village."
    }
];

const userData: User[] = [
    {
        name: "James Benhart",
        age: 25,
        isMarried: true,
        country: Countries.UnitedStates, //TypeScript expects an enum reference, not just a string literal.
    },
    {
        name: "Jane Loveth",
        age: 28,
        isMarried: false,
        country: Countries.Japan,
    }
]

// Export multiple datasets
export { movieData, animeData, userData };