import { NextRequest, NextResponse } from 'next/server';
import { generateEssay } from '@/lib/openai';

export async function POST(request: NextRequest) {
  try {
    const { topic, wordCount, essayType, writingStyle, isCustomStyle } = await request.json();

    if (!topic || !wordCount || !essayType || !writingStyle) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }


    const essay = await generateEssay(topic, wordCount, essayType, writingStyle, isCustomStyle);

    return NextResponse.json({ essay });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json(
      { error: 'Failed to generate essay' },
      { status: 500 }
    );
  }
}
