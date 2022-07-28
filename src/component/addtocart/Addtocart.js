import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Addtocart.css'
import {Link,useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

 const Addtocart=()=>{
  const {state} = useLocation();

console.log("values",state)
console.log("name",state.foodName)

    return(
<section className="vh-100" style={{backgroundColor: "#746D69"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <p style={{color: "black"}}><span className="h2" >Shopping Cart </span><span className="h4">(1 item in your cart)</span></p>

        <div className="card mb-4">
          <div className="card-body p-4">

            <div className="row align-items-center">
              <div className="col-md-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                  className="img-fluid" alt="Generic placeholder image"/>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Name</p>
                  <p className="lead fw-normal mb-0" style={{color: "black"}}>iPad Air</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Color</p>
                  <p className="lead fw-normal mb-0" style={{color: "black"}}><i className="fas fa-circle me-2" style={{color: "#fdd8d2"}}></i>
                    pink rose</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Quantity</p>
                  <p className="lead fw-normal mb-0" style={{color: "black"}}>

                  <input type="number" id="quantity" name="quantity" min="1" max="5"></input>
                  </p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Price</p>
                  <p className="lead fw-normal mb-0" style={{color: "black"}}>$799</p>
                </div>
              </div>
              
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Total</p>
                  <p className="lead fw-normal mb-0" style={{color: "black"}}>$799</p>
                </div>
              </div>
             
            </div>

          </div>
        </div>

        <div className="card mb-5">
          <div className="card-body p-4">

            <div className="float-end">
              <p className="mb-0 me-5 d-flex align-items-center">
                <span className="small text-muted me-2">Order total:</span> <span
                  className="lead fw-normal" style={{color: "black"}}>$799</span>
              </p>
            </div>

          </div>
        </div>

        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-light btn-lg me-2">Continue shopping</button>
          <button type="button" className="btn btn-primary btn-lg">Add to cart</button>
        </div>

      </div>
    </div>
  </div>

  
</section>
    )
}
export default Addtocart