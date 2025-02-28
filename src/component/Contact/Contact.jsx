import React from 'react'
import './contact.css'
import msg from '../Assests/msg-icon.png'
import email from '../Assests/mail-icon.png'
import phone from '../Assests/phone-icon.png'
import location from '../Assests/location-icon.png'
import white_arrow from '../Assests/white-arrow.png'
const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0ac11c54-dd31-475c-a5f4-e7c764bbc176");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggwstions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={email} alt="" /> Contact456@gmail.com</li>
            <li><img src={phone} alt="" /> +1 123-456-7899</li>
            <li> <img src={location} alt="" />77 Masssachusetts Ave, Cambridge <br /> MA 02139, united States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type="tel"  name='phone' placeholder='Enter your mobile number' required/>
            <label >Write your message here </label>
            <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span> {result}</span>
      </div>
    </div>
  )
}

export default Contact
