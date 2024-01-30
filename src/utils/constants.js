export const API_URL = 'https://api.alexmovies.nomoredomainsmonster.ru';
export const MOVIES_URL = 'https://api.nomoreparties.co';

export const USER_DATA_SUCCESS_MESSAGE = 'Данные успешно изменены.';
export const USER_DATA_ERROR_MESSAGE = 'При обновлении данных произошла ошибка.';
export const EMAIL_DATA_ERROR_MESSAGE = 'Пользователь с таким email уже существует.';
export const REGISTER_ERROR_MESSAGE = 'При регистрации пользователя произошла ошибка.';
export const LOGIN_ERROR_MESSAGE = 'При авторизации произошла ошибка.';
export const LOGIN_VALIDATION_ERROR_MESSAGE = 'Вы ввели неправильный логин или пароль.';
export const INPUT_REQUIRED_ERROR_MESSAGE = 'Поле не может быть пустым. ';
export const EMAIL_FORMAT_ERROR_VALIDATION = 'Некорректный E-mail. ';
export const NAME_ERROR_VALIDATION = 'Поле должно содержит только латиницу, кириллицу, пробел или дефис.';



export const NOT_FOUND_ERROR_MESSAGE = 'Ничего не найдено.';
export const REQUEST_ERROR_MESSAGE = `Во время запроса произошла ошибка.
Возможно, проблема с соединением или сервер недоступен.
Подождите немного и попробуйте ещё раз.`;
export const DURATION_SHORT_MOVIES = 40;
export const INPUT_SEARCH_ERROR = 'Нужно ввести ключевое слово';
export const NAME_LENGTH_ERROR_VALIDATION = 'Минимум 2 символа.';
export const NAME_SPACE_ERROR_VALIDATION = 'Введите ключевое слово.';

export const DEVICE_PARAMS = {
   desktop: {
      width: 1279,
      movies: {
         total: 16,
         more: 4,
         },
      },
   tablet: {
      width: 767,
      movies: {
         total: 8,
         more: 2,
         },
      },
   mobile: {
      width: 479,
      movies: {
         total: 5,
         more: 2,
      },
   },
};