import Reflux from 'reflux'
import {SimpleDataTableFixtures as fixtures} from 'es6!./fixtures'

const SimpleDataTableActions = Reflux.createActions([
    'loadData',
    'loadDataSuccess',
    'resort',
    'filter',
    'filterSuccess'
]);

SimpleDataTableActions.loadData.listen(function () {
    SimpleDataTableActions.loadDataSuccess({loaded:fixtures});
});
SimpleDataTableActions.filter.listen(function (data) {
    SimpleDataTableActions.filterSuccess({loaded:fixtures, filter: data});
});

export default SimpleDataTableActions;