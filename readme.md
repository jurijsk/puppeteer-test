started with the code base here: https://github.com/anthonychu/functions-headless-chromium/tree/main/puppeteer

successfull steps:

* updated puppeteer to the lates version
* set function run time version to ~4
* set node to ~18 using `az functionapp config set --name pup --resource-group textjoint --linux-fx-version '"node|18"' (this not working in powershell)   ` to check version use `az functionapp config show --name pup --resource-group textjoint --query 'linuxFxVersion' -o tsv`


# Deploy

func azure functionapp publish pup --javascript --build remote