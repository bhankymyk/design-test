import React from "react";
import Image from "next/image";

type CreateEventProps = {
  onClose: () => void;
};

const CreateEvent: React.FC<CreateEventProps> = ({ onClose }) => {
  const handleClose = () => {
    onClose(); 
  };
  
  return (
    <>
      <div className="lg:grid grid-cols-2 lg:h-[70vh] h-[90vh] lg:w-[700px] overflow-y-scroll">
        <div className=" bg-[#F9FAFB] layout-padd p-3">
          <h1 className="font-semibold text-1xl text-black font-customFontHeading">Header</h1>
          <p className="font-normal text-sm text-gray-700">
            Optional Description
          </p>
          <div className="div mt-3">
            <div className="div">
              <label className="text-[#101010] text-sm font-medium leading-4">Label</label>
            </div>
            <div className="div">
              <input
                type="text"
                name=""
                id=""
                className="bg-white px-2 border-2 text-black rounded-lg placeholder-black text-sm  h-[36px] w-[300px] leaading-4"
                placeholder="Filled"
              />
            </div>
          </div>
          <div className="div mt-3">
            <div className="div">
              <label className="text-[#101010]  text-sm font-medium leading-4">Label</label>
            </div>
            <div className="div">
              <input
                type="text"
                name=""
                id=""
                className="bg-white px-2 text-black rounded-lg placeholder-black text-sm  h-[36px] w-[300px] leaading-4"
                placeholder="Filled"
              />
            </div>
          </div>
          <div className="div mt-3">
            <div className="div">
              <label className="text-[#101010]  text-sm font-medium leading-4">Label</label>
            </div>
            <div className="div">
              <input
                type="text"
                name=""
                id=""
                className="bg-white px-2 text-black rounded-lg placeholder-black text-sm  h-[36px] w-[300px] leaading-4"
                placeholder="Filled"
              />
            </div>
          </div>
          <div className="div mt-3">
            <div className="div">
              <label className="text-[#101010]  text-sm font-medium leading-4">Label</label>
            </div>
            <div className="div">
              <input
                type="text"
                name=""
                id=""
                className="bg-white px-2 text-black rounded-lg placeholder-black text-sm  h-[36px] w-[300px] leaading-4"
                placeholder="Filled"
              />
            </div>
          </div>
          <div className="div mt-3">
            <div className="div">
              <label className="text-[#101010]  text-sm font-medium leading-4">Label</label>
            </div>
            <div className="div">
              <input
                type="text"
                name=""
                id=""
                className="bg-white px-2 text-black rounded-lg placeholder-black text-sm  h-[36px] w-[300px] leaading-4"
                placeholder="Filled"
              />
            </div>
          </div>
        </div>

        <div className="div">
          <div className="flex space-x-3 ml-5">
            <p className="bg-gray-500 text-sm text-black p-3 rounded-lg leaading-4 font-medium" onClick={handleClose}>
              Label
            </p>
            <p className="p-3 text-[#374151] text-sm font-medium leading-4">Label</p>
            <p className="p-3 text-[#374151] text-sm font-medium leading-4">Label</p>
          </div>

          <div className="ml-5 mt-10">
            <Image
              src="/assets/Illustration.png"
              width={400}
              height={80}
              alt="bg"
              className="mx-auto"
            />
          </div>

          <div className="flex justify-end mt-10">
            <div className="flex ">
              <button className=" text-black font-medium py-1 px-4 flex items-center rounded leading-4"
              onClick={handleClose} >
                Cancel
              </button>
            </div>
            <div className="flex">
              <button className="bg-black text-white font-medium hover:bg-gray-800 py-1 px-4 flex items-center rounded ">
                Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateEvent;