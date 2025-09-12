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
  imageUrl: string | undefined;
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
          { name: 'Помідори', imageUrl: '/images/products/farm/vegetables/tomato.jpg', description: 'Солодкі помідори домашнього сорту', season: 'літо' },
          { name: 'Огірки', imageUrl: '/images/products/farm/vegetables/cucumber.jpg', description: 'Хрумкі огірки для салатів та маринування', season: 'літо' },
          { name: 'Морква', imageUrl: '/images/products/farm/vegetables/carrot.jpg', description: 'Молода морква з органічного городу', season: 'весна-осінь' },
          { name: 'Буряк', imageUrl: '/images/products/farm/vegetables/beetroot.jpg', description: 'Соковитий буряк для борщу та салатів', season: 'все літо' },
          { name: 'Редиска', imageUrl: '/images/products/farm/vegetables/radish.jpg', description: 'Соковита весняна редиска, чудова для салатів', season: 'весна' },
          { name: 'Капуста', imageUrl: '/images/products/farm/vegetables/cabbage.jpg', description: 'Білокачанна капуста для салатів і квашення', season: 'літо-осінь' },
          { name: 'Цвітна капуста', imageUrl: '/images/products/farm/vegetables/cauliflower.jpg', description: 'Ніжна цвітна капуста, багата вітамінами', season: 'літо-осінь' },
          { name: 'Брокколі', imageUrl: '/images/products/farm/vegetables/broccoli.jpg', description: 'Хрустка брокколі, багата на вітаміни', season: 'літо-осінь' },
          { name: 'Капуста брюссельська', imageUrl: '/images/products/farm/vegetables/brussels-sprouts.jpg', description: 'Мініатюрна капуста з ніжним смаком', season: 'осінь' },
          { name: 'Червона капуста', imageUrl: '/images/products/farm/vegetables/red-cabbage.jpg', description: 'Хрустка червона капуста для салатів і маринування', season: 'літо-осінь' },
          { name: 'Цибуля', imageUrl: '/images/products/farm/vegetables/onion.jpg', description: 'Ароматна ріпчаста цибуля', season: 'літо-осінь' },
          { name: 'Часник', imageUrl: '/images/products/farm/vegetables/garlic.jpg', description: 'Ароматний молодий часник', season: 'весна-літо' },
          { name: 'Паприка', imageUrl: '/images/products/farm/vegetables/paprika.jpg', description: 'Солодка паприка яскравого кольору', season: 'літо' },
          { name: 'Червоний перець', imageUrl: '/images/products/farm/vegetables/red-pepper.jpg', description: 'Соковитий солодкий перець', season: 'літо' },
          { name: 'Картопля', imageUrl: '/images/products/farm/vegetables/potato.jpg', description: 'Домашня картопля, універсальна для приготування', season: 'літо-осінь' },
          { name: 'Спаржа', imageUrl: '/images/products/farm/vegetables/asparagus.jpg', description: 'Соковита зелена спаржа — делікатес весни', season: 'весна' },
          { name: 'Кабачки', imageUrl: '/images/products/farm/vegetables/zucchini.jpg', description: 'Соковиті кабачки для тушкування та запікання', season: 'літо-осінь' },
          { name: 'Гарбуз', imageUrl: '/images/products/farm/vegetables/pumpkin.jpg', description: 'Солодкий гарбуз для супів, каш і запікання', season: 'осінь' },
          { name: 'Баклажани', imageUrl: '/images/products/farm/vegetables/eggplant.jpg', description: 'Смачні баклажани для різних страв', season: 'літо-осінь' },
          { name: 'Салат, шпинат', imageUrl: '/images/products/farm/vegetables/lettuce.jpg', description: 'Свіже зелене листя для салатів', season: 'весна-літо' },
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
          { name: 'Слива', imageUrl: '/images/products/farm/fruits/plum.jpg', description: 'Домашні сливи для варення та їжі', season: 'серпень' },
          { name: 'Абрикоси', imageUrl: '/images/products/farm/fruits/apricot.jpg', description: 'Соковиті абрикоси з ніжною м’якоттю', season: 'липень' },
          { name: 'Персики', imageUrl: '/images/products/farm/fruits/peach.jpg', description: 'Запашні персики з оксамитовою шкіркою', season: 'липень-серпень' },
          { name: 'Нектарин', imageUrl: '/images/products/farm/fruits/nectarine.jpg', description: 'Солодкий нектарин без пухнастої шкірки', season: 'липень-серпень' },
          { name: 'Виноград', imageUrl: '/images/products/farm/fruits/grape.jpg', description: 'Стиглий виноград, солодкий і соковитий', season: 'вересень-жовтень' },
          { name: 'Смородина', imageUrl: '/images/products/farm/fruits/currant.jpg', description: 'Червона та чорна смородина з куща', season: 'липень-серпень' },
          { name: 'Порічка', imageUrl: '/images/products/farm/fruits/red-currant.jpg', description: 'Яскрава порічка з приємною кислинкою', season: 'липень' },
          { name: 'Лохина', imageUrl: '/images/products/farm/fruits/blueberry.jpg', description: 'Соковита лохина, вирощена на фермі, ідеальна для десертів та перекусів', season: 'липень-серпень' },
          { name: 'Диня', imageUrl: '/images/products/farm/fruits/melon.jpg', description: 'Солодка диня з насиченим ароматом', season: 'серпень' },
          { name: 'Кавун', imageUrl: '/images/products/farm/fruits/watermelon.jpg', description: 'Освіжаючий кавун для літньої спеки', season: 'серпень' },
          { name: 'Черешня', imageUrl: '/images/products/farm/fruits/cherry.jpg', description: 'Солодка черешня', season: 'червень-липень' },
          { name: 'Вишня', imageUrl: '/images/products/farm/fruits/sour-cherry.jpg', description: 'Соковита кисло-солодка вишня', season: 'червень-липень' },
          { name: 'Інжир', imageUrl: '/images/products/farm/fruits/fig.jpg', description: 'Свіжий інжир з медовим смаком', season: 'серпень-вересень' },
          { name: 'Банан', imageUrl: '/images/products/farm/fruits/banana.jpg', description: 'Солодкий банан, популярний фрукт у будь-яку пору року', season: 'цілорічно' },
          { name: 'Хурма', imageUrl: '/images/products/farm/fruits/persimmon.jpg', description: 'Солодка хурма, дозріла на дереві', season: 'жовтень-листопад' },
          { name: 'Гранат', imageUrl: '/images/products/farm/fruits/pomegranate.jpg', description: 'Соковитий гранат з рубіновими зернами', season: 'жовтень-січень', },
          { name: 'Апельсин', imageUrl: '/images/products/farm/fruits/orange.jpg', description: 'Соковитий апельсин, багатий на вітамін C', season: 'грудень-квітень' },
          { name: 'Лимон', imageUrl: '/images/products/farm/fruits/lemon.jpg', description: 'Кислий лимон, часто використовується у кулінарії та напоях', season: 'грудень-квітень' },
          { name: 'Мандарин', imageUrl: '/images/products/farm/fruits/mandarin.jpg', description: 'Солодкі мандарини, особливо популярні взимку', season: 'грудень-березень' },
          { name: 'Ананас', imageUrl: '/images/products/farm/fruits/pineapple.jpg', description: 'Соковитий ананас з тропічним ароматом', season: 'цілорічно' },
          { name: 'Ківі', imageUrl: '/images/products/farm/fruits/kiwi.jpg', description: 'Ківі з кисло-солодким смаком та вітамінами', season: 'грудень-квітень' },
          { name: 'Авокадо', imageUrl: '/images/products/farm/fruits/avocado.jpg', description: 'Кремовий авокадо, багатий на корисні жири', season: 'жовтень-квітень' },
          { name: 'Манго', imageUrl: '/images/products/farm/fruits/mango.jpg', description: 'Екзотичне манго з насиченим смаком і ароматом', season: 'травень-вересень' },
          { name: 'Кокос', imageUrl: '/images/products/farm/fruits/coconut.jpg', description: 'Кокосовий горіх з м’якоттю та кокосовою водою', season: 'цілорічно' },
        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.dairy.name', 
        slug: 'dairy', 
        emoji: '🧀', 
        imageUrl: '/images/subcategories/farm/dairy.jpg',
        description: 'categories.fresh-from-the-farm.subcategories.dairy.description',
        items: [
          { name: 'Молоко', imageUrl: '/images/products/farm/dairy/milk.jpg', description: 'Свіже молоко, не пастеризоване' },
          { name: 'Козяче молоко', imageUrl: '/images/products/farm/dairy/goat-milk.jpg', description: 'Ніжне козяче молоко з легкою кремовістю' },
          { name: 'Сметана', imageUrl: '/images/products/farm/dairy/sour-cream.jpg', description: 'Домашня сметана жирністю 20%' },
          { name: 'Домашній сир', imageUrl: '/images/products/farm/dairy/cottage-cheese.jpg', description: 'Мʼякий сир для випічки й сніданків' },
          { name: 'Козячий сир', imageUrl: '/images/products/farm/dairy/goat-cheese.jpg', description: 'Свіжий або витриманий сир із козячого молока' },
          { name: 'Сир', imageUrl: '/images/products/farm/dairy/cheese.jpg', description: 'Мʼякі й твердi сири — з зеленню, перцем або класичні' },
          { name: 'Масло', imageUrl: '/images/products/farm/dairy/butter.jpg', description: 'Натуральне вершкове масло, збите вручну' },
          { name: 'Вершки', imageUrl: '/images/products/farm/dairy/cream.jpg', description: 'Свіжі вершки для кави чи десертів' },
          { name: 'Йогурт', imageUrl: '/images/products/farm/dairy/yogurt.jpg', description: 'Домашній йогурт без добавок або з ягодами' },
          { name: 'Бринза', imageUrl: '/images/products/farm/dairy/brynza.jpg', description: 'Солоний овечий або коров’ячий сир' },
          { name: 'Кефір', imageUrl: '/images/products/farm/dairy/kefir.jpg', description: 'Кисломолочний напій для здорового травлення' },
          { name: 'Ряжанка', imageUrl: '/images/products/farm/dairy/ryazhenka.jpg', description: 'Традиційний ферментований молочний напій' },
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
          { name: 'Домашні кури', imageUrl: '/images/products/farm/eggs-poultry/chicken.jpg', description: 'Вирощені без антибіотиків' },
          { name: 'Курячі ковбаски', imageUrl: '/images/products/farm/eggs-poultry/chicken-sausage.jpg', description: 'Свіжі фермерські ковбаски без консервантів' },
          { name: 'Качині яйця', imageUrl: '/images/products/farm/eggs-poultry/duck-eggs.jpg', description: 'Більші за курячі, з яскравим жовтком' },
          { name: 'Качка', imageUrl: '/images/products/farm/eggs-poultry/duck.jpg', description: 'Домашня качка — для тушкування чи запікання' },
          { name: 'Індичі яйця', imageUrl: '/images/products/farm/eggs-poultry/turkey-eggs.jpg', description: 'Рідкісні, поживні яйця від домашніх індиків' },
          { name: 'Індичка', imageUrl: '/images/products/farm/eggs-poultry/turkey.jpg', description: 'Мʼясо індички для запікання та стейків' },
          { name: 'Перепелині яйця', imageUrl: '/images/products/farm/eggs-poultry/quail-eggs.jpg', description: 'Маленькі яйця з ніжним смаком та дієтичними властивостями' },
          { name: 'Перепілка', imageUrl: '/images/products/farm/eggs-poultry/quail.jpg', description: 'Невеликий птах для запікання або гриля' },
          { name: 'Гуска', imageUrl: '/images/products/farm/eggs-poultry/goose.jpg', description: 'Соковите мʼясо гуски з хрусткою шкіркою' },
          { name: 'Страусине яйце', imageUrl: '/images/products/farm/eggs-poultry/ostrich-egg.jpg', description: 'Одне яйце — як 20–25 курячих. Ідеальне для великої страви або подарунку.' },
          { name: 'Страусине мʼясо', imageUrl: '/images/products/farm/eggs-poultry/ostrich-meat.jpg', description: 'Ніжне червоне мʼясо з низьким вмістом жиру. Альтернатива яловичині.' },
        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.red-meat.name', 
        slug: 'red-meat', 
        emoji: '🥩🐄', 
        imageUrl: '/images/subcategories/farm/meat.jpg',
        description: 'categories.fresh-from-the-farm.subcategories.red-meat.description',
        items: [
          { name: 'Яловичина', imageUrl: '/images/products/farm/meat/beef.jpg', description: 'Мармурове мʼясо з ферми' },
          { name: 'Свинина', imageUrl: '/images/products/farm/meat/pork.jpg', description: 'Домашнє мʼясо для смаження і запікання' },
          { name: 'Телятина', imageUrl: '/images/products/farm/meat/veal.jpg', description: 'Ніжне дієтичне мʼясо' },
          { name: 'Баранина', imageUrl: '/images/products/farm/meat/lamb.jpg', description: 'Пахуче мʼясо молодих ягнят' },
          { name: 'Козятина', imageUrl: '/images/products/farm/meat/goat.jpg', description: 'Пісне мʼясо з насиченим смаком' },
          { name: 'Домашня шинка', imageUrl: '/images/products/farm/meat/ham.jpg', description: 'Копчена або запечена шинка без консервантів' },
          { name: 'Ковбаси домашні', imageUrl: '/images/products/farm/meat/sausage.jpg', description: 'Ручна робота: ковбаси зі свинини, яловичини або змішані' },
          { name: 'Фарш яловичий', imageUrl: '/images/products/farm/meat/beef-minced.jpg', description: 'Свіжий фарш для котлет, голубців або рагу' },
        ]
      },
      {
        name: 'categories.fresh-from-the-farm.subcategories.fish-seafood.name', 
        slug: 'fish-seafood', 
        emoji: '🐟🦐', 
        imageUrl: '/images/subcategories/farm/fish-seafood.jpg',
        description: 'categories.fresh-from-the-farm.subcategories.fish-seafood.description',
        items: [
          { name: 'Форель', imageUrl: '/images/products/farm/fish-seafood/trout.jpg', description: 'Свіжа або копчена форель' },
          { name: 'Лосось', imageUrl: '/images/products/farm/fish-seafood/salmon.jpg', description: 'Філе або стейки свіжого або слабосоленого лосося' },
          { name: 'Тунець', imageUrl: '/images/products/farm/fish-seafood/tuna.jpg', description: 'Стейки тунця — ідеальні для грилю чи тартару' },
          { name: 'Короп', imageUrl: '/images/products/farm/fish-seafood/carp.jpg', description: 'Популярна риба на свята і будні' },
          { name: 'Судак', imageUrl: '/images/products/farm/fish-seafood/pikeperch.jpg', description: 'Мʼясо з білим філе, без кісток' },
          { name: 'Окунь', imageUrl: '/images/products/farm/fish-seafood/perch.jpg', description: 'Маленький, але смачний — на сковорідку або юшку' },
          { name: 'Оселедець домашній', imageUrl: '/images/products/farm/fish-seafood/herring.jpg', description: 'Солений або маринований оселедець ручної роботи' },
          { name: 'Копчена риба', imageUrl: '/images/products/farm/fish-seafood/smoked-fish.jpg', description: 'Асорті з копчених риб — короп, товстолоб, судак' },
          { name: 'Раки', imageUrl: '/images/products/farm/fish-seafood/crayfish.jpg', description: 'Свіжі або варені, для гурманів' },
          { name: 'Ікра прісноводна', imageUrl: '/images/products/farm/fish-seafood/caviar.jpg', description: 'Натуральна ікра без консервантів — коропова, щуча' },
          { name: 'Креветки', imageUrl: '/images/products/farm/fish-seafood/shrimp.jpg', description: 'Варені або заморожені — ідеальні до салатів і пасти' },
          { name: 'Мідії', imageUrl: '/images/products/farm/fish-seafood/mussels.jpg', description: 'У мушлях або чищені — чудові для паельї чи запікання' }
        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.game-meats.name', 
        slug: 'game-meats', 
        emoji: '🦌🐇', 
        imageUrl: '/images/subcategories/farm/game-meats.jpg',
        description: 'categories.fresh-from-the-farm.subcategories.game-meats.description',
        items: [
          { name: 'Оленина', imageUrl: '/images/products/farm/game-meats/venison.jpg', description: 'Мʼясо дикого оленя з лісу' },
          { name: 'Фазан', imageUrl: '/images/products/farm/game-meats/pheasant.jpg', description: 'Птах з ніжним мʼясом' },
          { name: 'Заяча тушка', imageUrl: '/images/products/farm/game-meats/hare.jpg', description: 'Для тушкування чи запікання' },
          { name: 'Кабанина', imageUrl: '/images/products/farm/game-meats/boar.jpg', description: 'Мʼясо дикого кабана — насичений смак і аромат' },
          { name: 'Кролик', imageUrl: '/images/products/farm/game-meats/rabbit.jpg', description: 'Фермерський або дикий, дієтичне мʼясо' },
          { name: 'Перепел', imageUrl: '/images/products/farm/game-meats/quail.jpg', description: 'Маленький птах, ніжне філе, підходить для запікання' },
          { name: 'Куріпка', imageUrl: '/images/products/farm/game-meats/partridge.jpg', description: 'Дика птиця з насиченим смаком, делікатес' },
          { name: 'Бекас', imageUrl: '/images/products/farm/game-meats/snipe.jpg', description: 'Невеликий перелітний птах, для гурманів' },
        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.honey-beekeeping.name', 
        slug: 'honey-beekeeping', 
        emoji: '🍯', 
        imageUrl: '/images/subcategories/farm/honey-beekeeping.jpg',
        description: 'categories.fresh-from-the-farm.subcategories.honey-beekeeping.description',
        items: [
          { name: 'Акацієвий мед', imageUrl:'/images/products/farm/honey-beekeeping/acacia-honey.jpg', description: 'Світлий, ніжний мед з акації, довго не кристалізується', season: 'травень-червень' },
          { name: 'Липовий мед',imageUrl: '/images/products/farm/honey-beekeeping/linden-honey.jpg', description: 'Ароматний мед із квітів липи, має виражену антисептичну дію', season: 'червень-липень' },
          { name: 'Гречаний мед',imageUrl: '/images/products/farm/honey-beekeeping/buckwheat-honey.jpg', description: 'Темний, насичений мед з сильним смаком і високим вмістом заліза', season: 'липень-серпень' },
          { name: 'Соняшниковий мед',imageUrl: '/images/products/farm/honey-beekeeping/sunflower-honey.jpg', description: 'Яскравий жовтий мед з легким смаком, швидко кристалізується', season: 'серпень-вересень' },
          { name: 'Різнотрав’я',imageUrl: '/images/products/farm/honey-beekeeping/wildflower-honey.jpg', description: 'Мед зі збору нектару з лугових та польових квітів, універсальний для щоденного вживання', season: 'червень-серпень' },
          { name: 'Гірський мед',imageUrl: '/images/products/farm/honey-beekeeping/mountain-honey.jpg', description: 'Мед з нектару високогірних рослин, має складний смак і аромат', season: 'липень-серпень' },
          { name: 'Лісовий мед', imageUrl: '/images/products/farm/honey-beekeeping/forest-honey.jpg', description: 'Насичений мед з нектару лісових трав, дерев і кущів — має темний колір та глибокий аромат', season: 'липень-вересень' },
          { name: 'Мед з прянощами', imageUrl: '/images/products/farm/honey-beekeeping/spiced-honey.jpg', description: 'Мед із додаванням кориці, імбиру, куркуми або чилі — для підтримки імунітету та тонусу', season: 'цілорічно' },
          { name: 'Енергетичний мед', imageUrl: '/images/products/farm/honey-beekeeping/energy-honey.jpg', description: 'Мед з додаванням пилку, перги, прополісу або женьшеню — природне джерело енергії та імунної підтримки', season: 'цілорічно' },
          { name: 'Мед з травами', imageUrl: '/images/products/farm/honey-beekeeping/herbal-honey.jpg', description: 'Мед, настояний на травах або оліях (шавлія, м’ята, евкаліпт) — для профілактики застуд і стресу', season: 'цілорічно' },
          { name: 'Прополіс', imageUrl: '/images/products/farm/honey-beekeeping/propolis.jpg', description: 'Натуральний антисептик з вулика' },
          { name: 'Бджолиний віск', imageUrl: '/images/products/farm/honey-beekeeping/beeswax.jpg', description: 'Використовується в косметиці та свічках' },
          { name: 'Мед у сотах', imageUrl: '/images/products/farm/honey-beekeeping/honeycomb.jpg', description: 'Натуральний мед у стільниках' },
          { name: 'Маточне молочко', imageUrl: '/images/products/farm/honey-beekeeping/royal-jelly.jpg', description: 'Цінний продукт для імунітету та омолодження', season: 'травень-серпень' },
          { name: 'Пилок (обніжжя)', imageUrl: '/images/products/farm/honey-beekeeping/pollen.jpg', description: 'Природне джерело вітамінів та амінокислот', season: 'квітень-серпень' },
          { name: 'Перга', imageUrl: '/images/products/farm/honey-beekeeping/perga.jpg', description: 'Ферментований пилок, потужний природний стимулятор', season: 'червень-серпень' },
          { name: 'Медові пасти', imageUrl: '/images/products/farm/honey-beekeeping/honey-paste.jpg', description: 'Мед з додаванням ягід, горіхів або спецій', season: 'цілорічно' },
          { name: 'Для апітерапії', imageUrl: '/images/products/farm/honey-beekeeping/apitherapy-kit.jpg', description: 'Комплекти для оздоровлення на основі бджолопродуктів', season: 'цілорічно' },
          { name: 'Подарункові набори', imageUrl: '/images/products/farm/honey-beekeeping/honey-gift-box.jpg', description: 'Крафтові набори з меду та продуктів вулика', season: 'сезонно / на замовлення' },
          { name: 'Медова косметика', imageUrl: '/images/products/farm/honey-beekeeping/honey-cosmetics.jpg', description: 'Креми, бальзами та маски на основі меду і прополісу', season: 'цілорічно' }
        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.nuts.name', 
        slug: 'nuts', 
        emoji: '🌰', 
        imageUrl: '/images/subcategories/farm/nuts.jpg',
        description: 'categories.fresh-from-the-farm.subcategories.nuts.description',
        items: [
          { name: 'Волоський горіх', imageUrl: '/images/products/farm/nuts/walnut.jpg', description: 'Очищені та неочищені волоські горіхи', season: 'жовтень-листопад' },
          { name: 'Ліщина (фундук)', imageUrl: '/images/products/farm/nuts/hazelnut.jpg', description: 'Стиглі ліщинові горіхи з локальних господарств', season: 'вересень-жовтень' },
          { name: 'Мигдаль', imageUrl: '/images/products/farm/nuts/almond.jpg', description: 'Мигдаль — джерело білка та корисних жирів', season: 'серпень-вересень' },
          { name: 'Кедровий горіх', imageUrl: '/images/products/farm/nuts/pine-nut.jpg', description: 'Маленькі, але поживні горішки з хвойних шишок', season: 'вересень-жовтень' },
          { name: 'Фісташки', imageUrl: '/images/products/farm/nuts/pistachio.jpg', description: 'Стиглі фісташки — солоні, смажені або сирі', season: 'вересень-жовтень' },
          { name: 'Арахіс', imageUrl: '/images/products/farm/nuts/peanut.jpg', description: 'Домашній арахіс — у шкаралупі чи смажений', season: 'вересень-жовтень' },
          { name: 'Горіхи в меді', imageUrl: '/images/products/farm/nuts/walnut-honey.jpg', description: 'Горіхи, залиті ароматним квітковим медом', season: 'цілорічно' },
          { name: 'Горіхова паста', imageUrl: '/images/products/farm/nuts/nut-butter.jpg', description: 'Натуральна паста з фундука, арахісу чи мигдалю без добавок', season: 'цілорічно' },
          { name: 'Мікс горіхів', imageUrl: '/images/products/farm/nuts/nut-mix.jpg', description: 'Суміш сезонних горіхів — корисна закуска', season: 'цілорічно' },
          { name: 'Горіхи з фруктами', imageUrl: '/images/products/farm/nuts/nuts-dried-fruits.jpg', description: 'Корисний перекус із сухофруктів та горіхів', season: 'цілорічно' },
          { name: 'Горіхи з прянощами', imageUrl: '/images/products/farm/nuts/spiced-nuts.jpg', description: 'Солоні та пряні смажені горіхи для перекусу', season: 'цілорічно' },
          { name: 'Молоко з горіхів', imageUrl: '/images/products/farm/nuts/nut-milk.jpg', description: 'Мигдальне чи фундукове молоко — рослинна альтернатива', season: 'цілорічно' },
        ]
      },
      {
        name: 'categories.fresh-from-the-farm.subcategories.seeds-oilcrops.name', 
        slug: 'seeds-oilcrops', 
        emoji: '🌻', 
        imageUrl: '/images/subcategories/farm/seeds-oilcrops.jpg',
        description: 'categories.fresh-from-the-farm.subcategories.seeds-oilcrops.description',
        items: [
          { name: 'Кунжут', imageUrl: '/images/products/farm/seeds-oilcrops/sesame.jpg', description: 'Кунжутне насіння для кулінарії та олії', season: 'вересень-жовтень' },
          { name: 'Насіння льону', imageUrl: '/images/products/farm/seeds-oilcrops/flax.jpg', description: 'Корисне лляне насіння, джерело Омега-3', season: 'серпень-вересень' },
          { name: 'Насіння соняшника', imageUrl: '/images/products/farm/seeds-oilcrops/sunflower.jpg', description: 'Сире або підсмажене насіння соняшника', season: 'серпень-вересень' },
          { name: 'Гарбузове насіння', imageUrl: '/images/products/farm/seeds-oilcrops/pumpkin.jpg', description: 'Очищене або сире насіння гарбуза', season: 'жовтень' },
          { name: 'Насіння чіа', imageUrl: '/images/products/farm/seeds-oilcrops/chia.jpg', description: 'Суперфуд для сніданків, багатий на клітковину', season: 'цілорічно' },
          { name: 'Оливкова олія', imageUrl: '/images/products/farm/seeds-oilcrops/olive-oil.jpg', description: 'Натуральна оливкова олія — місцева або імпортована в малих партіях', season: 'цілорічно' },
          { name: 'Олія льону', imageUrl: '/images/products/farm/seeds-oilcrops/flax-oil.jpg', description: 'Натуральна нерафінована олія з насіння льону', season: 'цілорічно' },
          { name: 'Соняшникова олія', imageUrl: '/images/products/farm/seeds-oilcrops/sunflower-oil.jpg', description: 'Ароматна домашня соняшникова олія', season: 'цілорічно' },
          { name: 'Гарбузова олія', imageUrl: '/images/products/farm/seeds-oilcrops/pumpkin-oil.jpg', description: 'Темна і насичена гарбузова олія для салатів', season: 'жовтень-листопад' },
          { name: 'Олія з конопель', imageUrl: '/images/products/farm/seeds-oilcrops/hemp-oil.jpg', description: 'Корисна зелена олія з приємним горіховим присмаком', season: 'серпень-жовтень' },
          { name: 'Кунжутна олія', imageUrl: '/images/products/farm/seeds-oilcrops/sesame-oil.jpg', description: 'Кунжутна олія для кулінарії та здоров’я', season: 'вересень-жовтень' },
          { name: 'Насіння для пророщування', imageUrl: '/images/products/farm/seeds-oilcrops/sprouting.jpg', description: 'Насіння для мікрозелені та проростків', season: 'цілорічно' }
        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.grains-legumes.name', 
        slug: 'grains-legumes', 
        emoji: '🌾', 
        imageUrl: '/images/subcategories/farm/grains-legumes.jpg',
        description: 'categories.fresh-from-the-farm.subcategories.grains-legumes.description',
        items: [
          { name: 'Кукурудза', imageUrl: '/images/products/farm/grains-legumes/corn.jpg', description: 'Солодка кукурудза, ідеальна для варіння та грилю', season: 'літо' },
          { name: 'Квасоля', imageUrl: '/images/products/farm/grains-legumes/beans.jpg', description: 'Різнокольорова квасоля: червона, біла' },
          { name: 'Стручкова квасоля', imageUrl: '/images/products/farm/grains-legumes/green-beans.jpg', description: 'Ніжні зелені або жовті стручки без жорстких волокон, ідеальні для варіння, тушкування та заморожування', season: 'літо' },
          { name: 'Горошок', imageUrl: '/images/products/farm/grains-legumes/peas.jpg', description: 'Свіжозібраний зелений горошок', season: 'весна-початок літа' },
          { name: 'Біб', imageUrl: '/images/products/farm/grains-legumes/fava-beans.jpg', description: 'М’ясисті боби з м’яким горіховим смаком' },
          { name: 'Сочевиця', imageUrl: '/images/products/farm/grains-legumes/lentils.jpg', description: 'Зелена та червона сочевиця, багата на білок' },
          { name: 'Нут', imageUrl: '/images/products/farm/grains-legumes/chickpeas.jpg', description: 'Ідеальний інгредієнт для хумусу та салатів' },
          { name: 'Соя', imageUrl: '/images/products/farm/grains-legumes/soy.jpg', description: 'Універсальна бобова для молока, тофу та інших продуктів' },
          { name: 'Гречка', imageUrl: '/images/products/farm/grains-legumes/buckwheat.jpg', description: 'Традиційна крупа з горіховим смаком' },
          { name: 'Пшениця', imageUrl: '/images/products/farm/grains-legumes/wheat.jpg', description: 'Зерно для помелу або пророщування' },
          { name: 'Жито', imageUrl: '/images/products/farm/grains-legumes/rye.jpg', description: 'Зерно для хлібопечення та ферментації' },
          { name: 'Овес', imageUrl: '/images/products/farm/grains-legumes/oats.jpg', description: 'Корисна крупа для сніданків та випічки' },
        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.foraged-goods.name', 
        slug: 'foraged-goods', 
        emoji: '🍄🌲', 
        imageUrl: '/images/subcategories/farm/foraged-goods.jpg',
        description: 'categories.fresh-from-the-farm.subcategories.foraged-goods.description',
        items: [
          { name: 'Суниці', imageUrl: '/images/products/farm/foraged-goods/wild-strawberry.jpg', description: 'Маленькі, але дуже духмяні дикі ягоди' },
          { name: 'Чорниці', imageUrl: '/images/products/farm/foraged-goods/bilberry.jpg', description: 'Ягоди, зібрані в карпатських лісах' },
          { name: 'Малина', imageUrl: '/images/products/farm/foraged-goods/raspberry.jpg', description: 'Ароматна і солодка, зібрана вручну' },
          { name: 'Ожина', imageUrl: '/images/products/farm/foraged-goods/blackberry.jpg', description: 'Дика ягода з лісових галявин' },
          { name: 'Брусниця', imageUrl: '/images/products/farm/foraged-goods/lingonberry.jpg', description: 'Кисло-солодкі ягоди, багаті на вітаміни' },
          { name: 'Шипшина', imageUrl: '/images/products/farm/foraged-goods/rosehip.jpg', description: 'Сушені плоди з високим вмістом вітаміну C' },
          { name: 'Білі гриби', imageUrl: '/images/products/farm/foraged-goods/porcini.jpg', description: 'Свіжі або сушені, з екологічних лісів' },
          { name: 'Лисички', imageUrl: '/images/products/farm/foraged-goods/chanterelle.jpg', description: 'Сезонні гриби — з липня по вересень' },
          { name: 'Підберезники', imageUrl: '/images/products/farm/foraged-goods/birch-bolete.jpg', description: 'Делікатні гриби, ідеальні для тушкування' },
          { name: 'Маслюки', imageUrl: '/images/products/farm/foraged-goods/slippery-jack.jpg', description: 'Маслянисті капелюшки, чудові в маринаді' },
          { name: 'Шампіньйони', imageUrl: '/images/products/farm/foraged-goods/champignon.jpg', description: 'Лісові шампіньйони з характерним ароматом' },
          { name: 'Гливи', imageUrl: '/images/products/farm/foraged-goods/oyster.jpg', description: 'Зібрані на деревах у вологих лісах' },
        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.greens-herbs.name', 
        slug: 'greens-herbs', 
        emoji: '🌿💐', 
        imageUrl: '/images/subcategories/farm/greens-herbs.jpg',
        description: 'categories.fresh-from-the-farm.subcategories.greens-herbs.description',
        items: [
          { name: 'Базилік', imageUrl: '/images/products/farm/greens-herbs/basil.jpg', description: 'Свіжа зелень для салатів і соусів' },
          { name: 'Мʼята', imageUrl: '/images/products/farm/greens-herbs/mint.jpg', description: 'Ароматна мʼята — для чаю і десертів' },
          { name: 'Розмарин', imageUrl: '/images/products/farm/greens-herbs/rosemary.jpg', description: 'Пряна трава для мʼясних і овочевих страв' },
          { name: 'Тимʼян (чебрець)', imageUrl: '/images/products/farm/greens-herbs/thyme.jpg', description: 'Ароматна приправа для страв і настоїв' },
          { name: 'Кріп', imageUrl: '/images/products/farm/greens-herbs/dill.jpg', description: 'Незамінний для консервації та салатів' },
          { name: 'Петрушка', imageUrl: '/images/products/farm/greens-herbs/parsley.jpg', description: 'Класична зелень для будь-якої кухні' },
          { name: 'Селера', imageUrl: '/images/products/farm/greens-herbs/celery.jpg', description: 'Ароматне листя селери — для супів, салатів і смузі' },
          { name: 'Коріандр (кінза)', imageUrl: '/images/products/farm/greens-herbs/cilantro.jpg', description: 'Свіжа зелень для кавказької кухні' },
          { name: 'Орегано', imageUrl: '/images/products/farm/greens-herbs/oregano.jpg', description: 'Ароматна спеція для піци та італійських страв' },
          { name: 'Фенхель', imageUrl: '/images/products/farm/greens-herbs/fennel.jpg', description: 'Ароматна зелень з анісовим присмаком' },
          { name: 'Майоран', imageUrl: '/images/products/farm/greens-herbs/marjoram.jpg', description: 'М’який аналог орегано для делікатних страв' },
          { name: 'Меліса', imageUrl: '/images/products/farm/greens-herbs/lemon-balm.jpg', description: 'Заспокійлива трава для чаю' },
          { name: 'Лаванда', imageUrl: '/images/products/farm/greens-herbs/lavender.jpg', description: 'Квітка з ніжним ароматом — для декору і чаю' },
          { name: 'Календула', imageUrl: '/images/products/farm/greens-herbs/calendula.jpg', description: 'Лікувальна квітка з яскравим кольором' },
          { name: 'Ехінацея', imageUrl: '/images/products/farm/greens-herbs/echinacea.jpg', description: 'Імунно-зміцнювальна трава' },
          { name: 'Шавлія', imageUrl: '/images/products/farm/greens-herbs/sage.jpg', description: 'Корисна трава з пряним ароматом' },
        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.seedlings-starts.name', 
        slug: 'seedlings-starts', 
        emoji: '🌱🪴', 
        imageUrl: '/images/subcategories/farm/seedlings-starts.jpg',
        description: 'categories.fresh-from-the-farm.subcategories.seedlings-starts.description',
        items: [
          { name: 'Розсада помідорів', imageUrl: '/images/products/farm/seedlings-starts/tomato-seedling.jpg', description: 'Стійкі сорти для відкритого ґрунту' },
          { name: 'Розсада перцю', imageUrl: '/images/products/farm/seedlings-starts/pepper-seedling.jpg', description: 'Солодкий перець та гострий чилі' },
          { name: 'Розсада капусти', imageUrl: '/images/products/farm/seedlings-starts/cabbage-seedling.jpg', description: 'Білокачанна та броколі' },
          { name: 'Саджанці полуниці', imageUrl: '/images/products/farm/seedlings-starts/strawberry-seedling.jpg', description: 'Урожайні сорти ремонтантної полуниці' },
          { name: 'Саджанці малини', imageUrl: '/images/products/farm/seedlings-starts/raspberry-seedling.jpg', description: 'Малина безколючкова' },
          { name: 'Саджанці смородини', imageUrl: '/images/products/farm/seedlings-starts/currant-seedling.jpg', description: 'Чорна та червона смородина' },
          { name: 'Саджанці лохини', imageUrl: '/images/products/farm/seedlings-starts/blueberry-seedling.jpg', description: 'Сорти з високою врожайністю' },
          { name: 'Саджанці ожини', imageUrl: '/images/products/farm/seedlings-starts/blackberry-seedling.jpg', description: 'Сорти з великими плодами' },
          { name: 'Саджанці винограду', imageUrl: '/images/products/farm/seedlings-starts/grape-seedling.jpg', description: 'Стійкі до морозу столові сорти' },
          { name: 'Саджанці яблуні', imageUrl: '/images/products/farm/seedlings-starts/apple-seedling.jpg', description: 'Місцеві адаптовані сорти' },
          { name: 'Саджанці груші', imageUrl: '/images/products/farm/seedlings-starts/pear-seedling.jpg', description: 'Соковиті та зимостійкі сорти' },
          { name: 'Саджанці вишні', imageUrl: '/images/products/farm/seedlings-starts/sour-cherry-seedling.jpg', description: 'Кисло-солодкі сорти для компотів та варення' },
          { name: 'Саджанці черешні', imageUrl: '/images/products/farm/seedlings-starts/sweet-cherry-seedling.jpg', description: 'Стійкі до розтріскування плоди' },
          { name: 'Саджанці абрикоса', imageUrl: '/images/products/farm/seedlings-starts/apricot-seedling.jpg', description: 'Смачні плоди для сушіння та варення' },
          { name: 'Саджанці персика', imageUrl: '/images/products/farm/seedlings-starts/peach-seedling.jpg', description: 'Солодкі сорти з великими плодами' },
          { name: 'Саджанці горіха', imageUrl: '/images/products/farm/seedlings-starts/walnut-seedling.jpg', description: 'Саджанці грецького горіха' },

        ]
      },
      { 
        name: 'categories.fresh-from-the-farm.subcategories.flowers.name', 
        slug: 'flowers', 
        emoji: '💐', 
        imageUrl: '/images/subcategories/farm/flowers.jpg',
        description: 'categories.fresh-from-the-farm.subcategories.flowers.description',
        items: [
          { name: 'Квіти в горщиках', imageUrl: '/images/products/farm/flowers/potted-flowers.jpg', description: 'Кімнатні та садові рослини' },
          { name: 'Букети', imageUrl: '/images/products/farm/flowers/custom-bouquet.jpg', description: 'Індивідуальні композиції від фермерів' },
          { name: 'Троянди', imageUrl: '/images/products/farm/flowers/roses.jpg', description: 'Ароматні троянди з ферми' },
          { name: 'Тюльпани', imageUrl: '/images/products/farm/flowers/tulips.jpg', description: 'Весняні тюльпани від місцевих виробників' },
          { name: 'Лілії', imageUrl: '/images/products/farm/flowers/lilies.jpg', description: 'Ароматні великі квіти, ідеальні для урочистостей' },
          { name: 'Нарциси', imageUrl: '/images/products/farm/flowers/daffodils.jpg', description: 'Весняні квіти з фермерських клумб' },
          { name: 'Жоржини', imageUrl: '/images/products/farm/flowers/dahlias.jpg', description: 'Барвисті квіти для яскравих букетів' },
          { name: 'Гортензії', imageUrl: '/images/products/farm/flowers/hydrangeas.jpg', description: 'Обʼємні квіти у ніжних тонах' },
          { name: 'Півонії', imageUrl: '/images/products/farm/flowers/peonies.jpg', description: 'Свіжі півонії в сезон' },
          { name: 'Айстри', imageUrl: '/images/products/farm/flowers/asters.jpg', description: 'Квітковий символ осені' },
          { name: 'Польові квіти', imageUrl: '/images/products/farm/flowers/wildflowers.jpg', description: 'Сезонні букети' },
          { name: 'Ромашки', imageUrl: '/images/products/farm/flowers/daisies.jpg', description: 'Ніжні польові квіти' },
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
        imageUrl: '/images/subcategories/kitchen/baked-goods.jpg',
        description: 'categories.from-the-kitchen.subcategories.baked-goods.description',
        items: [
          { name: 'Цільнозерновий хліб', imageUrl: '/images/products/kitchen/baked-goods/wholegrain-bread.jpg', description: 'Хліб з борошна грубого помолу, багатий на клітковину' },
          { name: 'Житній на заквасці', imageUrl: '/images/products/kitchen/baked-goods/rye-bread.jpg', description: 'Ароматний хліб із натуральної закваски' },
          { name: 'Бездріжджовий хліб', imageUrl: '/images/products/kitchen/baked-goods/yeast-free-bread.jpg', description: 'Хліб без дріжджів — легкий для травлення, ідеальний для особливих дієт' },
          { name: 'Хліб без глютену', imageUrl: '/images/products/kitchen/baked-goods/gluten-free-bread.jpg', description: 'Мʼякий хліб на основі рисового борошна — без глютену' },
          { name: 'Батон домашній', imageUrl: '/images/products/kitchen/baked-goods/white-loaf.jpg', description: 'Мʼякий білий хліб з рум’яною скоринкою' },
          { name: 'Фокача', imageUrl: '/images/products/kitchen/baked-goods/focaccia.jpg', description: 'Італійський плоский хліб з оливковою олією та спеціями' },
          { name: 'Лаваш домашній', imageUrl: '/images/products/kitchen/baked-goods/lavash.jpg', description: 'Тонкий м’який хліб, випечений у печі' },
          { name: 'Круасани', imageUrl: '/images/products/kitchen/baked-goods/croissants.jpg', description: 'Свіжі круасани з начинкою з чорного шоколаду' },
          { name: 'Сінабони', imageUrl: '/images/products/kitchen/baked-goods/cinnamon-rolls.jpg', description: 'Запашні булочки з корицею та крем-сирною глазур’ю' },
          { name: 'Булочки', imageUrl: '/images/products/kitchen/baked-goods/buns.jpg', description: 'Мʼякі й солодкі, ідеальні до чаю' },
          { name: 'Сирники', imageUrl: '/images/products/kitchen/baked-goods/baked-syrnyky.jpg', description: 'Легкі запечені сирники з домашнього сиру' },
          { name: 'Пиріжки', imageUrl: '/images/products/kitchen/baked-goods/pies.jpg', description: 'Пухкі пиріжки з кисло-солодкою начинкою' },
          { name: 'Слойки', imageUrl: '/images/products/kitchen/baked-goods/puffs.jpg', description: 'Листкове тісто з соковитою яблучною начинкою' },
          { name: 'Паляниця', imageUrl: '/images/products/kitchen/baked-goods/palyanytsia.jpg', description: 'Традиційний український хліб, символ стійкості' },
          { name: 'Киш', imageUrl: '/images/products/kitchen/baked-goods/quiche.jpg', description: 'Французький відкритий пиріг з начинкою' },
          { name: 'Пісочний пиріг', imageUrl: '/images/products/kitchen/baked-goods/jam-pie.jpg', description: 'Пісочне тісто з ароматним домашнім повидлом' }
        ]
      },
      {
        name: 'categories.from-the-kitchen.subcategories.homemade-meals.name',
        slug: 'homemade-meals',
        emoji: '🍲',
        imageUrl: '/images/subcategories/kitchen/homemade-meals.jpg',
        description: 'categories.from-the-kitchen.subcategories.homemade-meals.description',
        items: [
          // 🥣 Супи / Гарячі перші страви
          { name: 'Борщ', imageUrl: '/images/products/kitchen/homemade-meals/borscht.jpg', description: 'Готова перша страва — просто розігріти' },
          { name: 'Солянка', imageUrl: '/images/products/kitchen/homemade-meals/solyanka.jpg', description: 'Ситний суп із копченостями' },
          { name: 'Том Ям', imageUrl: '/images/products/kitchen/homemade-meals/tom-yam.jpg', description: "Гострий тайський суп з креветками та кокосовим молоком" },
          { name: 'Гаспачо', imageUrl: '/images/products/kitchen/homemade-meals/gazpacho.jpg', description: 'Іспанський холодний суп із томатів та овочів' },
          // 🍛 Основні страви з мʼясом / рибою
          { name: 'Голубці', imageUrl: '/images/products/kitchen/homemade-meals/holubtsi.jpg', description: 'Капуста, начинена рисом і мʼясом' },
          { name: 'Котлети', imageUrl: '/images/products/kitchen/homemade-meals/cutlets.jpg', description: 'Соковиті котлети з мʼяса або овочів' },
          { name: 'Тефтелі', imageUrl: '/images/products/kitchen/homemade-meals/meatballs.jpg', description: 'Мʼясні кульки в томатному або вершковому соусі' },
          { name: 'Плов', imageUrl: '/images/products/kitchen/homemade-meals/plov.jpg', description: 'Ароматний рис із мʼясом та спеціями' },
          { name: 'Мусака', imageUrl: '/images/products/kitchen/homemade-meals/moussaka.jpg', description: 'Балканська запіканка з баклажанами, мʼясом і бешамелем' },
          { name: 'Курячий карі', imageUrl: '/images/products/kitchen/homemade-meals/chicken-curry.jpg', description: 'Ароматна індійська страва з куркою та спеціями' },
          { name: 'Паелья', imageUrl: '/images/products/kitchen/homemade-meals/paella.jpg', description: 'Іспанський рис з морепродуктами або мʼясом' },
          { name: 'Чілі кон карне', imageUrl: '/images/products/kitchen/homemade-meals/chili-con-carne.jpg', description: "Пряне м'ясо з квасолею в мексиканському стилі" },
          { name: 'Гуляш', imageUrl: '/images/products/kitchen/homemade-meals/goulash.jpg', description: "Угорська страва з м'ясом та паприкою" },
          { name: 'Паста Болоньєзе', imageUrl: '/images/products/kitchen/homemade-meals/pasta-bolognese.jpg', description: 'Італійська паста з мʼясним соусом' },
          // 🥗 Основні вегетаріанські страви
          { name: 'Шакшука', imageUrl: '/images/products/kitchen/homemade-meals/shakshuka.jpg', description: 'Яйця, тушковані в томатному соусі з овочами' },
          { name: 'Рататуй', imageUrl: '/images/products/kitchen/homemade-meals/ratatouille.jpg', description: 'Французька овочева страва, тушкована в томатному соусі' },
          { name: 'Фалафель з хумусом', imageUrl: '/images/products/kitchen/homemade-meals/falafel-hummus.jpg', description: 'Східна страва з нуту — готова до подачі з соусом' },
          // 🥟 Страви з тіста
          { name: 'Пельмені', imageUrl: '/images/products/kitchen/homemade-meals/dumplings.jpg', description: 'Заморожені або охолоджені' },
          { name: 'Вареники', imageUrl: '/images/products/kitchen/homemade-meals/varenyky.jpg', description: 'Традиційні вареники з картопляною начинкою' },
          { name: 'Лазанья', imageUrl: '/images/products/kitchen/homemade-meals/lasagna.jpg', description: 'Італійська страва з українською душею' },
          { name: 'Млинці', imageUrl: '/images/products/kitchen/homemade-meals/crepes.jpg', description: 'Тонкі налисники з мʼясною начинкою' },
          { name: 'Деруни', imageUrl: '/images/products/kitchen/homemade-meals/deruny.jpg', description: 'Картопляні млинці, хрусткі ззовні і мʼякі всередині' },
          // 🍚 Каші та запіканки
          { name: 'Запіканка', imageUrl: '/images/products/kitchen/homemade-meals/casserole.jpg', description: 'Десерт або сніданок — готовий до подачі' },
          { name: 'Каша з гарбуза', imageUrl: '/images/products/kitchen/homemade-meals/pumpkin-porridge.jpg', description: 'Солодка або солона, ідеально на сніданок' }
        ]
      },
      {
        name: 'categories.from-the-kitchen.subcategories.pasta-grains.name',
        slug: 'pasta-grains',
        emoji: '🍝🌾',
        imageUrl: '/images/subcategories/kitchen/pasta-grains.jpg',
        description: 'categories.from-the-kitchen.subcategories.pasta-grains.description',
        items: [
          { name: 'Домашня локшина', imageUrl: '/images/products/kitchen/pasta-grains/egg-noodles.jpg', description: 'З твердих сортів пшениці або з яйцем' },
          { name: 'Кус-кус', imageUrl: '/images/products/kitchen/pasta-grains/couscous.jpg', description: 'Дрібна крупа для швидких страв' },
          { name: 'Булгур', imageUrl: '/images/products/kitchen/pasta-grains/bulgur.jpg', description: 'Корисна крупа з пшениці' },
          { name: 'Паста з полби', imageUrl: '/images/products/kitchen/pasta-grains/spelt-pasta.jpg', description: 'Цільнозернова паста ручної роботи' },
          { name: 'Різотто (Арборіо)', imageUrl: '/images/products/kitchen/pasta-grains/arborio-rice.jpg', description: 'Італійський рис для кремового різотто' },
          { name: 'Фузіллі', imageUrl: '/images/products/kitchen/pasta-grains/fusilli.jpg', description: 'Спіральна паста, чудова для соусів' },
          { name: 'Пенне', imageUrl: '/images/products/kitchen/pasta-grains/penne.jpg', description: 'Трубчаста паста з гострими кінцями' },
          { name: 'Тальятеле', imageUrl: '/images/products/kitchen/pasta-grains/tagliatelle.jpg', description: 'Широка стрічкова паста, популярна з соусом болоньєзе' },
          { name: 'Фетучіні', imageUrl: '/images/products/kitchen/pasta-grains/fettuccine.jpg', description: 'Плоска довга паста, ідеальна з вершковими соусами' },
          { name: 'Спагеті', imageUrl: '/images/products/kitchen/pasta-grains/spaghetti.jpg', description: 'Класична довга кругла паста' },
          { name: 'Рігатоні', imageUrl: '/images/products/kitchen/pasta-grains/rigatoni.jpg', description: 'Великі трубочки з рифленою поверхнею' },
          { name: 'Фарфалле', imageUrl: '/images/products/kitchen/pasta-grains/farfalle.jpg', description: 'Паста у формі метеликів, гарна для салатів' },
          { name: 'Канелоні', imageUrl: '/images/products/kitchen/pasta-grains/cannelloni.jpg', description: 'Великі трубки для фарширування та запікання' },
          { name: 'Лазанья', imageUrl: '/images/products/kitchen/pasta-grains/lasagna.jpg', description: 'Шари пасти для запіканки з соусами та сиром' },
          { name: 'Гноччі', imageUrl: '/images/products/kitchen/pasta-grains/gnocchi.jpg', description: 'Італійські картопляні кльоцки' },
          { name: 'Тортеліні', imageUrl: '/images/products/kitchen/pasta-grains/tortellini.jpg', description: 'Маленькі фаршировані кільця з тіста' },
          { name: 'Равіолі', imageUrl: '/images/products/kitchen/pasta-grains/ravioli.jpg', description: 'Паста з начинкою, зварена або запечена' },
          { name: 'Кіноа', imageUrl: '/images/products/kitchen/pasta-grains/quinoa.jpg', description: 'Білкова крупа з легкою текстурою' },
          { name: 'Полента', imageUrl: '/images/products/kitchen/pasta-grains/polenta.jpg', description: 'Крупа з кукурудзи для каші або запікання' },
          { name: 'Ячна крупа', imageUrl: '/images/products/kitchen/pasta-grains/barley-grits.jpg', description: 'Традиційна українська крупа' },
          { name: 'Орзо', imageUrl: '/images/products/kitchen/pasta-grains/orzo.jpg', description: 'Паста у формі рисинок, ідеальна для салатів' },
          { name: 'Гречана паста (соба)', imageUrl: '/images/products/kitchen/pasta-grains/soba.jpg', description: 'Японська локшина з гречки' }
        ]
      },
      {
        name: 'categories.from-the-kitchen.subcategories.savory-spreads-sauces.name',
        slug: 'savory-spreads-sauces',
        emoji: '🧄🫙',
        imageUrl: '/images/subcategories/kitchen/savory-spreads-sauces.jpg',
        description: 'categories.from-the-kitchen.subcategories.savory-spreads-sauces.description',
        items: [
          { name: 'Песто з базиліку', imageUrl: '/images/products/kitchen/savory-spreads-sauces/pesto.jpg', description: 'Свіжий зелений соус з домашнього базиліку' },
          { name: 'Хумус', imageUrl: '/images/products/kitchen/savory-spreads-sauces/hummus.jpg', description: 'Ніжна паста з нуту, з оливковою олією' },
          { name: 'Часникова паста', imageUrl: '/images/products/kitchen/savory-spreads-sauces/garlic-spread.jpg', description: 'Гострий намаз для м’яса або хліба' },
          { name: 'Аджика', imageUrl: '/images/products/kitchen/savory-spreads-sauces/adjika.jpg', description: 'Гострий соус за домашнім рецептом' }
        ]
      },
      {
        name: 'categories.from-the-kitchen.subcategories.jams-preserves.name',
        slug: 'jams-preserves',
        emoji: '🍓🥫',
        imageUrl: '/images/subcategories/kitchen/jams-preserves.jpg',
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
        imageUrl: '/images/subcategories/kitchen/ferments-vinegars.jpg',
        description: 'categories.from-the-kitchen.subcategories.ferments-vinegars.description',
        items: [
          { name: 'Квашена капуста', imageUrl: '/images/products/sauerkraut.jpg', description: 'З ферментованої капусти без оцту' },
          { name: 'Огірки квашені', imageUrl: '/images/products/pickles.jpg', description: 'З натуральним бродінням' },
          { name: 'Яблучний оцет', imageUrl: '/images/products/apple-vinegar.jpg', description: 'Домашній, нефільтрований оцет' },
          { name: 'Кімчі', imageUrl: '/images/products/kimchi.jpg', description: 'Пряна корейська капуста — ферментована вдома' }
        ]
      },
      {
        name: 'categories.from-the-kitchen.subcategories.beverages.name',
        slug: 'beverages',
        emoji: '☕🍷',
        imageUrl: '/images/subcategories/kitchen/beverages.jpg',
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
        imageUrl: '/images/subcategories/kitchen/cheese-cured-meats.jpg',
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
        imageUrl: '/images/subcategories/kitchen/sweet-treats.jpg',
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
        imageUrl: '/images/subcategories/handmade/woodcrafts.jpg',
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
        imageUrl: '/images/subcategories/handmade/leather-goods.jpg',
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
        imageUrl: '/images/subcategories/handmade/metalwork-tools.jpg',
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
        imageUrl: '/images/subcategories/handmade/natural-dyes-fibers.jpg',
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
        imageUrl: '/images/subcategories/handmade/printed-materials.jpg',
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
        imageUrl: '/images/subcategories/handmade/upcycled-products.jpg',
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
        imageUrl: '/images/subcategories/handmade/pottery-ceramics.jpg',
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
        imageUrl: '/images/subcategories/handmade/textiles-weaving.jpg',
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
        imageUrl: '/images/subcategories/handmade/fine-art-prints.jpg',
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
        imageUrl: '/images/subcategories/handmade/jewelry.jpg',
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
        imageUrl: '/images/subcategories/handmade/music-media.jpg',
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
        imageUrl: '/images/subcategories/handmade/artisan-stationery.jpg',
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
        imageUrl: '/images/subcategories/wellness/wellness-sessions.jpg',
        description: 'categories.wellness-care.subcategories.wellness-sessions.description',
        items: [
          { name: 'Релакс масаж', imageUrl: '/images/products/relax-massage.jpg', description: 'Професійний масаж для зняття напруги' },
          { name: 'Сауна та ІЧ-терапія', imageUrl: '/images/products/infrared-sauna.jpg', description: "Очищення тіла та зниження м'язового напруження" },
          { name: 'Таласотерапія', imageUrl: '/images/products/thalasotherapy.jpg', description: 'Процедури з морськими мінералами для оздоровлення шкіри та тіла' },
          { name: 'СПА-процедури', imageUrl: '/images/products/spa-treatments.jpg', description: 'Комплексний догляд за тілом' },    
          { name: 'Фізіотерапія', imageUrl: '/images/products/physiotherapy.jpg', description: 'Відновлення після травм або хронічного болю' },
          { name: 'Чан на травах', imageUrl: '/images/products/herbal-hot-tub.jpg', description: 'Природне відновлення в гарячій воді з лікувальними травами' },
          { name: 'Апітерапія', imageUrl: '/images/products/apitherapy.jpg', description: 'Оздоровчі процедури з використанням продуктів бджільництва' },
          { name: 'Гідромасаж', imageUrl: '/images/products/hydro-massage.jpg', description: 'Водні процедури для глибокого розслаблення' },
          { name: 'Іпотерапія', imageUrl: '/images/products/hippotherapy.jpg', description: 'Терапія з конем для покращення емоційного та фізичного стану' },
          { name: 'Фасціальний реліз', imageUrl: '/images/products/myofascial-release.jpg', description: "Мануальна техніка для зменшення напруги в м'язах" },
          { name: 'Соляна кімната', imageUrl: '/images/products/salt-room.jpg', description: 'Інгаляції мінеральною сіллю для дихальної системи' },
          { name: 'Кріотерапія', imageUrl: '/images/products/cryotherapy.jpg', description: 'Охолоджувальні процедури для зменшення запалення' }
        ],
      },
      {
        name: 'categories.wellness-care.subcategories.natural-skincare-bodycare.name',
        slug: 'natural-skincare-bodycare',
        emoji: '🧴🌿',
        imageUrl: '/images/subcategories/wellness/skincare-bodycare.jpg',
        description: 'categories.wellness-care.subcategories.natural-skincare-bodycare.description',
        items: [
          { name: 'Органічні креми', imageUrl: '/images/products/organic-cream.jpg', description: 'Зволожуючі засоби без синтетики' },
          { name: 'Мило ручної роботи', imageUrl: '/images/products/handmade-soap.jpg', description: 'Ніжне очищення з рослинними оліями' },
          { name: 'Натуральні шампуні', imageUrl: '/images/products/natural-shampoo.jpg', description: 'Безсульфатні формули для щоденного використання' },
          { name: 'Дезодоранти', imageUrl: '/images/products/natural-deodorant.jpg', description: 'Безпечний захист без алюмінію та парабенів' },
          { name: 'Засоби для гоління', imageUrl: '/images/products/aftershave.jpg', description: 'Заспокійливі формули без спирту' },
          { name: 'Скраби', imageUrl: '/images/products/body-scrub.jpg', description: 'Натуральне очищення та відлущування' },
          { name: 'Масла та олії', imageUrl: '/images/products/body-oil.jpg', description: 'Поживні олії для здорової шкіри' },
          { name: 'Бальзами', imageUrl: '/images/products/lip-balm.jpg', description: 'Захист та догляд за губами на основі натуральних інгредієнтів' },
          { name: 'Тоніки та лосьйони', imageUrl: '/images/products/face-toner.jpg', description: 'Очищення та відновлення балансу шкіри' },
          { name: 'Маски', imageUrl: '/images/products/face-mask.jpg', description: 'Натуральне живлення для сяйва шкіри' },
          { name: 'Бомбочки для ванни', imageUrl: '/images/products/bath-bombs.jpg', description: 'Релакс і догляд під час прийняття ванни' },
        ],
      },
      {
        name: 'categories.wellness-care.subcategories.herbal-products-remedies.name',
        slug: 'herbal-products-remedies',
        emoji: '🍵🌱',
        imageUrl: '/images/subcategories/wellness/herbal-remedies.jpg',
        description: 'categories.wellness-care.subcategories.herbal-products-remedies.description',
        items: [
          { name: 'Трав’яні чаї', imageUrl: '/images/products/herbal-tea.jpg', description: 'Суміші лікарських трав для підтримки здоров’я' },
          { name: 'Настоянки', imageUrl: '/images/products/herbal-tincture.jpg', description: 'Концентрований рослинний екстракт для внутрішнього застосування' },
          { name: 'Мазі', imageUrl: '/images/products/herbal-salve.jpg', description: 'Місцеве застосування для загоєння шкіри та зняття запалень' },
          { name: 'Сиропи від кашлю', imageUrl: '/images/products/herbal-syrup.jpg', description: 'Натуральні сиропи з трав для підтримки дихальної системи' },
          { name: 'Олії з травами', imageUrl: '/images/products/herbal-oil.jpg', description: 'Настої олій з лікарськими рослинами для масажу або догляду за шкірою' },
          { name: 'Лікарські трави', imageUrl: '/images/products/dried-herbs.jpg', description: 'Збір трав для самостійного приготування чаїв та настоїв' },
          { name: 'Компреси', imageUrl: '/images/products/herbal-compress.jpg', description: 'Трав’яні пакети для зняття м’язової напруги та болю' },
          { name: 'Засоби для інгаляцій', imageUrl: '/images/products/herbal-inhalation.jpg', description: 'Трав’яні суміші для полегшення дихання' },
          { name: 'Трав’яні ванни', imageUrl: '/images/products/herbal-bath.jpg', description: 'Суміші для ванн з заспокійливим та антисептичним ефектом' },
          { name: 'Бальзами', imageUrl: '/images/products/herbal-balm.jpg', description: 'Бальзами з ефірними оліями для зменшення болю і запалення' },
          { name: 'Трав’яні подушки', imageUrl: '/images/products/herbal-pillow.jpg', description: 'Аромаподушки з лікарськими травами для сну та розслаблення' },
          { name: 'Зубні порошки', imageUrl: '/images/products/herbal-tooth-powder.jpg', description: 'Натуральна альтернатива пастам на основі м’яти, шавлії та гвоздики' }
        ],
      },
      {
        name: 'categories.wellness-care.subcategories.aromatherapy-candles.name',
        slug: 'aromatherapy-candles',
        emoji: '🕯️🌸',
        imageUrl: '/images/subcategories/wellness/aromatherapy-candles.jpg',
        description: 'categories.wellness-care.subcategories.aromatherapy-candles.description',
        items: [
          { name: 'Натуральні свічки', imageUrl: '/images/products/soy-candle.jpg', description: 'Екологічні свічки з натуральним ароматом' },
          { name: 'Аромасвічки', imageUrl: '/images/products/aroma-candle.jpg', description: 'Свічки з натурального воску з ефірними оліями' },
          { name: 'Аромакомплект', imageUrl: '/images/products/aroma-kit.jpg', description: 'Комплекти з аромамаслами, свічками та дифузорами' },
          { name: 'Ефірні олії', imageUrl: '/images/products/essential-oils.jpg', description: 'Натуральні олії для масажу, інгаляцій або дифузорів' },
          { name: 'Саше з травами', imageUrl: '/images/products/herbal-sachet.jpg', description: 'Ароматичні мішечки для білизни, шаф або подушок' },
          { name: 'Воскові мілти', imageUrl: '/images/products/wax-melts.jpg', description: 'Ароматичний віск для плавлення у аромалампах' },
          { name: 'Масажні свічки', imageUrl: '/images/products/massage-candle.jpg', description: 'Свічки, які перетворюються на теплу масажну олію' },
          { name: 'Спреї для кімнати', imageUrl: '/images/products/room-spray.jpg', description: 'Освіжувачі повітря на основі натуральних ароматів' },
        ],
      },
      {
        name: 'categories.wellness-care.subcategories.mental-wellness-coaching.name',
        slug: 'mental-wellness-coaching',
        emoji: '🧠💬',
        imageUrl: '/images/subcategories/wellness/mental-wellness-coaching.jpg',
        description: 'categories.wellness-care.subcategories.mental-wellness-coaching.description',
        items: [
          { name: 'Сесія з психологом', imageUrl: '/images/products/psych-consultation.jpg', description: 'Професійна допомога для покращення настрою та  подолання життєвих труднощів' },
          { name: 'Стрес-менеджмент', imageUrl: '/images/products/stress-coaching.jpg', description: 'Підтримка у знятті стресу та тривоги' },
          { name: 'Сімейна терапія', imageUrl: '/images/products/family-therapy.jpg', description: 'Покращення взаєморозуміння та комунікації в родині' },
          { name: 'Для дітей і підлітків', imageUrl: '/images/products/child-therapy.jpg', description: 'Делікатна допомога дітям у вирішенні емоційних питань' },
          { name: 'Групова терапія', imageUrl: '/images/products/group-therapy.jpg', description: 'Спільна робота над емоціями в підтримуючому колі' },
          { name: 'Емоційний інтелект', imageUrl: '/images/products/emotional-intelligence.jpg', description: 'Розвиток навичок розпізнавання та керування емоціями' },
          { name: 'Коучинг-сесії', imageUrl: '/images/products/coaching-session.jpg', description: 'Допомога у досягненні цілей і розкритті потенціалу' },
          { name: 'Коучинг лідерства', imageUrl: '/images/products/leadership-coaching.jpg', description: 'Розвиток управлінських навичок та впевненості' },
          { name: 'Кар’єрний коучинг', imageUrl: '/images/products/career-coaching.jpg', description: 'Підтримка у виборі професійного шляху та розвитку кар’єри' },
          { name: 'Коучинг для бізнесу', imageUrl: '/images/products/business-coaching.jpg', description: 'Підтримка підприємців у розвитку проектів та команд' },          
          { name: 'Кризова допомога', imageUrl: '/images/products/crisis-support.jpg', description: 'Невідкладна підтримка у важких емоційних станах' }
        ],
      },
      {
        name: 'categories.wellness-care.subcategories.movement-bodywork.name',
        slug: 'movement-bodywork',
        emoji: '🏃‍♀️💃',
        imageUrl: '/images/subcategories/wellness/movement-bodywork.jpg',
        description: 'categories.wellness-care.subcategories.movement-bodywork.description',
        items: [
          { name: 'Пілатес', imageUrl: '/images/products/pilates.jpg', description: 'Плавна робота з тілом для гнучкості та зміцнення м’язів' },
          { name: 'Функціонал', imageUrl: '/images/products/functional-training.jpg', description: 'Тренування для покращення рухових навичок у повсякденному житті' },
          { name: 'Розтяжка (стретчинг)', imageUrl: '/images/products/stretching.jpg', description: 'Заняття для розвитку гнучкості та зняття м’язової напруги' },
          { name: 'Реабілітація', imageUrl: '/images/products/rehab-exercise.jpg', description: 'Вправи для відновлення після травм або операцій' },
          { name: 'Заняття для осанки', imageUrl: '/images/products/posture-class.jpg', description: 'Покращення осанки та м’язового тонусу' },
          { name: 'Здорова спина', imageUrl: '/images/products/back-gym.jpg', description: 'Комплекси вправ для зміцнення та підтримки здоров’я хребта' },
          { name: 'З власною вагою', imageUrl: '/images/products/bodyweight-training.jpg', description: 'Сила та витривалість без додаткового обладнання' },
          { name: 'Балет', imageUrl: '/images/products/ballet.jpg', description: 'Грація, постава та сила через балетну техніку' },
          { name: 'Танцювальні заняття', imageUrl: '/images/products/dance-class.jpg', description: 'Розвивають гнучкість та координацію' },
          { name: 'Контемпорарі', imageUrl: '/images/products/contemporary-class.jpg', description: 'Сучасна техніка танцю з елементами імпровізації' },
          { name: 'Фітнес-танці', imageUrl: '/images/products/dance-fitness.jpg', description: 'Поєднання танцю і тренування в одному' },
          { name: 'Танці для дітей', imageUrl: '/images/products/kids-dance.jpg', description: 'Розвиток пластики, ритму та впевненості у русі' },
        ],
      },
      {
        name: 'categories.wellness-care.subcategories.fitness-training.name',
        slug: 'fitness-training',
        emoji: '💪🏃‍♀️',
        imageUrl: '/images/subcategories/wellness/fitness-training.jpg',
        description: 'categories.wellness-care.subcategories.fitness-training.description',
        items: [
          { name: 'Тренування 1-на-1', imageUrl: '/images/products/personal-training.jpg', description: 'Індивідуальні заняття з сертифікованим тренером' },
          { name: 'Групові заняття', imageUrl: '/images/products/group-fitness.jpg', description: 'Динамічні тренування в міні-групах' },
          { name: 'HIIT', imageUrl: '/images/products/hiit.jpg', description: 'Інтенсивні інтервальні вправи для спалювання жиру' },
          { name: 'Кросфіт', imageUrl: '/images/products/crossfit.jpg', description: 'Функціональні тренування високої інтенсивності' },
          { name: 'Кардіо тренування', imageUrl: '/images/products/cardio-training.jpg', description: 'Заняття для покращення серцево-судинної системи' },
          { name: 'Силові тренування', imageUrl: '/images/products/strength-training.jpg', description: 'Побудова м’язів та розвиток сили' },
          { name: 'TRX-тренування', imageUrl: '/images/products/trx-training.jpg', description: 'Тренування з використанням підвісних петель' },
          { name: 'Нордік-ходьба', imageUrl: '/images/products/nordic-walking.jpg', description: 'Аеробна активність з палицями для людей будь-якого віку' },
          { name: 'Аеробіка', imageUrl: '/images/products/aerobics.jpg', description: 'Енергійні тренування під музику для покращення витривалості' },
          { name: 'Для вагітних', imageUrl: '/images/products/prenatal-fitness.jpg', description: 'Безпечні вправи для майбутніх мам' },
          { name: 'Аквааеробіка', imageUrl: '/images/products/aqua-aerobics.jpg', description: 'Фітнес у воді для м’якого, але ефективного навантаження' },
          { name: 'Плавання', imageUrl: '/images/products/swimming.jpg', description: 'Тренування для всього тіла з низьким навантаженням на суглоби' },
        ],
      },
      {
        name: 'categories.wellness-care.subcategories.nutrition-meal-planning.name',
        slug: 'nutrition-meal-planning',
        emoji: '🥗📋',
        imageUrl: '/images/subcategories/wellness/nutrition.jpg',
        description: 'categories.wellness-care.subcategories.nutrition-meal-planning.description',
        items: [
          { name: 'Поради нутриціолога', imageUrl: '/images/products/nutrition-consultation.jpg', description: 'Індивідуальні рекомендації щодо харчування для здоров’я' },
          { name: 'Аналіз харчування', imageUrl: '/images/products/nutrition-analysis.jpg', description: 'Оцінка раціону та рекомендації щодо покращення' },
          { name: 'Планування раціону', imageUrl: '/images/products/meal-planning.jpg', description: 'Складання збалансованого меню на тиждень' },
          { name: 'Дієтичні програми', imageUrl: '/images/products/diet-programs.jpg', description: 'Персональні дієти для контролю ваги та самопочуття' },
          { name: 'Здорові перекуси', imageUrl: '/images/products/healthy-snacks.jpg', description: 'Рецепти та готові набори корисних закусок' },        
          { name: 'Майстер-класи', imageUrl: '/images/products/cooking-classes.jpg', description: 'Навчання приготуванню здорової їжі' },
          { name: 'Суперфуди', imageUrl: '/images/products/superfood.jpg', description: 'Корисні добавки до раціону' },
          { name: 'Меню для дітей', imageUrl: '/images/products/kids-menu.jpg', description: 'Рекомендації по харчуванню для дітей різного віку' },
          { name: 'Веган-раціон', imageUrl: '/images/products/vegan-meal-plan.jpg', description: 'Збалансоване меню без продуктів тваринного походження' },
          { name: 'Вегетаріанські меню', imageUrl: '/images/products/vegetarian-menu.jpg', description: 'Збалансовані плани харчування без м’яса' },
          { name: 'Для спортсменів', imageUrl: '/images/products/sports-nutrition.jpg', description: 'Оптимізоване харчування для підтримки фізичної активності' },          
          { name: 'При алергіях, діабеті', imageUrl: '/images/products/allergy-meal-plan.jpg', description: 'Індивідуальні меню з урахуванням харчових обмежень' },
        ],
      },
      {
        name: 'categories.wellness-care.subcategories.childcare-learning.name',
        slug: 'childcare-learning',
        emoji: '👶📚',
        imageUrl: '/images/subcategories/wellness/childcare.jpg',
        description: 'categories.wellness-care.subcategories.childcare-learning.description',
        items: [
          { name: 'Дитячий садок', imageUrl: '/images/products/kindergarten.jpg', description: 'Безпечний простір для догляду та розвитку дітей' },
          { name: 'Послуги няні', imageUrl: '/images/products/nanny.jpg', description: 'Професійний догляд за дитиною вдома чи на заходах' },
          { name: 'Прийом у педіатра', imageUrl: '/images/products/pediatrician.jpg', description: 'Медичний догляд та обстеження дітей різного віку' },
          { name: 'Розвиваючі заняття', imageUrl: '/images/products/development-classes.jpg', description: 'Ігри та вправи для гармонійного розвитку малюків' },
          { name: 'Репетиторство', imageUrl: '/images/products/tutoring.jpg', description: 'Індивідуальні уроки для покращення знань' },
          { name: 'Логопедичні послуги', imageUrl: '/images/products/speech-therapy.jpg', description: 'Корекція мовлення для дітей різного віку' },
          { name: 'Курси творчості', imageUrl: '/images/products/creative-courses.jpg', description: 'Малювання, ліплення та інші творчі заняття' },
          { name: 'Ранній розвиток', imageUrl: '/images/products/early-development.jpg', description: 'Заняття для дітей від народження до 3 років' },
          { name: 'Дитячий клуб', imageUrl: '/images/products/kids-club.jpg', description: 'Організація дозвілля та навчання для дітей' },
          { name: 'Вивчення мов', imageUrl: '/images/products/language-courses.jpg', description: 'Вивчення іноземних мов у дружній атмосфері' },
          { name: 'Підготовка до школи', imageUrl: '/images/products/school-prep.jpg', description: 'Підготовчі заняття для майбутніх першокласників' },
          { name: 'Дитячий психолог', imageUrl: '/images/products/child-psychologist.jpg', description: 'Психологічна підтримка та консультації для дітей' },
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
        name: 'categories.local-services.subcategories.home-garden-help.name',
        slug: 'home-garden-help',
        emoji: '🌻🧹',
        description: 'categories.local-services.subcategories.garden-home-help.description',
        items: [
          { name: 'Догляд за садом', imageUrl: '/images/products/garden-care.jpg', description: 'Покіс трави, обрізка кущів, посадка рослин' },
          { name: 'Прибирання дому', imageUrl: '/images/products/home-cleaning.jpg', description: 'Генеральне та регулярне прибирання' },
          { name: 'Малярні роботи', imageUrl: '/images/products/painting.jpg', description: 'Фарбування стін, реставрація поверхонь' },
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
