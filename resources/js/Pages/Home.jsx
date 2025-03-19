import { Head, Link, usePage } from "@inertiajs/react";
import { useRoute } from '../../../vendor/tightenco/ziggy';
import { useState, useEffect } from 'react';

function Home({ posts }) {

  const route = useRoute();
  const { flash } = usePage().props;
  const { component } = usePage();

  const [flashMsg, setFlashMsg] = useState({
    message: flash.message,
    success: flash.success,
  });

  // Clear flash messages after a delay (e.g., 1500ms)
  useEffect(() => {
    if (flashMsg.message || flashMsg.success) {
      const timer = setTimeout(() => {
        setFlashMsg({ message: null, success: null });
      }, 1500);

      return () => clearTimeout(timer); // Cleanup timeout on unmount
    }
  }, [flashMsg]); // Only trigger when flashMessages change

  return (
    <>
      <Head title={component} />
      <h1 className="title">Hello</h1>
      {flashMsg.message && <div className="absolute top-24 right-6 bg-rose-500 
      p-2 rounded-md shadow-lg text-sm text-white">
        {flashMsg.message}
      </div>}

      {flashMsg.success && <div className="absolute top-24 right-6 bg-green-500 
      p-2 rounded-md shadow-lg text-sm text-white">
        {flashMsg.success}
      </div>}

      <div>

        {posts.data.map(post => (
          <div key={post.id} className="p-4 border-b">
            <div className="text-sm text-slate-600">
              <span>Posted on:</span>
              <span>{new Date(post.created_at).toLocaleTimeString()}</span>
            </div>
            <p className="font-medium">{post.body}</p>

            {/* <Link href={`/posts/${post.id}`} className="text-link">Read more...</Link> */}

            <Link href={route('posts.show', post)} className="text-link">Read more...</Link>

          </div>
        )
        )}

      </div>
      <div className="py-12 px-4">
        {posts.links.map(link => (
          link.url ?
            <Link key={link.label}
              href={link.url}
              dangerouslySetInnerHTML={{ __html: link.label }}
              className={`p-1 mx-1 ${link.active ? "text-blue font-bold" : ''}`}
            ></Link>
            :
            <span key={link.label}
              dangerouslySetInnerHTML={{ __html: link.label }}
              className="p-1 mx-1 text-slate-300"
            ></span>
        ))}
      </div>
    </>
  )
}

export default Home;