import React from "react";
import Image from "next/image";

export default function hero() {
  return (
    <div className="div layout-padding">
      <div>
        <div className="bg-[url('/assets/bg.svg')] bg-no-repeat bg-cover h-[200px] lg:w-[700px] md:h-[900] mx-auto flex justify-center items-center w-full">
          <h1 className="font-bold lg:text-[70px] text-6xl leading-[92px] font-customFontHeading">
            Blog
          </h1>
        </div>
      </div>
      <div className="div mt-5 lg:relative">
        <Image
          src="/assets/image 104.png"
          alt=""
          height={200}
          width={400}
          className="w-full"
        />
        <div className="lg:absolute lg:top-0 lg:right-10 lg:mt-5 header">
          <p className="font-normal lg:text-[18px] lg:mt-5 font-customFont">
            Wednesday 17 August, 2022
          </p>
          <h3 className="font-bold lg:text-[32px] lg:mt-3 font-customFontHeading">
            Using Riverside.fm With Cal.com
          </h3>
          <p className="font-normal lg:text-[22px] lg:mt-3 lg:leading-8 font-customFont">
            How Cal.com can be used with Riverside.fm <br/>to create and
             host podcasts wherever you are.
          </p>
          <div className="flex lg:mt-3">
            <Image
              src="/assets/image 99.png"
              alt=""
              width={30}
              height={30}
              className="lg:mr-5"
            />
            <p className="lg:text-[18px] pic font-customFont">Assantewa Heubi</p>
          </div>
        </div>
      </div>
      <div className="div mt-10">
        <h2 className="font-bold lg:text-[60px] text-3xl leading-[60px] font-customFontHeading">
          More Stories
        </h2>
      </div>

      <div className="w-full flex  flex-col md:flex-row mt-10">
        <div className="md:w-1/2 mt-5">
          <Image src="/assets/image 105.png" alt="" height={336} width={672} />
          <div className="">
            <p className="font-normal text-[18px] mt-5 font-customFont">
              Wednesday 17 August, 2022
            </p>
            <h3 className="font-bold text-[32px] mt-3 font-customFontHeading">
              Using Riverside.fm With Cal.com
            </h3>
            <p className="font-normal text-[22px] mt-3 leading-8 font-customFont">
              How Cal.com can be used with Riverside.fm to create and host
              podcasts wherever you are.
            </p>
            <div className="flex mt-3">
              <Image
                src="/assets/image 99.png"
                alt=""
                width={30}
                height={30}
                className="mr-5"
              />
              <p className="text-[18px] font-customFont">Assantewa Heubi</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 lg:ml-5 mt-5">
          <Image src="/assets/image 106.png" alt="" height={336} width={672} />
          <div className="">
            <p className="font-normal text-[18px] mt-5 font-customFont">
              Wednesday 17 August, 2022
            </p>
            <h3 className="font-bold text-[32px] mt-3 font-customFontHeading">
              Using Riverside.fm With Cal.com
            </h3>
            <p className="font-normal text-[22px] mt-3 leading-8 font-customFont">
              How Cal.com can be used with Riverside.fm to create and host
              podcasts wherever you are.
            </p>
            <div className="flex mt-3">
              <Image
                src="/assets/image 99.png"
                alt=""
                width={30}
                height={30}
                className="mr-5"
              />
              <p className="text-[18px] font-customFont">Assantewa Heubi</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex  flex-col md:flex-row mt-20">
        <div className="md:w-1/2 mt-5">
          <Image src="/assets/image 107.png" alt="" height={336} width={672} />
          <div className="">
            <p className="font-normal text-[18px] mt-5 font-customFont">
              Wednesday 17 August, 2022
            </p>
            <h3 className="font-bold text-[32px] mt-3 font-customFontHeading">
              Using Riverside.fm With Cal.com
            </h3>
            <p className="font-normal text-[22px] mt-3 leading-8 font-customFont">
              How Cal.com can be used with Riverside.fm to create and host
              podcasts wherever you are.
            </p>
            <div className="flex mt-3">
              <Image
                src="/assets/image 99.png"
                alt=""
                width={30}
                height={30}
                className="mr-5"
              />
              <p className="text-[18px] font-customFont">Assantewa Heubi</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 lg:ml-5 mt-5">
          <Image src="/assets/image 108.png" alt="" height={336} width={672} />
          <div className="">
            <p className="font-normal text-[18px] mt-5 font-customFont">
              Wednesday 17 August, 2022
            </p>
            <h3 className="font-bold text-[32px] mt-3 font-customFontHeading">
              Using Riverside.fm With Cal.com
            </h3>
            <p className="font-normal text-[22px] mt-3 leading-8 font-customFont">
              How Cal.com can be used with Riverside.fm to create and host
              podcasts wherever you are.
            </p>
            <div className="flex mt-3">
              <Image
                src="/assets/image 99.png"
                alt=""
                width={30}
                height={30}
                className="mr-5"
              />
              <p className="text-[18px] font-customFont">Assantewa Heubi</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex  flex-col md:flex-row mt-20">
        <div className="md:w-1/2 mt-5">
          <Image src="/assets/image 109.png" alt="" height={336} width={672} />
          <div className="">
            <p className="font-normal text-[18px] mt-5 font-customFont">
              Wednesday 17 August, 2022
            </p>
            <h3 className="font-bold text-[32px] mt-3 font-customFontHeading">
              Using Riverside.fm With Cal.com
            </h3>
            <p className="font-normal text-[22px] mt-3 leading-8 font-customFont">
              How Cal.com can be used with Riverside.fm to create and host
              podcasts wherever you are.
            </p>
            <div className="flex mt-3">
              <Image
                src="/assets/image 99.png"
                alt=""
                width={30}
                height={30}
                className="mr-5"
              />
              <p className="text-[18px] font-customFont">Assantewa Heubi</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 lg:ml-5 mt-5">
          <Image src="/assets/image 110.png" alt="" height={336} width={672} />
          <div className="">
            <p className="font-normal text-[18px] mt-5 font-customFont">
              Wednesday 17 August, 2022
            </p>
            <h3 className="font-bold text-[32px] mt-3 font-customFontHeading">
              Using Riverside.fm With Cal.com
            </h3>
            <p className="font-normal text-[22px] mt-3 leading-8 font-customFont">
              How Cal.com can be used with Riverside.fm to create and host
              podcasts wherever you are.
            </p>
            <div className="flex mt-3">
              <Image
                src="/assets/image 99.png"
                alt=""
                width={30}
                height={30}
                className="mr-5"
              />
              <p className="text-[18px] font-customFont">Assantewa Heubi</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" ">
        <Image
          src="/assets/bg.png"
          width={400}
          height={80}
          alt="bg"
          className="w-full"
        />
      </div>
    </div>
  );
}
