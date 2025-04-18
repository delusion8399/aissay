"use client";

import Link from "next/link";
import EssayOutliner from "@/components/EssayOutliner";

export default function EssayOutlinerPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white border-b-4 border-black sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-black">AISsay</Link>
              <span className="chunky-badge ml-2">BETA</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="font-bold hover:underline">Home</Link>
              <Link href="/essay-writer" className="font-bold hover:underline">Essay Writer</Link>
              <Link href="/#features" className="font-bold hover:underline">Features</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="chunky-title text-4xl">AI Essay Outliner</h1>
          <p className="text-xl">
            Create detailed essay outlines in seconds with our AI-powered outliner.
          </p>
        </header>

        {/* Essay Outliner Container */}
        <div className="chunky-container mb-16">
          <EssayOutliner />
        </div>

        {/* Tips Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Tips for Better Outlines</h2>

          <div className="chunky-card chunky-card-accent-2">
            <h3 className="text-xl font-bold mb-4">For Best Results</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Use clear, focused topics for better structure</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>The outline serves as a framework - expand each point with your research</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Rearrange sections as needed to improve flow</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Use the suggested sources as starting points for research</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <span>Add your own unique insights to make the outline more personal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Need a full essay instead? */}
        <div className="mb-16">
          <div className="chunky-container text-center py-12">
            <h2 className="text-3xl font-bold mb-6">Need a Full Essay Instead?</h2>
            <p className="text-xl mb-8">Generate a complete, well-structured essay with our AI Essay Writer.</p>
            <Link href="/essay-writer" className="chunky-button text-xl px-8 py-4">
              Write an Essay
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t-4 border-black mt-16">
          <p className="text-sm">
            © {new Date().getFullYear()} AISsay | AI Essay Writer
          </p>
        </footer>
      </div>
    </div>
  );
}
