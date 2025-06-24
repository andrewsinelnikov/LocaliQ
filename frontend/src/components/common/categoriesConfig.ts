export interface ISubcategoryItem {
  name: string;
  imageUrl: string;
  description?: string;
  season?: string;
}

export interface ICategory {
  id: string;
  title: string;
  emoji: string;
  description: string;
  imageUrl: string;
  subcategories: {
    name: string;
    slug: string;
    emoji: string;
    description: string;
    items?: ISubcategoryItem[];
  }[];
}

export const categories: ICategory[] = [
  {
    id: 'fresh-from-the-farm',
    title: 'categories.fresh-from-the-farm.title',
    emoji: '🥕',
    description: 'categories.fresh-from-the-farm.description',
    imageUrl: '/images/categories/farm.jpg',
    subcategories: [
      { 
        name: 'categories.fresh-from-the-farm.subcategories.fresh-vegetables.name', 
        slug: 'fresh-vegetables', 
        emoji: '🥬', 
        description: 'categories.fresh-from-the-farm.subcategories.fresh-vegetables.description',
        items: [
          { name: 'Морква', imageUrl: '/images/products/carrot.jpg', description: 'Молода морква з органічного городу', season: 'весна-осінь' },
          { name: 'Капуста', imageUrl: '/images/products/cabbage.jpg', description: 'Білокачанна капуста для салатів і квашення', season: 'літо-осінь' },
          { name: 'Помідори рожеві', imageUrl: '/images/products/tomato.jpg', description: 'Солодкі помідори домашнього сорту', season: 'літо' },
          { name: 'Огірки', imageUrl: '/images/products/cucumber.jpg', description: 'Хрумкі огірки для салатів та маринування', season: 'літо' },
          { name: 'Цибуля', imageUrl: '/images/products/onion.jpg', description: 'Ароматна ріпчаста цибуля', season: 'літо-осінь' },
          { name: 'Буряк', imageUrl: '/images/products/beetroot.jpg', description: 'Соковитий буряк для борщу та салатів', season: 'все літо' }
        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.fresh-fruits.name', 
        slug: 'fresh-fruits', 
        emoji: '🍎', 
        description: 'categories.fresh-from-the-farm.subcategories.fresh-fruits.description',
        items: [
          { name: 'Яблука', imageUrl: '/images/products/apple.jpg', description: 'Соковиті яблука різних сортів', season: 'серпень-жовтень' },
          { name: 'Груші', imageUrl: '/images/products/pear.jpg', description: 'Солодкі домашні груші', season: 'вересень' },
          { name: 'Полуниця', imageUrl: '/images/products/strawberry.jpg', description: 'Ароматна ягода з грядки', season: 'червень' },
          { name: 'Малина', imageUrl: '/images/products/raspberry.jpg', description: 'Свіжа малина для десертів та заморозки', season: 'липень' },
          { name: 'Слива', imageUrl: '/images/products/plum.jpg', description: 'Домашні сливи для варення та їжі', season: 'серпень' },
          { name: 'Черешня', imageUrl: '/images/products/cherry.jpg', description: 'Солодка черешня', season: 'червень-липень' }
        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.honey-beekeeping.name', 
        slug: 'honey-beekeeping', 
        emoji: '🍯', 
        description: 'categories.fresh-from-the-farm.subcategories.honey-beekeeping.description',
        items: [
          { name: 'Мед акацієвий', imageUrl: '/images/products/honey-acacia.jpg', description: 'Світлий і ароматний мед з акації', season: 'травень-червень' },
          { name: 'Мед липовий', imageUrl: '/images/products/honey-linden.jpg', description: 'Мед із цвіту липи — для чаю та здоровʼя', season: 'червень-липень' },
          { name: 'Прополіс', imageUrl: '/images/products/propolis.jpg', description: 'Натуральний антисептик з вулика' },
          { name: 'Бджолиний віск', imageUrl: '/images/products/beeswax.jpg', description: 'Використовується в косметиці та свічках' },
          { name: 'Мед у сотах', imageUrl: '/images/products/honeycomb.jpg', description: 'Натуральний мед у стільниках' }
        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.eggs-poultry.name', 
        slug: 'eggs-poultry', 
        emoji: '🥚🐓', 
        description: 'categories.fresh-from-the-farm.subcategories.eggs-poultry.description',
        items: [
          { name: 'Курячі яйця', imageUrl: '/images/products/eggs.jpg', description: 'Домашні яйця від щасливих курей' },
          { name: 'Качині яйця', imageUrl: '/images/products/duck-eggs.jpg', description: 'Більші за курячі, з яскравим жовтком' },
          { name: 'Домашні кури', imageUrl: '/images/products/chicken.jpg', description: 'Живі або охолоджені, вирощені без антибіотиків' },
          { name: 'Індичка', imageUrl: '/images/products/turkey.jpg', description: 'Мʼясо індички для запікання та стейків' }
        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.red-meat.name', 
        slug: 'red-meat', 
        emoji: '🥩🐄', 
        description: 'categories.fresh-from-the-farm.subcategories.red-meat.description',
        items: [
          { name: 'Яловичина', imageUrl: '/images/products/beef.jpg', description: 'Мармурове мʼясо з ферми' },
          { name: 'Свинина', imageUrl: '/images/products/pork.jpg', description: 'Домашнє мʼясо для смаження і запікання' },
          { name: 'Телятина', imageUrl: '/images/products/veal.jpg', description: 'Ніжне дієтичне мʼясо' },
          { name: 'Баранина', imageUrl: '/images/products/lamb.jpg', description: 'Пахуче мʼясо молодих ягнят' }
        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.fish-seafood.name', 
        slug: 'fish-seafood', 
        emoji: '🐟🦐', 
        description: 'categories.fresh-from-the-farm.subcategories.fish-seafood.description',
        items: [
          { name: 'Форель', imageUrl: '/images/products/trout.jpg', description: 'Свіжа або копчена форель' },
          { name: 'Короп', imageUrl: '/images/products/carp.jpg', description: 'Популярна риба на свята і будні' },
          { name: 'Судак', imageUrl: '/images/products/pikeperch.jpg', description: 'Мʼясо з білим філе, без кісток' },
          { name: 'Раки', imageUrl: '/images/products/crayfish.jpg', description: 'Свіжі або варені, для гурманів' }
        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.game-meats.name', 
        slug: 'game-meats', 
        emoji: '🦌🐇', 
        description: 'categories.fresh-from-the-farm.subcategories.game-meats.description',
        items: [
          { name: 'Оленина', imageUrl: '/images/products/venison.jpg', description: 'Мʼясо дикого оленя з лісу' },
          { name: 'Фазан', imageUrl: '/images/products/pheasant.jpg', description: 'Птах з ніжним мʼясом' },
          { name: 'Заяча тушка', imageUrl: '/images/products/hare.jpg', description: 'Для тушкування чи запікання' }
        ]
      },
      { name: 'categories.fresh-from-the-farm.subcategories.dairy.name', slug: 'dairy', emoji: '🧀', description: 'categories.fresh-from-the-farm.subcategories.dairy.description' },
      { name: 'categories.fresh-from-the-farm.subcategories.grains-legumes.name', slug: 'grains-legumes', emoji: '🌾', description: 'categories.fresh-from-the-farm.subcategories.grains-legumes.description' },
      { name: 'categories.fresh-from-the-farm.subcategories.seedlings-starts.name', slug: 'seedlings-starts', emoji: '🌱🪴', description: 'categories.fresh-from-the-farm.subcategories.seedlings-starts.description' },
      { name: 'categories.fresh-from-the-farm.subcategories.foraged-goods.name', slug: 'foraged-goods', emoji: '🍄🌲', description: 'categories.fresh-from-the-farm.subcategories.foraged-goods.description' },
      { name: 'categories.fresh-from-the-farm.subcategories.herbs-flowers.name', slug: 'herbs-flowers', emoji: '🌿💐', description: 'categories.fresh-from-the-farm.subcategories.herbs-flowers.description' },
    ],
  },
  {
    id: 'from-the-kitchen',
    title: 'categories.from-the-kitchen.title',
    emoji: '🍞',
    description: 'categories.from-the-kitchen.description',
    imageUrl: '/images/categories/kitchen.jpg',
    subcategories: [
      { name: 'categories.from-the-kitchen.subcategories.baked-goods.name', slug: 'baked-goods', emoji: '🥖🍪', description: 'categories.from-the-kitchen.subcategories.baked-goods.description' },
      { name: 'categories.from-the-kitchen.subcategories.savory-spreads-sauces.name', slug: 'savory-spreads-sauces', emoji: '🧄🫙', description: 'categories.from-the-kitchen.subcategories.savory-spreads-sauces.description' },
      { name: 'categories.from-the-kitchen.subcategories.pasta-grains.name', slug: 'pasta-grains', emoji: '🍝🌾', description: 'categories.from-the-kitchen.subcategories.pasta-grains.description' },
      { name: 'categories.from-the-kitchen.subcategories.jams-preserves.name', slug: 'jams-preserves', emoji: '🍓🥫', description: 'categories.from-the-kitchen.subcategories.jams-preserves.description' },
      { name: 'categories.from-the-kitchen.subcategories.ferments-vinegars.name', slug: 'ferments-vinegars', emoji: '🧂🍶', description: 'categories.from-the-kitchen.subcategories.ferments-vinegars.description' },
      { name: 'categories.from-the-kitchen.subcategories.homemade-meals.name', slug: 'homemade-meals', emoji: '🍲', description: 'categories.from-the-kitchen.subcategories.homemade-meals.description' },
      { name: 'categories.from-the-kitchen.subcategories.beverages.name', slug: 'beverages', emoji: '☕🍷', description: 'categories.from-the-kitchen.subcategories.beverages.description' },
      { name: 'categories.from-the-kitchen.subcategories.cheese-cured-meats.name', slug: 'cheese-cured-meats', emoji: '🧀🥓', description: 'categories.from-the-kitchen.subcategories.cheese-cured-meats.description' },
      { name: 'categories.from-the-kitchen.subcategories.sweet-treats.name', slug: 'sweet-treats', emoji: '🍰🍫', description: 'categories.from-the-kitchen.subcategories.sweet-treats.description' },
    ],
  },
  {
    id: 'handmade-crafted',
    title: 'categories.handmade-crafted.title',
    emoji: '🎨',
    description: 'categories.handmade-crafted.description',
    imageUrl: '/images/categories/handmade.jpg',
    subcategories: [
      { name: 'categories.handmade-crafted.subcategories.woodcrafts.name', slug: 'woodcrafts', emoji: '🪵🪑', description: 'categories.handmade-crafted.subcategories.woodcrafts.description' },
      { name: 'categories.handmade-crafted.subcategories.leather-goods.name', slug: 'leather-goods', emoji: '👞👜', description: 'categories.handmade-crafted.subcategories.leather-goods.description' },
      { name: 'categories.handmade-crafted.subcategories.metalwork-tools.name', slug: 'metalwork-tools', emoji: '🔧⚒️', description: 'categories.handmade-crafted.subcategories.metalwork-tools.description' },
      { name: 'categories.handmade-crafted.subcategories.natural-dyes-fibers.name', slug: 'natural-dyes-fibers', emoji: '🧶🌱', description: 'categories.handmade-crafted.subcategories.natural-dyes-fibers.description' },
      { name: 'categories.handmade-crafted.subcategories.printed-materials.name', slug: 'printed-materials', emoji: '🖨️📚', description: 'categories.handmade-crafted.subcategories.printed-materials.description' },
      { name: 'categories.handmade-crafted.subcategories.upcycled-products.name', slug: 'upcycled-products', emoji: '🔁🧺', description: 'categories.handmade-crafted.subcategories.upcycled-products.description' },
      { name: 'categories.handmade-crafted.subcategories.pottery-ceramics.name', slug: 'pottery-ceramics', emoji: '🏺', description: 'categories.handmade-crafted.subcategories.pottery-ceramics.description' },
      { name: 'categories.handmade-crafted.subcategories.textiles-weaving.name', slug: 'textiles-weaving', emoji: '🧵🧣', description: 'categories.handmade-crafted.subcategories.textiles-weaving.description' },
      { name: 'categories.handmade-crafted.subcategories.fine-art-prints.name', slug: 'fine-art-prints', emoji: '🎨🖼️', description: 'categories.handmade-crafted.subcategories.fine-art-prints.description' },
      { name: 'categories.handmade-crafted.subcategories.jewelry.name', slug: 'jewelry', emoji: '💍', description: 'categories.handmade-crafted.subcategories.jewelry.description' },
      { name: 'categories.handmade-crafted.subcategories.music-media.name', slug: 'music-media', emoji: '🎶📀', description: 'categories.handmade-crafted.subcategories.music-media.description' },
      { name: 'categories.handmade-crafted.subcategories.artisan-stationery.name', slug: 'artisan-stationery', emoji: '✉️📓', description: 'categories.handmade-crafted.subcategories.artisan-stationery.description' },
    ],
  },
  {
    id: 'wellness-care',
    title: 'categories.wellness-care.title',
    emoji: '🧼',
    description: 'categories.wellness-care.description',
    imageUrl: '/images/categories/wellness.jpg',
    subcategories: [
      { name: 'categories.wellness-care.subcategories.wellness-sessions.name', slug: 'wellness-sessions', emoji: '💆‍♀️🕯️', description: 'categories.wellness-care.subcategories.wellness-sessions.description' },
      { name: 'categories.wellness-care.subcategories.natural-skincare-bodycare.name', slug: 'natural-skincare-bodycare', emoji: '🧴🌿', description: 'categories.wellness-care.subcategories.natural-skincare-bodycare.description' },
      { name: 'categories.wellness-care.subcategories.herbal-products-remedies.name', slug: 'herbal-products-remedies', emoji: '🍵🌱', description: 'categories.wellness-care.subcategories.herbal-products-remedies.description' },
      { name: 'categories.wellness-care.subcategories.aromatherapy-candles.name', slug: 'aromatherapy-candles', emoji: '🕯️🌸', description: 'categories.wellness-care.subcategories.aromatherapy-candles.description' },
      { name: 'categories.wellness-care.subcategories.mental-wellness-coaching.name', slug: 'mental-wellness-coaching', emoji: '🧠💬', description: 'categories.wellness-care.subcategories.mental-wellness-coaching.description' },
      { name: 'categories.wellness-care.subcategories.movement-bodywork.name', slug: 'movement-bodywork', emoji: '🏃‍♀️💃', description: 'categories.wellness-care.subcategories.movement-bodywork.description' },
      { name: 'categories.wellness-care.subcategories.fitness-training.name', slug: 'fitness-training', emoji: '💪🏃‍♀️', description: 'categories.wellness-care.subcategories.fitness-training.description' },
      { name: 'categories.wellness-care.subcategories.nutrition-meal-planning.name', slug: 'nutrition-meal-planning', emoji: '🥗📋', description: 'categories.wellness-care.subcategories.nutrition-meal-planning.description' },
      { name: 'categories.wellness-care.subcategories.childcare-learning.name', slug: 'childcare-learning', emoji: '👶📚', description: 'categories.wellness-care.subcategories.childcare-learning.description' },
    ],
  },
  {
    id: 'local-services',
    title: 'categories.local-services.title',
    emoji: '🧰',
    description: 'categories.local-services.description',
    imageUrl: '/images/categories/services.jpg',
    subcategories: [
      { name: 'categories.local-services.subcategories.tailoring-repairs.name', slug: 'tailoring-repairs', emoji: '🧵🧥', description: 'categories.local-services.subcategories.tailoring-repairs.description' },
      { name: 'categories.local-services.subcategories.creative-workshops.name', slug: 'creative-workshops', emoji: '🎨🧑‍🏫', description: 'categories.local-services.subcategories.creative-workshops.description' },
      { name: 'categories.local-services.subcategories.tech-help-setup.name', slug: 'tech-help-setup', emoji: '💻🔌', description: 'categories.local-services.subcategories.tech-help-setup.description' },
      { name: 'categories.local-services.subcategories.garden-home-help.name', slug: 'garden-home-help', emoji: '🌻🧹', description: 'categories.local-services.subcategories.garden-home-help.description' },
      { name: 'categories.local-services.subcategories.pet-care-walking.name', slug: 'pet-care-walking', emoji: '🐕🦴', description: 'categories.local-services.subcategories.pet-care-walking.description' },
      { name: 'categories.local-services.subcategories.local-tours-experiences.name', slug: 'local-tours-experiences', emoji: '🗺️🚶', description: 'categories.local-services.subcategories.local-tours-experiences.description' },
      { name: 'categories.local-services.subcategories.delivery-errands.name', slug: 'delivery-errands', emoji: '🚲📦', description: 'categories.local-services.subcategories.delivery-errands.description' },
      { name: 'categories.local-services.subcategories.event-hosting-rentals.name', slug: 'event-hosting-rentals', emoji: '🏕️🎤', description: 'categories.local-services.subcategories.event-hosting-rentals.description' },
      { name: 'categories.local-services.subcategories.vehicle-help-repairs.name', slug: 'vehicle-help-repairs', emoji: '🚗🔧', description: 'categories.local-services.subcategories.vehicle-help-repairs.description' },
      { name: 'categories.local-services.subcategories.photography-media.name', slug: 'photography-media', emoji: '📸🎥', description: 'categories.local-services.subcategories.photography-media.description' },
      { name: 'categories.local-services.subcategories.financial-legal-help.name', slug: 'financial-legal-help', emoji: '📊⚖️', description: 'categories.local-services.subcategories.financial-legal-help.description' },
      { name: 'categories.local-services.subcategories.language-translation.name', slug: 'language-translation', emoji: '🗣️📘', description: 'categories.local-services.subcategories.language-translation.description' },
    ],
  },
];