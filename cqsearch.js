const [allTime, customTime] = document.getElementsByName('timeRange');
const useQueuesCheckBox = document.getElementById('useQueues');
const primaryQueueDropdown = document.getElementById('primaryQueue');
const customSearchCheckBox = document.getElementById('customSearchCheckBox');

const customSearchGroup = document.querySelectorAll("[name='customSearch']");

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

//Custom search funcs

function toggleEnableCustomSearch() {
    const customSearchGroup = document.querySelectorAll("[name='customSearch']");

    if (customSearchCheckBox.checked) { 
        for (const item of customSearchGroup) { 
            item.disabled = false;
        }

    } else { 
            for (const item of customSearchGroup) { 
                item.disabled = true;
                item.checked = false;
            }
    }
}

function disabledBasedOnSelection() { 

    function disableAndUncheck(tag) { 

        function uncheckTag(tag) { 
            return tag.checked = false; 
        }
        function disableTag(tag) { 
            return tag.disabled = true; 
        }

        uncheckTag(tag); 
        disableTag(tag); 
    }

    function enableTag(tag) { 
        return tag.disabled = false; 
    }

    const inactiveCB = document.getElementById('inactiveCB');
    const activeCB = document.getElementById('activeCB');
    const resolvedCB = document.getElementById('resolvedCB'); 
    const pastDueCB = document.getElementById('pastDueCB');
    const onScheduleCB = document.getElementById('onScheduleCB'); 
    const fareCB = document.getElementById('fareCB');
    const bankCB = document.getElementById('bankCB');
    const restCB = document.getElementById('restCB');
    const dsoCB = document.getElementById('dsoCB');

    const customSearchGroup = document.querySelectorAll("[name='customSearch']");
    let cbChecked = [];
    let cbNotChecked = [];

    for (const item of customSearchGroup) { 
        if (item.checked) { 
            cbChecked.push(item); 
        } else { 
            cbNotChecked.push(item);
        }
    }

    if (this.checked) {

        switch (this) { 
            case inactiveCB:
                disableAndUncheck(activeCB)
                disableAndUncheck(resolvedCB);
                disableAndUncheck(pastDueCB);
                disableAndUncheck(onScheduleCB);
                break;
            case activeCB: 
                disableAndUncheck(inactiveCB); 
                disableAndUncheck(resolvedCB); 
                disableAndUncheck(fareCB); 
                disableAndUncheck(bankCB); 
                disableAndUncheck(dsoCB);
                break;
            default: 
                break;

        }
    } else {

            switch (this) { 
                case inactiveCB: 
                    enableTag(activeCB); 
                    enableTag(resolvedCB);
                    enableTag(pastDueCB); 
                    enableTag(onScheduleCB);
                    break;
                case activeCB: 
                    enableTag(inactiveCB); 
                    enableTag(resolvedCB); 
                    enableTag(fareCB); 
                    enableTag(bankCB); 
                    enableTag(dsoCB);
                    break;
                default: 
                    break;
            } 
    } 

}

allTime.addEventListener('click', DatePickerEventHandler);
customTime.addEventListener('click', DatePickerEventHandler);

useQueuesCheckBox.addEventListener('click', enablePrimaryQueue);
primaryQueueDropdown.addEventListener('change', enableSubQueue);
primaryQueueDropdown.addEventListener('change', buildSubQueue);

customSearchCheckBox.addEventListener('click', toggleEnableCustomSearch);

for (const item of customSearchGroup) { 
    item.addEventListener('click', disabledBasedOnSelection);
}







// Write a simple function to insert today's date into the 'end date' date picker by default