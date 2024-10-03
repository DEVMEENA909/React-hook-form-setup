// import { useState,useEffect } from 'react'
import {useForm} from "react-hook-form";
const App = ()=>{
  const {register,handleSubmit,watch,formState:{errors}} = useForm();
  const SubmitHandler = (data) =>{
    console.log(data)
    console.log(errors)
  };
  // const [time,settime] = useState(new Date().toLocalTimeString());
  // useEffect(()=>{

  // })
  // setInterval(()=>{
  //   settime(new Date().toLocalTimeString());
  // },1000);
  return(
    <>
    <h1 className='text-3xl  p-10' >Register Utils</h1>
    <form className="flex flex-col gap-6 w-fit ml-10" onSubmit={handleSubmit(SubmitHandler)}>
      <input className="p-2 rounded-md border-2 border-black w-32" type="text" {...register("username",{maxLength:6,required:"username is required"})} placeholder="name" />
    {errors.username?.type == "required" && (
      <p className="text-red-300 mt-3" >{errors.username.message}</p>
    )}
      <input type="submit" className="bg-blue-500 p-2 font-semibold rounded-md" />
    </form>
  </>
 )
}
export default App;



