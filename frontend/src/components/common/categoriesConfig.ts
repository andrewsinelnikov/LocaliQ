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
]