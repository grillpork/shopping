import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      return alert("Password doesn't match!");
    }
    console.log(form);

    try {
      const res = await axios.post('http://localhost:5173/api/register', form);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      Register

      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-10'>
        <div>
          <label>Email</label>
          <input
            type="email"
            name='email'
            onChange={handleOnChange}
            className='text-black'
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name='password'
            onChange={handleOnChange}
            className='text-black'
          />
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name='confirmPassword'
            onChange={handleOnChange}
            className='text-black'
          />
        </div>

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
