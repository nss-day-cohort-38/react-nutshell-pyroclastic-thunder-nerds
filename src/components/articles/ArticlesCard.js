import React from "react";
import { Link } from 'react-router-dom'
import {Card, CardText, CardBody, CardTitle, Button } from 'reactstrap'
import './ArticlesCard.css'

const ArticleCard = props => {
    return (
        <div className="flex">
            <Card className="width" inverse style={{backgroundColor: '#333', borderColor: 'green', border: '2px solid black'}}>
                <CardBody>
                    <CardTitle><strong>Title: </strong><span>{props.article.title}</span></CardTitle>
                    <p><strong>Synopsis: </strong>{props.article.synopsis}</p>
                    <p><strong>Url: </strong>{props.article.url}</p>
                    <p><strong>{props.article.timestamp}</strong></p>
                    <Button color="danger" type="button" onClick={() => 
                        props.deleteArticle(props.article.id)}>
                        Delete Article
                    </Button>
                    <Button className="padding2" color="success" type="button" onClick={() => {
                        props.history.push(`/articles/${props.article.id}/edit`)}}>
                        Edit Article
                    </Button>
                    <Button className="padding2" color="info" type="button" onClick={() => {
                        props.history.push(`/articles/${props.article.id}`)
                    }}>
                        Details
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default ArticleCard