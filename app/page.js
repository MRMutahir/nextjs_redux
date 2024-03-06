import Link from "next/link";

function Home() {
  return (
    <div className="container h-screen mx-auto flex flex-col  justify-center items-start gap-10">
      <h1 className="text-8xl font-semibold font-serif text-cyan-500">Welcome to our ecommerce store! 🛍️</h1>
      <p className="text-4xl text-cyan-400 font-serif">
        Click below to embark on your shopping journey and explore a world of
        endless possibilities!
      </p>
      <Link href={"/products"}>
        <button className="px-10 py-5 bg-blue-500 rounded-3xl text-white font-bold hover:bg-slate-400 hover:scale-125 hover:transition-transform">
          Start Shopping
        </button>
      </Link>
    </div>
  );
}

export default Home;
