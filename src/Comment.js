import React from 'react';
import faker from 'faker';

export default Comment = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={faker.image.image()} alt="avatar"/>
            </a>
            <div className="content">
                <a href="/" className="author">{props.name}</a>
                <div className="metadata">
                    <span className="date">{props.timestamp}</span>
                </div>
                <div className="text">{props.comment}</div>
            </div>
        </div>       
    )
}