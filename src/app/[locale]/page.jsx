import { unstable_setRequestLocale } from "next-intl/server";
import About from "./(about)/_components/About";

export default async function Page(props) {
  const params = await props.params;

  const {
    locale
  } = params;

  unstable_setRequestLocale(locale);
  return (
    <>
      <About />
    </>
  );
}
