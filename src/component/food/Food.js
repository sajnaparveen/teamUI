import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Food.css'

const Food = () => {
  const [fooditem,setfooditem] = useState([]);
  const [foodcategory,setfoodcategory] = useState([]);
  const [data,setData] = useState([]);
  const navigate = useNavigate();
  const getfood=()=>{
  
    axios.get("http://192.168.1.4:7000/api/v2/food/getallitem").then((res)=>{
        console.log(res.data.result)
        setfooditem(res.data.result)
    }).catch((error)=>{
        console.log(error)
  })
  }
  const foodcategorys=()=>{
    axios.get("http://192.168.1.4:7000/api/v2/food/getfoodcategory").then((res)=>{
      console.log("category",res.data.result)
       setfoodcategory(res.data.result)
    }).catch((error)=>{
      console.log(error)
    })
  }

  const getProducts=(curElem)=>{
    console.log(curElem)

    axios.get("http://192.168.1.4:7000/api/v2/food/get-categorybasedfooditem",{
                params:{category_id:curElem.uuid}
            })
            .then((res)=>{
            
                setData(res.data.result)
                console.log("resultss",res.data)
            }).catch((error)=>{
                    console.log(error)
            })
}
let cartItems = []
const [cart,setcart]=useState([])
console.log("cart",cart)
function addtocart(curElem){
  cart.push(JSON.stringify(cartItems))

localStorage.setItem("cart",curElem )
console.log("cart",JSON.stringify(cartItems))
let cartValues = JSON.stringify(cartItems)

// navigate("/addtocart",{state:cartValues})

}
  useEffect(()=>{
    getfood()
    foodcategorys()
    // getProducts()
},[]);
  return (
    <div>
   

   <div id="topbar" className="d-flex align-items-center fixed-top">
    <div className="container d-flex justify-content-center justify-content-md-between">
    </div>
  </div>
  {/* <!-- ======= Header ======= --> */}
  <header id="header" className="fixed-top d-flex align-items-cente">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

      <h1 className="logo me-auto me-lg-0"><a href="index.html">Restaurantly</a></h1>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#menu" >Menu</a></li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          <li><img className="add-to-card" src="https://cdn-icons-png.flaticon.com/128/3081/3081559.png" alt=""></img></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <a href="#book-a-table" className="book-a-table-btn scrollto d-none d-lg-flex">Book a table</a>

    </div>
  </header>
  {/* <!-- End Header --> */}

  {/* <!-- ======= Hero Section ======= --> */}
  <section id="hero" className="d-flex align-items-center">
    <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
      <div className="row">
        <div className="col-lg-8">
          <h1>Welcome to <span>Restaurantly</span></h1>
          <h2>Delivering great food for more than 18 years!</h2>

          <div className="btns">
            <a href="#menu" className="btn-menu animated fadeInUp scrollto">Our Menu</a>
            <a href="#book-a-table" className="btn-book animated fadeInUp scrollto">Book a Table</a>
          </div>
        </div>
        <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
          <a href="https://www.youtube.com/watch?v=R8Y7NWC5jgM" className="glightbox play-btn"></a>
        </div>

      </div>
    </div>

  </section>
  {/* <!-- End Hero --> */}
  {/* <!-- ======= About Section ======= --> */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
            <div className="about-img">
              <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/about.jpg" alt=""/>
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End About Section --> */}
    
    {/* <!-- ======= Menu Section ======= --> */}
    <section id="menu" className="menu section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          {/* <h2>Menu</h2> */}
          <p>Check Our Tasty Menu</p>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="menu-flters">
              
              {/* <li data-filter="*" className=".filter-active">All</li> */}
  
    {
      foodcategory.map((curElem,index)=>{
        return(
          <li key={index} onClick={()=>getProducts(curElem)}>
  <li data-filter=".filter-starters">{curElem.CategoryName}</li>
          </li>
        
        )
      })
    }
    {/* //           <li data-filter=".filter-starters">Starters</li>
    //           <li data-filter=".filter-salads">Salads</li>
    //           <li data-filter=".filter-specialty">Specialty</li> */}
            </ul>
          </div>
        </div>
        <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">
        {
        data.map((curElem,index)=>{
  console.log("sdfer ",curElem.foodName)
        return(
            <div key={index}>
          <div className="col-lg-6 menu-item filter-starters">
            <img src={curElem.foodImage}  className="menu-img " alt=""/>
            <div className="menu-content">
              <span>{curElem.foodName}</span><span>Rs.{curElem.Price}</span><button className="addto" onClick={()=>addtocart(curElem)}>Add-to-card</button>
            </div>
            <div className="menu-ingredients">
            {curElem.ingredients}
            </div>
          </div>
          </div>
         
          )
    })
}

</div>
      </div>
    </section>
    
    {/* <!-- ======= Contact Section ======= --> */}
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          {/* <h2>Contact</h2> */}
          <p>Contact Us</p>
        </div>
      </div>

      <div data-aos="fade-up">
        {/* <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe> */}
      </div>

      <div className="container" data-aos="fade-up">

        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, karur, TN 631193</p>
              </div>

              <div className="open-hours">
                <i className="bi bi-clock"></i>
                <h4>Open Hours:</h4>
                <p>
                  Monday-Saturday: <br></br>
                  11:00 AM - 2300 PM
                </p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="8" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Contact Section --> */}
    {/* <!-- ======= Book A Table Section ======= --> */}
    <section id="book-a-table" className="book-a-table">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Reservation</h2>
          <p>Book a Table</p>
        </div>

        <form action="forms/book-a-table.php" method="post" role="form" className="php-email-form" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-4 col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"/>
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input type="text" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input type="text" className="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars"/>
                  <div className="validate"></div>
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows="5" placeholder="Message"></textarea>
            <div className="validate"></div>
          </div>
          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Book a Table</button></div>
     </form>
    </div>
    
       
</section>
 
    {/* <!-- End Book A Table Section --> */}
    </div>
  )
}
export default Food