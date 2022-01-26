function onOpen() {

  function blink(foundRows) {
    const offset = 5;
    
    for (let i = 0; i < 5; i++) {
      const oldVals = {};
      for (let cell of foundRows) {
        cell = parseInt(cell);
        const actualCell = SpreadsheetApp.getActive().getSheetByName("Assignments").getRange(cell + offset, 4);
        oldVals[cell + offset] = actualCell.getValue();

        actualCell.setValue("");
      }
      SpreadsheetApp.flush();
      for (let cell of foundRows) {
        cell = parseInt(cell);
        const actualCell = SpreadsheetApp.getActive().getSheetByName("Assignments").getRange(cell + offset, 4);

        actualCell.setValue(oldVals[cell + offset]);
      }
      SpreadsheetApp.flush();
    }
  }

  const searchTerm = "In progress"; // Put [U-HP] or whatever inside of here
  const columnToSearch = "D5:D"; // Put the column you want to search, ie D5:D (starts at column D row 5, goes till end of column D)

  const foundRows = [];
  const sheet = SpreadsheetApp.getActive().getSheetByName("Assignments");
  const col = sheet.getRange(columnToSearch);
  const colVals = col.getValues();

  for (let row in colVals) {
    if (colVals[row] == searchTerm) {
      foundRows.push(row);
    }
    if (colVals[row] == "") break;
  }
  blink(foundRows);

}
