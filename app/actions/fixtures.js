import _ from 'lodash'

let dataLength = 5;

export const SimpleDataTableFixtures = {
    columns: [
        {api: 'id', label: 'Model Id'},
        {api: 'name', label: 'Name'},
        {api: 'sname', label: 'Short Name'},
        {api: 'dynamics', label: 'Dynamics'},
        {api: 'description', label: 'Description'},
    ],
    rows: _.range(dataLength).map(() => {
        let i = Math.round(Math.random(10000) * 10000);
        return {
            id: i,
            name: `name-${i}`,
            sname: `sname-${i}`,
            dynamics: `dynamics-${i}`,
            description: `description-${i}`
        }
    })
};

export const DataTableFixtures = {
    rows: _.range(100).map(() => {
        let i = Math.round(Math.random(10000) * 10000);
        return [
            `a${i}`,
            `b${i}`,
            `c${i}`
        ]
    })
};