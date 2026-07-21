import { IaaFooter } from "@/components/iaa/IaaFooter";
import { IaaHeader } from "@/components/iaa/IaaHeader";
import { IaaHeroGrid } from "@/components/iaa/IaaHeroGrid";
import { IaaPostSections } from "@/components/iaa/IaaPostSections";

export default function Home() {
  return (
    <>
      <IaaHeader />
      <main className="relative bg-white pb-[30px]">
        <IaaHeroGrid />
        <IaaPostSections />
      </main>
      <IaaFooter />
    </>
  );
}
