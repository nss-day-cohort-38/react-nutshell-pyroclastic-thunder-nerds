import React, { useState } from 'react'
import ArticleManager from '../../modules/ArticlesManager'
import "./ArticleForm.css"

const ArticlesForm = props => {
    const [article, setArticle] = useState({title: "", synopsis: "", url: ""})
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
            setIsLoading(true)
            ArticleManager.post(article)
                .then(() => props.history.push("/articles"))
        }
    }

    return (
        <>
            <form className="test">
                <fieldset>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text" required onChange={handleFieldChange}
                            id="title"
                            placeholder="Article Title"
                        />
                        
                        <label htmlFor="synopsis">Synopsis</label>
                        <input 
                            type="text" required onChange={handleFieldChange}
                            id="synopsis"
                            placeholder="Article Synopsis"
                        />

                        <label htmlFor="url">Url</label>
                        <input 
                            type="text" required onChange={handleFieldChange}
                            id="url"
                            placeholder="Article Url"
                        />
                    </div>
                    <div>
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={constructNewArticle}
                        >Submit
                        </button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default ArticlesForm