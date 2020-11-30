/* 
To Do: 
- "view TPC" button modal #viewTpcBtn
    - Edit content of modal body with JS #viewTpcModalBody
- "Make Payment" button modal #makePaymentBtn
    - Make notification appear with setTimeout() for successful/failed payments #paymentNotification
    - Edit content of modal body with JS #makePaymentModalBody

- update general information area: 
    - #street_address
    - #apt_lot
    - #city
    - #state
    - #zipcode

    - #homeNum
    - #mobileNum
    - #workNum
    - #language

    - #activeTpc
    - #lastDatePaid 
    - #pastDue
    - #cbo 

- "Edit Address" btn #editAddressButton element change to inputs for All gen info address/number 
    - Also changing the button textContent from "Edit Address" to "Submit Changes", and changing the inputs back to <li> elements. 
    - Maybe include a flash of white-green-white css background-color on the newly edited elements when switching back to <li> and the changes have been successfilly submitted. 

- "Add Entry" btn should: 
    - Add an entry to the ROA 
    - If there are no entries in the ROA, display a notification "No entires in the ROA"
*/

'use strict'; 

// - update case summary banner: 
//     - #case-summary-banner-docket
//     - #case-summary-banner-name
//     - #case-summary-banner-dob 
//     - #case-summary-banner-alert

function updateCaseSummaryBanner(docket, name, dob, alerts) { 
    const caseSummaryDocket = document.getElementById('case-summary-banner-docket');
    const caseSummaryName = document.getElementById('case-summary-banner-name');
    const caseSummarydob = document.getElementById('case-summary-banner-dob');
    const caseSummaryAlerts = document.getElementById('case-summary-banner-alerts');

     

    caseSummaryDocket.textContent = docket; 
    caseSummaryName.textContent = name; 
    caseSummarydob.textContent = dob; 
    if (alerts.length > 1) { 
        let newTextContent = '';
        for(let i = 0; i < alerts.length; i++) { 
            let alert =  newTextContent === '' ? `${alerts[i]} ` : `/ ${alerts[i]} `;
            newTextContent = newTextContent.concat(alert);
        } 
        caseSummaryAlerts.textContent = newTextContent; 
    } else { 
        caseSummaryAlerts.textContent = alerts; 
    }
    
}

// toggled from successful/failed payment
function toggleNotification(msg) { 
    const div = document.getElementById('paymentNotification'); 

    function displayMsg() { 
        div.textContent = msg.textContent; 
        div.style.color = msg.color; 
    }

    function clearMsg() { 
        div.textContent = ''; 
        div.color = ''; 
    }

    displayMsg(); 
    setTimeout(clearMsg, 3000);
}

function populateViewTpc(tpcObjArray) { 
    const tBody = document.getElementById('viewTpcTableBody')
    
    for (let payment of tpcObjArray) { 
        const tr = document.createElement('tr'); 
        const paymentNumHeader = document.createElement('th'); 
        const monthData = document.createElement('td'); 
        const dueDateData = document.createElement('td'); 
        const paymentAmtData = document.createElement('td'); 

        paymentNumHeader.scope = 'row';

        paymentNumHeader.textContent = payment.payNum; 
        monthData.textContent = payment.month; 
        dueDateData.textContent = payment.dueDate; 
        paymentAmtData.textContent = payment.payment;

        tr.append(paymentNumHeader, monthData, dueDateData, paymentAmtData); 
        tBody.append(tr);
    }
}

function resetForm(formId) { 
    document.getElementById(formId).reset();
}


// Tests
updateCaseSummaryBanner('2020987654', 'Doe, John', '12/01/1970', ['DSO', 'FARE', 'REST', 'R11']);
toggleNotification({ 
    textContent: "PAYMENT PROCESSED SUCCESSFULLY",
    color: 'green'
});

const viewTpcBtn = document.getElementById('viewTpcBtn'); 
viewTpcBtn.addEventListener('click', populateViewTpc(
    [ { payNum: 1, month: 'January', dueDate: '1/12/2021', payment: '$10'},
      { payNum: 2, month: 'February', dueDate: '2/15/2021', payment: '$10'},
      { payNum: 3, month: 'March', dueDate: '3/15/2021', payment: '$10'},
      { payNum: 4, month: 'April', dueDate: '4/16/2021', payment: '$10'},
      { payNum: 5, month: 'May', dueDate: '5/15/2021', payment: '$10'},
      { payNum: 6, month: 'June', dueDate: '6/17/2021', payment: '$10'},
      { payNum: 7, month: 'July', dueDate: '7/15/2021', payment: '$10'},
      { payNum: 8, month: 'August', dueDate: '8/15/2021', payment: '$10'},
      { payNum: 9, month: 'September', dueDate: '9/18/2021', payment: '$10'},
      { payNum: 10, month: 'October', dueDate: '10/18/2021', payment: '$10'},
      { payNum: 11, month: 'November', dueDate: '11/17/2021', payment: '$10'},
      { payNum: 12, month: 'December', dueDate: '12/20/2021', payment: '$1390'}

]
))

const makePaymentForm = document.getElementById('makePaymentForm');
const makePaymentCancelBtn = document.getElementById('makePaymentCancelBtn');
makePaymentCancelBtn.addEventListener('click', resetForm('makePaymentForm'));
// currently this test is not passing - the form is not resetting when clicking the cancel button and closing out the modal