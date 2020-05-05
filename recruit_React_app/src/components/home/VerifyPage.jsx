import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Verified extends Component {
componentDidMount(){
let id=this.props.match.params.id
console.log(id)
  axios
  .get(`/user/verify/${id}`)
  .then(res=>{
    if(res.status===200){
            console.log(res)
            setTimeout(() => {
                window.location.href = '/login'
            }, 500)
    }})
  .catch(err=>{
      console.log(err)
    
  
    
    })
}
  render() {
    return (
        <div>
           <h1>Your Account Verified Successfully</h1>
        </div>
    );
  }
}



export default Verified;