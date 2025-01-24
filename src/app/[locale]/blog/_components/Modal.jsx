"use client";

import Image from "next/image";
import React from "react";

const Modal = ({ setShowModal, showModal, modalContent }) => {
  if (!modalContent) {
    return null;
  }

  return (
    showModal && (
      <div
        className="z-10 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 modal-blog"
        onClick={() => setShowModal(false)}
      >
        <div
          className="relative bg-white mx-auto p-8 rounded-xl w-full max-w-3xl overflow-hidden overflow-y-auto"
          onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
          style={{ maxHeight: "90vh" }}
        >
          <button
            onClick={() => setShowModal(false)}
            className="top-2 right-2 absolute flex justify-center items-center border-2 border-gray-400 hover:border-red-600 rounded-full w-10 h-10 font-bold text-gray-400 text-xl hover:rotate-180 hover:text-red-600 duration-300"
          >
            x
          </button>
          <div className="space-y-2 w-full break-words">
            <Image
              src={modalContent.imgSrc}
              alt={modalContent.title}
              width={64}
              height={64}
              className="rounded-lg w-full h-64 object-cover"
            />
            <div className="text-gray-600 text-xs">{modalContent.date}</div>
            <h3 className="font-bold text-gray-800 text-xl">
              {modalContent.title}
            </h3>
            {modalContent.desc.map((paragraph, index) => (
              <p
                key={index}
                className="max-w-none dark:text-bodyText content prose"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
