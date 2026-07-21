import type { Metadata } from "next";

import { IaaCategoryArchive } from "@/components/iaa/IaaCategoryArchive";
import { IaaFooter } from "@/components/iaa/IaaFooter";
import { IaaHeader } from "@/components/iaa/IaaHeader";

export const metadata: Metadata = {
  title: "Blog Công Nghệ Tổng Hợp - Independent Academies Association",
};

export default function CongNgheCategoryPage() {
  return (
    <>
      <IaaHeader activeHref="https://iaa.uk.net/chuyen-muc/cong-nghe/" />
      <IaaCategoryArchive />
      <IaaFooter />
    </>
  );
}
