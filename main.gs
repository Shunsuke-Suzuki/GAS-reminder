// メインの関数。シートからある曜日の担当メンバーを抽出し、Slackでメッセージを送ります。

function myFunction() {
  const ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty("SPREAD_SHEET_ID"))
  const sheet = ss.getSheets()[0]

  const WEEK = ['日', '月', '火', '水', '木', '金', '土']
  var date = new Date();
  var wDay = date.getDay();
  
  const memberRows = extractMembers(sheet, WEEK[wDay])

  sendMessage(memberRows, date)

}
