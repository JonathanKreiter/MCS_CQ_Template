const [allTime, customTime] = document.getElementsByName('timeRange')

function toggleDatePickingEnabled() { 
    const div = document.getElementById('disabledDPNotification');
    const textElm = document.getElementById('disabledDPNotificationText')

    return customTime.checked 
            ? (div.style.backgroundColor = 'lightgreen', textElm.textContent = 'Date Pickers Enabled')
            : (div.style.backgroundColor = 'orange', textElm.textContent = 'Date Pickers Disabled, select Custom to enable')            
}

function toggleDatePickerDisabled() { 
    const startDatePicker = document.getElementById('startDate')
    const endDatePicker = document.getElementById('endDate'); 

    if (customTime.checked) { 
        startDatePicker.disabled = false; 
        endDatePicker.disabled = false; 
    } else { 
        startDatePicker.disabled = true;
        endDatePicker.disabled = true;
    }
}

function toggleDisplayAndDatePicker() { 
    toggleDatePickerDisabled();
    toggleDatePickingEnabled();
}

allTime.addEventListener('click', toggleDisplayAndDatePicker);
customTime.addEventListener('click', toggleDisplayAndDatePicker);



// Write a simple function to insert today's date into the 'end date' date picker by default 