import { api } from '@/lib/api';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const redirectTo = request.cookies.get('redirectTo')?.value;

  const signinResponse = await api.post('/auth/signin', { code })

  const { token } = signinResponse.data;

  const redirectURL = redirectTo ?? new URL('/', request.url);
  const cookiesEspiresInSeconds = 60 * 60 * 24 * 7; // 7 days

  return NextResponse.redirect(redirectURL, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; max-age=${cookiesEspiresInSeconds}`,
    }
  });
}
