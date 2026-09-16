type ProfileProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export function Profile({ name, bio, avatarUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="h-36 w-36 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
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
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        {name}
      </h1>
      <p className="text-lg text-zinc-500 dark:text-zinc-400">{bio}</p>
    </div>
  );
}
