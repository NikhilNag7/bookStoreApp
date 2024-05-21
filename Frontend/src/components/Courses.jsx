import React from 'react'
import list from "../../public/list.json"
import "../components/Cards";
import Cards from '../components/Cards';
import {Link} from "react-router-dom"

export default function Courses() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>
                We're delighted to have you{" "}
                <span className='text-pink-500 '>Here! :)</span>
            </h1>
            <p className='mt-12 font-bold'>
            Course registration is your gateway to shaping your academic journey. It's a pivotal moment where you select the subjects that will inspire and challenge you, setting the course for your educational pursuits. With each registration, you're not just enrolling in classes; you're embarking on a voyage of knowledge acquisition and personal growth. Whether it's exploring new interests, honing your skills, or delving deeper into your chosen field, course registration is your opportunity to curate a curriculum that reflects your passions and ambitions. So, seize this moment with enthusiasm, for each course you choose is a step closer to realizing your academic aspirations.
            </p>
            <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
            </Link>
            
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                list.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
    </>
  )
}
