export default function Movie() {
    return (
        <section className="py-20 bg-gray-50 border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-6">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                    <iframe
                        src="https://www.youtube.com/embed/jKVpwjkDVzw?rel=0"
                        title="Digital Harappa University Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full border-0"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
