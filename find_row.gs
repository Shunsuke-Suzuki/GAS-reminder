function findColumn() {

  const ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty("SPREAD_SHEET_ID"))
  const sheet = ss.getSheets()[0]
  
  function findRow(sheet, val, row) {
    const data = sheet.getDataRange().getValues()

    for (let i=0; i<data[0].length; i++) {
      if(data[row][i] === val) {
        return i;
      } 
    }
    return 0;
  }
  
  console.log(findRow(sheet, '"07/05"', 0))
}
