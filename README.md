# Help Notes


## 1. Currently, the biggest problem is our client.js file and its location

	- When dealing with the tests, I like to go as far back as possible, and find the first failure -- since it is typically the most relevant
	- if it is not the most relevant, find what is most relevant and start from there
	- In this situation, the first test failure happens to be the most relevant -- it may not always be the case but typically is
	
## The error

```
 FAIL  __tests__/client-test.js
  ● Test suite failed to run

    ENOENT: no such file or directory, open '/Users/marcosandrade/PRIME/coaching/Weekend-Server-Calculator-TA-Notes/server/public/scripts/client.js'

      12 | const path = require('path')
      13 | const html = fs.readFileSync(path.resolve(__dirname, '../server/public/index.html'), 'utf8')
    > 14 | const jsFile = fs.readFileSync(path.resolve(__dirname, '../server/public/scripts/client.js'), 'utf8')
         |                   ^
      15 |
      16 | // Nifty Testing Tools, Authored by the Instructors You Know and Love:
      17 | const testCalculations = require('./__utils__/testCalculations.js')

      at Object.readFileSync (__tests__/client-test.js:14:19)
```

Note this line:
ENOENT: no such file or directory, open '/Users/marcosandrade/PRIME/coaching/Weekend-Server-Calculator-TA-Notes/server/public/scripts/client.js'

- The path for the file will be different for you (the home or user directory), however, the error should still be the same.

### Action Item

- Investigate the file path to make the computer happy
- Do we know how to check if the js file is properly 'sourced'? Where might we find that information?
