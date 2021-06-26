import React, { Component } from 'react'

export default class footer extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
               <div className="col-sm-12 background" style={{textAlign:"center"}}>
                   <div className="row">
                       <div className="col-sm-4" >
                       <div className="p-3" style={{borderRight:"white solid 1px"}}>  <i class="fas fa-phone" aria-hidden="true" style={{ color:"black"}}></i>
                       <span style={{marginLeft:"10px"}}>+91 9535409649</span><br/>
                       <span className="mt-2 ml-4">+91 8217224916</span>
                       </div></div>
                       <div className="col-sm-4">
                       <div className="p-3" style={{borderRight:"white solid 1px"}}><i class="fas fa-envelope " aria-hidden="true"><a classsName="ml-3"style={{textDecoration:"none", color:"black",margin:"10px"}} href="mailto:manohar.k180@gmail.com">manohar.k180@gmail.com</a></i></div>
                       </div>
                       <div className="col-sm-4">
                       <div className="p-3"><i style={{ color:"black"}} class="fas fa-map-marker-alt"><span style={{marginLeft:"10px"}}>K palasandra, Tumkur</span></i></div> 
                       </div>
                   </div>
                   </div> 
            </div>
        )
    }
}
