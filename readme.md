#Playing with angular forms - workshop


## Development Environment Setup

* configure Webstorm to use allow ECMAScript 6 for the project by going
to **Settings / Languages & Framework / Javascript** and choose Javascript
language version **ECMAScript 6**. You have to restart Webstorm or reopen
all files.

## Installation/Usage:

* Clone this entire repo
```bash
$ git clone https://github.com/TekTimmy/sdw-angular.forms.git sdw-angular.forms
```

* Install dependencies
```bash
$ npm install
```

* Run the exercise
```bash
$ npm start
```


## Form Validation Exercise

Enhance the code in _05-angular-form-validation.html_ with form validations.

links:
* angular documentation: https://docs.angularjs.org/api
* bootstrap documentation: https://v4-alpha.getbootstrap.com


### Task 1: Password validation

* Enhance the sharedPasswordPolicy directive (_src/shared/directives/PasswordPolicy.js_)
to make it validate the password with the following criterias:
  * must be at least 6 characters long.
  * must contain at least 1 lowercase letter.
  * must contain at least 1 uppercase letter.
  * must contain at least 1 number.

* Show the **Password Valid** messages only when the password is valid.

* Show the **Password Invalid** message only when the password is invalid.

### Task 2: Enhanced password validation

* Show only the password policy messages the password does not fulfill.
Example: when the password fulfills all policies except containing a number
ONLY the _must contain at least 1 number_ message should be shown.

### Task 3: Password Equal Validation

* make sure the value of the **passwordRepeat** field equals the 
**password** field value by creating a new validation directive.

### Task 4: Hide Validation Messages on Page start

* When the page loads the validation messages are shown for a short
period of time (when reloading page). What is
the best solution for this problem? (There's a simple one!)

