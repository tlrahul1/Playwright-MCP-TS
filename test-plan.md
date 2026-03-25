# SauceDemo E2E Test Plan

## Application Overview

Comprehensive test plan for the SauceDemo e-commerce application, covering login functionality, product browsing and sorting, cart management, checkout process, and various edge cases to ensure robust user experience and error handling.

## Test Scenarios

### 1. Login Tests

**Seed:** `seed.spec.ts`

#### 1.1. Successful Login with Standard User

**File:** `specs/login-successful.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: The user is redirected to the products page
    - expect: The page title is 'Swag Labs'
    - expect: The products inventory is displayed
  2. Enter 'standard_user' in the username field
    - expect: The username field is visible
  3. Enter 'secret_sauce' in the password field
    - expect: The password field is visible
  4. Click the 'Login' button
    - expect: Login is successful

#### 1.2. Login with Locked Out User

**File:** `specs/login-locked-out.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: The login page is displayed
  2. Enter 'locked_out_user' in the username field
    - expect: The username field accepts input
  3. Enter 'secret_sauce' in the password field
    - expect: The password field accepts input
  4. Click the 'Login' button
    - expect: An error message 'Epic sadface: Sorry, this user has been locked out.' is displayed
    - expect: The user remains on the login page

#### 1.3. Login with Invalid Credentials

**File:** `specs/login-invalid-credentials.spec.ts`

**Steps:**
  1. Navigate to https://www.saucedemo.com/
    - expect: The login page is displayed
  2. Enter 'invalid_user' in the username field
    - expect: The username field accepts input
  3. Enter 'wrong_password' in the password field
    - expect: The password field accepts input
  4. Click the 'Login' button
    - expect: An error message 'Epic sadface: Username and password do not match any user in this service' is displayed
    - expect: The user remains on the login page

### 2. Product Browsing Tests

**Seed:** `seed.spec.ts`

#### 2.1. Browse Products Page

**File:** `specs/browse-products.spec.ts`

**Steps:**
  1. Perform successful login with standard_user
    - expect: Login is successful
  2. Verify the products inventory page loads correctly
    - expect: All 6 products are displayed with images, names, descriptions, and prices
    - expect: Product names include 'Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)'

#### 2.2. Sort Products by Name and Price

**File:** `specs/sort-products.spec.ts`

**Steps:**
  1. Perform successful login with standard_user
    - expect: Login is successful
  2. Verify initial sort order
    - expect: Products are sorted alphabetically A to Z by default
  3. Select 'Name (Z to A)' from the sort dropdown
    - expect: Products are sorted Z to A
  4. Select 'Price (low to high)' from the sort dropdown
    - expect: Products are sorted by price low to high
  5. Select 'Price (high to low)' from the sort dropdown
    - expect: Products are sorted by price high to low

### 3. Cart Management Tests

**Seed:** `seed.spec.ts`

#### 3.1. Add Product to Cart

**File:** `specs/add-to-cart.spec.ts`

**Steps:**
  1. Perform successful login with standard_user
    - expect: Login is successful
  2. Locate the 'Add to cart' button for 'Sauce Labs Backpack'
    - expect: The 'Add to cart' button is visible for each product
  3. Click the 'Add to cart' button for 'Sauce Labs Backpack'
    - expect: The cart badge shows '1'
    - expect: The button changes to 'Remove'

#### 3.2. Remove Product from Cart

**File:** `specs/remove-from-cart.spec.ts`

**Steps:**
  1. Add 'Sauce Labs Backpack' to cart
    - expect: Product is added to cart
  2. Locate the 'Remove' button for 'Sauce Labs Backpack'
    - expect: The 'Remove' button is visible
  3. Click the 'Remove' button for 'Sauce Labs Backpack'
    - expect: The cart badge is removed
    - expect: The button changes back to 'Add to cart'

#### 3.3. View Cart Contents

**File:** `specs/view-cart.spec.ts`

**Steps:**
  1. Add 'Sauce Labs Backpack' to cart
    - expect: Product is added to cart
  2. Click the cart icon to navigate to the cart page
    - expect: The cart page displays the product with quantity, name, description, and price

#### 3.4. Continue Shopping from Cart

**File:** `specs/continue-shopping.spec.ts`

**Steps:**
  1. Add 'Sauce Labs Backpack' to cart
    - expect: Product is added to cart
  2. Click 'Continue Shopping' button from the cart page
    - expect: User is redirected back to the products page

### 4. Checkout Tests

**Seed:** `seed.spec.ts`

#### 4.1. Checkout with Valid Information

**File:** `specs/checkout-valid-info.spec.ts`

**Steps:**
  1. Add 'Sauce Labs Backpack' to cart
    - expect: Product is added to cart
  2. Click 'Checkout' from the cart page
    - expect: User is on the checkout information page
  3. Enter 'John' in the First Name field
    - expect: First Name field is visible
  4. Enter 'Doe' in the Last Name field
    - expect: Last Name field is visible
  5. Enter '12345' in the Zip/Postal Code field
    - expect: Zip/Postal Code field is visible
  6. Click 'Continue' button
    - expect: User proceeds to checkout overview
  7. Verify the checkout overview page
    - expect: Order summary shows item, payment info, shipping info, and total price
  8. Click 'Finish' button
    - expect: Order completion page is displayed with success message

#### 4.2. Checkout with Missing Information

**File:** `specs/checkout-missing-info.spec.ts`

**Steps:**
  1. Add 'Sauce Labs Backpack' to cart
    - expect: Product is added to cart
  2. Click 'Checkout' from the cart page
    - expect: User is on the checkout information page
  3. Click 'Continue' button without filling any fields
    - expect: Error message 'Error: First Name is required' is displayed
    - expect: User remains on the checkout information page

#### 4.3. Complete Order and Return to Products

**File:** `specs/complete-order.spec.ts`

**Steps:**
  1. Complete the checkout process with valid information
    - expect: Order is completed
  2. Click 'Back Home' button on the order completion page
    - expect: User is redirected back to the products page
    - expect: Cart is empty
