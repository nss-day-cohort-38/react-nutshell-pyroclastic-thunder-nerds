import React, { useState, useEffect } from "react";
import ArticleManager from "../../modules/ArticlesManager";
import { Button, Form, FormGroup, Label, Input, Card, CardBody } from "reactstrap";
import './ArticlesCard.css'

const ArticleEditForm = props => {
  const [article, setArticle] = useState({ title: "", synopsis: "", url: "", userId: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...article };
    stateToChange[evt.target.id] = evt.target.value;
    setArticle(stateToChange);
  };

  const handleCancel = () => {
    props.history.push("/articles")
  }

  const updateExistingArticle = evt => {
    evt.preventDefault();
    setIsLoading(true);

    const stamp = new Date();
    const editedArticle = {
      id: props.match.params.articleId,
      title: article.title,
      synopsis: article.synopsis,
      url: article.url,
      timestamp: stamp.toLocaleString(),
      userId: parseInt(sessionStorage.getItem("Active Id"))
    };

    ArticleManager.update(editedArticle).then(() =>
      props.history.push("/articles")
    );
  };

  useEffect(() => {
    ArticleManager.get(props.match.params.articleId).then(article => {
      setArticle(article);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
    <div className="flex">
      <Card className="width" inverse style={{backgroundColor: '#333', borderColor: 'green', border: '2px solid black'}}>
          <CardBody>
      <Form className="test">
        <fieldset>
          <div>
            <FormGroup>
              <Label htmlFor="title"><h5>Title</h5></Label>
              <Input
                type="text"
                required
                onChange={handleFieldChange}
                id="title"
                placeholder="Article Title"
                value={article.title}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="synopsis"><h5>Synopsis</h5></Label>
              <Input
                type="text"
                required
                onChange={handleFieldChange}
                id="synopsis"
                placeholder="Article Synopsis"
                value={article.synopsis}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="url"><h5>Url</h5></Label>
              <Input
                type="text"
                required
                onChange={handleFieldChange}
                id="url"
                placeholder="Article Url"
                value={article.url} 
                />
            </FormGroup>
          </div>
          <div>
            <Button color="primary" type="button" disabled={isLoading} onClick={updateExistingArticle}>Submit</Button>
            <Button color="info" className="padding2" disabled={isLoading} onClick={handleCancel}>Cancel</Button>
          </div>
        </fieldset>
      </Form>
      </CardBody>
      </Card>
      </div>
    </>
  );
};

export default ArticleEditForm;
