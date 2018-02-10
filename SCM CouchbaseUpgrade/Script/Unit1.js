function ReadDataFromExcel()
{
    var Excel, s;
    Excel = Sys.OleObject("Excel.Application");
    Delay (3000); 
    // Wait until Excel starts
    Excel.Visible = true;
    Excel.Workbooks.Open("C:\\DDTTC\\MyFile.xls");
    for (let i = 1;i<=2; i++)
    {
        s = "";
        for (let j = 1; j<=5; j++)
            s = s + VarToString(Excel.Cells.Item(i, j)) + Chr(13) + Chr(10)
        Log.Message("Row: " + VarToString(i), s);
    }
}
var RecNo;
// Posts data to the log (helper routine)
function ProcessData()
{
    var Fldr, i;
      Fldr = Log.CreateFolder("Record: " + VarToStr(RecNo));
      Log.PushLogFolder(Fldr);
      for (i = 0; i < DDT.CurrentDriver.ColumnCount; i++) 
        Log.Message(DDT.CurrentDriver.ColumnName(i) + ": " + 
                    VarToStr(DDT.CurrentDriver.Value(i)));
      Log.PopLogFolder(); 
      RecNo = RecNo + 1; 
     
}
// Creates the driver (main routine)
function TestDriver()
{
    var Driver;
    // Creates the driver
    Driver = DDT.ExcelDriver("C:\\DDTTC\\MyFile.xls", "Sheet1"); 
    // Iterates through records
    RecNo = 0;
    while (! Driver.EOF() ) 
    {
         ProcessData(); // Processes data
         Driver.Next(); // Goes to the next record
    }
}