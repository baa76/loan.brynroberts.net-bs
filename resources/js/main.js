// Inputs
const startDate = new Date("December 4, 2017");
const startDateMs = startDate.getTime();
const currentDate = new Date();
const oneWeekMs = (1000*60*60*24*7);
const weeklyRepayment = 25;
const loanPrincipal = 5500;


// Workings
const weeksDifference = Math.abs(startDate - currentDate);
// const findLastPayment = (startDateMs + weeksDifference);

// Outputs

// Number of payments(weeks) since loan start
const startDateText = startDate.toDateString();
const paymentsSinceStart =  Math.floor(weeksDifference / oneWeekMs);

// Date of most recent payment
const roundedWeeksMs = startDateMs + (oneWeekMs * paymentsSinceStart);
const dateOfMostRecentPayment = new Date(roundedWeeksMs).toDateString();

// Current amount owing
const calcCurrentAmountOwing = loanPrincipal - (weeklyRepayment * paymentsSinceStart);

// Date of last repayment
const getDateOfLastPayment = ((loanPrincipal / weeklyRepayment) * oneWeekMs) + startDateMs;
const dateOfLastPayment = new Date(getDateOfLastPayment).toDateString();
//Total number of repayments
const totalNumberOfRepayments = loanPrincipal / weeklyRepayment;


// List of all payments to current date
// for (let i=0; i<=paymentsSinceStart; i++) {
//     new Date(startDateMs + (i * oneWeekMs)).toDateString();
// }

// const paymentsToDate = [];

// for (let i=0; i<=paymentsSinceStart; i++) {
//     const paymentDate = new Date(startDateMs + (i * oneWeekMs));
//     paymentsToDate.push({
//         paymentId: i+1,
//         paymentAmount: weeklyRepayment,
//         adjustedBalance: loanPrincipal - (weeklyRepayment * (i+1)),
//         paymentYear: paymentDate.getFullYear(),
//         paymentMonth: paymentDate.getMonth(),
//         paymentDay: paymentDate.getDate(),
//     });
// }

// const paymentsToDateArr = [];
const currentPaymentId = [];
const currentBalance = [];
const currentPaymentDate = [];

for (let i=0; i<=paymentsSinceStart; i++) {
    currentPaymentId.push(i+1);
    currentBalance.push(loanPrincipal - (weeklyRepayment * (i+1)));
    currentPaymentDate.push(new Date(startDateMs + (i * oneWeekMs)));
}


// const projectedPayments = [];

// for (let i=0; i<=totalNumberOfRepayments; i++) {
//     const paymentDate = new Date(startDateMs + (i * oneWeekMs));
//     projectedPayments.push({
//         paymentId: i+1,
//         paymentAmount: weeklyRepayment,
//         adjustedBalance: loanPrincipal - (weeklyRepayment * (i+1)),
//         paymentYear: paymentDate.getFullYear(),
//         paymentMonth: paymentDate.getMonth(),
//         paymentDay: paymentDate.getDate(),
//     });
// }
// const projectedPaymentsArr = [];
const projectedPaymentId = [];
const projectedCurrentBalance = [];
const projectedPaymentDate = [];
// const projectedPaymentBalanceTwo = projectedBalancetDate[0,projectedBalanceDate.length];
//create arrays
for (let i=0; i<=totalNumberOfRepayments; i++) {
    // projectedPaymentsArr.push(totalNumberOfRepayments);
    projectedPaymentId.push(i+1);
    projectedCurrentBalance.push(loanPrincipal - (weeklyRepayment * (i+1)));
    projectedPaymentDate.push(new Date(startDateMs + (i * oneWeekMs)));
}





// Render
document.getElementById("principal").innerHTML = `$${ loanPrincipal }`;
document.getElementById("repayment").innerHTML = `$${ weeklyRepayment } per week`;
document.getElementById("start-date").innerHTML = `${ startDateText }`;
document.getElementById("end-date").innerHTML = `${ dateOfLastPayment }`;
document.getElementById("most-recent-payment-date").innerHTML = `${ dateOfMostRecentPayment }`;
document.getElementById("current-owing").innerHTML = `$${ calcCurrentAmountOwing }`;
document.getElementById("payments-made").innerHTML = `${ paymentsSinceStart }`;
document.getElementById("total-payments").innerHTML = `${ totalNumberOfRepayments }`;