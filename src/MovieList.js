import { Component } from "react";
import MovieCard from "./MovieCard";
import {movies} from "./movieData";

class MovieList extends Component{

    // all state and event handler is move to App.js so we can make a cartCount 
    //bcz we can't sent data or props to sibling and navbar and Movielist is sibling.
    //so we send the event to parent folder to App.js
    
    render(){
        // const{title,plot,price,rating,stars,fav,Isincart} = this.state
        const{movies,addStars,minusStars,favbtn,toggleCart} = this.props
        return(
            <>
            {/* // to take movie list we need to map over movies array */}
            {movies.map((movie) => <MovieCard movies= {movie} 
                                              addStars = {addStars}
                                              minusStars = {minusStars} 
                                              favbtn = {favbtn} 
                                              toggleCart = {toggleCart} 
                                              key={movie.id}/> )}
            
            </>

        )
    }
}

export default MovieList;