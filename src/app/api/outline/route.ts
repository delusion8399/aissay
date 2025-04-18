import { NextRequest, NextResponse } from 'next/server';
import { generateOutline } from '@/lib/openai';

export async function POST(request: NextRequest) {
  try {
    const { topic, essayType } = await request.json();

    if (!topic || !essayType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const outline = await generateOutline(topic, essayType);

    return NextResponse.json({ outline });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json(
      { error: 'Failed to generate outline' },
      { status: 500 }
    );
  }
}
