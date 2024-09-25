// components/UserList.tsx
'use client';  // This makes the component a client-side component

import { useState } from 'react';

export default function AllUsers({ users }) {
  const [clicked, setClicked] = useState(false);
  console.log("btn click")

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {clicked ? 'Hide Users' : 'Show Users'}
      </button>

      {clicked && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
