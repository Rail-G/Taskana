export function sortItems(items, sortBy, orderBy) {
  return items.sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case "create":
        comparison = new Date(a.createdAt) - new Date(b.createdAt);
        break;
      case "alphabet":
        comparison = a.title.localeCompare(b.title);
        break;
      case "priority":
        comparison = a.priority - b.priority;
        break;
      case "update":
        comparison = new Date(a.updatedAt) - new Date(b.updatedAt);
        break;
      default:
        return 0;
    }

    return orderBy === "desc" ? -comparison : comparison;
  });
}
