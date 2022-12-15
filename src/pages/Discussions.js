import React from "react";
import Discussion from "../components/Discussion";
import "./Discussions.css";

function Discussions({ discussions = [] }) {
    return discussions.map(
        ({
            id,
            createdAt,
            updatedAt,
            title,
            url,
            author,
            answer,
            bodyHTML,
            avatarUrl,
        }) => {
            return (
                <Discussion
                    key={id}
                    title={title}
                    author={author}
                    createdAt={createdAt}
                    avatarUrl={avatarUrl}
                    url={url}
                    answer={answer}
                    bodyHTML={bodyHTML}
                />
            );
        }
    );
}
export default Discussions;
