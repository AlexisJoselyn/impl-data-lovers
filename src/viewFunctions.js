export const renderItems = (data) => {
  const cardContainer = document.createElement('ul')
  let template = '';
  data.forEach(element => {
    template += `
    <li class="test" itemscope itemtype="got">
      <dl>
      <img src="${element.imageUrl}">
      <dt>Name:</dt><span itemprop="firstName" style="display=none">${element.firstName}</span><dd itemprop="fullName">${element.fullName}</dd>
      <dt>House:</dt><dd itemprop="family">${element.family}</dd>
      <dt>Title:</dt><dd itemprop="title">${element.title}</dd>
      </dl>
    </li>
    `
  });
  cardContainer.innerHTML = template;
  return cardContainer
};

