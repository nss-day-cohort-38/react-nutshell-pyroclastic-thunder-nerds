import React from "react";

const ArticleCard = props => {
    return (
        <div>
            <div>
                <h3>Title: <span>{props.article.title}</span></h3>
                <p>Synopsis: {props.article.synopsis}</p>
                <p>Url: {props.article.url}</p>
                <p>{props.article.timestamp}</p>
                <button type="button" onClick={() => 
                    props.deleteArticle(props.article.id)}>
                    Delete Article
                </button>
                <button type="button" onClick={() => {
                    props.history.push(`/articles/${props.article.id}/edit`)}}>
                    Edit Article
                </button>
            </div>
        </div>
    )
}

export default ArticleCard