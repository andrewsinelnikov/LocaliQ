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
    title: 'category.freshFromFarm.title',
    emoji: '🥕',
    description: 'category.freshFromFarm.description',
    imageUrl: '/images/categories/farm.jpg',
    subcategories: [
      { name: 'category.freshFromFarm.sub.vegetables.name', emoji: '🥬', description: 'category.freshFromFarm.sub.vegetables.description' },
      { name: 'category.freshFromFarm.sub.fruits.name', emoji: '🍎', description: 'category.freshFromFarm.sub.fruits.description' },
      { name: 'category.freshFromFarm.sub.honey.name', emoji: '🍯', description: 'category.freshFromFarm.sub.honey.description' },
      { name: 'category.freshFromFarm.sub.eggs.name', emoji: '🥚🐓', description: 'category.freshFromFarm.sub.eggs.description' },
      { name: 'category.freshFromFarm.sub.redMeat.name', emoji: '🥩🐄', description: 'category.freshFromFarm.sub.redMeat.description' },
      { name: 'category.freshFromFarm.sub.seafood.name', emoji: '🐟🦐', description: 'category.freshFromFarm.sub.seafood.description' },
      { name: 'category.freshFromFarm.sub.gameMeat.name', emoji: '🦌🐇', description: 'category.freshFromFarm.sub.gameMeat.description' },
      { name: 'category.freshFromFarm.sub.dairy.name', emoji: '🧀', description: 'category.freshFromFarm.sub.dairy.description' },
      { name: 'category.freshFromFarm.sub.grains.name', emoji: '🌾', description: 'category.freshFromFarm.sub.grains.description' },
      { name: 'category.freshFromFarm.sub.seedlings.name', emoji: '🌱🪴', description: 'category.freshFromFarm.sub.seedlings.description' },
      { name: 'category.freshFromFarm.sub.foraged.name', emoji: '🍄🌲', description: 'category.freshFromFarm.sub.foraged.description' },
      { name: 'category.freshFromFarm.sub.herbs.name', emoji: '🌿💐', description: 'category.freshFromFarm.sub.herbs.description' },
    ]
  },
  {
    id: 'from-the-kitchen',
    title: 'category.fromKitchen.title',
    emoji: '🍞',
    description: 'category.fromKitchen.description',
    imageUrl: '/images/categories/kitchen.jpg',
    subcategories: [
      { name: 'category.fromKitchen.sub.baked.name', emoji: '🥖🍪', description: 'category.fromKitchen.sub.baked.description' },
      { name: 'category.fromKitchen.sub.spreads.name', emoji: '🧄🫙', description: 'category.fromKitchen.sub.spreads.description' },
      { name: 'category.fromKitchen.sub.pasta.name', emoji: '🍝🌾', description: 'category.fromKitchen.sub.pasta.description' },
      { name: 'category.fromKitchen.sub.jams.name', emoji: '🍓🥫', description: 'category.fromKitchen.sub.jams.description' },
      { name: 'category.fromKitchen.sub.ferments.name', emoji: '🧂🍶', description: 'category.fromKitchen.sub.ferments.description' },
      { name: 'category.fromKitchen.sub.meals.name', emoji: '🍲', description: 'category.fromKitchen.sub.meals.description' },
      { name: 'category.fromKitchen.sub.beverages.name', emoji: '☕🍷', description: 'category.fromKitchen.sub.beverages.description' },
      { name: 'category.fromKitchen.sub.cheese.name', emoji: '🧀🥓', description: 'category.fromKitchen.sub.cheese.description' },
      { name: 'category.fromKitchen.sub.sweets.name', emoji: '🍰🍫', description: 'category.fromKitchen.sub.sweets.description' },
    ]
  },
  {
    id: 'handmade-crafted',
    title: 'category.handmade.title',
    emoji: '🎨',
    description: 'category.handmade.description',
    imageUrl: '/images/categories/handmade.jpg',
    subcategories: [
      { name: 'category.handmade.sub.wood.name', emoji: '🪵🪑', description: 'category.handmade.sub.wood.description' },
      { name: 'category.handmade.sub.leather.name', emoji: '👞👜', description: 'category.handmade.sub.leather.description' },
      { name: 'category.handmade.sub.metal.name', emoji: '🔧⚒️', description: 'category.handmade.sub.metal.description' },
      { name: 'category.handmade.sub.fibers.name', emoji: '🧶🌱', description: 'category.handmade.sub.fibers.description' },
      { name: 'category.handmade.sub.prints.name', emoji: '🖨️📚', description: 'category.handmade.sub.prints.description' },
      { name: 'category.handmade.sub.upcycled.name', emoji: '🔁🧺', description: 'category.handmade.sub.upcycled.description' },
      { name: 'category.handmade.sub.pottery.name', emoji: '🏺', description: 'category.handmade.sub.pottery.description' },
      { name: 'category.handmade.sub.textiles.name', emoji: '🧵🧣', description: 'category.handmade.sub.textiles.description' },
      { name: 'category.handmade.sub.art.name', emoji: '🎨🖼️', description: 'category.handmade.sub.art.description' },
      { name: 'category.handmade.sub.jewelry.name', emoji: '💍', description: 'category.handmade.sub.jewelry.description' },
      { name: 'category.handmade.sub.media.name', emoji: '🎶📀', description: 'category.handmade.sub.media.description' },
      { name: 'category.handmade.sub.stationery.name', emoji: '✉️📓', description: 'category.handmade.sub.stationery.description' },
    ]
  },
  {
    id: 'wellness-care',
    title: 'category.wellness.title',
    emoji: '🧼',
    description: 'category.wellness.description',
    imageUrl: '/images/categories/wellness.jpg',
    subcategories: [
      { name: 'category.wellness.sub.sessions.name', emoji: '💆‍♀️🕯️', description: 'category.wellness.sub.sessions.description' },
      { name: 'category.wellness.sub.skincare.name', emoji: '🧴🌿', description: 'category.wellness.sub.skincare.description' },
      { name: 'category.wellness.sub.herbal.name', emoji: '🍵🌱', description: 'category.wellness.sub.herbal.description' },
      { name: 'category.wellness.sub.aromatherapy.name', emoji: '🕯️🌸', description: 'category.wellness.sub.aromatherapy.description' },
      { name: 'category.wellness.sub.mental.name', emoji: '🧠💬', description: 'category.wellness.sub.mental.description' },
      { name: 'category.wellness.sub.movement.name', emoji: '🏃‍♀️💃', description: 'category.wellness.sub.movement.description' },
      { name: 'category.wellness.sub.fitness.name', emoji: '💪🏃‍♀️', description: 'category.wellness.sub.fitness.description' },
      { name: 'category.wellness.sub.nutrition.name', emoji: '🥗📋', description: 'category.wellness.sub.nutrition.description' },
      { name: 'category.wellness.sub.childcare.name', emoji: '👶📚', description: 'category.wellness.sub.childcare.description' },
    ]
  },
  {
    id: 'local-services',
    title: 'category.services.title',
    emoji: '🧰',
    description: 'category.services.description',
    imageUrl: '/images/categories/services.jpg',
    subcategories: [
      { name: 'category.services.sub.tailoring.name', emoji: '🧵🧥', description: 'category.services.sub.tailoring.description' },
      { name: 'category.services.sub.workshops.name', emoji: '🎨🧑‍🏫', description: 'category.services.sub.workshops.description' },
      { name: 'category.services.sub.techHelp.name', emoji: '💻🔌', description: 'category.services.sub.techHelp.description' },
      { name: 'category.services.sub.homeHelp.name', emoji: '🌻🧹', description: 'category.services.sub.homeHelp.description' },
      { name: 'category.services.sub.petCare.name', emoji: '🐕🐾', description: 'category.services.sub.petCare.description' },
      { name: 'category.services.sub.transport.name', emoji: '🚲🚐', description: 'category.services.sub.transport.description' },
      { name: 'category.services.sub.event.name', emoji: '🎤📸', description: 'category.services.sub.event.description' },
      { name: 'category.services.sub.rentals.name', emoji: '🔧🏕️', description: 'category.services.sub.rentals.description' },
      { name: 'category.services.sub.repairs.name', emoji: '🪛🧰', description: 'category.services.sub.repairs.description' },
      { name: 'category.services.sub.cleaning.name', emoji: '🧼🧽', description: 'category.services.sub.cleaning.description' },
    ]
  },
];