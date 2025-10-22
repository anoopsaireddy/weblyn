import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500">&copy; 2025 Lynlytics. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <Link href="#" className="text-gray-500 hover:text-gray-700">
            Privacy Policy
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-700">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
