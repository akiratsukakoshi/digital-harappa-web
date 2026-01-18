export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h4 className="text-lg font-bold">Digital Harappa University</h4>
                    <p className="text-xs text-gray-500 mt-1">Bridging Vision and Reality.</p>
                </div>
                <div className="text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} Digital Harappa University. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
