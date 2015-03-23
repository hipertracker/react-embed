import lodash from 'lodash'

let dataLength = 10;

let data = {
    head: [
        {api: 'id', label: 'Model Id'},
        {api: 'name', label: 'Name'},
        {api: 'sname', label: 'Short Name'},
        {api: 'dynamics', label: 'Dynamics'},
        {api: 'description', label: 'Description'},
    ],
    body: lodash.range(dataLength).map(function () {
        let i = Math.round(Math.random(1000) * 1000);
        return {
            id: i,
            name: `name-${i}`,
            sname: `sname-${i}`,
            dynamics: `dynamics-${i}`,
            description: `description-${i}`
        }
    })
};

export default data;