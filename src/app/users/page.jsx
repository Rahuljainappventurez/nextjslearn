import AllUsers from "./AllUsers";
import dynamic from 'next/dynamic';
import HeavyComponent from "./HeavyComponent";

const DynamicComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>, // Optional loading component
});


// app/users/page.tsx
async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return data;
  }
  
  export default async function UsersPage() {
    const users = await getUsers();
  
    return (
      <div>
        <h1>Users List</h1>
        <AllUsers users={users} />
        <DynamicComponent />
        {/* <HeavyComponent /> */}
      </div>
    );
  }
  