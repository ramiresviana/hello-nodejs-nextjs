import fs from 'fs'
import path from 'path'

export async function getArticles() {
    const articlesData = fs.readFileSync(path.join(process.cwd(), 'data', 'articles.json'), 'utf-8');
    const articles = JSON.parse(articlesData)

    return articles
}

export async function getArticle(id) {
    const articles = await getArticles()
    const article = articles.find(item => item.id == id)

    return article
}