"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    START: `
Привіт!
Я бот, що моніторить громадський транспорт. 
Просто надішли мені своє місцезнаходження та бажане місце прибуття. 
Я знайду найкоротший шлях і почну моніторинг. 
За хвилину до прибуття транспорту на зупинку, я попереджу тебе!

Аби розпочати введи команду '/find'
Для допомоги введи команду '/help'
`,
    SEND_YOUR_LOCATION: 'Надішли мені свою локацію! Це може бути текстова адреса або геомітка.',
    SEND_LOCATION: 'Тепер мені потрібне бажане місце прибуття',
    YOUR_DEPARTURES: `
Ось список твоїх збережених відправвлень
(можна вимкнути збір даних, вимкнувши статистику командою '/disable_statistic'):\n
`,
    YOUR_ARRIVALS: 'Нижче список твоїх пунктів призначення:\n',
    DEPARTURES_REMOVED: 'От і все! Усі відправлення видалено:)',
    ARRIVALS_REMOVED: 'Стільки прибирання! Тепер список пунктів призначення порожній.',
    STATISTIC_OFF: 'Статистику вимкнено, нові відправлення та прибуття не будуть зберігатись!',
    STATISTIC_ON: 'Збір даних увімкнено',
    HELP: `
Команди:

enable_statistic - Дозволити збір статистики
disable_statistic - Заборонити збір статистики
saved_departures - Збережені точки відправлення
saved_arrivals - Збережені місця прибуття 
remove_departures - Видалити усі відправлення
remove_arrivals - Видалити усі прибуття
help - Допомога та команди
find - Пошук місця та моніторинг
  `,
    BEST_WAY: 'Ось найкращий маршут та його найближча зупинка. За хвилину до прибуття до тебе надійде повідомлення.',
    NO_TRANSPORT: 'На жаль транспорту не знайдено. Прийдеться топати ніжками...',
    TRANSPORT_IS_CUMMING: 'Увага! На зупинку прибуває ваш транспорт.',
};
