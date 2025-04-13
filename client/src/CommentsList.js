import React from 'react';

export default function CommentsList({ comments }) {
    const renderComments = comments.map(comment => {
        let content;
        switch (comment.status) {
            case 'pending':
                content = "This comment is in moderation.";
                break;
            case 'approved':
                content = comment.content;
                break;
            case 'rejected':
                content = <strong>This comment has been rejected.</strong>;
                break;
            default:
                content = "Unknown comment status";
        }

        return <li key={comment.id}>{content}</li>
    });

    return <ul>{renderComments}</ul>;
};