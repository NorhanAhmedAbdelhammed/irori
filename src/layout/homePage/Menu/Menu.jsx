// import { Opacity, RotateLeft } from "@material-ui/icons";
// import React, {  useState, useEffect , useRef } from "react";
// import { menu  } from "../../../images/imagesHelper";
// import { Row , Col } from 'react-bootstrap';
// import './Menu.css';

// function Menu() {






// const [ offesetY, setOffesetY ] = useState(0)
// const [ prevScroll, setPrevScroll ] = useState(0)
// const [ scrollUp, setScrollUp ] = useState(false)
// const [ scrollDown, setScrollDown ] = useState(false)
// const [ width, setWidth ] = useState(0)
// const [ height, setHeight ] = useState(0)
// const handlerScroller = ()=>{
//   // const window = e.currentTarget;
//   // setPrevScroll(window.scrollY)
//   setOffesetY(window.pageYOffset)
//   requestAnimationFrame(() => {
//     const rotation = (offesetY-(offesetY*0.999))*200
//     imageRef.current.style.transform = `rotate(${rotation}deg)`;
//   })
//   // if ( prevScroll > window.scrollY) {
//   //   console.log("scrolling up");
//   // } else if (prevScroll < window.scrollY) {
//   //     console.log("scrolling down");
//   //     if(height >= 100){
//   //       setHeight(0)
//   //     }
//   //     setHeight(prev=>prev+1)
//   // }
//   if(scrollDown){
//       if(height >= 100){
//         setHeight(0)
//       }
//       setHeight(prev=>prev+1)
//       setScrollDown(false)
//   }
// }
// const handleNavigation = (e) => {
//   const window = e.currentTarget;
//   if (prevScroll > window.scrollY) {
//       console.log("scrolling up");
//       setScrollUp(true)
//       setScrollDown(false)
//   } else if (prevScroll < window.scrollY) {
//       console.log("scrolling down");
//       setScrollDown(true)
//       setScrollUp(false)
//       // if(height >= 100){
//       //   setHeight(0)
//       //   return
//       // }
//       // setHeight(prev=>prev+1)
//   }
//   setPrevScroll(window.scrollY)
// };

// const imageRef = useRef();
// const MenuStyle ={
//   position: `${offesetY > 1300 ? 'fixed' : 'relative'}`,
//   // backgroundColor: '#CEA950',
//   // height : `${height}%`,
// }
// const ParentSectionStyle = {
//   backgroundColor: '#CEA950',
//   height : `${height}%`,
//   width: '100%' ,
// }
// const divStyle = {
//   width: '10%' ,
//   height : '25%' ,
//   position: `${offesetY > 1300 ? 'fixed' : 'relative'}` ,
//   top: '50%' ,
// }
// const container={
//   backgroundColor :"#CEA950",
//   textAlign :"center",
//   padding:"30px",
//   position: `${offesetY > 1300 ? 'fixed' : 'relative'}` ,
//   top: '0' ,
//   width: '100%' ,
// }

// // const divStyle = {
// //   backgroundColor: 'purple',
// //   transform: `scroll(${rotate})`,
// // }
// // useEffect(() => {
// //   window.addEventListener('scroll', event => {
   
// //   });
// // }, []);
// useEffect(()=>{
//   setPrevScroll(window.scrollY)
//   // window.addEventListener('scroll', e => handleNavigation(e));
//   window.addEventListener("scroll", handlerScroller())
//   console.log(offesetY-(offesetY*0.999))
//   return () => window.removeEventListener("scroll",handlerScroller)
// })
   
// .Menu .container {
//   background-color: #CEA950;
//   text-align: center;
//   padding: 30px;
//   /*height: 200px;*/
//   position: fixed;
//   top: 0;
//   width: 100%;
// }
////====================================================
// const[ logoHeight,setLogoHeight ]=useState(0)
// const[ logoWidth,setLogoWidth ]=useState(0)
// const [ offesetY, setOffesetY ] = useState(0)
// const imageRef_1 = useRef();
// const imageRef_2 = useRef();
// const imgStyle = {
//   width: '110px' ,
//   height : '110px' ,
//   position: `${offesetY > 900   ? 'fixed' : 'relative'}` ,
//   top: '50%' ,
//   display:'block'
// }
// const containerStyle = {
//   position: `${offesetY > 900 ? 'fixed' : ''}` ,
//   height: `${logoHeight<350 ? logoHeight : 350}px` ,
//   background:'red',
//   top: '0' ,
//   left: '0',
//   width: `${logoHeight<350 ? "100" : logoWidth}%` ,
// }
// useEffect(()=>{
//   window.addEventListener("scroll", handleScroll)
//   return () => window.removeEventListener("scroll",handleScroll)
// })
// useEffect(()=>{
//   window.addEventListener("scroll", handlerScrollerForRotate)
//   return () => window.removeEventListener("scroll",handlerScrollerForRotate)
// })

// function handleScroll() {
//     let scrollTop = window.scrollY,
//             minHeight = 0,
//             logoHeight = Math.max(minHeight, scrollTop*0.1);
//     setLogoHeight(logoHeight)
//     if(logoHeight >= 400){
//       // if(logoWidth >= 90){
//       //  setLogoWidth(logoHeight*0.12)
//       // console.log(100 - logoHeight*0.01)
//       // return
//       // }else{
//       // setLogoWidth(logoHeight*0.12)
//       // console.log(logoWidth*0.01)
//       // }
//       setLogoWidth(logoHeight*0.12)

//     }
// }
// const handlerScrollerForRotate = ()=>{
//   setOffesetY(window.pageYOffset)
//   requestAnimationFrame(() => {
//     const rotation = (offesetY-(offesetY*0.999))*200
//     imageRef_1.current.style.transform = `rotate(${rotation}deg)`;
//     imageRef_2.current.style.transform = `rotate(${rotation}deg)`;
//   })
// }
//   return (
//     <div className="Menu" style={{Opacity: `${logoWidth >= 99 ? "0" : "1"} `}}>
//       <section>
//         {/* <div className="Menu_bg">
//         </div> */}
//         <Row  style={containerStyle}>
//           <Col>
//               <img 
//               src={offesetY > 4000 ? menu.plate_1 : menu.plate_2} 
//               // src={menu.plate_2} 
//               style={{...imgStyle , left:'25%'}}
//               ref={imageRef_1} 
//               // className='logo'
//               />
//           </Col>
//           <Col>
//               <img 
//             src={offesetY > 4000 ? menu.plate_1 : menu.plate_2} 
//             // src={menu.plate_2} 
//             style={{...imgStyle , left:'50%'}}
//             ref={imageRef_2} 
//             // className='logo'
//             />
//           </Col>

//         </Row>
//         <div className="empty-space"></div>
     
//       </section>
//     </div>
//   );
// }
import React, { Component } from 'react';
import VizSensor from 'react-visibility-sensor';

class VizAwareImg extends Component {
  state = {
    imgViz: false
  }
  render() {
    return (
      <VizSensor
        onChange={(isVisible) => {
          this.setState({imgViz: isVisible})
        }}
      >
        <img
          src={this.props.src}
          style={{
            width: 300,
            height: 300,
            opacity: this.state.imgViz ? 1 : 0.25,
            transition: 'opacity 500ms linear'
          }}
        />
      </VizSensor>
    );
  }
}

export default VizAwareImg

// export default Menu;
////=========================================================