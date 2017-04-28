import * as types from './types';

export const initialState = {
    reports: [],
    templates: {
        spot: {
            id: 'spot',
            title: 'Spot Report'
        }
    }
};

const generateId = (reports) => {
    const ids = reports.map((report) => report.id);
    let id = 0;

    while (ids.indexOf(id) !== -1) {
        id++;
    }

    return id;
};

const addReport = (templateId, { reports, templates }) => {
    const template = templates[templateId];

    return reports.concat({
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
