const { execSync } = require("child_process");

try {
    console.log("Cleaning reports...");
    execSync("npx rimraf allure-results allure-report playwright-report test-results", {
        stdio: "inherit"
    });

    console.log("Running Playwright tests...");
    execSync("npx playwright test tests/ui/order.spec.js --headed", {
        stdio: "inherit"
    });

} catch (error) {
    console.log("\nSome tests failed. Generating Allure report...\n");
}

console.log("Opening Allure report...");

execSync("npx allure-commandline serve allure-results", {
    stdio: "inherit"
});