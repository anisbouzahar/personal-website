import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-6xl font-semibold mb-24 text-center">Coming soon</h1>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] mb-12"
        src="/logo.svg"
        alt="Anis's portfolio Logo"
        width={180}
        height={37}
        priority
      />
      <h2 className="text-2xl mb-6 text-center">Currently working on my portfolio</h2>
      <div className="flex flex-col sm:flex-row mb-2 w-full max-w-md items-center space-x-2 space-y-6 sm:space-y-0">
        <Input size={8} type="email" placeholder="Drop your email to hear when we're live!" />
        <Button type="submit" className="whitespace-nowrap">
          Notify Me
        </Button>
      </div>
    </main>
  );
}
