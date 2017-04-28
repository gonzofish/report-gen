import React from 'react';

const ReportForm = ({ report }) => {
    return (
        <div>
            <h1>{report.title}</h1>
        </div>
    );
};
/*class ReportForm extends Component {
    render() {
        const params = this.props.match.params;

        return (
            <div>
                <p>Report Form for {params.templateId}!</p>
            </div>
        );
    }
}*/

export default ReportForm;
