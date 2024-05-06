import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

function ActiveUserİtem({...props}) {
  return (
    <div className='my-3'>
      <FaCheckCircle color="green" />
          <label className="ms-2"  >
            {props.username}
          </label>
    </div>
  )
}

export default ActiveUserİtem
