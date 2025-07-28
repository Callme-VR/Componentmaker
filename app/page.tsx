import GlowMenu from "./components/glowmenu";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Glowing Navigation Menu</h1>
      <GlowMenu />
    </main>
  );
}
