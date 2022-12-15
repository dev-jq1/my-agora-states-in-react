import React from "react";
import './Discussion.css'

function Discussion(props) {
    return (
        <li className="discussion__container">
            <div className="discussion__avatar--wrapper">
                <img
                    className="discussion__avatar--image"
                    src={props.avatarUrl}
                    alt={props.author}
                />
            </div>
            <div className="discussion__content">
                <h4 className="discussion__title">
                    <a href={props.url}>
                        {props.title}
                    </a>
                </h4>
                <div className="discussion__information">
                    {props.author} / {props.createdAt}
                </div>
            </div>
            <div className="discussion__answered">
                <p>{props.answer === null ? "☒" : "☑" }</p>
            </div>
        </li>
    );
}

export default Discussion;
