import { computeStats, filterData, sortData } from './dataFunctions.js';
import { renderItems } from './viewFunctions.js';

import data from './data/got/got.js';

const dataGOT = data.got
console.log(dataGOT);

const root = document.getElementById('root')
const selectFilter = document.querySelector('#filter')
const selectSort = document.querySelector('#sort')
const buttonFact = document.querySelector('#button-fact')
const buttonReset = document.getElementById('button-reset')

// eslint-disable-next-line no-undef
const optionsFamily = new Set(dataGOT.map(({family}) => family))

const printOptions = (arrOptions) => {
  let options = '<option value=""></option>'
  arrOptions.forEach(house => {
    options += `<option value='${house}'>${house}</option>`
  });
  return options
}

selectFilter.innerHTML = printOptions(optionsFamily)

root.append(renderItems(dataGOT))

selectFilter.addEventListener('change',(event)=>{
  const resultFilter = filterData(dataGOT, 'family', event.target.value)
  root.innerHTML = ''
  root.append(renderItems(resultFilter))
})

selectSort.addEventListener('change', (event)=>{
  const resultSort = sortData(dataGOT, 'fullName', event.target.value)
  root.innerHTML = ''
  root.append(renderItems(resultSort))
})

buttonFact.addEventListener('click', ()=>{
  root.innerHTML = ''
  const templateFact = `
    <h3>Sabías que...</h3>
    <p>Los personajes que nacieron AL representan el: ${computeStats(dataGOT).percentBornAL}%</p>
    <p>Los personajes que nacieron DC representan el: ${computeStats(dataGOT).percentBornDC}%</p>
    <p>La edad promedop de los personajes es: ${computeStats(dataGOT).average}</p>`
  root.innerHTML = templateFact;
})

buttonReset.addEventListener('click', ()=>{
  selectFilter.value = '';
  selectSort.value = ''
  root.innerHTML = ''
  root.append(renderItems(dataGOT))
})
