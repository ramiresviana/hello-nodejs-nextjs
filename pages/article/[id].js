import { useRouter } from 'next/router'
import { getArticles, getArticle } from '../../utils'

export default function Article({ article }) {
    const router = useRouter()
    const { id } = router.query

    function Actions() {
        return (
            <>
                <hr class="my-5" />
                <button type="button" class="btn btn-lg btn-primary">Edit</button>
                <button type="button" class="btn btn-lg btn-danger">Remove</button>
            </>
        )
    }

    return (
        <div class="container py-5">
            <h1 class="my-5 pb-5">Hello Bootstrap</h1>
            <img src={ `/${article.image}` } class="w-100" />
            <h2 class="mt-4 mb-3">{ article.title }</h2>
            <p>{ article.content }</p>

            <Actions />
        </div>
    )
}

export async function getStaticPaths() {
    const articles = await getArticles()
    const paths = articles.map((article) => `/article/${article.id}`)

    return { paths, fallback: false }
}

export async function getStaticProps(context) {
    const { id } = context.params
    const article = await getArticle(id)

    return {
        props: { article }
    }
}