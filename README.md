🧪 Playwright MCP Automation Framework (TypeScript)
📌 Overview

This project is an advanced end-to-end test automation framework built using Playwright with TypeScript, enhanced with MCP (Model Context Protocol) agents for intelligent test generation, planning, and healing.

It automates core user workflows of the SauceDemo application, ensuring reliability, scalability, and maintainability.

---

🚀 Tech Stack
Playwright (TypeScript)
Node.js
MCP (Model Context Protocol) Agents
GitHub Actions (CI-ready)
HTML Reporting

---

🧠 MCP Agent Integration

This framework leverages MCP-powered agents to improve automation efficiency:

Test Planner Agent – Generates structured test plans
Test Generator Agent – Creates Playwright test cases
Test Healer Agent – Fixes flaky/broken tests

Location:

.github/agents/

---

📊 Test Coverage
Covered Scenarios:
Login (Successful, Invalid, Locked-out)
Product Browsing
Add to Cart
Remove from Cart
View Cart
Product Sorting
⚙️ Prerequisites
Node.js (v16 or higher)
npm

Verify:

node -v
npm -v

---

⚙️ Setup Instructions
1. Clone Repository
https://github.com/tlrahul1/Playwright-MCP-TS
cd Playwright-MCP-TS-main
2. Install Dependencies
npm install
3. Install Playwright Browsers
npx playwright install

---

▶️ Run Tests
Run all tests
npx playwright test
Run in headed mode
npx playwright test --headed
Run specific test
npx playwright test specs/<file-name>.spec.ts

---

📊 Reports
Open HTML Report
npx playwright show-report
Report Folder
playwright-report/
🔄 CI/CD Integration

GitHub Actions workflow is available in:

.github/workflows/

---

💡 Key Features
TypeScript-based Playwright framework
MCP-powered intelligent test automation
Scalable and modular structure
CI/CD ready (GitHub Actions)
Cross-browser support
Detailed HTML reports
🎯 Highlights
Automated real-world e2e scenarios
Intelligent test generation via MCP
Clean and maintainable architecture
CI-ready automation setup
