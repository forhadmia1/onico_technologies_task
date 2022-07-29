import React from 'react';

const TableRow = ({data}) => {
    return (
        <tr>
            <td>{data.date}</td>
            <td>{data.amount}</td>
            <td>{data.payment}</td>
            <td>{data.remark}</td>
        </tr>
    );
};

export default TableRow;