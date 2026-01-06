export type Language = 'ru' | 'en' | 'lv';

export interface Translations {
  title: string;
  addWordTitle: string;
  translation: string;
  add: string;
  manage: string;
  listTitle: string;
  delete: string;
  check: string;
  noWords: string;
  trainer: string;
  settings: string;
  settingsTitle: string;
  apply: string;
  reset: string;
  resetStats: string;
  nouns: string;
  verbs: string;
  adjectives: string;
  mode_ru2lv: string;
  mode_lv2ru: string;
  mode_both: string;
  randomAll: string;
  skip: string;
  trainerTab: string;
  manageTab: string;
  settingsTab: string;
  word: string;
  decl1: string;
  decl2: string;
  decl3: string;
  decl4: string;
  decl5: string;
  decl6: string;
  duplicateTitle: string;
  duplicateExists: string;
  duplicateNew: string;
  duplicateConfirm: string;
  yes: string;
  no: string;
  myWords: string;
  wordAddedSuccess: string;
  total: string;
  search: string;
  searchWords: string;
  enterWord: string;
  enterLatvianWord: string;
  searchHint: string;
  wordNotFound: string;
  emptyWordList: string;
  emptyDeclensions: string;
  declensionsLoading: string;
  selectDeclension: string;
  addWordsOrPreset: string;
  selectPreset: string;
  deleteConfirm: string;
  level: string;
  wordType: string;
  translationMode: string;
  addWordButton: string;
  wordProgress: string;
  noData: string;
  settingsTip: string;
  listEmpty: string;
  saving: string;
  save: string;
  unsavedChanges: string;
  unsavedWarning: string;
  discard: string;
  selectConjugation: string;
  correctForm: string;
  emptyConjugations: string;
  conjugationsLoading: string;
  authTitle: string;
  authSubtitle: string;
  email: string;
  password: string;
  login: string;
  noAccount: string;
  register: string;
  haveAccount: string;
  sendCode: string;
  code: string;
  verifyCode: string;
  codeSent: string;
  invalidCode: string;
  invalidEmail: string;
  passwordShort: string;
  sendCodeError: string;
  authError: string;
  accountExists: string;
  logout: string;
}

export const translations: Record<Language, Translations> = {
  ru: {
    title: "Тренировка слов",
    addWordTitle: "Добавить слово",
    translation: "Перевод",
    add: "Добавить",
    manage: "Управлять словами",
    listTitle: "Список слов",
    delete: "Удалить",
    check: "Проверить",
    noWords: "Слова не найдены",
    trainer: "Загрузка...",
    settings: "Настройки",
    settingsTitle: "Настройки",
    apply: "Применить",
    reset: "Сбросить",
    resetStats: "Сброс счёта",
    nouns: "Существительные",
    verbs: "Глаголы",
    adjectives: "Прилагательные",
    mode_ru2lv: "С русского на латышский",
    mode_lv2ru: "С латышского на русский",
    mode_both: "Все вместе",
    randomAll: "Случайные слова",
    skip: "Пропустить",
    trainerTab: "Слова",
    manageTab: "Склонения",
    settingsTab: "Спряжения",
    word: "Слово",
    decl1: "1 склонение",
    decl2: "2 склонение",
    decl3: "3 склонение",
    decl4: "4 склонение",
    decl5: "5 склонение",
    decl6: "6 склонение",
    duplicateTitle: "Дубликат слова",
    duplicateExists: "Уже есть в базе:",
    duplicateNew: "Вы пытаетесь добавить:",
    duplicateConfirm: "Всё равно добавить?",
    yes: "Да",
    no: "Нет",
    myWords: "Мои слова",
    wordAddedSuccess: "Слово успешно добавлено!",
    total: "Всего",
    search: "Поиск",
    searchWords: "Поиск слов",
    enterWord: "Введите слово",
    enterLatvianWord: "Введите слово...",
    searchHint: "Можно ввести слово на другом языке",
    wordNotFound: "Слово не найдено",
    emptyWordList: "Список слов",
    emptyDeclensions: "Склонения",
    declensionsLoading: "Склонения загружаются из базы данных",
    selectDeclension: "Выберите правильное склонение:",
    addWordsOrPreset: "Добавьте слова ниже или выберите пресет в настройках",
    selectPreset: "Выберите готовый набор слов для тренировки",
    noData: "Нет данных",
    deleteConfirm: "Удалить слово",
    level: "Уровень сложности",
    wordType: "Тип слов",
    translationMode: "Режимы",
    addWordButton: "Добавить слово",
    wordProgress: "Слово",
    settingsTip: "Совет: Используйте кнопку \"Сбросить\" чтобы вернуться к своим словам",
    listEmpty: "Список пуст",
    saving: "Сохранение...",
    save: "Сохранить",
    unsavedChanges: "Несохранённые изменения",
    unsavedWarning: "У вас есть несохранённые изменения. Что вы хотите сделать?",
    discard: "Не сохранять",
    selectConjugation: "Выберите правильное спряжение:",
    correctForm: "Правильная форма",
    emptyConjugations: "Спряжения",
    conjugationsLoading: "Спряжения загружаются из базы данных",
    authTitle: "Вход",
    authSubtitle: "Введите email и пароль",
    email: "Email",
    password: "Пароль",
    login: "Войти",
    noAccount: "Нет аккаунта?",
    register: "Зарегистрироваться",
    haveAccount: "Уже есть аккаунт?",
    sendCode: "Отправить код",
    code: "Код из письма",
    verifyCode: "Подтвердить",
    codeSent: "Код отправлен на почту",
    invalidCode: "Неверный код",
    invalidEmail: "Некорректный email",
    passwordShort: "Пароль должен быть не менее 6 символов",
    sendCodeError: "Не удалось отправить код. Проверьте настройки Google Apps.",
    authError: "Неверный логин или пароль",
    accountExists: "Аккаунт с этой почтой уже зарегистрирован",
    logout: "Выйти"
  },
  en: {
    title: "Word Trainer",
    addWordTitle: "Add word",
    translation: "Translation",
    add: "Add",
    manage: "Manage words",
    listTitle: "Word list",
    delete: "Delete",
    check: "Check",
    noWords: "Words not found",
    trainer: "Loading...",
    settings: "Settings",
    settingsTitle: "Settings",
    apply: "Apply",
    reset: "Reset",
    resetStats: "Reset Score",
    nouns: "Nouns",
    verbs: "Verbs",
    adjectives: "Adjectives",
    mode_ru2lv: "From Russian to Latvian",
    mode_lv2ru: "From Latvian to Russian",
    mode_both: "Mixed",
    randomAll: "Random words",
    skip: "Skip",
    trainerTab: "Words",
    manageTab: "Declensions",
    settingsTab: "Conjugations",
    word: "Word",
    decl1: "1st declension",
    decl2: "2nd declension",
    decl3: "3rd declension",
    decl4: "4th declension",
    decl5: "5th declension",
    decl6: "6th declension",
    duplicateTitle: "Duplicate word",
    duplicateExists: "Already in database:",
    duplicateNew: "You are trying to add:",
    duplicateConfirm: "Add anyway?",
    yes: "Yes",
    no: "No",
    myWords: "My words",
    wordAddedSuccess: "Word added successfully!",
    total: "Total",
    search: "Search",
    searchWords: "Search Words",
    enterWord: "Enter a word",
    enterLatvianWord: "Enter word...",
    searchHint: "You can enter a word in another language",
    wordNotFound: "Word not found",
    emptyWordList: "Word list",
    emptyDeclensions: "Declensions",
    declensionsLoading: "Declensions are loading from the database",
    selectDeclension: "Select the correct declension:",
    addWordsOrPreset: "Add words below or select a preset in settings",
    selectPreset: "Select a ready-made set of words for training",
    noData: "No data",
    deleteConfirm: "Delete word",
    level: "Difficulty level",
    wordType: "Word type",
    translationMode: "Translation mode",
    addWordButton: "Add word",
    wordProgress: "Word",
    settingsTip: "Tip: Use the \"Reset\" button to return to your personal words",
    listEmpty: "List is empty",
    saving: "Saving...",
    save: "Save",
    unsavedChanges: "Unsaved changes",
    unsavedWarning: "You have unsaved changes. What would you like to do?",
    discard: "Don't save",
    selectConjugation: "Select the correct conjugation:",
    correctForm: "Correct form",
    emptyConjugations: "Conjugations",
    conjugationsLoading: "Conjugations are loading from the database",
    authTitle: "Sign in",
    authSubtitle: "Enter email and password",
    email: "Email",
    password: "Password",
    login: "Log in",
    noAccount: "No account?",
    register: "Register",
    haveAccount: "Already have an account?",
    sendCode: "Send code",
    code: "Email code",
    verifyCode: "Verify",
    codeSent: "Code sent to your email",
    invalidCode: "Invalid code",
    invalidEmail: "Invalid email",
    passwordShort: "Password must be at least 6 characters",
    sendCodeError: "Could not send the code. Check Google Apps settings.",
    authError: "Invalid login or password",
    accountExists: "Account with this email is already registered",
    logout: "Log out"
  },
  lv: {
    title: "Vārdu treniņš",
    addWordTitle: "Pievienot vārdu",
    translation: "Tulkojums",
    add: "Pievienot",
    manage: "Pārvaldīt vārdus",
    listTitle: "Vārdu saraksts",
    delete: "Dzēst",
    check: "Pārbaudīt",
    noWords: "Vārdi nav atrasti",
    trainer: "Ielāde...",
    settings: "Iestatījumi",
    settingsTitle: "Iestatījumi",
    apply: "Apstiprināt",
    reset: "Atiestatīt",
    resetStats: "Nullēt rezultātu",
    nouns: "Lietvārdi",
    verbs: "Darbības vārdi",
    adjectives: "Īpašības vārdi",
    mode_ru2lv: "No krievu uz latviešu",
    mode_lv2ru: "No latviešu uz krievu",
    mode_both: "Abi kopā",
    randomAll: "Nejauši vārdi",
    skip: "Izlaist",
    trainerTab: "Vārdi",
    manageTab: "Locījumi",
    settingsTab: "Konjugācijas",
    word: "Vārds",
    decl1: "1. deklinācija",
    decl2: "2. deklinācija",
    decl3: "3. deklinācija",
    decl4: "4. deklinācija",
    decl5: "5. deklinācija",
    decl6: "6. deklinācija",
    duplicateTitle: "Vārda dublikāts",
    duplicateExists: "Jau ir datubāzē:",
    duplicateNew: "Mēģini pievienot:",
    duplicateConfirm: "Vai tiešām pievienot?",
    yes: "Jā",
    no: "Nē",
    myWords: "Mani vārdi",
    wordAddedSuccess: "Vārds veiksmīgi pievienots!",
    total: "Kopā",
    search: "Meklēt",
    searchWords: "Meklēt vārdus",
    enterWord: "Ievadiet vārdu",
    enterLatvianWord: "Ievadiet vārdu...",
    searchHint: "Varat ievadīt vārdu citā valodā",
    wordNotFound: "Vārds nav atrasts",
    emptyWordList: "Vārdu saraksts",
    emptyDeclensions: "Locījumi",
    declensionsLoading: "Locījumi tiek ielādēti no datubāzes",
    selectDeclension: "Izvēlieties pareizo locījumu:",
    addWordsOrPreset: "Pievienojiet vārdus zemāk vai izvēlieties priekšuzstādījumu iestatījumos",
    selectPreset: "Izvēlieties gatavu vārdu komplektu apmācībai",
    noData: "Nav datu",
    deleteConfirm: "Dzēst vārdu",
    level: "Grūtības pakāpe",
    wordType: "Vārda tips",
    translationMode: "Tulkošanas režīms",
    addWordButton: "Pievienot vārdu",
    wordProgress: "Vārds",
    settingsTip: "Padoms: Izmantojiet pogu \"Atiestatīt\", lai atgrieztos pie saviem vārdiem",
    listEmpty: "Saraksts ir tukšs",
    saving: "Saglabā...",
    save: "Saglabāt",
    unsavedChanges: "Nesaglabātas izmaiņas",
    unsavedWarning: "Jums ir nesaglabātas izmaiņas. Ko jūs vēlaties darīt?",
    discard: "Nesaglabāt",
    selectConjugation: "Izvēlieties pareizo konjugāciju:",
    correctForm: "Pareizā forma",
    emptyConjugations: "Konjugācijas",
    conjugationsLoading: "Konjugācijas tiek ielādētas no datubāzes",
    authTitle: "Pieslēgties",
    authSubtitle: "Ievadiet e-pastu un paroli",
    email: "E-pasts",
    password: "Parole",
    login: "Ienākt",
    noAccount: "Nav konta?",
    register: "Reģistrēties",
    haveAccount: "Jau ir konts?",
    sendCode: "Nosūtīt kodu",
    code: "Kods no e-pasta",
    verifyCode: "Apstiprināt",
    codeSent: "Kods nosūtīts uz e-pastu",
    invalidCode: "Nederīgs kods",
    invalidEmail: "Nederīgs e-pasts",
    passwordShort: "Parolei jābūt vismaz 6 simboli",
    sendCodeError: "Neizdevās nosūtīt kodu. Pārbaudiet Google Apps iestatījumus.",
    authError: "Nepareizs lietotājvārds vai parole",
    accountExists: "Konts ar šo e-pastu jau ir reģistrēts",
    logout: "Iziet"
  }
};
