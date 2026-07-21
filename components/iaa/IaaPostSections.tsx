import { reviewPosts, technologyPosts } from "@/lib/iaa-data";

import { PostCard } from "./PostCard";

export function IaaPostSections() {
  return (
    <>
      <section className="mx-auto mt-[30px] max-w-[1080px] overflow-hidden px-[15px] md:mt-[30px] md:px-[15px]">
        <h3 className="mb-2 text-[16px] font-bold leading-[25.6px] text-black md:mb-[10px] md:text-[20px] md:leading-8">
          Review Công Nghệ
        </h3>
        <div className="flex w-max gap-[20px] md:grid md:w-auto md:grid-cols-3 md:gap-[20px]">
          {reviewPosts.slice(0, 3).map((post) => (
            <PostCard key={post.href} post={post} variant="review" />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-[30px] max-w-[1080px] px-[15px] md:mt-[42px]">
        <h3 className="mb-2 text-[16px] font-bold leading-[25.6px] text-black md:mb-[10px] md:text-[20px] md:leading-8">
          Tin Công Nghệ
        </h3>
        <div className="grid grid-cols-1 gap-y-[30px] md:grid-cols-3 md:gap-x-[20px] md:gap-y-[30px]">
          {technologyPosts.map((post) => (
            <PostCard key={post.href} post={post} variant="news" />
          ))}
        </div>
      </section>
    </>
  );
}
