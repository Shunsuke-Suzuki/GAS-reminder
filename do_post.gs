function doPost(e) {

  function updateStatus(row, value) {
    const ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty("SPREAD_SHEET_ID"))
    const sheet = ss.getSheets()[0]
    const CHECKBOX_COLUMN = 3
    
    const range = sheet.getRange(row, CHECKBOX_COLUMN);
    range.setValue(value);
  }
  
  const payload = JSON.parse(e["parameter"]["payload"]);
  const id = payload["actions"][0]["value"];
  
  updateStatus(15, e)

  updateStatus(11, id)

}
