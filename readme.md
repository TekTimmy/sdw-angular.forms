#Browsersync - Webpack + Babel

## Installation/Usage:

To try this example, follow these 4 simple steps. 

**Step 1**: Clone this entire repo
```bash
$ git clone https://github.com/Browsersync/recipes.git bs-recipes
```

**Step 2**: Move into the directory containing this example
```bash
$ cd bs-recipes/recipes/webpack.babel
```

**Step 3**: Install dependencies
```bash
$ npm install
```

**Step 4**: Run the example
```bash
$ npm start
```

## Form Validation Exercise

Enhance the code in _05-angular-form-validation.html_ with form validations.
These angular directives will help you:
* ngShow / ngHide
* ngClass

find the angular documentation at: https://docs.angularjs.org/api

### Task 1: Password validation

* Enhance the sharedPasswordPolicy directive (_src/shared/directives/PasswordPolicy.js_)
to make it validate the password with the following criterias:
  * must be at least 6 characters long.
  * must contain at least 1 lowercase letter.
  * must contain at least 1 uppercase letter.
  * must contain at least 1 number.
  
* Show the _alert-success_ message only when the password is valid.

* Show the _alert-danger_ message only when the password is invalid.

* Use the style class 'greyed' to grey out policies the password does already match.
 FIXME:example
