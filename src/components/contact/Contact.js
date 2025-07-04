import React from 'react'
import './Contact.css'
// import { MdOutlineSignalCellularAlt } from "react-icons/md";

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contactContainer">
        <h1>Contact Us</h1>
        <hr />
        <div className="contactContentHold">
          <div className="contactDetails">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4089419141615!2d3.353727610676727!3d6.595990293370248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b923903a14b7b%3A0xfef97a54b9ec974b!2s10%20Anuoluwapo%20Cl%2C%20Allen%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1751288411007!5m2!1sen!2sng" width="600" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='map'></iframe>
          </div>
          <form action="https://formspree.io/f/xqkraplo" method="POST">
            <div className='firstRow'>
              <input type='text' placeholder='Name' name='name' required></input>
              <input type='text' placeholder='Email' name='_replyto' required></input>
            </div>
            <div className='firstRow'>
              <input className='phoneNumber' type='tel' placeholder='Phone Number' name='phone' required></input>
              {/* <input type='text' className='country' placeholder='Country' name='country'></input> */}
            </div>
            <textarea className='request' placeholder='Please Describe Your Request?' name='message' required></textarea>
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact