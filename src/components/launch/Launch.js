import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { CREATE_REPORT } from '../../redux/types';

const addReport = (dispatch, payload) => dispatch({
    payload,
    type: CREATE_REPORT
});

const Launch = ({ dispatch, history }) => (
    <div>
        <button onClick={() => {
            addReport(dispatch, 'spot');
            history.push('/report');
        }}>Spot</button>
    </div>
);

export default withRouter(connect()(Launch));
