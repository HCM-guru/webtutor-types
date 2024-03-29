interface Math {
  /**
   * Округление значения числового выражения к ближайшему целому.
   * @param number - Число, округляемое до ближайшего целого (Real).
   */
  round(number: number): number;

  /**
   * Возвращает квадратный корень числа .
   * @param number - Числовое выражение (Real).
   */
  sqrt(number: number): number;

  ceil(number: number): number;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
declare const Math: Math;
