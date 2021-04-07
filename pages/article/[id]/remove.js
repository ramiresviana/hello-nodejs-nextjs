import { useRouter } from 'next/router'

export default function Remove() {
    const router = useRouter()
    const { id } = router.query

    function onSubmit(event) {
        event.preventDefault()

        fetch("/api/article/" + id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => router.replace("/"))
    }


    return (
        <div class="container py-5">
          <h1 class="my-5 pb-5 text-center">Hello Bootstrap</h1>

          <div class="d-flex justify-content-md-center" onSubmit={onSubmit}>
            <form class="col-md-8 col-lg-6 shadow-sm bg-light p-5">

              <p>You want to remove this article?</p>
              <button type="submit" class="btn btn-block btn-lg btn-primary mt-5">Remove</button>

            </form>

          </div>
        </div>
      )
}