import React, { useState } from 'react'
import ArticleManager from '../../modules/ArticlesManager'
import { Button, Form, FormGroup, Label, Input, Card, CardBody } from 'reactstrap';
import './ArticlesCard.css'

const ArticlesForm = props => {
    const [article, setArticle] = useState({title: "", synopsis: "", url: "", timestamp: "", userId: ""})
    const [isLoading, setIsLoading] = useState(false)

    const handleFieldChange = evt => {
        const stateToChange = {...article}
        stateToChange[evt.target.id] = evt.target.value
        setArticle(stateToChange)
    }

    const handleCancel = () => {
        props.history.push("/articles")
    }

    const constructNewArticle = evt => {
        evt.preventDefault()
        

        if (article.title === "" || article.synopsis === "" || article.url === "") {
            window.alert("Please fill out all fields")
        } else {
            const newArticle = {...article}
            const stamp = new Date()
            newArticle.timestamp = stamp.toLocaleString()
            newArticle.userId = parseInt(sessionStorage.getItem("Active Id"))
            setIsLoading(true)
            ArticleManager.post(newArticle)
                .then(() => props.history.push("/articles"))
        }
    }

    return (
        <>
            <div className="flex">
                <Card className="width" inverse style={{backgroundColor: '#333', borderColor: 'green', border: '2px solid black'}}>
                    <CardBody>
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
                                    <Button color="info" className="padding2" disabled={isLoading} onClick={handleCancel}>Cancel</Button>
                                </div>
                            </fieldset>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default ArticlesForm