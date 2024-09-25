import { useEffect, useState } from "react";
import Image from "next/image";

export default function Section1() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`text-gray-600 body-font ${isVisible ? "fade-in-up" : ""}`}>
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded fade-in-up"
          alt="hero"
          src="https://dummyimage.com/720x600"
          width={720}
          height={600}
        />
        <div className={`text-center lg:w-2/3 w-full ${isVisible ? "fade-in-up" : ""}`}>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 fade-in-up">
            충주상업고등학교 미래유망분야 고졸취업인재 양성사업
          </h1>
          <p className="mb-8 leading-relaxed fade-in-up">
            미래유망분야 고졸취업인재 양성사업의 설명이 들어갈 공간입니다.
            저작자·발명가·과학기술자와 예술가의 권리는 법률로써 보호한다.
            대통령이 궐위되거나 사고로 인하여 직무를 수행할 수 없을 때에는
            국무총리, 법률이 정한 국무위원의 순서로 그 권한을 대행한다.
            대통령은 제1항과 제2항의 처분 또는 명령을 한 때에는 지체없이 국회에
            보고하여 그 승인을 얻어야 한다. 국회는 국정을 감사하거나 특정한
            국정사안에 대하여 조사할 수 있으며, 이에 필요한 서류의 제출 또는
            증인의 출석과 증언이나 의견의 진술을 요구할 수 있다.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg fade-in-up">
              버튼1
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg fade-in-up">
              버튼2
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}