import React, {useState} from 'react';
import axios from 'axios';

export default function CommentsCreate({ postId }) {
    const [content, setContent] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        await axios.post(`/posts/${postId}/comments`, {
            content
        });
    };

    return <div>
        <form
            onSubmit={e => {onSubmit(e); setContent('');}}>
            <div className="form-group">
                <label>New Comment</label>
                <input
                    className="form-control"
                    value={content}
                    onChange={e => setContent(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>;
}