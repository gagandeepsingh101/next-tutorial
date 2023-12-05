import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
      <div>
      <h2>Welcome to this class</h2>
      <Link href={"/blogs"}>Blog</Link>
      <Link href={"/ticket"}>TicketList</Link>
      </div>
     )
}
