import CoverParticles from "@/components/cover-particles";
import TransitionPage from "@/components/transition-page";
import Introduction from "@/components/introduction";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen pb-16 lg:pb-0">
      <TransitionPage />
      <div className="flex-grow flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <CoverParticles />
        <Introduction />
      </div>
      <Footer />
    </main>
  );
}
