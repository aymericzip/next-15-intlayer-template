import { HomePageContent } from "@/components/HomePageContent";
import { NextPageIntlayer } from "next-intlayer";
import { IntlayerServerProvider } from "next-intlayer/server";

export { generateMetadata } from "./metadata";

const Home: NextPageIntlayer = async ({ params }) => {
  const { locale } = await params;

  return (
    <IntlayerServerProvider locale={locale}>
      <HomePageContent />
    </IntlayerServerProvider>
  );
};

export default Home;
