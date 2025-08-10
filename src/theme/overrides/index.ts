import buttonComponents from './mui-button';
import cardComponents from './mui-card';
import inputComponents from './mui-input';
import menuComponents from './mui-menu';
import paperComponents from './mui-paper';
import tableComponents from './mui-table';

const overides = () => {
  return Object.assign(
    {},
    buttonComponents,
    cardComponents,
    inputComponents,
    paperComponents,
    tableComponents,
    menuComponents
  );
};

export default overides;
