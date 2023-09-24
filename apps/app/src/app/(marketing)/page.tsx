import { brand } from "../brand.config";
import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <main className="grow flex flex-col">
      <Hero title={brand.title} description={brand.description} />
    </main>
  );
}
