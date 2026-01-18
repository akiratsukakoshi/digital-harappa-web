import Image from 'next/image';

export default function Context() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                    <Image
                        src="/images/context.png"
                        alt="Zushi and Minami Boso connection"
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-sm font-bold text-orange-500 tracking-widest uppercase mb-2">Context</h2>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">2つの拠点、1つの海</h3>
                    <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                        <p>
                            「原っぱ」の精神が根付く街、逗子。<br className="hidden md:inline" />
                            そこから海を隔てた対岸、南房総。<br className="hidden md:inline" />
                            物理的な距離はありますが、デジタルの海に境界線はありません。
                        </p>
                        <p>
                            私たちはこの2つの拠点を、AIという新しい航海術で繋ぎます。<br className="hidden md:inline" />
                            日常（逗子・都心）で思考し、非日常（南房総）で実装する。
                        </p>
                        <p>
                            リアルとバーチャル、都市とローカルを横断しながら、<br className="hidden md:inline" />
                            あなたのアイデアを「動く現実」へと変換します。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
