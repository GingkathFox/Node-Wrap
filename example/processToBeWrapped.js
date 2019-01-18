// Don't run this script! Run the start.js file.
// Only edit the following settings

// Set one setting at a time to true to test it:
const set = {
    stop: false, // Code 0
    crash: true, // Code 1
    restart: false, // Code 2
    other: false // Code 3
};





console.log("\x1b[36m\x1b[1m[processToBeWrapped]\x1b[0m: I am the child process and I was just started!");


if(set.crash) {
    setTimeout(()=>{
        console.log("\x1b[36m\x1b[1m[processToBeWrapped]\x1b[0m: Crashing...");
        process.exit(1);
    }, 3000);
}
else if(set.restart) {
    setTimeout(()=>{
        console.log("\x1b[36m\x1b[1m[processToBeWrapped]\x1b[0m: Restarting...");
        process.exit(2);
    }, 3100);
}
else if(set.stop) {
    setTimeout(()=>{
        console.log("\x1b[36m\x1b[1m[processToBeWrapped]\x1b[0m: Stopping...");
        process.exit(0);
    }, 3200);
}
else if(set.other) {
    setTimeout(()=>{
        console.log("\x1b[36m\x1b[1m[processToBeWrapped]\x1b[0m: Code 3...");
        process.exit(3);
    }, 3300);
}
else {
    setTimeout(()=>{
        while(true) {} // infinite loop after passing the initialization (-> script is now initialized)
    }, 3500);
}