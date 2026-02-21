let employees = [];
let attendanceData = {};
let payrollRun = false;

function addEmployee() {
    const id = document.getElementById("empId").value.trim();
    const name = document.getElementById("empName").value.trim();
    const salary = parseFloat(document.getElementById("empSalary").value);
    const deduction = parseFloat(document.getElementById("empDeduction").value);
    const bank = document.getElementById("empBank").value.trim();

    if (!id || !name || isNaN(salary)) {
        addNotification("warning", "Missing required employee fields.");
        return;
    }

    if (employees.find(emp => emp.id === id)) {
        addNotification("critical", "Duplicate Employee ID detected.");
        return;
    }

    if (!bank) {
        addNotification("warning", "Missing bank details.");
        return;
    }

    if (salary < 0) {
        addNotification("critical", "Negative salary entered.");
        return;
    }

    employees.push({ id, name, salary, deduction });
    addNotification("info", "Employee added successfully.");
}
