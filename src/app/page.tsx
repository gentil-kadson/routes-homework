import Link from "next/link";
import Product from "@/components/product";

export default function Home() {
  return (
    <main>
      <h2>Bem-vindo à nossa loja! :)</h2>
      <section className="py-3">
        <h3 className="text-xl font-semibold mb-2">💵 Nossos Produtos</h3>
        <div className="flex flex-col gap-2">
          <Product
            id={1}
            price={399.99}
            name="🎮 PS3 Slim 500GB 2 Controles + 30 Jogos"
          />
          <Product
            id={2}
            price={500.0}
            name="🎮 Xbox 360 Slim 300 GB 2 Controles + 10 Jogos"
          />
        </div>
      </section>
    </main>
  );
}
