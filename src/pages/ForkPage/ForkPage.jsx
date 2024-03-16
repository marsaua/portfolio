import React, { useState } from "react";
import DataItem from "../../components/DataItem";
import hero from "../../img/fork/hero.jpg"
import aboutFork from "../../img/fork/aboutFork.jpg"

const ForkPage = () => {
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
                <h3 className="page__name">Fork App</h3>
                <a className="page__link" target="blank" href="https://marsaua.github.io/step-project-two">https://marsaua.github.io/step-project-two</a>
            </div>
            <p className="about__page">The page demonstrates the possibilities of adaptive layout. The project was made by two members. The project was compiled using Gulp.</p>
            <div className="protect__content">
                <DataItem
                    handleImg={(id) => handleImg(id)}
                    handleOutside={handleOutside}
                    className="content__item-right"
                    id="1"
                    isScale={scale}
                    imgSrc={hero}
                    description='The page is made with minimal use of JS - mainly with media requests. The navigation menu is an independent containers that acquires a "display: none" or a "display: block" depending on the screen size. The burger menu is accompanied by animation.'
                />
                <DataItem
                    handleImg={(id) => handleImg(id)}
                    handleOutside={handleOutside}
                    className="content__item-left"
                    id="2"
                    isScale={scale}
                    imgSrc={aboutFork}
                    description='This section is made as flexible as possible for adaptive layout, without using media requests, using grid-template-columns: repeat(auto-fit, minmax(400px, auto))'
                />
            </div>
            
        </section>
    )
}
export default ForkPage