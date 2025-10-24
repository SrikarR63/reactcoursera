import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
    const[formData,setFormData]=useState({
        name: '',
        email: '',
        feedback: ''
    });

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setFormData({...formData,
        [name]:value}
    );
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        const confirmationMessage=`Name: ${formData.name} Email: ${formData.email} Feedback: ${formData.feedback}`;
        const isConfirmed=window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
        if(isConfirmed){
            console.log('Submitting feedback:', formData);
            setFormData({
                name: '',
                email: '',
                feedback: ''
              });
              alert('Thank you for your valuable feedback!');
        }
    };

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <label for="name">Username:</label>
        <input name="name" id="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange}/>
        <label for="email">Email:</label>
        <input name="email" id="email" type="text" placeholder="Your Email" value={formData.email} onChange={handleChange}/> 
        <label for="feedback">Feedback:</label>
        <textarea name="feedback" id="feedback" placeholder="Your Feedback" value={formData.feedback} onChange={handleChange}></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
