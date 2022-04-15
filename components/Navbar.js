import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
         <div className="logo">
         <Link href="/">
            <a>
                <Image
        src="/logo.png" alt="logo" width={100} height={77}/>
        </a>
          </Link>
         </div>
          
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/celebs"> 
            <a>Users</a>
          </Link>
    </nav>
  );
}

export default Navbar;
