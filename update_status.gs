function updateStatus(sheet, row, column, value) {
    const range = sheet.getRange(row, column);
    range.setValue(value);
  }