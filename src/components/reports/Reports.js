import React from 'react';
import { connect } from 'react-redux';

import ReportForm from '../report-form/ReportForm.js';

const Reports = ({ reports }) => {
    return (
        <div className="reports">
            {reports.map((report, index) =>
                <ReportForm key={index} report={report} />
            )}
        </div>
    );
};

const mapReportsToProps = ({ reports }) => ({
    reports
});

export default connect(
    mapReportsToProps
)(Reports);