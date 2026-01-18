import Image from 'next/image';

export default function Guides() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-center text-3xl font-bold mb-16 text-gray-900">Guides / 案内人</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Guide 1 */}
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <Image
                                src="/images/nobuaki_motozawa.jpg"
                                alt="Nobuaki Motozawa"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">元沢 信昭</h3>
                            <p className="text-sm text-orange-500 mb-2 font-medium">Nobuaki Motozawa / Pacer</p>
                            <p className="text-gray-700 italic mb-3 text-sm">仮説から実装までを高速回転。「できる」を拡げる</p>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                ボタリズムコーヒーロースター代表。南房総でコーヒー焙煎業を営みながら、2023年よりAIに傾倒。数々のボットシステムを自ら構築。本業の業務システムにAIを取り入れた「Insight Scope」を開発、運用する。
                            </p>
                        </div>
                    </div>

                    {/* Guide 2 */}
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <Image
                                src="/images/akira_tsukakoshi.jpg"
                                alt="Akira Tsukakoshi"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">塚越 暁</h3>
                            <p className="text-sm text-orange-500 mb-2 font-medium">Akira Tsukakoshi / Facilitator</p>
                            <p className="text-gray-700 italic mb-3 text-sm">「失敗」も楽しさの一部。つくるを遊ぶ</p>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                原っぱ大学ガクチョー。野山で遊び、AIに熱中。2025年からは自らの秘書を作ろうとするも思うようなものがなかなかできなかったが、2026年1月より自社の業務支援システム「Harappa Management Cockpit」を開発、運用する。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
