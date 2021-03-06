import { useState } from 'react'
import { useRouter } from 'next/router'

export default function New() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const router = useRouter()

    function onSubmit(event) {
        event.preventDefault()

        fetch("/api/article", {
            method: "POST",
            body: JSON.stringify({
                title, content
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => router.replace("/"))
    }

    return (
        <div class="container py-5">
          <h1 class="mt-5 pb-4">Hello Bootstrap</h1>

            <form class="shadow-sm bg-light p-5" onSubmit={onSubmit}>
                <div class="form-group">
                    <label>Title</label>
                    <input class="form-control" onChange={(event) => setTitle(event.target.value)} value={title} />
                </div>
                <div class="form-group">
                    <label>Content</label>
                    <textarea rows="6" class="form-control" onChange={(event) => setContent(event.target.value)} value={content}></textarea>
                </div>
                <div class="form-group">
                    <label>File</label>
                    <input type="file" class="form-control-file" />
                </div>
                <button type="submit" class="btn btn-block btn-lg btn-primary mt-5">Submit</button>
            </form>
        </div>
      )
}