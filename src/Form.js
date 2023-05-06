import React from "react";
import './Form.css'
function Form(){
    return(
        <>
<form id="msform">
<ul id="progressbar">
    
  </ul>
  <fieldset>
    <h2 className="fs-title">Apply for book</h2>
    <h3 className="fs-subtitle"></h3>
    <input type="text" name="email" placeholder="Library User Id" />
    <input type="password" name="pass" placeholder="Password" />
    <input type="button" name="next" className="next action-button" value="Confirm" />
  </fieldset>
  <fieldset>
    <h2 className="fs-title">Social Profiles</h2>
    <h3 className="fs-subtitle">Your presence on the social network</h3>
    <input type="text" name="twitter" placeholder="Twitter" />
    <input type="text" name="facebook" placeholder="Facebook" />
    <input type="text" name="gplus" placeholder="Google Plus" />
    <input type="button" name="previous" className="previous action-button" value="Previous" />
    <input type="button" name="next" className="next action-button" value="Next" />
  </fieldset>
  <fieldset>
    <h2 className="fs-title">Personal Details</h2>
    <h3 className="fs-subtitle">We will never sell it</h3>
    <input type="text" name="fname" placeholder="First Name" />
    <input type="text" name="lname" placeholder="Last Name" />
    <input type="text" name="phone" placeholder="Phone" />
    <textarea name="address" placeholder="Address"></textarea>
    <input type="button" name="previous" className="previous action-button" value="Previous" />
    <a href="https://twitter.com/GoktepeAtakan" className="submit action-button" target="_top">Submit</a>
  </fieldset>
</form>
        </>
    );
}
export default Form;