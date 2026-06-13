import Link from "next/link";

export const metadata = { title: "404 · System Fault" };

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-white border-b-2 border-black flex flex-col">
      <div className="grid grid-cols-12 border-b border-black/15 font-mono text-[10px] uppercase tracking-[0.25em]">
        <div className="col-span-6 md:col-span-3 border-r border-black/15 px-4 md:px-8 py-3">
          Error Code / 404
        </div>
        <div className="hidden md:block col-span-6 px-8 py-3 text-[#4A4A4A]">
          The requested page is not on the floor
        </div>
        <div className="col-span-6 md:col-span-3 px-4 md:px-8 py-3 text-right text-[#FF3B00]">
          System Fault
        </div>
      </div>

      <div className="flex-1 grid grid-cols-12 items-center">
        <div className="col-span-12 lg:col-span-7 border-r-0 lg:border-r-2 border-black px-4 md:px-8 lg:px-12 py-16 md:py-24">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF3B00] mb-6">
            [ Off Blueprint ]
          </p>
          <h1 className="font-display uppercase tracking-brutal leading-[0.78] text-[40vw] md:text-[26vw] lg:text-[22vw]">
            <span className="text-outline">4</span>
            <span className="text-[#FF3B00]">0</span>
            <span className="text-outline">4</span>
          </h1>
          <p className="font-display uppercase tracking-brutal text-3xl md:text-5xl leading-[0.9] mt-8 max-w-prose">
            We don&apos;t make this part.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/"
              data-testid="notfound-home-btn"
              className="inline-flex items-center gap-3 bg-black text-white border-2 border-black px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#FF3B00] transition-colors"
            >
              Return to Index <span className="text-base">→</span>
            </Link>
            <Link
              href="/contact"
              data-testid="notfound-contact-btn"
              className="inline-flex items-center gap-3 bg-white text-black border-2 border-black px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] font-bold hover-brutal"
            >
              Brief Us Instead <span className="text-base">↗</span>
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex col-span-5 h-full bg-[#F4F4F0] bg-grain items-center justify-center">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#4A4A4A] max-w-xs text-center leading-relaxed">
            <span className="block text-[#FF3B00] mb-3">⚠ ALERT</span>
            <span className="block">
              No such page in the workshop. Either the URL was mistyped or the
              part has been retired from the catalog.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
