import './globals.css';
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree } from 'next/font/google';

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
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans text-gray-100 bg-gray-900`}>
        {children}
      </body>
    </html>
  );
}
