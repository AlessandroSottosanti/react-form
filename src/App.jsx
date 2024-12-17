import { useState } from 'react';

function App() {

  const [posts, setPosts] = useState([]);
  const [contentPost, setContentPost] = useState("");
  const [titlePost, setTitlePost] = useState("");
  const [statePost, setStatePost] = useState("");
  const [authorPost, setAuthorPost] = useState("");

  // Salva post
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

  }

  // Elimina post
  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  }

  console.log(posts);

  return (
    <>
      {/* Form posts */}
      <form onSubmit={handleSubmit}>
        <div className='container m-5 d-flex flex-column gap-3'>
          <h2>Inserisci un nuovo post</h2>
          <label htmlFor="authorPost">Autore Post</label>
          <input className='form-control' type="text" id='authorPost' value={authorPost} onChange={(event) => setAuthorPost(event.target.value)} />

          <label htmlFor="titlePost">Titolo post</label>
          <input className='form-control' type="text" id='titlePost' value={titlePost} onChange={(event) => setTitlePost(event.target.value)} />

          <label htmlFor='contentPost'>Contenuto post</label>
          <textarea className='form-control' type="text-area" id='contentPost' value={contentPost} onChange={(event) => setContentPost(event.target.value)} />

          <select className="form-select" aria-label="Default select example" value={statePost} onChange={(event) => setStatePost(event.target.value)}>
            <option value="" disabled >Stato del post</option>
            <option value="published">Pubblicato</option>
            <option value="draft">Bozza</option>
          </select>

          <div className="d-flex gap-3">
          <button type='submit' className={`btn btn-success ${(!authorPost || !titlePost || !contentPost || !statePost) && 'disabled'}`}>Salva</button>
          <button type='clear' className='btn btn-danger'>Cancella</button>
          </div>
          

        </div>
      </form>

      {/* Lista posts */}
      <div className="container m-5 d-flex flex-column gap-3">
        <h2>Elenco post</h2>
        {posts.length > 0 ?

          (posts.map((post) => (
            post.state === "published" &&
            <div className="card" key={post.id}>
              <div className="card-header d-flex justify-content-between align-items-center">
                <h2>{post.title}</h2>
                <span>{post.author}</span>
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
