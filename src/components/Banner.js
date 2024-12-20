import React from "react";
import {EventCalendar} from "./EventCalendar";

export const Banner = () => {
    return (
        <div className="relative">
            <img
                src={require('./../assets/images/banner.webp')}
                className="w-full h-auto mt-20"
                alt="banner"
            />
            <div className="container">
                <div className="mt-8 lg:mt-0 lg:absolute lg:bottom-8">
                    <EventCalendar/>
                </div>
            </div>
        </div>
    )
}
