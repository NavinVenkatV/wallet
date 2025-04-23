import React from 'react'

function Alert({text} : {
    text : string,
    action : string
}) {
  return (
    <div className='p-3 w-[150px]'>
      {text}
    </div>
  )
}

export default Alert
