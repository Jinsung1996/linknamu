import { Profile } from "@/components/Profile";
import { LinkList } from "@/components/LinkList";
import { profile, links } from "@/data/profile";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-1 items-start justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-sky-100 px-4 py-10 dark:from-[#2a1b28] dark:via-[#1c1420] dark:to-[#16202c] sm:items-center sm:px-6 sm:py-14">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-pink-300/40 blur-3xl dark:bg-pink-500/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl dark:bg-sky-500/10"
      />

      <main className="relative flex w-full max-w-md flex-col items-center gap-12 rounded-[2.5rem] border border-white/60 bg-white/50 px-6 py-14 shadow-xl shadow-pink-200/40 backdrop-blur-2xl dark:border-white/10 dark:bg-white/5 dark:shadow-black/30 sm:max-w-lg sm:gap-16 sm:px-12 sm:py-20">
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
