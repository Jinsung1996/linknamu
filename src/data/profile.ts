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
  name: "근육돼지",
  bio: "내 목표는 3대 500",
  avatarUrl: "/pig-avatar.svg",
};

export const links: LinkItem[] = [
  {
    slug: "instagram",
    title: "😊 Instagram",
    url: "https://www.instagram.com/true_voice96",
  },
  {
    slug: "email",
    title: "📧 Email",
    url: "mailto:wlstjdp1@naver.com",
  },
  {
    slug: "github",
    title: "🐙 Github",
    url: "https://github.com/Jinsung1996",
  },
];
