import { useState } from 'react'

function App() {

  const [posts, setPosts] = useState([]);
  const [contentPost, setContentPost] = useState([]);
  const [titlePost, setTitlePost] = useState("");

  return (
    <>
      <form>
        <div className='container m-5 d-flex flex-column gap-3'>
          <label htmlFor="titlePost">Titolo post</label>
          <input className='form-control' type="text" id='titlePost' value={titlePost} onChange={(event) => setTitlePost(event.target.value)} />

          <label htmlFor='contentPost'>Contenuto post</label>
          <textarea className='form-control' type="text-area" id='contentPost' value={contentPost} onChange={(event) => setContentPost(event.target.value)} />

          <div>{titlePost}</div>
          <div>{contentPost}</div>
        </div>
      </form>
    </>
  )
}

export default App
