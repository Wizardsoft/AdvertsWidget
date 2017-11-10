@echo off

set year=%date:~10,4%
set month=%date:~4,2%
set day=%date:~7,2%
set version=%year%.%month%.%day%.%SVN_REVISION%

set projectname=AdvertsWidget

echo %version%

npm install
ng build --prod

"C:\Program Files (x86)\OctopusTools.4.22.1\Octo.exe" pack --id %projectname% --version "%version%" --basePath dist --format=nuget
"C:\Program Files (x86)\OctopusTools.4.22.1\Octo.exe" push --package %projectname%."%version%".nupkg --server http://octopus.wizardsoft.com/ --apiKey API-RYCVCNFYXFQVTPBL6JZLVIWYC

DEL %projectname%."%version%".nupkg