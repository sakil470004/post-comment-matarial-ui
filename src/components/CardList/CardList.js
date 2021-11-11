import { React, useEffect, useState } from 'react'
import './CardList.css'
import MediaCard from './../Card/Card'
import Nav from '../Nav/Nav'
export default function CardList() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data);

            });

    }, [])

    return (

        <div>
            <Nav/>
            {/* <div className='logoHomePage'><h1>SakilBOok</h1></div> */}
            <div className="card-container">
            
                {
                    posts.map(singlePost => <MediaCard
                        key={singlePost.id}
                        singlePost={singlePost}

                    >

                    </MediaCard>
                    )
                }

            </div>
        </div>
    )
}
