import Reflux from 'reflux'
import fixtures from 'es6!./fixtures'

const DataTableActions = Reflux.createActions([
    'loadData',
    'loadDataSuccess',
    'resort',
    'resortSuccess'
]);

DataTableActions.loadData.listen(function () {
    DataTableActions.loadDataSuccess({loaded:fixtures});
});
DataTableActions.resort.listen(function (data) {
    DataTableActions.resortSuccess(data);
});

export default DataTableActions;