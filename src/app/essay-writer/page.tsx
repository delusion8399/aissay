"use client";

import Link from "next/link";
import EssayWriter from "@/components/EssayWriter";

export default function EssayWriterPage() {
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
              <Link href="/essay-outliner" className="font-bold hover:underline">Essay Outliner</Link>
              <Link href="/#features" className="font-bold hover:underline">Features</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="chunky-title text-4xl">AI Essay Writer</h1>
          <p className="text-xl">
            Generate high-quality essays in seconds with our AI-powered essay writer.
          </p>
        </header>

        {/* Essay Writer Container */}
        <div className="chunky-container mb-16">
          <EssayWriter />
        </div>

        {/* Tips Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Tips for Better Essays</h2>

          <div className="chunky-card chunky-card-accent-1">
            <h3 className="text-xl font-bold mb-4">For Best Results</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Be specific with your topic for more focused content</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Choose the appropriate word count based on your needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Review and edit the generated essay to add your personal touch</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Fact-check important claims and statistics</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Use the generated essay as a starting point and expand with your own research</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Need an outline instead? */}
        <div className="mb-16">
          <div className="chunky-container text-center py-12">
            <h2 className="text-3xl font-bold mb-6">Need an Essay Outline Instead?</h2>
            <p className="text-xl mb-8">Create a structured outline for your essay with our AI Essay Outliner.</p>
            <Link href="/essay-outliner" className="chunky-button chunky-button-secondary text-xl px-8 py-4">
              Create an Outline
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
