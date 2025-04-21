import React from 'react'
import { aItems } from '../lib/reuse/activityItems'
import { Button, Link } from '@heroui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function ActivityHome() {
  return (
    <div className="bg-[#F8F8F8] py-10 font-roboto">
        <p className='text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl items-center mb-7 font-robotoslab text-default'>আমাদের কার্যক্রম…</p>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {aItems.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-full hover:scale-105 transition-all duration-400"
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow p-4">
              <div>
                <h2 className="text-lg font-bold mb-2 text-default">{item.title}</h2>
                <p className="text-secondary text-sm">{item.description}</p>
              </div>
              <div className="mt-4">
                <Link href={item.links}>
                <Button className="bg-secondary hover:bg-secondary/85 text-white px-4 py-2 text-sm rounded-md transition-all duration-300 drop-shadow-sm hover:drop-shadow-2xl">
                  {item.btntxt} <FontAwesomeIcon icon={faChevronRight} />

                </Button>
                </Link>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityHome
