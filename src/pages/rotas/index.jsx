import Link from "next/link";

export default function Id() {
  return (
    <div>
      <h1>Rotas Index</h1>
      <ul>
        <Link href="/rotas/params?id=12&nome=Ana">
          <li>Params</li>
        </Link>
      </ul>
    </div>
  );
}
