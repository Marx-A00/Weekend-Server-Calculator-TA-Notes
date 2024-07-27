# Help Notes


## 1. Currently, the biggest problem is our client.js file and its location

	
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

```
ENOENT: no such file or directory, open '/Users/marcosandrade/PRIME/coaching/Weekend-Server-Calculator-TA-Notes/server/public/scripts/client.js'
```

- The path for the file will be different for you (the home or user directory), however, the error should still be the same.

## Notes on Tests

- When dealing with the tests, I like to go as far back as possible, and find the first failure -- since it is typically the most relevant
- if it is not the most relevant, find what is most relevant and start from there
- In this situation, the first test failure happens to be the most relevant -- it may not always be the case but typically is

### Action Item

- Investigate the file path to make the computer happy
- Do we know how to check if the js file is properly 'sourced'? Where might we find that information?
## Additional Notes

- Notes are left in client.js -- which I focused on since the server side tests were passing

Without knowing what is going wrong, it's difficult to leave more meaningful notes until that first problem is solved. However, I did leave some helpful notes about the application generally, and where I anticipated things might be going wrong.

In some cases, specifically for the reset function, the function itself may not be failing, however I wanted to give an example if what I mean by going from
big idea to small details, in a way that you can try to emulate for yourself.


- In general, this should be the process that you follow:

	1. What do you want to accomplish?
	2. In what method is this accomplished, or how does that look?
	3. What are the different moving parts of the equation, and how do those look?
		- Also, what is SPECIFICALLY responsible for achieving the expected result?
	
	
	Example:
	POST request
	
	
	1. What do you want to accomplish?
	- I want to make a POST request
		More specific:
		- I want to send data from the front-end of my application to the back-end of my application, and I want that data to be 'posted' AKA stored.
	2. In what method is this accomplished, or how does that look?
	
		- A typical POST request looks like this:
	
```
	axios({
        method:"POST",
        url:"/calculations",
        data: calculation
    }).then((response) =>{
        getCalculationsArray();
    })
}
```
	
	
3. What are the different moving parts of the equation, and how do those look?
	
- There are a lot of different moving parts of a request which can be investigated in detail, however, the most important moving parts at this point are:

	- url property: tells the request where to go, and is of type string
    - data property: is that data that is being transported or 'posted,' this data is typically an Javascript Object
			
			
4. (debugging) When you eventually encounter a problem
	- refer back to these steps, typically number 3, and find what is misbehaving in that structure. 
			
### Bottom Line

“A problem well stated is half solved” - Charles Kettering


			
