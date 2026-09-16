import { MongoClient, type Collection, type Document } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "linknamu";

let clientPromise: Promise<MongoClient> | null = null;

function getClientPromise(): Promise<MongoClient> {
  if (!uri) {
    throw new Error(
      "MONGODB_URI 환경 변수가 설정되지 않았습니다. .env.local을 확인하세요."
    );
  }

  if (clientPromise) {
    return clientPromise;
  }

  const client = new MongoClient(uri);

  if (process.env.NODE_ENV === "development") {
    // 개발 모드 HMR로 인해 커넥션이 매 리로드마다 새로 생성되는 것을 방지
    const globalWithMongo = globalThis as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };

    globalWithMongo._mongoClientPromise ??= client.connect();
    clientPromise = globalWithMongo._mongoClientPromise;
  } else {
    clientPromise = client.connect();
  }

  return clientPromise;
}

export type LinkStat = Document & {
  slug: string;
  clicks: number;
};

export async function getLinkStatsCollection(): Promise<Collection<LinkStat>> {
  const client = await getClientPromise();
  return client.db(dbName).collection<LinkStat>("linkClicks");
}
