function SCM_JaguarLandRover(CompanyName)
{   
  var SCMRegistrations = Aliases.browser.pageScmRegistrations.tableBoringtable
  //Checks whether the 'contentText' property of the Aliases.browser.pageScmRegistrations.tableBoringtable.cellJlrTestSupplier07022018 object equals 'JLR Test Supplier 07 02 2018'.
  var propArray = new Array("innerText", "ObjectType");
  //var valArray = new Array("Castel Del Chianti Spa"	, "Cell");
  var valArray = new Array(CompanyName, "Cell");
  var idCell = SCMRegistrations.FindChild(propArray, valArray, 5);
  if (idCell.Exists)
  {
      var regCode = SCMRegistrations.Cell(idCell.RowIndex, 4).innerText;
      var regLink = SCMRegistrations.Cell(idCell.RowIndex, 5).innerText;
      Log.Message("RegCode: " + regCode)
      Log.Message("RegLink: " + regLink)
    // Row found, find the link in the same row
    //propArray = new Array("innerText", "RowIndex");
    //var valArray1 = new Array("http://*", idCell.RowIndex);
    //var linkCell = SCMRegistrations.FindChild(propArray, valArray1, 5);
    
    if (regLink != "")//(linkCell.Exists)
    {
      // linkCell.Click();
      Log.Message("The link found is: " + regLink);//linkCell.innerText);
      Log.Message("TCompany Name is: " + CompanyName);
      Project.Variables.RemoveVariable("RegistrationLink");
      Project.Variables.AddVariable("RegistrationLink", "String");
      Project.Variables.RegLink = regLink;//linkCell.innerText;
      Log.Message("RegistrationLink is: " + Project.Variables.RegLink);
      Browsers.Item(btChrome).Navigate(Project.Variables.RegLink);
     
      Delay(1000);
      aqObject.CheckProperty(Aliases.browser.pageScmtestAchillesComRegistrati.formMainform.textboxRegistrationcode, "ObjectIdentifier", cmpEqual, "RegistrationCode");
      Aliases.browser.pageScmtestAchillesComRegistrati.formMainform.textboxRegistrationcode.SetText(regCode);
    }
    else
    {      
      Log.Error("A link with the following text cannot be found in row " + idCell.RowIndex + " : " + linkText);    
    }
  }
  else  
  {
    Log.Error("A cell with the following text cannot be found: " + idText);
  }
 
}