import React, { useState } from "react";
import data from "./data"


const TabsApp = () => {
    var idx = -1;   // some random variable to use for my key, quickfix
    const defaultPerson = {...data[0], klass:'job-btn active-btn'};
    const [person, setPerson] = useState(defaultPerson);

    const handleClick = (id)=> {
        const updatePerson = data.filter((itm) => itm.id === id);
        // destructuring the object 'updatePerson[0]'
        setPerson({...updatePerson[0], klass: 'job-btn active-btn'})
    }

    return <>
        <section className="section">
            <div className="title">
                <h2>experience</h2>
                <div className="underline"></div>
            </div>
            <div className="jobs-center">
                <div className="btn-container">
                    {/* added a className of active-btn when clicked */}
                    {data.map((individual)=> {
                        if(individual.id === person.id){individual=person}
                        return <button key={individual.id} className={individual.klass} onClick={()=>{handleClick(individual.id)}}>
                            {individual.name}
                        </button>
                    })}
                </div>

                <article className="job-info">
                    <h3>{person.title}</h3>
                    <h4>{person.name}</h4>
                    <p className="job-date">{person.date}</p>
                    {person.desc.map((item)=>{
                        return <div key={idx++} className="job-desc">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="job-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path>
                            </svg>
                            <p>{item}</p>
                        </div>
                    })}
                    
                </article>
            </div>
            <button type="button" className="btn">more info</button>
        </section>
    </>
}
// this way seems longer, javaScript did all the work
export default TabsApp;
