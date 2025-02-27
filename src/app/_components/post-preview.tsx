import { type Author } from "@/interfaces/author";
import Link from "next/link";
//import Avatar from "./avatar";
//import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className="w-full h-full border-2 border-black rounded-md overflow-hidden rounded-base shadow-[4px_4px_0px_rgba(0,0,0,1)] border-border bg-main font-base bg-main shadow-shadow bg-[#FFC29F] dark:bg-[#DDAAFF] text-slate-950 dark:text-slate-950"> 
      <div className="mb-5">
        {/*<CoverImage slug={slug} title={title} src={coverImage} />*/}
      </div>
      <h3 className="m-4 text-3xl mb-3 font-mono leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="m-4 text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="m-4  text-base leading-relaxed mb-4">{excerpt}</p>
      <div className="border-t-2 border-black ">
        {/*<Avatar  name={author.name} picture={author.picture} /> Quando tiver mais de um autor*/}
        <div className="m-4  flex items-center">
          <img src="public/assets/blog/authors/diego.jpg" 
            className="w-12 h-12 rounded-full mr-4" 
            alt="Diego Viana" 
          />
          <div className="text-xl font-mono">Diego Viana</div>
        </div>
      </div>
        
    </div>
    
  );
}
