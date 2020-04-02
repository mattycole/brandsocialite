import React, { Component } from 'react';
import 'materialize-css';
import $ from 'jquery';

import NavLogo from "../../assets/website_imgs/nav_bar_logo.PNG"

class New_NavBar extends Component { 
    render() {
      return (
        <div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"/>

<nav>
  <div class="nav-wrapper">
     <a href="#" class="brand-logo">Web Zone</a>

     <ul class="right hide-on-med-and-down">

       <li><a href="#" class="red">Home</a></li>
       <li><a href="#">Blog</a></li>
       <li><a href="#">Theme</a></li>
       <li><a href="#">About</a></li>
       <li><a href="#">Contact</a></li>

     </ul>
  </div>
</nav>
<script>
$(document).ready(function(){
          
          $(window).scroll(function(){

            if($(window).scrollTop()>300){
              $('nav').addClass('red');
            }else{
              $('nav').removeClass('red');
            }

          })

     });

  </script>
        </div>
      );
    }
  }
  
  export default New_NavBar;