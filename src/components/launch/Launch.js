import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { CREATE_REPORT } from '../../redux/types';

const addReport = (dispatch, payload) => dispatch({
    payload,
    type: CREATE_REPORT
});

const Launch = ({ dispatch, history, templates }) => (
    <div>
        {templates.map((template) =>
            <button key={template.id} onClick={() => {
                addReport(dispatch, template.id);
                history.push('/report');
            }}>{template.title}</button>
        )}
    </div>
);

const mapTemplatesToProps = ({ templates }) => {
    return { templates };
};

export default withRouter(connect(
    mapTemplatesToProps
)(Launch));
