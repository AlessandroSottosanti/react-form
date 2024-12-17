import { useState } from 'react'

function App() {

  const [posts, setPosts] = useState([]);
  const [contentPost, setContentPost] = useState("");
  const [titlePost, setTitlePost] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title: titlePost,
      content: contentPost
    };
    setPosts([...posts, newPost]);
    setTitlePost("");
    setContentPost("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='container m-5 d-flex flex-column gap-3'>
          <label htmlFor="titlePost">Titolo post</label>
          <input className='form-control' type="text" id='titlePost' value={titlePost} onChange={(event) => setTitlePost(event.target.value)} />

          <label htmlFor='contentPost'>Contenuto post</label>
          <textarea className='form-control' type="text-area" id='contentPost' value={contentPost} onChange={(event) => setContentPost(event.target.value)} />

          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>


    <div className="container m-5 d-flex flex-column gap-3">
      {        posts.length > 0 ? 
      
      (posts.map((post) => (
        <div className="card" key={post.id}>
          <div className="card-header">{post.title}</div>
          <div className="card-body">{post.content}</div>
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
