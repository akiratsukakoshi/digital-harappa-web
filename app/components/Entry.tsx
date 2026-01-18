import Link from 'next/link';

export default function Entry() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-center text-3xl font-bold mb-12 text-gray-900">募集要項</h2>

                <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-inner mb-12">
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start">
                            <span className="font-bold text-orange-500 mr-3 shrink-0">日程</span>
                            <span>
                                <strong>オープニング:</strong> 4/4（土）<br className="hidden md:inline" />
                                <strong>クロージング:</strong> 5/9（土）<br className="hidden md:inline" />
                                <span className="text-sm text-gray-500">※期間中はDiscordオンライングループで活動</span>
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-orange-500 mr-3 shrink-0">場所</span>
                            <span>
                                <strong>オープニング:</strong> 神奈川県逗子市<br className="hidden md:inline" />
                                <strong>クロージング:</strong> 千葉県南房総市
                            </span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-orange-500 mr-3 shrink-0">定員</span>
                            <span>12名（最少催行人数 5名）</span>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-orange-500 mr-3 shrink-0">費用</span>
                            <span>30,000円（税込・第0期特別価格）</span>
                        </li>
                        <li className="mt-6 pt-6 border-t border-gray-200">
                            <span className="font-bold block mb-2 text-gray-900">参加条件</span>
                            <ul className="list-disc list-outside ml-5 space-y-2 text-sm md:text-base">
                                <li>生成AIに日常的に触れており、基本的なチャットでの対話ができる</li>
                                <li>新しいツールを使うことに抵抗がない</li>
                                <li>正解を教えてもらうのではなく、試行錯誤を楽しめる</li>
                                <li>自由に使えるノートPCを持参できる（Win/Mac不問）</li>
                                <li>オープニング・クロージング両日（10:00-17:00）に参加可能である</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="text-center">
                    <Link
                        href="https://forms.gle/X2rSVQCG8nLJ7dis7"
                        target="_blank"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold py-5 px-10 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                    >
                        この実験に参加する（Googleフォーム）
                    </Link>
                    <p className="mt-4 text-sm text-gray-500">
                        ※第0期のため、定員に達し次第締め切ります。
                    </p>
                </div>
            </div>
        </section>
    );
}
