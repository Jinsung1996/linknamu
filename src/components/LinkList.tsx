import { LinkCard } from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type LinkListProps = {
  links: LinkItem[];
};

export function LinkList({ links }: LinkListProps) {
  return (
    <div className="flex w-full flex-col gap-5">
      {links.map((link) => (
        <LinkCard key={link.slug} slug={link.slug} title={link.title} />
      ))}
    </div>
  );
}
