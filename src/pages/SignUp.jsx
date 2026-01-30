import React, { useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const goTo = useNavigate()

  const validateName = (name) => {
    const namePattern = /^[a-zA-Z]+([ \-'][a-zA-Z]+)*$/;
    const isValid = namePattern.test(name)
    if(!isValid){
        setNameError('must contain letters')
        return false
    }
    if(name.length < 4){
        setNameError('must contain more than 4 characters')
        return false
    }
    setNameError('')
    return true
    
  };

  const validateEmail = (email) => {
    const emailPattern  = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ 
    const isValid = emailPattern.test(email)

    if(email.length < 10){
        setEmailError('Email must contain more than 8 characters')
        return false
    }

    if(!isValid){
        setEmailError('email must repsect email format (example@email.com)')
        return false
    }

    setEmailError('')
    return true
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    const isValid = passwordPattern.test(password)
    if(!isValid){
        setPasswordError('Please enter a strong password')
        return false
    }

    setPasswordError('')
    return true


  };

  const createUser = () => {
    // valider name, email, password , confirm password
    const isValidName = validateName(name);
    const isEmailValid = validateEmail(email)
    const isPasswordValid = validatePassword(password)
    const matchPassword = password == confirmPassword
    if(isPasswordValid && !matchPassword){
        setConfirmPasswordError('please match your password')
        return 
    }
    setConfirmPasswordError('')
    if (isValidName && isEmailValid && isPasswordValid) {
      const userData = {
        name: name,
        email: email,
        password: password,
      };
      const newUsers = [...users];

      newUsers.push(userData);
      setUsers(newUsers);
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      goTo('/home')

    }
  };

  console.log(users);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
        <Navbar />
      <form className="w-[25vw]  bg-green-950 rounded-lg p-4 text-white flex flex-col gap-y-4">
        <h1 className="text-white text-3xl text-center">Sign Up Form</h1>
        <div className="flex flex-col gap-y-2">
          <label className="  font-semibold">Name</label>
          <input
            className="w-full py-2 px-4 border-2 rounded-lg"
            value={name}
            type="text"
            placeholder="Enter your Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && (
            <div className="text-red-800 flex gap-x-1 items-center">
              <MdErrorOutline />
              {nameError}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="  font-semibold">Email</label>
          <input
            className="w-full py-2 px-4 border-2 rounded-lg"
            type="email"
            value={email}
            placeholder="email@demo.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && (
            <div className="text-red-800 flex gap-x-1 items-center">
              <MdErrorOutline />
              {emailError}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="  font-semibold">Password</label>
          <input
            className="w-full py-2 px-4 border-2 rounded-lg"
            type="password"
            value={password}
            placeholder="enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <div className="text-red-800 flex gap-x-1 items-center">
              <MdErrorOutline />
              {passwordError}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="  font-semibold">Confirm Password</label>
          <input
            className="w-full py-2 px-4 border-2 rounded-lg"
            type="password"
            value={confirmPassword}
            placeholder="confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPasswordError && (
            <div className="text-red-800 flex gap-x-1 items-center">
              <MdErrorOutline />
              {confirmPasswordError}
            </div>
          )}
        </div>
        <button
          type="button"
          className="bg-white text-green-900 text-md font-semibold w-fit px-4 py-2 rounded-full mx-auto"
          onClick={createUser}
        >
          Sign Up
        </button>
        <span className="text-sm text-center">
          Already Have an account ? Login
        </span>
      </form>
    </div>
  );
}

export default SignUp;
