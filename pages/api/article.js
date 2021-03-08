import { createArticle } from '../../utils'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        await create(res, req)
    } else {
        res.status(404).send()
    }
}

async function create(res, req) {
    const { title, content } = req.body
    const article = await createArticle(title, content)

    res.status(200).json(article)
}