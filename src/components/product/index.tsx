import Link from "next/link";

interface ProductProps {
  name: string;
  price: number;
  id: number;
}

export default function Product({ name, price, id }: ProductProps) {
  return (
    <Link
      href={`/product/${id}`}
      className="border-1 bg-stone-300 shadow-sm hover:bg-stone-400 w-fit px-2 rounded flex items-center"
    >
      {name} (R$ {price.toFixed(2)})
    </Link>
  );
}
