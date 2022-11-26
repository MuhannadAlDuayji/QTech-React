import styled from "@emotion/styled";
import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

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
    <Styles>
      <table style={{ margin: "auto" }} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            return (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) =>
                  // here to make col-span in walk around way
                  column.depth !== 2 ? (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ) : (
                    ""
                  )
                )}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, idx) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Styles>
  );
};

export default MuhannadTable;
