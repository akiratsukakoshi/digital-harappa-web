import Image from 'next/image';

export default function Guides() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-center text-3xl font-bold mb-16 text-gray-900">Guides / 案内人</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Guide 1 - 元沢 信昭 */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col md:flex-row gap-6 items-start md:min-h-[280px]">
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
                                    ボタリズムコーヒーロースター代表。南房総でコーヒー焙煎業を営みながら、2023年よりAIに傾倒。数々のボットシステムを自ら構築する。
                                    本業の業務システムにAIを取り入れた「Insight Scope」をはじめ、製造管理工程を記録するアプリや、店舗のSNS反響を可視化するカウンターアプリなど、現場に必要なツールを次々と実装。常に新たなアプリを開発し続けている。
                                </p>
                            </div>
                        </div>
                        {/* 元沢さんからのメッセージ */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <h4 className="text-lg font-bold text-gray-900 mb-4">参加希望者へのメッセージ</h4>
                            <p className="text-base font-bold text-orange-500 mb-4">「想像を具現化する喜びを、一緒に。」</p>
                            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
                                <p>僕は非エンジニアです。<br />
                                    「私はエンジニアではありません」──今はもう必要ないかもしれませんが、AIに向かってこのプロンプトを何度入力したことでしょうか。</p>
                                <p>大工の腕前がなくたってDIYで小屋を造れるように。<br />
                                    プロサーファーでなくたって、限られた時間で心から波乗りを楽しめるように。<br />
                                    エンジニアでなくたって、自分の手でアプリを開発できる時代です。</p>
                                <p>AIは既にインフラとして私たちの社会基盤となっています。どこかブラックボックスに感じるその技術をぐっと手元に引き寄せて、想像を具現化する喜びを一緒に楽しみましょう！</p>
                            </div>
                        </div>
                    </div>

                    {/* Guide 2 - 塚越 暁 */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col md:flex-row gap-6 items-start md:min-h-[280px]">
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
                        {/* 塚越さんからのメッセージ（記入欄） */}
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <h4 className="text-lg font-bold text-gray-900 mb-4">参加希望者へのメッセージ</h4>
                            <p className="text-base font-bold text-orange-500 mb-4">「とにかくやってみること。それがすべて」</p>
                            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
                                <p>左のもっちゃんと同様、僕も非エンジニアです。<br />
                                    でもこの1年、AIと一緒にデジタルでものづくりをしまくりました。<br />
                                    その多くが失敗で、時間ばかり溶けて行ったのは事実だけれど。自分の欲しい何かが形になる喜びはリアルだろうとデジタルだろうと関係なく、嬉しい。この喜びこそが僕の行動の源泉。</p>
                                <p>そして、本当にありがたいことに、AIの進化によって、僕たちはこの喜びと作りたいという欲求さえあれば本当に、本当に、自分たちの欲しいものを生み出せる。この実感に日々、興奮しています。</p>
                                <p>もちろん、何度でも失敗するし、プロからすると「そんなことも知らないの！？」ということばかりなのだけど…。でもそれでもいいんです。今の時代、「やったもんがち」だから。手を動かすことで広がる世界が目の前に広がっているんです。そんな世界に皆さんを誘いたい、という思いでもっちゃんとこの場を始めました。一緒に、変化の時代を楽しみましょう！</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
