import React from "react";
import {useState} from "react";
import "./sorted-table.css";

export default function SortedTable({tableData}) {

    const tableContentWithKey = () => tableData.slice(1).map((row, i) => [i].concat(row));
    const compare = (a,b) =>
        typeof a === "number" ? a - b
            : typeof a === "string" ? (a.toLowerCase() < b.toLowerCase() ? -1 : a.toLowerCase() > b.toLowerCase() ? 1 : 0)
            : typeof a === "boolean" ? (a && !b ? 1 : a === b ? 0 : -1)
            : 0;

    const [sortColumn, setSortColumn] = useState(0);
    const [tableContent, setTableContent] = useState(tableContentWithKey());
    const [ascending, setAscending] = useState(true);



    function sortTable(tbl, column, asc) {
        return tbl.map((row, i) => [row[column], i])
            .sort((a, b) => compare(a[0], b[0]) * (asc ? 1 : -1))
            .map(a => tbl[a[1]]);
    }

    function onSortClick(columnIndex) {
        const asc = columnIndex !== sortColumn || !ascending;
        setSortColumn(() => columnIndex);
        setTableContent(sortTable(tableContent, columnIndex, asc));
        setAscending(() => asc);
    }

    function buttonTitle(column) {
        return column !== sortColumn || !ascending ? "a..z" : "z..a";
    }

    return (
        <table>
            <tbody>
            <tr key={-1}>
                {tableData[0].map((header, i) => <th key={header}>{header}
                <button className="sort-button"   onClick={() => onSortClick(i)}>{buttonTitle(i)}</button>
                </th>)}
            </tr>
            {tableContent.map(row => <tr key={row[0]}>{row.slice(1).map(cell => <td>{cell}</td>)}</tr>)}
            </tbody>
        </table>
    );
}