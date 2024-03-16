import React from "react";
// import photo from "../../img/IMG_20201206_123723 copy.png"
// import photo from "../../img/3.jpg"
import photo from "../../img/2.jpg"
// import photo from "../../img/5.jpg"



import "./HomePage.scss"

const HomePage = () => {
    return (
        <section className="home">
            <div className="home__photo">
                <img className="img" src={photo} alt="Selfphoto" />
                <p className="dascription__title"> <span className="dascription__title-name">Svitlana Bilokin</span> Front-end [React] developer</p>
            </div>
        </section>
    )
}
export default HomePage