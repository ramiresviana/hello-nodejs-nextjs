import fs from 'fs'
import path from 'path'

const allArticles = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'articles.json'), 'utf-8'))

export async function getArticles() {
    return allArticles
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

export async function updateArticle(id, title, content) {
    const articles = await getArticles()
    const article = await getArticle(id)
    const index = articles.indexOf(article)

    const image = (Math.floor(Math.random() * 3) + 1) + '.jpg'

    article.title = title
    article.content = content
    article.image = image

    articles[index] = article

    fs.writeFileSync(path.join(process.cwd(), 'data', 'articles.json'), JSON.stringify(articles, null, 4))

    return article
}

export async function removeArticle(id) {
    const articles = await getArticles()
    const article = await getArticle(id)
    const index = articles.indexOf(article)

    articles.splice(index, 1)

    fs.writeFileSync(path.join(process.cwd(), 'data', 'articles.json'), JSON.stringify(articles, null, 4))
}