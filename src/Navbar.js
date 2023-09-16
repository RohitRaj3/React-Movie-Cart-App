import React from "react";
import styles from './Navbar.module.css'

function Navbar(props) {
  
    const {cartCount} =  props;
       
      return (
      <>
      <div className={styles.nav}>
        
      <div className={styles.title}>MOVIE APP</div>
        
        <div className={styles.cartIconContainer}>
            <img className={styles.cartIcon} 
                 alt="Cart-Icon" 
                 src = "https://cdn-icons-png.flaticon.com/128/891/891462.png"    
            />
            <span className ={styles.cartCount}>{cartCount}</span>
        </div>
      </div>

      </>
      )
    }
  
 
  
  export default Navbar;
  









// import React from "react";
// // import styled from "styled-components";
// import headstyle from "./Navbar.module.css"

// //this is the styled components where we can use CSS and use it as local Scope
// // const Nav = styled.div`
// //     background:#49aeef ;
// //     display: flex;
// //     justify-content: space-between;
// //     height: 50px;
// //     width: 100%;
// // `
// // const Title = styled.div`
// //         background-color:"white",
// //         font-weight:'bold',
// // `


// // class Navbar extends React.Component{
//     function Navbar(props){
//     // render(){
//         const {cartCount} = this.props;
//         return(
//             <div style={headstyle.nav}> 
//             {/* replace this with <Nav> */}
//             {/* // <Nav> */}
//                 <div style={headstyle.title}>Movie-App</div>
//                 {/* <Title>Movie-App</Title>   */}
//                 <div style={headstyle.cartIconContainer}>
//                 <img  alt="cart icon" 
//                 style={headstyle.cartIcon} 
//                 src="https://cdn-icons-png.flaticon.com/128/891/891462.png" />
//                 <span style={headstyle.cartCount}>{cartCount}</span>
//                 </div>
                
//             {/* // </Nav> */}
//             </div>
//         )
//     }
// // }

// export default Navbar;

// //make an inline style where we can style 
// //in application we prefer local styling instead of global styling as index.css bcz it can conflit

// // const headstyle = {
// //     nav: {
// //         height: 70,
// //         background: "#4627b2",
// //         display: "flex",
// //         justifyContent: "space-between",
// //         alignItems: "center",
// //         position: "relative"
// //     },
// //     title: {
// //         color:"white",
// //         fontWeight:'bold',

// //     },
// //     cartContainer: {
// //         position: 'relative',
// //         cursor: 'pointer',
// //     },
// //     cartIcon:{
// //         height: 48,
// //         marginRight: 20
// //     },
// //     cartCount:{
// //         background: 'orange',
// //         borderRadius:'50%',
// //         padding: '4px 8px',
// //         position: 'absolute',
// //         right: 10,
// //         top: -5,
// //         fontSize: 12

// //     }


// // }