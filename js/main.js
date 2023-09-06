const amountData = 25;
const ID_MIN = 1;
const ID_MAX = 25;
const generationRandomIdNumber = getRandomValue(ID_MIN, ID_MAX);
const MIN_URL = 1;
const MAX_URL = 25;
const generationRandomUrlNumber = getRandomValue(MIN_URL, MAX_URL);
const MIN_NUMBER_LIKES = 15;
const MAX_NUMBER_LIKES = 200;
const MIN_ID_COMMENT = 1;
const MAX_ID_COMMENT = 300;
const MIN_AVATAR_COMMENT = 1;
const MAX_AVATAR_COMMENT = 6;
const generationRandomIdComment = getRandomValue(MIN_ID_COMMENT, MAX_ID_COMMENT);
const MIN_COMMENT = 1;
const MAX_COMMENT = 10;
const PHOTO_DESCRIPTIONS = [
  'Какой шикарный вид на отель!!! Мы скоро тоже туда поедем!',
  'Надпись на указатели "путь к пляжу"',
  'Пляж и море - вот, что мне не хватает',
  'Красивая девушка с фотокамерой',
  'Два рисовых человечка принимают ванну в тарелке',
  'Крутая тачка!!!',
  'Диссерт из клубники',
  'Холодный морс из ягод',
  'Люди рады неожиданному гостю на пляже',
  'Крутая штука для обуви!!!',
  'Ограждение на пляже - красиво сделанно',
  'АУДИ на окрайне города',
  'Интересное блюдо, но есть бы его не стал',
  'КОТО-СУШИ',
  'Крутые "ТЯГИ"',
  'Эта картинки такая умиротворяющая',
  'Репетиция перед концертом',
  'Ммм шикарная тачка. Старая школа!',
  'Эта картинка меня заставляет тревожиться',
  'Вечерний вид на пляжные дома',
  'Вкусный обед!!! Рекомендую!!',
  'Солнечный заказ, так красиво!',
  'Крааааааабик))',
  'Классный концерт!!!',
  'Неожиданный гость)))',
];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ?!'
];
const NAMES = [
  'Александр', 'Анастасия', 'Андрей', 'Владислав', 'Валентина',
  'Георгий', 'Дарья', 'Дмитрий', 'Екатерина', 'Евгений',
  'Ирина', 'Илья', 'Ксения', 'Кирилл', 'Лариса',
  'Михаил', 'Марина', 'Никита', 'Ольга', 'Петр',
  'Светлана', 'Сергей', 'Татьяна', 'Федор', 'Юлия'
];

const getRandomNumber = (minNumber, maxNumber) => {
  const minId = Math.floor(Math.min(Math.abs(minNumber), Math.abs(maxNumber)));
  const maxId = Math.ceil(Math.max(Math.abs(minNumber), Math.abs(maxNumber)));
  const numberId = Math.floor(Math.random() * (maxId - minId + 1) + minId);
  return numberId;
};

function getRandomValue(min, max) {
  const idNumbers = [];
  return function () {
    let id = getRandomNumber(min, max);
    if (idNumbers.length >= (max - min + 1)) {
      return null;
    }
    while (idNumbers.includes(id)) {
      id = getRandomNumber(min, max);
    }
    idNumbers.push(id);
    return id;
  };
}

const generationCommentData = () => ({
  id: generationRandomIdComment(),
  avatar: `img/avatar-${getRandomNumber(MIN_AVATAR_COMMENT, MAX_AVATAR_COMMENT)}.svg`,
  message: COMMENTS[getRandomNumber(0, COMMENTS.length - 1)],
  name: NAMES[getRandomNumber(0, PHOTO_DESCRIPTIONS.length - 1)]
});

const generationPhotoData = () => ({
  id: generationRandomIdNumber(),
  url: `photos/${generationRandomUrlNumber()}.jpg`,
  description: PHOTO_DESCRIPTIONS[getRandomNumber(0, PHOTO_DESCRIPTIONS.length - 1)],
  likes: getRandomNumber(MIN_NUMBER_LIKES, MAX_NUMBER_LIKES),
  comments: Array.from({ length: getRandomNumber(MIN_COMMENT, MAX_COMMENT) }, generationCommentData)
});

const photoData = Array.from({ length: amountData }, generationPhotoData);
console.log(photoData);
