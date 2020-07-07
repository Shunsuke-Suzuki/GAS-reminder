function doPost(e) {

  const ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty("SPREAD_SHEET_ID"))
  const sheet = ss.getSheets()[0]
  
  function updateStatus(sheet, row, column, value) {
    const range = sheet.getRange(row, column);
    range.setValue(value);
  }
  
  const payload = JSON.parse(e["parameter"]["payload"]);
  const value = payload["actions"][0]["value"];
  const [id, date] = value.split(',')

  const column = findRow(sheet, date, 0) 
  
  updateStatus(sheet, Number(id), 6, true)  // TODO: これは動作確認のためのコード
  updateStatus(sheet, Number(id), 10, payload.response_url)  // TODO: これは動作確認のためのコード

}
