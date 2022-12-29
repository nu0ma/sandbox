import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Pages</h1>
      <div>
        <Link href="/user">User(Async Data Fetching)</Link>
      </div>
    </>
  );
}
