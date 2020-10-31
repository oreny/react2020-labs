import React from "react";
import {useState} from "react";
import "./sorted-table.css";

const compare = (a, b, asc) => (asc ? 1 : -1) *
    (typeof a === "number" ? a - b
        : typeof a === "string" ? (a.toLowerCase() < b.toLowerCase() ? -1 : a.toLowerCase() > b.toLowerCase() ? 1 : 0)
        : typeof a === "boolean" ? (a && !b ? 1 : a === b ? 0 : -1)
            : 0);

export default function SortedTable({tableData}) {
    const tableContentWithKey = () => tableData.slice(1).map((row, key) => [key].concat(row));
    const [sortColumn, setSortColumn] = useState(0);
    const [tableContent, setTableContent] = useState(tableContentWithKey());
    const [ascending, setAscending] = useState(true);

    function sortTable(tbl, column, asc) {
        return tbl.map((row, i) => ({ cellData: row[column], rowIndex: i }))
            .sort((rowDataKeyPair1, rowDataKeyPair2) => compare(rowDataKeyPair1.cellData, rowDataKeyPair2.cellData, asc))
            .map(rowDataKeyPair => tbl[rowDataKeyPair.rowIndex]);
    }

    function onSortClick(columnIndex) {
        const asc = columnIndex !== sortColumn || !ascending;
        setSortColumn(columnIndex);
        setTableContent(sortTable(tableContent, columnIndex, asc));
        setAscending(asc);
    }

    function buttonTitle(column) {
        return column !== sortColumn || !ascending ? "a..z" : "z..a";
    }

    return (
        <table>
            <tbody>
            <tr key={-1}>
                {tableData[0].map((header, i) => <th key={header}>{header}
                <button className="sort-button"   onClick={onSortClick(i)}>{buttonTitle(i)}</button>
                </th>)}
            </tr>
            {tableContent.map(row => <tr key={row[0]}>{row.slice(1).map(cell => <td>{cell}</td>)}</tr>)}
            </tbody>
        </table>
    );
}