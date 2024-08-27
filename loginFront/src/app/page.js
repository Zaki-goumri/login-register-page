'use client';
import React, { useState,useEffect,useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";



const Home = () =>{
  
  const router = useRouter();
  
  const navigateToPage = () => {
    router.push('/login');  // Replace '/target-page' with the actual route you want to navigate to
  };

 const [responseMessage,setResponseMessage]= useState()
 
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: data.email,
      password: data.password
    };
    axios.post("http://localhost:3000", userData).then((response) => {
           navigateToPage()
          })
          .catch(error => { 
            if (error.response) {  
            
            
              setResponseMessage(error.response.data);


            } else if (error.request) { 
              setResponseMessage(error.request.data);
            } else {  
              setResponseMessage(error.message.data);
            }  
       

          });  
  
  };
 
  return (
   <main className="flex justify-center bg-slate-200">
 
      <div className="w-[538px] h-[604.7px] border  bg-white rounded-xl mt-32 flex flex-col shadow-md"> 
        <p className="text-4xl  pt-10 ml-7 font-bold ">Login</p>
        <p className="text-2xl  pt-4 ml-7 font-normal ">To get started</p>
       
          <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium text-gray-700 ml-7 mt-10">Email
          <input 
          type="email" 
          className="mt-1 block w-[454.79px]  h-[66.0px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3" 
          placeholder="Enter your email" 
          value={data.email} 
          onChange={handleChange}
          name="email"
          />
        </label>
        <label className="block text-sm font-medium text-gray-700 ml-7 mt-10">Password
          <input   name="password" onChange={handleChange} type="password" className="mt-1 block w-[454.79px]  h-[66.0px] border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3" placeholder="Enter your password" value={data.password}/> 
        </label>
        <button type="submit" className= " w-[454.79px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-7 mt-10">Login</button>
        </form>
      
        {responseMessage &&<p className="text-sm ml-7 mt-4 text-red-700"> email or password is wrong </p>}
 
      
       <p className="text-sm ml-7 mt-4">Don't have an account? <a href="/register" className="text-blue-500">Register</a></p>
      </div>
    </main>

  )
}
export default Home;