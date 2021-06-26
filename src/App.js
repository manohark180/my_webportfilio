import React from 'react';
import logo from './homeimg.jpg';
import './App.css';
import Projects from "./components/projects"
import Footer from "./components/footer"
import Mobileprojects from "./components/projectsformobile"
import {Animated} from "react-animated-css";

import ScrollAnimation from 'react-animate-on-scroll';
const divStyle = {
  paddingTop:"150px",
  paddingBottom:"80px",
  backgroundImage: 'url(' + logo + ')',

  backgroundRepeat: "no-repeat"
 
};
const divStyletech = {
  paddingTop:"50px",
  paddingBottom:"80px",
  backgroundImage: 'url(' + logo + ')',

  backgroundRepeat: "no-repeat"
 
};
const mobiledivStyle = {
  paddingTop:"2px",
  paddingBottom:"0px",
  backgroundImage: 'url(' + logo + ')',

  backgroundRepeat: "no-repeat"
 
};






function App() {
  
  
  return (
    <div className="App">
   
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        {/* navigation for mobile */}
        <nav class="navbar  d-lg-none navbar-expand-lg  background navbar-light bg-light">
  <img style={{height:"40%",width:"20%"}} src="./mylogo-removebg-preview (1).png"></img>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link color" href="#Home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link color" href="#About">About</a>
      </li>
      <li class="nav-item">
      <a class="nav-link color " href="#skills">Skills</a>
    
    </li>
    <li class="nav-item">
      <a class="nav-link color " href="#projects11">Projects</a>
    
    </li>
    <li class="nav-item">
      <a class="nav-link color " href="#education">Education</a>
    
    </li>
     
      
    </ul>
    
  </div>
</nav>
{/* image fro mobile */}

<div className="col-sm-12 d-lg-none " style={mobiledivStyle}>
    <div className="row mt-5">
      
      <div className="col-sm-6 pl-0" >
     
      <ScrollAnimation animateIn="animated zoomIn"  animateOnce={true}>
      <img src="./myphoto.jpg"  style={{border: "solid 16px lightgrey"}}height="300px" width="300px"  className="rounded-circle ml-3"></img>
   </ScrollAnimation>
  
    
        
  </div> 
      <div className="col-sm-6 mt-4" style={{textAlign:"center"}}>


<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <div>
    <span className="col-3 p-3 hello">Hello I'm</span>
    </div>
</Animated>
<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <div>
    <div class="   p-2 mobiletext"> <span>Manohar K</span></div>
    </div>
</Animated>
<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <div class="   p-2 mobiletext1">
    <span className="p-0">Software Engineer</span>
    </div>
</Animated>
<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <div className="p-2">
    <i class="fas fa-envelope " aria-hidden="true"><a classsName="ml-3"style={{textDecoration:"none", color:"black",margin:"10px"}} href="mailto:manohar.k180@gmail.com">manohar.k180@gmail.com</a></i>
    </div>
</Animated>

<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <div className="p-2">
    <i style={{ color:"black"}} class="fas fa-phone-alt"><span style={{marginLeft:"10px"}}>+91 9535409649</span></i>
    </div>
</Animated>
<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <div className="p-2">
    <i style={{ color:"black"}} class="fas fa-map-marker-alt"><span style={{marginLeft:"10px"}}>K palasandra, Tumkur</span></i>
    </div>
</Animated>
{/* <div class="  p-3 mt-4" style={{textAlign:"center"}}>
   <ScrollAnimation animateIn="bounceInRight"  animateOnce={true}><span className="col-3 p-3 hello">Hello I'm</span></ScrollAnimation></div>
  <div class="   p-2 mobiletext"><ScrollAnimation animateIn="bounceInRight"  animateOnce={true}><span>Manohar K</span></ScrollAnimation></div>
  <div class="   p-2 mobiletext1"><ScrollAnimation animateIn="bounceInRight"   animateOnce={true}><span className="p-0">Software Engineer</span></ScrollAnimation></div>
  <div className="p-2"><ScrollAnimation animateIn="bounceInRight"  animateOnce={true}><i class="fas fa-envelope " aria-hidden="true"><a classsName="ml-3"style={{textDecoration:"none", color:"black",margin:"10px"}} href="mailto:manohar.k180@gmail.com">manohar.k180@gmail.com</a></i></ScrollAnimation></div>
 <div className="p-2"><ScrollAnimation animateIn="bounceInRight" animateOnce={true}><i style={{ color:"black"}} class="fas fa-phone-alt"><span style={{marginLeft:"10px"}}>+91 9535409649</span></i></ScrollAnimation></div>   
 <div className="p-2"><ScrollAnimation animateIn="bounceInRight"  animateOnce={true}><i style={{ color:"black"}} class="fas fa-map-marker-alt"><span style={{marginLeft:"10px"}}>K palasandra, Tumkur</span></i></ScrollAnimation></div>    */}
   </div>
    </div>
  </div>

{/* end of image */}

{/* statrt of about me */}
<div id="About" class="container d-lg-none " style={{paddingTop:"70px",paddingBottom:"70px"}}>
<div className="col-sm-12">
  <div className="row">
    <div className="col-sm-6">
    <div className="col-sm-6"><h2>About Me</h2>
    <ScrollAnimation animateIn="zoomInDown"  animateOnce={true} >
      <img src="./about.png" style={{height:"100%",width:"100%"}}   className=""></img>
   </ScrollAnimation>
    </div>
    
    <div><p style={{lineHeight:"30px"}} className="mt-5">Hello, I’m a Manohar, web-developer based on Banglore. I have experience in web site design & building and customization. Also I am good at</p></div>
   <div className="col-sm-12 mt-5 ml-2" style={{lineHeight:"50px"}}>
   <div className="row">
   <ScrollAnimation animateIn="flipInX"   animateOnce={true} > <span className="p-1 mr-3 rounded" style={{ border: "solid #0bceaf 2px"}}>React</span></ScrollAnimation>
   <ScrollAnimation animateIn="flipInX"  animateOnce={true}  > <span className="p-1  mr-3  rounded" style={{ border: "solid #0bceaf 2px"}}>HTML</span></ScrollAnimation>
   <ScrollAnimation animateIn="flipInX"  animateOnce={true}  >  <span className="p-1  mr-3  rounded" style={{ border: "solid #0bceaf 2px"}}>CSS</span></ScrollAnimation>
   <ScrollAnimation animateIn="flipInX"  animateOnce={true}  >  <span className="p-1  mr-3  rounded" style={{ border: "solid #0bceaf 2px"}}>SCSS</span></ScrollAnimation>
   <ScrollAnimation animateIn="flipInX"  animateOnce={true}  >  <span className="p-1  mr-3 rounded" style={{ border: "solid #0bceaf 2px"}}>JAVA</span></ScrollAnimation>
   <ScrollAnimation animateIn="flipInX"  animateOnce={true} >  <span className="p-1  mr-3  rounded" style={{ border: "solid #0bceaf 2px"}}>Python</span></ScrollAnimation>

      

    </div>

   </div>
   <ScrollAnimation animateIn="flipInX" delay={500}  animateOnce={true} >
   <a href="./Manohar_Resume.pdf" style={{textDecoration:"none",color:"white",visibility:"visible"}} download>
   <button className="btn maincolor mt-4"  style={{borderRadius:"50px", textDecoration:"none"}}>Download CV <i class="fas fa-download"></i></button>
   </a></ScrollAnimation>
    </div>
   
  </div>
</div></div>
{/* end of about me */}
<div id="skills" class="container-fluid p-0  d-lg-none"  >
<div className="col-sm-12 container" style={mobiledivStyle}>
<h2 style={{textAlign:"center mt-5"}}>Technical Skills</h2>
    <div className="row">
      
    
      <div className="col-sm-6" style={{}}>
      <ScrollAnimation animateIn="flipInX"   >
        <img className="mt-5" src="./technology.jpg" style={{width:"100%"}}></img>
</ScrollAnimation>
<div className="col-sm-6 " style={{}}>
        
        <div classsName="col-sm-12"> 
        
        
        <span style={{float:"left"}}>Java Script </span></div><br/>
        <div classsName="col-sm-12"> 
        
         <div class="progress mt-2 mb-4">
   <div class="progress-bar" style={{width:"70%"}}>70%</div>
 </div> </div>
 
 <div classsName="col-sm-12 mt-3"> 
 <span style={{float:"left"}}>CSS </span></div><br/>
        <div classsName="col-sm-12">  <div class="progress mt-2 mb-4">
   <div class="progress-bar" style={{width:"40%"}}>40%</div>
 </div> </div>
 
 <div classsName="col-sm-12 mt-3"> <span style={{float:"left"}}>HTML </span></div><br/>
        <div classsName="col-sm-12">  <div class="progress mt-2 mb-4">
   <div class="progress-bar" style={{width:"65%"}}>65%</div>
 </div> </div>
 
 <div classsName="col-sm-12 mt-3"> <span style={{float:"left"}}>Python</span></div><br/>
        <div classsName="col-sm-12">   <div class="progress mt-2 mb-4">
   <div class="progress-bar" style={{width:"45%"}}>45%</div>
 </div></div>
 
 <div classsName="col-sm-12 mt-3"> <span style={{float:"left"}}>JAVA</span></div><br/>
        <div classsName="col-sm-12">  <div class="progress mt-2 mb-3">
   <div class="progress-bar" style={{width:"30%"}}>30%</div>
 </div></div>
       </div>
     
    
     
     
      </div>
    </div>
  </div>
  </div>

  <div id="projects11" className=" d-lg-none" >
    <Mobileprojects/>
  </div>
  <div id="education" class="container-fluid d-lg-none "style={mobiledivStyle}>
<div className="col-sm-12 mt-5"><h1>Education</h1></div>  
  <div className="col-sm-12 mt-5 mb-5">
    <div className="row">
      <div className="col-sm-6">
      <ScrollAnimation animateIn="bounceInLeft" >
      <div class="card1 rounded">
      <div class="card-body">
        <h5 class="card-title">Masters of Computer Applications</h5>
        <p class="card-text ">Dr. Ambedkar Institute of Technology</p>
        <p>2016-2019</p>
      </div>
    </div>
    </ScrollAnimation>
      </div>
      <div className="col-sm-6 mt-4">
      <ScrollAnimation animateIn="bounceInRight" >
      <div class="card1 rounded">
      <div class="card-body">
        <h5 class="card-title">Bachelor of Computer Applications</h5>
        <p class="card-text ">Vidyavahini First Grade College</p>
       <p>2013-2016</p>
      </div>
    </div>
    </ScrollAnimation>
      </div>
    </div>
  </div>
</div>
        {/* end of this */}
















        
      <body data-spy="scroll" data-target=".navbar" data-offset="50">

<nav class="navbar d-none d-sm-block navbar-expand-sm background navbar-dark fixed-top  shadow p-3 mb-5 bg-white rounded" style={{height:"85px"}}>  
  <ul class="navbar-nav">
      <li class="nav-item">
    
      <img style={{width:"15%"}} src="./mylogo-removebg-preview (1).png"></img>
    </li>
    <li class="nav-item">
      <a class="nav-link mt-2 pr-3" href="#Home">Home</a>
    </li>
    
    <li class="nav-item">
      <a class="nav-link mt-2 pr-3" href="#Aboutme">About</a>
    
    </li>
    <li class="nav-item">
      <a class="nav-link mt-2 pr-3" href="#Skills">Skills</a>
    
    </li>
    <li class="nav-item ">
      <a class="nav-link mt-2 pr-3" href="#Projects"  >
        Projects
      </a>
      
    </li>
    <li class="nav-item ">
      <a class="nav-link mt-2 pr-3" href="#Education"  >
      Education
      </a>
    
    </li>
    
  
  
  </ul>
  <ul> 
    
    </ul>

</nav>

<div id="Home" class="container-fluid pl-0 pr-0 d-none d-lg-block">

  <div className="col-sm-12 " style={divStyle}>
    <div className="row">
      <div className="col-sm-6 pl-0" >
      <ScrollAnimation animateIn="animated zoomIn"  animateOnce={true}>
      <img src="./myphoto11.jpeg"  style={{border: "solid 16px lightgrey"}}height="400px" width="400px"  className="rounded-circle "></img>
   </ScrollAnimation>
  
    
        
  </div> 
      <div className="col-sm-6" style={{textAlign:"initial"}}>
 <div class="  p-3 "><Animated animationIn="bounceInRight" animationInDelay={500}  isVisible={true}><span className="col-3 p-3 hello">Hello I'm</span></Animated></div>
  <div class="   p-3 text"><Animated animationIn="bounceInRight" animationInDelay={700}  isVisible={true}><span>Manohar K</span></Animated></div>
  <div class="   p-3 text1"><Animated animationIn="bounceInRight" animationInDelay={900}   isVisible={true}><span className="p-0 color"><h2>Software Engineer</h2></span></Animated></div>
  <div className="p-3"><Animated animationIn="bounceInRight"animationInDelay={1200}  isVisible={true}><i class="fas fa-envelope " aria-hidden="true"><a classsName="ml-3"style={{textDecoration:"none", color:"black",margin:"10px"}} href="mailto:manohar.k180@gmail.com">manohar.k180@gmail.com</a></i></Animated></div>
 <div className="p-3"><Animated animationIn="bounceInRight" animationInDelay={1400}  isVisible={true}><i style={{ color:"black"}} class="fas fa-phone-alt"><span style={{marginLeft:"10px"}}>+91 9535409649</span></i></Animated></div>   
 <div className="p-3"><Animated animationIn="bounceInRight" animationInDelay={1600}  isVisible={true}><i style={{ color:"black"}} class="fas fa-map-marker-alt"><span style={{marginLeft:"10px"}}>K palasandra, Tumkur</span></i></Animated></div>   
   </div>
    </div>
  </div>
  {/* <div class=" col-1 top-left hello p-3 "><span>Hello I'm</span></div> */}
  {/* <div class=" col-2 top-left1 p-3 "><span>Manohar k</span></div> */}

  
  {/* <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p> */}
</div>
<div id="Aboutme" class="container d-none d-lg-block" style={{paddingTop:"70px",paddingBottom:"70px"}}>
<div className="col-sm-12">
  <div className="row">
    <div className="col-sm-6">
    <ScrollAnimation animateIn="zoomInDown" >
      <img src="./about.png" style={{height:"100%",width:"100%"}}   className=""></img>
   </ScrollAnimation>
    </div>
    <div className="col-sm-6"><h2>About Me</h2>
    <div><p style={{lineHeight:"30px"}}>Hello, I’m a Manohar, web-developer based on Banglore. I have experience in web site design & building and customization. Also I am good at</p></div>
   <div className="col-sm-12">
   <div className="row">
   <ScrollAnimation animateIn="flipInX" delay={500} > <span className="p-1 mr-3 rounded" style={{ border: "solid #0bceaf 2px"}}>React</span></ScrollAnimation>
   <ScrollAnimation animateIn="flipInX" delay={700} > <span className="p-1  mr-3  rounded" style={{ border: "solid #0bceaf 2px"}}>HTML</span></ScrollAnimation>
   <ScrollAnimation animateIn="flipInX" delay={900} >  <span className="p-1  mr-3  rounded" style={{ border: "solid #0bceaf 2px"}}>CSS</span></ScrollAnimation>
   <ScrollAnimation animateIn="flipInX" delay={1100} >  <span className="p-1  mr-3  rounded" style={{ border: "solid #0bceaf 2px"}}>SCSS</span></ScrollAnimation>
   <ScrollAnimation animateIn="flipInX" delay={1400} >  <span className="p-1  mr-3  rounded" style={{ border: "solid #0bceaf 2px"}}>Python</span></ScrollAnimation>
   <ScrollAnimation animateIn="flipInX" delay={1600} >  <span className="p-1  mr-3 rounded" style={{ border: "solid #0bceaf 2px"}}>JAVA</span></ScrollAnimation>

      

    </div>

   </div>
   <ScrollAnimation animateIn="flipInX" delay={500}  >
   <a href="./Manohar_Resume.pdf" style={{textDecoration:"none",color:"white",visibility:"visible"}} download>
   <button className="btn maincolor mt-4"  style={{borderRadius:"50px", textDecoration:"none"}}>Download CV <i class="fas fa-download"></i></button>
   </a></ScrollAnimation>
    </div>
   
  </div>
</div></div>
<div id="Skills" class="container-fluid p-0 d-none d-lg-block"  >
<div className="col-sm-12 container" style={divStyletech}>
<h2 style={{textAlign:"center mt-5"}}>Technical Skills</h2>
    <div className="row">
      
      <div className="col-sm-6 " style={{padding:"80px"}}>
        
       <div classsName="col-sm-12"> 
       
       
       <span style={{float:"left"}}>Java Script </span></div><br/>
       <div classsName="col-sm-12"> 
       
       <ScrollAnimation animateIn="flipInX" animateOnce={true} > <div class="progress mt-2 mb-4">
  <div class="progress-bar" style={{width:"70%"}}>70%</div>
</div></ScrollAnimation> </div>

<div classsName="col-sm-12 mt-3"> 
<span style={{float:"left"}}>CSS </span></div><br/>
       <div classsName="col-sm-12"> <ScrollAnimation animateIn="flipInX" animateOnce={true}> <div class="progress mt-2 mb-4">
  <div class="progress-bar" style={{width:"40%"}}>40%</div>
</div></ScrollAnimation> </div>

<div classsName="col-sm-12 mt-3"> <span style={{float:"left"}}>HTML </span></div><br/>
       <div classsName="col-sm-12"> <ScrollAnimation animateIn="flipInX" animateOnce={true}> <div class="progress mt-2 mb-4">
  <div class="progress-bar" style={{width:"65%"}}>65%</div>
</div></ScrollAnimation> </div>

<div classsName="col-sm-12 mt-3"> <span style={{float:"left"}}>Python</span></div><br/>
       <div classsName="col-sm-12"><ScrollAnimation animateIn="flipInX"  animateOnce={true}>    <div class="progress mt-2 mb-4">
  <div class="progress-bar" style={{width:"45%"}}>45%</div>
</div></ScrollAnimation></div>

<div classsName="col-sm-12 mt-3"> <span style={{float:"left"}}>JAVA</span></div><br/>
       <div classsName="col-sm-12">  <ScrollAnimation animateIn="flipInX" animateOnce={true}> <div class="progress mt-2 mb-3">
  <div class="progress-bar" style={{width:"30%"}}>30%</div>
</div></ScrollAnimation></div>
      </div>
      <div className="col-sm-6" style={{padding:"80px"}}>
      <ScrollAnimation animateIn="flipInX"   >
        <img className="mt-5" src="./technology.jpg" style={{width:"100%"}}></img>
</ScrollAnimation>
      
     
    
     
     
      </div>
    </div>
  </div>
  </div>
<div id="Projects" class="container-fluid " style={{paddingTop:"90px"}}>
  <Projects/>
  </div>

  <div className="col-sm-12 " style={{backgroundColor:"lightgray",textAlign:"center"}}>
  <div className="col-sm-12 "><h1 className="mt-4">My Youtube Channel</h1></div> 
  <div className="col-sm-12 mt-3 "> <div className="row"> <div className="col-sm-6" style={{marginLeft:"1px solid"}}>

  <video width="320" height="240"width="50%" controls autoplay  poster="./youtueimage.JPEG">
  <source src="./youtuevideo.mp4" type="video/mp4"/>
  <source src="movie.ogg" type="video/ogg"/>
  Your browser does not support the video tag.
</video>



  
  </div>
  <div className="col-sm-6 mt-5">
  <span><a href="https://youtube.com/channel/UCIG6oZcmSeQXqNDcTLsxiEA" style={{color:"blue"}}><h4>Tech Skills in Kannada</h4></a></span>
  <h5>A channel helps to learn programming techniques </h5></div>   
  
    </div> 
    </div>
  </div>
  <div id="Education" class="container-fluid d-none d-lg-block "style={divStyletech}>
<div className="col-sm-12"><h1>Education</h1></div>  
  <div className="col-sm-12 mt-5 mb-5">
    <div className="row">
      <div className="col-sm-6">
      <ScrollAnimation animateIn="fadeInUp" >  
      <div class="card rounded">
      <div class="card-body">
        <h5 class="card-title">Masters of Computer Applications</h5>
        <p class="card-text ">Dr. Ambedkar Institute of Technology</p>
        <p>2016-2019</p>
      </div>
    </div>
    </ScrollAnimation>
      </div>
      <div className="col-sm-6">
      <ScrollAnimation animateIn="fadeInUp" > 
      <div class="card rounded">
      <div class="card-body">
        <h5 class="card-title">Bachelor of Computer Applications</h5>
        <p class="card-text ">Vidyavahini First Grade College</p>
       <p>2013-2016</p>
      </div>
    </div>
    </ScrollAnimation>
      </div>
    </div>
  </div>
</div>
<Footer/>
</body>
      </div>
    </div>
  );
}

export default App;
