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
            let alert =  newTextContent === '' ? `${alerts[i]} ` : `/ ${alerts[i]}`;
            newTextContent = newTextContent.concat(alert);
        } 
        caseSummaryAlerts.textContent = newTextContent; 
    } else { 
        caseSummaryAlerts.textContent = alerts; 
    }
    
}

updateCaseSummaryBanner('2020987654', 'Doe, John', '12/01/1970', ['DSO', 'FARE']);