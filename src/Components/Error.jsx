import React from 'react'

const Error404 = ({message}) => {
  return (
    <div>
        <h2>Error404 <span style={{color: 'blue'}}>|</span> {message}</h2>
    </div>
  )
}

export default Error404