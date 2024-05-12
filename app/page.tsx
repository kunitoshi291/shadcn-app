import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className='p-24'>
      <div>
        <h2 className='font-medium text-2xl'>ようこそ私のHPへ!</h2>
        <p className='py-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          pariatur tempore facilis amet quidem voluptatibus excepturi quia nulla
          dolorum expedita unde error, repellat possimus libero atque a, sed
          nihil ea.
        </p>
      </div>
      <div className='flex gap-4 items-center'>
        <Button>Click Here</Button>
        <Button>Click Here</Button>
      </div>
    </main>
  );
}
