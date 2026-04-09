export const SITE = {
  website: "https://seniye.dev", // replace this with your deployed domain
  author: "Seniye",
  profile: "https://github.com/song682",
  desc: "Seniye's personal blog - A cat lover, translator enthusiast, and developer.",
  title: "Seniye's lil space",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format)
} as const;
