import { cookies } from 'next/headers';

import Blur from '@/components/Blur';
import Copyright from '@/components/Copyright';
import EmptyMemories from '@/components/EmptyMemories';
import Hero from '@/components/Hero';
import SignIn from '@/components/SignIn';
import Stripes from '@/components/Stripes';
import Profile from '@/components/Profile';

export default function Home() {
  const isAuthenticated = cookies().has('token');

  return (
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
        <EmptyMemories />
      </div>
    </main>
  );
}
