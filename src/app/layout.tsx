import { cookies } from 'next/headers';
import './globals.css';
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google';

import Stripes from '@/components/Stripes';
import Blur from '@/components/Blur';
import SignIn from '@/components/SignIn';
import Profile from '@/components/Profile';
import Hero from '@/components/Hero';
import Copyright from '@/components/Copyright';
import EmptyMemories from '@/components/EmptyMemories';

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' });
const baiJamjuree = BaiJamjuree({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjuree' });

export const metadata = {
  title: 'Memories App',
  description: 'Uma cápsula do tempo construída com React, Next.js, Tailwind CSS e TypeScript, durante a NLW Spacetime',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticated = cookies().has('token');

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans text-gray-100 bg-gray-900`}>
        <main className="grid grid-cols-2 min-h-screen">
          <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
            <Blur />
            <Stripes />

            {!isAuthenticated && <SignIn />}
            {isAuthenticated && <Profile />}
            
            <Hero />
            <Copyright />
          </div>
          <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
