import Image from "next/image";
export default function StudentList() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-5 py-24 ">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              수강 현황
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              미래유망분야 고졸인재양성사업을 통한 설명이 들어갈 부분입니다.
              저작자·발명가·과학기술자와 예술가의 권리는 법률로써 보호한다.
              대통령이 궐위되거나 사고로 인하여 직무를 수행할 수 없을 때에는
              국무총리, 법률이 정한 국무위원의 순서로 그 권한을 대행한다.
              대통령은 제1항과 제2항의 처분 또는 명령을 한 때에는 지체없이
              국회에 보고하여 그 승인을 얻어야 한다. 국회는 국정을 감사하거나
              특정한 국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출
              또는 증인의 출석과 증언이나 의견의 진술을 요구할 수 있다.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/80x80"
                  width={80}
                  height={80}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    홍길동
                  </h2>
                  <p className="text-gray-500">FrontEnd, UI Designer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/84x84"
                  width={80}
                  height={80}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    유재석
                  </h2>
                  <p className="text-gray-500">BackEnd Dev</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/88x88"
                  width={80}
                  height={80}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    강호동
                  </h2>
                  <p className="text-gray-500">DB Admin</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/90x90"
                  width={80}
                  height={80}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    John Doe
                  </h2>
                  <p className="text-gray-500">DevOps</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/94x94"
                  width={80}
                  height={80}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Martin Eden
                  </h2>
                  <p className="text-gray-500">Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/98x98"
                  width={80}
                  height={80}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Boris Kitua
                  </h2>
                  <p className="text-gray-500">UX Researcher</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/100x90"
                  width={80}
                  height={80}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Atticus Finch
                  </h2>
                  <p className="text-gray-500">QA Engineer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/104x94"
                  width={80}
                  height={80}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Alper Kamu
                  </h2>
                  <p className="text-gray-500">System</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <Image
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/108x98"
                  width={80}
                  height={80}
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Rodrigo Monchi
                  </h2>
                  <p className="text-gray-500">Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
