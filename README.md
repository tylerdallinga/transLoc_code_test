# Tyler's TransLoc Test Project

In this test I was able to write a framework up from scratch. Please note: I have had no experiance with cypress but decided to use it because TransLoc uses Cypress and Cypress is a non-selenium based platform so instead of me useing Javascript, selenium and a js testing framework called nightwatch I decided to try my hand at this one. So what I have done will reflect my experiance in learning a new technology and to empliment it fast and reliably to run tests. I will include in a later section of this README the test cases used to write up automation tests.

### Set-Up

In this project I used a comination of JavaScript,and Cypress.io.

1. JavaScript:

* Install the Java JDK and add it to your path!
* Download the correct version
* Install it and add it to your path
* You can test if Java is on your path by entering java -version into your terminal/command line/bash

2. Clone Project Folder:

* in the terminal; git clone https://github.com/tylerdallinga/transLoc_code_test.git

* In an code editor of your choice load the file and then in your terminal enter the project folder

3. Install Cypress.io: The only requirement for this project is to have Node.js version 12 installed on your machine.

* npm install cypress --save-dev

## Run Tests:

* Headless: If you would like to run the tests headless, enter this command in the terminal:  node_modules/.bin/cypress run --spec cypress/integration/onDemand.js 

* cypress.io UI: If you would like to view the tests in the cypress ui enter this command in the terminal: node_modules/.bin/cypress open

* when the ui is opened find the /onDemand.js file and click it. This will run the tests.

## Test Cases:

This is a list of the test cases I used to write the tests from: I usually like to write them on paper for visual refrance when a extra moniter is not avalible, so these are being writen from my notebook and shown to you for referance.

### 1. As a user, I should be able to sign into my account and logout.

#### Discription: 

This is to test the sign in function and the logout function of the app

#### Steps:

1. Navigate to "https://login.stage.transloc.com/login/?next=https://ondemand.stage.transloc.com/admin"

2. input username value into the field, (Username: qainterview2) also should test email but that info was not given at this point

3. assert the value is correct

4. input password value into the password field, (passord: sA52XC460@vm)

5. assert the value is correct

6. click log in button

7. assert the onDemand main page

8. click logout button

9. assert the logout was seccessful 

#### Expected Outcome:

The user should be back on the sign in page

#### Bugs Found: 

* When testing the log out function I noticed the herf link that takes you back the the signin page redirects you to the prod application not stage. For example: the url should be: https://login.stage.transloc.com/login/?next=https://ondemand.stage.transloc.com/admin/translocdecember/rides?date=2020-09-23 But you get: https://login.transloc.com/login/?next=https://ondemand.stage.transloc.com/admin/translocdecember/rides?date=2020-09-23 instead, Also not sure if "/translocdecember/rides?date-2020-09-23 should be there.

### 2. As a user, I should be able to sign in and create a new ride

#### Descrption: 

This is to test the function of creating a new ride, entering in data in each field and book the ride

#### Steps:

1. log into app (see login test for steps to do this)

2. click the new ride button: "+"

3. When page loads enter date into required fields, service, firstname, lastname, phone, number of riders, pickup and dropoff, ect, (plase make note that you will not be able to book a ride in a rought outside the given area)

4. click Book Ride button

5. when page loads check information is correct

6. click the Back to all rides button to proced back to main page

#### Expected Outcome:

should be back on the main page with the "new ride" now showing in the all rides table

### 3. As a user, I should be able to search for a specific ride and view the details page of that ride

#### Descrption: 

This is to test the search feature within the onDemand app, to search for a ride with spesific data and then to make sure that ride is shown 

#### Steps:

1. log into app (see login test for steps to do this)

2. enter search data into the search box. (example, name, dropoff or pickup)

3. check to see if the data enterd shows the correct "Ride" and check information is correct

4. click details button conected to the "Ride" row 

5. when page loads check information is correct and details are shown

6. click the Back to all rides button to proced back to main page

#### Expected Outcome:

should be back on the main page with the now showing in the all rides table


### 4. As a user, I should be albe to navigate thew all the "single rides" options.

#### Descrption: 

This is to test that all the basic navigation thew the "single rides" coloum works correctly. 

#### Steps:

1. log into app (see login test for steps to do this)

2. under the "single rides" coloum makes sure the following options exist: All single Rides, Pending Approval, Requested, On Vehicle, Complete, canceled, No Show, Denied.

3. navigate thew each choice and make sure that the naviagion works

4. as the last action go back to "All Single Rides"

#### Expected Outcome:

should be back on the main page with the now showing in the all rides table


### 5. As a user, I should be able to filter rides by date, and service.

#### Descrption: 

This is to test the two other top row filter options, date, and service.

#### Steps:

1. log into app (see login test for steps to do this)

2. add a new ride (see test 2 for the steps)

3. In the "service" dropdown filter uncheck all the servies that arn't the one you are searching for, if possible if you are able to create a ride with anothe service make sure that both are checked and they are shown correctly. 

4. reset the service dropdown to default (all options selected)

5. enter a the date of the day you created your ride. make sure that that ride is the only one showing, if possible and you have created dates in the past, search for one of those rides and the info is correct


#### Expected Outcome:

should be back on the main page with the now showing in the all rides table
