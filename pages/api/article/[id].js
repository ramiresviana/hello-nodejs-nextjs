import { updateArticle, removeArticle } from '../../../utils'

export default async function handler(req, res) {
    if (req.method === 'PATCH') {
        await update(res, req)
    } else if (req.method === 'DELETE') {
        await destroy(res, req)
    } else {
        res.status(404).send()
    }
}

async function update(res, req) {
    const { id } = req.query
    const { title, content } = req.body
    const article = await updateArticle(id, title, content)

    res.status(200).json(article)
}

async function destroy(res, req) {
    const { id } = req.query
    const article = await removeArticle(id)

    res.status(200).send()
}