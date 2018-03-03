// Inputs
const startDate = new Date("December 4, 2017");
const startDateMs = startDate.getTime();
const currentDate = new Date();
const oneWeekMs = (1000*60*60*24*7);
const weeklyRepayment = 25;
const loanPrincipal = 5500;


// Workings
const weeksDifference = Math.abs(startDate - currentDate);
const findLastPayment = (startDateMs + weeksDifference);

// Outputs

// Number of payments(weeks) since loan start
const startDateText = startDate.toDateString();
const paymentsSinceStart =  Math.floor(weeksDifference / oneWeekMs);
const totalPaid = paymentsSinceStart * weeklyRepayment;

// Date of most recent payment
const roundedWeeksMs = startDateMs + (oneWeekMs * paymentsSinceStart);
const dateOfMostRecentPayment = new Date(roundedWeeksMs).toDateString();

// Current amount owing
const calcCurrentAmountOwing = loanPrincipal - (weeklyRepayment * paymentsSinceStart);

// List of all payments to current date
for(i=0; i<=paymentsSinceStart; i++) {
   const allPaymentsToDate =  new Date(startDateMs + (i * oneWeekMs)).toDateString();
//    return allPaymentsToDate;
}

// Date of last repayment
const getDateOfLastPayment = ((loanPrincipal / weeklyRepayment) * oneWeekMs) + startDateMs;
const dateOfLastPayment = new Date(getDateOfLastPayment).toDateString();

// Render
document.getElementById("principal").innerHTML = `Principal: $${ loanPrincipal }`;
document.getElementById("repayment").innerHTML = `Weekly Repayment: $${ weeklyRepayment }`;
document.getElementById("start-date").innerHTML = `Start date: ${ startDateText }`;
document.getElementById("end-date").innerHTML = `End date: ${ dateOfLastPayment }`;
document.getElementById("most-recent-payment-date").innerHTML = `Most recent payment: ${ dateOfMostRecentPayment }`;
document.getElementById("current-owing").innerHTML = `Current outstanding: $${ calcCurrentAmountOwing }`;
// document.getElementById("all-payments").innerHTML = `List of all payments ${ allPaymentsToDate }`;
