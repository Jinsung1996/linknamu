type LinkCardProps = {
  slug: string;
  title: string;
  clicks: number;
};

export function LinkCard({ slug, title, clicks }: LinkCardProps) {
  return (
    // next/link의 prefetch가 클릭 없이도 /r/[slug]를 미리 호출해
    // 클릭 수를 부풀릴 수 있어, 일반 <a> 태그로 이동한다.
    <a
      href={`/r/${slug}`}
      className="relative flex w-full items-center justify-center rounded-3xl border border-white/60 bg-white/40 px-8 py-5 text-xl font-bold text-zinc-800 shadow-lg shadow-pink-200/30 backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-xl active:scale-[0.98] dark:border-white/10 dark:bg-white/5 dark:text-zinc-50 dark:shadow-black/20 dark:hover:bg-white/10"
    >
      <span>{title}</span>
      <span className="absolute right-6 text-xs font-medium text-zinc-500 dark:text-zinc-400">
        {clicks}회
      </span>
    </a>
  );
}
