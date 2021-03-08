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

export async function createArticle(title, content) {
    const articles = await getArticles()

    const id = articles[articles.length - 1].id + 1
    const image = (Math.floor(Math.random() * 3) + 1) + '.jpg'
    const article = {
        id, title, content, image
    }

    articles.push(article)
    fs.writeFileSync(path.join(process.cwd(), 'data', 'articles.json'), JSON.stringify(articles, null, 4))

    return article
}