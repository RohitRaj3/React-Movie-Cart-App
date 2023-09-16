import MovieList from "./MovieList";
import Navbar from "./Navbar";
import React from "react";
import {movies} from "./movieData";

// function App() { make it class component bcz constructor run only on class component
class App extends React.Component {
  constructor(){   //we use constructor to make state in it
    super();     //super is use to call super inside constructor.
    this.state = {
        movies : movies,    //here second movie is from movieData which we are importing and first movies is object name in this state which is tsking data
        cartCount:0
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
        let{movies,cartCount} = this.state;
        const mid = movies.indexOf(movie);
        movies[mid].Isincart = !movies[mid].Isincart;

        if(movies[mid].Isincart){
          cartCount = cartCount+1;
        }else{
          cartCount -=1;
        }

        this.setState({
            movies,
            cartCount
        })
    }

    
    
  render(){
    const {movies,cartCount} = this.state;
  return (
    
    <div className="App">
    {/* <h3>Movie App</h3> */}
    <Navbar cartCount={cartCount}/>
      {/* <MovieList />   earlier movielist is pass like this now we have to pass props and event so see below */}
      <MovieList movies = {movies}
                          addStars = {this.handleIncStar}
                          minusStars = {this.handleDecStar} 
                          favbtn = {this.handlefav} 
                          toggleCart = {this.handleCart}/>
    </div>
  );
  }
}

export default App;
