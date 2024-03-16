import React, { useState } from "react";
import DataItem from "../../components/DataItem";
import services from "../../img/ham/services.jpg"
import people from "../../img/ham/people.jpg"
import work from "../../img/ham/work.jpg"


const HamPage = () => {
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
                <h3 className="page__name">The Ham</h3>
                <a className="page__link" href="https://marsaua.github.io/stepProject-fist/">https://marsaua.github.io/stepProject-fist/</a>

            </div>
            <div className="protect__content">
                <p className="about__page">The first project was made independently with basic knowledge of JS.</p>
                <DataItem
                    handleImg={(id) => handleImg(id)}
                    handleOutside={handleOutside}
                    className="content__item-right"
                    id="1"
                    isScale={scale}
                    imgSrc={services}
                    description='Tabs section - defines the active tab using "event.target.id" and displays information with the corresponding data-attribute.'
                />
                <DataItem
                    handleImg={(id) => handleImg(id)}
                    handleOutside={handleOutside}
                    className="content__item-left"
                    id="2"
                    isScale={scale}
                    imgSrc={work}
                    description='"Our Amazing Work" - section with filters. Each time you click on "see more", additional photos are loaded, which are displayed in the "all" tab and the tab corresponding to the photo section.'
                />
                <DataItem
                    handleImg={(id) => handleImg(id)}
                    handleOutside={handleOutside}
                    className="content__item-right"
                    id="3"
                    isScale={scale}
                    imgSrc={people}
                    description='"What People Say About the Ham" - dynemic section with comments. Done using an array of data. Switch between users works ин сlicking on the photo or arrows.'
                />
            </div>
            
        </section>
    )
}
export default HamPage