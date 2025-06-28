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
    imageUrl?: string,
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
        imageUrl: '/images/subcategories/farm/fresh-vegetables.jpg',
        description: 'categories.fresh-from-the-farm.subcategories.fresh-vegetables.description',
        items: [
          { name: 'Морква', imageUrl: '/images/products/farm/vegetables/carrot.jpg', description: 'Молода морква з органічного городу', season: 'весна-осінь' },
          { name: 'Капуста', imageUrl: '/images/products/farm/vegetables/cabbage.jpg', description: 'Білокачанна капуста для салатів і квашення', season: 'літо-осінь' },
          { name: 'Помідори рожеві', imageUrl: '/images/products/farm/vegetables/tomato.jpg', description: 'Солодкі помідори домашнього сорту', season: 'літо' },
          { name: 'Огірки', imageUrl: '/images/products/farm/vegetables/cucumber.jpg', description: 'Хрумкі огірки для салатів та маринування', season: 'літо' },
          { name: 'Цибуля', imageUrl: '/images/products/farm/vegetables/onion.jpg', description: 'Ароматна ріпчаста цибуля', season: 'літо-осінь' },
          { name: 'Буряк', imageUrl: '/images/products/farm/vegetables/beetroot.jpg', description: 'Соковитий буряк для борщу та салатів', season: 'все літо' },
          { name: 'Редиска', imageUrl: '/images/products/farm/vegetables/radish.jpg', description: 'Соковита весняна редиска, чудова для салатів', season: 'весна' },
          { name: 'Цвітна капуста', imageUrl: '/images/products/farm/vegetables/cauliflower.jpg', description: 'Ніжна цвітна капуста, багата вітамінами', season: 'літо-осінь' },
          { name: 'Паприка', imageUrl: '/images/products/farm/vegetables/paprika.jpg', description: 'Солодка паприка яскравого кольору', season: 'літо' },
          { name: 'Зелений горошок', imageUrl: '/images/products/farm/vegetables/peas.jpg', description: 'Свіжозібраний зелений горошок', season: 'весна-початок літа' },
          { name: 'Червоний перець', imageUrl: '/images/products/farm/vegetables/red-pepper.jpg', description: 'Соковитий солодкий перець', season: 'літо' },
          { name: 'Кукурудза', imageUrl: '/images/products/farm/vegetables/corn.jpg', description: 'Солодка кукурудза, ідеальна для варіння та грилю', season: 'літо' },
          { name: 'Картопля', imageUrl: '/images/products/farm/vegetables/potato.jpg', description: 'Домашня картопля, універсальна для приготування', season: 'літо-осінь' },
          { name: 'Листя салату', imageUrl: '/images/products/farm/vegetables/lettuce.jpg', description: 'Свіже зелене листя для салатів', season: 'весна-літо' },
          { name: 'Спаржа', imageUrl: '/images/products/farm/vegetables/asparagus.jpg', description: 'Соковита зелена спаржа — делікатес весни', season: 'весна' }
        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.fresh-fruits.name', 
        slug: 'fresh-fruits', 
        emoji: '🍎', 
        imageUrl: '/images/subcategories/farm/fresh-fruits.jpg',
        description: 'categories.fresh-from-the-farm.subcategories.fresh-fruits.description',
        items: [
          { name: 'Яблука', imageUrl: '/images/products/farm/fruits/apple.jpg', description: 'Соковиті яблука різних сортів', season: 'серпень-жовтень' },
          { name: 'Груші', imageUrl: '/images/products/farm/fruits/pear.jpg', description: 'Солодкі домашні груші', season: 'вересень' },
          { name: 'Полуниця', imageUrl: '/images/products/farm/fruits/strawberry.jpg', description: 'Ароматна ягода з грядки', season: 'червень' },
          { name: 'Малина', imageUrl: '/images/products/farm/fruits/raspberry.jpg', description: 'Свіжа малина для десертів та заморозки', season: 'липень' },
          { name: 'Слива', imageUrl: '/images/products/farm/fruits/plum.jpg', description: 'Домашні сливи для варення та їжі', season: 'серпень' },
          { name: 'Черешня', imageUrl: '/images/products/farm/fruits/cherry.jpg', description: 'Солодка черешня', season: 'червень-липень' },
          { name: 'Абрикоси', imageUrl: '/images/products/farm/fruits/apricot.jpg', description: 'Соковиті абрикоси з ніжною м’якоттю', season: 'липень' },
          { name: 'Персики', imageUrl: '/images/products/farm/fruits/peach.jpg', description: 'Запашні персики з оксамитовою шкіркою', season: 'липень-серпень' },
          { name: 'Виноград', imageUrl: '/images/products/farm/fruits/grape.jpg', description: 'Стиглий виноград, солодкий і соковитий', season: 'вересень-жовтень' },
          { name: 'Ожина', imageUrl: '/images/products/farm/fruits/blackberry.jpg', description: 'Соковита дика ожина', season: 'серпень' },
          { name: 'Смородина', imageUrl: '/images/products/farm/fruits/currant.jpg', description: 'Червона та чорна смородина з куща', season: 'липень-серпень' },
          { name: 'Диня', imageUrl: '/images/products/farm/fruits/melon.jpg', description: 'Солодка диня з насиченим ароматом', season: 'серпень' },
          { name: 'Кавун', imageUrl: '/images/products/farm/fruits/watermelon.jpg', description: 'Освіжаючий кавун для літньої спеки', season: 'серпень' },
          { name: 'Вишня', imageUrl: '/images/products/farm/fruits/sour-cherry.jpg', description: 'Соковита кисло-солодка вишня', season: 'червень-липень' },
          { name: 'Порічка', imageUrl: '/images/products/farm/fruits/red-currant.jpg', description: 'Яскрава порічка з приємною кислинкою', season: 'липень' },
          { name: 'Нектарин', imageUrl: '/images/products/farm/fruits/nectarine.jpg', description: 'Солодкий нектарин без пухнастої шкірки', season: 'липень-серпень' },
          { name: 'Інжир', imageUrl: '/images/products/farm/fruits/fig.jpg', description: 'Свіжий інжир з медовим смаком', season: 'серпень-вересень' }
        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.honey-beekeeping.name', 
        slug: 'honey-beekeeping', 
        emoji: '🍯', 
        imageUrl: '/images/subcategories/farm/honey-beekeeping.jpg',
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
        imageUrl: '/images/subcategories/farm/eggs-poultry.jpg',
        description: 'categories.fresh-from-the-farm.subcategories.eggs-poultry.description',
        items: [
          { name: 'Курячі яйця', imageUrl: '/images/products/farm/eggs-poultry/eggs.jpg', description: 'Домашні яйця від щасливих курей' },
          { name: 'Качині яйця', imageUrl: '/images/products/duck-eggs.jpg', description: 'Більші за курячі, з яскравим жовтком' },
          { name: 'Домашні кури', imageUrl: '/images/products/chicken.jpg', description: 'Живі або охолоджені, вирощені без антибіотиків' },
          { name: 'Індичка', imageUrl: '/images/products/turkey.jpg', description: 'Мʼясо індички для запікання та стейків' }
        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.red-meat.name', 
        slug: 'red-meat', 
        emoji: '🥩🐄', 
        imageUrl: '/images/subcategories/farm/meat.jpg',
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
        imageUrl: '/images/subcategories/farm/fish-seafood.jpg',
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
        imageUrl: '/images/subcategories/farm/game-meats.jpg',
        description: 'categories.fresh-from-the-farm.subcategories.game-meats.description',
        items: [
          { name: 'Оленина', imageUrl: '/images/products/venison.jpg', description: 'Мʼясо дикого оленя з лісу' },
          { name: 'Фазан', imageUrl: '/images/products/pheasant.jpg', description: 'Птах з ніжним мʼясом' },
          { name: 'Заяча тушка', imageUrl: '/images/products/hare.jpg', description: 'Для тушкування чи запікання' }
        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.dairy.name', 
        slug: 'dairy', 
        emoji: '🧀', 
        description: 'categories.fresh-from-the-farm.subcategories.dairy.description',
        items: [
          { name: 'Молоко', imageUrl: '/images/products/milk.jpg', description: 'Свіже молоко, не пастеризоване' },
          { name: 'Сметана', imageUrl: '/images/products/sour-cream.jpg', description: 'Домашня сметана жирністю 20%' },
          { name: 'Домашній сир', imageUrl: '/images/products/cottage-cheese.jpg', description: 'Мʼякий сир для випічки й сніданків' },
          { name: 'Сир', imageUrl: '/images/products/cheese.jpg', description: 'Мʼякі й твердi сири — з зеленню, перцем або класичні' }
        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.grains-legumes.name', 
        slug: 'grains-legumes', 
        emoji: '🌾', 
        description: 'categories.fresh-from-the-farm.subcategories.grains-legumes.description',
        items: [
          { name: 'Пшениця', imageUrl: '/images/products/wheat.jpg', description: 'Зерно для помелу або пророщування' },
          { name: 'Кукурудза', imageUrl: '/images/products/corn.jpg', description: 'Солодка кукурудза в качанах' },
          { name: 'Квасоля', imageUrl: '/images/products/beans.jpg', description: 'Різнокольорова квасоля: червона, біла' },
          { name: 'Горох', imageUrl: '/images/products/peas.jpg', description: 'Сушений або свіжий зелений' }
        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.seedlings-starts.name', 
        slug: 'seedlings-starts', 
        emoji: '🌱🪴', 
        description: 'categories.fresh-from-the-farm.subcategories.seedlings-starts.description',
        items: [
          { name: 'Розсада помідорів', imageUrl: '/images/products/tomato-seedling.jpg', description: 'Стійкі сорти для відкритого ґрунту' },
          { name: 'Саджанці полуниці', imageUrl: '/images/products/strawberry-seedling.jpg', description: 'Урожайні сорти ремонтантної полуниці' },
          { name: 'Саджанці малини', imageUrl: '/images/products/raspberry-seedling.jpg', description: 'Малина безколючкова' }
        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.foraged-goods.name', 
        slug: 'foraged-goods', 
        emoji: '🍄🌲', 
        description: 'categories.fresh-from-the-farm.subcategories.foraged-goods.description',
        items: [
          { name: 'Білі гриби', imageUrl: '/images/products/porcini.jpg', description: 'Свіжі або сушені, з екологічних лісів' },
          { name: 'Лисички', imageUrl: '/images/products/chanterelle.jpg', description: 'Сезонні гриби — з липня по вересень' },
          { name: 'Чорниці', imageUrl: '/images/products/blueberries.jpg', description: 'Ягоди, зібрані в карпатських лісах' }
        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.herbs-flowers.name', 
        slug: 'herbs-flowers', 
        emoji: '🌿💐', 
        description: 'categories.fresh-from-the-farm.subcategories.herbs-flowers.description',
        items: [
          { name: 'Базилік', imageUrl: '/images/products/basil.jpg', description: 'Свіжа зелень для салатів і соусів' },
          { name: 'Мʼята', imageUrl: '/images/products/mint.jpg', description: 'Ароматна мʼята — для чаю і десертів' },
          { name: 'Їстівні квіти', imageUrl: '/images/products/edible-flowers.jpg', description: 'Для декору і гастрономії' },
          { name: 'Квіти польові', imageUrl: '/images/products/wildflowers.jpg', description: 'Сезонні букети' }
        ]
      },
    ],
  },
  {
    id: 'from-the-kitchen',
    title: 'categories.from-the-kitchen.title',
    emoji: '🍞',
    description: 'categories.from-the-kitchen.description',
    imageUrl: '/images/categories/kitchen.jpg',
    subcategories: [
      {
        name: 'categories.from-the-kitchen.subcategories.baked-goods.name',
        slug: 'baked-goods',
        emoji: '🥖🍪',
        description: 'categories.from-the-kitchen.subcategories.baked-goods.description',
        items: [
          { name: 'Житній хліб на заквасці', imageUrl: '/images/products/rye-bread.jpg', description: 'Ароматний хліб із натуральної закваски' },
          { name: 'Булочки з маком', imageUrl: '/images/products/poppy-rolls.jpg', description: 'Мʼякі й солодкі, ідеальні до чаю' },
          { name: 'Печиво з медом', imageUrl: '/images/products/honey-cookies.jpg', description: 'Домашнє печиво з натурального меду' },
          { name: 'Пиріжки з вишнею', imageUrl: '/images/products/cherry-pie.jpg', description: 'Пухкі пиріжки з кисло-солодкою начинкою' }
        ]
      },
      {
        name: 'categories.from-the-kitchen.subcategories.savory-spreads-sauces.name',
        slug: 'savory-spreads-sauces',
        emoji: '🧄🫙',
        description: 'categories.from-the-kitchen.subcategories.savory-spreads-sauces.description',
        items: [
          { name: 'Песто з базиліку', imageUrl: '/images/products/pesto.jpg', description: 'Свіжий зелений соус з домашнього базиліку' },
          { name: 'Хумус', imageUrl: '/images/products/hummus.jpg', description: 'Ніжна паста з нуту, з оливковою олією' },
          { name: 'Часникова паста', imageUrl: '/images/products/garlic-spread.jpg', description: 'Гострий намаз для м’яса або хліба' },
          { name: 'Аджика', imageUrl: '/images/products/adjika.jpg', description: 'Гострий соус за домашнім рецептом' }
        ]
      },
      {
        name: 'categories.from-the-kitchen.subcategories.pasta-grains.name',
        slug: 'pasta-grains',
        emoji: '🍝🌾',
        description: 'categories.from-the-kitchen.subcategories.pasta-grains.description',
        items: [
          { name: 'Домашня локшина', imageUrl: '/images/products/egg-noodles.jpg', description: 'З твердих сортів пшениці або з яйцем' },
          { name: 'Кус-кус', imageUrl: '/images/products/couscous.jpg', description: 'Дрібна крупа для швидких страв' },
          { name: 'Булгур', imageUrl: '/images/products/bulgur.jpg', description: 'Корисна крупа з пшениці' },
          { name: 'Паста з полби', imageUrl: '/images/products/spelt-pasta.jpg', description: 'Цільнозернова паста ручної роботи' }
        ]
      },
      {
        name: 'categories.from-the-kitchen.subcategories.jams-preserves.name',
        slug: 'jams-preserves',
        emoji: '🍓🥫',
        description: 'categories.from-the-kitchen.subcategories.jams-preserves.description',
        items: [
          { name: 'Варення з полуниці', imageUrl: '/images/products/strawberry-jam.jpg', description: 'Класичне варення з літніх ягід' },
          { name: 'Чорнослив у сиропі', imageUrl: '/images/products/prunes.jpg', description: 'Домашня консервація' },
          { name: 'Малинове варення', imageUrl: '/images/products/raspberry-jam.jpg', description: 'Ідеальне до млинців і чаю' },
          { name: 'Конфітюр із яблук з корицею', imageUrl: '/images/products/apple-cinnamon.jpg', description: 'Смак дитинства' }
        ]
      },
      {
        name: 'categories.from-the-kitchen.subcategories.ferments-vinegars.name',
        slug: 'ferments-vinegars',
        emoji: '🧂🍶',
        description: 'categories.from-the-kitchen.subcategories.ferments-vinegars.description',
        items: [
          { name: 'Квашена капуста', imageUrl: '/images/products/sauerkraut.jpg', description: 'З ферментованої капусти без оцту' },
          { name: 'Огірки квашені', imageUrl: '/images/products/pickles.jpg', description: 'З натуральним бродінням' },
          { name: 'Яблучний оцет', imageUrl: '/images/products/apple-vinegar.jpg', description: 'Домашній, нефільтрований оцет' },
          { name: 'Кімчі', imageUrl: '/images/products/kimchi.jpg', description: 'Пряна корейська капуста — ферментована вдома' }
        ]
      },
      {
        name: 'categories.from-the-kitchen.subcategories.homemade-meals.name',
        slug: 'homemade-meals',
        emoji: '🍲',
        description: 'categories.from-the-kitchen.subcategories.homemade-meals.description',
        items: [
          { name: 'Борщ у банці', imageUrl: '/images/products/borscht-jar.jpg', description: 'Готова перша страва — просто розігріти' },
          { name: 'Голубці', imageUrl: '/images/products/holubtsi.jpg', description: 'Капуста, начинена рисом і мʼясом' },
          { name: 'Пельмені домашні', imageUrl: '/images/products/dumplings.jpg', description: 'Заморожені або охолоджені' },
          { name: 'Запіканка сирна', imageUrl: '/images/products/cheese-casserole.jpg', description: 'Десерт або сніданок — готовий до подачі' }
        ]
      },
      {
        name: 'categories.from-the-kitchen.subcategories.beverages.name',
        slug: 'beverages',
        emoji: '☕🍷',
        description: 'categories.from-the-kitchen.subcategories.beverages.description',
        items: [
          { name: 'Компот з сухофруктів', imageUrl: '/images/products/kompot.jpg', description: 'Напій без консервантів' },
          { name: 'Домашній квас', imageUrl: '/images/products/kvas.jpg', description: 'Справжній хлібний квас' },
          { name: 'Травʼяний чай', imageUrl: '/images/products/herbal-tea.jpg', description: 'Мʼята, меліса, чебрець — купажі власного збору' },
          { name: 'Ягідний морс', imageUrl: '/images/products/berry-mors.jpg', description: 'Без цукру, тільки ягоди та вода' }
        ]
      },
      {
        name: 'categories.from-the-kitchen.subcategories.cheese-cured-meats.name',
        slug: 'cheese-cured-meats',
        emoji: '🧀🥓',
        description: 'categories.from-the-kitchen.subcategories.cheese-cured-meats.description',
        items: [
          { name: 'Сир бринза', imageUrl: '/images/products/brynza.jpg', description: 'Солоний овечий сир' },
          { name: 'Сир косичка', imageUrl: '/images/products/cheese-string.jpg', description: 'Копчений твердий сир ручної роботи' },
          { name: 'Домашній бекон', imageUrl: '/images/products/bacon.jpg', description: 'Солений, копчений або варено-копчений' },
          { name: 'Ковбаса з індички', imageUrl: '/images/products/turkey-sausage.jpg', description: 'З мінімумом спецій та добавок' }
        ]
      },
      {
        name: 'categories.from-the-kitchen.subcategories.sweet-treats.name',
        slug: 'sweet-treats',
        emoji: '🍰🍫',
        description: 'categories.from-the-kitchen.subcategories.sweet-treats.description',
        items: [
          { name: 'Медівник', imageUrl: '/images/products/medivnyk.jpg', description: 'Мʼякий пиріг на меду' },
          { name: 'Цукерки з фініків', imageUrl: '/images/products/date-candies.jpg', description: 'Корисні солодощі без цукру' },
          { name: 'Шоколад ручної роботи', imageUrl: '/images/products/handmade-chocolate.jpg', description: 'Темний, з горіхами або ягодами' },
          { name: 'Пастила фруктова', imageUrl: '/images/products/fruit-leather.jpg', description: 'Натуральний перекус із сушених фруктів' }
        ]
      }
    ]
  },
  {
    id: 'handmade-crafted',
    title: 'categories.handmade-crafted.title',
    emoji: '🎨',
    description: 'categories.handmade-crafted.description',
    imageUrl: '/images/categories/handmade.jpg',
    subcategories: [
      {
        name: 'categories.handmade-crafted.subcategories.woodcrafts.name',
        slug: 'woodcrafts',
        emoji: '🪵🪑',
        description: 'categories.handmade-crafted.subcategories.woodcrafts.description',
        items: [
          { name: 'Деревʼяні ложки', imageUrl: '/images/products/wooden-spoons.jpg', description: 'Ручна різьба, з вільхи або бука' },
          { name: 'Обробні дошки', imageUrl: '/images/products/cutting-board.jpg', description: 'Натуральне дерево, покриття олією' },
          { name: 'Табурети ручної роботи', imageUrl: '/images/products/wooden-stool.jpg', description: 'Невеликі меблі з естетикою ручного виробництва' }
        ]
      },
      {
        name: 'categories.handmade-crafted.subcategories.leather-goods.name',
        slug: 'leather-goods',
        emoji: '👞👜',
        description: 'categories.handmade-crafted.subcategories.leather-goods.description',
        items: [
          { name: 'Шкіряні гаманці', imageUrl: '/images/products/leather-wallet.jpg', description: 'Компактні гаманці з натуральної шкіри' },
          { name: 'Ремені ручної роботи', imageUrl: '/images/products/leather-belt.jpg', description: 'Міцні і стильні аксесуари' },
          { name: 'Сумки через плече', imageUrl: '/images/products/leather-bag.jpg', description: 'Шкіряні сумки з мінімалістичним дизайном' }
        ]
      },
      {
        name: 'categories.handmade-crafted.subcategories.metalwork-tools.name',
        slug: 'metalwork-tools',
        emoji: '🔧⚒️',
        description: 'categories.handmade-crafted.subcategories.metalwork-tools.description',
        items: [
          { name: 'Ножі з дамаску', imageUrl: '/images/products/damascus-knife.jpg', description: 'Кухонні чи туристичні ножі ручного кування' },
          { name: 'Сокири з гравіюванням', imageUrl: '/images/products/engraved-axe.jpg', description: 'Функціональні та декоративні' }
        ]
      },
      {
        name: 'categories.handmade-crafted.subcategories.natural-dyes-fibers.name',
        slug: 'natural-dyes-fibers',
        emoji: '🧶🌱',
        description: 'categories.handmade-crafted.subcategories.natural-dyes-fibers.description',
        items: [
          { name: 'Пряжа з кропиви', imageUrl: '/images/products/nettle-yarn.jpg', description: 'Екологічна альтернатива синтетичним волокнам' },
          { name: 'Тканини, фарбовані вручну', imageUrl: '/images/products/natural-dyed-fabric.jpg', description: 'Унікальні кольори за допомогою рослинних барвників' }
        ]
      },
      {
        name: 'categories.handmade-crafted.subcategories.printed-materials.name',
        slug: 'printed-materials',
        emoji: '🖨️📚',
        description: 'categories.handmade-crafted.subcategories.printed-materials.description',
        items: [
          { name: 'Авторські збірки', imageUrl: '/images/products/collection.jpg', description: 'Малі тиражі, локальні автори' },
          { name: 'Ручна ліногравюра', imageUrl: '/images/products/linocut-print.jpg', description: 'Оригінальні принти на папері або тканині' }
        ]
      },
      {
        name: 'categories.handmade-crafted.subcategories.upcycled-products.name',
        slug: 'upcycled-products',
        emoji: '🔁🧺',
        description: 'categories.handmade-crafted.subcategories.upcycled-products.description',
        items: [
          { name: 'Сумки з банерів', imageUrl: '/images/products/upcycled-bag.jpg', description: 'Стильні аксесуари з перероблених матеріалів' },
          { name: 'Декор з винних пробок', imageUrl: '/images/products/cork-decor.jpg', description: 'Креативне перевикористання' }
        ]
      },
      {
        name: 'categories.handmade-crafted.subcategories.pottery-ceramics.name',
        slug: 'pottery-ceramics',
        emoji: '🏺',
        description: 'categories.handmade-crafted.subcategories.pottery-ceramics.description',
        items: [
          { name: 'Чашки гончарні', imageUrl: '/images/products/ceramic-cup.jpg', description: 'Кожна — унікальна' },
          { name: 'Глечики для води', imageUrl: '/images/products/ceramic-jug.jpg', description: 'Функціональний і декоративний посуд' }
        ]
      },
      {
        name: 'categories.handmade-crafted.subcategories.textiles-weaving.name',
        slug: 'textiles-weaving',
        emoji: '🧵🧣',
        description: 'categories.handmade-crafted.subcategories.textiles-weaving.description',
        items: [
          { name: 'Плетені серветки', imageUrl: '/images/products/woven-napkin.jpg', description: 'З льону або бавовни' },
          { name: 'Шарфи ручного ткацтва', imageUrl: '/images/products/woven-scarf.jpg', description: 'Теплі й стильні' }
        ]
      },
      {
        name: 'categories.handmade-crafted.subcategories.fine-art-prints.name',
        slug: 'fine-art-prints',
        emoji: '🎨🖼️',
        description: 'categories.handmade-crafted.subcategories.fine-art-prints.description',
        items: [
          { name: 'Арт-принти з авторських ілюстрацій', imageUrl: '/images/products/art-print.jpg', description: 'Друк обмеженим тиражем' },
          { name: 'Графіка аквареллю', imageUrl: '/images/products/watercolor.jpg', description: 'Оригінальні роботи місцевих митців' }
        ]
      },
      {
        name: 'categories.handmade-crafted.subcategories.jewelry.name',
        slug: 'jewelry',
        emoji: '💍',
        description: 'categories.handmade-crafted.subcategories.jewelry.description',
        items: [
          { name: 'Сережки з полімерної глини', imageUrl: '/images/products/polymer-earrings.jpg', description: 'Легкі та яскраві прикраси' },
          { name: 'Браслети з натурального каменю', imageUrl: '/images/products/stone-bracelet.jpg', description: 'Енергетичні аксесуари' }
        ]
      },
      {
        name: 'categories.handmade-crafted.subcategories.music-media.name',
        slug: 'music-media',
        emoji: '🎶📀',
        description: 'categories.handmade-crafted.subcategories.music-media.description',
        items: [
          { name: 'Касети з гуртами', imageUrl: '/images/products/cassette.jpg', description: 'Альтернативна музика на фізичних носіях' },
          { name: 'Вініли з локальними записями', imageUrl: '/images/products/vinyl.jpg', description: 'Музика місцевих виконавців' }
        ]
      },
      {
        name: 'categories.handmade-crafted.subcategories.artisan-stationery.name',
        slug: 'artisan-stationery',
        emoji: '✉️📓',
        description: 'categories.handmade-crafted.subcategories.artisan-stationery.description',
        items: [
          { name: 'Записники з переробленого паперу', imageUrl: '/images/products/recycled-notebook.jpg', description: 'Крафтові обкладинки, ручна збірка' },
          { name: 'Листівки аквареллю', imageUrl: '/images/products/watercolor-postcard.jpg', description: 'Кожна — унікальна робота' }
        ]
      }
    ]
  },
  {
    id: 'wellness-care',
    title: 'categories.wellness-care.title',
    emoji: '🧼',
    description: 'categories.wellness-care.description',
    imageUrl: '/images/categories/wellness.jpg',
    subcategories: [
      {
        name: 'categories.wellness-care.subcategories.wellness-sessions.name',
        slug: 'wellness-sessions',
        emoji: '💆‍♀️🕯️',
        description: 'categories.wellness-care.subcategories.wellness-sessions.description',
        items: [
          { name: 'Релакс масаж', imageUrl: '/images/products/relax-massage.jpg', description: 'Професійний масаж для зняття напруги' },
          { name: 'СПА-процедури', imageUrl: '/images/products/spa-treatments.jpg', description: 'Комплексний догляд за тілом' },
          { name: 'Стоун-терапія', imageUrl: '/images/products/stone-therapy.jpg', description: 'Масаж гарячими каменями для глибокого розслаблення' },
        ],
      },
      {
        name: 'categories.wellness-care.subcategories.natural-skincare-bodycare.name',
        slug: 'natural-skincare-bodycare',
        emoji: '🧴🌿',
        description: 'categories.wellness-care.subcategories.natural-skincare-bodycare.description',
        items: [
          { name: 'Органічні креми', imageUrl: '/images/products/organic-cream.jpg', description: 'Зволожуючі засоби без синтетики' },
          { name: 'Скраби для тіла', imageUrl: '/images/products/body-scrub.jpg', description: 'Натуральне очищення та відлущування' },
          { name: 'Масла для тіла', imageUrl: '/images/products/body-oil.jpg', description: 'Поживні олії для здорової шкіри' },
        ],
      },
      {
        name: 'categories.wellness-care.subcategories.herbal-products-remedies.name',
        slug: 'herbal-products-remedies',
        emoji: '🍵🌱',
        description: 'categories.wellness-care.subcategories.herbal-products-remedies.description',
        items: [
          { name: 'Трав’яні чаї', imageUrl: '/images/products/herbal-tea.jpg', description: 'Зміцнюють імунітет і підтримують здоров’я' },
          { name: 'Настоянки з трав', imageUrl: '/images/products/herbal-tincture.jpg', description: 'Природні екстракти для лікування' },
          { name: 'Мазі та компреси', imageUrl: '/images/products/herbal-ointment.jpg', description: 'Заспокійливі засоби з лікарських трав' },
        ],
      },
      {
        name: 'categories.wellness-care.subcategories.aromatherapy-candles.name',
        slug: 'aromatherapy-candles',
        emoji: '🕯️🌸',
        description: 'categories.wellness-care.subcategories.aromatherapy-candles.description',
        items: [
          { name: 'Ефірні олії', imageUrl: '/images/products/essential-oils.jpg', description: 'Чисті масла для ароматерапії' },
          { name: 'Аромасвічки', imageUrl: '/images/products/aroma-candle.jpg', description: 'Свічки з натурального воску з ефірними оліями' },
          { name: 'Аромадифузори', imageUrl: '/images/products/aroma-diffuser.jpg', description: 'Пристрої для розповсюдження ароматів у приміщенні' },
        ],
      },
      {
        name: 'categories.wellness-care.subcategories.mental-wellness-coaching.name',
        slug: 'mental-wellness-coaching',
        emoji: '🧠💬',
        description: 'categories.wellness-care.subcategories.mental-wellness-coaching.description',
        items: [
          { name: 'Коучинг зі стрес-менеджменту', imageUrl: '/images/products/stress-coaching.jpg', description: 'Підтримка у знятті стресу та тривоги' },
          { name: 'Психологічні консультації', imageUrl: '/images/products/psych-consultation.jpg', description: 'Професійна допомога для покращення настрою' },
        ],
      },
      {
        name: 'categories.wellness-care.subcategories.movement-bodywork.name',
        slug: 'movement-bodywork',
        emoji: '🏃‍♀️💃',
        description: 'categories.wellness-care.subcategories.movement-bodywork.description',
        items: [
          { name: 'Танцювальні заняття', imageUrl: '/images/products/dance-class.jpg', description: 'Розвивають гнучкість та координацію' },
          { name: 'Пілатес', imageUrl: '/images/products/pilates.jpg', description: 'Зміцнюють м’язи та покращують поставу' },
          { name: 'Розтяжка', imageUrl: '/images/products/stretching.jpg', description: 'Знімає напругу в м’язах' },
        ],
      },
      {
        name: 'categories.wellness-care.subcategories.fitness-training.name',
        slug: 'fitness-training',
        emoji: '💪🏃‍♀️',
        description: 'categories.wellness-care.subcategories.fitness-training.description',
        items: [
          { name: 'Персональні тренування', imageUrl: '/images/products/personal-training.jpg', description: 'Індивідуальні плани для досягнення цілей' },
          { name: 'Групові фітнес-заняття', imageUrl: '/images/products/group-fitness.jpg', description: 'Мотивація та підтримка у групі' },
          { name: 'Кардіо тренування', imageUrl: '/images/products/cardio-training.jpg', description: 'Покращують роботу серця та легенів' },
        ],
      },
      {
        name: 'categories.wellness-care.subcategories.nutrition-meal-planning.name',
        slug: 'nutrition-meal-planning',
        emoji: '🥗📋',
        description: 'categories.wellness-care.subcategories.nutrition-meal-planning.description',
        items: [
          { name: 'Індивідуальне харчування', imageUrl: '/images/products/nutrition-plan.jpg', description: 'Раціони для покращення здоров’я' },
          { name: 'Консультації дієтолога', imageUrl: '/images/products/dietitian-consult.jpg', description: 'Професійні рекомендації по харчуванню' },
          { name: 'Суперфуди', imageUrl: '/images/products/superfood.jpg', description: 'Корисні добавки до раціону' },
        ],
      },
      {
        name: 'categories.wellness-care.subcategories.childcare-learning.name',
        slug: 'childcare-learning',
        emoji: '👶📚',
        description: 'categories.wellness-care.subcategories.childcare-learning.description',
        items: [
          { name: 'Раннє розвиток', imageUrl: '/images/products/early-learning.jpg', description: 'Ігри та заняття для розвитку дітей' },
          { name: 'Дитячі масажі', imageUrl: '/images/products/child-massage.jpg', description: 'Процедури для комфорту та здоров’я малюків' },
          { name: 'Консультації педіатра', imageUrl: '/images/products/pediatric-consult.jpg', description: 'Поради з догляду за дитиною' },
        ],
      },
    ],
  },
  {
    id: 'local-services',
    title: 'categories.local-services.title',
    emoji: '🧰',
    description: 'categories.local-services.description',
    imageUrl: '/images/categories/services.jpg',
    subcategories: [
      {
        name: 'categories.local-services.subcategories.tailoring-repairs.name',
        slug: 'tailoring-repairs',
        emoji: '🧵🧥',
        description: 'categories.local-services.subcategories.tailoring-repairs.description',
        items: [
          { name: 'Пошиття одягу на замовлення', imageUrl: '/images/products/tailoring-custom.jpg', description: 'Індивідуальне пошиття за мірками клієнта' },
          { name: 'Ремонт одягу', imageUrl: '/images/products/clothing-repair.jpg', description: 'Заміна блискавок, латки, підшивання' },
          { name: 'Підгонка за розміром', imageUrl: '/images/products/size-adjustment.jpg', description: 'Професійна підгонка одягу під фігуру' },
        ],
      },
      {
        name: 'categories.local-services.subcategories.creative-workshops.name',
        slug: 'creative-workshops',
        emoji: '🎨🧑‍🏫',
        description: 'categories.local-services.subcategories.creative-workshops.description',
        items: [
          { name: 'Майстер-клас з малювання', imageUrl: '/images/products/painting-workshop.jpg', description: 'Навчання різним технікам живопису' },
          { name: 'Вироби з глини', imageUrl: '/images/products/clay-workshop.jpg', description: 'Створення глиняних виробів своїми руками' },
          { name: 'Курс рукоділля', imageUrl: '/images/products/handicraft-workshop.jpg', description: 'Виготовлення прикрас, вишивка, плетіння' },
        ],
      },
      {
        name: 'categories.local-services.subcategories.tech-help-setup.name',
        slug: 'tech-help-setup',
        emoji: '💻🔌',
        description: 'categories.local-services.subcategories.tech-help-setup.description',
        items: [
          { name: 'Налаштування комп’ютерів', imageUrl: '/images/products/computer-setup.jpg', description: 'Встановлення ПЗ, оптимізація системи' },
          { name: 'Ремонт смартфонів', imageUrl: '/images/products/phone-repair.jpg', description: 'Заміна екранів, батарей та інших деталей' },
          { name: 'Підключення інтернету', imageUrl: '/images/products/internet-setup.jpg', description: 'Налаштування Wi-Fi та мережевого обладнання' },
        ],
      },
      {
        name: 'categories.local-services.subcategories.garden-home-help.name',
        slug: 'garden-home-help',
        emoji: '🌻🧹',
        description: 'categories.local-services.subcategories.garden-home-help.description',
        items: [
          { name: 'Догляд за садом', imageUrl: '/images/products/garden-care.jpg', description: 'Покіс трави, обрізка кущів, посадка рослин' },
          { name: 'Прибирання дому', imageUrl: '/images/products/home-cleaning.jpg', description: 'Генеральне та регулярне прибирання' },
          { name: 'Малярні роботи', imageUrl: '/images/products/painting.jpg', description: 'Фарбування стін, реставрація поверхонь' },
        ],
      },
      {
        name: 'categories.local-services.subcategories.pet-care-walking.name',
        slug: 'pet-care-walking',
        emoji: '🐕🦴',
        description: 'categories.local-services.subcategories.pet-care-walking.description',
        items: [
          { name: 'Вигул собак', imageUrl: '/images/products/dog-walking.jpg', description: 'Регулярні прогулянки з домашніми улюбленцями' },
          { name: 'Догляд за домашніми тваринами', imageUrl: '/images/products/pet-care.jpg', description: 'Кормління, прибирання, базовий догляд' },
          { name: 'Навчання та тренування', imageUrl: '/images/products/pet-training.jpg', description: 'Основні команди та поведінка' },
        ],
      },
      {
        name: 'categories.local-services.subcategories.local-tours-experiences.name',
        slug: 'local-tours-experiences',
        emoji: '🗺️🚶',
        description: 'categories.local-services.subcategories.local-tours-experiences.description',
        items: [
          { name: 'Екскурсії містом', imageUrl: '/images/products/city-tour.jpg', description: 'Оглядові прогулянки з гідом' },
          { name: 'Тематичні тури', imageUrl: '/images/products/theme-tour.jpg', description: 'Відвідування культурних та історичних місць' },
          { name: 'Активний відпочинок', imageUrl: '/images/products/active-tour.jpg', description: 'Походи, велопрогулянки, каякінг' },
        ],
      },
      {
        name: 'categories.local-services.subcategories.delivery-errands.name',
        slug: 'delivery-errands',
        emoji: '🚲📦',
        description: 'categories.local-services.subcategories.delivery-errands.description',
        items: [
          { name: 'Кур’єрська доставка', imageUrl: '/images/products/courier-delivery.jpg', description: 'Швидка доставка документів і посилок' },
          { name: 'Покупки та замовлення', imageUrl: '/images/products/shopping-help.jpg', description: 'Допомога з покупками та доставкою товарів' },
          { name: 'Виконання доручень', imageUrl: '/images/products/errands.jpg', description: 'Різноманітні побутові завдання' },
        ],
      },
      {
        name: 'categories.local-services.subcategories.event-hosting-rentals.name',
        slug: 'event-hosting-rentals',
        emoji: '🏕️🎤',
        description: 'categories.local-services.subcategories.event-hosting-rentals.description',
        items: [
          { name: 'Оренда обладнання', imageUrl: '/images/products/equipment-rental.jpg', description: 'Звукові системи, світло, меблі' },
          { name: 'Організація заходів', imageUrl: '/images/products/event-planning.jpg', description: 'Планування та проведення свят і подій' },
          { name: 'Ведучі та аніматори', imageUrl: '/images/products/hosts-animators.jpg', description: 'Професійні ведучі для свят' },
        ],
      },
      {
        name: 'categories.local-services.subcategories.vehicle-help-repairs.name',
        slug: 'vehicle-help-repairs',
        emoji: '🚗🔧',
        description: 'categories.local-services.subcategories.vehicle-help-repairs.description',
        items: [
          { name: 'Автомеханік на виїзді', imageUrl: '/images/products/mobile-mechanic.jpg', description: 'Швидкий ремонт та діагностика авто' },
          { name: 'Заміна шин', imageUrl: '/images/products/tire-change.jpg', description: 'Професійна заміна та балансування' },
          { name: 'Автомийка', imageUrl: '/images/products/car-wash.jpg', description: 'Чистка та миття автомобіля' },
        ],
      },
      {
        name: 'categories.local-services.subcategories.photography-media.name',
        slug: 'photography-media',
        emoji: '📸🎥',
        description: 'categories.local-services.subcategories.photography-media.description',
        items: [
          { name: 'Фотозйомка подій', imageUrl: '/images/products/event-photography.jpg', description: 'Зйомка весіль, свят, корпоративів' },
          { name: 'Відеозйомка', imageUrl: '/images/products/video-shooting.jpg', description: 'Професійне відео на будь-які заходи' },
          { name: 'Обробка фото та відео', imageUrl: '/images/products/photo-editing.jpg', description: 'Редагування та монтаж матеріалів' },
        ],
      },
      {
        name: 'categories.local-services.subcategories.financial-legal-help.name',
        slug: 'financial-legal-help',
        emoji: '📊⚖️',
        description: 'categories.local-services.subcategories.financial-legal-help.description',
        items: [
          { name: 'Консультації з бухгалтерії', imageUrl: '/images/products/accounting-consult.jpg', description: 'Професійна допомога з фінансових питань' },
          { name: 'Юридичні послуги', imageUrl: '/images/products/legal-services.jpg', description: 'Консультації та супровід у правових справах' },
          { name: 'Податкове планування', imageUrl: '/images/products/tax-planning.jpg', description: 'Оптимізація податків і фінансів' },
        ],
      },
      {
        name: 'categories.local-services.subcategories.language-translation.name',
        slug: 'language-translation',
        emoji: '🗣️📘',
        description: 'categories.local-services.subcategories.language-translation.description',
        items: [
          { name: 'Письмовий переклад', imageUrl: '/images/products/written-translation.jpg', description: 'Переклад документів різних тем' },
          { name: 'Усний переклад', imageUrl: '/images/products/interpretation.jpg', description: 'Синхронний та послідовний переклад' },
          { name: 'Курси мов', imageUrl: '/images/products/language-courses.jpg', description: 'Навчання іноземним мовам' },
        ],
      },
    ],
  }
];