function onOpen() {

  /*
   * Configuration
   */ 

  // Please also look at the offset variable on line 24
  const sheetToSearch = "Sheet1"; // Rename this to the name of the sheet you want to operate on. Typically is "Sheet1" by default
  const searchTerm = ""; // Put whatever cell value you want to match inside here
  const columnToSearch = ""; // Put the column you want to search, ie D5:D (starts at column D row 5, goes till end of column D)
  const columnToSearchIndex = 0; // Set to the numerical index of the column you want to search (i.e. D -> 4 since its the 4th letter in the alphabet)

  /*
   * Code
   */

  const foundRows = [];
  const sheet = SpreadsheetApp.getActive().getSheetByName(sheetToSearch);
  const col = sheet.getRange(columnToSearch);
  const colVals = col.getValues();

  function blink(foundRows, activeSheet, columnIndex) {
    // Change to the row number where you want to start checking (should be in line with where columnToSearch starts)
    const offset = 0;
    
    for (let i = 0; i < 5; i++) {
      const oldVals = {};
      for (let cell of foundRows) {
        cell = parseInt(cell);
        const actualCell = activeSheet.getRange(cell + offset, columnIndex);
        oldVals[cell + offset] = actualCell.getValue();

        actualCell.setValue("");
      }
      SpreadsheetApp.flush();
      for (let cell of foundRows) {
        cell = parseInt(cell);
        const actualCell = activeSheet.getRange(cell + offset, columnIndex);

        actualCell.setValue(oldVals[cell + offset]);
      }
      SpreadsheetApp.flush();
    }
  }

  for (let row in colVals) {
    if (colVals[row] == searchTerm) {
      foundRows.push(row);
    }
    if (colVals[row] == "") break;
  }
  blink(foundRows, sheet, columnToSearchIndex);

}
