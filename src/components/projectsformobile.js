import React, { Component } from 'react'
import {Animated} from "react-animated-css";

import ScrollAnimation from 'react-animate-on-scroll';

export default class projectsformobile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          active:0   
        }
        this.changestate=this.changestate.bind(this)
    }
    changestate(id){
      this.setState({active:id})  
    }
    
    render() {
        return (
            <div>
               <div className="col-sm-12 mt-5 d-lg-block" >
  <ul class="nav nav-pills nav-fill">
  <li class="nav-item" style={{borderRight:"#0bceaf solid 1px",borderLeft:"#0bceaf solid 1px"}}>
    <a className={"nav-link"+" "+(this.state.active==0?"active":"")} onClick={()=>this.changestate(0)}>Projects</a>
  </li>
  <li class="nav-item" style={{borderRight:"#0bceaf solid 1px"}}>
    <a class={"nav-link"+" "+(this.state.active==1?"active":"")}  onClick={()=>this.changestate(1)}> College Projects</a>
  </li>
  <li class="nav-item" style={{borderRight:"#0bceaf solid 1px",borderLeft:"#0bceaf solid 1px"}}>
    <a class={"nav-link"+" "+(this.state.active==2?"active":"")}  onClick={()=>this.changestate(2)} >Internship</a>
  </li>
  
</ul>
    {/* <div className="col-sm-12">
      <div className="row">
        
      <div className="col-sm-4 sam active"><h1>Projects</h1></div>
      <div className="col-sm-4 sam"><h1> College Projects</h1></div>
      <div className="col-sm-4 sam"><h1>Internship</h1></div>
      </div>
    </div> */}
  {this.state.active==0 && (<div className="row" 
     >
         <div className="col-sm-12">
             <div className="row">
                 <div className="col-sm-4" style={{padding:"15%"}}> <Animated animateIn="bounceInLeft"  animateOnce={true} >
    <div class="profile-card">
                <div class="profile-img">
                    <img src="./project1.jpg" style={{height:"250px"}} alt="project image"/>
                </div>
                <div class="profile-content">
                    <h2 class="title">PIE
                        <span></span>
                        <span><a href="https://pie.ccmrm.org/#/" style={{color:"black"}}>Platform for Invester Education</a></span>
                    </h2>
                   
                </div>
            </div>
    </Animated></div>
                 <div className="col-sm-4" style={{paddingLeft:"15%",paddingRight:"15%",paddingBottom:"15%"}}><Animated animateIn="slideInUp"  animateOnce={true} ><div class="profile-card">
                <div class="profile-img">
                    <img src="./project2.jpg"  style={{height:"250px"}} alt="Team Image"/>
                </div>
                <div class="profile-content">
                    <h2 class="title" ><a href="http://159.65.149.165:3001/login" style={{color:"black"}}> INVEXL</a>
                        <span></span>
                    </h2>
                  
                </div>
            </div></Animated></div>
                 <div className="col-sm-4" style={{paddingLeft:"15%",paddingRight:"15%"}}> <Animated animateIn="bounceInRight"  animateOnce={true} >
    <div class="profile-card">
                <div class="profile-img">
                    <img src="./project3.jpg" style={{height:"250px"}} alt="Team Image"/>
                </div>
                <div class="profile-content">
                    <h2 class="title">DLP
                        <span><a href="http://159.65.149.165:3000/login" style={{color:"black"}}> Digital Learning Platform</a></span>
                    </h2>
                   
                </div>
            </div>
    </Animated></div>
         </div></div>
    
    </div>)}
    {this.state.active==1 && (<div className="row" 
     >
         <div className="col-sm-12">
             <div className="row">
                 
                     <div className="col-sm-6" style={{padding:"15%"}}>
                     <Animated animateIn="bounceInLeft"  animateOnce={true} >
    <div class="profile-card">
                <div class="profile-img">
                    <img src="./application.jpg" style={{height:"250px"}} alt="project image"/>
                </div>
                <div class="profile-content">
                    <h2 class="title">Online Application for Supervisor
                        <span></span>
                        <span><a  style={{color:"black"}}></a></span>
                    </h2>
                   
                </div>
            </div>
    </Animated>
                     </div>
                     <div className="col-sm-6" style={{paddingLeft:"15%",paddingRight:"15%"}}>
                     <Animated animateIn="bounceInRight"  animateOnce={true} ><div class="profile-card">
                <div class="profile-img">
                    <img src="./tracking.png"  style={{height:"250px"}} alt="Team Image"/>
                </div>
                <div class="profile-content">
                    <h2 class="title" > Vehicle Tracking System
                        {/* <a href="http://159.65.149.165:3001/login" style={{color:"black"}}> </a> */}
                        <span></span>
                    </h2>
                  
                </div>
            </div></Animated>
                     </div>
               
             </div>
         </div>
   
   
    </div>)}
    {this.state.active==2 && (<div className="row" 
     >
         <div className="col-sm-12">
             <div className="row">
                
                     <div className="col-sm-6" style={{padding:"15%"}}>
                     <Animated animateIn="bounceInLeft"  animateOnce={true} >
    <div class="profile-card">
                <div class="profile-img">
                    <img src="./project1.jpg" style={{height:"300px"}} alt="project image"/>
                </div>
                <div class="profile-content">
                    <h2 class="title">PIE
                        <span></span>
                        <span><a href="https://pie.ccmrm.org/#/" style={{color:"black"}}>Platform for Invester Education</a></span>
                    </h2>
                   
                </div>
            </div>
    </Animated>
                         </div>
                         <div className="col-sm-6" style={{paddingLeft:"7%",paddingRight:"7%",lineHeight:"40px"}}>
                         <Animated animateIn="bounceInRight"  animateOnce={true} >
                             <p>  This project you to explore the  its various categories and tags as you re-visit the platform. Project are quite certain these visits will only increase your desire to become a smarter investor.
                  </p>
                  <span><a href="https://pie.ccmrm.org/#/">Platform for Invester Education</a></span>
                             </Animated>   
                             
                             <Animated animateIn="flipInX" delay={500}  animateOnce={true}  >
   <a href="./certificate.pdf" style={{textDecoration:"none",color:"white",visibility:"visible"}} download>
   <button className="btn maincolor mt-4"  style={{borderRadius:"50px", textDecoration:"none"}}>Download Completion Certificate <i class="fas fa-download"></i></button>
   </a></Animated>      </div>
                 </div>
          
         </div>
    <div className="col-4" >

   
    </div>
   
    </div>)}
  </div> 
            </div>
        )
    }
}
