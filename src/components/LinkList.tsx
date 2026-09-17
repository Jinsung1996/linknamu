"use client";

import { useEffect, useState } from "react";
import { LinkCard } from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

type LinkListProps = {
  links: LinkItem[];
};

export function LinkList({ links }: LinkListProps) {
  const [clicksBySlug, setClicksBySlug] = useState<Record<string, number>>(
    () => Object.fromEntries(links.map((link) => [link.slug, 0]))
  );

  useEffect(() => {
    let ignore = false;

    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data: Record<string, number>) => {
        if (!ignore) {
          setClicksBySlug((prev) => ({ ...prev, ...data }));
        }
      })
      .catch((error) => {
        console.error("[클릭 수 조회 실패]", error);
      });

    return () => {
      ignore = true;
    };
  }, [links]);

  return (
    <div className="flex w-full flex-col gap-5">
      {links.map((link) => (
        <LinkCard
          key={link.slug}
          slug={link.slug}
          title={link.title}
          clicks={clicksBySlug[link.slug] ?? 0}
        />
      ))}
    </div>
  );
}
