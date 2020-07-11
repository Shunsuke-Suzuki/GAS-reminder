const dateFormat = {
  _fmt: {
    yyyy: date =>  date.getFullYear() + '' ,
    MM: date =>  ('0' + (date.getMonth() + 1)).slice(-2) ,
    dd: date =>  ('0' + date.getDate()).slice(-2) ,
    hh: date =>  ('0' + date.getHours()).slice(-2) ,
    mm: date =>  ('0' + date.getMinutes()).slice(-2) ,
    ss: date =>  ('0' + date.getSeconds()).slice(-2) ,
  },
  _priority: ['yyyy', 'MM', 'dd', 'hh', 'mm', 'ss'],
  format(date, format) {
    return this._priority.reduce(
      (res, fmt) => res.replace(fmt, this._fmt[fmt](date)),
      format,
    )
  },
}
