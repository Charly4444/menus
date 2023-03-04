import React, { useState } from "react"


const Accordion = () => {
    // set up multiple states for each section
    const [clicked, setClicked] = useState({
        state1: false,
        state2: false,
        state3: false,
        state4: false,
        state5: false,
    });

    // handlse clicked state
    const handleClick = (e)=>{
        const statex = `state${e.currentTarget.id}`
        // recall, destructure the list itm
        setClicked({...clicked, [statex]: !clicked[statex]})
    }

    return <>
        <h3>questions and answers about login</h3>
        <section className="info">
            <article className="question">
                <header>
                    <h4>Do I have to allow the use of cookes?</h4>
                    <button id="1" className="btn" onClick={handleClick}>
                        ck
                    </button>
                </header>
                {clicked.state1 && <p>
                    Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper 
                    mug church-key coloring book, whatever poutine normcore fixie cred kickstarter 
                    post-ironic street art.
                </p>}
            </article>
            <article className="question">
                <header>
                    <h4>How do I change my My Page password?</h4>
                    <button id="2" className="btn" onClick={handleClick}>
                        ck
                    </button>
                </header>
                {clicked.state2 && <p>
                    Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper 
                    mug church-key coloring book, whatever poutine normcore fixie cred kickstarter 
                    post-ironic street art.
                </p>}
            </article>
            <article className="question">
                <header>
                    <h4>What is BankID?</h4>
                    <button id="3" className="btn" onClick={handleClick}>
                        ck
                    </button>
                </header>
                {/* i'm using my shortcircuits: to hide this <p> when button this button3 is not clicked */}
                {clicked.state3 && <p>
                    Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper 
                    mug church-key coloring book, whatever poutine normcore fixie cred kickstarter 
                    post-ironic street art.
                </p>}
            </article>
            <article className="question">
                <header>
                    <h4>Whose birth number can I use?</h4>
                    <button id="4" className="btn" onClick={handleClick}>
                        ck
                    </button>
                </header>
                {clicked.state4 && <p>
                    Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper 
                    mug church-key coloring book, whatever poutine normcore fixie cred kickstarter 
                    post-ironic street art.
                </p>}
            </article>
            <article className="question">
                <header>
                    <h4>When do I recieve a password ordered by letter?</h4>
                    <button id="5" className="btn" onClick={handleClick}>
                        ck
                    </button>
                </header>
                {clicked.state5 && <p>
                    Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper 
                    mug church-key coloring book, whatever poutine normcore fixie cred kickstarter 
                    post-ironic street art.
                </p>}
            </article>
        </section>
    </>
}

export default Accordion;
