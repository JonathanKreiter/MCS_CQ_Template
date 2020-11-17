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

function cleanSubQueue() { 
    const sQueue = document.getElementById('subQueue'); 

    for (let i = sQueue.options.length -1; i > 0; i--) { 
        if (sQueue.options[i].value === 'subQueueTitle') break;
        sQueue.remove(i);
    }
}

function resetQueues() { 
    const pQueue = document.getElementById('primaryQueue');
    const sQueue = document.getElementById('subQueue');

    pQueue.disabled = true;
    sQueue.disabled = true;

    pQueue.options[0].selected = true;
    sQueue.options[0].selected = true;
    cleanSubQueue();
}

function enableSubQueue() { 
    const pQueue = document.getElementById('primaryQueue');
    const sQueue = document.getElementById('subQueue'); 

    return useQueuesCheckBox.checked && pQueue.value !== 'primaryQueueTitle' ? sQueue.disabled = false : sQueue.disabled = true;
}


function enablePrimaryQueue() { 
    const pQueue = document.getElementById('primaryQueue');
    const sQueue = document.getElementById('subQueue');

    if (useQueuesCheckBox.checked) { 
        pQueue.disabled = false; 
        enableSubQueue();
    } else { 
        resetQueues();
    }
}

function buildActiveTpcSubQueue() { 
    const sQueue = document.getElementById('subQueue'); 
    const options = [
        {
            textContent: 'ON SCHEDULE', 
            value: 'onSchedule', 
        }, 
        {
            textContent: 'BEHIND SCHEDULE',
            value: 'behindSchedule'
        },
    ]

    for (const option of options) { 
        let optionTag = document.createElement('option'); 
        optionTag.value = option.value; 
        optionTag.textContent = option.textContent; 
        sQueue.append(optionTag);
    }
    
}

function buildInactiveTpcSubQueue() { 
    const sQueue = document.getElementById('subQueue'); 
    const options = [
        {
            textContent: 'BANKRUPTCY', 
            value: 'bankruptcy', 
        }, 
        {
            textContent: 'FARE',
            value: 'fare'
        },
        {
            textContent: 'SKIP TRACE', 
            value: 'skipTrace'
        }, 
        {
            textContent: 'RESCHEDULE ATTEMPT', 
            value: 'rescheduleAttempt'
        }
    ]

    for (option of options) { 
        let optionTag = document.createElement('option'); 
        optionTag.value = option.value; 
        optionTag.textContent = option.textContent; 
        sQueue.append(optionTag);
    }
    
}

function buildSubQueue() { 
    const pQueueValue = document.getElementById('primaryQueue').value; 

    switch (pQueueValue) { 
        case 'primaryQueueTitle': 
            cleanSubQueue();
            break;
        case 'activeTpc': 
            cleanSubQueue(); 
            buildActiveTpcSubQueue(); 
            break;
        case 'inactiveTpc': 
            cleanSubQueue(); 
            buildInactiveTpcSubQueue();
            break;
        default: 
            cleanSubQueue();
    }
}


allTime.addEventListener('click', DatePickerEventHandler);
customTime.addEventListener('click', DatePickerEventHandler);

useQueuesCheckBox.addEventListener('click', enablePrimaryQueue);
primaryQueueDropdown.addEventListener('change', enableSubQueue);
primaryQueueDropdown.addEventListener('change', buildSubQueue);




// Write a simple function to insert today's date into the 'end date' date picker by default ?