import OpenAI from 'openai';

// Initialize the OpenAI client with your OpenRouter API key
// In production, use environment variables for API keys
const API_KEY = process.env.NEXT_PUBLIC_OPEN_ROUTER_API_KEY || 'YOUR_API_KEY';

// Initialize the OpenAI client with OpenRouter configuration
export const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: API_KEY,
  defaultHeaders: {
    "HTTP-Referer": "https://aissay.vercel.app", // Replace with your actual site URL
    "X-Title": "AISsay", // Site title for rankings on openrouter.ai
  },
  dangerouslyAllowBrowser: true, // Only for demo purposes
});

// Helper function to get essay type instructions
function getEssayTypeInstructions(essayType: string): string {
  switch (essayType.toLowerCase()) {
    case 'compare/contrast':
      return `This should be a compare/contrast essay that:
      - Clearly identifies two subjects to compare and contrast
      - Organizes similarities and differences effectively
      - Uses appropriate transition words to show comparison or contrast
      - Provides a balanced analysis of both subjects
      - Concludes with insights about the significance of the comparison`;
    case 'argumentative':
      return `This should be an argumentative essay that:
      - Takes a clear position on the topic
      - Provides strong evidence to support the argument
      - Addresses counterarguments and refutes them effectively
      - Uses logical reasoning and avoids logical fallacies
      - Concludes with a compelling call to action or reinforcement of the main argument`;
    case 'persuasive':
      return `This should be a persuasive essay that:
      - Takes a clear stance on the topic
      - Appeals to logic, emotion, and ethics (logos, pathos, ethos)
      - Anticipates and addresses reader concerns and objections
      - Uses persuasive language and rhetorical devices
      - Ends with a compelling conclusion that motivates the reader to take action or change their view`;
    case 'critique':
      return `This should be a critique essay that:
      - Provides a brief summary of the subject being critiqued
      - Establishes clear criteria for evaluation
      - Offers balanced analysis with both strengths and weaknesses
      - Supports all judgments with specific evidence
      - Concludes with an overall assessment and recommendations`;
    case 'memoir':
      return `This should be a memoir-style essay that:
      - Uses first-person perspective and personal experiences
      - Incorporates vivid sensory details and descriptions
      - Focuses on a specific theme, lesson, or period of life
      - Includes reflection on the significance of the experiences
      - Connects personal experiences to broader universal themes`;
    case 'classic':
    default:
      return `This should be a classic essay that:
      - Presents a clear thesis statement in the introduction
      - Develops logical arguments supported by evidence
      - Maintains a formal and objective tone
      - Follows a traditional structure (introduction, body, conclusion)
      - Synthesizes information from various sources when appropriate`;
  }
}

// Helper function to get writing style instructions
function getWritingStyleInstructions(style: string): string {
  switch (style.toLowerCase()) {
    case 'academic':
      return `The writing style should be academic, with:
      - Formal language and third-person perspective
      - Precise terminology and discipline-specific vocabulary
      - Complex sentence structures with proper citations
      - Objective tone with minimal personal opinions
      - Clear logical progression of ideas`;
    case 'creative':
      return `The writing style should be creative, with:
      - Vivid imagery and descriptive language
      - Varied sentence structures and rhythms
      - Metaphors, similes, and other literary devices
      - A distinctive voice that engages the reader
      - Evocative and sensory-rich descriptions`;
    case 'conversational':
      return `The writing style should be conversational, with:
      - Casual, approachable language
      - Use of contractions and occasional first/second person
      - Short, easy-to-read sentences and paragraphs
      - Rhetorical questions and direct reader address
      - A friendly, engaging tone`;
    case 'professional':
      return `The writing style should be professional, with:
      - Clear, concise, and straightforward language
      - Well-organized structure with logical flow
      - Industry-appropriate terminology
      - Balanced and measured tone
      - Focus on facts and practical applications`;
    case 'standard':
    default:
      return `The writing style should be standard, with:
      - Clear and accessible language
      - Balanced mix of simple and complex sentences
      - Objective presentation of information
      - Coherent organization and logical flow
      - Appropriate level of formality for general audiences`;
  }
}

// Function to generate essay
export async function generateEssay(
  topic: string,
  wordCount: number,
  essayType: string,
  writingStyle: string,
  isCustomStyle: boolean = false
): Promise<string> {
  try {
    // Format the exact word count
    const exactWordCount = `exactly ${wordCount} words`;

    // Get essay type instructions
    const essayTypeInstructions = getEssayTypeInstructions(essayType);

    // Get writing style instructions
    const styleInstructions = isCustomStyle ?
      `The writing style should follow these guidelines: ${writingStyle}` :
      getWritingStyleInstructions(writingStyle);

    // Prepare the prompt
    const prompt = `Write a well-structured ${essayType} essay about "${topic}".

    The essay should be ${exactWordCount}.
    ${styleInstructions}

    ${essayTypeInstructions}

    General Requirements:
    - Include a clear introduction with a thesis statement
    - Develop well-structured body paragraphs with topic sentences
    - Provide a conclusion that summarizes the main points
    - Use proper transitions between paragraphs
    - Include relevant examples or evidence to support your points
    - Add references or citations where appropriate

    Make the essay engaging, informative, and well-structured with clear paragraphs.`;

    // Generate content using Gemini through OpenRouter
    const response = await openai.chat.completions.create({
      model: "google/gemini-2.0-flash-exp:free", // Using Gemini through OpenRouter
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that writes high-quality academic essays. You don't overuse jargon. Keep the language simple so that people find it natural"
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 2000,
    });

    // Extract the generated text
    const generatedText = response.choices[0]?.message?.content || '';

    return generatedText;
  } catch (error) {
    console.error('Error generating essay:', error);
    return 'Sorry, there was an error generating your essay. Please try again.';
  }
}

// Function to generate essay outline
export async function generateOutline(topic: string, essayType: string): Promise<string> {
  try {
    // Get essay type instructions
    const essayTypeInstructions = getEssayTypeInstructions(essayType);

    // Prepare the prompt
    const prompt = `Create a detailed ${essayType} essay outline for the topic: "${topic}".

    ${essayTypeInstructions}

    The outline should include:
    - A clear introduction section with a hook and thesis statement
    - At least 3 main body sections with supporting points
    - A conclusion section
    - Potential references or sources to consider

    Format the outline with proper headings, subheadings, and bullet points.`;

    // Generate content using Gemini through OpenRouter
    const response = await openai.chat.completions.create({
      model: "google/gemini-2.0-flash-exp:free", // Using Gemini through OpenRouter
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that creates detailed essay outlines in a clear, structured format."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    // Extract the generated text
    const generatedText = response.choices[0]?.message?.content || '';

    return generatedText;
  } catch (error) {
    console.error('Error generating outline:', error);
    return 'Sorry, there was an error generating your outline. Please try again.';
  }
}
