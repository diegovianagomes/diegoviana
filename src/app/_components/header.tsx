import Link from "next/link";


const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-mono tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center ">
      <Link href="/" className="hover:underline dark:text-slate-200">
        Diego Viana
      </Link>
      .
    </h2>
  );
};

export default Header;
