'use client';
import React,{useState} from 'react';
import axios from 'axios';


const Home = () =>{
  const [color,setColor]= useState()
  
  const [responseMessage,setResponseMessage]= useState()

  const [state, setState] = useState({
        email: "",
        password: ""
      });
    
      const handleChange = (e) => {
        const value = e.target.value;
        setState({
          ...state,
          [e.target.name]: value
        });
      };
    
      const handleSubmit = (e) => {  
        e.preventDefault();  
        const userData = {  
          email: state.email,  
          password: state.password  
        };  
        axios.post("http://localhost:3000/register", userData)  
          .then((response) => {  
            console.log(response.data);  
            setColor(' text-sm ml-7 mt-5 text-blue-500')
            setResponseMessage('user created successfully')

          })  
          .catch((error) => {  
            setColor('text-sm ml-7 mt-5 text-red-500')
            setResponseMessage('invalide email or password')

          });  
      };

    return (
      <main className="flex justify-center bg-slate-200">
        <div className="w-[538px] h-[604.7px] border  bg-white rounded-xl mt-32 flex flex-col shadow-md"> 
          <h1 className="text-4xl  pt-10 ml-7 font-bold">Register</h1>
          <p className="text-2xl  pt-4 ml-7 font-normal ">To get started</p>
          <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-gray-700 ml-7 mt-10">Email
            <input value={state.email} onChange={handleChange} name='email' type="email" className="mt-1 block w-[454.79px]  h-[66.0px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3" placeholder="Enter your email" />
          </label>
          <label className="block text-sm font-medium text-gray-700 ml-7 mt-10">Password
            <input value={state.password} onChange={handleChange} name='password' type="password" className="mt-1 block w-[454.79px]  h-[66.0px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3" placeholder="  Enter your password"/> 
          </label>
          <button type='submit' className= " w-[454.79px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-7 mt-10">register</button>
          </form>
          
         {responseMessage && <p className={color}> {responseMessage} </p>}

          <p className="text-sm ml-7 mt-5">Are you ready? <a href="/" className="text-blue-500">Login</a></p>
        </div>
      </main>
    )
  }
  export default Home;