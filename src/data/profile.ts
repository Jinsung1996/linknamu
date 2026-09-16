export type LinkItem = {
  slug: string;
  title: string;
  url: string;
};

export type ProfileData = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export const profile: ProfileData = {
  name: "박진성",
  bio: "기모찌 딱따구리",
};

export const links: LinkItem[] = [
  { slug: "instagram", title: "Instagram", url: "https://instagram.com" },
  { slug: "github", title: "GitHub", url: "https://github.com" },
  { slug: "blog", title: "Blog", url: "https://example.com" },
];
