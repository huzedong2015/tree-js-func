/**
 * Tree each
 * @param data data
 * @param callback each callback
 * @param children child key default value: children
 */
export function treeEach<T extends Record<string, any>>(
  data: T[],
  callback: (value: T) => void,
  children: keyof T = "children",
): void {
  data.forEach((val) => {
    const childrens = val[children];

    if (Array.isArray(childrens) && childrens.length > 0) {
      treeEach(childrens, callback, children);
    }

    callback(val);
  });
}
