import React, { useState, useEffect } from "react"
import ArticleCard from "./ArticlesCard"
import ArticleManager from "../../modules/ArticlesManager"

const ArticleList = (props) => {
    const [articles, setArticles] = useState([])

    const deleteArticle = id => {
        ArticleManager.delete(id).then(() => 
            ArticleManager.getAll().then(setArticles)
        )
    }

    const getArticles = () => {
        return ArticleManager.getAll().then(articlesFromAPI => {
            setArticles(articlesFromAPI)
        })
    }

    useEffect(() => {
        getArticles()
    }, [])

    return (
        <>
            <section>
                <button type="button" className="btn" onClick={() => {
                    props.history.push("articles/new")
                }}>Add New Article
                </button>
            </section>
            {console.log("articles list")}
            <div>
                {articles.map(article => (
                    <ArticleCard 
                        key={article.id}
                        article={article}
                        deleteArticle={deleteArticle}
                        {...props}
                    />
                ))}
            </div>
        </>
    )
}

export default ArticleList