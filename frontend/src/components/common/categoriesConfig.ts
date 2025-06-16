export interface ICategory {
  id: string;
  title: string;
  emoji: string;
  description: string;
  imageUrl: string;
  subcategories: {
    name: string;
    emoji: string;
    description: string;
  }[];
}

export const categories: ICategory[] = [
    {
    id: 'fresh-from-the-farm',
    title: 'Fresh from the Farm',
    emoji: '🥕',
    description: 'Seasonal produce, eggs, honey, and other farm-grown essentials.',
    imageUrl: '/images/categories/farm.jpg',
    subcategories: [
      { name: 'Fresh Vegetables', emoji: '🥬', description: 'Seasonal greens, root crops, tomatoes' },
      { name: 'Fresh Fruits', emoji: '🍎', description: 'Apples, berries, melons, stone fruits' },
      { name: 'Honey & Beekeeping', emoji: '🍯', description: 'Local honey, wax, propolis' },
      { name: 'Eggs & Poultry', emoji: '🥚🐓', description: 'Farm eggs, chicken, ducks' },
      { name: 'Dairy', emoji: '🧀', description: 'Milk, cheese, yogurt' },
      { name: 'Grains & Legumes', emoji: '🌾', description: 'Wheat, oats, beans, lentils' },
      { name: 'Mushrooms', emoji: '🍄', description: 'Wild or farmed mushrooms' },
      { name: 'Herbs & Flowers', emoji: '🌿💐', description: 'Culinary herbs, teas, edible flowers' }
    ]
  },
  {
    id: 'from-the-kitchen',
    title: 'From the Kitchen',
    emoji: '🍞',
    description: 'Homemade foods, preserves, drinks, and delicious creations.',
    imageUrl: '/images/categories/kitchen.jpg',
    subcategories: [
      { name: 'Baked Goods', emoji: '🥖🍪', description: 'Bread, pastries, cookies' },
      { name: 'Jams & Preserves', emoji: '🍓🥫', description: 'Fruit spreads, pickles, fermented goods' },
      { name: 'Ferments & Vinegars', emoji: '🧂🍶', description: 'Kombucha, sauerkraut, apple cider vinegar' },
      { name: 'Homemade Meals', emoji: '🍲', description: 'Soups, frozen meals, lunch kits' },
      { name: 'Beverages', emoji: '☕🍷', description: 'Tea, coffee, juices, local wine/beer' },
      { name: 'Cheese & Cured Meats', emoji: '🧀🥓', description: 'Artisan cheese, sausages, salami' },
      { name: 'Sweet Treats', emoji: '🍰🍫', description: 'Cakes, chocolate, candies' }
    ]
  },
]