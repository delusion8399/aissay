# AI Essay Writer - Neobrutalism Style

A Next.js application that generates essays using Google's Gemini AI API with a neobrutalism design aesthetic.

## Features

- Generate essays on any topic
- Choose essay length (short, medium, long)
- Select writing style (informative, persuasive, narrative, etc.)
- Neobrutalism design with bold colors and strong shadows
- Responsive layout for all devices

## Technologies Used

- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- Google Generative AI (Gemini API)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- A Google Gemini API key (get one at [Google AI Studio](https://makersuite.google.com/app/apikey))

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd aissay
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

Create a `.env.local` file in the root directory and add your Gemini API key:

```
NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
```

4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Usage

1. Enter an essay topic in the input field
2. Select the desired essay length
3. Choose a writing style
4. Click "Generate Essay"
5. Wait for the AI to generate your essay
6. The generated essay will appear in the right panel

## Customization

- Modify the neobrutalism styles in `src/app/globals.css`
- Add more writing styles or length options in `src/app/page.tsx`
- Customize the Gemini API prompt in `src/lib/gemini.ts`

## License

This project is licensed under the MIT License.
