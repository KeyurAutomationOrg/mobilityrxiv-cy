const scanner = require('sonarqube-scanner');
scanner(
  {
    serverUrl: 'http://sonarqube.dev.sae.cloud:9000/',
    token: "SONARSCAN_TOKEN",
    options: {
      'sonar.projectName': 'voucher-administration-fe-qe-automation automated tests',
      'sonar.projectKey': 'voucher-administration-fe-qe-automation',
      'sonar.projectDescription': 'voucher-administration-fe-qe-automation QE automated tests',
      'sonar.sources': '.',
      'sonar.inclusions' : 'src/**' ,
    },
  },
  () => process.exit()
);
