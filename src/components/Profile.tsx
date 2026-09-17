type ProfileProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export function Profile({ name, bio, avatarUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      <div className="rounded-full bg-gradient-to-br from-pink-300 via-rose-200 to-sky-200 p-1.5 shadow-lg shadow-pink-300/50 dark:from-pink-400/40 dark:via-rose-400/30 dark:to-sky-400/30 dark:shadow-black/40">
        <div className="h-36 w-36 overflow-hidden rounded-full bg-zinc-200 shadow-[inset_0_-10px_18px_rgba(0,0,0,0.18)] dark:bg-zinc-800">
          {avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={avatarUrl}
              alt={`${name} 프로필 사진`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-5xl font-semibold text-zinc-500 dark:text-zinc-400">
              {name.charAt(0)}
            </div>
          )}
        </div>
      </div>
      <h1 className="text-3xl font-bold text-rose-950 dark:text-pink-50">
        {name}
      </h1>
      <p className="rounded-full bg-gradient-to-r from-pink-400 to-rose-400 px-5 py-2 text-base font-bold text-white shadow-md shadow-pink-300/50 dark:from-pink-500 dark:to-rose-500 dark:shadow-black/30 sm:text-lg">
        💪 {bio}
      </p>
    </div>
  );
}
