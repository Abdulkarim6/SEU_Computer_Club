import Events from "../components/Event";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <Events/>
    </div>
  );
};

export default Home;
