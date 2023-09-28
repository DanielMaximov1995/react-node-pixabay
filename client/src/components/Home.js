import React from 'react'

const Home = () => {
  return (
    <div className='py-10 text-[24px] text-center flex justify-center flex-wrap'>
        <img  src={'https://cdn-icons-png.flaticon.com/512/2950/2950033.png'} alt='Hello' className="w-[200px] h-[200px] hello my-4 transition-all" />
        <p className='w-full'>
        Click on "Choose Category" to choose a category.<br/>
        You can click on one of the pictures to get information about them.
        <br/><br/>
        If you want to clear, you can click the button with the "refresh" icon.
        <br/><br/>
        Enjoy!
        </p>
    </div>
  )
}

export default Home