import Link from 'next/link'
import React from 'react'
import UsersPage from '../users/page'

async function getBlogs() {
    const res = await fetch('https://dummyapi.online/api/blogposts');
    const data = await res.json();
    return data;
  }
  


const BlogPage = async () => {
   const blogs = await getBlogs()
   console.log(blogs)
  return (
    <div>
        <Link href={'/'}>Home</Link><br/>
        <Link href={'/users'}>Users Page</Link>
        <UsersPage />
        <h1>Show all blogs</h1>
        {blogs?.map((blog, index)=>(
            <div key={index}>
            <h1>{blog?.title}</h1>
        </div>
        ))}
            
      
    </div>
  )
}

export default BlogPage