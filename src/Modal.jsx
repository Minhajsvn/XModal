import { useState } from 'react';
import './App.css';

// eslint-disable-next-line react/prop-types
export default function Modal({ setIsOpen}) {
    const [formData, setFormData] = useState();

    const handleChange = (e) => {
        let value = e.target.value;
        setFormData({
            ...formData,
            [e.target.id] : value
        })

    }

    const handleSubmit = () => {
        // e.preventDefault();
        if(formData != undefined){

            if(formData.phone.length != 10){
                alert("Invalid phone number. Please enter a 10-digit phone number.");
            }


            let date = new Date;
            let day = date.getDate();
            let month = date.getMonth()+1;
            let year = date.getFullYear();

            let formDate = new Date(formData.dob).toLocaleDateString();
            let today = new Date(`${year}-${month}-${day}`).toLocaleDateString()

            if(formDate > today){
                alert("Invalid date of birth. Date of birth cannot be in the future.")
            }

            if(!formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                alert("Invalid email. Please check your email address.")
            }
        }
    }

  return (
        <div className='darkBg' onClick={() => setIsOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form className='form' action="submit">
                <h2>Fill Details</h2>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" onChange={handleChange} required/>
                <label htmlFor="email" onChange={handleChange}>Email Address:</label>
                <input type="email" id="email" onChange={handleChange} required/>
                <label htmlFor="phone">Phone Number:</label>
                <input type="text" id="phone" onChange={handleChange} required/>
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" onChange={handleChange} required />
                <button type='submit' onClick={handleSubmit} className="submit-button">Submit</button>
            </form>
        </div>
        </div>
  )
}

