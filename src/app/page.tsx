"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white border-b-4 border-black sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-black">AISsay</span>
              <span className="chunky-badge ml-2">BETA</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#features" className="font-bold hover:underline">Features</a>
              <a href="#how-it-works" className="font-bold hover:underline">How It Works</a>
              <Link href="/tools" className="chunky-button chunky-button-tertiary">Try It Now</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-white border-b-4 border-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="chunky-title text-5xl md:text-6xl mb-6">AI Essay Writer</h1>
              <p className="text-xl mb-8">
                Generate high-quality essays and outlines in seconds with our AI tools.
                No sign-up required, completely free to use!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/essay-writer" className="chunky-button text-center py-3 px-8 text-lg">
                  Write an Essay
                </Link>
                <Link href="/essay-outliner" className="chunky-button chunky-button-secondary text-center py-3 px-8 text-lg">
                  Create an Outline
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="chunky-card p-8 relative overflow-visible">
                <div className="absolute -top-4 -right-4 bg-tertiary text-black text-sm font-bold py-1 px-3 rounded-full border-2 border-black z-10">
                  AI-Powered
                </div>
                <h3 className="text-xl font-bold mb-4">Sample Essay Preview</h3>
                <div className="space-y-2">
                  <p className="font-medium">The Impact of Artificial Intelligence on Education</p>
                  <div className="h-2 w-full bg-gray-100 rounded-full"></div>
                  <div className="h-2 w-11/12 bg-gray-100 rounded-full"></div>
                  <div className="h-2 w-10/12 bg-gray-100 rounded-full"></div>
                  <div className="h-2 w-full bg-gray-100 rounded-full"></div>
                  <div className="h-2 w-9/12 bg-gray-100 rounded-full"></div>
                  <div className="h-2 w-full bg-gray-100 rounded-full"></div>
                  <div className="h-2 w-10/12 bg-gray-100 rounded-full"></div>
                  <div className="h-2 w-8/12 bg-gray-100 rounded-full"></div>
                </div>
                <div className="mt-6 flex justify-end">
                  <Link href="/essay-writer" className="text-primary font-medium hover:underline">
                    Try it yourself →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="chunky-title text-4xl text-center mb-12">Our AI Essay Tools</h2>

          <div className="tool-grid">
            <div className="tool-card tool-card-accent-1">
              <div className="tool-icon">✍️</div>
              <h3 className="tool-title">AI Essay Writer</h3>
              <p className="tool-description">Generate complete, well-structured essays on any topic in seconds. Choose your word count and get a fully formatted essay.</p>
              <Link href="/essay-writer" className="chunky-button w-full text-center">
                Write an Essay
              </Link>
            </div>

            <div className="tool-card tool-card-accent-2">
              <div className="tool-icon">📝</div>
              <h3 className="tool-title">AI Essay Outliner</h3>
              <p className="tool-description">Create detailed essay outlines with main points, supporting arguments, and suggested references for any topic.</p>
              <Link href="/essay-outliner" className="chunky-button chunky-button-secondary w-full text-center">
                Create an Outline
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="bg-white border-y-4 border-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="chunky-title text-4xl text-center mb-12">Why Use Our AI Essay Tools?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="chunky-card">
              <div className="tool-icon">⚡</div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p>Generate complete essays and outlines in seconds, not hours. Save time and focus on what matters.</p>
            </div>

            <div className="chunky-card">
              <div className="tool-icon">🔍</div>
              <h3 className="text-xl font-bold mb-2">Well-Researched</h3>
              <p>Our AI creates content with accurate information and proper citations when needed.</p>
            </div>

            <div className="chunky-card">
              <div className="tool-icon">🎯</div>
              <h3 className="text-xl font-bold mb-2">Fully Customizable</h3>
              <p>Choose your topic, length, and style to get content tailored to your specific needs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="chunky-title text-4xl text-center mb-12">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-2xl font-bold border-4 border-black mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Choose Your Tool</h3>
              <p>Select between our Essay Writer or Essay Outliner</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-2xl font-bold border-4 border-black mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Enter Your Topic</h3>
              <p>Type in your essay topic and customize options</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-tertiary rounded-full flex items-center justify-center text-2xl font-bold border-4 border-black mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Get Your Content</h3>
              <p>Receive a well-structured essay or outline in seconds</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white border-y-4 border-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="chunky-container text-center py-12">
            <h2 className="text-3xl font-black mb-6">Ready to Write Better Essays?</h2>
            <p className="text-xl mb-8">Join thousands of students and professionals who use our AI tools daily.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/essay-writer" className="chunky-button text-xl px-8 py-4">
                Write an Essay
              </Link>
              <Link href="/essay-outliner" className="chunky-button chunky-button-secondary text-xl px-8 py-4">
                Create an Outline
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left">
            <div>
              <h3 className="text-xl font-bold mb-4">AISsay</h3>
              <p>AI-powered essay writing tools to help students and professionals create better content faster.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#features" className="hover:underline">Features</a></li>
                <li><a href="#how-it-works" className="hover:underline">How It Works</a></li>
                <li><Link href="/essay-writer" className="hover:underline">Essay Writer</Link></li>
                <li><Link href="/essay-outliner" className="hover:underline">Essay Outliner</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t-4 border-black pt-8 text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} AISsay | AI Essay Writer
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
