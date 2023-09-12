import { Component } from "react";
import './index.css';

class MovieCard extends Component{


    // // this.addstars = this.addstars.bind(this); //this is binding and provide value to 'this'
    //     // addstars(){  //this is normal function if line 15 is not added which is binding 'this' then it won't print value
    //     //     console.log("this:", this);
    //     // } or we can simply make arrow function to built to remove binding bcz in arrow function no need of binding
    //     addstars = () => {

    //         if(this.state.stars >= 5){
    //             return;
    //         }

    //         //form1
    //         // this.setState({
    //         //     stars: this.state.stars + 0.5
    //         // }) // this is printing on screen updating + rerendering again

    //         //form2
    //         this.setState((prevState) =>{
    //             return {
    //                 stars: prevState.stars+ 0.5
    //             }
    //         })


    //         // this.state.star += 0.5;
    //         // console.log("this.state.star:", this.state.star); 
    //         // this will update value of star but to re render it or to 
    //         // show on screen we need setState which can update and re-render it.

    //     } 

    //     minusstars = () =>{
    //         if(this.state.stars <=0){
    //             return;
    //         }
    //         this.setState((prevState) => {
    //             return{
    //                 stars: prevState.stars - 0.5
    //             }
    //         })
    //     }


    //     handlefav = () =>{
    //         this.setState({
    //             fav : !this.state.fav
    //         })
    //     }

    //     handlecart = () =>{
    //         this.setState({
    //             Isincart: !this.state.Isincart
    //         })
    //     }


    
    render(){
        const {movies, addStars, minusStars, favbtn, toggleCart } = this.props;
        const {title, plot,price,rating,stars,fav,Isincart} = this.props.movies; 
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img  src="https://cdn.pixabay.com/photo/2019/05/10/18/21/thanos-4194122_1280.png" alt="Poster"/>
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>  
                        <div className="plot">{plot}</div>
                        {/* <div className="rating">{rating}</div> */}
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img alt="decrease" src="https://cdn-icons-png.flaticon.com/128/4519/4519413.png" className="str-btn"
                                    onClick={() => {minusStars(movies)}}
                                />
                                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars" />
                                <img alt="increase" src="https://cdn-icons-png.flaticon.com/128/992/992651.png" className="str-btn"
                                    onClick={() => {addStars(movies)}}
                                />
                                <span className="starCount">{stars}</span>

                            </div>
                            {/* this is conditional rendering */}
                            <div>  
                            {
                            <button className={fav?"unfavourite-btn":"favourite-btn"} 
                            onClick={() => {favbtn(movies)}}>{fav?"Un-favourite":"favourite"}</button>
                            }
                                
                                
                            </div>
                            <div >
                                <button className={Isincart?"remove-btn":"cart-btn"} 
                                onClick={() => {toggleCart(movies)}}> {Isincart?"Remove":"Cart"} </button>
                            </div>



                        </div>



                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;