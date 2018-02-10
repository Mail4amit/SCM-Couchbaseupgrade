function Test1()
{
  Browsers.Item(btChrome).Navigate("https://scmtest.achilles.com/Registration/?token=CztczzcNabAZrRC676L7oQ2&culture=en-GB");
  aqObject.CheckProperty(Aliases.browser.pageScmtestAchillesComRegistrati.formMainform.textboxRegistrationcode, "ObjectIdentifier", cmpEqual, "RegistrationCode");
  Aliases.browser.pageScmtestAchillesComRegistrati.formMainform.textboxRegistrationcode.Click(58, 14);
}