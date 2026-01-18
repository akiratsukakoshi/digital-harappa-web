import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-4 px-6 md:px-12 flex items-center justify-between bg-white/90 backdrop-blur-sm fixed top-0 z-50 shadow-sm">
      <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
        <h1 className="font-bold text-gray-900 whitespace-nowrap text-base xs:text-lg sm:text-xl md:text-2xl tracking-tight">
          デジタル原っぱ大学 第0期
        </h1>
        <p className="hidden lg:block text-xs text-gray-500 font-medium tracking-wide border-l pl-4 border-gray-300 whitespace-nowrap">
          Bridging the Gap between Vision and Reality.
        </p>
      </div>
      <div>
        <Link
          href="https://forms.gle/X2rSVQCG8nLJ7dis7"
          target="_blank"
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold py-2 px-4 rounded-full transition-colors"
        >
          エントリー
        </Link>
      </div>
    </header>
  );
}
