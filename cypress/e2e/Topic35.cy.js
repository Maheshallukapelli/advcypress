
/*
    Cucumber Html Reports:


    Configuration Steps:
    -------------------------------------------
    1. Install ==>  <already installed along with cucumber packages>

    2. Add the following to scripts commands in package.json

           "scripts": {
                    "cypress:execution-allure": "cypress run --browser chrome --env allure=true,tags=@sanity --config video=false",
                    "allure:report": "allure generate allure-results --clean -o allure-report",
               }

    3. Run the following commands the specified order in terminal
            ==> 1. npm run cypress:execution-allure
                2. npm run allure:report
                3. allure open

*/

