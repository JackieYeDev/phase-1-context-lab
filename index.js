/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
const createEmployeeRecord = function (employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    };
};

const createEmployeeRecords = function (employees) {
    const employeeRecords = [];
    employees.map((employee) => employeeRecords.push(createEmployeeRecord(employee)));
    return employeeRecords;
};

const createTimeInEvent = function (date) {
    const obj = {
        type: "TimeIn",
        hour: parseInt(date.split(" ")[1]),
        date: date.split(" ")[0]
    };
    this.timeInEvents.push(obj);
    return this;
}

const createTimeOutEvent = function (date) {
    const obj = {
        type: "TimeOut",
        hour: parseInt(date.split(" ")[1]),
        date: date.split(" ")[0]
    };
    this.timeOutEvents.push(obj);
    return this;
};

const hoursWorkedOnDate = function (date) {
    return (this.timeOutEvents.find((e) => e.date === date).hour - this.timeInEvents.find((e) => e.date === date).hour)/100;
};

const wagesEarnedOnDate = function (date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour;
};

const findEmployeeByFirstName = function (srcArray, firstName) {
    return srcArray.find((e) => e.firstName === firstName);
};

const calculatePayroll = function (records) {
    let totalWages = 0;
    records.map(function (e) {
        return totalWages += allWagesFor.call(e);
    });
    return totalWages;
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

