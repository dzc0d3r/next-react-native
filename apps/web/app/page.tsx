import Image from "next/image";
import Button from "./_components/Button"

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center">
      

      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Web app using shared react native ui</h1>

      <Button text="Hello from ui"/>
      </div>
    </main>
  );
}
