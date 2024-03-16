import React, { useState } from "react";
import DataItem from "../../components/DataItem";
import change from "../../img/appointment/change.jpg"
import newApp from "../../img/appointment/newApp.jpg"
import registr from "../../img/appointment/registr.jpg"

const AppointmentPage = () => {
    const [scale, setScale] = useState({})

    const handleImg = (id) => {
        if (Object.keys(scale).length === 0) {
            setScale(id)
        } else {setScale({})}
    }
    const handleOutside = (event) => {
        if (!event.target.closest('.item__img')) {
            setScale({})
        }
    }

    return (
        <section className="wrapper">
            <div className="page__title">
                <h3 className="page__name">Doctor's Appointment</h3>
                <a className="page__link" href="https://marsaua.github.io/page-project-3/">https://marsaua.github.io/page-project-3/</a>

            </div>
            <p className="about__page">The "doctor's appointment" system was developed using JS with class components. The team comprised three members and the project was executed through seamless collaboration, maintaining constant online communication throughout. The project was compiled using Gulp.</p>
            <div className="protect__content">
                <DataItem
                    handleImg={(id) => handleImg(id)}
                    handleOutside={handleOutside}
                    className="content__item-right"
                    id="1"
                    isScale={scale}
                    imgSrc={registr}
                    description='The home page contains basic information, made with tabs and an authorization modal window with an option outside click.'
                />
                <DataItem
                    handleImg={(id) => handleImg(id)}
                    handleOutside={handleOutside}
                    className="content__item-left"
                    id="2"
                    isScale={scale}
                    imgSrc={newApp}
                    description='In the personal page, users can create appointment cards to doctors. The information collected by the form varies depending on the selected specialist.'
                />
                <DataItem
                    handleImg={(id) => handleImg(id)}
                    className="content__item-right"
                    handleOutside={handleOutside}
                    id="3"
                    isScale={scale}
                    imgSrc={change}
                    description='Existing cards can be changed or deleted. There is also a search option and sorting by status and urgency'
                />
                
            </div>
            
        </section>
    )
}
export default AppointmentPage