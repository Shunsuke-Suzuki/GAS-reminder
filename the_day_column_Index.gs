function theDayColumnIndex(sheet, query) {
  const data = sheet.getDataRange().getValues()
  const HEADER_ROW = 0
  
  return data[HEADER_ROW].findIndex(element => element === query)
}
