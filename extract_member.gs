function extractMembers(sheet, day) {

  const DAY_COLUMN = 3
  const data = sheet.getDataRange().getValues()
  const members = data.filter(row => {
    return row[DAY_COLUMN].match(day)
  })
    
  return members
 
}
