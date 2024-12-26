> Running Playwright Tests
 - npx playwright test <spec-name>.spec.ts:line-num
 - npx playwright test tests/smoke-tests/pom-upload.spec.ts --reporter=list

> Debugging Playwright Test
 - DEBUG=pw:api npx playwright test home.spec.ts:15

> Launch Playwright Inspector for Given Test
 - PWDEBUG=1 npx playwright test contact.spec.ts:3

 > ESLint
  - npm run lint

> Running All Tests
 - npx playwright test tests --workers 6

> Allure Reports
 - npx allure generate ./allure-results -o ./allure-report
 - npx allure open ./allure-report