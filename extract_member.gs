function extractMembers(sheet, day) {

  const DAY_COLUMN = 3
  const data = sheet.getDataRange().getValues()
  const responsible = data.filter(row => {
    return row[DAY_COLUMN].match(day)
  })
    
  const date = new Date();
  const dateString = dateFormat.format(date, "yyyy-MMdd")
  
  const hoge = theDayColumnIndex(sheet, dateString)
  
  const incompleted = responsible.filter(member => {
    return !member[hoge]})
 
  console.log(incompleted)
  return incompleted
  
}
