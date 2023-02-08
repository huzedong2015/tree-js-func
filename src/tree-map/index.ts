/**
 * Tree map
 * @param data data
 * @param callback each callback
 * @param children child key default value: children
 */
export function treeMap<T extends Record<string, any>>(
  data: T[],
  callback: (value: T) => T,
  children: keyof T = "children",
): T[] {
  return data.map((val) => {
    const childrens = val[children];

    if (Array.isArray(childrens) && childrens.length > 0) {
      (val as any)[children] = treeMap(childrens, callback, children);
    }

    return callback(val);
  });
}
