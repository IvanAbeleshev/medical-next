import { NextResponse } from 'next/server';
import generateRSS from '@/utils/rss';

export async function GET() {
  const rss = generateRSS();

  return new NextResponse(rss, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  });
}
