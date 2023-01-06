import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const DataTable = (props) => {

  const columns = useMemo(
    () => [
      {
        Header: "المراجعة الكبرى",

        columns: [
          {
            Header: "الى",
            columns: [
              { accessor: "biggestMemorizedToAyah" },
              { accessor: "biggestMemorizedToSorah" },
            ],
          },
          {
            Header: "من",
            columns: [
              { accessor: "biggestMemorizedFromAyah" },
              { accessor: "biggestMemorizedFromSorah" },
            ],
          },
        ],
      },
      {
        Header: "المراجعة الصغرى",

        columns: [
          {
            Header: "الى",
            columns: [
              { accessor: "smallMemorizedToAyah" },
              { accessor: "smallMemorizedToSorah" },
            ],
          },
          {
            Header: "من",
            columns: [
              { accessor: "smallMemorizedFromAyah" },
              { accessor: "smallMemorizedFromSorah" },
            ],
          },
        ],
      },
      {
        Header: "الحفظ",

        columns: [
          {
            Header: "الى",
            columns: [
              { accessor: "memorizedToAyah" },
              { accessor: "memorizedToSorah" },
            ],
          },
          {
            Header: "من",
            columns: [
              { accessor: "memorizedFromAyah" },
              { accessor: "memorizedFromSorah" },
            ],
          },
        ],
      },
      {
        Header: "التاريخ",
        enableRowSpan: true,
        columns: [
          {
            Header: "الميلادي",
            columns: [{ accessor: "gregorianDate" }],
          },
          {
            Header: "الهجري",
            columns: [{ accessor: "hijrahDate" }],
          },
          {
            Header: "اليوم",
            columns: [{ accessor: "day" }],
          },
        ],
      },
    ],
    []
  );
  const data = useMemo(() => [...props.data]);

  console.log("data ", ...props.data);

  const tableInctance = useTable({
    columns,
    data,
    autoResetHiddenColumns: true,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setHiddenColumns,
  } = tableInctance;

  useEffect(() => {
    setHiddenColumns([
      ...(props.smallMemorized == null
        ? [
          "smallMemorizedToAyah",
          "smallMemorizedToSorah",
          "smallMemorizedFromAyah",
          "smallMemorizedFromSorah",
        ]
        : []),
      ...(props.biggestMemorized == null
        ? [
          "biggestMemorizedToAyah",
          "biggestMemorizedToSorah",
          "biggestMemorizedFromAyah",
          "biggestMemorizedFromSorah",
        ]
        : []),
      ...(props.memorized == null
        ? [
          "memorizedToAyah",
          "memorizedToSorah",
          "memorizedFromAyah",
          "memorizedFromSorah",
        ]
        : []),
    ]);
  }, [props.memorized, props.smallMemorized, props.biggestMemorized]);

  return (
    <Paper sx={{ ml: 0, alignContent: "center" }}>
      <TableContainer >
        <Table  {...getTableProps()}>
          <TableHead sx={{ background: "#3770A2", color: "white", borderColor: "#3770A2", borderStyle: "solid" }}>
            {headerGroups.map((headerGroup) => {
              return (
                <TableRow  {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) =>
                    // here to make col-span in walk around way 
                    column.depth !== 2 ? (
                      <TableCell
                        // fix issue the issue :)
                        rowSpan={(column.depth === 1) ? "2" : ""}
                        sx={{
                          paddingY: 1,
                          fontFamily: "Loew Next Arabic Medium",
                          textAlign: "center",
                          color: "white",
                          borderRight: "1px solid white",
                          fontWeight: "bold",
                          fontSize: "1rem"
                        }} {...column.getHeaderProps()}>
                        {column.render("Header")}
                      </TableCell>
                    ) : (
                      ""
                    )
                  )}
                </TableRow>
              );
            })}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {rows.map((row, idx) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <TableCell sx={{
                        paddingY: 1,
                        textAlign: "center", color: "#3770A2", borderColor: "#3770A2", borderStyle: "solid",
                        fontWeight: "bold",
                        fontSize: "0.98rem"
                      }} {...cell.getCellProps()}>{cell.render("Cell")}</TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DataTable;
