import React, { useState } from 'react'



const Testimonials = () => {

    const arrTestimonials = [
        {name:"Jack",text:"Хороший отзыв — это не только слова, убеждающие в покупке у вас. Добавьте больше визуальных элементов: изображения, видео и анимация — это относительно простые способы сделать контент более привлекательным и доказать читателям, что отзыв исходит от реального человека или компании."},
        {name:"Lydmila",text:"Отзывы клиентов могут быть представлены во многих форматах, но есть некоторые общие рекомендации, которым нужно следовать независимо от того, какой подход вы выберете. Чтобы сделать отзывы более искренними, включите следующие три элемента."}
    ]

    const [testimonials,setTestimonials] = useState(arrTestimonials)

    const [newTestimonials,setNewTestimonials] = useState({
        name:"",
        text:"",
    })

    const handleNameChange = (e) => {
        setNewTestimonials((value) => ({
            ...value,
            name:e.target.value
        }))
    }

    const handleTextChange = (e) => {
        setNewTestimonials((value) => ({
            ...value,
            text:e.target.value
        }))
    }

    const sendForm = (e) => {
        e.preventDefault();
        setTestimonials(value => {
            return [...value, newTestimonials]
        })
        setNewTestimonials({
            name:"",
            text:"",
        })
    }

    return (
        <>
        <h1 className="page-title">Testimonials</h1>

        {
            testimonials.map((item) => (
                <div style={{
                    backgroundColor:"grey",
                    padding:"10px",
                    opacity:"75%",
                }}>
                    <div style={{marginBottom:"10px"}}>Name: {item.name}</div>
                    <div style={{marginBottom:"10px"}}>Message: {item.text}</div>
                </div>
            ))
        }

        <form onSubmit={sendForm}
            style={{
                marginTop:"40px"
            }}   
        >
            <div>
                <input 
                    type="text"
                    placeholder="Your name"
                    value={newTestimonials.name}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                <textarea 
                    cols="30" rows="10"
                    placeholder="Your message"
                    value={newTestimonials.text}
                    onChange={handleTextChange}
                ></textarea>
            </div>
            <button>Leave a coment</button>
        </form>

        </>
    )
}

export default Testimonials