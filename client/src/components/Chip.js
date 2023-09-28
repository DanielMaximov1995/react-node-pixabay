import React from 'react'

const Chip = (props) => {
    const { icon , title , className } = props

    const classes = `${className} bg-primary flex justify-center items-center gap-x-2 text-[20px] p-2 rounded-xl`

  return (
    <div {...props} className={classes}>
        <span className={!icon && `hidden`}>{icon}</span>
        <span className={!title && `hidden`}>{title}</span>
    </div>
  )
}

export default Chip