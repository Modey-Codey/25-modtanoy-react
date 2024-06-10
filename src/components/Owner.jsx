import React from 'react'
import Navbar from './Navbar'

const Owner = () => {
  return (
    <>
    <Navbar />
    <div className='flex flex-col items-center mt-16 gap-8'>
        <h1 className='text-4xl '>Modtanoy - Group A - 2</h1>
        <img className='w-64 ' src="https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/416686578_2405971049610398_2783208933960134797_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF6pL5qi3ie2bokQIMyUjoJLgA1iP3nzrcuADWI_efOt87UoLgRwGlYe7bodyyy3XJ7hx34ANppDKEwDCpb2GkF&_nc_ohc=Mi5RLsmzPhYQ7kNvgHm6SBV&_nc_ht=scontent.fbkk29-4.fna&oh=00_AYCfSb2dMCH2NisCNHdN28Wxb4yQ6XNAETssJoFSMgwsEA&oe=666A43F8" alt="" />
        <h2 className='font-bold'>Short Biography:</h2>
        <p>I'm Modtanoy who is a highly accomplished piano instructor with over 20 years of experience in teaching students of all ages and skill levels.</p>
    </div>
</>
  )
}

export default Owner