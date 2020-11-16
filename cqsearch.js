const [allTime, customTime] = document.getElementsByName('timeRange');
const useQueuesCheckBox = document.getElementById('useQueues');
const primaryQueueDropdown = document.getElementById('primaryQueue');

// date picker funcs
function toggleNotificationEnabled() { 
    const div = document.getElementById('disabledDPNotification');
    const textElm = document.getElementById('disabledDPNotificationText')

    if (customTime.checked) {
        
    }

    return customTime.checked 
            ? (div.style.backgroundColor = 'lightgreen', textElm.textContent = 'Date Pickers Enabled')
            : (div.style.backgroundColor = 'orange', textElm.textContent = 'Date Pickers Disabled, select Custom to enable')            
}

function toggleDatePicker() { 
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

function DatePickerEventHandler() { 
    toggleDatePicker();
    toggleNotificationEnabled();
}

// useQueues funcs
function enablePrimaryQueue() { 
    const pQueue = document.getElementById('primaryQueue');
    const sQueue = document.getElementById('subQueue');

    if (useQueuesCheckBox.checked) { 
        pQueue.disabled = false; 
        enableSubQueue();
    } else { 
        pQueue.disabled = true;
        sQueue.disabled = true;
    }
}

function enableSubQueue() { 
    const pQueue = document.getElementById('primaryQueue');
    const sQueue = document.getElementById('subQueue'); 

    return useQueuesCheckBox.checked && pQueue.value !== 'Primary-Queue' ? sQueue.disabled = false : sQueue.disabled = true;
}


allTime.addEventListener('click', DatePickerEventHandler);
customTime.addEventListener('click', DatePickerEventHandler);

useQueuesCheckBox.addEventListener('click', enablePrimaryQueue);
primaryQueueDropdown.addEventListener('change', enableSubQueue);




// Write a simple function to insert today's date into the 'end date' date picker by default 