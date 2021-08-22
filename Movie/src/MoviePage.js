import MovieOptions from './MovieOptions.js';
import MovieImage from './MovieImage.js';
import MovieInfo from './MovieInfo.js';

export default function MoviePage({ $target, initialState }) {
    const $moviePage = document.createElement('div');
    $target.appendChild($moviePage);

    this.state = initialState;

    this.setState = (nextState) => {
        this.state = nextState;
        movieImage.setState(this.state.imageUrl);
        movieOptions.setState(this.state.movies);
        const { runtime, rating, summary, title, year } = this.state.selectedMovie;
        movieInfo.setState({
            runtime,
            rating,
            summary,
            title,
            year,
        });
    };

    const movieImage = new MovieImage({
        $target,
        initialState: '', // runtime, rating, summary, title, year
    });

    const movieOptions = new MovieOptions({
        $target,
        initialState: [],
        onSelect: (id) => {
            const selectedMovie = this.state.movies.find((movie) => movie.id === id);
            console.log(selectedMovie);
            const imageUrl = selectedMovie['medium_cover_image'];
            this.setState({
                ...this.state,
                imageUrl,
                selectedMovie,
            });
        },
    });

    const movieInfo = new MovieInfo({
        $target,
        initialState: {
            runtime: '',
            rating: '',
            summary: '',
            title: '',
            year: '',
        },
    });

    const fetchMovieData = () => {
        return fetch('https://yts.mx/api/v2/list_movies.json')
            .then((res) => res.json())
            .then((data) => {
                const movies = data.data.movies;
                this.setState({
                    ...this.state,
                    movies,
                    imageUrl: '',
                    selectedMovie: {
                        runtime: '',
                        rating: '',
                        summary: '',
                        title: '',
                        year: '',
                    },
                });
            });
    };

    fetchMovieData();
}
