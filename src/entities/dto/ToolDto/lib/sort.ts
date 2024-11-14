import { ToolDto } from "../model";

function compareStringArray(a: string[], b: string[]) {
  let at = 0;
  while (at < a.length || at < b.length) {
    if (at >= a.length) return -1;
    if (at >= b.length) return 1;

    const aa = a[at];
    const bb = b[at];
    if (aa > bb) return 1;
    if (aa < bb) return -1;

    at += 1;
  }

  return 0;
}

export function sortTools(data: ToolDto[]) {
  const t = data.map((x) => ({
    ref: x,
    sortedTags: x.tags.sort(),
  }));

  const sorted = t.sort((a, b) =>
    compareStringArray(a.sortedTags, b.sortedTags)
  );

  return sorted.map((x) => ({ ...x.ref, tags: x.sortedTags }));
}
