import React, { useState, useEffect } from "react";
import ArticleManager from "../../modules/ArticlesManager";
import { Card, CardBody, Button } from 'reactstrap'
import './ArticlesCard.css'

const ArticleDetail = props => {
  const [article, setArticle] = useState({title: "",synopsis: "",url: "",timestamp: ""});
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = () => {
    setIsLoading(true);
    ArticleManager.delete(props.articleId).then(() =>
      props.history.push("/articles")
    );
  };

  const handleCancel = () => {
      props.history.push("/articles")
  }

  useEffect(() => {
    ArticleManager.get(props.articleId).then(article => {
      setArticle({
        title: article.title,
        synopsis: article.synopsis,
        url: article.url,
        timestamp: article.timestamp
      });
      setIsLoading(false);
    });
  }, [props.articleId]);

  return (
    <div className="flex">
        <Card className="width" inverse style={{backgroundColor: '#333', borderColor: 'green', border: '2px solid black'}}>
            <CardBody>
                <p><strong>Title: </strong><span>{article.title}</span></p>
                <p><strong>Synopsis: </strong>{article.synopsis}</p>
                <p><strong>Url: </strong>{article.url}</p>
                <p><strong>{article.timestamp}</strong></p>
                <Button color="danger" className="" disabled={isLoading} onClick={handleDelete}>Delete</Button>
                <Button color="info" className="padding2" disabled={isLoading} onClick={handleCancel}>Cancel</Button>
            </CardBody>
        </Card>
    </div>
  );
};

export default ArticleDetail