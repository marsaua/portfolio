import React from "react";
import "./Contacts.scss"
import { ReactComponent as Email } from "../../img/contacts/email.svg"
import {ReactComponent as Linkedin} from "../../img/contacts/linkedin.svg"
import {ReactComponent as Phone} from "../../img/contacts/phone.svg"
import {ReactComponent as Telegram} from "../../img/contacts/telegram.svg"


const Contacts = () => {
    return (
        <section className="contacts__wrapper page__title">
            <h3 className="page__name">Contacts</h3>
            <div className="contacts__item">
                <Phone />
                <a href="tel:+380982884618">+38098 288 4618</a>
            </div>
            <div className="contacts__item">
                <Telegram />
                <p>@bilokinSvitlana</p>
            </div>
            <div className="contacts__item">
                <Linkedin />
                <a target="blank" href="https://www.linkedin.com/in/svitlana-bilokin-291a38292/">linkedin.com</a>
            </div>
            <div className="contacts__item">
                <Email/>
                <a href="mailto:marsaua001@gmail.com">marsaua001@gmail.com</a>
            </div>
        </section>
    )
}
export default Contacts