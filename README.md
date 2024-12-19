# MongoDB $inc operator error with string value
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The `$inc` operator is used to increment a numerical value in a document.  Attempting to increment a field with a non-numeric value will result in an error.

The `bug.js` file shows the erroneous code, while `bugSolution.js` provides the correct solution.