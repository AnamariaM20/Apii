import React from 'react'
import "./index.css"


const Button = ({ buttonText, reqType, setReqType }) => {
  return (
    <div className='button'>


      <button
        className={buttonText === reqType ? "selected" : null}
        type='button'
        onClick={() => setReqType(buttonText)}
      >
        {buttonText}
      </button>

      <div className={buttonText === reqType ? "users" : null}>
      </div>
    </div>
  )
}

export default Button