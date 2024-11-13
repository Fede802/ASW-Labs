exports.movieForm = {
    data(){
        return {
            title: "",
            plot: "",
            poster: "",
            released: new Date().toISOString().slice(0, 10),
        }
    },
    methods:{
        resetNewMovie() {
            data()
        },
        addMovie() {
            axios.post("/api/movies/", this.newMovie)
                .then(response => {
                    this.movies.push(response.data);
                    this.hideAddMovieForm();
                });
        },
    }
}