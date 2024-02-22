import React, { useState, useEffect } from 'react';
import { Container, PostForm } from '../components';
import appwriteService from '../appwrite/conf';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Editpost() {

    const [post, setPost] = useState([]);
    const {} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(slug) {
            appwriteService.getPost(slug).then((post) => {
                if(post) {
                    setPost(post)
                } else {
                    navigate('/404')
                }
            })
        }
        else {
            navigate('/')
        }
    },[slug, navigate])

    return post ? (
        <div className='py-8'> 
            <PostForm post={post} />
        </div>
    ) : null
}

export default Editpost;