import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      Get Started by editing <code className="ml-2 bg-gray-100 rounded-sm p-1">src/app/page.tsx</code>
      <a href="http://nextjs.org" target="_blank" rel="noopener noreferrer">
        <Button className="mt-4 cursor-pointer">Learn More about Next.js 15</Button>
      </a>
    </div>
  );
}
