import "./footer.css"

function Footer() {
    return (
        // <div className='bg-secondary p-3 d-flex m-0 justify-content-around'>
        //   <a href="#"><i class="icon fa-brands fa-square-facebook"></i></a>
        //   <a href="#"><i class=" icon fa-brands fa-square-instagram"></i></a>
        //   <a href="#"><i class="icon fa-brands fa-square-twitter"></i></a>
        //   <a href="#"><i class="icon fa-brands fa-pinterest"></i></a>
        //   <a href="#"><i class="icon fa-brands fa-square-github"></i></a>   
        //   <a href="#"><p>Privacy policy</p></a>
        //   <a href="#"><p>Legal Terms</p></a>
        //   <a href="#"><p>Terms & Conditions</p></a>
        //   <a href="#"><p>AboutUs</p></a>
        //   <a href="#"><p>Contact Us</p></a>
        // </div>



        //New footer

<>
    
    <div className="footer">
    <div className="footer text-start">
                
                <div class="row primary">
             <div class="column blog">
           
             <h3 className="text-info">BlogApp</h3>
           
            
             <div class="social">
               <i class="fa-brands fa-facebook-square"></i>
               <i class="fa-brands fa-instagram-square"></i>
               <i class="fa-brands fa-twitter-square"></i>
               <i class="fa-brands fa-youtube-square"></i>
               <i class="fa-brands fa-whatsapp-square"></i>
             </div>
           </div>

           <div class="column links">
             {/* <h3>Some Links</h3> */}
              <ul>
               <li>
                <a href="#faq">NEWS</a>
               </li>
               <li>
                <a href="#cookies-policy">POLITICS</a>
               </li>
               <li>
               <a href="#terms-of-services">ENTERTAINMENT</a>
               </li>
               <li>
               <a href="#support">SPORT</a>
               </li>
             </ul>
           </div>
           
           <div class="column links">
         {/* <h4>Bad man</h4> */}
           
            <ul>
           
             <li>
              <a href="#faq">ABOUT US</a>
             </li>
             <li>
              <a href="#cookies-policy">ADVERTISE</a>
             </li>
             <li>
              <a href="#terms-of-services">CONTACT US</a>
             </li>
             <li>
              <a href="#support">RSS</a>
             </li>
             <li>
              <a href="#support"> FAQ <li>
              
             </li></a>
             </li>
            </ul>
           
           </div>
           
           
           <div class="column links">
             {/* <h3>S</h3> */}
              <ul>
               <li>
                <a href="#faq">F.A.Q</a>
               </li>
               <li>
                <a href="#cookies-policy">COOKIES POLICY</a>
               </li>
               <li>
               <a href="#terms-of-services">TERMS OF SERVICE</a>
               </li>
               <li>
               <a href="#support">SUPPORT</a>
               </li>
             </ul>
           </div>
           <div class="column links">
             {/* <h3>S</h3> */}
              <ul>
               <li>
                <a href="#faq">CAREERS</a>
               </li>
               <li>
                <a href="#cookies-policy">ARCHIVE</a>
               </li>
               <li>
               <a href="#terms-of-services">USER AGREEMENT</a>
               </li>
               <li>
               <a href="#support">COMMENT POLICY</a>
               </li>

               <li>
               <a href="#support">DMCA POLICY</a>
               </li>
             </ul>
           </div>
           
           {/* <div class="column subscribe">
            <h3>Newsletter</h3>
             <div>
              <input type="email" placeholder="Your email id here" />
              <button>Subscribe</button>
             </div>
           
           </div> */}
           
           </div>
           
           <div class="row copyright">
             {/* <div class="footer-menu">
           
             <a href="">Home</a>
             <a href="">About</a>
             <a href="">Contact</a>
             <a href="">Blog</a>
             <a href="">Social</a>
           
             </div> */}
             <hr />
              <p className="">Copyright &copy; 2022 Dev. ATM, <a href="mailto:ismailhabeeboluwatobi995@gmail.com">Dev. MAHISH</a> </p>
           </div>
           
                               
               </div>
    </div>
   
    </>
  )
}

      

export default Footer ;