import { React, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import Comment from '../Comment/Comment'

import './CommentAll.css'

const CommentAll = () => {





    // const comments = props.comments
    const [comments, setComments] = useState([])
    const [commentsOn, setCommentsOn] = useState(false)
    const { postId } = useParams()





    useEffect(() => {

        //get the all comment
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => res.json())
            .then(data => {
                setComments(data)
            })

    }, [postId])


    return (
        <div>
            {/* 
            {

                comments.map(comment => {
                    <Comment
                        // key={comment.id}
                        comment={comment}
                    />
                    
                })


            } */}
            {
                comments.map(comment =>
                    <Comment
                        // key={comment.id}
                        comment={comment}
                    />
                )
            }
        </div>
    )
}

export default CommentAll;