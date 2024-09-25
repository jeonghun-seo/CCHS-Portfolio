import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
            <Image src="/logo.png" width={224} height={64}></Image>
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-10 text-xl hover:font-bold" href="/2022" >2022</Link>
            <Link className="mr-10 text-xl hover:font-bold" href="/2023">2023</Link>
            <Link className="mr-10 text-xl hover:font-bold" href="/2024">2024</Link>
          </nav>
          <button onClick={()=> router.push("/students")} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:font-bold rounded text-base mt-4 md:mt-0">
            수강학생 포트폴리오
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <hr/>
      </header>
    </>
  );
}
