// Task 1: Declare The Task Array and The Interval ID
let oneTimeTasks = [];
let monitoringTaskId = null;

// Task 2: Add One-Time Task Function
function addOneTimeTask(func, delay) {
    oneTimeTasks.push({ func, delay });
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks() {
    oneTimeTasks.forEach(task => {
        setTimeout(task.func, task.delay);
    });
}

// Task 4: Start Monitoring Function
function startMonitoring() {
    monitoringTaskId = setInterval(() => {
        console.log("Monitoring systems...");
    }, 3000); // Adjust the interval as needed
}

// Task 5: Stop Monitoring Function
function stopMonitoring() {
    if (monitoringTaskId !== null) {
        clearInterval(monitoringTaskId);
        monitoringTaskId = null;
        console.log("Monitoring stopped.");
    }
}

// Task 6: Start Countdown Function
function startCountdown(duration) {
    let remainingTime = duration;
    const countdownId = setInterval(() => {
        if (remainingTime > 0) {
            console.log(`T-minus ${remainingTime} seconds`);
            remainingTime--;
        } else {
            clearInterval(countdownId);
            console.log("Liftoff!");
        }
    }, 1000); // Decrease the countdown every second
}
// watched youtube video for more information on setInterval and clearInterval functions to better understand how they work from Mosh Hamedani
// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission() {
    // Add pre-launch system check task
    addOneTimeTask(() => {
        console.log("Pre-launch system check complete.");
    }, 2000); // Adjust the delay as needed

    // Run one-time tasks
    runOneTimeTasks();

    // Start monitoring
    setTimeout(startMonitoring, 5000); // Adjust the delay as needed

    // Stop monitoring
    setTimeout(stopMonitoring, 15000); // Adjust the delay as needed

    // Start countdown
    setTimeout(() => {
        startCountdown(10); // Adjust the countdown duration as needed
    }, 20000); // Adjust the delay as needed
}

scheduleMission(); // Starts the mission.