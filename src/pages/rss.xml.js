import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "Coig Cybersecurity ",
    description: "Biuletyn bezpieczeństwa",
    site: "https://incredible-mousse-32e89e.netlify.app/",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
