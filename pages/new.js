export default function New() {
    return (
        <div class="container py-5">
          <h1 class="mt-5 pb-4">Hello Bootstrap</h1>

            <form class="shadow-sm bg-light p-5">
                <div class="form-group">
                    <label>Username</label>
                    <input class="form-control" />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <textarea rows="6" class="form-control"></textarea>
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