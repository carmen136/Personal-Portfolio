import Link from "next/link";

export default function Header() {
 
    return(
        <>
            <Link href="#introduction">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            {/* <Link href="##contact">Contact</Link> */}
        </>
    )

}