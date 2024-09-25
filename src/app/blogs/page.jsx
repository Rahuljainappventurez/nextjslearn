import Link from 'next/link'
import React from 'react'
import UsersPage from '../users/page'

const BlogPage = () => {
    console.log("server side render")
  return (
    <div>
        <h1>Show all blogs</h1>
        <Link href={'/'}>Home</Link><br/>
        <Link href={'/users'}>Users Page</Link>
        <UsersPage />
    </div>
  )
}

export default BlogPage