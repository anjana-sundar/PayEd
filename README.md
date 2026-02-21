# AnnaPay Payroll Notification Simulation
AnnaPay - Payroll Notification System
Agile | Sprint Zero | User Stories + Test Cases + Team Division

## What This Is
This is a simulated payroll notification system demonstrating edge-case handling and workflow validation for AnnaPay.

## What It Simulates
- Employee data validation
- Duplicate detection
- Negative salary checks
- Missing attendance detection
- Payroll workflow stages
- Notification engine with severity levels

## What It Does NOT Do
- Real bank transfers
- Real database storage
- Real tax calculation

## Purpose
This prototype validates business rules, edge-case detection, and system thinking using a lightweight web-based simulation.

## Sprint Zero - What are we building first?
Goal of Sprint Zero
- Sprint Zero sets the foundation, not features.

## Sprint Zero answers:
What problem are we solving?
What notifications are critical?
How will we build & test incrementally?
 
## Sprint Zero Deliverables
- Product vision & scope
- User roles & personas
- Notification-first user stories
- Testing strategy
- Team responsibility split

---

## Product Vision (AnnaPay - Notification-Centric)

> AnnaPay is a college payroll system that ensures error-free salary processing by detecting edge cases early and notifying the right stakeholders at the right time.

---

## Agile Team Structure - Who does what?

Business Analyst (BA)	    Understand payroll rules, identify edge cases, write user stories
Scrum Master (SM)	        Agile process, sprint planning, remove blockers
Developer	                Build payroll logic + notification system
Tester (QA)	                Write test cases, validate edge cases & notifications


---

How They Work Together (Agile Flow)

1. BA writes user stories + acceptance criteria

2. Tester writes test cases before development

3. Developer implements feature

4. Tester validates functionality + notifications

5. Scrum Master ensures sprint flow & reviews

---

## User Stories + Test Cases (Mapped Clearly)

EPIC: Employee Data Validation

US-01: Duplicate Employee Detection

As an HR Officer,
I want to be notified when I add a duplicate employee,
So that duplicate payroll entries are avoided.

Test Cases

TC ID	Scenario	                      Expected Result

TC-01.1	Add employee with existing ID	  Error message shown & save blocked
TC-01.2	Add employee with duplicate PAN	  Error message shown & save blocked
TC-01.3	Duplicate detected	              HR receives alert

---

US-02: Incomplete Profile Alert

As a Payroll Admin,
I want to be notified when an employee profile is incomplete.


Test Cases

TC ID	Scenario	            Expected Result

TC-02.1	Missing bank details	Payroll blocked
TC-02.2	Missing PAN	            Warning shown
TC-02.3	Incomplete profile	    Email sent to HR

---

EPIC: Salary Structure Validation

US-03: Invalid Salary Structure Warning

As a Payroll Admin,
I want to be alerted when salary components are invalid.

Test Cases

TC ID	Scenario	                Expected Result

TC-03.1	Components > gross salary	Error displayed
TC-03.2	Negative allowance	        Save blocked
TC-03.3	Invalid structure	        Notification shown

---

US-04: Negative Net Salary Detection

As a Payroll Admin,
I want to be notified if net salary is negative.
 
Test Cases

TC ID	Scenario	        Expected Result

TC-04.1	Net salary < 0	    Finance notified
TC-04.2	Error resolved	    Payroll resumes

---

EPIC: Attendance & Leave

US-05: Missing Attendance Notification

As a Payroll Admin,
I want to be notified if attendance is not uploaded.

Test Cases

TC ID	Scenario	              Expected Result

TC-05.1	Attendance not uploaded   Payroll disabled
TC-05.2	Cutoff reached	          Reminder sent
TC-05.3	Upload completed	      Status updated

---

EPIC: Payroll Processing

US-06: Duplicate Payroll Run Prevention

As a Payroll Admin,
I want to be notified if payroll is already processed.

Test Cases

TC ID	Scenario	Expected Result

TC-06.1	Payroll run twice	Block execution
TC-06.2	Duplicate detected	Warning shown

---

US-7: Unauthorized Change Detection

As a System Admin,
I want alerts if locked payroll is modified.

Test Cases

TC ID	Scenario	               Expected Result
TC-7.1	Unauthorized user	       Security alert

---

## Run Instructions
1. Extract ZIP
2. Open index.html
3. Add Employees
4. Upload attendance_sample.csv
5. Click Generate Payroll

## Simulates
- Employee validation
- Duplicate detection
- Attendance upload via CSV
- Missing attendance alerts
- Negative salary alerts
- Duplicate payroll detection
- Severity-based notifications


One-Line Explanation 
> "In AnnaPay, Sprint Zero focuses on identifying payroll edge cases, defining notification-driven user stories, mapping test cases early, and dividing responsibilities clearly across BA, Scrum Master, Developer, and Tester using Agile"
