function doPost(e) {
  const ss = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty("SPREAD_SHEET_ID"))
  const sheet = ss.getSheets()[0]
 
  const payload = JSON.parse(e["parameter"]["payload"]);
  const value = payload["actions"][0]["value"];
  const [id, date] = value.split(',')
  const column = theDayColumnIndex(sheet, date) + 1 //インデックスの値はカラムの値ー1となるため

  updateStatus(sheet, id, column, true) // TODO: エラーハンドリング カラムが見つからない場合を考慮する
  
  //ボタンを押した時のメッセージを変更
  const NAME_COLUMN = 2
  const ROOM_COLUMN = 3
  
  const nameRange = sheet.getRange(Number(id), NAME_COLUMN);
  const roomRange = sheet.getRange(Number(id), ROOM_COLUMN);
  const completedMember = nameRange.getValue();
  const completedRoom = roomRange.getValue();
  
  const blocks = updateBlocks(payload.message.blocks, payload.user.name, payload.actions[0].action_id, completedMember, completedRoom);
  
  const options = {
    "method": "post",
    "payload": JSON.stringify({ "blocks": blocks })
  };
  
  UrlFetchApp.fetch(payload.response_url, options);
}

function updateBlocks(blocks, user, action_id, member, room) {
  
  for (let i in blocks) {
    if (('accessory' in blocks[i]) && (blocks[i].accessory.action_id === action_id)) {
      blocks[i] = {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "掃除完了:+1: *" + room + " by " + member + "*"
        }
      }
    }
  }
  return blocks
}

