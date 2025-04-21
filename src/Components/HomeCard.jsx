import React from 'react'
import { hCard } from '../lib/reuse/hcardItems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaArrowRight } from 'react-icons/fa'
import { Button } from '@heroui/react'
import { Link as RouterLink } from "react-router"

function HomeCard() {
  return (
    <div className="bg-[#7c8376] py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hCard.map((item, i) => (
          <div
            key={i}
            className="bg-[#F8F8F8] p-6 rounded shadow-md flex flex-col items-center text-center space-y-4 hover:shadow-lg transition-all hover:scale-105 font-robotoslab"
          >
            <FontAwesomeIcon icon={item.icon} className="text-5xl text-default" />
            <h2 className="text-xl font-semibold text-default">{item.title}</h2>

            {/* Rout to the item page */}
            <RouterLink to={item.path} className="w-full">
              <Button className="bg-primary hover:bg-primary/75 text-foreground text-sm px-4 py-2 rounded-full w-full transition flex items-center justify-center gap-2 font-roboto">
                {item.buttonText}
                <FaArrowRight className="text-foreground" />
              </Button>
            </RouterLink>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeCard
