//USEUNIT SCM_tableBoringtable
function SCM_JLRE2E()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://scmtest.achilles.com/", 1);
  //Delays the test execution for the specified time period.
  Delay(500);
  //Compares the textboxUsername1 Stores item with the properties of the Aliases.browser.pageScmLogin.formFrmlogincomponent.panelLoginDiv.panelLoginContainer.textboxUsername object.
  Objects.textboxUsername1.Check(Aliases.browser.pageScmLogin.formFrmlogincomponent.panelLoginDiv.panelLoginContainer.textboxUsername);
  //Compares the passwordboxPassword1 Stores item with the properties of the Aliases.browser.pageScmLogin.formFrmlogincomponent.panelLoginDiv.panelLoginContainer.passwordboxPassword object.
  Objects.passwordboxPassword1.Check(Aliases.browser.pageScmLogin.formFrmlogincomponent.panelLoginDiv.panelLoginContainer.passwordboxPassword);
  //Compares the submitbuttonLogin1 Stores item with the properties of the Aliases.browser.pageScmLogin.formFrmlogincomponent.panelLoginDiv.panelLoginContainer.submitbuttonLogin object.
  Objects.submitbuttonLogin1.Check(Aliases.browser.pageScmLogin.formFrmlogincomponent.panelLoginDiv.panelLoginContainer.submitbuttonLogin);
  //Simulates one or several keypresses.
  Aliases.browser.pageScmLogin.formFrmlogincomponent.panelLoginDiv.panelLoginContainer.textboxUsername.Keys(Project.Variables.Var13.Value("GBOUserName"));
  //Simulates one or several keypresses.
  Aliases.browser.pageScmLogin.formFrmlogincomponent.panelLoginDiv.panelLoginContainer.passwordboxPassword.Keys(Project.Variables.Var13.Value("GBOPassword"));
  //Performs a single click on the specified button.
  Aliases.browser.pageScmLogin.formFrmlogincomponent.panelLoginDiv.panelLoginContainer.submitbuttonLogin.ClickButton();
  if(Aliases.browser.pageScmSelectCommunity.imageJlrPng.Visible);
  //Delays the test execution for the specified time period.
  Delay(1000);
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.pageScmSelectCommunity.imageJlrPng.Click();
  //Delays the test execution for the specified time period.
  Delay(1000);
  //Compares the linkManageSuppliers1 Stores item with the properties of the Aliases.browser.pageScmHome.panel.linkManageSuppliers object.
  Objects.linkManageSuppliers1.Check(Aliases.browser.pageScmHome.panel.linkManageSuppliers);
  //Compares the linkManageLinks1 Stores item with the properties of the Aliases.browser.pageScmHome.panel.linkManageLinks object.
  Objects.linkManageLinks1.Check(Aliases.browser.pageScmHome.panel.linkManageLinks);
  //Compares the linkManageUsers1 Stores item with the properties of the Aliases.browser.pageScmHome.panel.linkManageUsers object.
  Objects.linkManageUsers1.Check(Aliases.browser.pageScmHome.panel.linkManageUsers);
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.pageScmHome.panel.linkManageSuppliers.Click();
  //Delays the test execution for the specified time period.
  Delay(1000);
  //Compares the linkFindSupplier1 Stores item with the properties of the Aliases.browser.pageScmManageSuppliers.linkFindSupplier object.
  Objects.linkFindSupplier1.Check(Aliases.browser.pageScmManageSuppliers.linkFindSupplier);
  //Compares the linkAddSupplier1 Stores item with the properties of the Aliases.browser.pageScmManageSuppliers.linkAddSupplier object.
  Objects.linkAddSupplier1.Check(Aliases.browser.pageScmManageSuppliers.linkAddSupplier);
  //Compares the linkImportOrganizations1 Stores item with the properties of the Aliases.browser.pageScmManageSuppliers.linkImportOrganizations object.
  Objects.linkImportOrganizations1.Check(Aliases.browser.pageScmManageSuppliers.linkImportOrganizations);
  //Compares the linkImportSuppliers1 Stores item with the properties of the Aliases.browser.pageScmManageSuppliers.linkImportSuppliers object.
  Objects.linkImportSuppliers1.Check(Aliases.browser.pageScmManageSuppliers.linkImportSuppliers);
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.pageScmManageSuppliers.linkAddSupplier.Click();
  //Delays the test execution for the specified time period.
  Delay(1000);
  //Compares the textnodeAddNewSupplier1 Stores item with the properties of the Aliases.browser.pageScmAddNewSupplier.formMainform.textnodeAddNewSupplier object.
  Objects.textnodeAddNewSupplier1.Check(Aliases.browser.pageScmAddNewSupplier.formMainform.textnodeAddNewSupplier);
  //Enters text in the text box.
  Aliases.browser.pageScmAddNewSupplier.formMainform.panelValue.textboxCompanyname.SetText(Project.Variables.Var13.Value("CompanyName"));
  //Delays the test execution for the specified time period.
  Delay(600);
  Project.Variables.CompanyName = Aliases.browser.pageScmAddNewSupplier.formMainform.panelValue.textboxCompanyname;
  //Posts an information message to the test log.
  Log.Message(Project.Variables.CompanyName, "");
  Aliases.browser.pageScmAddNewSupplier.formMainform.panelValue.textboxCompanyname.contains(Aliases.browser.pageScmAddNewSupplier.formMainform.panelValue.textboxCompanyname.Text);
  //Selects the item, specified as an index, from 0, or a name.
  Aliases.browser.pageScmAddNewSupplier.formMainform.panelValue2.selectCountry.ClickItem(Project.Variables.Var13.Value("Country"));
  //Delays the test execution for the specified time period.
  Delay(600);
  //Enters text in the text box.
  Aliases.browser.pageScmAddNewSupplier.formMainform.panelValue3.textboxPostcode.SetText(Project.Variables.Var13.Value("Postcode"));
  //Delays the test execution for the specified time period.
  Delay(600);
  //Enters text in the text box.
  Aliases.browser.pageScmAddNewSupplier.formMainform.panelValue4.textboxGeocodelat.SetText(Project.Variables.Var13.Value("Latitude "));
  //Delays the test execution for the specified time period.
  Delay(600);
  //Enters text in the text box.
  Aliases.browser.pageScmAddNewSupplier.formMainform.panelValue5.textboxGeocodelong.SetText(Project.Variables.Var13.Value("Longitude "));
  //Delays the test execution for the specified time period.
  Delay(600);
  //Enters text in the text box.
  Aliases.browser.pageScmAddNewSupplier.formMainform.panelValue6.textboxFirstname.SetText(Project.Variables.Var13.Value("First Name"));
  //Delays the test execution for the specified time period.
  Delay(600);
  //Enters text in the text box.
  Aliases.browser.pageScmAddNewSupplier.formMainform.panelValue7.textboxLastname.SetText(Project.Variables.Var13.Value("Last Name"));
  //Delays the test execution for the specified time period.
  Delay(600);
  //Enters text in the text box.
  Aliases.browser.pageScmAddNewSupplier.formMainform.panelValue8.textboxEmailaddress.SetText(Project.Variables.Var13.Value("Email Address"));
  //Delays the test execution for the specified time period.
  Delay(600);
  //Selects the item, specified as an index, from 0, or a name.
  Aliases.browser.pageScmAddNewSupplier.formMainform.panelValue9.selectTelephonecode.ClickItem(Project.Variables.Var13.Value("Telephone NumberCode"));
  //Delays the test execution for the specified time period.
  Delay(600);
  //Enters text in the text box.
  Aliases.browser.pageScmAddNewSupplier.formMainform.panelValue9.textboxTelephonenumber.SetText(Project.Variables.Var13.Value("TelephoneNumber"));
  //Delays the test execution for the specified time period.
  Delay(600);
  //Performs a single click on the specified button.
  Aliases.browser.pageScmAddNewSupplier.formMainform.buttonSendInvitation.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(600);
  //Compares the textnodeMessagetext1 Stores item with the properties of the Aliases.browser.pageScmAddNewSupplier.formMainform.textnodeMessagetext object.
  Objects.textnodeMessagetext1.Check(Aliases.browser.pageScmAddNewSupplier.formMainform.textnodeMessagetext);
  //Performs a single click on the specified button.
  Aliases.browser.pageScmAddNewSupplier.formMainform.buttonClose.ClickButton();
  //Delays the test execution for the specified time period.
  Delay(600);
  //Compares the textnodeSelectCommunity1 Stores item with the properties of the Aliases.browser.pageScmSelectCommunity.textnodeSelectCommunity object.
  Objects.textnodeSelectCommunity1.Check(Aliases.browser.pageScmSelectCommunity.textnodeSelectCommunity);
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.pageScmSelectCommunity.imageJlrPng.Click();
  //Delays the test execution for the specified time period.
  Delay(600);
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.pageScmHome.panel.linkManageUsers.Click();
  //Delays the test execution for the specified time period.
  Delay(600);
  //Checks whether the 'contentText' property of the Aliases.browser.pageScmManageUsers.textnodeManageUsers object equals 'Manage Users'.
  aqObject.CheckProperty(Aliases.browser.pageScmManageUsers.textnodeManageUsers, "contentText", cmpEqual, "Manage Users");
  //Compares the linkListUsers1 Stores item with the properties of the Aliases.browser.pageScmManageUsers.linkListUsers object.
  Objects.linkListUsers1.Check(Aliases.browser.pageScmManageUsers.linkListUsers);
  //Compares the linkRegistrations1 Stores item with the properties of the Aliases.browser.pageScmManageUsers.linkRegistrations object.
  Objects.linkRegistrations1.Check(Aliases.browser.pageScmManageUsers.linkRegistrations);
  //Compares the linkRegisterUser1 Stores item with the properties of the Aliases.browser.pageScmManageUsers.linkRegisterUser object.
  Objects.linkRegisterUser1.Check(Aliases.browser.pageScmManageUsers.linkRegisterUser);
  //Checks whether the 'contentText' property of the Aliases.browser.pageScmManageUsers.linkChangeEmail object equals 'Change Email'.
  aqObject.CheckProperty(Aliases.browser.pageScmManageUsers.linkChangeEmail, "contentText", cmpEqual, "Change Email");
  //Checks whether the 'contentText' property of the Aliases.browser.pageScmManageUsers.linkChangePassword object equals 'Change Password'.
  aqObject.CheckProperty(Aliases.browser.pageScmManageUsers.linkChangePassword, "contentText", cmpEqual, "Change Password");
  //Checks whether the 'contentText' property of the Aliases.browser.pageScmManageUsers.linkResetAccount object equals 'Reset Account'.
  aqObject.CheckProperty(Aliases.browser.pageScmManageUsers.linkResetAccount, "contentText", cmpEqual, "Reset Account");
  //Delays the test execution for the specified time period.
  Delay(1000);
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.browser.pageScmManageUsers.linkRegistrations.Click();
  //Delays the test execution for the specified time period.
  Delay(1000);
  //Runs a script routine.
 SCM_JaguarLandRover(Project.Variables.CompanyName);
 }
 