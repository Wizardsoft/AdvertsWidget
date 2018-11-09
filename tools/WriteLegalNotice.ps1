$Year = get-date -Format yyyy
$Text1 = '[assembly: AssemblyCopyrightAttribute("Copyright (c) ' + $Year + ' Wizardsoft")]'
$Text2 = '[assembly: AssemblyCompanyAttribute("Wizardsoft")]'
$Text3 = '[assembly: AssemblyTrademarkAttribute("Copyright (c) ' + $Year + ' Wizardsoft")]'

Clear-Content src\GlobalAssemblyInfo.cs
Add-Content src\GlobalAssemblyInfo.cs "using System.Reflection;"
Add-Content src\GlobalAssemblyInfo.cs $Text1
Add-Content src\GlobalAssemblyInfo.cs $Text2
Add-Content src\GlobalAssemblyInfo.cs $Text3