import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

export default function Header() {
  return (
    <header className="header">
      <div className="image-container relative w-full h-[600px]"> 
      <Image
  src="/images/portada.svg"
  alt="WeWash"
  layout="intrinsic"
  width={1500}
  height={600}
  objectFit="cover"  
  unoptimized={true}
  className="header-image"
/>


      </div>

      <Image
        src="/images/uruguai.png"
        alt="WeWash"
        layout="intrinsic"
        width={1500}
        height={600}
        objectFit="cover"
          unoptimized={true}

        className="uruguay-flag"
      />

      <nav>
        <ul>
          <li><Link href="/">Início</Link></li>
          <li><Link href="/sobre">Sobre nós</Link></li>
          <li><Link href="/servicos">Serviços</Link></li>
          <li><Link href="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}
