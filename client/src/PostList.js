import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentsCreate from "./CommentsCreate";
import CommentsList from "./CommentsList";

export default function PostList() {
    const [posts, setPosts] = useState({});

    const fetchPosts = async () => {
        const res = await axios.get('/posts');

        setPosts(res.data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const renderPosts = Object.values(posts).map(post => {
        return <div
            className="card"
            key={post.id}
            style={{ width: '30%', marginBottom: "20px" }}>
            <div className="card-body">
                <h3 className="card-title">{post.title}</h3>
                <CommentsList comments={post.comments} />
                <CommentsCreate postId={post.id} />
            </div>

        </div>
    });

    return <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderPosts}
    </div>;
}