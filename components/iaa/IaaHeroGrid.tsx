import { heroLeadPost, heroMiniPosts, heroSidePost } from "@/lib/iaa-data";

import { PostCard } from "./PostCard";

export function IaaHeroGrid() {
  return (
    <section className="mx-auto grid max-w-[1080px] grid-cols-1 px-[15px] pt-[30px] md:grid-cols-12 md:px-0">
      <div className="md:col-span-6 md:px-[15px]">
        <PostCard post={heroLeadPost} variant="lead" />
        <div className="mt-[22px] grid grid-cols-1 gap-y-[20px] md:mt-0 md:grid-cols-3 md:gap-x-1 md:gap-y-0">
          {heroMiniPosts.map((post) => (
            <div key={post.href} className="md:px-[2px]">
              <PostCard post={post} variant="mini" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[20px] md:col-span-3 md:mt-0 md:px-[15px]">
        <PostCard post={heroSidePost} variant="side" />
      </div>
      <div className="hidden md:col-span-3 md:block" />
    </section>
  );
}
