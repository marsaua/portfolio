import React, { useEffect, useRef, useState } from "react";
import "./ProtectPage.scss"
import admin from "../../img/protect/letters.jpg"
import user from "../../img/protect/admin.jpg"
import favorites from "../../img/protect/favorites.jpg"
import basket from "../../img/protect/basket.jpg"
import ProtectItem from "../../components/DataItem";


const ProtectPage = () => {
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
                <h3 className="page__name">Protect shop</h3>
                <a className="page__link" href="https://protect-shop-pmdi.vercel.app/">https://protect-shop-pmdi.vercel.app/</a>

            </div>
            <p className="about__page">The main project, member I was - is the Protect online store. The project is a one-page online store, has backend and is adaptive. My parts was: authorization and registration, customer's personal account, administrator's personal account (receive letters, receive and manipulate orders, create new products and change existing products); add and remove products from the favorite list with rendering of the page for favorite products for regular users and guest; add goods for the guest and render them in the cart; sections "popular products", hero, "we are in instagram", footer. Were used such technologies : React, redux, Swiper, formik, yup, SCSS. The store is almost ready for real use. Below you can see the main tasks that the author did.</p>
            <div className="protect__content">
                <ProtectItem
                    handleImg={(id) => handleImg(id)}
                    handleOutside={handleOutside}
                    className="content__item-right"
                    id="1"
                    isScale={scale}
                    imgSrc={admin}
                    description='The admin menu gives you the opportunity to view the letters received through the "call me out" form. "Order" shows the orders that come from the store from users and guests with the necessary information to assemble the order. "Create new product" is a form for creating a product with the function of previewing before saving to the catalog. "Change product from catalogue" includes a search input in the gallery, in addition, by clicking on the product - the form is automatically filled with current data, which can be changed and saved in the catalog.'
                />
                <ProtectItem
                    handleImg={(id) => handleImg(id)}
                    handleOutside={handleOutside}
                    className="content__item-left"
                    id="2"
                    isScale={scale}
                    imgSrc={user}
                    description='The client menu is an opportunity to manage your data, namely: add photo (saved on Cloudinary), change data or password, view created orders.'
                />
                <ProtectItem
                    handleImg={(id) => handleImg(id)}
                    className="content__item-left"
                    handleOutside={handleOutside}
                    id="3"
                    isScale={scale}
                    imgSrc={favorites}
                    description='Users have the ability to add items to their favorites list, both for registered users (with data stored on the server) and for guests (using Local Storage). Additionally, they can add products to their cart directly from the favorites page. For this purpose, a complex action was written that checked whether the client was registered, whether he already had the products in his favorites list, and whether this particular product existed.'
                />
                <ProtectItem
                    handleImg={(id) => handleImg(id)}
                    className="content__item-right"
                    handleOutside={handleOutside}
                    id="4"
                    isScale={scale}
                    imgSrc={basket}
                    description='The author created a function called "add to cart" for guest users. To implement this, they created an object where each product&apos;s ID served as a key, and the corresponding value was another object containing the quantity of the purchased items. This approach greatly simplified basket manipulation, as each product was uniquely identified by its ID, and its quantity could be easily updated within the nested object structure. After creating an order or changing the status of the order by the administrator, the client receives a letter with the relevant information.'
                />
                
            </div>
            
            
        </section>
    )
}
export default ProtectPage