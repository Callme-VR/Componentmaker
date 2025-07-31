import GlowMenu from "./components/glowmenu";
import Sidebar from "./components/sidebar";
import StarBorder from "./components/starborder";
import Login from "./components/login";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Glowing Navigation Menu</h1>
      <GlowMenu />
      {/* <Sidebar /> */}
      {/* <StarBorder children={undefined} /> */}
      <Login />
    </main>
  );
}
