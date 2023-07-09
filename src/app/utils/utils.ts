export function mainRouterHelper(item?: string) {
  const id = item?.split('-')[0] ?? '';
  console.log(id);
  return id;
}
