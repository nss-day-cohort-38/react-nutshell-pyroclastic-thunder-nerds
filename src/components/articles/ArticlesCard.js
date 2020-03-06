import React from "react";
import {Card, CardText, CardBody, CardTitle, Button } from 'reactstrap'

// const ArticleCard = props => {
//     return (
//         <div>
//             <div>
//                 <h3>Title: <span>{props.article.title}</span></h3>
//                 <p>Synopsis: {props.article.synopsis}</p>
//                 <p>Url: {props.article.url}</p>
//                 <p>{props.article.timestamp}</p>
//                 <button type="button" onClick={() => 
//                     props.deleteArticle(props.article.id)}>
//                     Delete Article
//                 </button>
//                 <button type="button" onClick={() => {
//                     props.history.push(`/articles/${props.article.id}/edit`)}}>
//                     Edit Article
//                 </button>
//             </div>
//         </div>
//     )
// }

const ArticleCard = props => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>Title: <span>{props.article.title}</span></CardTitle>
                    <p>Synopsis: {props.article.synopsis}</p>
                    <p>Url: {props.article.url}</p>
                    <p>{props.article.timestamp}</p>
                    <Button color="danger" type="button" onClick={() => 
                        props.deleteArticle(props.article.id)}>
                        Delete Article
                    </Button>
                    <Button color="info" type="button" onClick={() => {
                        props.history.push(`/articles/${props.article.id}/edit`)}}>
                        Edit Article
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default ArticleCard