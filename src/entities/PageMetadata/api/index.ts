import { PageMetadata } from "../model";

// // https://favicone.com/
// interface FaviconDto {
//   hasIcon: boolean;
//   icon: string;
//   format: string;
// }

async function getFavicon(url: string): Promise<string | undefined> {
  // const { hasIcon, icon } = (await fetch(`https://favicone.com/${url}?json`, {
  //   mode: "no-cors",
  // }).then(async (res) => {
  //   console.log(await res.text());
  //   return res.json();
  // })) as FaviconDto;

  // if (!hasIcon) return undefined;

  return `https://www.google.com/s2/favicons?domain=${url}&sz=128`;
}

export async function getPageMetaData(url: string): Promise<PageMetadata> {
  return {
    // TODO: title: ...
    faviconUrl: await getFavicon(url),
  };
}
