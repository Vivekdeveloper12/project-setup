import React from 'react'
import { useSelector } from 'react-redux';

 const About = () => {
    let data = useSelector((state)=>state)
    console.log(data)
  return (
    <div>About</div>
  )
}
export default About;
