import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';

export default function TinderCards() {
    const [people, setPeople] = useState([
        {
            id: 1,
            name: "Elon Musk",
            imgURL: "https://c.ndtvimg.com/2023-07/9n3che8_elon-musk_625x300_13_July_23.jpg?ver-20231016.06",
        },
        {
            id: 2,
            name: "Jeff Bezos",
            imgURL: "https://hips.hearstapps.com/hmg-prod/images/jeff-bezos-attends-the-lord-of-the-rings-the-rings-of-power-news-photo-1684851576.jpg?crop=1.00xw:0.861xh;0,0.0205xh&resize=640:*",
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing " + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen")
    }

    return (
        <div className='tinderCards'>
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className='swipe'
                        key={person.id}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{ backgroundImage: `url(${person.imgURL})` }} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}
