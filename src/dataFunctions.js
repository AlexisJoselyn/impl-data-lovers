// estas funciones son de ejemplo

export const filterData = (data, filterBy, value) => {
  return data.filter(element => element[filterBy] === value)
};

export const sortData = (data, sortBy, sortOrder) => {
  const dataCopy = [...data]
  return dataCopy.sort((a,b)=>{
    if(a[sortBy]<b[sortBy]){
      return sortOrder === 'desc' ? 1: -1
    }
    if(a[sortBy]>b[sortBy]){
      return sortOrder === 'desc' ? -1: 1
    }
    return 0
  });  
};

export const computeStats = (data) => {
  const dataBorn = data.map(({born})=>born !== null && born.split(' ')[1])
  const numberBorn = data.map(({born})=>born !== null && parseInt(born.split(' ')[0])).filter(elem=>elem)
  const totalDateBorn = numberBorn.reduce((acum, prev)=>acum+prev,0)
  const average = parseFloat((totalDateBorn/numberBorn.length).toFixed(2))
  const bornDC = dataBorn.filter(elem => elem && elem ==='DC').length * 100
  const bornAL = dataBorn.filter(elem => elem && elem ==='AL').length * 100
  const totalBorn = dataBorn.filter(elem => elem).length
  const percentBornDC = parseFloat((bornDC /totalBorn).toFixed(2))
  const percentBornAL = parseFloat((bornAL /totalBorn).toFixed(2))

  return {percentBornAL, percentBornDC, average }
}
