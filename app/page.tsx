
import { ImageCube } from "./components/image-cube";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <main className="relative h-screen w-full bg-gradient-to-b from-slate-900 to-slate-950">
      <ImageCube />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Te amo mi corazón de melón</h1>
          <h2 className="text-2xl font-bold text-white mb-2">Por siempre juntos mi reina JxM</h2>
        </div>
      </div>
    </main>
    </div>
  );
}
