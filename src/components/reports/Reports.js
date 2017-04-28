import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ReportForm from '../report-form/ReportForm.js';

class Reports extends Component {
    componentWillMount() {
        if (this.props.reports.length === 0) {
            this.props.history.push('/');
        }
    }

    render() {
        const reports = this.props.reports;

        return (
            <div className="reports">
                {reports.map((report, index) =>
                    <ReportForm key={index} report={report} />
                )}
            </div>
        );
    }
};

const mapReportsToProps = ({ reports }) => ({
    reports
});

export default withRouter(connect(
    mapReportsToProps
)(Reports));