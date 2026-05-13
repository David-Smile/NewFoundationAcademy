const categories = ["Classroom", "Events", "Sports", "Graduation", "Facilities"];

export const galleryItems = Array.from({ length: 18 }, (_, index) => ({
  id: index + 1,
  category: categories[index % categories.length],
  label: `${categories[index % categories.length]} Moment ${index + 1}`,
}));
