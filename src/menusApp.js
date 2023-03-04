import React, { useState } from "react"
import data from "./data"

const MenuApp = () => {
    
    const [dish, setDish] = useState('shakes');
    var menu = [];
    (dish === 'all') ? menu=data : menu = data.filter((item) => item.category === dish);

    return <>
        <section className="menu section">
            <div className="title">
                <h2>our menu</h2>
                <div className="underline"></div>
            </div>
            <div className="btn-container">
                <button type="button" className="filter-btn" onClick={()=>{setDish('all')}}>all</button>
                <button type="button" className="filter-btn" onClick={()=>{setDish('breakfast')}}>breakfast</button>
                <button type="button" className="filter-btn" onClick={()=>{setDish('lunch')}}>lunch</button>
                <button type="button" className="filter-btn" onClick={()=>{setDish('shakes')}}>shakes</button>
            </div>
            <div className="section-center">
                {menu.map((term)=>{
                    return <article className="menu-item">
                        <img src={term.image} alt="menu_item" className="photo"/>
                        <div className="item-info">
                            <header>
                                <h4>{term.name}</h4>
                                <h4 className="price">{term.price}</h4>
                            </header>
                            <p className="item-text">{term.about}</p>
                        </div>
                    </article>
                })}
            </div>
        </section>
    </>
}

export default MenuApp
