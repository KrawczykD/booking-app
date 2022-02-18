
/**
 * This is voided as husky doesn't accept user 
 * input when it runs the commands 
 */




 const isCi = process.env.CI !== undefined
 if (!isCi) {
   require('husky').install()
 }
 
 console.log(isCi);
 
 
 
 const readline = require('readline');
 const { ESLint } = require("eslint");
 
 
 const userInput = readline.createInterface({
     input: process.stdin,
     output: process.stdout
 });
 
 // Its made into a promise so it makes sure that it will complete the entire
 // process without sending the wrong exit code
 let commitQuestion = new Promise(function (resolve, reject) {
     var response;
     var exitCode = 0;
 
     userInput.setPrompt('Do you want to run the checks? ');
     userInput.prompt();
     userInput.on('close', () => {
         return 0;
     });
     // getting the user input
     userInput.on('line', (rp) => {
         response = rp;
         switch (response) {
             case 'yes':
                 console.log(`Running checks`);
 
                 // This is used to execute npm commands
                 var exec = require('child_process').exec;
 
                 // Eslint check
                 (async function main() {
                     // 1. Create an instance.
                     const options = { 'warnIgnored': false }
                     const eslint = new ESLint();
 
                     // 2. Lint files.
                     const results = await eslint.lintFiles(["./src/"], options);
 
 
 
                     // 3. Format the results.
                     const formatter = await eslint.loadFormatter("stylish");
                     const resultText = formatter.format(results);
 
                     // 4. Output it.
                     console.log(resultText);
 
                     const filteredResults = ESLint.getErrorResults(results);
 
                     // This is looping through the results to get all warnings
                     var numWarningsAndErrors = 0;
                     for (const [key, value] of Object.entries(results)) {
                         //console.log(`${key}:`, value.warningCount );
                         numWarningsAndErrors += value.warningCount + value.errorCount;
                     }
 
                     if (numWarningsAndErrors != 0) {
                         console.log('Eslint exitCode: 1 \n')
                         exitCode = 1;
                     }
                     else {
                         console.log('Eslint exitCode: 0 \n')
                     }
 
                 })().catch((error) => {
                     exitCode = 1;
                     console.log("There was an error trying to lint\n")
                     console.log(error);
                 });
 
 
 
                 // Prettier check
                 var cmd = exec("npm run format:check", function (err, stdout, stderr) {
                     if (err) {
                         // handle error
                         console.log("Error with the formatting");
                         console.log(err)
                     }
                 });
 
                 // Getting the exit code from the prettier call 
                 cmd.on('close', (code) => {
                     console.log("Prettier exitCode: ", code);
                     if (code != 0){
                         exitCode = code;
                     }
                     resolve(exitCode);
                 });
 
 
                 isAnswerValid = true;
                 userInput.close();
                 break;
             case 'no':
                 exitCode = 0;
                 resolve(exitCode);
             break;
             default:
                 console.log('Enter a valid answer please\n', response);
         }
 
     });
 
 
 });
 
 commitQuestion.then(
     function (finalExitCode) {
         console.log('Final Exit code: ', finalExitCode);
         process.exitCode = finalExitCode;
         return finalExitCode;
     }
 );
 
 
 
 
 
 