import { useState, useEffect } from 'react';

//import the Like component
import Like from './Like';

export default function Card() {
    //state store
    let [card, setcard] = useState([]);



    //fetch the API
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((list) => setcard(list.products));
    }, []);

    

    return (
        <>
            {card.length === 0 ? (
                <h1> Loading.... </h1>
            ) : (
                <div className="container">
                    <h1>Products Lists</h1>
                    <div className="flex wrap ">
                        {card.map((e) => {
                            return (
                                <div key={e.id} className="flex-48 card">
                                    <div className="flex">
                                        <div className="flex-40">
                                            <img src={e.thumbnail} alt="Thumbail"></img>
                                        </div>
                                        <div className="flex-50">
                                            <div className='flex'>
                                                <div>
                                                    <h2>{e.title}</h2>
                                                    <h6>{e.category}</h6>
                                                    <h5>${e.price}</h5>
                                                </div>
                                                <div >
                                                    <Like/>     
                                                </div>
                                            </div>
                                            <hr></hr>
                                            <p>{e.description.slice(0, 80)}.........</p>
                                            <button className="button-3">Add to Cart</button>
                                            <div className='rating'>
                                                {Array(5)
                                                    .fill()
                                                    .map((_, index) => {
                                                        if (e.rating < index + 1) {
                                                            return (
                                                                <i className="fa-regular fa-star"></i>)
                                                        }
                                                        return (<i className="fa-solid fa-star"></i>)
                                                    })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
}