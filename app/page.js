import Link from "next/link";

function Home() {
  return (
    <div className="container">
      <Link href={"/products"}>
        <button className="btn btn-neutral">Neutral</button>
      </Link>
    </div>
  );
}

export default Home;
