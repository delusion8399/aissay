"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import TabGroup from "@/components/TabGroup";
import EssayWriter from "@/components/EssayWriter";
import EssayOutliner from "@/components/EssayOutliner";

export default function ToolsPage() {
  const searchParams = useSearchParams();
  const [defaultTab, setDefaultTab] = useState("essay-writer");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "essay-outliner") {
      setDefaultTab("essay-outliner");
    }
  }, [searchParams]);

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
              <Link href="/#features" className="font-bold hover:underline">Features</Link>
              <Link href="/#how-it-works" className="font-bold hover:underline">How It Works</Link>
              <Link href="/" className="chunky-button chunky-button-tertiary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="chunky-title text-4xl">AI Essay Tools</h1>
          <p className="text-xl">
            Generate high-quality essays and outlines with our AI-powered tools.
          </p>
        </header>

        {/* Tools Container */}
        <div className="chunky-container mb-16">
          <TabGroup
            tabs={[
              {
                id: 'essay-writer',
                label: 'AI Essay Writer',
                content: <EssayWriter />
              },
              {
                id: 'essay-outliner',
                label: 'AI Essay Outliner',
                content: <EssayOutliner />
              }
            ]}
            defaultTabId={defaultTab}
          />
        </div>

        {/* Tips Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Tips for Better Results</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="chunky-card chunky-card-accent-1">
              <h3 className="text-xl font-bold mb-4">For Essay Writer</h3>
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
              </ul>
            </div>

            <div className="chunky-card chunky-card-accent-2">
              <h3 className="text-xl font-bold mb-4">For Essay Outliner</h3>
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
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 border-t-4 border-black mt-16">
          <p className="mb-4">
            Note: You need to add your OpenRouter API key to the .env.local file to use this application.
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} AISsay | AI Essay Writer | Powered by Gemini via OpenRouter
          </p>
        </footer>
      </div>
    </div>
  );
}
