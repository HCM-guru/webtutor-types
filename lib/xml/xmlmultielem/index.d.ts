interface XmElem<T> {
  /**
   * Возвращает массив названий атрибутов элемента.
   * Элемент должен быть динамическим, поскольку для статических элементов атрибуты не поддерживаются.
   */
  AttrNames: string[];

  /**
   * Идет "по цепочке" элементов вверх, и возвращает первый элемент с атрибутом MULTIPLE="1".
   * Если такого элемента нет, возвращается ошибка.
   */
  BaseMultipleElem: XmlElem<T> | Error;

  /**
   * Возвращает индекс текущего элемента внутри родительского элемента, начиная с "0".
   * Если родительского элемента нет - возвращается ошибка.
   */
  ChildIndex: number | Error;

  /**
   * Возвращает документ, в состав которого входит текущий элемент.
   * Если документа нет - возвращает ошибку.
   */
  Doc: XmlDocument<unknown> | Error;

  /**
   * Возвращает основное отображаемое значение элемента для внешнего использования,
   * например, для внешних ссылок. Обычно используется для элементов каталога.
   * Для простых элементов совпадет с PrimaryDispName, если элемент иерархический -
   * возвращает всю цепочку имен по иерархии.
   */
  ExternalDispName: string;

  /**
   * Возвращает целевой массив (вычисляет выражение, описанное в атрибуте FOREIGN-ARRAY).
   * Если атрибут FOREIGN-ARRAY в форме элемент не описан, возвращается ошибка.
   */
  ForeignArray: unknown[];

  /**
   * Возвращает значение атрибута FOREIGEN-ARRAY в том виде,
   * в котором оно был описан в форме.
   */
  ForeignArrayCodeStr: string;

  /**
   * Возвращает внешнее первичное отображаемое значение того объекта, на который ссылается атрибут FOREIGN-ELEM.
   * Для обычных элементов конструкция `person.org_id.ForeignDispName`
   * эквивалентна `person.org_id.ForeignElem.ExternalDispName`
   * Для элементов типа MULTIPLE результат составляется из всех значений одиночных элементов, разделенных через запятую.
   * Таким образом конструкция `candidate.profession_id.ForeignDispName`
   * эквивалентна `ArrayMerge(candidate.profession_id, 'ForeignElem.ExternalDispName', ', ')`
   */
  ForeignDispName: string;

  /**
   * Возвращает соответтвующий элемент целевого массива (описанного в атрибуте FOREIGN-ARRAY).
   * Если элемент не найден - возвращает ошибку.
   */
  ForeignElem: unknown | void;

  /**
   * Атрибут возвращает url объекта, на который ссылается атрибут ForeignElem из текущего элемента. Целевой массив должен быть каталогом.
   * В новой объектной модели конструкция `person.org_id.ForeignObjectUrl`
   * эквивалентна `person.org_id.ForeignElem.ObjectUrl`
   * но, в отличие от последней, не осуществляет поиск целевого элемента, а только использует имя каталога из FOREIGN-ELEM.
   * В старой объектной модели конструкция `person.org_id.ForeignObjectUrl`
   * эквивалентна `UrlFromDocID(person.org_id)`
   */
  ForeignObjectUrl: string;
  
  /**
   * Атрибут аналогичен `ForeignObjectUrl`, но, в случае, если от целевого объекта
   * могут существовать наследуемые объекты, пытается найти
   * конечный элемент в цепочке наследования, и возвращает его объектный url.
   * Пример:
   * `event.person_id.ForeignPrimaryObjectUrl` может вернуть
   * `'x-db-obj://data/person/0x4D59AF5E5947A89.xm'`
   * либо `'x-db-obj://data/candidate/0x4D59AF5E5947A89.xm'`,
   * если целевой объект является кандидатом.
   */
  ForeignPrimaryObjectUrl: string;
  
  /**
   * Возвращает ссылку на форму, по которой был открыт документ.
   * Если документ открыт без формы, возвращается ошибка.
   */
  Form: XmlForm | Error;

  /**
   * Возвращает ссылку на элемент формы текущего элемент.
   * Причем такая ссылка возвращается независимо от того,
   * был документ открыт по форме или нет.
   * Если элемент был создан по форме, выдается ссылка на элемент формы,
   * по которой он был открыт. Если нет - на динамический элемент формы,
   * созданный специально для данного элемента.
   */
  FormElem: XmlFormElem;

  /**
   * Возвращает полный путь до текущего элемента относительно корня формы.
   */
  FormPath: string;

  /**
   * Возвращает `true`, если элемент содержит значение, и `false`, если не содержит.
   * Этот универсальный атрибут позволяет создавать единый код для всех типов элементов.
   * Так, например, если элемент имеет тип `string`, то при отсутствии значения
   * элемент будет равен пустой строке. Если же элемент имеет тип, например,
   * `integer`, то при отсуствии значения элемент будет равен `null`.
   * Атрибут `HasValue` работает с элементами любого типа, в т.ч. `"variant"`.
   */
  HasValue: boolean;

  /**
   * Возвращает url картинки элемента.
   * Атрибут доступен для записей в каталоге или для корневых элементов документа,
   * и вычисляет значение атрибутов элемента IMAGE-URL или IMAGE-URL-EXPR,
   * описанных в XMD-форме.
   */
  ImageUrl: string;

  /**
   * Возвращает массив из одного текущего элемента.
   * Аналогичный атрибут объекта `XmlMultiElem` возвращает массив из всех относящихся
   * к нему фактических элементов. Позволяет создавать один и тот же код,
   * пригодный как для обработки одиночных элементов,
   * так и множественных элементов типа `MULTIPLE`.
   */
  Instances: T[];

  /**
   * Проверяет, является ли данный элемент первым среди дочерних элементов
   * своего родительского элемента.
   */
  IsFirstSibling: boolean;

  /**
   * Проверяет, является ли данный элемент последним среди дочерних элементов
   * своего родительского элемента.
   */
  IsLastSibling: boolean;

  /**
   * Всегда возвращает `false`.
   * Аналогичный метод объекта `XmlMultiElem` всегда возвращает `true`.
   * Это позволяет по конструкции вида `candidate.profession_id.IsMultiElem` определять
   * был ли элемент `profession_id` описан c атрибутом `MULTIPLE="1"`.
   */
  IsMultiElem: boolean;

  /**
   * Содержит значение `true`, если элемент является вторичным
   * (т.е. элемент формы, по которой был открыт текущий элемент,
   * содержит атрибут `SECONDARY="1"`). Вторичный элемент не вводится пользователем,
   * а вычисляется, как правило при выполнении метода OnSave.
   */
  IsSecondary: boolean;

  /**
   * Содержит значение true, если элемент является временным
   * (т.е. элемент формы, по которой был открыт текущий элемент,
   * содержит атрибут `TEMP="1"`).
   */
  IsTemp: boolean;

  /**
   * Возвращает true, если элемент является корневым элементом документа.
   */
  IsTopElem: boolean;

  /**
   * Возвращает имя элемента.
   * Для динамических элементов атрибут доступен на запись.
   */
  Name: string;

  /**
   * Возвращает элемент, следующий по порядку за текущим в списке
   * дочерних элементов родительского элемента. если текущий элемент
   * является последним, возвращается ошибка.
   */
  NextSibling: XmlElem<T> | Error;

  /**
   * Работает только для записей в каталоге, или корневых элементов объектных документов.
   * Возвращает `url` объекта.
   * Использование этого атрибута позволяет применять быстрые конструкции, например
   * `OpenDoc(record.ObjectUrl)`. Атрибут берет элемент `id` от данной записи,
   * имя объекта, и формирует правильный `url` автоматически.
   * Атрибут также работает в старой объектной модели.
   */
  ObjectUrl: string;

  /**
   * Возвращает документ, в состав которого входит текущий элемент.
   * Если элемента не относится к документу - возвращает `undefined`.
   */
  OptDoc: XmlDocument<unknown> | undefined;

  /**
   * Возвращает соответствующий элемент целевого массива
   * (описанного в атрибуте `FOREIGN-ARRAY`).
   * Если элемент не найден - возвращает `undefined`.
   */
  OptForeignElem: XmlElem<unknown> | XmlMultiElem<unknown> | undefined;

  /**
   * В случае если элемент находится в документе, открытом в экране,
   * возвращает ссылку на экран, иначе - `undefined`.
   * Смотри также атрибут Screen.
   */
  OptScreen: typeof Screen | undefined;

  /**
   * Возвращает родительский элемент текущего элемента, если таковой есть.
   * Если родительского элемента нет, возвращает ошибку.
   */
  Parent: XmlElem<T> | Error;

  /**
   * Возвращает первичное отображаемое имя объекта.
   * Метод доступен для записей в каталоге, либо для корнвых элементов объектных документов.
   */
  PrimaryDispName: string;

  /**
   * Возвращает элемент - первичный ключ текущего элемента.
   * Первичный ключ должен быть описан в форме как PRIMARY-KEY.
   * Для записи в каталоге первичным ключом автоматически считается элемент <id>.
   */
  PrimaryKey: XmlElem<unknown>;

  /**
   * Атрибут работает аналогично `ObjectUrl`, но учитывает возможность наследования.
   * Атрибут проверяет наличие наследуемого элемента, и, если таковой есть,
   * возвращает последний объект в цепочке наследования.
   * Например, в `E-staff` `candidate` наследуется от `person`. Если в этом случае
   * применить атрибут `PrimaryObjectUrl` к объекту `candidate`, то будет
   * возвращен `url` объекта `candidate`. Если применить атрибут `PrimaryObjectUrl`
   * к объекту `person`, и `person` является кандидатом, то будет возвращен `url` объекта `candidate`.
   */
  PrimaryObjectUrl: string;

  /**
   * Флаг, обозначающей, что элемент доступен только на чтение.
   * Если данные элемент установить в `true`, то последующие попытки изменить
   * содержимое элемента или его дочерних элементов вызовут ошибку.
   * При помещении ссылки на какой-либо элемент в объект `web-сервера` `Session`,
   * у такого элемента флаг `ReadOnly` автоматически устанавливается в `true`,
   * для предотвращения возможных одновременных изменений элемента из разных потоков,
   * что является не `thread-safe` операцией.
   */
  ReadOnly: boolean;

  /**
   * В случае если элемент находится в документе, открытом в экране,
   * возвращает ссылку на экран, иначе - выдает ошибку.
   * Смотри также атрибут OptScreen.
   */
  Screen: typeof Screen | Error;

  /**
   * Атрибут применим только к элементам типа `"string"`. Возвращает длину строки в байтах.
   * Конструкция `elem.Size` возвращает тот же результат, что и `StrLen(elem)`
   * но, в отличие от последней, не загружает в память содержимое элемента с внешним хранением `(BLOB)`
   */
  Size: number;

  /**
   * Возвращает заголовок элемента, который был описан в `XMD-форме` атрибутом
   * `TITLE` или `TITLE-EXPR`.
   */
  Title: string;

  /**
   * Возвращает тип данных элемента: `'string'`, `'integer'` и т.д.
   */
  Type: string;
  
  /**
   * Означает, что текущий элемент будет сохраняться не как обычный `XML-элемент`,
   * а как `CData`. Этот атрибут может быть использован, например,
   * при экспорте атрибута во внешние системы.
   * Атрибут доступен только на запись.
   */
  UseCData: boolean;

  /**
   * Значение элемента. Явно вызывать его не обязательно, т.к. это свойство по умолчанию,
   * т.е. при чтении значения элемента выражения 'elem.Value' и просто 'elem' тождественны.
   * Однако, при записи значения иногда требуется вызывать этот атрибут в явном виде.
   * Если вызывается функция или метод, которая возвращает элемент (например, метод AddChild),
   * то для установки значения нужно в явном виде указывать атрибут Value.
   * Пример `entries.AddChild().Value = 10;`
   */
  Value: T;
  
  /**
   * Возвращает содержимое текущего элемента, включая дочерние элементы, если они есть,
   * в виде строки в формате `XML`.
   * Смотри также `XmlValue`.
   */
  Xml: string;

  /**
   * Возвращает значение текущего элемента, оформленное по правилам XML,
   * в том виде, в котором оно включается между тэгами.
   * Строка (string) будет замаскирована знаками <&, число (integer) останется без изменений,
   * логическое значение (boolean) будет представлено как 0 или 1, дата будет
   * записана в виде даты в формате XML.
   */
  XmlValue: string;

  /**
   * Формирует константу в языке XQuery со значением текущего элемента,
   * в зависимости от типа значения. Действует аналогично функции `XQueryLiteral()`.
   */
  XQueryLiteral: string;

  /**
   * Добавляет атрибут к текущему элементу.
   * Метод работает только для динамических элементов.
   * @param name - имя атрибута (String).
   * @param value - значение атрибута (String).
   */
  AddAttr(name: string, value: unknown): void;

  /**
   * Добавляет дочерний элемент и возвращает указатель на него.
   * Если текущий элемент создан по форме, то он должен быть простым массивом.
   * При этом аргументы для вызова функции не требуются.
   * Если текущий элемент является динамическим (т.е. построенным без формы),
   * то добавляется дочерний динамический элемент с именем и типом, указанных
   * в качестве аргументов.
   * @param name - имя дочернего элемента (String). Необязательный аргумент
   * @param type - тип дочернего элемента (String). Необязательный аргумент
   * См. также InsertChild()
   */
  AddChild(name?: string, type?: string): XmlElem<T>;

  /**
   * Добавляет уже созданный элемент в качестве в качестве дочернего по отношению
   * к текущему элементу . Аргументом может быть элемент, уже созданный
   * каким-либо образом (например, через функцию CrateElem()).
   * @param elem - созданный заранее элемент (Объект XmlElem)
   */
  AddChildElem(element: XmlElem<T>): void;

  /**
   * Добавляет динамический дочерний элемент к текущему элементу и возвращает
   * ссылку на вновь созданный элемент. Текущий элемент при этом не обязан быть динамическим.
   * По умолчанию создается обычная структура (составной элемент).
   * @param name имя элемента
   * @param type тип элемента
   */
  AddDynamicChild(name: string, type?: string): XmlElem<T>;

  /**
   * Копирует в текущий элемент данные из другого элемента, включая дочерние элементы.
   * Значения всех совпадающим по имени элементов копируются,
   * элементы с атрибутом MULTIPLE при этом синхронизируются по количеству.
   * Если присваиваемый и текущий элементы были созданы по разным формам -
   * присваивются значения только по совпадающим полям.
   * @param srcElem - присваиваемый элемент (Объект XmlElem).
   */
  AssignElem(srcElem: XmlElem<unknown>): void;

  /**
   * Действует аналогично AssignElem(), но текущему элементу присваиваются значения
   * только по тем полям, которые в текущем элементе не заполнены.
   * @param srcElem - присваиваемый элемент (object).
   */
  AssignExtraElem(srcElem: XmlElem<unknown>): void;

  /**
   * Возвращает дочерний элемент либо по индексу, либо по имени.
   * Если элемента с заданным именем нет, выдает ошибку.
   * Смотри также методы OptChild() и EvalPath().
   * @param arg1 - имя дочернего элемента (String) либо его индекс (Integer).
   */
  Child(name: string): XmlElem<T> | Error;
  Child(index: number): XmlElem<T> | Error;

  /**
   * Проверяет, существует ли дочерний элемент с заданным значением ключевого поля.
   * Смотри также ChildByKeyExistsRec().
   * @param keyValue - значение ключа (Any).
   * @param keyName - имя элемента, являющегося ключом (String).
   * Необязательный аргумент.
   * Если имя ключа не указано, используется первичный ключ.
   */
  ChildByKeyExists(value: unknown, name?: string): boolean;

  /**
   * Специализированный аналог также ChildByKeyExists() с поддержкой рекурсивных массивов.
   * Позволяет искать только по первиному ключу.
   * @param value - значение ключа (Any).
   */
  ChildByKeyExistsRec(value: unknown): boolean;

  /**
   * Проверяет, существует ли дочерний элемент с заданым значением.
   * @param elemVal - значение элемента (Any).
   */
  ChildByValueExists(value: unknown): boolean;

  /**
   * Проверяет, существует ли дочерний элемент с заданым именем.
   * @param name - имя элемента (String).
   */
  ChildExists(name: string): boolean;

  /**
   * Если аргумент - обычный дочерний элемент, то метод просто возвращает его значение.
   * Если аргумент - метод или атрибут с таким наименованием, то метод вычисляет его
   * и возвращает вычисленное значение.
   * @param name - имя дочернего элемента, метода или атрибута (String)
   */
  ChildValue(): T;

  /**
   * Очищает значение данного элемента и его дочерних элементов.
   * Поля типа string становятся пустыми строками,
   * поля других основных типов - становятся равны null.
   * Если у полей есть значения по умолчанию - присваиваются значения по умолчанию.
   * Элементы типа MULTIPLE удаляются.
   */
  Clear(): void;

  /**
   * Создает клон текущего элемента и возвращает ссылку на него.
   * Новый элемент не имеет родительского элемента.
   */
  Clone(): XmlElem<T>;

  /**
   * Удаляет элемент.
   * Элемент должен либо иметь атрибут MULTIPLE, либо быть динамическим элементом.
   */
  Delete(): void;

  /**
   * Удаляет атрибут с заданным именем. Метод работает только для динамических элементов.
   * Если атрибута с зданным именем нет, функция возвращает ошибку.
   * Смотри также DeleteOptAttr().
   * @param attrName - имя атрибута (String)
   */
  DeleteAttr(name: string): void;

  /**
   * Удаляет первый найденный дочерний элемент с заданным значением ключевого поля.
   * Если дочерний элемент не найден, возвращается ошибка.
   * @param keyValue - значение ключа (Any).
   * @param keyName - имя элемента, являющегося ключом (String).
   * Необязательный аргумент. Если имя ключа не указано, используется первичный ключ.
   */
  DeleteChildByKey(value: unknown, name: string): void;

  /**
   * Удаляет все дочерние элементы, удовлетворяющие заданому условию.
   * @param qualExpr - строка, содержащая выражение (условие),
   * вычисляемое относительно каждого значения элемента (String).
   * Необязательный аргумент. Если выражение не указано, удаляются все дочерние элементы.
   */
  DeleteChildren(): void;

  /**
   * Удаляет атрибут с заданным именем. Метод работает только для динамических элементов.
   * Если атрибута с зданным именем нет, метод не производит никаких действий.
   * Смотри также DeleteAttr().
   * @param attrName - имя атрибута (String)
   */
  DeleteOptAttr(name: string): void;

  /**
   * Выполняет поэлементное, рекурсивное сравнение текущего элемента с другим заданным элементом.
   * Возвращает true, если все поля всех подэлементов совпадают, false - если не совпадают.
   * Сравнение производится по тем же правилом, по которым работает метод AssignElem(),
   * т есть элементы, которые есть в форме одного элемент, но которых нет в форме другого,
   * в сравнении не участвуют. Массивы сравниваются поэлементно, при этом требуется
   * совпаденеи как количества лементов в массиве так и порядка их следования.
   * elem2 - сравниваемый элемент (Объект XmlElem).
   */
  EqualToElem(element: XmlElem<unknown>): boolean;

  /**
   * Возвращает все подчиненные (ниже лежащий по иерархии относительно текущего элемента)
   * элементы, у которых путь относительно текущего элемента совпадает с заданным.
   * @param path - путь от текущего до целевого элемента,
   * с разделением имен узлов точками (String).
   */
  EvalMultiPath(path: string): unknown[];

  /**
   * Возвращает внутренний (т.е. ниже лежащий по иерархии относительно текущего элемента)
   * элемент по заданному пути. Если путь неверный, возвращается ошибка.
   * @param path - путь от текущего до целевого элемента,
   * с разделением имен узлов точками (String).
   */
  EvalPath(path: string): XmlElem<unknown>;
  
  /**
   * Проверяет, существует ли в форме текущего элемента дочерний элемент с таким именем,
   * не являющийся методом.
   * @param name - имя дочернего элемента (String)
   * elem.FormChildExists( 'xxx' ) эквивалентно выражению
   * elem.Form.ChildExists( 'xxx' ) && ! elem.Form.Child( 'xxx' ).IsMethod
   */
  FormChildExists(name: string): boolean;

  /**
   * Находит дочерний элемент с заданным значением определенного атрибута.
   * Если такой элемент не найден - возвращается ошибка.
   * @param attrName - имя атрибута (String)
   * @param attrValue - значение атрибута (String)
   */
  GetChildByAttrValue(name: string, value: unknown): XmlElem<unknown>;

  /**
   * Возвращает дочерний элемент с заданным значением ключевого поля.
   * Если дочерний элемент не найден, возвращает ошибку.
   * Смотри также GetOptChildByKey().
   * @param keyValue - значение ключа (Any).
   * @param keyName - имя элемента, являющегося ключом (String). Необязательный аргумент.
   * Если имя ключа не указано, используется первичный ключ.
   */
  GetChildByKey(value: unknown, name?: string): XmlElem<unknown>;

  /**
   * Возвращает дочерний элемент с заданным значением ключевого поля.
   * Если дочерний элемент не найден, возвращает undefined.
   * @param keyValue - значение ключа (Any).
   * @param keyName - имя элемента, являющегося ключом (String). Необязательный аргумент.
   * Если имя ключа не указано, используется первичный ключ.
   */
  GetOptChildByKey(value: unknown, name?: string): XmlElem<unknown>;
  
  /**
   * Возвращает текстовое прдставление значения элемента.
   */
  GetStr(): string;

  /**
   * Возвращает содержимое текущего элемента, включая дочерние элементы, если они есть,
   * в виде строки в формате XML.
   * Действие метода аналогично действию атрибута Xml, но позволяет задать
   * дополнительные опции вывода.
   * @param options - набор опций в виде конструктора JSON, или строки вида
   * "name1=value1,name2=value2" (String). Необязательный аргумент.
   * Возможные опции:
   * inline-ext-objects - включать данные элементов с внешним хранением данных
   * (EXT-DATA="1") в выводимый текст в base64
   * tabs - использовать форматирование отступов при помощи символа табуляции.
   * По умолчанию используется настройка из параметра конфигурационного файла XML-EXPORT-TABS.
   * DocHeader - включать заголовок вида "<?xml version="1.0" encoding="windows-1251"?>"
   * в начало выводимого текста
   * ForceDecimal - выводить большие десятичные значения (больше 2^32), обычно
   * являющиеся идентификаторами объектов, в десятичном виде, а не в шестнадцатеричном,
   * используемом по умолчанию.
   */
  GetXml(options: Object): string
  GetXml(options: string): string

  /**
   * Добавляет новый дочерний элемент перед существующим дочерним элементом и
   * возвращает указатель на него.
   * Если текущий элемент создан по форме, то он должен быть простым массивом.
   * При этом аргументы для вызова функции не требуются.
   * Если текущий элемент является динамическим (т.е. построенным без формы),
   * то добавляется дочерний динамический элемент с именем итипом, указанных
   * в качестве аргументов.
   * @param index - позиция в списке дочерних элементов, в которую необходимо
   * встаить новый элемент (Integer).
   * @param name - имя дочернего элемента (String). Необязательный аргумент
   * @param type - тип дочернего элемента (String). Необязательный аргумент
   */
  InsertChild(index: number, name?: string, type?: string): XmlElem<unknown>;

  /**
   * Загружает значение элемента и его дочерних элементов из url, содержащего данные в формате XML.
   * Из строки подгружаются только те данные, которые присутствуют в исходном XML.
   * Если необходимо полностью синхронизировать элемент с данными из строки,
   * перед вызовом данного метода необходимо вызывать метод Clear().
   * @param url - url, содержащий данные в формате XML (String).
   * См. также LoadData().
   */
  LoadDataFromUrl(): void;

  /**
   * Загружает содержимое элемента из url. Метод работает только для элементов типа "string".
   * @param url - url файла, из которого будут загружены данные (String).
   */
  LoadFromFile(url: string): void;

  /**
   * Загружает содержимое элемента из строки. Работате только для элементов типа "string".
   * Устаревший метод, использововшийся когда элементы "binary" и "string" были разными элементами.
   * В настоящий момент можно использовать обычное присваивание.
   * @param data - строка (String).
   */
  LoadFromStr(data: string): void;

  /**
   * Добавляет атрибут к текущему элементу, если его в элементе не существует.
   * Если атрибут с таким именем существует, то просто заменяет его значение на новое.
   * Метод работает только для динамических элементов.
   * @param attrName - имя элемента (String).
   * @param attrValue - значение элемента (String).
   */
  ObtainAttr(name: string, value: unknown): void;

  /**
   * Ищет дочерний элемент с заданным ключевым элементом. Если не находит,
   * то добавляет новый дочерний элемент, и его ключевому полю присваивает заданное значение.
   * Возвращает ранее существовавший или вновь созданный дочерний элемент.
   * keyValue - значение ключа (Any).
   * keyName - имя элемента, являющегося ключом (String). Необязательный аргумент. Если имя ключа не указано, используется первичный ключ.
   */
  ObtainChildByKey(value: unknown, name?: string): XmlElem<unknown>;

  /**
   * Метод пытается найти среди дочерних элементов элемент с заданным значением
   * определенного поля, если находит - возвращает ссылку на найденный элемент.
   * Если не находит - добавляет новый дочерний элемент, присваивает ему заданное значение,
   * и возвращает вновь созданный элемент.
   * @param elemVal - значение поля (Any)
   */
  ObtainChildByValue(value: unknown): XmlElem<unknown>;

  /**
   * Возвращает значение атрибута текущего элемента. Если атрибута с заданным именем нет,
   * возвращает значенеи второго аргумента, если втрой аргумент
   * не указан - возвращает пустую строку.
   * @param attrName - имя атрибута (String).
   * @param defaultVal - строка, возвращаемая при отсутствии заданного атрибута (String).
   * Необязательный аргумент.
   */
  OptAttrValue(name: string, value: string): string;

  /**
   * Возвращает дочерний элемент. Находит дочерний элемент по имени.
   * Если элемента с заданным именем нет, выдает undefined.
   * Смотри также метод Child().
   * @param name - имя дочернего элемента (String)
   */
  OptChild(name: string): XmlElem<unknown>;

  /**
   * Метод находит (среди дочерних элементов текущего элемента) элемент, имеющий атрибут с заданным именем, и возвращает значение другого заданного атрибута у найденного элемент. Если такого элемент или такого атрибута нет, возвращается пустая строка.
   * Редко используемый метод.
   * @param attrName - имя атрибута, по значению которого ищется дочерний элемент (String)
   * @param attrValue - значение атрибута, по значению которого ищется дочерний элемент (String)
   * @param attrValue2 - требумое значение атрибута найденного дочернего элемента (String)
   */
  OptChildAttrValue(name: string, value: unknown, value2: unknown): string;

  /**
   * Проверяет существует ли вложенный
   * (т.е. ниже лежащий по иерархии относительно текущего элемента)
   * элемент по заданному пути относительно текущего.
   * @param path - путь от текущего до целевого элемента, с разделением имен узлов точками (String).
   */
  PathExists(path: string): boolean;

  /**
   * Проверяет, существует ли у текущего элемента атрибут (метод) с таким именем.
   * @param arg1 - имя атрибута (string)
   */
  PropertyExists(arg1: string): boolean;

  /**
   * Возвращает путь до заданного элемента, относительно заданного базового элемента, находящегося на один или несколько уровней выше.
   * Если заданный базовый элемент не является вышестоящим для текущего элемента, возвращается ошибка.
   */
  RelativePath(): boolean;

  /**
   * Сохраняет содержимое элемента в файл по заданному url. Метод работает только для элементов типа "string".
   * @param url - url, в который будет сохранено содержимое элемента (String).
   */
  SaveToFile(url: string): void;

  /**
   * Переставляет данный элемент на другую позицию среди дочерних элементов его родительского элемента. Элемент должен либо иметь атрибут MULTIPLE, либо быть динамически созданным элементом.
   * @param newPos - новый порядковый индекс элемента, начиная с нуля (Integer).
   */
  SetChildIndex(newPositionIndex: number): void;

  /**
   * Устанавливает значение атрибута с заданным именем, если значение атрибута отличается от его требуемого значения по умолчанию. Метод работает только для динамических элементов.
   * Если атрибут с заданным именем существует, то, если новое значение не совпадает со значением по умолчанию, устанавливает новое значение атрибута. Если новое значение совпадает со значением по умолчанию, атрибут удаляется.
   * Если атрибут не существует, то он добавляется, если новое значение не совпадает со значением по умолчанию.
   * @param attrName - имя атрибута (String)
   * @param attValue - значение атрибута (String)
   * @param defaultVal - значение атрибута по умолчанию (String). Необязательный аргумент. По умолчанию - пустая строка.
   */
  SetOptAttrValue(): void;

  /**
   * Сортирует дочерние элементы в заданном порядке.
   * Метод должен содержать четное число аргументов.
   * Каждая пара аргументов соответствует параметрам сортировки.
   * @param elemExp1 - имя поля или выражение,
   * вычисляемое относительно дочернего элемента,
   * по которому производится сортировка (String).
   * @param order1 - направление сортировки: '+' или '-' (String).
   */
  Sort(...args: string[]): void;

  /**
   * Вызывает принудительный пересчет всех подэлементов текущего элемента.
   * Пересчет производится по полям, имеющим атрибут EXPR или EXPR-INIT.
   */
  UpdateValues(): void;
}

type XmlElem<T> = XmElem<T> & T;