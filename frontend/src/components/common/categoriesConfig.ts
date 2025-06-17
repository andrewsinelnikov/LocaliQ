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
      { name: 'Eggs & Poultry', emoji: '🥚🐓', description: 'Farm eggs, chicken, ducks' },
      { name: 'Red Meat', emoji: '🥩🐄', description: 'Local beef, pork, lamb, and goat' },
      { name: 'Fish & Seafood', emoji: '🐟🦐', description: 'Fresh or smoked fish, shellfish' },
      { name: 'Game Meats', emoji: '🦌🐇', description: 'Venison, rabbit, boar, and wild fowl' },
      { name: 'Dairy', emoji: '🧀', description: 'Milk, cheese, yogurt' },
      { name: 'Grains & Legumes', emoji: '🌾', description: 'Wheat, oats, beans, lentils' },
      { name: 'Seedlings & Starts', emoji: '🌱🪴', description: 'Starter plants, garden seeds' },
      { name: 'Foraged Goods', emoji: '🍄🌲', description: 'Wild herbs, berries, mushrooms' },
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
      { name: 'Savory Spreads & Sauces', emoji: '🧄🫙', description: 'Dips, pestos, hot sauces' },
      { name: 'Pasta & Grains', emoji: '🍝🌾', description: 'Homemade pasta, grain blends' },
      { name: 'Jams & Preserves', emoji: '🍓🥫', description: 'Fruit spreads, pickles, fermented goods' },
      { name: 'Ferments & Vinegars', emoji: '🧂🍶', description: 'Kombucha, sauerkraut, apple cider vinegar' },
      { name: 'Homemade Meals', emoji: '🍲', description: 'Soups, frozen meals, lunch kits' },
      { name: 'Beverages', emoji: '☕🍷', description: 'Tea, coffee, juices, local wine/beer' },
      { name: 'Cheese & Cured Meats', emoji: '🧀🥓', description: 'Artisan cheese, sausages, salami' },
      { name: 'Sweet Treats', emoji: '🍰🍫', description: 'Cakes, chocolate, candies' }
    ]
  },
  {
    id: 'handmade-crafted',
    title: 'Handmade & Crafted',
    emoji: '🎨',
    description: 'Goods made by local hands — useful, beautiful, and sustainable.',
    imageUrl: '/images/categories/handmade.jpg',
    subcategories: [
      { name: 'Woodcrafts', emoji: '🪵🪑', description: 'Furniture, spoons, toys' },
      { name: 'Leather Goods', emoji: '👞👜', description: 'Bags, belts, accessories' },
      { name: 'Metalwork & Tools', emoji: '🔧⚒️', description: 'Knives, custom tools, sculpture' },
      { name: 'Natural Dyes & Fibers', emoji: '🧶🌱', description: 'Hand-dyed yarn, cloth, basketry' },
      { name: 'Printed Materials', emoji: '🖨️📚', description: 'Zines, cards, calendars' },
      { name: 'Upcycled Products', emoji: '🔁🧺', description: 'Reclaimed fabric, wood, metal' },
      { name: 'Pottery & Ceramics', emoji: '🏺', description: 'Mugs, plates, decorative objects' },
      { name: 'Textiles & Weaving', emoji: '🧵🧣', description: 'Scarves, wall art, table linens' },
      { name: 'Fine Art & Prints', emoji: '🎨🖼️', description: 'Paintings, block prints, digital art' },
      { name: 'Jewelry', emoji: '💍', description: 'Handmade metal, beads, natural stones' },
      { name: 'Music & Media', emoji: '🎶📀', description: 'CDs, vinyl, local labels, online releases' },
      { name: 'Artisan Stationery', emoji: '✉️📓', description: 'Handmade paper, journals, cards' }
    ]
  },
  {
    id: 'wellness-care',
    title: 'Wellness & Care',
    emoji: '🧼',
    description: 'Natural healing, self-care, and thoughtful personal services.',
    imageUrl: '/images/categories/wellness.jpg',
    subcategories: [
        { name: 'Wellness Sessions', emoji: '💆‍♀️🕯️', description: 'Massage, reiki, herbal consults' },
        { name: 'Natural Skincare & Bodycare', emoji: '🧴🌿', description: 'Handmade lotions, balms, soaps' },
        { name: 'Herbal Products & Remedies', emoji: '🍵🌱', description: 'Teas, tinctures, salves, tonics' },
        { name: 'Aromatherapy & Candles', emoji: '🕯️🌸', description: 'Essential oils, scented candles' },
        { name: 'Mental Wellness & Coaching', emoji: '🧠💬', description: 'Counseling, life coaching, mindfulness' },
        { name: 'Movement & Bodywork', emoji: '🏃‍♀️💃', description: 'Posture training, dance & movement classes' },
        { name: 'Fitness & Training', emoji: '💪🏃‍♀️', description: 'Strength, endurance, group workouts' },
        { name: 'Nutrition & Meal Planning', emoji: '🥗📋', description: 'Diet support, holistic eating' },
        { name: 'Childcare & Learning', emoji: '👶📚', description: 'Babysitting, tutoring, playgroups' }
    ]
  },
  {
    id: 'local-services',
    title: 'Local Services',
    emoji: '🧰',
    description: 'Skilled neighbors offering help, repairs, learning, and life support.',
    imageUrl: '/images/categories/services.jpg',
    subcategories: [
        { name: 'Tailoring & Repairs', emoji: '🧵🧥', description: 'Clothing fixes, custom garments' },
        { name: 'Creative Workshops', emoji: '🎨🧑‍🏫', description: 'Pottery, painting, kids’ classes' },
        { name: 'Tech Help & Setup', emoji: '💻🔌', description: 'Device setup, repairs, tutoring' },
        { name: 'Garden & Home Help', emoji: '🌻🧹', description: 'Home services, yard work, handyman' },
        { name: 'Pet Care & Walking', emoji: '🐕🦴', description: 'Dog walking, sitting, grooming' },
        { name: 'Local Tours & Experiences', emoji: '🗺️🚶', description: 'Neighborhood tours, cultural walks, tastings' },
        { name: 'Delivery & Errands', emoji: '🚲📦', description: 'Courier services, personal shopping' },
        { name: 'Event Hosting & Rentals', emoji: '🏕️🎤', description: 'Tents, decor, music, small venue spaces' },
        { name: 'Vehicle Help & Repairs', emoji: '🚗🔧', description: 'Bikes, cars, mobile repairs' },
        { name: 'Photography & Media', emoji: '📸🎥', description: 'Portraits, events, local filmmakers' },
        { name: 'Financial & Legal Help', emoji: '📊⚖️', description: 'Taxes, contracts, budgeting help' },
        { name: 'Language & Translation', emoji: '🗣️📘', description: 'ESL tutors, document help' }
    ]
  }
]