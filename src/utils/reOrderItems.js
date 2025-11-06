export default function reorderItems(items, order) {
  return items.map((item) =>
    item.order > order ? { ...item, order: item.order - 1 } : item
  );
}
