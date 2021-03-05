import Link from 'next/link'
import { getArticles } from '../utils'

export default function Home( { articles } ) {
  function Actions() {
    return (
      <>
        <div class="dropdown mb-2">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">Logged as admin</button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Add article</a>
            <a class="dropdown-item" href="#">Logout</a>
          </div>
        </div>

        <p class="pb-4">There are 100 posts</p>
      </>
    )
  }

  function Article(props) {
    return (
      <Link href={ `/article/${props.id}` }>
        <a>
          <article class="mb-5 text-dark">
            <div class="media d-block d-md-flex">
              <img src={props.image} class="mr-3"/>
              <div class="media-body">
                <h4 class="my-3">{props.title}</h4>
                <p>{props.content}</p>
              </div>
            </div>
          </article>
        </a>
      </Link>
    )
  }

  return (
    <div class="container py-5">
      <h1 class="mt-5 pb-4">Hello Bootstrap</h1>

      <Actions/>

      { articles && articles.map((article =>
        <Article
          id={article.id}
          image={article.image}
          title={article.title}
          content={article.content}
        />
      )) }
    </div>
  )
}

export async function getStaticProps(context) {
  const articles = await getArticles()

  return {
      props: { articles }
  }
}