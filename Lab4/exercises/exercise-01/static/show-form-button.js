import { movieForm } from "./movie-form"
const showFormButton = {
    data(){
        return {
            adding: false,
        }
    },
    methods:{
        showAddMovieForm(){
            this.adding = true;
            movieForm.methods.resetNewMovie();
        },
        hideAddMovieForm(){
            this.adding = false;
            this.resetNewMovie();
        },
    }

}