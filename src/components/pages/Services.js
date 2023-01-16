import '../../css/Services.css'
import '../../css/pages.css'
import counselling from '../../images/icons/armchair.png'
import playTherapy from '../../images/icons/cubes.png'
import parentingSupport from '../../images/icons/family.png'
import consultation from '../../images/icons/conversation.png'
import React, { useState } from 'react';


export default function Services() {

    let descriptions = [
        <div className='service-description-wrap' id="service-description-wrap"><h1>Play Therapy</h1><p>A mode of therapy that helps children to explore their feelings, to express themselves and to make sense of their life experiences. Conventional talking therapies may be inappropriate for children and young people who struggle to find the words to describe complex feelings. Visit <a target='_blank' href='https://www.bapt.info/'>Bapt Website</a> to find out more.</p></div>,
        <div className='service-description-wrap' id="service-description-wrap"><h1>Parenting Support</h1><p>Parenting can be a challenge particularly when your child is struggling. We offer a safe, confidential place to talk through problems and to identify ideas and techniques to help raise a resilient, healthy child.</p></div>,
        <div className='service-description-wrap' id="service-description-wrap"><h1>Counselling</h1><p>Counselling for young people who are experiencing anxiety, stress, depression, loss, trauma etc. Counselling can be offered together with a parent or on an individual basis with review meetings with a parent every 6 weeks. <a target='_blank' href='https://www.emdracademy.co.uk/why-emdr'>EMDR</a> is also available for under 18’s for helping with trauma.</p></div>,
        <div className='service-description-wrap' id="service-description-wrap"><h1>Training & Consultancy</h1><p>We have considerable experience in the fields of Child Mental Health, Attachment and Developmental Trauma, Post Traumatic Stress Disorder, Children with Experience of Care, Eating Disorders, Child Development and the importance of Play. We can offer Training and Consultancy to organisations working in these fields.</p></div>
    ]

    const [description, setDescription] = useState(descriptions[0]);

    const [buttonClass0, setButtonClass0] = useState("services-card-button services-card-button_active")
    const [buttonClass1, setButtonClass1] = useState("services-card-button")
    const [buttonClass2, setButtonClass2] = useState("services-card-button")
    const [buttonClass3, setButtonClass3] = useState("services-card-button")

    const [cardClass0, setCardClass0] = useState("services-card services-card_active")
    const [cardClass1, setCardClass1] = useState("services-card")
    const [cardClass2, setCardClass2] = useState("services-card")
    const [cardClass3, setCardClass3] = useState("services-card")

    function resetButtons() {
        setButtonClass0("services-card-button")
        setButtonClass1("services-card-button")
        setButtonClass2("services-card-button")
        setButtonClass3("services-card-button")
    }
    function resetCards() {
        setCardClass0('services-card')
        setCardClass1('services-card')
        setCardClass2('services-card')
        setCardClass3('services-card')
    }
    function handleButtonClick(index) {
        setDescription(descriptions[index])
        if (index === 0) {
            resetButtons();
            resetCards();
            setButtonClass0("services-card-button services-card-button_active");
            setCardClass0('services-card services-card_active')
        }
        if (index === 1) {
            resetButtons();
            resetCards();
            setButtonClass1("services-card-button services-card-button_active");
            setCardClass1('services-card services-card_active')
        }
        if (index === 2) {
            resetButtons();
            resetCards();
            setButtonClass2("services-card-button services-card-button_active");
            setCardClass2('services-card services-card_active')
        }
        if (index === 3) {
            resetButtons();
            resetCards();
            setButtonClass3("services-card-button services-card-button_active");
            setCardClass3('services-card services-card_active')
        }
        // let rect = document.getElementById('service-description-wrap').getBoundingClientRect();
        // window.scrollTo(rect.x, rect.y)
    }
    let buttons = [<button onClick={() => handleButtonClick(0)} className={buttonClass0}>Read more</button>]
    return (<div id="services">
        <div id="services-card-section-wrap">
            <button onClick={() => handleButtonClick(0)} className={cardClass0} id="services-card0">
                <img className="services-icon" src={playTherapy}></img>
                <h1>Play Therapy</h1>
                {/* {buttons[0]} */}
            </button>
            <button onClick={() => handleButtonClick(1)} className={cardClass1} id="services-card1">
                <img className="services-icon" src={parentingSupport}></img>
                <h1>Parenting Support</h1>
                {/* <button onClick={() => handleButtonClick(1)} className={buttonClass1}>Read more</button> */}

            </button>
            <div className="service-icon-breakpoint"></div>
            <button onClick={() => handleButtonClick(2)} className={cardClass2} id="services-card2">
                <img className="services-icon" src={counselling}></img>
                <h1>Counselling</h1>
                {/* <button onClick={() => handleButtonClick(2)} className={buttonClass2}>Read more</button> */}
            </button>
            <button onClick={() => handleButtonClick(3)} className={cardClass3} id="services-card3">
                <img className="services-icon" src={consultation}></img>

                <h1>Training & Consultancy</h1>
                {/* <button onClick={() => handleButtonClick(3)} className={buttonClass3}>Read more</button> */}
            </button>
        </div>
        {description}
    </div>)
}