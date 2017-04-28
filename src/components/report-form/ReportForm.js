import React from 'react';

const ReportForm = ({ report, visible }) => {
    const { childCount, columns } = report.facts.reduce((details, fact) => {
        const factColumns = (fact.groups || []).length + 1;

        if (columns < factColumns) {
            details.columns = factColumns;
        }

        fact.groups.forEach((group) => {
            if (!details.childCount[group]) {
                details.childCount[group] = 0;
            }

            details.childCount[group]++;
        });

        return details;
    }, {
        childCount: {},
        columns: 1
    });
    const visibility = visible ? ` visible` : ``;

    return (
        <div className={'report-form' + visibility}>
            <h1>{report.title}</h1>

            <table>
                <tbody>
                {report.facts.map((fact, index) =>  {
                    let adjustment = ['heading', 'instruction'].indexOf(fact.type) !== -1 ? 2 : 1;
                    const rowspan = (childCount[fact.lookupName] || 0) + 1;

                    if (rowspan > 1) {
                        adjustment--;
                    }

                    return (
                        <tr key={index}>
                            <td colSpan={columns - fact.groups.length + adjustment} rowSpan={rowspan}>
                                {fact.label}
                            </td>
                            {adjustment == 1 && rowspan === 1 ? <td className="report-form-input">Input for {fact.name}</td> : null}
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default ReportForm;
