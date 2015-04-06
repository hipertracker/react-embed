import Reflux from 'reflux'
import {DataTableFixtures as fixtures} from 'es6!./fixtures'

const DataTableActions = Reflux.createActions([
    'loadData',
    'loadDataSuccess'
]);

DataTableActions.loadData.listen(function () {
    DataTableActions.loadDataSuccess({loaded:fixtures});
});

export default DataTableActions;