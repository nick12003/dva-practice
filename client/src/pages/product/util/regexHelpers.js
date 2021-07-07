export default {
  /**
   * 中文
   * @param {boolean} containWhiteSpace - 預設為 false
   * @returns {RegExp}
   * */
  isChinese: (containWhiteSpace = false) =>
    containWhiteSpace ? /^[\u4e00-\u9FFF\s]+$/ : /^[\u4e00-\u9FFF]+$/,
  /**
   * 全形英文或標點符號 ＃＄％
   * @param {boolean} containWhiteSpace - 預設為 false
   * @returns {RegExp}
   * */
  isFull: (containWhiteSpace = false) =>
    containWhiteSpace ? /^[\uFF01-\uFF5E\s]+$/ : /^[\uFF01-\uFF5E]+$/,
  /**
   * 非全形 = 中文、半形英文/數字/特殊符號，(包含空白)
   * @param {boolean} containWhiteSpace - 預設為 false
   * @returns {RegExp}
   * */
  isNotFull: (containWhiteSpace = false) =>
    containWhiteSpace
      ? /^[a-zA-Z0-9\u4e00-\u9fff\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E\u3000\u3001-\u303F\s]+$/
      : /^[a-zA-Z0-9\u4e00-\u9fff\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E\u3000\u3001-\u303F]+$/,
  /**
   * 非全形、中文 = 半形英文/數字/特殊符號
   * @param {boolean} containWhiteSpace - 預設為 false
   * @returns {RegExp}
   * */
  isNotChinese: (containWhiteSpace = false) =>
    containWhiteSpace
      ? /^[a-zA-Z0-9\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E\u3000\u3001-\u303F\s]+$/
      : /^[a-zA-Z0-9\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E\u3000\u3001-\u303F]+$/,
  /**
   * 數字
   * @returns {RegExp}
   * */
  isNumber: () => /^[0-9]*$/,
  /**
   * n位數數字
   * @param {string || number} n
   * @returns {RegExp}
   * */
  isNthNumber: (n) => new RegExp(`^\\d{${n}}$`),
  /**
   * n位數數字
   * @param {string || number} m
   * @param {string || number} n
   * @returns {RegExp}
   * */
  isMthToNthNumber: (m, n) => new RegExp(`^\\d{${m},${n}}$`),
  /**
   * 至少n位數數字
   * @param {string || number} n
   * @returns {RegExp}
   * */
  isAtLeastNthNumber: (n) => new RegExp(`^\\d{${n},}$`),
  /**
   * 零和非零開頭的數字
   * @returns {RegExp}
   * */
  is0AndNot0OpNumber: () => /^(0|[1-9][0-9]*)$/,
  /**
   * 非零開頭的數字
   * @returns {RegExp}
   * */
  not0OpNumber: () => /^\+?[1-9][0-9]*$/,
  /**
   * 大於零的數字
   * @returns {RegExp}
   * */
  isGreaterThan0: () => /^[1-9]\d*$/,
  /**
   * 最多n位的正浮點數
   * @param {string || number} n
   * @returns {RegExp}
   * */
  isNthPositiveFloat: (n) => new RegExp(`^(0|[1-9][0-9]*)(\\.[0-9]{1,${n}})?$`),
  /**
   * 最多n位的浮點數
   * @param {string || number} n
   * @returns {RegExp}
   * */
  isNthAllFloat: (n) => new RegExp(`^(\\-)?[0-9]+(.[0-9]{0,${n}})?$`),
  /**
   * 大寫英文
   * @returns {RegExp}
   * */
  isUppercaseEng: () => /^[A-Z]+$/,
  /**
   * 英數字 無空格
   * @returns {RegExp}
   * */
  isEngNum: () => /^[A-Za-z0-9]+$/,
  /**
   * 中英數字 無空格
   * @returns {RegExp}
   * */
  isChineseEngNum: () => /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
  /**
   * 電話國碼 eg. +886
   * @returns {RegExp}
   * */
  isCountryCode: () => /^(\+?\d{1,3}|\d{1,4})$/,
  /**
   * 台灣 身分證字號
   * @returns {RegExp}
   */
  isTWIDNumer: () => /^[A-Z]{1}[1-2]{1}[0-9]{8}$/,
  /**
   * 數字(符號僅可使用".")
   * @returns {RegExp}
   */
  isNumDot: () => /^[0-9\\.]+$/,
  /**
   * 英數字(符號僅可使用".")
   * @returns {RegExp}
   */
  isEngNumDot: () => /^[A-Za-z0-9\\.]+$/,
  /**
   * 英數字(符號僅可使用"-")
   * @returns {RegExp}
   */
  isEngNumDash: () => /^[A-Za-z0-9\\-]+$/,
  /**
   * 英數字(符號可使用"-"或"_")
   * @returns {RegExp}
   * */
  isEngNumDashHyphen: () => /^[a-zA-Z0-9_-]*$/,
  /**
   * 台灣 手機驗證
   * @returns {RegExp}
   */
  isTWMobile: () => /09[0-9]{8}$/,

  /**
   * 台灣 手機驗證 09 開頭
   * @returns {RegExp}
   */
  isTWMobileBegin: () => /^09/,

  /**
   * 台灣 發票驗證
   * @returns {RegExp}
   */
  isTWInvoiceNo: () => /^[A-Za-z]{2}[0-9]{8}$/,

  /**
   * 限中英文/數字，符號(,,注音,空白,ˊ,ˇ,ˋ)
   * @returns {RegExp}
   */
  isYahooSloganChineseNumber: () =>
    /^[a-zA-Z0-9\u4e00-\u9fa5\u3105-\u3129\u02CA\u02C7\u02CB\u3000\s,]+$/,
  /**
   * 限英文/數字，符號(;)
   * @returns {RegExp}
   */
  isEngNumSemicolon: () => /^[a-zA-Z0-9,;]+$/,
  /**
   * 連結驗證，提示為：請輸入正確連結 1~100 個字
   * 線上驗證： @link https://regex101.com/r/cqZlMd/1
   * @returns {RegExp}
   */
  isUrl: () =>
    // eslint-disable-next-line no-useless-escape
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9\u4e00-\u9FFF]+([\-\.]{1}[a-z0-9\u4e00-\u9FFF]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm,
  /**
   * 字串不含空白
   * @returns {RegExp}
   * */
  isNotContainWhiteSpace: () => /^\S*$/,
};
