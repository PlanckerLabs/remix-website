import React from "react";
import "swiper/css";
import "swiper/css/pagination";
const EventCard = ({name, date, location, description, image }) => {
  return (
    <div className="rounded-lg p-3 h-[25.38rem] min-w-[17.28rem]">
      <div className="flex rounded-lg mb-2 h-[17.64rem]">
        <img src={image} alt="event" className="w-full rounded-lg mb-2"/>
      </div>
      <h5 className="font-latoBold text-black text-xl mb-1">{name}</h5>
      <h6 className="font-latoBold text-black text-sm mb-1">{`${date} - ${location}`}</h6>
      <p className="font-sfProRegular text-gray text-sm">{description}</p>
    </div>
  )
}

export default EventCard;
