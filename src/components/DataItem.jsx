import React from "react";
import cx from "classnames"

const DataItem = ({ handleImg, isScale, imgSrc, description, id, className, handleOutside }) => {
    
    return (
        <div  className={cx(className, 'content__item')} onClick={ (event => handleOutside(event))}>
            <img  id={id} src={imgSrc} alt="letters" className={cx("item__img", {"active": isScale === id })} onClick={() => handleImg(id)} />
            <p className="item__description" >{description }</p>
        </div>
    )
}
export default DataItem