import chalk from 'chalk';
import chalkTable from 'chalk-table';

class TableConsoleComponent {
  render(data) {
    const columns = this.prepareData(data);

    const options = {
      leftPad: 2,
      columns
    }

    const table = chalkTable(options, data);
    console.log(table);
  }

  prepareData(data) {
    const [ firstItem ] = data;
    const headers = Object.keys(firstItem);

    const formatHeader = (data, index) => index % 2 === 0
      ? chalk.hex('#78D1E1')(data)
      : chalk.hex('#67E480')(data);


    const columns = headers.map((item, index) => ({
      field: item,
      name: formatHeader(item, index)
    }));

    return columns;
  }
}

export default TableConsoleComponent;