import React from "react";
import { FormattedMessage, useIntl } from 'react-intl';
import Carousel from "../ui/Carousel";
import devconImage from "../../assets/images/devcon.png";
import ethSafariImage from "../../assets/images/ethSafari.png";
import klImage from "../../assets/images/KL-meetup.png";
import solidityImage from "../../assets/images/devconnect_solidity_summit.jpg";
import remixImage from "../../assets/images/devconnect-Remix.png";
import denverImage from "../../assets/images/ethdenver_03.jpg";
import EventCard from "../ui/EventCard";
import {Section} from "../../scroll-section";
import {sectionId} from "../../constants";
import {SwiperSlide} from "swiper/react";

const Events = () => {
    const intl = useIntl()

    const eventsData = [
        {
            id: 0,
            name: 'Devcon',
            date: intl.formatMessage({ id: "events.0.date" }),
            image: devconImage,
            location: intl.formatMessage({ id: "events.0.location" }),
            description: intl.formatMessage({ id: "events.0.description" }),
        },
        {
            id: 1,
            name: 'EthSafari',
            date: intl.formatMessage({ id: "events.1.date" }),
            image: ethSafariImage,
            location: intl.formatMessage({ id: "events.1.location" }),
            description: intl.formatMessage({ id: "events.1.description" }),
        },
        {
            id: 2,
            name: intl.formatMessage({ id: "events.2.name" }),
            date: intl.formatMessage({ id: "events.2.date" }),
            image: klImage,
            location: intl.formatMessage({ id: "events.2.location" }),
            description: intl.formatMessage({ id: "events.2.description" }),
        },
        {
            id: 3,
            name: intl.formatMessage({ id: "events.3.name" }),
            date: intl.formatMessage({ id: "events.3.date" }),
            image: solidityImage,
            location: intl.formatMessage({ id: "events.3.location" }),
            description: intl.formatMessage({ id: "events.3.description" }),
        },
        {
            id: 4,
            name: 'Devconnnect',
            date: intl.formatMessage({ id: "events.4.date" }),
            image: remixImage,
            location: intl.formatMessage({ id: "events.4.location" }),
            description: intl.formatMessage({ id: "events.4.description" }),
        },
        {
            id: 5,
            name: 'EthDenver',
            date: intl.formatMessage({ id: "events.5.date" }),
            image: denverImage,
            location: intl.formatMessage({ id: "events.5.location" }),
            description: intl.formatMessage({ id: "events.5.description" }),
        }
    ];

    return (
        <Section id={sectionId.events}>
            <div className="md:bg-events-desktop
        bg-events-mobile
        bg-no-repeat
        bg-remix-desktop-background-position">
                <div className="container mx-auto pb-20 pt-36 md:pt-50">
                    <h1 className="text-center font-sfProThin pb-2 md:text-8xl"><FormattedMessage id="events.events" /></h1>
                    <h2 className="text-center text-4xl md:text-5xl font-latoBold pb-6"><FormattedMessage id="events.mixingItUp" /></h2>
                    <p className="text-center
                font-sfProRegular
                text-gray
                text-lg xl:px-72 lg:px-6 px-6">
                        <FormattedMessage id="events.text" />
                    </p>
                    <div className="container mx-auto pb-20 pt-2">
                        <Carousel>
                            {
                                eventsData.map((event) => (
                                    <SwiperSlide key={event.id}>
                                        <EventCard
                                            date={event.date}
                                            image={event.image}
                                            description={event.description}
                                            name={event.name}
                                            location={event.location}
                                        />
                                    </SwiperSlide>

                                ))
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Events;
