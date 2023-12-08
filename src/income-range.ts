const incomeRange = document.querySelector<HTMLInputElement>('#income-range');
const incomeRangeValue = document.querySelector<HTMLInputElement>(
  '#income-range-value'
);

getIncomeRangeValue(incomeRange, incomeRangeValue);

incomeRange.addEventListener('change', () => {
  getIncomeRangeValue(incomeRange, incomeRangeValue);
});

function getIncomeRangeValue(
  rangeInput: HTMLInputElement,
  rangeValue: HTMLInputElement
) {
  rangeValue.innerHTML = rangeInput.value + '€';
}
