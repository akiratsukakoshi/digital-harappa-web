import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 pb-12 overflow-hidden bg-gray-900 text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="Digital Sea"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center animate-fade-in-up">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                    「思考」と「実装」の距離を、ゼロにする。
                </h1>
                <p className="text-lg md:text-2xl font-light mb-8 text-blue-100">
                    描いたビジョンを、誰かに託すのはもう終わり。<br className="hidden md:inline" />
                    消費者から創造者へ、評価者から実験者へ。<br className="hidden md:inline" />
                    AIと共に自らの手で世界を記述する仲間よ、集まれ。
                </p>

                <div className="max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-gray-200 mb-10 space-y-4 text-left md:text-center bg-black/30 p-6 rounded-xl backdrop-blur-md border border-white/10">
                    <p>
                        「バイブコーディング」では体系的にプログラミング知識を学ばずとも、「欲しい」「作りたい」をモチベーションの源泉に、実際に手を動かしていくことで経験値を上げることができます。まずは手を動かして、自分が「できる」という自信を得ること。この一歩を踏み出せるかどうかがすべて。
                    </p>
                    <hr className="border-gray-600" />
                    <p>
                        AIと対話を重ねることでバイブコーディングを実践してきたノンエンジニアの二人がこの場を企画・運営します。具体的な知識は生成AIに尋ねながら、共に作るという新しい学びの場を共に作りましょう。ゴールはひとりひとりがAIとともに「欲しい」を作ること。1カ月間で仲間たちとともにやり切ります。
                    </p>
                </div>

                <Link
                    href="https://forms.gle/X2rSVQCG8nLJ7dis7"
                    target="_blank"
                    className="bg-orange-500 hover:bg-orange-400 text-white text-lg md:text-xl font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-orange-500/50 transition-all transform hover:-translate-y-1"
                >
                    第0期 エントリー
                    <span className="block text-xs font-normal opacity-80 mt-1">（審査制・限定12名）</span>
                </Link>
            </div>
        </section>
    );
}
