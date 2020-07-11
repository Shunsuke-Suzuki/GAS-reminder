function doPost(e) {
  const ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty("SPREAD_SHEET_ID"))
  const sheet = ss.getSheets()[0]

  const payload = JSON.parse(e["parameter"]["payload"]);
  const value = payload["actions"][0]["value"];
  const [id, date] = value.split(',')
  
  const column = theDayColumnIndex(sheet, date) + 1 //インデックスの値はカラムの値ー1となるため
  
  updateStatus(sheet, id, column, true) // TODO: エラーハンドリング カラムが見つからない場合を考慮する

  const blocks = updateBlocks(payload.message.blocks, payload.user.name, payload.actions[0].action_id);
  const options = {
    "method": "post",
    "payload": JSON.stringify({ "blocks": blocks })
  };
  UrlFetchApp.fetch(payload.response_url, options);
}

function updateBlocks(blocks, user, action_id) {
  for (let i in blocks) {
    if (('accessory' in blocks[i]) && (blocks[i].accessory.action_id === action_id)) {
      blocks[i] = {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "掃除完了:+1: *" + blocks[i].accessory.value + "*"
        }
      }
    }
  }
  return blocks
}
