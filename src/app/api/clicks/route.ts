import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getLinkStatsCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function GET() {
  const slugs = links.map((link) => link.slug);
  const clicksBySlug: Record<string, number> = Object.fromEntries(
    slugs.map((slug) => [slug, 0])
  );

  try {
    const collection = await getLinkStatsCollection();
    const stats = await collection.find({ slug: { $in: slugs } }).toArray();

    for (const stat of stats) {
      clicksBySlug[stat.slug] = stat.clicks;
    }
  } catch (error) {
    // DB 연결이 안 되어 있어도 화면은 0회로 정상 표시되게 한다.
    console.error("[클릭 수 조회 실패]", error);
  }

  return NextResponse.json(clicksBySlug);
}
