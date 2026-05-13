export type VenueRecord = {
  id: string;
  name: string;
  address: string;
  venueType: string;
  rating: number;
  nearestMetro: string[];
};

const venues: VenueRecord[] = [
  {
    id: 'severyane',
    name: 'Северяне',
    address: 'Большая Никитская, 12',
    venueType: 'Ресторан',
    rating: 4.8,
    nearestMetro: [
      'Арбатская',
      'Библиотека имени Ленина',
      'Александровский сад',
      'Охотный Ряд',
    ],
  },
  {
    id: 'daily-dose',
    name: 'Daily Dose',
    address: 'Покровка, 18/18',
    venueType: 'Кофейня',
    rating: 4.6,
    nearestMetro: ['Китай-город', 'Чистые пруды', 'Тургеневская', 'Курская'],
  },
  {
    id: 'biblioteka',
    name: 'Библиотека вкусов',
    address: 'Мясницкая, 24/7с1',
    venueType: 'Винный бар',
    rating: 4.7,
    nearestMetro: [
      'Чистые пруды',
      'Тургеневская',
      'Сретенский бульвар',
      'Лубянка',
    ],
  },
  {
    id: 'green-point',
    name: 'Green Point',
    address: 'Пятницкая, 43',
    venueType: 'Вегетарианское кафе',
    rating: 4.5,
    nearestMetro: ['Новокузнецкая', 'Третьяковская', 'Полянка', 'Добрынинская'],
  },
];

export default venues;
