import React, { useState, useRef, useEffect } from 'react'
import Button from '../Button/Button'
import './Contact.css'
import { validateEmail, validateSubject } from '../utils/validation';

const Contact = () => {
const [subject, setSubject] = useState('');
const [email, setEmail] = useState('');
const [description, setDescription] = useState('');
const inputSubjectRef = useRef(null)
const [subjectError, setSubjectError] = useState('');


const handleChangeInputSubject = (event) => {
  const value = event.target.value;

  setSubject(value);

  if (!validateSubject(value)) {
    setSubjectError('عنوان باید حداقل 8 کاراکتر باشد');
  } else {
    setSubjectError('');
  }
};

const handleChangeInputEmail = (event) => {
    if (validateEmail(event.target.value)) {
        setEmail (event.target.value);

    }
};

const handleChangeTextArea = (event) => {
    setDescription(event.target.value);
};

const handleSubmit =  () => {
    console.log("subject" ,subject);
    console.log("email" ,email);
    console.log("description" ,description);

};
useEffect(() => {
    inputSubjectRef.current.focus();
}, []);


return (
    <div className='Contact'>
        <div className='formControl'>
            <input
            onChange={handleChangeInputEmail}
            type='email'
            placeholder='Email' />

        </div>
        <div className='formControl'>
            <textarea onChange={handleChangeTextArea}>
                Your request
            </textarea>
        </div>
        <div className='formControl'>
  <input
    ref={inputSubjectRef}
    onChange={handleChangeInputSubject}
    type='text'
    placeholder='subject'
  />

  {subjectError && (
    <p className='error'>
      {subjectError}
    </p>
  )}
</div>
        <div className='formControl'>
            <Button onClick={handleSubmit}>
             Submit
            </Button>
        </div>
    </div>
);
};
  export default Contact;
