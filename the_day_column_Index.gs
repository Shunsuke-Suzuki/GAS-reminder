function theDayColumnIndex(sheet, query) {
  const data = sheet.getDataRange().getValues()
  const HEADER_ROW = 0
  
  return data[HEADER_ROW].findIndex(element => element === query) + 1 // カラム番号は1から始まるため
}
