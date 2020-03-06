import React, { useState } from 'react'
import ArticleManager from '../../modules/ArticlesManager'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const ArticlesForm = props => {
    const [article, setArticle] = useState({title: "", synopsis: "", url: "", timestamp: ""})
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = evt => {
        const stateToChange = {...article}
        stateToChange[evt.target.id] = evt.target.value
        setArticle(stateToChange)
    }

    const constructNewArticle = evt => {
        evt.preventDefault()
        

        if (article.title === "" || article.synopsis === "" || article.url === "") {
            window.alert("Please fill out all fields")
        } else {
            const newArticle = {...article}
            const stamp = new Date()
            newArticle.timestamp = stamp.toLocaleString()
            setIsLoading(true)
            ArticleManager.post(newArticle)
                .then(() => props.history.push("/articles"))
        }
    }

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
                        />
                        </FormGroup>
                        <FormGroup>
                        <Label htmlFor="synopsis">Synopsis</Label>
                        <Input 
                            type="text" required onChange={handleFieldChange}
                            id="synopsis"
                            placeholder="Article Synopsis"
                        />
                        </FormGroup>
                        <FormGroup>
                        <Label htmlFor="url">Url</Label>
                        <Input 
                            type="text" required onChange={handleFieldChange}
                            id="url"
                            placeholder="Article Url"
                        />
                        </FormGroup>
                    </div>
                    <div>
                        <Button
                        color="primary"
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewArticle}
                        >Submit
                        </Button>
                    </div>
                </fieldset>
            </Form>
        </>
    )
}

export default ArticlesForm