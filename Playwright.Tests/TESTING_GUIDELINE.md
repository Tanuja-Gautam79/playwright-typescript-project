# LMS Test Automation Guideline - Playwright with Typescript

## Directory Structure:

Organize test files and helper files into appropriate directories based on modules or features. For example:
    -- setup
        -- auth.setup.ts
    -- test-data
        -- deal-creation-data.json
        -- test-data-dev.json
        -- test-data-stagging.json
    -- .env-cmdrc
    -- package.json
    -- playwright.config.ts
    -- README.md
    -- TESTING_GUIDELINE.md
    -- regression-tests
        -- deals
            -- create-deals-test-cases.spec.ts
            -- update-deals-test-cases.spec.ts
            -- offers-oi-test-cases.spec.ts
    -- src
        -- pages
            -- deal-index-page.ts
            -- new-deal-panel.ts
            -- create-offer-panel.ts
            -- deal-view-page.ts
            -- offers-summary-oi-page.ts
            -- home-page.ts
            -- deal-offers-page.ts
            -- offer-summary-oi-page.ts

        -- helpers
            -- form-input-helper.ts
            -- navigation-helper.ts
            -- date-helper.ts
        -- utils
            -- doc-verification.ts
            -- read-test-data.ts

## Naming Convension
**Test Case File Name:**
Test Case file names should follow the format `functionality-test-cases.spec.ts`, where:
- functionality name should be in lowercase.
- Use hyphens between words.
- End the file name with `-test-cases.spec.ts`.

For example: `create-deal-test-cases.spec.ts`.
`update-deal-test-cases.spec.ts`
`filter-deal-test-cases.spec.ts`

**Test Class Name:**
The class name should be same as file name without hyphen.
example file name : create-offer-panel.ts should have class name as CreateOfferPanel

**Method Name:**
Method names should be in camel case. Don't be afraid if the method name gets long, it's better having a meaningful name than a short name.
example: enterOffersDataInLeasedAreasSection

**Helpers Class:**
Helper Class file names should follow the format `PageName/functionName-helper.ts`, where:
- FunctionName or PageName should be in lowercase.
- Use hyphens between words.
- Helper class
ex- date-helper.ts



## Separation of Concerns:

Maintain a clear separation between test files and helper files.Test files should focus on defining test cases and assertions, while helper files should provide reusable functions to interact with page elements and perform common actions.

## Test Case Structure:

Each test case should have a descriptive name indicating the scenario being tested.
Follow a consistent structure for test cases, including setup, execution, and verification steps.

ex: Deal01 - Create New Deal ${data.DealNumber} for an internal user

### Before Each Hook:

Use beforeEach hook to perform common setup tasks before each test case, such as navigating to the base URL.

### Page Objects:

Encapsulate page interaction logic into separate Page Object classes (e.g., dealPage, newDealPage) to improve maintainability and readability.

### Reusable Helper Functions:

Implement helper functions for common actions or interactions with page elements.
Ensure helper functions are well-documented and reusable across multiple test cases.
Assertions:

Use meaningful assertions to verify the expected behavior of the application.
Include descriptive error messages in assertions to aid in debugging.


