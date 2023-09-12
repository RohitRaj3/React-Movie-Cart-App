import { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component{
    constructor(){   //we use constructor to make state in it
        super();     //super is use to call super inside constructor.
        this.state = {
            movies : [
                {
                    title: "The IRON MAN",
                    plot: "Man with 3000 heart",
                    price: 199,
                    rating: 8.9,
                    stars: 0,
                    fav: true,
                    Isincart: false
        
                },
                {
                    title: "The Avenger",
                    plot: "Man with 3000 heart",
                    price: 199,
                    rating: 8.9,
                    stars: 0,
                    fav: true,
                    Isincart: false
        
                },
                {
                    title: "The Super Man",
                    plot: "Man with 3000 heart",
                    price: 199,
                    rating: 8.9,
                    stars: 0,
                    fav: true,
                    Isincart: false
        
                }
            ]
        }
        }

        handleIncStar = (movie) => {
            const{movies} = this.state;
            
            const mid = movies.indexOf(movie); // taking index of movie stars only which we are clicking

            if(movies[mid].stars >= 5){
                return;
            }

            movies[mid].stars += 0.5;

            this.setState({
                movies:movies // key valus pair has same name then we can make it one name or use movies

            })
        }

        handleDecStar = (movie) => {
            const{movies}=this.state;
            const mid=movies.indexOf(movie);//taking index of movie stars only which we are clicking
            if(movies[mid].stars <= 0){
                return;
            }
            movies[mid].stars -= 0.5;

            this.setState({
                movies:movies
            })
        }

        handlefav = (movie) => {
            const{movies} = this.state;
            const mid = movies.indexOf(movie);
            movies[mid].fav = !movies[mid].fav;

            this.setState({
                movies
            })
        }

        handleCart = (movie) => {
            const{movies} = this.state;
            const mid = movies.indexOf(movie);
            movies[mid].Isincart = !movies[mid].Isincart;

            this.setState({
                movies
            })
        }
        
    render(){
        // const{title,plot,price,rating,stars,fav,Isincart} = this.state
        const{movies} = this.state
        return(
            <>
            {/* // to take movie list we need to map over movies array */}
            {movies.map((movie) => <MovieCard movies= {movie} 
            addStars = {this.handleIncStar}
            minusStars = {this.handleDecStar} 
            favbtn = {this.handlefav} 
            toggleCart = {this.handleCart}/> )}
            
            </>

        )
    }
}

export default MovieList;