/**
 * Проверяет строку на соответствие контрольной сумме, вычисленной по алгоритму PamMd5.
 * @param {string} str - Проверяемая строка.
 * @param {string} arg - Контрольная сумма.
 * @returns {boolean} Результат.
 * @example
 * ```
 * CheckPamMd5(str,arg)
 * ```
 */
declare function CheckPamMd5(str: string, arg: string): boolean;

/**
 * Возвращает true, если пользователем в буфер `Clipboard` скопировано нечто заданного формата.
 * Возвращает false, если нет (буфер пуст или его содержимое не того формата).
 * Обычно формат `text/plain` или `text/html`.
 * @param {string} format - Наименование формата.
 * @returns {boolean} Результат.
 */
declare function ClipboardFormatAvailable(format: string): boolean;

/**
 * Вычисляет контрольную сумму по алгоритму CRC.
 * @param {string} arg - Строка, содержащая массив байт.
 * @returns {number} Контрольная сумма.
 */
declare function CRC(arg: string): number;

/**
 * Выдает сообщение, содержащее значение параметра.
 * На сервере сообщение записывается в журнал 'xhttp',
 * на рабочем месте - в виде всплывающего окна {@link MsgBox}.
 * @param {T} val - Значение.
 * @returns {T} Значение.
 * @example
 * ```
 * LoadUrlData(alert(url));
 * ```
 */
declare function alert<T>(val: T): T;

/**
 * Выдает true, если модуль, наименование которого указано в качестве аргумента,
 * используется программой, и false, если указанный модуль программой не используется.
 * Наименования стандартных модулей считывается из файла описания структуры приложения,
 * наименование подключаемого модуля считывается из файла первичных настроек
 * при запуске исполнимого файла. Функция используется, например, в ядре программы,
 * если необходимо по-разному его настраивать для работы с различными подключаемыми модулями.
 * @param {string} moduleName - Наименование модуля.
 * @example
 * ```
 * AppModuleUsed("module_datex");
 * ```
 * @returns {boolean} Результат.
 */
declare function AppModuleUsed(moduleName: string): boolean;

/**
 * Вызывает исключение специального типа, аналогичное нажатию кнопки "Cancel" пользователями.
 * Позволяет генерировать исключение, на которое не будет выдаваться сообщение об ошибке.
 */
declare function Cancel(): never;

/**
 * Проверяет не должен ли текущий поток завершиться (обычно после прерывания его пользователем).
 * Если да, вызывает исключение аналогично функции {@link Cancel}().
 * @returns {undefined} Если поток вызывает в цикле функцию {@link Sleep}(),
 * либо любую функцию, вызывающее сетевой запрос, то вызывать функцию
 * {@link CheckCurThread}() нет необходимости, поскольку вышеназванные функции
 * сами проверяют запрос на отмену выполнения потока.
 */
declare function CheckCurThread(): undefined;

/**
 * Увеличивает яркость цвета, переданного в качестве аргумента.
 * @param {string} color - Цвет в формате RGB.
 * @param {number} ratio - Действительное число обозначающее на сколько увеличивается/уменьшается яркость.
 * @returns {string} - Результат.
 */
declare function ColorNewBrightness(color: string, ratio: number): string;

/**
 * Сигнализирует о завершении длительного процесса с упрощенным индикатором,
 * начатым при помощи функции {@link StartModalTask}().
 */
declare function FinishModalTask(): undefined;

/**
 * Извлекает содержимое составного документа html
 * (с вложенными файлами в формате <compound-attc/>) в файл,
 * сохраняя все вложенные файлы относительно него.
 * @param {any} html - Составной html.
 * @param {string} fileUrl - Url файла.
 */
declare function ExtractCompoundHtml(html: string, fileUrl: string): undefined;

/**
 * Выполняет заданный код в основном потоке на следующее системное событие.
 * Функция помещает этот код в очередь, и на следующем системном событии он выполняется.
 * Эта функция блокирует поток, и дожидается окончания выполнения вызванного кода.
 * Смотрите также {@link EvalAsync}.
 * @param {string} code - Код, который необходимо выполнить.
 * @param {T} args - Последующие аргументы - передаются выполняемому коду.
 */
declare function EvalSync<T>(code: string, args: T): void;

/**
 * Включает/выключает заданный журнал.
 * @param {string} name - Название журнала.
 * @param {boolean} [enable=true] - Включить/выключить (Bool).
 * @example
 * ```
 * EnableLog("xquery", true);
 * ```
 */
declare function EnableLog(name: string, enable?: boolean): undefined;

/**
 * Выполняет заданный код в основном потоке на следующее системное событие.
 * Обычно, если код выполняется в отдельном потоке, из него нельзя обращаться к пользовательскому интерфейсу.
 * Если же нужно сделать, например, обновление экрана, то этот код нужно вызывать через EvalAsync.
 * Функция помещает этот код в очередь, и на следующем системном событии он выполняется.
 * См. Также {@link EvalSync}.
 * @param {string} code - Код, который необходимо выполнить.
 * @param {T} args - И последующие аргументы - передаются выполняемому коду. Необязательные аргументы.
 */
declare function EvalAsync<T>(code: string, args: T): void;

/**
 * Возвращает значение системной переменной окружения.
 * @param {string} name - Имя переменной.
 * @returns {string} Значение.
 * GetSysEnvironmentVariable( 'windir' );.
 */
declare function GetSysEnvironmentVariable(name: string): string;

/**
 * Возвращает имя пользователя операционной системы под которым выполняется текущий процесс.
 * @returns {string} Результат.
 */
declare function GetSysUserName(): string;

/**
 * Включает заданный журнал.
 * В отличие от функции {@link EnableLog}() позволяет задать дополнительные опции ведения журнала.
 * Возможные опции: life-time - период, на который заводится новый файла журнала ("day", "month", "permanent").
 * По умолчанию свой файл журнала заводится на каждую дату ("day") `base-dir` - директория,
 * в которой будут заводиться журнал.
 * По умолчанию используется директория `Logs` в установочной директории `use-std-event-prefix` - включать в начало
 * каждой строки журнала стандартный префикс (дата, время, Id потока) `boolean`.
 * По умолчанию `true`.
 * `header-str` - строка заголовка, добавляемая в начало каждого нового файла журнала.
 * По умолчанию строка заголовка не добавляется.
 * @param {string} name - Название журнала.
 * @param {string} options - Набор опций вида 'param1=value1;param2=value2;...'.
 * @returns {undefined}
 * @example
 * ```
 * EnableLogExt("web-request", "header-str=date\turl\tquery;use-std-event-prefix=0");
 * ```
 */
declare function EnableLogExt(name: string, options?: string): undefined;

/**
 * Проверяет, не нажата ли какая-либо клавиша в данный момент.
 * Обычно проверятся Ctrl или Shift.
 * @param {number} arg1 - Код клавиши.
 * @returns {boolean} Результат.
 */
declare function IsKeyPressed(arg1: number): boolean;

/**
 * Конструктор объекта MailMessage, предназначенной для хранения E-mail - сообщения.
 * Объект строится по форме x-app://app/sx_mail_message.xmd и является обычным объектом типа XmlElem.
 * @returns {MailMessage} Результат.
 */
declare function MailMessage(): MailMessage;

/**
 * Делает запись в файл лога определенного типа.
 * @param {string} type - Тип лога.
 * @param {string} text - Текст.
 * @example
 * ```
 * LogEvent(type, text).
 * ```
 */
declare function LogEvent(type: string, text: string): undefined;

/**
 * Создает объект типа MailMessage на основании почтового сообщения в формате MIME.
 * @param {string} mimeData - Почтовое сообщение в формате MIME.
 * @returns {MailMessage} Результат.
 */
declare function MailMessageFromMimeStr(mimeData: string): MailMessage;

/**
 * Вычисляет контрольную сумму по алгоритму Md5 и возвращает результат в бинарном формате (массив байт).
 * @param {string} data - Строка, содержащая массив байт.
 * @returns {string} Контрольная сумма.
 */
declare function Md5(data: string): string;

/**
 * Возвращает тип склонения существительного в русском языке для заданного числа.
 * @param {number} num - Число.
 * @returns {number} Возвращает тип склонения существительного в русском языке (0,1,2) для заданного числа:
 * 0 - "штук";
 * 1 - "штука";
 * 2 - "штуки".
 */
declare function IntModType(num: number): number;

/**
 * Максимальное значение из нескольких аргументов.
 * @param {number} number - Число 1.
 * @param {number[]} numbers - Числа.
 * @returns {number} Возвращает максимальное значение из нескольких аргументов.
 */
declare function Max(number: number, ...numbers: number[]): number;

/**
 * Выполняет HTTP-запрос.
 * @param {string} url - Url.
 * @param {string} [method="get"] - Метод `get` или `post`.
 * @param {string} [body] - Тело запроса.
 * @param {string} headers - Список дополнительных полей заголовка http-запроса
 * в соответствующем формате (имя:значение перевод строки).
 * Необязательный аргумент. Список также может содержать дополнительные опции.
 * Среди списка дополнительных полей заголовка возможно использование следующих опций,
 * которые обрабатываются отдельно и не попадают в передаваемый заголовок:
 * Ignore-Errors - Игнорировать наличие кода ошибки HTTP в ответе.
 * Если указана эта опция, код ошибки можно получить через атрибут RespCode возвращаемого объекта.
 * По умолчанию функция завершается с ошибкой в случае получения кода ошибки по HTTP.
 * Auto-Redirect - Автоматически следовать редиректам HTTP 303, HTTP 304. По умолчанию true.
 * @returns {HttpResponse} Объект ответа.
 * @example
 * ```
 * HttpRequest("http://reg.datex-soft.com/")
 * HttpRequest("http://reg.datex-soft.com/login.htm", "post", UrlEncodeQuery({ login: "xxx", password: "xxx" }))
 * HttpRequest(
 *   "http://reg.datex-soft.com/login.htm",
 *   "post",
 *   "<xxx>111</xxx>",
 *   "Content-type: text/xml\nIgnore-Errors: 1\n"
 * )
 * ```
 */
declare function HttpRequest(url: string, method?: string, body?: string, headers?: string): HttpResponse;

/**
 * Возвращает минимальное значение из нескольких аргументов.
 * @param {number} number - Число.
 * @param {number[]} numbers - Числа.
 * @returns {number} Результат.
 * @example
 * ```
 * Min(2, 5, 10, 15) === 2;
 * ```
 */
declare function Min(number: number, ...numbers: number[]): number;

/**
 * Возвращает Полное имя человека в виде "Фамилия И.О.".
 * @param {string} lastname - Фамилия.
 * @param {string} firstname - Имя.
 * @param {string} [middlename] - Отчество.
 * @returns {string} Результат.
 */
declare function PersonShortName(lastname: string, firstname: string, middlename?: string): string;

/**
 * Вычисляет контрольную сумму по алгоритму PamMd5.
 * @param {string} arg - Строка, содержащая массив байт.
 * @returns {string} Результат.
 */
declare function PamMd5(arg: string): string;

/**
 * Смешивает два цвета в заданной пропорции.
 * @param {string} color1 - Цвет в формате RGB.
 * @param {string} color2 - Цвет в формате RGB.
 * @param {number} [arg] - Пропорции. В случае его отсутствия цвета будут смешаны в пропорции 1 к 1.
 * @returns {string} Результат.
 */
declare function MixColors(color1: string, color2: string, arg?: number): string;

/**
 * Вычисляет контрольную сумму по алгоритму Md5 и возвращает результат в виде HEX-строки.
 * @param {string} data - Строка, содержащая массив байт.
 * @returns {string} Результат.
 */
declare function Md5Hex(data: string): string;

/**
 * Возвращает случайное целое число в заданном диапазоне.
 * @param {number} minVal - Нижняя граница диапазона.
 * @param {number} maxVal - Верхняя граница диапазона.
 * @returns {number} Результат.
 */
declare function Random(minVal: number, maxVal: number): number;

/**
 * Вызывает отправку почтового сообщения через тот способ, который был выбран в настройках, как правило - Simple MAPI.
 * В качестве параметра передается объект, созданный функцией {@link MailMessage}.
 * @param {ReturnType<typeof MailMessage>} arg1 - Объект, созданный при помощи функции
 * {@link MailMessage} (Object SpXml).
 */
declare function SendMailMessage(arg1: ReturnType<typeof MailMessage>): void;

/**
 * Вызывает выполнение процесса.
 * `work-dir` - рабочая директория для процесса
 * `sys` - системный процесс `boolean`, в этом случае в качестве первого аргумента
 * функции можно указывать не путь до исполняемого файла,
 * а имя системного процесса `wait` - дожидаться завершения процесса `boolean`.
 * Если указана опция `wait=1`, функция вернет код завершения процесса (`0` - успешное завершение, иначе - ошибка).
 * В остальных случаях функция ничего не возвращает.
 * `hidden` - запуск без пользовательского интерфейса `boolean`
 * (рекомендуется включать, если функция вызывается с сервера).
 * @param {string} path - Путь к исполняемому файлу, или имя исполняемого файла.
 * @param {string} [cmdLine] - Аргументы командной строки.
 * @param {string} [options] - Набор опций через ";", в виде "имя опции=значение; ...".
 * @returns {number} Результат.
 * @example
 * ```
 * ProcessExecute(
 *   "C:\Temp\pkzipc.exe",
 *   " -add -rec -path=current xxx.zip 1.htm 2.htm",
 *   "wait=1;hidden=1;work-dir=C:\Temp"
 * );
 * ```
 */
declare function ProcessExecute(path: string, cmdLine: string, options: string): number;

/**
 * Устанавливает авторизацию, используемую клиентом по умолчанию.
 * Можно использовать только на `spxml`, так как он не делает одновременных запросов по разным адресам.
 * @param {string} log - Логин.
 * @param {string} pass - Пароль.
 * @returns {undefined}
 */
declare function SetHttpDefaultAuth(log: string, pass: string): undefined;

/**
 * Вычисляет hash функцию по алгоритму SHA1.
 * @param {string} str - Строка, содержащая массив байт.
 * @returns {string} Результат.
 */
declare function SHA1(str: string): string;

/**
 * Создает временную задержку, не загружая процессор.
 * @param {number} ticks - Величина задержки в миллисекундах.
 * @returns {undefined}
 */
declare function Sleep(ticks: number): undefined;

/**
 * Записывает текст в сроку состояния в главном окне программы.
 * Обычно используется для показа количества найденных объектов в списке.
 * @param {string} msg - Строка.
 * @example
 * ```
 * StatusMsg("Записей в списке: " + n);
 * ```
 * @returns {undefined}
 */
declare function StatusMsg(msg: string): undefined;

/**
 * Вычисляет hash функцию по алгоритму SHA1 и возвращает строку, закодированную в Base64.
 * @param {string} str - Строка, содержащая массив байт.
 * @returns {string} Результат.
 */
declare function SHA1Base64(str: string): string;

/**
 * Вызывает действие для Windows Shell.
 * @param {string} action - Вызываемое действие (как правило, "open" или "print").
 * @param {string} target - Путь к вызываемому файлу, или url.
 * @param {string?} args - Аргументы для вызываемой программы (если url определяет исполняемый файл).
 * @returns {undefined}
 * @example
 * ```
 * ShellExecute("open", "calc.exe");
 * ```
 * @example
 * ```
 * ShellExecute("print", "C:\\Temp\\xxx.doc");
 * ```
 * @example
 * ```
 * ShellExecute("open", "http://www.e-staff.ru/");
 * ```
 * @example
 * ```
 * ShellExecute("open", "mailto:support@e-staff.ru");
 * ```
 */
declare function ShellExecute(action: string, target: string, args?: string): undefined;

/**
 * Создает zip архив.
 * @param {string} archivePath - Путь (или url) к создаваемому архиву.
 * @param {Array} filesArray - Массив, содержащий список файлов или папок, которые нужно заархивировать (Array).
 * @param {any} [options] - Объект с параметрами (Object).
 * @returns {undefined}
 * @example
 * ```
 * ZipCreate("C:\\Temp\1.zip", ["app", "base", "SpXml.exe"], { BaseDir: "C:\\Program Files\\EStaff" });
 * ```
 */
declare function ZipCreate(archivePath: string, filesArray: string[], options: Object): undefined;

/**
 * Распаковывает архив.
 * @param {string} archivePath - Путь до архива.
 * @param {string} destPath - Путь до папки, в которую нужно распаковать.
 * @returns {undefined}
 */
declare function ZipExtract(archivePath: string, destPath: string): undefined;

/**
 * Выбирает определенное поле (атрибут) из каждого элемента массива.
 * Возвращает новый массив той же длинны, содержащий выбранные элементы.
 * Функция аналогична более универсальной функции {@link ArrayExtract}(), но работает быстрее.
 * @param {Array} array - Исходный массив.
 * @param {string} field - Имя поля.
 * @returns {unknown[]} Результат.
 */
declare function ArrayExtractKeys<T, K>(array: T[], field: string): K[];
/**
 * Выбирает определенное поле (атрибут) из каждого элемента массива.
 * Возвращает новый массив той же длинны, содержащий выбранные элементы.
 * Функция аналогична более универсальной функции {@link ArrayExtract}(), но работает быстрее.
 * @param {XmlMultiElem<T>} array - Исходный массив.
 * @param {string} field - Имя поля.
 * @returns {unknown[]} Результат.
 */
declare function ArrayExtractKeys<T, K>(array: XmlMultiElem<T>, field: string): K[];

/**
 * Возвращает строку, полученную путем склеивания данных из элементов массива.
 * @param {Array} array - Массив.
 * @param {string} elemExpr - Выражение, вычисляющее значение, используемое для склейки, относительно элемента массива.
 * @param {string} [delim=""] - Строка-разделитель.
 * @returns {string} Результат.
 */
declare function ArrayMerge<T>(array: T[], elemExpr: string, delim?: string): string;
/**
 * Возвращает строку, полученную путем склеивания данных из элементов массива.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {string} elemExpr - Выражение, вычисляющее значение, используемое для склейки, относительно элемента массива.
 * @param {string} [delim=""] - Строка-разделитель.
 * @returns {string} Результат.
 */
declare function ArrayMerge<T>(array: XmlMultiElem<T>, elemExpr: string, delim?: string): string;

/**
 * Возвращает массив, содержащий элементы массива 1,
 * у которых значение ключевого поля совпадает хотя бы в с одним элементом массива 2.
 * @param {Array} array1 - Массив 1.
 * @param {Array} array2 - Массив 2.
 * @param {string} [fieldExpr1] - Выражение, вычисляемое относительно каждого элемента массива 1
 * и возвращающее значение ключа для сравнения. Необязательный аргумент.
 * Если аргумент не указан, используется значение самого элемента (This).
 * @param {string} [fieldExpr2] - Выражение, вычисляемое относительно каждого элемента массива 2
 * и возвращающее значение ключа для сравнения. Необязательный аргумент.
 * Если аргумент не указан, используется значение самого элемента (This).
 * @returns {T[]} - Результат.
 */
declare function ArrayIntersect<T, K>(
  array1: T[],
  array2: K[],
  fieldExpr1?: string,
  fieldExpr2?: string
): T[];
/**
 * Возвращает массив, содержащий элементы массива 1,
 * у которых значение ключевого поля совпадает хотя бы в с одним элементом массива 2.
 * @param {Array} array1 - Массив 1.
 * @param {Array} array2 - Массив 2.
 * @param {string} [fieldExpr1] - Выражение, вычисляемое относительно каждого элемента массива 1
 * и возвращающее значение ключа для сравнения. Необязательный аргумент.
 * Если аргумент не указан, используется значение самого элемента (This).
 * @param {string} [fieldExpr2] - Выражение, вычисляемое относительно каждого элемента массива 2
 * и возвращающее значение ключа для сравнения. Необязательный аргумент.
 * Если аргумент не указан, используется значение самого элемента (This).
 * @returns {XmlElem<T>[]} - Результат.
 */
declare function ArrayIntersect<T, K>(
  array1: XmlMultiElem<T>,
  array2: XmlMultiElem<K>,
  fieldExpr1?: string,
  fieldExpr2?: string
): XmlElem<T>[];

/**
 * Возвращает первый элемент заданного массива. Если массив не содержит ни одного элемента,
 * функция завершается с исключением.
 * @param {Array} array - Массив.
 * @returns {T | never} Результат.
 */
// eslint-disable-next-line no-magic-numbers
declare function ArrayFirstElem<T extends unknown[]>(array: T): T[0] | never;
/**
 * Возвращает первый элемент заданного массива. Если массив не содержит ни одного элемента,
 * функция завершается с исключением.
 * @param {XmlMultiElem<unknown>} array - Массив.
 * @returns {XmlElem<T> | never} Результат.
 */
// eslint-disable-next-line no-magic-numbers
declare function ArrayFirstElem<T extends XmlMultiElem<unknown>>(array: T): T[0] | never;

/**
 * Возвращает элемент заданного массива, содержащий максимальное значение определенного поля среди его элементов.
 * Если массив не содержит ни одного элемента, функция завершается с исключением.
 * @param {Array} array - Массив.
 * @param {string} expression - Выражение (строка), вычисляющее значение поля относительно элемента массива.
 * @returns {T} Результат.
 */
declare function ArrayMax<T>(array: T[], expression: string): T;
/**
 * Возвращает элемент заданного массива, содержащий максимальное значение определенного поля среди его элементов.
 * Если массив не содержит ни одного элемента, функция завершается с исключением.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {string} expression - Выражение (строка), вычисляющее значение поля относительно элемента массива.
 * @returns {XmlElem<T>} Результат.
 */
declare function ArrayMax<T>(array: XmlMultiElem<T>, expression: string): XmlElem<T>;

/**
 * Находит первый элемент массива, удовлетворяющий заданному условию.
 * Если элемент, удовлетворяющий условию, не найден, функция завершается с исключением.
 * @param {T[]} array - Массив.
 * @param {string} qualExpr - Выражение, определяющее соответствие элемента массива критерию.
 * Вычисляется относительно элемента массива..
 * @returns {T[] | never} Результат.
 */
declare function ArrayFind<T>(array: T[], qualExpr: string): T | never;
/**
 * Находит первый элемент массива, удовлетворяющий заданному условию.
 * Если элемент, удовлетворяющий условию, не найден, функция завершается с исключением.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {string} qualExpr - Выражение, определяющее соответствие элемента массива критерию.
 * Вычисляется относительно элемента массива..
 * @returns {XmlElem<T> | never} Результат.
 */
declare function ArrayFind<T>(array: XmlMultiElem<T>, qualExpr: string): XmlElem<T> | never;

/**
 * Возвращает число элементов массива. Для массивов прямого доступа функция срабатывает мгновенно,
 * для сложных массивов (например результатов XQuery) вызов этой функции может повлечь за собой обращение к серверу
 * либо другую длительную по времени операцию, поэтому не следует использовать данную функцию внутри циклов.
 * @param {Array} array - Массив.
 * @returns {number} Результат.
 */
declare function ArrayCount<T>(array: T[]): number;
/**
 * Возвращает число элементов массива. Для массивов прямого доступа функция срабатывает мгновенно,
 * для сложных массивов (например результатов XQuery) вызов этой функции может повлечь за собой обращение к серверу
 * либо другую длительную по времени операцию, поэтому не следует использовать данную функцию внутри циклов.
 * @param {XmlMultiElem<T>} array - Массив.
 * @returns {number} Результат.
 */
declare function ArrayCount<T>(array: XmlMultiElem<T>): number;

/**
 * Преобразует заданный массив к массиву с прямым индексированием.
 * Если заданный массив и так поддерживает прямое индексирование, функция возвращает сам исходный массив.
 * В противном случае функция работает аналогично {@link ArraySelectAll}() и возвращает массив типа Array,
 * содержащий копию исходного массива.
 * @param {Array} array - Исходный массив.
 * @returns {Array} - Результат.
 */
declare function ArrayDirect<T>(array: T[]): T[];
/**
 * Преобразует заданный массив к массиву с прямым индексированием.
 * Если заданный массив и так поддерживает прямое индексирование, функция возвращает сам исходный массив.
 * В противном случае функция работает аналогично {@link ArraySelectAll}() и возвращает массив типа Array,
 * содержащий копию исходного массива.
 * @param {XmlMultiElem<T>} array - Исходный массив.
 * @returns {Array} - Результат.
 */
declare function ArrayDirect<T>(array: XmlMultiElem<T>): T[];

/**
 * Выбирает определенное значение из каждого элемента массива.
 * Возвращает новый массив той же длинны, содержащий выбранные элементы.
 * @param {Array} array - Исходный массив.
 * @param {string} fieldExpr - Выражение, вычисляемое относительно каждого элемента исходного массива.
 * @returns {Array} - Результат.
 */
declare function ArrayExtract<T, K>(array: T[], fieldExpr: string | null): K[];
/**
 * Выбирает определенное значение из каждого элемента массива.
 * Возвращает новый массив той же длинны, содержащий выбранные элементы.
 * @param {XmlMultiElem<T>} array - Исходный массив.
 * @param {string} fieldExpr - Выражение, вычисляемое относительно каждого элемента исходного массива.
 * @returns {Array} - Результат.
 */
declare function ArrayExtract<T, K>(array: XmlMultiElem<T>, fieldExpr: string | null): K[];

/**
 * Ищет первый элемент массива с заданным значением определенного поля (ключа).
 * Если такой элемент не найден, возвращается undefined.
 * @param {Array} array - Массив.
 * @param {K} value - Значение ключа.
 * @param {string} name - Имя элемента, являющегося ключом. Если имя ключа не указано, используется первичный ключ.
 * @returns {T | undefined} Результат.
 */
declare function ArrayOptFindByKey<T, K>(array: T[], value: K, name?: string): T | undefined;
/**
 * Ищет первый элемент массива с заданным значением определенного поля (ключа).
 * Если такой элемент не найден, возвращается undefined.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {K} value - Значение ключа.
 * @param {string} name - Имя элемента, являющегося ключом. Если имя ключа не указано, используется первичный ключ.
 * @returns {XmlElem<T> | undefined} Результат.
 */
declare function ArrayOptFindByKey<T, K>(array: XmlMultiElem<T>, value: K, name?: string): XmlElem<T> | undefined;

/**
 * Находит первый элемент массива, удовлетворяющий заданному условию.
 * Если элемент, удовлетворяющий условию, не найден, возвращается undefined.
 * @param {Array} array - Массив.
 * @param {string} qualExpr - Выражение, определяющее соответствие элемента массива критерию.
 * Вычисляется относительно элемента массива..
 * @returns {T | undefined} Результат.
 */
declare function ArrayOptFind<T>(array: T[], qualExpr: string): T | undefined;
/**
 * Находит первый элемент массива, удовлетворяющий заданному условию.
 * Если элемент, удовлетворяющий условию, не найден, возвращается undefined.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {string} qualExpr - Выражение, определяющее соответствие элемента массива критерию.
 * Вычисляется относительно элемента массива..
 * @returns {XmlElem<T> | undefined} Результат.
 */
declare function ArrayOptFind<T>(array: XmlMultiElem<T>, qualExpr: string): XmlElem<T> | undefined;

/**
 * Возвращает элемент заданного массива, содержащий минимальное значение определенного поля среди его элементов.
 * Если массив не содержит ни одного элемента, функция завершается с исключением.
 * @template {Array} T
 * @param {T} array - Массив.
 * @param {string} elemExpr - Выражение (строка), вычисляющее значение поля относительно элемента массива.
 * @returns {T} Результат.
 */
declare function ArrayMin<T>(array: T[], elemExpr: string): T;
/**
 * Возвращает элемент заданного массива, содержащий минимальное значение определенного поля среди его элементов.
 * Если массив не содержит ни одного элемента, функция завершается с исключением.
 * @template {XmlMultiElem<T>} T
 * @param {T} array - Массив.
 * @param {string} elemExpr - Выражение (строка), вычисляющее значение поля относительно элемента массива.
 * @returns {XmlElem<T>} Результат.
 */
declare function ArrayMin<T>(array: XmlMultiElem<T>, elemExpr: string): XmlElem<T>;

/**
 * Возвращает элемент заданного массива, содержащий максимальное значение определенного поля среди его элементов.
 * Если массив не содержит ни одного элемента, функция возвращает undefined.
 * @param {Array} array - Массив.
 * @param {string} elemExpr - Выражение (строка), вычисляющее значение поля относительно элемента массива.
 * @returns {T | undefined} Результат.
 */
declare function ArrayOptMax<T>(array: T[], elemExpr: string): T | undefined;
/**
 * Возвращает элемент заданного массива, содержащий максимальное значение определенного поля среди его элементов.
 * Если массив не содержит ни одного элемента, функция возвращает undefined.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {string} elemExpr - Выражение (строка), вычисляющее значение поля относительно элемента массива.
 * @returns {XmlElem<T> | undefined} Результат.
 */
declare function ArrayOptMax<T>(array: XmlMultiElem<T>, elemExpr: string): XmlElem<T> | undefined;

/**
 * Возвращает фрагмент массива с определенной позиции. Данная функция как правило используется
 * для реализации постраничного просмотра (paging) результатов запроса XQuery.
 * @param {T[]} array - Исходный массив.
 * @param {number} pos - Начальная позиция.
 * @param {number} [elemsNum] - Количество элементов нового массива.
 * Если количество не указано, возвращаются все элементы с начальной позиции.
 * @returns {T[]} - Результат.
 */
declare function ArrayRange<T>(array: T[], pos: number, elemsNum?: number): T[];
/**
 * Возвращает фрагмент массива с определенной позиции. Данная функция как правило используется
 * для реализации постраничного просмотра (paging) результатов запроса XQuery.
 * @param {XmlMultiElem<T>} array - Исходный массив.
 * @param {number} pos - Начальная позиция.
 * @param {number} [elemsNum] - Количество элементов нового массива.
 * Если количество не указано, возвращаются все элементы с начальной позиции.
 * @returns {XmlElem<T>[]} - Результат.
 */
declare function ArrayRange<T>(array: XmlMultiElem<T>, pos: number, elemsNum?: number): XmlElem<T>[];

/**
 * Выбирает элементы массива, удовлетворяющие заданному критерию.
 * @param {T[]} array - Массив.
 * @param {string} expression - Выражение, определяющее соответствие элемента массива критерию.
 * Вычисляется относительно элемента массива. (Bool).
 * @returns {T[]} Результат.
 */
declare function ArraySelect<T>(array: T[], expression: string): T[];
/**
 * Выбирает элементы массива, удовлетворяющие заданному критерию.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {string} expression - Выражение, определяющее соответствие элемента массива критерию.
 * Вычисляется относительно элемента массива. (Bool).
 * @returns {XmlElem<T>[]} Результат.
 */
declare function ArraySelect<T>(array: XmlMultiElem<T>, expression: string): XmlElem<T>[];

/**
 * Возвращает элемент заданного массива, содержащий минимальное значение определенного поля среди его элементов.
 * Если массив не содержит ни одного элемента, функция возвращает undefined.
 * @param {T[]} array - Массив.
 * @param {string} elemExpr - Выражение (строка), вычисляющее значение поля относительно элемента массива.
 * @returns {T | undefined} Результат.
 */
declare function ArrayOptMin<T>(array: T[], elemExpr: string): T | undefined;
/**
 * Возвращает элемент заданного массива, содержащий минимальное значение определенного поля среди его элементов.
 * Если массив не содержит ни одного элемента, функция возвращает undefined.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {string} elemExpr - Выражение (строка), вычисляющее значение поля относительно элемента массива.
 * @returns {XmlElem<T> | undefined} Результат.
 */
declare function ArrayOptMin<T>(array: XmlMultiElem<T>, elemExpr: string): XmlElem<T> | undefined;

/**
 * Возвращает первый элемент заданного массива.
 * Если массив не содержит ни одного элемента, функция возвращает `undefined`.
 * @param {T[]} array - Массив.
 * @returns {T | undefined} Результат.
 */
declare function ArrayOptFirstElem<T>(array: T[]): T | undefined;
/**
 * Возвращает первый элемент заданного массива.
 * Если массив не содержит ни одного элемента, функция возвращает `undefined`.
 * @param {XmlMultiElem<T>} array - Массив.
 * @returns {XmlElem<T> | undefined} Результат.
 */
declare function ArrayOptFirstElem<T>(array: XmlMultiElem<T>): XmlElem<T> | undefined;

/**
 * Возвращает первый элемент заданного массива.
 * Если массив не содержит ни одного элемента, функция возвращает второй аргумент.
 * @param {Array} array - Массив.
 * @param {K} defaultValue - Значение по умолчанию.
 * @returns {T | K} Результат.
 */
declare function ArrayOptFirstElem<T, K = undefined>(array: T[], defaultValue: K): T | K;
/**
 * Возвращает первый элемент заданного массива.
 * Если массив не содержит ни одного элемента, функция возвращает второй аргумент.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {K} defaultValue - Значение по умолчанию.
 * @returns {XmlElem<T> | K} Результат.
 */
declare function ArrayOptFirstElem<T, K = undefined>(array: XmlMultiElem<T>, defaultValue: K): XmlElem<T> | K;

/**
 * Ищет первый элемент массива с заданным значением определенного поля (ключа).
 * Если такой элемент не найден, возвращается undefined.
 * Предполагается, что массив предварительно отсортирован по ключевому полю по возрастанию,
 * что значительно повышает скорость поиска по сравнению с функцией {@link ArrayOptFindByKey}.
 * Функцию имеет смысл использовать для частого поиска в каком-либо фиксированном справочнике большого размера,
 * который необходимо заранее отсортировать.
 * @param {T} array - Массив.
 * @param {K} value - Значение ключа.
 * @param {string} [name] - Имя элемента, являющегося ключом, если имя ключа не указано, то используется первичный ключ.
 * @returns {T | undefined} Результат.
 */
declare function ArrayOptFindBySortedKey<T, K>(array: T[], value: K, name?: string): T | undefined;
/**
 * Ищет первый элемент массива с заданным значением определенного поля (ключа).
 * Если такой элемент не найден, возвращается undefined.
 * Предполагается, что массив предварительно отсортирован по ключевому полю по возрастанию,
 * что значительно повышает скорость поиска по сравнению с функцией {@link ArrayOptFindByKey}.
 * Функцию имеет смысл использовать для частого поиска в каком-либо фиксированном справочнике большого размера,
 * который необходимо заранее отсортировать.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {K} value - Значение ключа.
 * @param {string} [name] - Имя элемента, являющегося ключом, если имя ключа не указано, то используется первичный ключ.
 * @returns {XmlElem<T> | undefined} Результат.
 */
declare function ArrayOptFindBySortedKey<T, K>(array: XmlMultiElem<T>, value: K, name?: string): XmlElem<T> | undefined;

/**
 * Возвращает массив, содержащий все элементы исходного массива в виде стандартного массива Array.
 * Функция, как правило, используется в двух случаях: 1.
 * Для сложной либо многократной обработки (особенно с прямым индексированием) "медленных" массивов,
 * таких как результаты XQuery 2.
 * Когда в цикле, осуществляющем проход по массиву, происходит выборочное удаление его элементов.
 * @param {T} array - Исходный массив.
 * @returns {Array} - Результат.
 */
declare function ArraySelectAll<T>(array: T[]): T[];

/**
 * Возвращает массив, содержащий все элементы исходного массива в виде стандартного массива Array.
 * Функция, как правило, используется в двух случаях:
 * 1. Для сложной либо многократной обработки (особенно с прямым индексированием) медленных массивов,
 * таких как результаты {@link XQuery}
 * 2. Когда в цикле, осуществляющем проход по массиву, происходит выборочное удаление его элементов.
 * @param {XmlMultiElem<T>} array - Исходный массив.
 * @returns {XmlElem<T>[]} - Результат.
 */
declare function ArraySelectAll<T>(array: XmlMultiElem<T>): XmlElem<T>[];

/**
 * Возвращает массив уникальных значений элементов заданного массива.
 * @param {T[]} array - Исходный массив.
 * @param {string} [fieldExpr] - Выражение, вычисляемое относительно каждого элемента исходного массива,
 * Если аргумент не указан, используется значение самого элемента `This`.
 * @returns {T[]} Результат.
 */
declare function ArraySelectDistinct<T>(array: T[], fieldExpr?: string): T[];
/**
 * Возвращает массив уникальных значений элементов заданного массива.
 * @param {XmlMultiElem<T>} array - Исходный массив.
 * @param {string} [fieldExpr] - Выражение, вычисляемое относительно каждого элемента исходного массива,
 * Если аргумент не указан, используется значение самого элемента `This`.
 * @returns {XmlElem<T>[]} Результат.
 */
declare function ArraySelectDistinct<T>(array: XmlMultiElem<T>, fieldExpr?: string): XmlElem<T>[];

/**
 * Последовательное объединение нескольких массивов в один.
 * @param {unknown[]} args - Массивы.
 * @returns {unknown[]} - Результат.
 */
declare function ArrayUnion(...args: unknown[]): unknown[];

/**
 * Проверяет, является ли аргумент массивом.
 * @param {unknown} value - Аргумент.
 * @returns {boolean} Результат.
 */
declare function IsArray(value: unknown): value is unknown[] | XmlMultiElem<unknown>;

/**
 * Выбирает элементы массива, с определенным значением  заданного поля (ключа) внутри элемента.
 * Массив должен быть предварительно отсортирован по возрастанию значения ключа,
 * что делает эту функцию существенно быстрее по сравнению с {@link ArraySelectByKey}().
 * @param {T[]} array - Массив.
 * @param {string | number} value - Значение ключа.
 * @param {string} name - Имя элемента, являющегося  ключом.
 * @param {boolean} [ignoreCase] - Игнорировать регистр (для массивов, содержащих строки).
 * @returns {T[]} - Результат.
 */
declare function ArraySelectBySortedKey<T>(array: T[], value: string | number, name: string, ignoreCase?: boolean): T[];
/**
 * Выбирает элементы массива, с определенным значением  заданного поля (ключа) внутри элемента.
 * Массив должен быть предварительно отсортирован по возрастанию значения ключа,
 * что делает эту функцию существенно быстрее по сравнению с {@link ArraySelectByKey}().
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {string | number} value - Значение ключа.
 * @param {string} name - Имя элемента, являющегося  ключом.
 * @param {boolean} [ignoreCase] - Игнорировать регистр (для массивов, содержащих строки).
 * @returns {XmlElem<T>[]} - Результат.
 */
declare function ArraySelectBySortedKey<T>(
  array: XmlMultiElem<T>,
  value: string | number,
  name: string,
  ignoreCase?: boolean
): XmlElem<T>[];

/**
 * Выбирает элементы массива, с определенным значением заданного поля (ключа) внутри элемента.
 * Функция аналогична более универсальной функции {@link ArraySelect}(), но работает быстрее.
 * @param {T[]} array - Массив.
 * @param {boolean | string | number} value - Значение ключа.
 * @param {string} [name] - Имя элемента, являющегося ключом. Если имя ключа не указано, используется первичный ключ.
 * @returns {T[]} - Результат.
 */
declare function ArraySelectByKey<T>(
  array: T[],
  value: boolean | string | number,
  name?: string
): T[];
/**
 * Выбирает элементы массива, с определенным значением заданного поля (ключа) внутри элемента.
 * Функция аналогична более универсальной функции {@link ArraySelect}(), но работает быстрее.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {boolean | string | number} value - Значение ключа.
 * @param {string} [name] - Имя элемента, являющегося ключом. Если имя ключа не указано, используется первичный ключ.
 * @returns {XmlElem<T>[]} - Результат.
 */
declare function ArraySelectByKey<T>(
  array: XmlMultiElem<T>,
  value: boolean | string | number,
  name?: string
): XmlElem<T>[];

/**
 * Сортирует массив по заданным полям. Возвращает новый массив отсортированных значений.
 * Функция требует нечетного числа аргументов (не менее 3-х),
 * для каждого нового уровня сортировки добавляется 2 новых аргумента.
 * @param {T[]} array - Массив.
 * @param {string} expression - Выражение, вычисляющее значение полей относительно элемента массива,
 * по которым осуществляется сортировка.
 * @param {string} [direction] - Направление сортировки ('+' или '-').
 * @param {string} args - Набор дополнительных аргументов для сортировки.
 * @returns {T[]} Результат.
 * @example
 * ```
 * ArraySort(array, "name", "+", "date", "-");
 * ```
 */
declare function ArraySort<T>(array: T[], expression: string, direction?: string, ...args: string[]): T[];
/**
 * Сортирует массив по заданным полям. Возвращает новый массив отсортированных значений.
 * Функция требует нечетного числа аргументов (не менее 3-х),
 * для каждого нового уровня сортировки добавляется 2 новых аргумента.
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {string} expression - Выражение, вычисляющее значение полей относительно элемента массива,
 * по которым осуществляется сортировка.
 * @param {string} [direction] - Направление сортировки ('+' или '-').
 * @param {string} args - Набор дополнительных аргументов для сортировки.
 * @returns {XmlElem<T>[]} Результат.
 * @example
 * ```
 * ArraySort(array, "name", "+", "date", "-");
 * ```
 */
declare function ArraySort<T>(
  array: XmlMultiElem<T>,
  expression: string,
  direction?: string,
  ...args: string[]
): XmlElem<T>[];

/**
 * Возвращает сумму значений определенного поля по всем элементам массива.
 * Внимание! При использовании с массивом примитивов функция будет работать возвращать 0.
 * @example
 * ```
 * var a = [1, 2, 3];
 * ArraySum(a, "This"); // --> 0
 * ```
 * @param {T} array - Массив.
 * @param {string} expression - Выражение, вычисляющее поле, по которому происходит суммирование.
 * @returns {number} Результат.
 */
declare function ArraySum<T>(array: T[], expression: string): number;
/**
 * Возвращает сумму значений определенного поля по всем элементам массива.
 * Внимание! При использовании с массивом примитивов функция будет работать возвращать 0.
 * @example
 * ```
 * var a = [1, 2, 3];
 * ArraySum(a, "This"); // --> 0
 * ```
 * @param {XmlMultiElem<T>} array - Массив.
 * @param {string} expression - Выражение, вычисляющее поле, по которому происходит суммирование.
 * @returns {number} Результат.
 */
declare function ArraySum<T>(array: XmlMultiElem<T>, expression: string): number;

/**
 * Текущая дата системы время системы.
 */
declare const CurDate: Date;

/**
 * Изменяет значение времени в заданной дате. Возвращает измененную дату.
 * Если указан только первый аргумент, функция возвращает дату без времени.
 * @param {Date} date - Дата.
 * @param {number} [hour] - Час.
 * @param {number} [minute] - Минута.
 * @param {number} [second] - Секунда.
 * @returns {Date} - Дата.
 */
declare function DateNewTime(date: Date, hour?: number, minute?: number, second?: number): Date;

/**
 * Возвращает время в миллисекундах, прошедшее с момента запуска операционной системы.
 * @returns {number} Результат.
 */
declare function GetCurTicks(): number;

/**
 * Возвращает разницу между 2-мя датами в секундах. Если первая дата меньше второй, разница будет отрицательным числом.
 * @param {Date} date1 - Дата 1.
 * @param {Date} date2 - Дата 2.
 * @returns {number} Результат.
 */
declare function DateDiff(date1: Date, date2: Date): number;

/**
 * Сдвигает дату на указанное число секунд. Если значение второго аргумента отрицательное, дата сдвигается назад.
 * @param {Date} date - Заданная дата.
 * @param {number} seconds - Сдвиг в секундах.
 * @returns {Date} - Дата.
 */
declare function DateOffset(date: Date, seconds: number): Date;

/**
 * Возвращает количество секунд, прошедших с 1970 года до заданной даты.
 * @param {Date} date - Дата.
 * @returns {number} Результат.
 */
declare function DateToRawSeconds(date: Date): number;

/**
 * Возвращает значение часа для заданной даты. Если дата не содержит времени, возвращается undefined.
 * @param {Date} date - Дата.
 * @returns {number} Результат.
 */
declare function Hour(date: Date): number;

/**
 * Возвращает значение дня (1-31) для заданной даты.
 * @param {Date} date - Дата.
 * @returns {number} Результат.
 */
declare function Day(date: Date): number;

/**
 * Возвращает значение минуты для заданной даты. Если дата не содержит времени, возвращается undefined.
 * @param {Date} date - Дата.
 * @returns {number} Результат.
 */
declare function Minute(date: Date): number;

/**
 * Возвращает номер месяца (1-12) для заданной даты.
 * @param {Date} date - Дата.
 * @returns {number} Результат.
 */
declare function Month(date: Date): number;

/**
 * Преобразует дату в формат MIME.
 * @param {Date} Date - Дата.
 * @returns {string} Результат.
 * @example StrMimeDate(Date("26.12.2011 10:45")) == 'Mon, 26 Dec 2011 10:45:00 +0400'
 */
declare function StrMimeDate(Date: Date): string;

/**
 * Преобразует дату в строку в "длинном" формате (со словесным написанием месяца).
 * Если в качестве аргумента передается null или пустая строка, функция возвращает пустую строку.
 * @param {Date} date - Дата.
 * @returns {string} Результат.
 * @example StrLongDate(Date("26.12.2011")) == "26 декабря 2011 г."
 */
declare function StrLongDate(date: Date): string;

/**
 * Конструирует значение типа Date. Возвращает undefined в случае, если указаны недопустимые аргументы.
 * Функция {@link OptDate}() рекомендуется для использования,
 * если необходимо проверить корректность даты (например 29 февраля),
 * где обычная функция {@link Date}() будет вести себя по-разному на десктопной и web-версиях.
 * @param {Date} date - Дата.
 * @example
 * ```
 * OptDate("2019-04-20");
 * OptDate("2019-04-20T12:30");
 * OptDate("2019-04-20T12:30:00");
 * OptDate(2019, 04, 20);
 * OptDate(2019, 04, 20, 12, 30);
 * OptDate(2019, 04, 20, 12, 30, 0);
 * ```
 * @returns {Date} - Дата.
 */
declare function OptDate(date: string | Date | null | undefined | number | boolean): Date | undefined;
declare function OptDate<T>(date: string | Date | null | undefined | number | boolean, defaultDate: T): Date | T;
declare function OptDate(shortDateString: string): Date;
declare function OptDate(longDateString: string): Date;
declare function OptDate(year: number, month: number, day: number): Date;
declare function OptDate(year: number, month: number, day: number, hour: number, minute: number): Date;
declare function OptDate(year: number, month: number, day: number, hour: number, minute: number, second: number): Date;

/**
 * Преобразует строку с датой в большинство известных форматов в дату.
 * В отличие от функции {@link Date}() понимает дату со словесным указанием месяца, например '1 ноября 2011 года'.
 * @param {string} date - Строка с датой.
 * @returns {Date} - Дата.
 */
declare function ParseDate(date: string): Date;

/**
 * Преобразует количество секунд, прошедших с 1970 года в дату.
 * @param {number} seconds - Количество секунд.
 * @returns {Date} - Дата.
 */
declare function RawSecondsToDate(seconds: number): Date;

/**
 * Возвращает значение секунд для заданной даты. Если дата не содержит значения секунд, возвращается undefined.
 * @param {Date} date - Дата.
 * @returns {number} Результат.
 */
declare function Second(date: Date): number;

/**
 * Преобразует дату в строку, с двухсимвольным форматом года.
 * @param {Date} date - Дата, которую преобразуется.
 * @param {boolean} showTime - Включать время (Bool). По умолчанию true.
 * @param {boolean} showSeconds - Включать секунды во времени (Bool). По умолчанию true.
 * @returns {string} Строка с датой.
 */
declare function StrShortDate(date: Date, showTime?: boolean, showSeconds?: boolean): string;

/**
 * Преобразует дату в строку в формате, используемом по умолчанию в операционной системе.
 * Если в качестве аргумента передается null или пустая строка, функция возвращает пустую строку.
 * @param {Date} date - Объект даты.
 * @param {boolean} showTime - Включать время (Bool). По умолчанию true.
 * @param {boolean} showSeconds - Включать секунды во времени (Bool). По умолчанию true.
 * @returns {string} Строка с датой.
 */
declare function StrDate(date: Date, showTime?: boolean, showSeconds?: boolean): string;

/**
 * Преобразует дату из универсального часового пояса в текущий часовой пояс.
 * @param {Date} date - Дата.
 * @returns {Date} - Дата.
 */
declare function UtcToLocalDate(date: Date): Date;

/**
 * Преобразует значение времени внутри даты в строку. Если время не содержится внутри даты, возвращается пустая строка.
 * @param {Date} date - Дата.
 * @returns {string} Дата.
 * @example StrTime(Date("26.12.2011 10:45")) == "10:45"
 */
declare function StrTime(date: Date): string;

/**
 * Возвращает значение года для заданной даты.
 * @param {Date} date - Дата.
 * @returns {number} - Год.
 */
declare function Year(date: Date): number;

/**
 * Возвращает номер дня недели для заданной даты. (0 - Воскресенье, 1 - Понедельник и т.д.).
 * @param {Date} date - Дата.
 * @returns {number} - День недели.
 */
declare function WeekDay(date: Date): number;

/**
 * Преобразует дату в строку в формате, используемом в XML. Данный формат не зависит от региональных настроек в системе.
 * @param {Date} date - Объект даты.
 * @param {boolean} [showTime] - Включать время (Bool).
 * @param {boolean} [showSeconds] - Включать секунды во времени (Bool).
 * @returns {string} Строка с датой.
 * @example
 * ```
 * StrXmlDate(Date("26.12.2011")) == "2011-12-26"
 * StrXmlDate(Date("26.12.2011 10:45")) == "2011-12-26T10:45"
 * ```
 */
declare function StrXmlDate(date: Date, showTime?: boolean, showSeconds?: boolean): string;

/**
 * Создает динамический (без привязки к форме) XML-элемент. Созданный элемент не имеет родительского элемента.
 * @param {string} name - Имя элемента.
 * @param {string} type - Тип данных XML-элемента.
 * @returns {XmlElem<unknown>} Динамический элемент.
 * @example CreateDynamicElem("elem_count", "integer");
 */
declare function CreateDynamicElem(name: string, type: string): XmlElem<unknown>;

/**
 * Создает XML-элемент заданному по фрагменту формы. Созданный элемент не имеет родительского элемента.
 * Функция используется для управления сложными структурами в оперативной памяти компьютера
 * (как альтернатива javascript object), а так же для формирования XML для внешнего использования.
 * @param {string} formUrl - Url xmd-файла, в котором находится форма.
 * @param {string} elemPath - Пусть к фрагменту формы.
 * @returns {XmlElem<unknown>} Элемент.
 * @example CreateElem("//base2/base2_user.xmd", "user");
 */
declare function CreateElem(formUrl: string, elemPath: string): XmlElem<unknown>;

/**
 * Выдает целевой элемент массива по значению первичного ключа.
 * Если соответствующей элемент не найден, возвращается undefined.
 * Смотри так же {@link GetForeignElem}().
 * Действие функции несколько отличается от функции {@link ArrayOptFindByKey}()
 * за счет поддержки рекурсивных массивов XML-элементов.
 * @param {T} array - Массив объектов.
 * @param {K} value - Значение ключевого элемента (any).
 * @returns {unknown} Результат.
 * @example GetOptForeignElem(event_types, "interview");
 */
declare function GetOptForeignElem<T, K>(array: T, value: K): unknown;

/**
 * Загружает массив XML-элементов в строку.
 * Используется для передачи параметров в плагины и
 * другие внешние процедуры.
 * Смотри так же {@link LoadElemsFromStr}.
 * @param {T} arg1 - Массив XML-элементов (array of objects).
 * @returns {string} Результат.
 */
declare function declareElemsToStr<T>(arg1: T): string;

/**
 * Загружает строку в массив XML-элементов.
 * Используется при обработке параметров,
 * полученных от внешних процедур и плагинов.
 * Смотри также {@link declareElemsToStr}.
 * @param {string} arg1 - Строка.
 * @returns {Array} - Результат.
 */
declare function LoadElemsFromStr(arg1: string): unknown[];

/**
 * Выдает целевой элемент массива по значению первичного ключа.
 * Смотри так же {@link GetOptForeignElem}.
 * Действие функции несколько отличается от функции {@link ArrayOptFindByKey}
 * за счет поддержки рекурсивных массивов XML-элементов.
 * Кроме этого, в новой объектной модели функция никогда не завершается с ошибкой,
 * если соответствующий элемент не найден, а возвращает пустой псевдо-элемент
 * (режим терпимости к незаполненным и битым ссылкам).
 * @param {T} array - Массив объектов.
 * @param {K} value - Значение ключевого элемента.
 * @returns {XmlElem<unknown>}
 * GetForeignElem( event_types, 'interview' ).
 */
declare function GetForeignElem<T, K>(array: T, value: K): XmlElem<unknown>;

/**
 * Создает новый пустой элемент массива, не добавляя его в в сам массив.
 * Используется для отработки "битых ссылок" на элементы массива и
 * ссылок на удаленные элементы массива.
 * Смотри так же {@link GetOptForeignElem} и {@link GetForeignElem}.
 * В текущей реализации массив может быть только каталогом.
 * @param {T} array - Массив элементов.
 * @returns {XmlElem<unknown>} Результат.
 */
declare function GetFailedForeignElem<T>(array: T): XmlElem<unknown>;


/**
 * Открывает базу данных и помещает ее в список открытых баз.
 * Если база уже открыта, возвращается ссылка на открытую базу из списка.
 * @param {string} name - Наименование базы данных.
 * @returns {XmlDatabase} XmlDatabase.
 */
declare function FetchDb(name: string): unknown;

/**
 * Ищет каталог по имени во всех используемых базах данных.
 * Если не находит - выдает ошибку.
 * Функция по историческим причинам называется не совсем корректно.
 * Ее ближайший эквивалент - {@link FindOptCatalog} имеет правильное название.
 * @param {string} name - Наименование каталога базы данных.
 * @returns {object} Результат.
 * @example
 * ```
 * const catalog = FindSharedCatalog("events");
 * ```
 */
declare function FindSharedCatalog(name: string): Object;

/**
 * Аналог функции {@link LoadUrlData}, позволяющий явно указать адрес сервера приложения,
 * с которого будут загружаться данные.
 * Используется как правило для синхронизации данных
 * или обмена данными между несколькими серверами приложений.
 * @param {string} url - Url.
 * @param {string} [options] - Опции.
 * @returns {string} Результат.
 * @example LoadUrlData("x-local://shared/xxx.xml", "lds-server=test2.datex.ru:9000");
 */
declare function LoadLdsUrlData(url: string, options?: string): string;

/**
 * На основании наименования зашифрованной базы данных (модуля)
 * выдает полный путь до зашифрованного модуля базы данных (XFP - файл).
 * Функция не проверяет фактическое существование файла по указанному пути.
 * @param {string} moduleName - Наименование базы данных.
 * @returns {string} Результат.
 * @example GetDbFilePath("app2") == "С:\Program files\EStaff\app2.xfp";
 */
declare function GetDbFilePath(moduleName: string): string;

/**
 * Преобразует имя каталога в имя объекта.
 * Фактически функция преобразует имя существительное множественного числа
 * в имя существительное единственного числа по правилам английского языка.
 * @param {string} catalogName - Название каталога.
 * @returns {string} Результат.
 * @example CatalogNameToObjectName("candidates") == "candidate";
 */
declare function CatalogNameToObjectName(catalogName: string): string;

/**
 * Ищет каталог по имени во всех используемых базах данных.
 * Если не находит - возвращает undefined.
 * @param {string} catalogName - Наименование каталога базы данных.
 * @returns {object} Результат.
 * @example
 * ```
 * const catalog = FindOptCatalog("events");
 * ```
 */
declare function FindOptCatalog(catalogName: string): Object;

/**
 * Осуществляет загрузку в указанную зашифрованную базу данных
 * (модуль) информации из объекта. Используется, например,
 * при подгрузке интернет-модулей в E-Staff c сайта производителя.
 * Объект, информация из которого может быть загружена в базу данных,
 * создается специальной командой new FilePackage,
 * после чего в объект помещается информация, например,
 * при помощи метода {@link LoadFromStr}.
 * @param {string} dbName - Имя базы данных.
 * @param {object} filePackage - Объект типа FilePackage, информация из которого загружается в базу данных.
 * @returns {undefined}
 */
declare function SetDbFilePackage(dbName: string, filePackage: Object): undefined;

/**
 * Выдает true, если указанная база данных находится
 * в зашифрованном модуле (XFP - файл), и false, если не содержит.
 * @param {string} dbName - Наименование базы данных.
 * @returns {boolean} Результат.
 * @example IsPackageDb("app2")
 */
declare function IsPackageDb(dbName: string): boolean;

/**
 * Устанавливает директорию, которую программа будет считать
 * местом расположения базы данных. По умолчанию директория называется так же,
 * как и база И располагается в программной директории.
 * Функция используется, если нужно поместить базу в другую директорию.
 * @param {string} dbName - Наименование базы данных.
 * @param {string} dirUrl - Url директории.
 * @returns {undefined}
 */
declare function SetDbHostDir(dbName: string, dirUrl: string): undefined;

/**
 * Выполняет заданный запрос XQuery на клиентской машине.
 * Используется для запроса данных из каталогов локальных баз данных.
 * @param {string} query - Строка, содержащая запрос.
 * @returns {Array} - Результат.
 */
declare function XQueryLocal<T>(query: string): T;

/**
 * Выполняет заданный запрос XQuery. В сетевой версии приложения запрос выполняется на сервере.
 * `lds-server` - явный адрес сервера приложения, на который будет отправлен запрос.
 * Используется для обмена данных между серверами.
 * `preload-foreign-data` - заранее кэшировать связанные данные {@link Boolean}.
 * Обычно используется при показе списков в пользовательском интерфейсе сетевой версии,
 * в которых будет использовать связанные данные (ForeignElem).
 * @param {string} query - Строка, содержащая запрос.
 * @param {string} [options] - Набор опций.
 * @returns {Array} Результат.
 * @example
 * ```
 * XQuery("for $elem in candidates order by $elem/fullname return $elem", "preload-foreign-data=1");
 * ```
 */
declare function XQuery<T>(query: string, options?: string): T[];


/**
 * Переводит все символы строки в нижний регистр.
 * @param {string} str - Строка, которую необходимо преобразовать.
 * @returns {string} Результат.
 * @example
 * ```
 * StrLowerCase(str);
 * ```
 */
declare function StrLowerCase(str: string): string;

/**
 * Возвращает часть строки str, длиной length,
 * начиная с первого символа переданной строки.
 * Если второй аргумент больше длины передаваемой строки,
 * возвращается str.
 * @param {string} str - Строка.
 * @param {number} length - Длина строки.
 * @returns {string} Результат.
 * @example StrLeftRange(str, length)
 */
declare function StrLeftRange(str: string, length: number): string;

/**
 * Возвращает часть строки str, длиной length, начиная с первого символа переданной строки.
 * Если второй аргумент больше длины передаваемой строки, возвращается str.
 * В отличие от StrLeftRange возвращает не биты, а именно символы.
 * @param {string} str - Строка.
 * @param {number} length - Длина строки.
 * @returns {string} Результат.
 * @example
 * ```
 * StrLeftCharRange(str, length);
 * ```
 */
declare function StrLeftCharRange(str: string, length: number): string;

/**
 * Проверяет состоит ли строка только из цифр или латинских символов.
 * @param {string} str - Проверяемая строка.
 * @returns {boolean} Результат.
 * @example StrIsAlphaNum(str);
 */
declare function StrIsAlphaNum(str: string): boolean;

/**
 * Возвращает длину строки в байтах.
 * Данная длина может быть больше количества символов,
 * если приложение использует кодировку UTF-8.
 * Для определения количества символов в строке
 * необходимо использовать функцию StrCharCount.
 * @param {string} str - Строка.
 * @returns {number} Результат.
 */
declare function StrLen(str: string): number;

/**
 * Проверяет, начинается ли строка на другую строку.
 * @param {string} str - Строка, в которой ищут.
 * @param {string} subStr - Подстрока, которую ищут.
 * @param {boolean} ignoreCase - Не учитывать регистр.
 * @returns {boolean} Результат.
 * StrBegins(str, subStr, ignoreCase).
 */
declare function StrBegins(str: string, subStr: string, ignoreCase?: boolean): boolean;

/**
 * Проверяет, содержит ли строка другую строку в качестве подстроки.
 * @param {string} str - Строка, в которой ищут.
 * @param {string} subStr - Подстрока, которую ищут.
 * @param {boolean} ignoreCase - Не учитывать регистр.
 * @returns {boolean} Результат.
 * StrContains(str, subStr, ignoreCase).
 */
declare function StrContains(str: string, subStr: string, ignoreCase?: boolean): boolean;

/**
 * Проверяет, оканчивается ли строка на другую строку.
 * @param {string} str - Строка, в которой ищут.
 * @param {string} subStr - Подстрока, которую ищут.
 * @param {boolean} ignoreCase - Не учитывать регистр.
 * @returns {boolean} Результат.
 * StrEnds(str, subStr, ignoreCase).
 */
declare function StrEnds(str: string, subStr: string, ignoreCase?: boolean): boolean;

/**
 * Возвращает количество символов в строке.
 * @param {string} str - Строка.
 * @returns {number} Результат.
 */
declare function StrCharCount(str: string): number;

/**
 * Проверяет, удовлетворяет ли строка одной из масок.
 * Маски перечисляются через запятую вторым аргументом.
 * @param {string} str - Строка, в которой ищут.
 * @param {string} pattern - Шаблоны поиска, разделенные запятой.
 * @returns {boolean} Результат.
 * @example StrMatchesMultiPattern(str, "aaa*bbb,ccc*ddd*eee");
 */
declare function StrMatchesMultiPattern(str: string, pattern: string): boolean;

/**
 * Заменяет первое вхождение строки на указанную подстроку.
 * @param {string} str - Исходная строка.
 * @param {string} subStr - Исходная подстрока.
 * @param {string} newSubStr - Новая подстрока.
 * @returns {string} Результат.
 * @example StrReplaceOne(str1, str2);
 */
declare function StrReplaceOne(str: string, subStr: string, newSubStr: string): string;

/**
 * Возвращает часть строки, начиная с указанной позиции до конца строки.
 * @param {string} str - Строка.
 * @param {number} pos - Позиция.
 * @returns {string} Результат.
 * @example StrRightRangePos(str, pos);
 */
declare function StrRightRangePos(str: string, pos: number): string;

/**
 * Проверяет, удовлетворяет ли строка маске поиска, использующей символ '*'.
 * @param {string} str - Строка.
 * @param {string} mask - Маска.
 * @returns {boolean} Результат.
 * StrMatchesPattern( str, 'aaa*bbb' ).
 */
declare function StrMatchesPattern(str: string, mask: string): boolean;

/**
 * Преобразует строку в нижний регистр.
 * @param {string} str - Строка, которую нужно преобразовать.
 * @returns {string}
 * StrUpperCase(str).
 */
declare function StrUpperCase(str: string): string;

/**
 * Возвращает часть строки по заданным позициям.
 * @param {string} str - Строка.
 * @param {number} pos1 - Начальная позиция.
 * @param {number} pos2 - Конечная позиция.
 * @returns {string} Результат.
 * @example StrRangePos(str, pos1, pos2);
 */
declare function StrRangePos(str: string, pos1: number, pos2: number): string;

/**
 * Переводит первую букву строки в нижний регистр.
 * @param {string} str - Строка.
 * @returns {string}
 * StrNonTitleCase(str).
 */
declare function StrNonTitleCase(str: string): string;

/**
 * Заменяет все вхождения одной подстроки на другую в заданной строке, если такие имеются. Возвращает измененную строку.
 * @param {string} str - Исходная строка.
 * @param {string} subStr - Исходная подстрока.
 * @param {string} newSubStr - Новая подстрока.
 * @returns {string} Результат.
 * @example StrReplace(str, subStr, newSubStr);
 */
declare function StrReplace(str: string, subStr: string, newSubStr: string): string;

/**
 * Извлекает из строки фрагменты в соответствии с заданным шаблоном.
 * Шаблоны могут содержать элементы: %s - вхождение подстроки (возвращаемое) %*s - вхождение подстроки (невозвращаемое).
 * @param {string} str - Строка.
 * @param {any} arg - Шаблон.
 * @returns {Array} Результат.
 * @example
 * ```
 * const obj = StrScan(str, "%*s/vacancy/%s.htm");
 * vacancyID = obj[0];
 * ```
 */
declare function StrScan(str: string, arg: string): string[];

/**
 * Преобразует первую букву строки в заглавную.
 * @param {string} str - Строка, которую нужно преобразовать.
 * @returns {string} Результат.
 */
declare function StrTitleCase(str: string): string;

/**
 * Экспериментальная.
 * @returns {undefined}
 */
declare function StrWordMatchRating(): undefined;

/**
 * Заменяет повторяющиеся последовательности символов пробела,
 * перевода строк и табуляции в строке на одиночные пробелы.
 * @param {string} str - Исходная строка.
 * @returns {string} Результат.
 */
declare function UnifySpaces(str: string): string;

/**
 * Удаляет символы пробела, перевода строк и табуляции в начале и конце строки.
 * @param {string} str - Исходная строка.
 * @returns {string}
 * Trim(str).
 */
declare function Trim(str: string): string;


/**
 * Удаляет объект с заданным url.
 * @param {string} url - Url.
 * @returns {undefined}
 */
declare function DeleteUrl(url: string): undefined;

/**
 * Копирует содержимое под заданным url в новый url.
 * @param {string} destUrl - Url, в который производиться копирования.
 * @param {string} srcUrl - Url, содержимое которого копируется.
 * @returns {undefined}
 */
declare function CopyUrl(destUrl: string, srcUrl: string): undefined;

/**
 * Загружает содержимое заданного url
 * и возвращает его в виде строки,
 * содержащей бинарные данные.
 * @param {string} url - Url.
 * @returns {string} Результат.
 */
declare function LoadUrlData(url: string): string;

declare function LoadUrlText(url: string): string;

/**
 * Проверяет является ли строка абсолютным URL.
 * Существование объекта под указанным url не проверяется.
 * @param {string} url - Строка с URL.
 * @returns {boolean} Результат.
 * @example
 * ```
 * IsAbsoluteUrlStr("http://www.ya.ru/search.htm") === true
 * ```
 * @example
 * ```
 * IsAbsoluteUrlStr("search.htm") === false
 * ```
 */
declare function IsAbsoluteUrlStr(url: string): boolean;

/**
 * Сохраняет содержимое строки, содержащей бинарные данные, в заданном `URL`.
 * @param {string} url - `URL`.
 * @param {string} dataStr - Строка.
 * @returns {undefined}
 */
declare function PutUrlData(url: string, dataStr: string): undefined;

/**
 * Преобразует путь файловой системы в локальный `URL` типа `file:` или `x-local:`.
 * @param {string} path - Путь файловой системы.
 * @param {string} baseUrl - Базовый `URL`, к схеме которого будет приводиться путь.
 * @returns {string} Результат.
 * @example
 * ```
 * FilePathToUrl("C:\\Temp\\1.htm") == "file:///C:/Temp/1.htm"
 * ```
 */
declare function FilePathToUrl(path: string, baseUrl?: string): string;

/**
 * Заменяет суффикс (расширение) имени файла в заданном url.
 * Если заданный url имеет другой суффикс в имени файла, возвращается исходный url.
 * Функция не осуществляет фактического обращения к файловой системе.
 * @param {string} url - Url.
 * @param {string} suffix1 - Расширение, которое нужно заменить.
 * @param {string} suffix2 - Расширение, на которое нужно заменить.
 * @returns {string} Результат.
 * @example
 * ```
 * ReplaceUrlPathSuffix(
 *   "http://news.websoft.ru/tree.html?query",
 *   "html",
 *   "asp"
 * );
 * // "http://news.websoft.ru/tree.asp?query"
 * ```
 */
declare function ReplaceUrlPathSuffix(url: string, suffix1: string, suffix2: string): string;

/**
 * Преобразует заданный url в абсолютный. Если заданный url и так является абсолютным, возвращается он же.
 * @param {string} url - Относительный url.
 * @param {string} [baseUrl] - Базовый абсолютный url, относительно которого считается относительный url.
 * Если аргумент не указан, в качестве базового url используется родительский url файла, содержащий выполняемый код.
 * @returns {string} Результат.
 * @example
 * ```
 * AbsoluteUrl("zz/1.htm", "x-local://data/static") == "x-local://data/static/zz/1.htm"
 * AbsoluteUrl("zz/1.htm") == "x-app://rcr/zz/1.htm" // вызванный в библиотеке x-app://rcr/rcr_lib_recruit.js
 * ```
 */
declare function AbsoluteUrl(url: string, baseUrl: string): string;

/**
 * Регистрирует автоматическую подмену одного url другим.
 * После вызова функции при попытке любого обращения к url, являющегося дочерним,
 * по отношению к исходному базовому, будет происходить обращение к новому url,
 * полученному путем замены исходной базовой части на новую базовую часть.
 * Функция как правило используется для конвертации данных из предыдущих версий программ в новую,
 * при которой старые формы .xmd более не существуют и заменяются на новые.
 * @param {string} baseUrl - Базовый url, который нужно подменить.
 * @param {string} newBaseUrl - Базовый url, на который нужно подменить.
 * @returns {undefined}
 */
declare function AddUrlMapping(baseUrl: string, newBaseUrl: string): undefined;

/**
 * Добавляет фрагмент пути к заданному url.
 * @param {string} url - Url.
 * @param {string} addPath - Добавляемый путь.
 * @returns {string} Результат.
 * @example UrlAppendPath("http://www.lin.ru/service", "z/1.htm") == "http://www.lin.ru/service/z/1.htm"
 */
declare function UrlAppendPath(url: string, addPath: string): string;

/**
 * Извлекает url родительской директории из заданного url.
 * @param {string} url - Url.
 * @returns {string} Результат.
 * @example
 * ```
 * UrlParent("http://news.websoft.ru/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/tree.html?query=xxx");
 * // "http://news.websoft.ru/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/"
 */
declare function UrlParent(url: string): string;

/**
 * Извлекает имя файла из заданного url.
 * @param {string} url - Url.
 * @returns {string} Результат.
 * @example UrlHost("http://news.websoft.ru/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/tree.html?query=xxx") == "tree.html"
 */
declare function UrlFileName(url: string): string;

/**
 * Определяет размер файла в байтах по локальному url, переданному в качестве аргумента.
 * @param {string} url - Локальный url типа file: или x-local:.
 * @returns {number} Результат.
 */
declare function UrlFileSize(url: string): number;

/**
 * Извлекает из url, переданного в качестве аргумента, строку запроса в исходном виде.
 * @param {string} url - Url.
 * @returns {string} Результат.
 * @example UrlHost("http://news.websoft.ru/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/tree.html?query=xxx") == "query=xxx"
 */
declare function UrlParam(url: string): string;

/**
 * Возвращает дату изменения файла, находящегося по локальному пути типа file: или x-local:.
 * @param {string} url - Url.
 * @returns {Date} - Дата.
 */
declare function UrlModDate(url: string): Date;

/**
 * Возвращает хост из переданного в качестве аргумента URL.
 * @param {string} url - Url.
 * @returns {string} Результат.
 * @example
 * ```
 * UrlHost("http://news.websoft.ru/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/tree.html?query=xxx"); // "news.websoft.ru"
 * ```
 */
declare function UrlHost(url: string): string;

/**
 * Извлекает из URL, переданного в качестве аргумента, путь.
 * @param {string} url - Url.
 * @returns {string} Результат.
 * @example
 * ```
 * UrlPath("http://news.websoft.ru/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/tree.html");
 * // "/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/tree.html"
 * ```
 */
declare function UrlPath(url: string): string;

/**
 * Возвращает расширение файла, указанного через url.
 * @param {string} url - Url.
 * @returns {string}
 * UrlPathSuffix( 'http://news.websoft.ru/db/kb/0939DD37D1C5F9B8C3257403003E8F4F/tree.html' ) вернет '.html'.
 */
declare function UrlPathSuffix(url: string): string;

/**
 * Извлекает из URL, переданного в качестве аргумента, параметры запроса с разбивкой их на пары "имя - значение".
 * @param {string} url - Url.
 * @returns {object} Результат.
 * @example
 * ```
 * const obj = UrlQuery("http://news.websoft.ru/en?x=1&y=2&z=3");
 * alert(obj.x);
 * alert(obj.y);
 * ```
 */
declare function UrlQuery(url: string): Object;

/**
 * Преобразует локальный url типа file: или x-local: в путь файловой системы..
 * @param {string} url - Локальный url.
 * @returns {string}
 * UrlToFilePath( 'file:///d:/work/Temp.rar' ) вернет 'd:\\work\\Temp.rar'.
 */
declare function UrlToFilePath(url: string): string;

/**
 * Возвращает схему URL (file, http, mailto, ftp, x-local).
 * @param {string} url - Url.
 * @returns {string}
 * UrlSchema( 'http://news.websoft.ru/' ) вернет 'http'.
 */
declare function UrlSchema(url: string): string;

/**
 * Преобразует заданный url (схемы "x-app") в url, пригодный для использования во встроенном браузере (элемент HYPER).
 * Для десктоп-версии осуществляется преобразование в url схемы "file",
 * а для веб-версии - в специальный серверный запрос.
 * @param {string} url - Url.
 * @returns {string} Результат.
 */
declare function WebAppUrl(url: string): string;


/**
 * Возвращает документ с заданным url из кэша.
 * Если документ с заданным url в кэше отсутствует, функция завершается с ошибкой.
 * @param {string} url - Url документа.
 * @returns {WTXmlDocument} XmlDocument.
 */
declare function GetCachedDoc(url: string): XmlDocument;

/**
 * Удаляет на сервере приложения документ с заданным url.
 * Используется в специализированном коде, предназначенном для синхронизации баз данных или обмена данными между базами.
 * Аргументы: docUrl - url документа (String) options - опции, необязательный аргумент (String).
 * LdsDeleteDoc( 'x-db-obj://data/candidate/042D8A4596B679/E0.xml', 'lds-server=test2.datex.ru:9000' ).
 */
declare function LdsDeleteDoc(): undefined;

/**
 * Выдает Id объектного документа по его url. Смотри так же ObjectDocUrl .
 * @param {string} url - Url объекта.
 * @returns {number} Результат.
 */
declare function ObjectIDFromUrl(url: string): number;

/**
 * Удаляет документ с заданным url.
 * @param {string} url - Url документа.
 * @param {boolean} permanent - Удалить мимо корзины. По умолчанию - false.
 * DeleteDoc( 'x-db-obj://data/candidate/0x4DF75B9F13FE5160.xml' ).
 */
declare function DeleteDoc(url: string, permanent?: boolean): undefined;

/**
 * Возвращает url объектного документа по имени базы, типа объекта и Id документа.
 * @param {string} dbName - Наименование базы данных.
 * @param {string} objectType - Наименование типа объекта.
 * @param {string | number} objectID - Id документа (Integer или String).
 * @returns {string} Результат.
 * @example
 * ```
 * ObjectDocUrl("data", "person", 1238461"); // "x-db-obj://data/person/0x000000000012E5BD.xml"
 * ObjectDocUrl("data", "event_type", "interview"); // "x-db-obj://data/event_type/interview.xml"
 * ```
 */
declare function ObjectDocUrl(dbName: string, objectType: string, objectID: string | number): string;

/**
 * Перемещает XML-документ из одного url в другой url.
 * В отличие от обычного перемещения файла, действие этой функции сопровождается
 * выполнением стандартных свойств OnSave, OnBeforeSave и т.д.
 * Документ сначала пересохраняется по новому url, затем удаляется из предыдущей.
 * Редко используемая функция.
 * @param {string} url - Url существующего документа.
 * @param {string} newUrl - Новый url документа.
 */
declare function MoveDoc(url: string, newUrl: string): undefined;

/**
 * Открывает XML-документ и помещает его в кэш документов.
 * Если документ с заданным url уже находится в кэше, возвращается уже загруженный в кэш документ.
 * @param {string} url - Url документа.
 * @param {string} [options] - Опции открытия документа.
 * @returns {XmlDocument} XmlDocument.
 */
declare function FetchDoc(url: string, options: string): XmlDocument;

/**
 * Пытается найти открытую в пользовательском интерфейсе карточку XML-документа.
 * Если таковая карточка найдена, функция возвращает ссылку на документ из этой карточки.
 * В противном случае действие функции аналогично {@link OpenDoc}().
 * Чтобы сохранить измененный документ, необходимо использовать
 * функцию UpdateUiDoc (а не вызвать метод Doc.Save, как при открытии документа при помощи OpenDoc).
 * Если документ был открыт пользователем на экране, то при выполнении функции UpdateUiDoc
 * документ будет изменен прямо на экране, если открытого документа не было - то документ будет просто сохранен.
 * @param {string} docUrl - Url XML-документа.
 * @returns {XmlDocument} XmlDocument.
 */
declare function ObtainUiDoc(docUrl: string): XmlDocument;

/**
 * Загружает xml документ в кэш документов и делает его корневой элемент видимым в списке глобальных имен.
 * @param {string} docUrl - Url документа.
 * @returns {XmlDocument} XmlDocument.
 */
declare function RegisterSharedDoc(docUrl: string): XmlDocument;

/**
 * Открывает XML-документ, содержащийся к строке.
 * @param {string} dataStr - Строка, содержащая данные открываемого документа.
 * @param {string} [options] - Опции открытия документа в виде "param1='value1';param2='value2';...".
 * См. Опции открытия документа XML.
 * @returns {XmlDocument} XmlDocument.
 */
declare function OpenDocFromStr(dataStr: string, options?: string): XmlDocument;

/**
 * Загружает содержимое файла с заданным путем с учетом наличия BOM.
 * Если файл начинается на UTF-16 BOM, происходи конвертация из UTF-16 в текущую кодировку (UTF-8).
 * Если файл начинается на UTF-8 BOM, возвращается содержимое файла после BOM.
 * Если BOM в файле отсутствует, происходит конвертация из однобайтовой кодировки по умолчанию
 * (например Windows-1251) в текущую (UTF-8).
 * @param {string} filepath - Путь до файла.
 * @returns {string} Содержимое файла.
 */
declare function LoadFileText(filepath: string): string;

/**
 * Выдает наименование типа объекта по его url. Смотри так же ObjectDocUrl и ObjectIDFromUrl .
 * @param {string} url - Url объекта.
 * @returns {string} Результат.
 * @example
 * ```
 * ObjectNameFromUrl("x-db-obj://data/person/0x000000000012E5BD.xml"); // 'person'
 * ObjectNameFromUrl("x-db-obj://data/event_type/interview.xml"); // 'event_type'
 * ```
 */
declare function ObjectNameFromUrl(url: string): string;

/**
 * Создает новый XML-документ по заданной форме.
 * @param {string} formUrl - Url формы.
 * @returns {XmlDocument} XmlDocument.
 */
declare function OpenNewDoc<T = XmlDocument>(formUrl: string): T;

/**
 * Открывает XML-документ. Возвращает объект типа XmlDoc.
 * @param {string} url - Url документа.
 * @param {string} [options] - Опции открытия документа в виде "param1='value1';param2='value2';...".
 * См. Опции открытия документа XML.
 * @returns {XmlDocument} XmlDocument.
 */
declare function OpenDoc<T = XmlDocument>(url: string, options?: string): T;

/**
 * Сохраняет изменения в документе, открытом при помощи функции ObtainUiDoc.
 * Если это был документ, открытый пользователем на экране,
 * то функция устанавливает аргумент метода Doc.SetChanged(true),
 * и больше ничего не делает. Установка этого аргумента необходима,
 * чтобы при закрытии документа пользователю было предложено сохранить изменения.
 * Если это был документ, открытый программой без участия пользователя,
 * действие функции аналогично действию метода Doc.Save().
 * Аргумент doc - открытый документ (объект XmlDoc).
 */
declare function UpdateUiDoc(): undefined;

/**
 * Удаляет определенные форму из кэша. Функция используется в редких случаях при изменении структур данных на лету.
 * @param {string} urlPattern - Маска `URL` формы (т.е. `XMD`-файла).
 * DropFormsCache( '*candidate*' ).
 */
declare function DropFormsCache(urlPattern: string): undefined;

/**
 * Создает новый элемент формы. Созданный элемент формы не имеет родительского элемента.
 * Функция используется в редких случаях, например для динамической генерации форм данных.
 * @param {string} name - Имя поля `XMD`-формы.
 * @param {string} type - Тип данных `XMD`-формы.
 * @returns {XmlForm} XmlForm.
 */
declare function CreateFormElem(name: string, type: string): XmlFormElem;

/**
 * Пытается найти форму в кэше загруженных форм по заданному `URL`.
 * Если такая форма была загружена в кэш, возвращает объект ссылка на форму, если нет - возвращает undefined.
 * @param {string} url - `URL` формы.
 * @returns {XmlForm} XmlForm.
 */
declare function GetOptCachedForm(url: string): XmlForm;

/**
 * Удаляет все зарегистрированные при помощи функции {@link RegisterFormMapping}() перенаправления форм.
 * Функция обычно используется при конвертации баз данных из предыдущих версий программы.
 */
declare function DeleteAllFormMappings(): undefined;

/**
 * Регистрирует отображение (mapping) одной формы в другую.
 * Mapping - это таблица, в которой содержит соответствия между старыми и новыми формами документов.
 * При попытке открыть документ по старой форме, будет автоматически вызвана новая форма,
 * на которую указывает элемент таблицы. Функция используется в редких случаях,
 * обычно при конвертации данных из предыдущих версий программы.
 * @param {string} formUrl - `URL` старой формы.
 * @param {string} newForm - `URL` новой формы.
 */
declare function RegisterFormMapping(formUrl: string, newForm: string): undefined;

/**
 * Находит зарегистрированный AutoDoc (т.е пару `URL` документа - `URL` формы,
 * смотри так же функцию RegisterAutoDoc) в списке зарегистрированных автоматически документов,
 * и возвращает ссылку на форму.
 * Если соответствующая пара в списке отсутствует, возвращает undefined.
 * @param {string} documentUrl - `URL` документа.
 * @returns {XmlForm} XmlForm.
 */
declare function GetOptAutoDocForm(documentUrl: string): XmlForm;

/**
 * Если форма с данным `URL` уже находится в кэше, возвращается уже загруженный вариант.
 * @param {string} formUrl - `URL` формы.
 */
declare function FetchForm(formUrl: string): undefined;

/**
 * Регистрирует XML-форму, описанную в строке. Используется для программной генерации форм "на лету".
 * @param {string} formUrl - `URL`, по которому будет зарегистрирована форма.
 * @param {string} formData - Строка с описанием формы.
 * @returns {XmlForm} XmlForm.
 */
declare function RegisterFormFromStr(formUrl: string, formData: string): XmlForm;

/**
 * Регистрирует пару (`URL` документа) - (`URL` формы) для автоматически создаваемого документа.
 * Если где-то из программы будет обращение к этому документу с попыткой его открыть,
 * а документ еще не создан, то он будет создан по форме и открыт.
 * Если документ на момент обращения уже будет существовать, то он будет открыт по той же форме.
 * Используется для регистрации в программе каких-либо файлов, содержащих настройки,
 * которых изначально нет, но при первой попытки обращения к ним она фактически создаются в базе данных.
 * @param {string} documentUrl - Url документа.
 * @param {string} formUrl - Url формы.
 * @returns {undefined}
 * @example
 * ```
 * RegisterAutoDoc("x-local://static/global-settings.xml", "x-app://rcr/rcr_global_settings.xmd");
 * ```
 */
declare function RegisterAutoDoc(documentUrl: string, formUrl: string): undefined;

/**
 * Редко используемая функция.
 * Регистрирует фрагмент/элемент существующий формы под новым `URL`.
 * Новый `URL` состоит из `URL` формы и полного наименования элемента формы,
 * которое включает в себя путь внутри формы от корня до этого элемента.
 * Возвращает `URL` новой формы.
 * @param {string} formUrl - `URL` формы.
 * @param {string} formPath - Полное наименование элемента формы,
 * включающее в себя путь внутри формы от корня до этого элемента.
 * @returns {string} Результат.
 * @example
 * ```
 * RegisterSubForm("base3_events.xmd", "events.event");
 * ```
 */
declare function RegisterSubForm(formUrl: string, formPath: string): string;

/**
 * Проверяет, является ли значение `undefined`, `null` либо пустой строкой.
 * Позволяет писать универсальный код, не зная точный тип данных переданного аргумента.
 * @param {any} arg - Любое значение.
 * @returns {boolean} Результат.
 * @example
 * ```
 * IsEmptyValue(123) === false
 * IsEmptyValue("123") === false
 * IsEmptyValue(null) === true
 * IsEmptyValue("") === true
 * ```
 */
declare function IsEmptyValue(arg: Object): false;

/**
 * Проверяет, является ли значение `undefined`, `null` либо пустой строкой.
 * Позволяет писать универсальный код, не зная точный тип данных переданного аргумента.
 * @param {any} arg - Любое значение.
 * @returns {boolean} Результат.
 * @example
 * ```
 * IsEmptyValue(123) === false
 * IsEmptyValue("123") === false
 * IsEmptyValue(null) === true
 * IsEmptyValue("") === true
 * ```
 */
declare function IsEmptyValue(arg: unknown): arg is undefined | null | "";

/**
 * Преобразует значение аргумента к целому числу.
 * @param {number} value - Целое число, вещественное число или строка, содержащая число.
 * @returns {number} Результат.
 * @example
 * ```
 * Int(123);
 * Int("123");
 * Int(123.45);
 * ```
 */
declare function Int(value: string | number): number;

/**
 * Возвращает скалярное значение аргумента, если в качестве аргумента передан объект.
 * Если передано скалярное значение, возвращается оно же.
 * @param {XmlElem<T> | T} value - Аргумент (Any).
 * @returns {T} Результат.
 */
declare function RValue<T>(value: XmlElem<T> | T): T;

/**
 * Возвращает строку, содержащую аргумент в шестнадцатеричном виде (64 бита).
 * @param {number} num - Число, которую нужно преобразовать.
 * @returns {string} - Строка.
 * @example
 * ```
 * StrHexInt(1000); // "00000000000003E8"
 * ```
 */
declare function StrHexInt(num: number): string;

/**
 * Преобразует вещественный аргумент в строку.
 * @param {number} value - Вещественный аргумент.
 * @param {number} precision - Максимальное число знаков после запятой. По умолчанию 6.
 * @param {boolean} addGroupDelim - Разделять тысячные разряды пробелами.
 * @returns {string} Результат.
 * @example
 * ```
 * StrReal(90154.249); // "90154.249"
 * StrReal(90154.249, 2); // "90154.25"
 * StrReal(90154.249, 2, true); // "90 154.25"
 * ```
 */
declare function StrReal(value: number, precision?: number, addGroupDelim?: boolean): string;

/**
 * Преобразует значение аргумента к вещественному числу.
 * @param {string | number} value - Целое число, вещественное число или строка, содержащая вещественное число.
 * @returns {number} Результат.
 * @example
 * ```
 * Real(12.6);
 * Real("12.6");
 * ```
 */
declare function Real(value: string | number): number;

/**
 * Преобразует 10 обозначение цвета (RGB) в  шестнадцатеричное, принятое в формате html.
 * @param {string} color - 10 обозначение цвета .
 * @returns {string} Результат.
 * @example
 * ```
 * StrHexColor("128,128,128"); // "808080"
 * ```
 */
declare function StrHexColor(color: string): string;

/**
 * Если значение целочисленного аргумента = 0 преобразует его в "-",
 * иначе в строку (аналогично функции {@link StrInt}()).
 * @param {number} arg - Целочисленный аргумент.
 * @param {number} [digitsNum] - Минимальное число символов в строке.
 * @param {boolean} addGroupDelim - Разделять тысячные разряды пробелами.
 * @returns {string} Результат.
 */
declare function StrIntZero(arg: number, digitsNum: number, addGroupDelim: boolean): string;

/**
 * Преобразует вещественный аргумент в строку.
 * @param {number} arg - Вещественный аргумент.
 * @param {number} precision - Число символов в дробной части числа. Недостающие символы компенсируются нулями.
 * @param {boolean} addGroupDelim - Разделять тысячные разряды пробелами.
 * @returns {string} Результат.
 * @example
 * ```
 * StrRealFixed(90154.2) == "90154.20";
 * StrRealFixed(90154.2, 2, true) == "90 154.20";
 * ```
 */
declare function StrRealFixed(arg: number, precision?: number, addGroupDelim?: boolean): string;

/**
 * Преобразует целочисленный аргумент в строку.
 * @param {number} arg - Целочисленный аргумент.
 * @param {number} [digitsNum] - Минимальное число символов в строке.
 * Недостающие символы компенсируются нулями перед числом.
 * @param {boolean} [addGroupDelim] - Разделять тысячные разряды пробелами (Bool).
 * @returns {string} Результат.
 * @example
 * ```
 * StrInt(11500) == '11500'
 * StrInt(11500, 6) == '011500'
 * StrInt(11500, 0, true) == '11 500'
 * ```
 */
declare function StrInt(arg: number, digitsNum?: number, addGroupDelim?: boolean): string;

/**
 * Преобразует целое число в словесное строковое представление.
 * Только для русского языка.
 * @param {number} arg - Числовой аргумент.
 * @param {0|1} [gender] - Род (0 - мужской, 1] - женский).
 * @returns {string} Результат.
 * @example
 * ```
 * TextInt(121) == "сто двадцать один"
 * TextInt(121, 1) == "сто двадцать одна"
 * ```
 */
// eslint-disable-next-line no-magic-numbers
declare function TextInt(arg: number, gender: 0 | 1): string;

/**
 * Возвращает уникальный Id.
 * @returns {number} Id.
 */
declare function UniqueID(): number;
declare function ParseHeaderPairs(string: string): Object;


/**
 * Кодирует строку, содержащую текст, для использования внутри HTML.
 * В результате символы & и < заменяются на &amp; и &lt;, соответственно, а переводы строк - на <br/>.
 * @param {string} str - Строка.
 * @returns {string} Результат.
 */
declare function HtmlEncode(str: string): string;

/**
 * Декодирует данные из формата Base64. Данные возвращаются в виде строки, которая может содержать бинарные данные.
 * @param {string} str - Строка в Base64.
 * @returns {string} Результат.
 */
declare function Base64Decode(str: string): string;

/**
 * Переводит строку из кодировки, используемой  в программе по умолчанию, в заданную кодировку.
 * @param {string} str - Строка.
 * @param {string} charset - Имя кодировки, в которую нужно перевести строку.
 * @returns {string} Результат.
 */
declare function EncodeCharset(str: string, charset: string): string;

/**
 * Преобразует строку, содержащую HTML, в простой текст.
 * @param {string} html - Строка, содержащая HTML.
 * @returns {string} Результат.
 */
declare function HtmlToPlainText(html: string): string;

/**
 * Преобразует массив байт в 16-ое представление.
 * @param {string} arg - Строка, содержащая массив байт.
 * @returns {string}
 * HexData( 'апрол' ) вернет 'E0EFF0EEEB'.
 */
declare function HexData(arg: string): string;

/**
 * Преобразует строку, содержащую обычный текст в полный HTML-документ.
 * Действие функции аналогично действию функции {@link HtmlEncode}(), но,
 * в отличие от последней, {@link HtmlEncodeDoc}() формирует завершенный HTML-документ,
 * содержащий теги <html>, <body> и др.
 * @param {string} str - Str.
 * @returns {string} Результат.
 */
declare function HtmlEncodeDoc(str: string): string;

/**
 * Формирует тело http запроса для последующей отправки методом POST в формате multipart/form-data.
 * @param {object} obj - Объект, содержащий атрибуты и их значения (Object).
 * @returns {string} Результат.
 */
declare function MultipartFormEncode(obj: Object): string;

/**
 * Кодирует строку в формат Base64.
 * @param {string} str - Строка. Может содержать бинарные данные.
 * @returns {string} Результат.
 */
declare function Base64Encode(str: string): string;

/**
 * Переводит строку из заданной кодировки в кодировку, используемой в программе по умолчанию.
 * @param {string} str - Строка, которую нужно перевести.
 * @param {string} charset - Название кодировки, в которую нужно перевести строку.
 * @returns {string} Результат.
 */
declare function DecodeCharset(str: string, charset: string): string;

/**
 * Кодирует обычный текст в формат rtf.
 * @param {string} str - Строка, которую нужно преобразовать.
 * @returns {string} Результат.
 */
declare function RtfEncode(str: string): string;

/**
 * Шифрует строку простым встроенным алгоритмом шифрования.
 * @param {string} str - Шифруемая строка.
 * @returns {string} Результат.
 */
declare function StrSimpleEncrypt(str: string): string;

/**
 * Переводит текст в формате rtf в обычный текст.
 * @param {string} str - Текст в формате rtf.
 * @returns {string} Результат.
 */
declare function RtfToPlainText(str: string): string;

/**
 * Дешифрует строку, зашифрованную простым встроенным алгоритмом.
 * @param {string} str - Дешифруемая строка.
 * @returns {string} Результат.
 */
declare function StrSimpleDecrypt(str: string): string;

/**
 * Декодирует строчку по стандартным правилам декодирования url, т.е. Заменяет знак "%код" на соответствующий символ.
 * @param {string} url - Url.
 * @returns {string}
 * UrlDecode( 'qwerty%2D%E0%EF%F0%EE%EB%2Ehtm' ) вернет 'qwerty-апрол.htm'.
 */
declare function UrlDecode(url: string): string;

/**
 * Кодирует строку символов для использования в качестве параметра url, используя UTF-16.
 * @param {string} str - Строка.
 * @returns {string}
 * UrlEncode( 'qwerty-апрол.htm' ) вернет 'qwerty%2D%u0430%u043F%u0440%u043E%u043B%2Ehtm'.
 */
declare function UrlEncode16(str: string): string;

/**
 * Кодирует строку символов для использования в качестве параметра url.
 * @param {string} str - Строка.
 * @returns {string}
 * UrlEncode( 'qwerty-апрол.htm' ) вернет 'qwerty%2D%E0%EF%F0%EE%EB%2Ehtm'.
 */
declare function UrlEncode(str: string): string;

/**
 * Кодирует значение как константу (литерал) языка SQL.
 * Функция используется при генерировании выражений на SQL из программы.
 * @param {any} arg - Аргумент произвольного типа.
 * @returns {string}
 * Значение типа string заключается в кавычки, при этом существующие кавычки внутри строки маскируются по правилам SQL.
 * Значение типа integer переводится в соответствующее строковое значение.
 * Значение типа date переводится в строку, содержащую дату в формате SQL.
 */
declare function SqlLiteral(arg: string | number | Date | null): string;

/**
 * Преобразует объект типа Object в строку вида 'name1=value1&name2=value2&...'
 * для использования в качестве запроса в url.
 * @param {object} obj - Объект, содержащий список значений (Object).
 * @returns {string} Результат.
 */
declare function UrlEncodeQuery(obj: Object): string;

/**
 * Маскирует аргумент для вставки в xml в качестве значения атрибута.
 * В результате действия функции символы перевода строки, табуляции,
 * символы & и < и двойные кавычки маскируются последовательностями &#10;, &#09;, &lt;, &amp; и &quot;.
 * @param {string} str - Аргумент.
 * @returns {string} Результат.
 */
declare function XmlAttrEncode(str: string): string;

/**
 * Преобразует объект типа Object в строку вида 'name1=value1&name2=value2&...'
 * для использования в качестве запроса в url.
 * @param {object} obj - Объект, содержащий список значений (Object).
 * @param {string} [charset] - Целевая кодировка.
 * @returns {string} Результат.
 */
declare function UrlEncodeQueryExt(obj: Object, charset: string): string;

/**
 * Формирует строку с xml тегом.
 * @param {string} name - Имя тега.
 * @param {string} text - Значение тега.
 * @returns {string}
 * XmlStr( 'text', 'Hotel "Ariana"' ) возвращает '<text>'Hotel &quot;Ariana&quot;</text>'.
 */
declare function XmlStr(name: string, text: string): string;

/**
 * Кодирует аргумент как константу XQuery. Функция используется при генерировании выражений XQuery из программы.
 * @param {string | number| Date} arg - Аргумент.
 * @returns {string}
 * Значение типа string заключается в одинарные кавычки,
 * при этом существующие кавычки внутри строки маскируются по правилам XQuery.
 * Значение типа integer или real переводится в соответствующее строковое значение
 * Значение типа bool переводится в строку 'true()' или 'false()'.
 * Значение типа date переводится в строку вида date( '2011-01-30T10:30:00' ).
 */
declare function XQueryLiteral(arg: string | number | Date): string;


/**
 * Возвращает путь к директории, из которой запущено приложение.
 * @returns {string} Результат.
 */
declare function AppDirectoryPath(): string;

/**
 * Создает новую директорию внутри существующей директории.
 * @param {string} path - Путь до новой директории, или url.
 * @returns {undefined}
 */
declare function CreateDirectory(path: string): undefined;

/**
 * Возвращает дату модификации файла.
 * @param {string} path - Путь (или url) к файлу.
 * @returns {Date} - Дата.
 */
declare function GetFileModDate(path: string): Date;

/**
 * Удаляет директорию, включая все вложенные файлы и директории.
 * @param {string} path - Путь (или url) до удаляемой директории.
 * @returns {undefined}
 */
declare function DeleteDirectory(path: string): undefined;

/**
 * Проверяет существует ли файл (или директория) по указанному пути.
 * @param {string} path - Путь к файлу.
 * @returns {boolean} Результат.
 */
declare function FilePathExists(path: string): boolean;

/**
 * Проверяет существует ли файл (или директория) по указанному url.
 * @param {string} url - Url файла.
 * @returns {boolean} Результат.
 */
declare function UrlExists(url: string): boolean;

/**
 * Извлекает имя файла из пути, переданного в качестве аргумента.
 * @param {string} url - Путь к файлу.
 * @returns {string}
 * FileName( 'work\data\doc.pdf' ) вернет 'doc.pdf' FileName( 'work\data\' ) вернет 'data'.
 */
declare function FileName(url: string): string;

/**
 * Удаляет файл.
 * @param {string} path - Путь (или url) к удаляемому файлу.
 * @returns {undefined}
 */
declare function DeleteFile(path: string): undefined;

/**
 * Проверяет открыт ли файл в другом приложении.
 * @param {string} path - Путь (или url) к файлу.
 * @returns {boolean} Результат.
 */
declare function FileIsBusy(path: string): boolean;

/**
 * Создает ярлык на указанный файл.
 * @param {string} linkPath - Путь (или url) к создаваемому ярлыку.
 * @param {string} targetPath - Путь (или url) к файлу, на который будет указывать ярлык.
 * @returns {undefined}
 */
declare function CreateShellLink(linkPath: string, targetPath: string): undefined;

/**
 * Возвращает путь к одной из стандартных директорий Shell.
 * @returns {string}
 * AppData - директория для хранения данных пользователя, например "C:\Documents and Settings\User\Application Data".
 */
declare function GetShellFolderPath(): string;

/**
 * Проверяет, является ли указанный путь (или url) директорией.
 * @param {string} path - Путь (или url).
 * @returns {boolean} Результат.
 */
declare function IsDirectory(path: string): boolean;

/**
 * Возвращает url для временного файла.
 * @param {string} [suffix] - Требуемый суффикс имени файла.
 * @returns {string} Результат.
 */
declare function ObtainTempFile(suffix?: string): string;

/**
 * Загружает содержимое файла по заданному пути, результат возвращается в виде строки, содержащей бинарные данные.
 * @param {string} path - Путь к файлу.
 * @returns {string} Результат.
 */
declare function LoadFileData(path: string): string;

/**
 * Проверяет, существует ли указанная директория, если нет - создает ее.
 * @param {string} path - Путь (или url) к директории.
 * @param {boolean} [isRecursive] - Создавать всю цепочку родительских директорий, если они не существуют.
 * @returns {undefined}
 */
declare function ObtainDirectory(path: string, isRecursive?: boolean): undefined;

/**
 * Проверяет является ли путь к файлу, переданный в качестве аргумента.
 * Существование файла по данному пути не проверяется.
 * @param {string} path - Путь к файлу.
 * @returns {boolean} Результат.
 * IsAbsoluteFilePath( 'c:\temp\1.ddd' ) вернет true IsAbsoluteFilePath( 'temp\1.ddd' ) вернет false.
 */
declare function IsAbsoluteFilePath(path: string): boolean;

/**
 * Возвращает url для временного файла, который будет автоматически удален при следующем запуске приложения.
 * @param {string} [suffix] - Требуемый суффикс имени файла.
 * @returns {string} Результат.
 */
declare function ObtainSessionTempFile(suffix?: string): string;

/**
 * Перемещает или переименовывает файл.
 * @param {string} path1 - Исходный путь к файлу.
 * @param {string} path2 - Новый путь к файлу.
 * @returns {undefined}
 */
declare function MoveFile(path1: string, path2: string): undefined;

/**
 * Возвращает путь к родительской директории. Фактическое существование директорий не проверяется.
 * @param {string} path - Путь к исходной директории.
 * @returns {string} Результат.
 */
declare function ParentDirectory(path: string): string;

/**
 * Возвращает массив, содержащий список файлов и вложенных директорий внутри указанной директории.
 * Каждый элемент массива будет содержать полный путь ко вложенному файлу или директории.
 * @param {string} path - Путь до директории.
 * @returns {Array} - Результат.
 */
declare function ReadDirectoryByPath(path: string): string[];

/**
 * Возвращает путь к директории для хранении данных пользователя.
 * По умолчанию директория совпадает с установочной, если специальными настройками не установлено иное.
 * @returns {string} Результат.
 */
declare function UserDataDirectoryPath(): string;

/**
 * Сохраняет содержимое строки в файл. Содержимое строки интерпретируется как бинарные данные.
 * @param {string} path - Путь к файлу.
 * @param {string} str - Данные.
 * @returns {undefined}
 */
declare function PutFileData(path: string, str: string): undefined;

/**
 * Проверяет, существует ли директория по указанному пути.
 * @param {string} path - Путь до директории.
 * @returns {boolean} Результат.
 */
declare function PathIsDirectory(path: string): boolean;

/**
 * Возвращает массив, содержащий список файлов и вложенных директорий внутри указанной директории.
 * Каждый элемент массива будет содержать `URL` вложенного файла или директории.
 * @param {string} dirUrl - Url директории.
 * @returns {Array} - Результат.
 */
declare function ReadDirectory(dirUrl: string): string[];

/**
 * Преобразует значение аргумента к целому числу.
 * Если преобразование выполнить невозможно, возвращает undefined, либо defaultVal, если оно указано.
 * @param {T} value - Целое число, вещественное число или строка, содержащая число.
 * @param {K} [defaultValue] - Значение по умолчанию.
 * @returns {number | K} - Результат.
 */
declare function OptInt<T, K = undefined>(value: T, defaultValue?: K): number | K;

/**
 * Преобразует значение аргумента к вещественному числу.
 * Если аргумент не может быть преобразован к вещественному числу,
 * функция возвращает undefined, либо defaultVal, если оно указано.
 * @param {T} value - Целое число, вещественное число или строка, содержащая вещественное число.
 * @param {K} [defaultValue] - Значение по умолчанию.
 * @returns {number | K} - Результат.
 */
declare function OptReal<T, K = undefined>(value: T, defaultValue?: K): number | K;

/**
 * Возвращает `URL` объектного документа с заданным id.
 * @deprecated
 * Устаревшая функция, используемая в старой объектной модели.
 * @param {number} documentId - Id документа.
 * @param {string} databaseName - Имя базы.
 * @returns {string} Результат.
 */
declare function UrlFromDocID(documentId: number, databaseName?: string): string;

type EncodeJsonOptions = {
  /** @type форматирование с отступами и переводами строк. */
  PrettyFormat: boolean;
  /** @type Экспортировать целые числа, значение которых больше 0x7FFFFFFF, в виде строковой константы в кавычках. */
  ExportLargeIntegersAsStrings: boolean;
};

/**
 * Преобразует базовый объект, массив, либо скалярное значение в строку в формате JSON.
 * Функция работает аналогично функции JSON.stringify() в JavaScript,
 * однако второй аргумент представляет из себя набор опций.
 * @param {T} value - Значение.
 * @param {EncodeJsonOptions} [options] - Базовый объект, содержащий набор опций.
 * @returns {string} Сериализованный объект.
 */
declare function EncodeJson<T>(value: T, options?: EncodeJsonOptions): string;

type ParseJsonOptions = {
  StrictMode: boolean;
};

/**
 * Преобразует строку, содержащую JSON, в базовый объект, массив, либо скалярное значение.
 * Функция работает аналогично функции JSON.parse() в JavaScript,
 * однако второй аргумент представляет из себя набор опций.
 * Также ParseJson() менее требовательна к формату,
 * и по умолчанию обрабатывает строки не только в формате JSON,
 * но и JavaScript literal, разрешая в том числе любые типы кавычек,
 * а также значения undefined.
 * @param {string} value - Строка.
 * @param {ParseJsonOptions} [options] - Опции.
 * @returns {T} JSON объект.
 */
declare function ParseJson<T>(value: string, options?: ParseJsonOptions): T;

/**
 * Извлекает из объекта типа {@link Error} пользовательскую часть сообщения об ошибке.
 * Если объект не содержит пользовательской части, возвращается полное описание ошибки.
 * @param {Error | string} error - Ошибка.
 * @returns {string} Результат.
 * @example
 * ```
 * try {
 *   HttpRequest( .... );
 * } catch (error) {
 *   alert("Невозможно активировать программу: " + ExtractUserError(error));
 * }
 * ```
 */
declare function ExtractUserError(error: Error | string): string;

/**
 * Выполняет код JScript в текущем окружении. В отличие от функции {@link eval} выполняет код на том же уровне
 * (переменные, объявленные внутри кода, будут видны снаружи), и не позволяет возвращать значение.
 * @param {string} code - Выполняемый код JScript.
 */
declare function InPlaceEval(code: string): undefined;

/**
 * Интерпретирует содержимое страницы по правилам ASP.
 * @param {string} pageUrl - Url, содержащий текст активной страницы.
 * @param {string} [options] - Опции.
 * @returns {string} Результат.
 * Значение strict-errors - завершать функцию с ошибкой, если таковая возникнет при обработке страницы (Bool).
 * По умолчанию, в случае возникновения ошибки ее текст добавляется к результату, а функция возвращается без ошибки.
 */
declare function EvalCodePageUrl(pageUrl: string, options?: string): string;

/**
 * Кодирует аргумент как константу JScript. Используется для генерации выражений.
 * @param {any} value - Аргумент (Any).
 * @param {any} quoteChar - Символ, используемый в качестве кавычки
 * (допустимые значения: одинарная или двойная кавычка).
 * Необязательный аргумент. По умолчанию используется одинарная кавычка.
 * @returns {string} Результат.
 * Значение null Значение типа string заключается в кавычки,
 * при этом существующие кавычки внутри строки маскируются по правилам JScript.
 * Значение типа integer или real переводится в соответствующее строковое значение.
 * Значение типа bool переводится в строку 'true' или 'false'.
 * Значение типа date переводится в строку вида `Date("2011-01-30T10:30:00")`.
 */
declare function CodeLiteral(value: undefined | null | string | number | boolean | Date, quoteChar?: string): string;

/**
 * Регистрация глобальной библиотеки отмеченной директивой `"META:NAMESPACE:{namespace_name}"`.
 * @param {string} url - `URL` библиотеки.
 */
declare function RegisterCodeLibrary(url: string): void;

/**
 * Функция ядра, которая удаленно (на сервере) вызывает метод с параметрами для конкретного объекта.
 * Примечание - По существу, оператор oResult = CallObjectMethod (oLib, ‘some_function’, [param1, param2])
 * выполняет почти то же самое, что и oResult = oLib.some_function (param1, param2),
 * с той разницей, что второй вариант выполнится там, где он вызван (на клиенте или на сервере),
 * а первый вариант – всегда выполняется на сервере (но результат выполнения возвращается в место вызова).
 * См. Также tools.call_code_library_method.
 * @param {object} object - Тип: Объект без задания структуры (variant). Объект, для которого производится вызов метода.
 * @param {string} method - Тип: Строка. Название вызываемого метода объекта.
 * @param {T} params - (необязательный). Тип: Массив без описания структуры элементов. Массив параметров.
 * В качестве элементов массива могут быть объекты разного типа – строки, числа, объекты, массивы…
 * Порядок следования элементов в массиве должен соответствовать порядку параметров метода.
 * Параметры могут быть перечислены через запятую, а весь массив - заключен в квадратные скобки.
 * В случае, если параметры метода не предусмотрены, указывается пустой массив ([]).
 * @returns {unknown} Result.
 */
declare function CallObjectMethod<T>(object: Object, method: string, params?: T): unknown;

/**
 * Интерпретирует содержимое страницы по правилам ASP.
 * @param {string} pageData - Строка, содержащая текст страницы.
 * @param {boolean} [raiseErrors] - Завершать функцию  с ошибкой, если таковая возникнет при обработке страницы (Bool).
 * По умолчанию, в случае возникновения ошибки ее текст добавляется к результату, а функция возвращается без ошибки.
 * @returns {string} Результат.
 */
declare function EvalCodePage(pageData: string, raiseErrors?: boolean): string;

/**
 * Проверяет, является ли заданный объект типа Error ошибкой отменой операции .
 * @param {any} e - Объект типа Error.
 * @returns {boolean} Результат.
 * @example
 * ```
 * try {
 *   HttpRequest( .... );
 * } catch(e) {
 *   if (!IsCancelError(e)) alert('Невозможно активировать программу: ' + ExtractUserError(e));
 * }
 * ```
 */
declare function IsCancelError<T>(e: T): boolean;

/**
 * Выполняет код JScript в текущем окружении. Аналогична стандартной функции JScript с таким же именем, но,
 * в отличие от нее выполняет код на отдельном уровне (переменные, объявленные внутри кода, не будут видны снаружи).
 * См. Также `InPlaceEval`.
 * @param {string} code - Выполняемый код JScript.
 * @returns {unknown} Результат.
 */
declare function eval(code: string): unknown;

/**
 * Выполняет код JScript аналогично функции {@link eval}(), но внутри т.н. Критической секции,
 * что исключает одновременное выполнение кода из разных потоков.
 * Функция как правило используется для доступа к данным, не являющимся thread-safe,
 * например к глобальным XML-документам. Данной функцией следует пользоваться с осторожностью,
 * поскольку глобальная секция является общей для всего приложения.
 * Не следует выполнять внутри критической секции код, который может занять
 * продолжительное время (обращения к диску, сети и д.р.).
 * @param {string} codeString - Объект String, содержащий допустимый код JScript.
 * @returns {unknown} Результат.
 * @example
 * ```
 * EvalCs("global_agents.agent_completed = true");
 * ```
 */
declare function EvalCs(codeString: string): unknown;

/**
 * Загружает код на JavaScript из заданного url и выполняет его.
 * @param {string} codeUrl - Url, содержащий код.
 * @param {string} subCode - Вспомогательный код, выполняемый после выполнения основного кода.
 * Необязательный аргумент. Как правило, содержит вызов функции, описанный в основном коде.
 * @returns {unknown}
 * EvalCodeUrl("rcr_lib_backup.js", "RunBackup()") Использование данной функции для вызова функций,
 * описанных в файле, не рекомендуется после появления функции {@link OpenCodeLib}(),
 * предлагающей более понятные правила области видимости переменных: `OpenCodeLib("rcr_lib_backup.js").RunBackup()`.
 */
declare function EvalCodeUrl(codeUrl: string, subCode: string): unknown;

/**
 * Обозначает текущий статус выполнения фрагмент кода с упрощенной индикацией пользователю,
 * начатого путем вызова функции {@link StartModalTask}().
 * @param {string} msg - Строка статуса.
 * @returns {undefined}
 */
declare function ModalTaskMsg(msg: string): undefined;

/**
 * Выполняет заданный код на сервере, и возвращает результат.
 * Результат может быть только в виде строки.
 * Если эта функция вызывается на однопользовательской локальной версии программы,
 * она полностью аналогична функции eval.
 * @param {string} code - Код, который будет выполняться на сервере.
 * @returns {string} Результат.
 */
declare function ServerEval(code: string): string;

/**
 * Выполняет код в окружении, где доступны только те объекты и переменные,
 * которые описаны (являются свойствами) объекта param_object.
 * Другие переменные и объекты (системные или описанные в коде, внутри которого был вызван `SafeEval`) недоступны.
 * Смотрите также функцию {@link eval}.
 * @param {string} code - Код.
 * @param {unknown[]} args - Объект, содержащий набор свойств, определяющих окружение, в котором будет исполнятся код.
 * Если данный аргумент не указан, то программный код исполняется в пустом окружении.
 * Однако, обычно данный аргумент указывается.
 * @returns {unknown} Результат.
 */
declare function SafeEval(code: string, args?: unknown[]): unknown;

/**
 * Выполняет код JS, который, возможно, завершится с ошибкой,
 * с возвратом заданного значения по умолчанию в случае ошибки.
 * @param {string} code - Код JScript.
 * @param {any} defaultValue - Значение, возвращаемое в случае ошибки
 * Если аргумент не указан, а код завершается с ошибкой, возвращается undefined.
 * @returns {T | undefined} Результат.
 * @example
 * ```
 * OptEval("doc.TopElem.xxx", "");
 * ```
 */
declare function OptEval<T>(code: string, defaultValue?: T): T | undefined;

/**
 * Обозначает запуск длительного фрагмент кода с упрощенной индикацией пользователю.
 * Прогресс выполнения будет обозначаться путем периодического вызова функции {@link ModalTaskMsg}.
 * @param {string} taskTitle - Название задачи для пользователя.
 * @example
 * ```
 * ModalTaskMsg("Импорт данных");
 * for (i = 0; i < 3; i++) {
 *   ModalTaskMsg("Объект " + i);
 * }
 * FinishModalTask();
 * ```
 * В часто вызываемом коробочном коде данную функцию использовать не рекомендуется,
 * ввиду наличия более удобного для пользователя механизма методов с прогресс-индикаторами.
 * Функцию хорошо использовать в одноразовом или редко используемом коде ввиду его простоты.
 */
declare function StartModalTask(taskTitle: string): undefined;

/**
 * Открывает документ либо с расширением XML, содержащий набор методов,
 * и возвращает его корневой элемент, либо с расширением .JS,
 * содержащий функции, возвращает псевдо-документ (псевдо-форму),
 * содержащую те же функции. Действие этой функции похоже
 * на действие функции {@link EvalCodeUrl}, но не тождественны ей.
 * Если мы выполняем сторонние функции при помощи
 * {@link EvalCodeUrl}, то переменные из нашего кода видны внутри сторонних функций,
 * что может привести к разрушению кода при совпадении названий переменных.
 * {@link OpenCodeLib} Лишен этого недостатка, т.к. Приводит к загрузке функций
 * из внешнего источника как независимых методов, каждый из которых
 * выполняется в собственном окружении. Но в этом случае, в отличие от
 * {@link EvalCodeUrl}, загружаемый js-файл не может содержать глобальных
 * переменных, а только функции.
 * @param {string} url - Url загружаемого документа с расширением XML или JS.
 * @returns {XmlDocument} XmlDocument.
 */
declare function OpenCodeLib(url: string): XmlDocument;

/**
 * Вызывает метод (функцию) библиотеки на сервере приложения.
 * У метода должна быть установлена мета-директива `"META:ALLOW-CALL-FROM-CLIENT:1"`.
 * Значения аргументов могу быть переданы либо через массив, либо через стандартный объект,
 * содержащий пары "имя аргумента" - "значения аргумента".
 * Не все типы значений могут быть переданы в серверный метод и возвращены обратно.
 * Поддерживаются все скалярные типы, стандартные массивы, стандартные объекты,
 * а также объекты {@link XmlElem} и {@link XmlDoc}.
 * @param {string} libraryName - Имя библиотеки либо `URL` библиотеки.
 * @param {string} methodName - Имя метода.
 * @param {unknown[]} arguments - Стандартный массив значений аргументов,
 * либо стандартный объект, содержащий значения аргументов.
 * @returns {unknown} Результат.
 */
declare function CallServerMethod(libraryName: string, methodName: string, arguments?: unknown[]): unknown;

/**
 * Возвращает тип переданного значения.
 * @param {T} entity - Проверяемое значение.
 * @returns {string} Результат.
 */
declare function DataType<T>(entity: T): string;

/**
 * Возвращает тип переданного значения.
 * @param {T} entity - Проверяемое значение.
 * @returns {string} Результат.
 */
declare function ObjectType<T>(entity: T): string;

/**
 * Разбивает сроку на одиночные символы.
 * Возвращает массив кодов каждого символа в UTF-16.
 * @param {string} str - Строка.
 * @returns {number[]} Массив кодов символов.
 */
declare function StrToCharCodesArray(str: string): number[];

/**
 * Разбивает сроку на одиночные символы.
 * Возвращает массив строк, каждая из которых содержит одиночный символ.
 * @param {string} str - Строка.
 * @returns {string[]} Массив символов.
 */
declare function StrToCharArray(str: string): string[];

/**
 * Функция StrFromCharCode преобразует код символа (число) в строку, содержащую этот символ.
 * @param {number} code - Код символа.
 * @returns {string} Результат.
 */
declare function StrFromCharCode(code: number): string;

/**
 * Вычисляет контрольную сумму (64 бита) по алгоритму SHA256.
 * Возвращает бинарную строку длиной 32 байта.
 * @param {string} value - Строка (интерпретируется как массив байт).
 * @returns {string} Бинарная строка.
 */
declare function SHA256(value: string): string;

/**
 * Преобразует целочисленный аргумент в строку.
 * Используется в том числе для того что бы вывести отрицательное число.
 * @param {number} value - Целочисленный аргумент.
 * @param {number} [digitsNum] - Минимальное число символов в строке. Необязательный аргумент.
 * Недостающие символы компенсируются нулями перед числом.
 * @param {boolean} [addGroupDelim] - Флаг, разделять тысячные разряды пробелами или нет.
 * @returns {string} Результат преобразования.
 */
declare function StrSignedInt(value: number, digitsNum?: number, addGroupDelim?: boolean): string;
