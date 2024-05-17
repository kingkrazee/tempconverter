document.addEventListener('DOMContentLoaded', () => {
    const celsiusInput = document.getElementById('celsiusInput');
    const convertBtn = document.getElementById('convertBtn');
    const clearBtn = document.getElementById('clearBtn');
    const fahrenheitOutput = document.getElementById('fahrenheitOutput');
    convertBtn.addEventListener('click', () => {
        const celsius = parseFloat(celsiusInput.value);
        if (isNaN(celsius)) {
            fahrenheitOutput.innerText = 'Please enter a valid number.';
        } else {
            const fahrenheit = (celsius * 9/5) + 32;
            fahrenheitOutput.innerText = fahrenheit.toFixed(2);
        }
    });
    clearBtn.addEventListener('click', () => {
        celsiusInput.value = '';
        fahrenheitOutput.innerText = '';
    });
});