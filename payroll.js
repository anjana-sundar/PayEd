function uploadAttendance() {
    const fileInput = document.getElementById("attendanceFile");
    const file = fileInput.files[0];

    if (!file) {
        addNotification("warning", "No attendance file selected.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const lines = event.target.result.split("\n");
        attendanceData = {};
        lines.forEach(line => {
            const [id, days] = line.split(",");
            if (id && days) {
                attendanceData[id.trim()] = parseInt(days.trim());
            }
        });
        addNotification("info", "Attendance uploaded successfully.");
    };
    reader.readAsText(file);
}

function generatePayroll() {
    if (payrollRun) {
        addNotification("critical", "Duplicate Payroll Attempt.");
        return;
    }

    if (employees.length === 0) {
        addNotification("warning", "No employees available.");
        return;
    }

    if (Object.keys(attendanceData).length === 0) {
        addNotification("warning", "Attendance data missing.");
        return;
    }

    employees.forEach(emp => {
        if (!attendanceData[emp.id]) {
            addNotification("warning", `Missing attendance for ${emp.name}.`);
            return;
        }

        const netSalary = emp.salary - emp.deduction;

        if (netSalary < 0) {
            addNotification("critical", `Negative net salary for ${emp.name}.`);
            return;
        }

        addNotification("info", `Payroll processed for ${emp.name}.`);
    });

    payrollRun = true;
}
