
import { ImageCube } from "./components/image-cube";
import "./globals.css";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <main className="relative h-screen w-full bg-[radial-gradient(circle,_#ffc2d1,_#ffb9ca,_#ffafc3,_#ffa6bc,_#ff9cb5,_#ff94af,_#ff8da9,_#ff85a3,_#ff7d9d,_#ff7597,_#ff6c90,_#ff638a)]">
      <ImageCube />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-sans text-white mt-12">Te amo mi corazón de melón</h1>
          <h2 className="text-2xl font-sans text-white mt-8">Por siempre juntos mi reina JxM</h2>
        </div>
      </div>
    </main>
    </div>
  );
}



