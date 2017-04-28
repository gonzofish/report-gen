import * as types from './types';

export const initialState = {
    reports: [],
    templates: [
        {
            id: 'food-order',
            fields: [
                {
                    label: 'Orderer',
                    name: 'orderer',
                    type: 'string'
                },
                {
                    label: 'Phone Number',
                    name: 'phone',
                    type: 'phone'
                },
                {
                    default: 'now',
                    format: 'YYYY-MM-DD HH:mm:ss',
                    label: 'Call Time',
                    name: 'callTime',
                    type: 'date'
                },
                {
                    children: [
                        {
                            label: 'Type',
                            name: 'item-type',
                            options: [
                                'Burrito',
                                'Hamburger',
                                'Pancakes',
                                'Pizza'
                            ],
                            type: 'select'
                        },
                        {
                            label: 'Quantity',
                            name: 'item-quantity',
                            type: 'integer'
                        }
                    ],
                    label: 'Item',
                    name: 'item',
                    repeats: -1,
                    type: 'group'
                }
            ],
            title: 'Food Order'
        }
    ]
};

const getDefaultDate = (defaultValue) => {
    let value = null;

    if (defaultValue === 'current') {
        value = new Date();
    } else if (defaultValue instanceof Date) {
        value = defaultValue;
    }

    return value;
};

const getDefaultValue = (type, defaultValue) => {
    switch (type) {
        case 'date':
        case 'datetime':
            return getDefaultDate(defaultValue);
        default:
            return null;
    }
};

const generateFacts = (fields = [], groups = []) => fields.reduce((facts, field) => {
    const lookupName = field.name + (field.repeats ? '-0' : '');
    const children = generateFacts(field.children, groups.concat(lookupName));
    const fact = {
        format: field.format,
        groups,
        label: field.label,
        lookupName,
        name: field.name,
        options: field.options,
        repeats: field.repeats,
        type: field.type,
        value: getDefaultValue(field.type, field.default)
    };

    facts = facts.concat(fact);
    facts = facts.concat(children);

    return facts;
}, []);

const generateId = (reports) => {
    const ids = reports.map((report) => report.id);
    let id = 0;

    while (ids.indexOf(id) !== -1) {
        id++;
    }

    return id;
};

const addReport = (templateId, { reports, templates }) => {
    const template = templates.find((template) => template.id === templateId);

    return reports.concat({
        facts: generateFacts(template.fields),
        id: generateId(reports),
        title: template.title
    });
};

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.CREATE_REPORT:
            return { ...state, reports: addReport(action.payload, state) }
        default:
            return state;
    }
};

export default rootReducer;
