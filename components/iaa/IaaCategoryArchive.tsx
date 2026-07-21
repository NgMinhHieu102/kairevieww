import Image from "next/image";

import { categoryTechnologyPosts } from "@/lib/iaa-data";
import type { IaaPost } from "@/types/iaa";

export function IaaCategoryArchive() {
  return (
    <main className="relative bg-white pb-[30px]">
      <header className="border-t border-[#ececec] py-[30px] text-center">
        <div className="mx-auto max-w-[1080px] px-[15px]">
          <h1 className="text-[16px] font-bold uppercase leading-[19.2px] tracking-[0.8px] text-black">
            Category Archives: Công Nghệ
          </h1>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1080px] grid-cols-1 px-[15px] md:grid-cols-[735px_1fr] md:px-0">
        <section className="md:pr-[30px]">
          <div className="space-y-[42px] md:space-y-[26px]">
            {categoryTechnologyPosts.map((post, index) => (
              <ArchivePostCard key={post.href} post={post} preload={index === 0} />
            ))}
          </div>
          <ArchivePagination />
        </section>
        <aside className="hidden border-l border-[#ececec] md:block" />
      </div>
    </main>
  );
}

function ArchivePostCard({
  post,
  preload,
}: {
  post: IaaPost;
  preload: boolean;
}) {
  return (
    <article className="group text-center md:grid md:grid-cols-[309px_1fr] md:items-center md:gap-[28px]">
      <a
        className="relative block aspect-[360/202] overflow-hidden bg-[#f5f5f5] md:aspect-[309/173]"
        href={post.href}
      >
        {post.date ? (
          <span className="absolute left-[-5px] top-[26px] z-10 flex h-[42px] w-[38px] flex-col items-center justify-center border-2 border-[#446084] bg-white text-[#446084] md:left-[-5px] md:top-[10px]">
            <span className="text-[15px] font-bold leading-[15px]">{post.date.day}</span>
            <span className="mt-[2px] text-[10px] font-bold uppercase leading-[10px]">
              {post.date.month}
            </span>
          </span>
        ) : null}
        <Image
          alt={post.alt}
          className="object-cover transition-opacity duration-300 group-hover:opacity-90"
          fill
          preload={preload}
          sizes="(max-width: 767px) 360px, 309px"
          src={post.image}
        />
      </a>
      <div className="mx-auto w-[340px] pt-[13px] md:w-auto md:pt-0">
        <h5 className="my-[1.36px] text-[13.6px] font-bold leading-[17.68px] text-black md:text-[16.56px] md:leading-[21.528px]">
          <a className="transition-colors hover:text-[#446084]" href={post.href}>
            {post.title}
          </a>
        </h5>
        {post.excerpt ? (
          <p className="mt-[9px] text-[13px] leading-[20.8px] text-black md:mx-auto md:max-w-[330px] md:text-[14px] md:leading-[22.4px]">
            {post.excerpt}
          </p>
        ) : null}
      </div>
    </article>
  );
}

function ArchivePagination() {
  const pages = ["1", "2", "3", "4", "...", "21", "›"];

  return (
    <nav
      aria-label="Pagination"
      className="mt-[34px] flex justify-center gap-[9px] md:mt-[36px]"
    >
      {pages.map((page) => (
        <a
          aria-current={page === "1" ? "page" : undefined}
          className={
            page === "1"
              ? "flex size-[28px] items-center justify-center rounded-full bg-[#446084] text-[14px] font-bold leading-none text-white"
              : "flex size-[28px] items-center justify-center rounded-full border-2 border-black bg-white text-[14px] font-bold leading-none text-black"
          }
          href="https://iaa.uk.net/chuyen-muc/cong-nghe/"
          key={page}
        >
          {page}
        </a>
      ))}
    </nav>
  );
}
