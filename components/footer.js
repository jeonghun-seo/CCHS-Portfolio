import Image from "next/image";
export default function Footer() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src="/logo.png" width={128} height={64}></Image>
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            {/* <span className="ml-3 text-xl">Tailblocks</span> */}
          </a>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2024 충주상업고등학교 미래유망분야 인재양성사업 —
            <a
              href="#"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @Jeonghun Seo
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
