import React, { useState, useEffect } from 'react'
import ArticleManager from '../../modules/ArticlesManager'

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

        const editedArticle = {
            id: props.match.params.articleId,
            title: article.title,
            synopsis: article.synopsis,
            url: article.url
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
            <form className="test">
                <fieldset>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text" required onChange={handleFieldChange}
                            id="title"
                            placeholder="Article Title"
                            value={article.title}
                        />
                        
                        <label htmlFor="synopsis">Synopsis</label>
                        <input 
                            type="text" required onChange={handleFieldChange}
                            id="synopsis"
                            placeholder="Article Synopsis"
                            value={article.synopsis}
                        />

                        <label htmlFor="url">Url</label>
                        <input 
                            type="text" required onChange={handleFieldChange}
                            id="url"
                            placeholder="Article Url"
                            value={article.url}
                        />
                    </div>
                    <div>
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={updateExistingArticle}
                        >Submit
                        </button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default ArticleEditForm