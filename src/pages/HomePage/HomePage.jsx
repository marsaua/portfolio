import React from "react";
// import photo from "../../img/IMG_20201206_123723 copy.png"
// import photo from "../../img/3.jpg"
import photo from "../../img/2.jpg"
// import photo from "../../img/5.jpg"



import "./HomePage.scss"

const HomePage = () => {
    return (
        <section>
            <div className="home">
                <div className="home__photo">
                    <img className="img" src={photo} alt="Selfphoto" />
                    <p className="dascription__title"> <span className="dascription__title-name">Svitlana Bilokin</span> Front-end [React] developer</p>
                </div>
            </div>
            <p className="aboutme__text">I am fascinated about front-end development, I study quickly, I have a different educational and qualification experience, I am open to new and I have team work experience. I am looking for a highly qualified team that is ready to share their experience and have place in the project for me.</p>

        </section>
    )
}
export default HomePage