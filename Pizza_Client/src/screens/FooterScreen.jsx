import React from 'react'
import { Image } from 'react-bootstrap'
import { FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { ImGoogle } from 'react-icons/im'

const FooterScreen = () => {
  return (
    <div>
      <div className="container"  style={{backgroundColor: "indigo",maxWidth:'100%'}} >
 
  <footer
          className="text-center text-lg-start text-white w-100"
          style={{backgroundColor: "indigo"}}
          >
  
    <div className="container p-4 pb-0">
     
      <section className="">
     
        <div className="row">
         
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold fs-5">
              Company name
            </h6>
            <Image
              src="https://pizzaguardians.com.au/wp-content/uploads/2020/03/logo-borderless.png"
              alt="logo"
              style={{ height: "45px",width:'200px',marginBottom:'10px' }}
            />
             <p style={{marginLeft:'10px',fontSize:'1.3rem'}}>
              <span style={{color:'deeppink',fontWeight:'bold'}}> Raj-Pizza Hut</span> 
            </p>
            <Image
              src="https://lh3.googleusercontent.com/p/AF1QipM6HnEcTq-qpUP9rbCDaq5Yhq3sz-5acUCBF7L7=w1080-h608-p-no-v0"
              alt="logo"
              style={{ height: "50px",width:'180px',borderRadius:'10px', marginLeft:'0px' }}
            />
          </div>
         

          <hr className="w-100 clearfix d-md-none" />

         
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold fs-5">Pages</h6>
            <p>
              <a href='/' className="text-white">Home</a>
            </p>
            <p>
              <a href='/about'  className="text-white">About Us</a>
            </p>
            <p>
              <a href='/contact'  className="text-white">Contact Us</a>
            </p>
            <p>
              <a href='/policy'  className="text-white">Blog</a>
            </p>
          </div>
         

          <hr className="w-100 clearfix d-md-none" />

        
          <hr className="w-100 clearfix d-md-none" />

        
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold fs-5">Contact</h6>
            <p><i className="fas fa-home mr-3"></i>Dhaka,Mirpur-6,Bangladesh</p>
            <p><i className="fas fa-envelope mr-3"></i>merajulhasan150@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> +880 1704357909</p>
          </div>
         
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold fs-5">Follow us</h6>

           
            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: "#3b5998"}}
               href="https://www.facebook.com/merajoulehasan.utsho"
               role="button"
               target='_blank'
               ><FiFacebook></FiFacebook></a>

           
            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: "#55acee"}}
               href="#!"
               role="button"
               target='_blank'
               ><FiTwitter></FiTwitter></a>

           
            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: "#dd4b39"}}
               href="#!"
               role="button"
               target='_blank'
               ><ImGoogle></ImGoogle></a>

           
            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: "#ac2bac"}}
               href="https://www.instagram.com/h_m_merajoule_hasasn/"
               role="button"
               target='_blank'
               ><FiInstagram></FiInstagram></a>

            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: "#0082ca"}}
               href="https://www.linkedin.com/in/h-m-merajul-hasan-62687b23a/"
               role="button"
               target='_blank'
               ><FiLinkedin></FiLinkedin></a>
           
            <a
               className="btn btn-primary btn-floating m-1"
               style={{backgroundColor: "#333333"}}
               href="https://github.com/HNMerajulhasan"
               role="button"
               target='_blank'
               ><FiGithub></FiGithub></a>
          </div>
        </div>
       
      </section>
    
    </div>
  
    <div
         className="text-center p-3"
         style={{backgroundColor:"rgba(0, 0, 0, 0.2)"}}
         >
      © 2023 Copyright: Merajul Hasan The Web Doctor
        
    </div>
   
  </footer>
 
</div>

    </div>
  )
}

export default FooterScreen
