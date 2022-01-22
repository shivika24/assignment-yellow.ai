import { Helmet } from "react-helmet";
import BottomBar from "./components/bottomBar";
import ConnectPage from "./components/connectPage";
import EngineHighlights from "./components/engineHighlights";
import Footer from "./components/footer";
import KnowMore from "./components/knowMore";
import MainPage from "./components/mainPage";
import NavBar from "./components/navBar";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import RequestADemo from "./components/requestADemo";

function App() {
  return (
    <>
      {/* For SEO purpose */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Yellow.AI</title>
        <meta
          name="description"
          content="The World’s 1st Conversational CX Automation Platform"
        />
        <link rel="canonical" href="https://yellow.a" />
      </Helmet>
      <NavBar />
      <MainPage />
      <BottomBar />
      <Page1 />
      <Page2 />
      <ConnectPage />
      <EngineHighlights />
      <KnowMore />
      <RequestADemo />
      <Footer />
    </>
  );
}

export default App;
