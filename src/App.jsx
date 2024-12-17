import { useState } from 'react'

function App() {

  const [posts, setPosts] = useState([]);
  const [contentPost, setContentPost] = useState("");
  const [titlePost, setTitlePost] = useState("");
  const [statePost, setStatePost] = useState("");
  const [authorPost, setAuthorPost] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      state: statePost,
      title: titlePost,
      author: authorPost,
      content: contentPost
    };
    setPosts([...posts, newPost]);
    setTitlePost("");
    setContentPost("");
    setStatePost("");
    setAuthorPost("");

    console.log(posts);
  }

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id))
  }

  const disableSubmitButton = () => {
    return "disabled";
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='container m-5 d-flex flex-column gap-3'>
          <label htmlFor="authorPost">Autore Post</label>
          <input className='form-control' type="text" id='authorPost' value={authorPost} onChange={(event) => setAuthorPost(event.target.value)} />

          <label htmlFor="titlePost">Titolo post</label>
          <input className='form-control' type="text" id='titlePost' value={titlePost} onChange={(event) => setTitlePost(event.target.value)} />

          <label htmlFor='contentPost'>Contenuto post</label>
          <textarea className='form-control' type="text-area" id='contentPost' value={contentPost} onChange={(event) => setContentPost(event.target.value)} />

          <select className="form-select" aria-label="Default select example" value={statePost} onChange={(event) => setStatePost(event.target.value) }>
            <option value="" disabled >Stato del post</option>
            <option value="published">Pubblicato</option>
            <option value="draft">Bozza</option>
          </select>
          
          
          <button type='submit' className={`btn btn-primary ${(!authorPost || !titlePost || !contentPost || !statePost) && 'disabled' }`}>Salva</button>

         
        </div>
      </form>


      <div className="container m-5 d-flex flex-column gap-3">
        {posts.length > 0 ?

          (posts.map((post) => (
            post.state === "published" &&
            <div className="card" key={post.id}>
              <div className="card-header d-flex justify-content-between">
                <h2>{post.title}</h2>
                <button onClick={() => handleDelete(post.id)} className='btn btn-danger'>Delete</button>
              </div>
              <div className="card-body"><p>{post.content}</p></div>
            </div>
          )))

          :
          (
            <div className="card">
              <div className="card-body">Nessun post presente.</div>
            </div>
          )

        }
      </div>

    </>
  )
}

export default App
