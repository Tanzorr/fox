const incomeRange = document.querySelector('#income-range');
const incomeRangeValue = document.querySelector('#income-range-value');
getIncomeRangeValue(incomeRange, incomeRangeValue);
incomeRange.addEventListener('change', () => {
    getIncomeRangeValue(incomeRange, incomeRangeValue);
});
function getIncomeRangeValue(rangeInput, rangeValue) {
    rangeValue.innerHTML = rangeInput.value + '€';
}
