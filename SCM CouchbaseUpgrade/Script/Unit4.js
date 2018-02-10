﻿//USEUNIT SCM_tableBoringtable
function SCM_JLRover()
{
  Browsers.Item(btChrome).Run("https://scmtest.achilles.com/", 1);
  Delay(500);
  Objects.textboxUsername1.Check(Aliases.browser.pageScmLogin.formFrmlogincomponent.panelLoginDiv.panelLoginContainer.textboxUsername);
  Objects.passwordboxPassword1.Check(Aliases.browser.pageScmLogin.formFrmlogincomponent.panelLoginDiv.panelLoginContainer.passwordboxPassword);
  Objects.submitbuttonLogin1.Check(Aliases.browser.pageScmLogin.formFrmlogincomponent.panelLoginDiv.panelLoginContainer.submitbuttonLogin);
  Aliases.browser.pageScmLogin.formFrmlogincomponent.panelLoginDiv.panelLoginContainer.textboxUsername.Keys(Project.Variables.Var14.Value("GBOUserName"));
  Aliases.browser.pageScmLogin.formFrmlogincomponent.panelLoginDiv.panelLoginContainer.passwordboxPassword.Keys(Project.Variables.Var14.Value("GBOPassword"));
  Aliases.browser.pageScmLogin.formFrmlogincomponent.panelLoginDiv.panelLoginContainer.submitbuttonLogin.ClickButton();
  if(Aliases.browser.pageScmSelectCommunity.imageJlrPng.Visible);
  Delay(1000);
  Aliases.browser.pageScmSelectCommunity.imageJlrPng.Click();
  Delay(1000);
  Objects.linkManageSuppliers1.Check(Aliases.browser.pageScmHome.panel.linkManageSuppliers);
  Objects.linkManageLinks1.Check(Aliases.browser.pageScmHome.panel.linkManageLinks);
  Objects.linkManageUsers1.Check(Aliases.browser.pageScmHome.panel.linkManageUsers);
  Aliases.browser.pageScmHome.panel.linkManageSuppliers.Click();
  Delay(1000);
  Objects.linkFindSupplier1.Check(Aliases.browser.pageScmManageSuppliers.linkFindSupplier);
  Objects.linkAddSupplier1.Check(Aliases.browser.pageScmManageSuppliers.linkAddSupplier);
  Objects.linkImportOrganizations1.Check(Aliases.browser.pageScmManageSuppliers.linkImportOrganizations);
  Objects.linkImportSuppliers1.Check(Aliases.browser.pageScmManageSuppliers.linkImportSuppliers);
  Aliases.browser.pageScmManageSuppliers.linkAddSupplier.Click();
  Delay(1000);
  Objects.textnodeAddNewSupplier1.Check(Aliases.browser.pageScmAddNewSupplier.formMainform.textnodeAddNewSupplier);
  Aliases.browser.pageScmAddNewSupplier.formMainform.panelValue.textboxCompanyname.SetText(Project.Variables.Var14.Value("CompanyName"));
  Delay(600);
  Aliases.browser.pageScmAddNewSupplier.formMainform.panelValue2.selectCountry.ClickItem(Project.Variables.Var14.Value("Country"));
  Delay(600);
  Aliases.browser.pageScmAddNewSupplier.formMainform.panelValue3.textboxPostcode.SetText(Project.Variables.Var14.Value("Postcode"));
  Delay(600);
  Aliases.browser.pageScmAddNewSupplier.formMainform.panelValue4.textboxGeocodelat.SetText(Project.Variables.Var14.Value("Latitude "));
  Delay(600);
  Aliases.browser.pageScmAddNewSupplier.formMainform.panelValue5.textboxGeocodelong.SetText(Project.Variables.Var14.Value("Longitude "));
  Delay(600);
  Aliases.browser.pageScmAddNewSupplier.formMainform.panelValue6.textboxFirstname.SetText(Project.Variables.Var14.Value("First Name"));
  Delay(600);
  Aliases.browser.pageScmAddNewSupplier.formMainform.panelValue7.textboxLastname.SetText(Project.Variables.Var14.Value("Last Name"));
  Delay(600);
  Aliases.browser.pageScmAddNewSupplier.formMainform.panelValue8.textboxEmailaddress.SetText(Project.Variables.Var14.Value("Email Address"));
  Delay(600);
  Aliases.browser.pageScmAddNewSupplier.formMainform.panelValue9.selectTelephonecode.ClickItem(Project.Variables.Var14.Value("Telephone NumberCode"));
  Delay(600);
  Aliases.browser.pageScmAddNewSupplier.formMainform.panelValue9.textboxTelephonenumber.SetText(Project.Variables.Var14.Value("TelephoneNumber"));
  Delay(600);
  Aliases.browser.pageScmAddNewSupplier.formMainform.buttonSendInvitation.ClickButton();
  Delay(600);
  Objects.textnodeMessagetext1.Check(Aliases.browser.pageScmAddNewSupplier.formMainform.textnodeMessagetext);
  Aliases.browser.pageScmAddNewSupplier.formMainform.buttonClose.ClickButton();
  Delay(600);
  Objects.textnodeSelectCommunity1.Check(Aliases.browser.pageScmSelectCommunity.textnodeSelectCommunity);
  Aliases.browser.pageScmSelectCommunity.imageJlrPng.Click();
  Delay(600);
  Aliases.browser.pageScmHome.panel.linkManageUsers.Click();
  Delay(600);
  aqObject.CheckProperty(Aliases.browser.pageScmManageUsers.textnodeManageUsers, "contentText", cmpEqual, "Manage Users");
  Objects.linkListUsers1.Check(Aliases.browser.pageScmManageUsers.linkListUsers);
  Objects.linkRegistrations1.Check(Aliases.browser.pageScmManageUsers.linkRegistrations);
  Objects.linkRegisterUser1.Check(Aliases.browser.pageScmManageUsers.linkRegisterUser);
  aqObject.CheckProperty(Aliases.browser.pageScmManageUsers.linkChangeEmail, "contentText", cmpEqual, "Change Email");
  aqObject.CheckProperty(Aliases.browser.pageScmManageUsers.linkChangePassword, "contentText", cmpEqual, "Change Password");
  aqObject.CheckProperty(Aliases.browser.pageScmManageUsers.linkResetAccount, "contentText", cmpEqual, "Reset Account");
  Delay(1000);
  Aliases.browser.pageScmManageUsers.linkRegistrations.Click();
  Delay(1000);
  SCM_JaguarLandRover(Project.Variables.Var14.Value("CompanyName"));
}