import { Profile } from "@/components/Profile";
import { LinkList } from "@/components/LinkList";
import { profile, links } from "@/data/profile";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 items-start justify-center bg-zinc-50 px-4 py-12 dark:bg-black sm:items-center">
      <main className="flex w-full max-w-xl flex-col items-center gap-16 rounded-[2.25rem] bg-white px-12 py-20 shadow-sm dark:bg-zinc-950 sm:border sm:border-zinc-100 dark:sm:border-zinc-900">
        <Profile
          name={profile.name}
          bio={profile.bio}
          avatarUrl={profile.avatarUrl}
        />
        <LinkList links={links} />
      </main>
    </div>
  );
}
