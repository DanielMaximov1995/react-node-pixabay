import React from 'react'

const Chip = (props) => {
    const { icon , title } = props

  return (
    <div className='bg-primary flex justify-center items-center text-[20px] p-2 rounded-xl'>
        <span>{icon}</span>
        <span>{title}</span>
    </div>
  )
}

export default Chip