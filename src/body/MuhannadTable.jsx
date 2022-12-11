import styled from "@emotion/styled";
import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { fontSize } from "@mui/system";


const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid #224C71;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th{

      color:white;
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #224C71;
      border-right: 1px solid #224C71;

    }
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #224C71;
      border-right: 1px solid #224C71;
      color: #224C71;

      :last-child {
        border-right: 0;
      }
    }
  }
`;



const MuhannadTable = (props) => {

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
    <Paper sx={{ ml: 1, alignContent: "center" }}>
      <TableContainer >
        <Table  {...getTableProps()}>
          <TableHead sx={{ background: "#3770A2", color: "white", borderColor: "#3770A2", borderStyle: "solid" }}>
            {headerGroups.map((headerGroup) => {
              return (
                <TableRow {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) =>
                    // here to make col-span in walk around way 
                    column.depth !== 2 ? (
                      <TableCell sx={{
                        textAlign: "center", color: "white", borderRight: "1px solid white",
                        fontFamily: "Roboto Helvetica Arial sans-serif",
                        fontWeight: 400,
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
                        textAlign: "center", color: "#3770A2", borderColor: "#3770A2", borderStyle: "solid",
                        fontFamily: "Roboto Helvetica Arial sans-serif",
                        fontWeight: 400,
                        fontSize: "1rem"
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

export default MuhannadTable;
