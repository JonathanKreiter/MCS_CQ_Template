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

    startDatePicker.disabled = !(startDatePicker.disabled)
    endDatePicker.disabled = !(endDatePicker.disabled) 
}

function toggleDisplayAndDatePicker() { 
    toggleDatePickerDisabled();
    toggleDatePickingEnabled();
}

const [allTime, customTime] = document.getElementsByName('timeRange')

allTime.addEventListener('click', toggleDisplayAndDatePicker);
customTime.addEventListener('click', toggleDisplayAndDatePicker);

