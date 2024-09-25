import { useEffect, useState } from "react";
import Image from "next/image";

export default function Section2() {
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
            연혁 등 상세설명을 넣을 수 있습니다.
          </h1>
          <p className="mb-8 leading-relaxed fade-in-up">
            연혁 등 상세설명을 넣을 수 있습니다.
            저작자·발명가·과학기술자와 예술가의 권리는 법률로써 보호한다.
            
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
