import React, { useState, useEffect } from 'react'
import ArticleManager from '../../modules/ArticlesManager'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

const ArticleEditForm = (props) => {
    const [article, setArticle] = useState({title: "", synopsis: "", url: ""})
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = evt => {
        const stateToChange = { ...article}
        stateToChange[evt.target.id] = evt.target.value
        setArticle(stateToChange)
    }

    const updateExistingArticle = evt => {
        evt.preventDefault()
        setIsLoading(true)

        const stamp = new Date()
        const editedArticle = {
            id: props.match.params.articleId,
            title: article.title,
            synopsis: article.synopsis,
            url: article.url,
            timestamp: stamp.toLocaleString()
        }

        ArticleManager.update(editedArticle).then(() => 
            props.history.push("/articles")
        )
    }

    useEffect(() => {
        ArticleManager.get(props.match.params.articleId).then(article => {
            setArticle(article)
            setIsLoading(false)
        })
    }, [])

    return (
        <>
            <Form className="test">
                <fieldset>
                    <div>
                        <FormGroup>
                        <Label htmlFor="title">Title</Label>
                        <Input
                            type="text" required onChange={handleFieldChange}
                            id="title"
                            placeholder="Article Title"
                            value={article.title}
                        />
                        </FormGroup>
                        <FormGroup>
                        <Label htmlFor="synopsis">Synopsis</Label>
                        <Input 
                            type="text" required onChange={handleFieldChange}
                            id="synopsis"
                            placeholder="Article Synopsis"
                            value={article.synopsis}
                        />
                        </FormGroup>
                        <FormGroup>
                        <Label htmlFor="url">Url</Label>
                        <Input 
                            type="text" required onChange={handleFieldChange}
                            id="url"
                            placeholder="Article Url"
                            value={article.url}
                        />
                        </FormGroup>
                    </div>
                    <div>
                        <Button
                            color="primary"
                            type="button"
                            disabled={isLoading}
                            onClick={updateExistingArticle}
                        >Submit
                        </Button>
                    </div>
                </fieldset>
            </Form>
        </>
    )
}

export default ArticleEditForm