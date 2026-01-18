export default function Curriculum() {
    const phases = [
        {
            title: "Phase 1: Ignition",
            date: "4/4 (Sat) @ Zushi",
            desc: "自らのPCに環境を構築。基本的な操作方法を学んだうえで、その日のうちにプロトタイプを動かします。夜、時間がある方は焚火を囲んで「どのような世界を作りたいか」を語り合いましょう。",
            color: "bg-pink-50 border-pink-200 text-pink-700"
        },
        {
            title: "Phase 2: Vibe Coding",
            date: "3 Weeks @ Online / Zushi-Boso",
            desc: "日常業務の中で、AIを相棒にする習慣をインストールする。Discord上のコミュニティは、互いのコードではなく「試行錯誤のログ」を共有する実験場。逗子エリアのメンバーは、オフラインで集まるのもいいでしょう。",
            color: "bg-violet-50 border-violet-200 text-violet-700"
        },
        {
            title: "Phase 3: Deployment",
            date: "5/9 (Sat) @ Minami Boso",
            desc: "最終の成果発表の日。自らの成長を実感し新しい旅路が始まる。完成度は問わない。しかし、必ず「世の中に公開（デプロイ）」する。自らの手でURLを生み出した事実が、あなたのマインドセットを不可逆的に変える。",
            color: "bg-teal-50 border-teal-200 text-teal-700"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-4">Curriculum</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">1 Month Sprint</h3>
                    <p className="mt-4 text-xl text-gray-600">思考の速度で、モノを作る。</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {phases.map((phase, index) => (
                        <div key={index} className={`p-8 rounded-2xl border-2 ${phase.color} shadow-sm hover:shadow-md transition-shadow`}>
                            <h4 className="text-xl font-bold mb-2">{phase.title}</h4>
                            <p className="text-sm font-semibold opacity-75 mb-6">{phase.date}</p>
                            <p className="text-base leading-relaxed opacity-90">
                                {phase.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
