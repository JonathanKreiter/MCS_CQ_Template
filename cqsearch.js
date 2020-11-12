function toggleDatePickers() { 
    const startDate = document.getElementById('startDate')
    const endDate = document.getElementById('endDate'); 
    const customChecked = document.getElementById('custom').checked;

    if (customChecked) { 
        startDate.disabled = false;
        endDate.disabled = false;
    }
}

const timeRange = document.querySelectorAll('input[name="timeRange"]')
let checkedRadioBtn; 

for (const option of timeRange) { 
    if (option.checked) { 
        checkedRadioBtn = option.id;
        break;
    }
    console.log(checkedRadioBtn);
}

// NEED TO GET TOGGLE DISABLE FUCNTION TO WORK WHEN RADIO BUTTONS ARE CLICKED!