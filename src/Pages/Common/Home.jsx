import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTestData } from "../../Redux/Slice/testingData";


const Home = () => {
  const [state , setState] = useState({
    email:"",
    pwd:""
  })
  const dispatch = useDispatch()
  console.log(state)

  const handleChange = (e) =>{
    const { name, value } = e.target;
    // Corrected typo: let val = name[vale] -> let val = value
    let val = value;
    setState((prev) => ({
      ...prev,
      [name]: val
    }));
  
    }
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(setTestData(state))
  }
  return (
    <div className="ms-5 mt-5">

    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label  class="form-label">Email address</label>
        <input type="email" class="form-control" name="email" value={state.email} onChange={(e)=>handleChange(e)}/>
      </div>
      <div class="mb-3">
        <label  class="form-label">Password</label>
        <input type="password" class="form-control" name="pwd" value={state.pwd} onChange={(e)=>handleChange(e)}/>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
  );
};

export default Home;
