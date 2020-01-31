export class Helper {
  public static stringToDouble(stringNumber: string) {
    if (stringNumber == null || isNaN(+stringNumber.replace(',', '.'))) {
      return null;
    }

    return +(+(+stringNumber.replace(',', '.')).toFixed(5));
  }

  public static stringToDate(stringDate: string) {
    if (!stringDate) {
      return null;
    }
    let value: string = stringDate;
    if (stringDate.length === 5) {
      value = stringDate + '/' + new Date().getFullYear();
    }
    return new Date(value.replace(/(\d{2})\/(\d{2})\/(\d{4})/, '$3-$2-$1 0:0'));
  }

  public static stringToBoolean(stringBool: string) {
    return stringBool && stringBool.toLowerCase() === 'true';
  }

  public static floatify(number: number) {
    return parseFloat(number.toFixed(10));
  }

  public static differenceBetweenDate(date1: Date, date2: Date) {
    const difference = (
      (date1.getTime() - date2.getTime()) /
      (1000 * 60 * 60 * 24)
    ).toFixed(0);
    return parseInt(difference, 10);
  }
}
