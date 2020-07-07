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
  
  updateStatus(sheet, 10, 10, id)  // TODO: これは動作確認のためのコード。シートのJ10セルに押したボタンのidが挿入されます

}
