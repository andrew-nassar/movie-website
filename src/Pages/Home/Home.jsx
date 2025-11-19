import MainContent from "../../components/Home/MainContent/MainContent";
import Header from "../../components/Home/Header/Header";
import Card from "../../components/Home/bottom/Card";

function Home() {
  return (
    <>
      <div className="relative min-h-screen bg-gray-950">
        <Header />
        <MainContent />
        <Card />
      </div>
    </>
  );
}

export default Home;
