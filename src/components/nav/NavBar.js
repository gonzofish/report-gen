import React from 'react';
import { connect } from 'react-redux';
import {
    Link
} from 'react-router-dom';

const NavBar = ({ reports }) => (
    <div>
        {reports.map((report) =>
            <span key={report.id}><Link to={`/report/${report.id}`}>{report.title}</Link> |</span>
        )}
        <Link to="/">New</Link>
    </div>
);

const mapReportIdsToProps = ({ reports }) => ({
    reports
});

export default connect(
    mapReportIdsToProps
)(NavBar);
