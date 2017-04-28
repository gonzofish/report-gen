import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ReportForm from '../report-form/ReportForm.js';

class Reports extends Component {
    state = {
        reports: []
    };

    componentWillMount() {
        const reports = this.props.reports;

        if (reports.length === 0) {
            this.props.history.push('/');
        } else if (this.state.reports.length < reports.length) {
            // new report
            this.props.history.push(`/report/${reports[reports.length - 1].id}`);
        }

        this.setState(() => ({
            reports
        }));
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