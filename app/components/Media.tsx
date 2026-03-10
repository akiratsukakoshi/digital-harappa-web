import React from 'react';

export default function Media() {
    return (
        <section id="media" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        Media & Resources
                    </h2>
                    <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                        デジタル原っぱの活動やメッセージを、動画と音声でお届けします。
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* YouTube Section */}
                    <div className="space-y-12">
                        {/* YouTube Channel Intro */}
                        <div className="group relative">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.104-.245-12.126-.245-15.23 0-3.47.273-3.622 2.382-3.622 8.816 0 6.434.152 8.543 3.622 8.816 3.104.245 12.126.245 15.23 0 3.47-.273 3.622-2.382 3.622-8.816 0-6.434-.152-8.543-3.622-8.816zM9 15.5v-7l6 3.5-6 3.5z"/></svg>
                                    </span>
                                    デジタル原っぱ大学 Youtubeチャンネル
                                </div>
                                <a 
                                    href="https://youtube.com/channel/UCw6hUbyuco-Gnh1cck3_XDA?si=aokv6_YC3QjjMe3_" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-xs font-semibold px-4 py-1.5 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-sm"
                                >
                                    登録
                                </a>
                            </h3>
                            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl bg-gray-100 border border-gray-100">
                                <iframe
                                    src="https://www.youtube.com/embed/sQMM73yErbw?rel=0"
                                    title="Digital Harappa New Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute top-0 left-0 w-full h-full border-0"
                                ></iframe>
                            </div>
                        </div>

                        {/* Concept Movie Video */}
                        <div className="group relative">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                                </span>
                                デジタル原っぱ大学 コンセプトムービー
                            </h3>
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-100 border border-gray-100">
                                <iframe
                                    src="https://www.youtube.com/embed/jKVpwjkDVzw?rel=0"
                                    title="Digital Harappa University Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute top-0 left-0 w-full h-full border-0"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Spotify Section */}
                    <div className="h-full">
                        <div className="group relative h-full">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.485 17.305c-.215.354-.67.463-1.024.248-2.822-1.723-6.375-2.113-10.558-1.16-.403.093-.81-.16-.903-.562-.093-.403.16-.81.562-.903 4.58-1.047 8.49-.607 11.674 1.336.355.216.464.672.249 1.026v.115zm1.465-3.263c-.27.44-.847.578-1.287.308-3.226-1.983-8.143-2.557-11.958-1.398-.5.152-1.023-.135-1.175-.633-.153-.497.135-1.022.633-1.175 4.355-1.322 9.776-.677 13.48 1.597.43.27.577.847.307 1.287l-.001.014zm.138-3.394c-3.87-2.3-10.254-2.51-13.974-1.38-.595.18-1.226-.15-1.406-.746-.18-.595.15-1.226.746-1.406 4.285-1.298 11.334-1.054 15.79 1.594.53.316.71.996.395 1.527-.315.53-.993.708-1.524.394l-.027-.015z"/></svg>
                                </span>
                                デジタル原っぱ大学 Podcast
                            </h3>
                            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative h-full min-h-[450px] lg:min-h-[550px] bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                                <iframe 
                                    style={{ borderRadius: '12px' }} 
                                    src="https://open.spotify.com/embed/episode/2ynQFEtBOCfYoWJ9r9U8xD?utm_source=generator&theme=0" 
                                    width="100%" 
                                    height="100%" 
                                    frameBorder="0" 
                                    allowFullScreen 
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                    loading="lazy"
                                    className="absolute inset-0"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
