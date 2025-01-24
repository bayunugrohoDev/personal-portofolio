"use client";

import MainTitle from "@/components/MainTitle";
import { useTranslations } from "next-intl";
import { useState } from "react";

const Contact = () => {
  const t = useTranslations("menu");
  const tContact = useTranslations("contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log("response", response);
      if (response.ok) {
        alert("Email sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Error sending email");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <MainTitle title={t("contact.title")} />

      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative z-0 mb-8 w-full group">
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="block border-0 border-gray-300 dark:border-gray-600 bg-transparent px-0 py-2.5 border-b-2 dark:focus:border-blue-500 focus:border-blue-600 w-full text-gray-900 text-sm dark:text-white appearance-none focus:outline-none focus:ring-0 peer"
            // placeholder= {t('name.placeholder')}
            required
          />
          <label
            htmlFor="name"
            className="top-3 rtl:peer-focus:left-auto -z-10 absolute peer-focus:font-medium text-bodyText text-sm peer-focus:text-blue-600 peer-focus:dark:text-blue-500 dark:text-bodyTexter transform origin-[0] -translate-y-6 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 rtl:peer-focus:translate-x-1/4 duration-300 scale-75 peer-focus:start-0 peer-placeholder-shown:scale-100 peer-focus:scale-75"
          >
            {tContact("name.title")}
          </label>
        </div>
        <div className="relative z-0 mb-8 w-full group">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="block border-0 border-gray-300 dark:border-gray-600 bg-transparent px-0 py-2.5 border-b-2 dark:focus:border-blue-500 focus:border-blue-600 w-full text-gray-900 text-sm dark:text-white appearance-none focus:outline-none focus:ring-0 peer"
            // placeholder= {t('email.placeholder')}
            required
          />
          <label
            htmlFor="email"
            className="top-3 rtl:peer-focus:left-auto -z-10 absolute peer-focus:font-medium text-bodyText text-sm peer-focus:text-blue-600 peer-focus:dark:text-blue-500 dark:text-bodyTexter transform origin-[0] -translate-y-6 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 rtl:peer-focus:translate-x-1/4 duration-300 scale-75 peer-focus:start-0 peer-placeholder-shown:scale-100 peer-focus:scale-75"
          >
            {tContact("email.title")}
          </label>
        </div>

        <div className="relative z-0 mb-8 w-full group">
          <textarea
            name="message"
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="block border-0 border-gray-300 dark:border-gray-600 bg-transparent px-0 py-2.5 border-b-2 dark:focus:border-blue-500 focus:border-blue-600 w-full text-gray-900 text-sm dark:text-white appearance-none focus:outline-none focus:ring-0 peer"
            // placeholder= {t('message.placeholder')}
            required
          />
          <label
            htmlFor="message"
            className="top-3 rtl:peer-focus:left-auto -z-10 absolute peer-focus:font-medium text-bodyText text-sm peer-focus:text-blue-600 peer-focus:dark:text-blue-500 dark:text-bodyTexter transform origin-[0] -translate-y-6 peer-focus:-translate-y-6 peer-placeholder-shown:translate-y-0 rtl:peer-focus:translate-x-1/4 duration-300 scale-75 peer-focus:start-0 peer-placeholder-shown:scale-100 peer-focus:scale-75"
          >
            {tContact("message.title")}
          </label>
        </div>

        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-700 dark:bg-blue-600 mt-4 px-5 py-2.5 rounded-lg w-full sm:w-auto font-medium text-white focus:ring-4 focus:outline-none focus:ring-blue-300 text-center text-sm dark:focus:ring-blue-800"
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
    </>
  );
};

export default Contact;
