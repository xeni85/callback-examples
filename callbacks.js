const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown',]

colors.forEach((color, idx) => {
    console.log(`${idx + 1} - ${color}`)
});


// when functions are called as parameters they are callback functions.

// To provide a function to be called by a higher-order function such as forEach or the compute function we wrote above.

// To provide a function to be executed each time an event happens - just like with the addEventListener example above.

// To provide a function to be executed when an asynchronous process has completed.

//asyncroniously returns colors array
const getColorsAsync = (cb) => {
    setTimeout(() => {
        cb(colors)
    }, 1000)
}

getColorsAsync((colors) => { 
    colors.forEach((color) => { console.log(color) })
    console.log('done')
})

//add numbers together
const displayTotal = (total) => {
    console.log(total)
}

const displayTotalAsync = (num1, num2, total) => {
    const sum = num1 + num2;
    displayTotal(sum)
}

displayTotalAsync(1, 2, displayTotal)

//do smth afte window loads
window.addEventListener('load', () => {
    console.log('window loaded')
}

//express async get request

app.get('/colors', (req, res) => {
    getColorsAsync((colors) => {
        res.send(colors)
    })
})


// getEffect 

useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count])
)
// In your own words describe what the term "implicit return" means.

//Implicit return, as the name suggests, means that the function returns a value
//implicitly. This in and of itself means that the result of the function is predefined.

//Callback in my own words.

//A callback function is a helper function that can be used to return a value from within another function. The way it is called makes it different from simple nesting. While you can call other functions within functions, a callback functions is fed to the main fucntion as a parameter. This allows for the helper functions to be called at will or asynchroniously to help the narrative of our program.