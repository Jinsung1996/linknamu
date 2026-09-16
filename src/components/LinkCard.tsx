type LinkCardProps = {
  slug: string;
  title: string;
};

export function LinkCard({ slug, title }: LinkCardProps) {
  return (
    // next/link의 prefetch가 클릭 없이도 /r/[slug]를 미리 호출해
    // 클릭 수를 부풀릴 수 있어, 일반 <a> 태그로 이동한다.
    <a
      href={`/r/${slug}`}
      className="flex w-full items-center justify-center rounded-2xl border border-zinc-200 bg-white px-8 py-6 text-2xl font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-50 active:scale-[0.99] dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
    >
      {title}
    </a>
  );
}
