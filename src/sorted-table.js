import React from "react";
import {useState} from "react";

export default function SortedTable({tableData}) {

    const compare = (a,b) =>
        typeof a === "number" ? a - b
            : typeof a === "string" ? (a.toLowerCase() < b.toLowerCase() ? -1 : a.toLowerCase() > b.toLowerCase() ? 1 : 0)
            : typeof a === "boolean" ? (a && !b ? 1 : a === b ? 0 : -1)
            : 0;

    const [sortColumn, setSortColumn] = useState(0);
    const [tableContent, setTableContent] = useState(sortTable(tableData.slice(1),0, true));
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
        return column !== sortColumn || !ascending ? "a->z" : "z->a";
    }

    return (
        <table>
            <tbody>
            <tr key={0}>{tableData[0].map((header, i) => <th key={header}>{header}<button onClick={() => onSortClick(i)}>{buttonTitle(i)}</button></th>)}</tr>
            {tableContent.map((row, i) => <tr key={row[0]}>{row.map(cell => <td key={`${row[0]}-${cell}`}>{cell}</td>)}</tr>)}
            </tbody>
        </table>
    );
}