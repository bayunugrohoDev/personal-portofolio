import MainTitle from "@/components/MainTitle";
import About from "./(about)/_components/About";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Page({ params: { locale } }) {
  unstable_setRequestLocale(locale);

  // const t = useTranslations("section_titles.home");
  // const currentLocal = useLocale();
  return (
    <>
      <MainTitle title={"About"} />
      <About />
    </>
  );
}
