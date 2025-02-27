import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section>
      <div className="w-full h-full border-2 border-black rounded-md overflow-hidden rounded-base shadow-[4px_4px_0px_rgba(0,0,0,1)] border-border bg-main font-base bg-main shadow-shadow bg-[#FFC29F] dark:bg-[#DDAAFF] text-slate-950 dark:text-slate-950">
        <div className="">
          {/*<CoverImage title={title} src={coverImage} slug={slug} />*/}
        </div>
        <div className="mt-8 md:grid md:grid-cols-2 md:gap-x-8 lg:gap-x-8 mb-16 md:mb-32">
          <div>
            <h3 className="ml-6 mb-4 font-mono text-4xl lg:text-5xl leading-tight">
              <Link href={`/posts/${slug}`} className="hover:underline">
                {title}
              </Link>
            </h3>
            <div className="ml-6 mb-4 md:mb-0 text-lg">
              <DateFormatter dateString={date} />
            </div>
          </div>
          <div>
            <p className="mr-6 text-base leading-relaxed ml-4">{excerpt}</p>
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>

      </div>
    </section>
  );
}
