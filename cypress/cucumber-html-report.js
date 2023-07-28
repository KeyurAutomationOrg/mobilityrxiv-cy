var reporter = require('cucumber-html-reporter');
var options = {

        theme: 'bootstrap',

        jsonFile: "cypress/cucumber-json",

        output: './reports/cucumber-htmlreport.html',

        reportSuiteAsScenarios: true,

        scenarioTimestamp: true,

        launchReport: false,

        metadata: {

            "Test Environment": "Test",

            "Platform": "Windows 10",

        }

    };

    reporter.generate(options);