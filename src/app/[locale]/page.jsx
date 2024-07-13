import { unstable_setRequestLocale } from "next-intl/server";
import About from "./(about)/_components/About";

export default function Page({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <About />
    </>
  );
}
