import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getLinkStatsCollection } from "@/lib/mongodb";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const link = links.find((item) => item.slug === slug);

  if (!link) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  try {
    const collection = await getLinkStatsCollection();
    await collection.updateOne(
      { slug },
      { $inc: { clicks: 1 } },
      { upsert: true }
    );
  } catch (error) {
    // DB 연결이 안 되어 있어도 클릭 자체는 정상적으로 이동시킨다.
    console.error(`[클릭 수 기록 실패] slug=${slug}`, error);
  }

  return NextResponse.redirect(link.url);
}
