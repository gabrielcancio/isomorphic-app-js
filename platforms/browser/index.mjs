class TableWebComponent {
  render(data) {
    const htmlTemplate = this.prepareData(data);

    document.body.insertAdjacentHTML('afterBegin', htmlTemplate);
  }

  prepareData(data) {
    const [ firstItem ] = data;
    const joinList = list => list.join('');

    const tableHeaders = Object.keys(firstItem)
      .map(text => `<th scope="col">${text}</th>`);

    const tableBody = data
      .map(item => Object.values(item)) //[[values do objeto 1], [values do objeto 2], ...]
      .map(item => item.map(value => `<td>${value}</td>`)) // [[<td>value 1</td>, <td>value 2</td>, ...]]
      .map(tds => `<tr>${joinList(tds)}</tr>`);

    const template = `
      <table class="table table-striped">
        <thead>
          ${joinList(tableHeaders)}
        </thead>
        <tbody>
          ${joinList(tableBody)}
        </tbody>
      </table>
    `;

    return template;
  }
}

export default TableWebComponent;