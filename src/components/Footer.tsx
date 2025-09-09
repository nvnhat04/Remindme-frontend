import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-800 text-gray-200 py-4">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-sm">
            © {new Date().getFullYear()} Nguyen Van Nhat. All rights reserved.
            </p>

            <div className="flex gap-6">
            <Link href="https://github.com/nvnhat04" target="_blank" className="hover:text-white">
                GitHub
            </Link>
            <Link href="https://linkedin.com/in/nvnhat04" target="_blank" className="hover:text-white">
                LinkedIn
            </Link>
            </div>
        </div>
        </footer>
    );
}
