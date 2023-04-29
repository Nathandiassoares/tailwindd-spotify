import { Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-5 py-1 flex items-center justify-between">
      <div className="flec items-center gap-3">
        <Image src="/album2.jpg" className="w-full" width={56} height={56} alt="capa do album" />
        <div className="flex flex-col">
          <strong className="font-normal">Rope</strong>
          <span className="text-xs text-zinc-400">Aloy is back</span>

        </div>

      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />

          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <Play />
          </button>

          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:30</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="h-1 rounded-full w-40 bg-zinc-200"></div>
          </div>

          <span className="text-xs text-zinc-400" >2:30</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
        </div>
        <div className="h-1 rounded-full w-24 bg-zinc-600">
          <div className="bg-zinc-400 w-10 h-1 rounded-fu"></div>
        </div>
        <Maximize2 size={20} />
      </div>

    </footer>
  )
}