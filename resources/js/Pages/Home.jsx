import { Link } from "@inertiajs/react";

function Home({ name }) {
  return (
    <>
    <h1 className="title">Hello {name}</h1>
    <Link preserveScroll className="block title mt-[1000px]" href="/">{new Date().toLocaleTimeString()}</Link>
    </>
  )
}

export default Home;