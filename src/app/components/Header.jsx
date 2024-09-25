import Link from 'next/link'
import React from 'react'

const Header = () => {
  console.log("i am header")
  return (
    <div>
      <h1>Header</h1>
      <Link href={'/blogs'}>All Blogs</Link><br />
      <Link href={'/users'}>All Users</Link>
    </div>
  )
}

export default Header