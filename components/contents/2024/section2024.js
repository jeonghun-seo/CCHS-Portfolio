import Image from "next/image";
export default function Section2022() {
  return (
    <>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            충주상업고등학교 미래유망분야 고졸취업인재 양성사업 2024
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            미래유망분야 고졸취업인재 양성사업의 설명이 들어갈
            공간입니다.저작자·발명가·과학기술자와 예술가의 권리는 법률로써
            보호한다. 대통령이 궐위되거나 사고로 인하여 직무를 수행할 수 없을
            때에는 국무총리, 법률이 정한 국무위원의 순서로 그 권한을 대행한다.
            대통령은 제1항과 제2항의 처분 또는 명령을 한 때에는 지체없이 국회에
            보고하여 그 승인을 얻어야 한다. 국회는 국정을 감사하거나 특정한
            국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출 또는
            증인의 출석과 증언이나 의견의 진술을 요구할 수 있다.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/500x300"
                width={500}
                height={300}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/501x301"
                width={501}
                height={301}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/600x360"
                width={600}
                height={360}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/601x361"
                width={601}
                height={361}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/502x302"
                width={502}
                height={302}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/503x303"
                width={503}
                height={303}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
