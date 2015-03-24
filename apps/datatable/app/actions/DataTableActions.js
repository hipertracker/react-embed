import Reflux from 'reflux'
import fixtures from 'es6!./fixtures'

const DataTableActions = Reflux.createActions([
    'loadData',
    'loadDataSuccess',
    'resort',
    'filter',
    'filterSuccess'
]);

DataTableActions.loadData.listen(function () {
    DataTableActions.loadDataSuccess({loaded:fixtures});
});
DataTableActions.filter.listen(function (data) {
    DataTableActions.filterSuccess({loaded:fixtures, filter: data});
});

export default DataTableActions;