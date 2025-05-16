import Link from "next/link";

export default function Navbar() {
  return (
    <header className="text-2xl text-white flex justify-between items-center shadow-md bg-stone-900 border-1 border-black py-8 px-6">
      <h1 className="font-bold">Loja do Avô do Yugi</h1>
      <nav className="font-semibold flex items-center text-[1.2rem]">
        <Link href="/about">Sobre</Link>
      </nav>
    </header>
  );
}
