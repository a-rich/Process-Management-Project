import React, { Component } from 'react';
import '../stylesheets/SignUpForm.scss'

class SignUp extends Component {

    render() {
        return (
        <body>
        <button onclick="document.getElementById('show').style.display='block'" styles="width:auto;">Sign Up</button>
        <div id="show" class="modal">

        	<div class="container">
     
            <form class="modal-content" action="/action_page.php">

        		<h2><font color="blue">CREATE AN ACCOUNT</font></h2>
        		<p>Please fill in this form to create an account.</p>
        		<hr/>
        		 <label for="email"><b>Email Address</b></label>
      			<input type="word" placeholder="Enter Email" name="email" required/>        	    
      			<label for="psw"><b>Password</b></label>
      			<input type="password" placeholder="Enter Password" name="psw" required/>
      			<label for="psw-repeat"><b>Confirm Password</b></label>
      			<input type="password" placeholder="Confirm Password" name="psw-repeat" required/>
      
      			  <label for="firstName"><b>First Name</b></label>
      			<input type="word" placeholder="Enter First Name" name="firstName" required/>
      
     			 <label for="lastName"><b>Last Name</b></label>
     			 <input type="word" placeholder="Enter Last Name" name="lastName" required/>

     			   <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>
        		<button type="submit" class="button2">Sign Up</button>
        		   <p>Already have an account? <a href="#" >Sign in</a>.</p>

        		 </form>	
        	</div>
        </div>
   </body>

        )
    }
}
 

export default SignUp;