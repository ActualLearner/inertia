import { Link } from "@inertiajs/react";

function Home({ posts }) {
  console.log(posts)
  return (
    <>
      <h1 className="title">Hello</h1>
      <div>

        {posts.map(post => (
          <div key={post.id}>
            <p>{post.body}</p>
          </div>
        )  
      )}
        
      </div>
    </>
  )
}

export default Home;