import React from 'react'
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (  <div className="w-100 d-flex align-items-center justify-content-center bg-dark" style={{opacity:'.8',height:'100vh'}} >
  <div>
<Spinner animation="border" variant="primary" />
  </div>
</div>
  )
}

export default Loader