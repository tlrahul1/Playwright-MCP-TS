!! Playwright TypeScript Automation Framework !!

This project demonstrates an end-to-end automation framework built using **Playwright with TypeScript**, enhanced with intelligent test automation tools like:

- Playwright Test Agent  
- Test Generator  
- Test Healer  

---

Project Overview

This framework automates key user flows of the SauceDemo application including:

- Login (valid & invalid scenarios)
- Add to Cart
- Remove from Cart
- Sort Products
- View Cart

---

Tech Stack

- Playwright
- TypeScript
- Node.js

---

Project Structure

├── specs/ # Test cases
├── playwright.config.ts # Configuration file
├── test-plan.md # Test planning
├── seed.spec.ts # Seed test
├── .github/agents # AI test agents

---

Setup Instructions

```bash
npm install
npx playwright install

## Run Tests ##

npx playwright test

----

## Test Reports ##

npx playwright show-report
