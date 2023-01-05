import axios from "axios";
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

const globalData = {
  localDate: "2022-01-01",
  wayForMemorized: true,
  numberOfPageDrs: "0",
  numberOfLineDrs: "1.5",
  numberOfRememorizedDrs: 0,
  numberOfDaysSmallMemorized: 0,
  numberOfPageBiggestMemorized: 0,
  numberOfSorah: 3,
  numberOfAyah: 1,
  numberOfSorahBiggestMemorize: 1,
  numberOfAyahBiggestMemorize: 1,
  numberOfDayPeerWeek: 7,
  numberOfDayForPlan: 20,
  percentage: "0.3",
};

const testData = [
  {
    id: 1,
    gregorianDate: "2022-01-01",
    hijrahDate: "1443-05-28",
    memorizedFromSorah: "الفاتحة",
    memorizedFromAyah: 1,
    memorizedToSorah: "البقرة",
    memorizedToAyah: 4,
    smallMemorizedFromSorah: "",
    smallMemorizedFromAyah: "",
    smallMemorizedToSorah: "",
    biggestMemorizedFromSorah: "",
    biggestMemorizedFromAyah: "",
    biggestMemorizedToSorah: "",
  },
  {
    id: 2,
    gregorianDate: "2022-01-02",
    hijrahDate: "1443-05-29",
    memorizedFromSorah: "البقرة",
    memorizedFromAyah: 5,
    memorizedToSorah: "البقرة",
    memorizedToAyah: 9,
    smallMemorizedFromSorah: "الفاتحة",
    smallMemorizedFromAyah: 1,
    smallMemorizedToSorah: "البقرة",
    smallMemorizedToAyah: 4,
    biggestMemorizedFromSorah: "",
    biggestMemorizedFromAyah: "",
    biggestMemorizedToSorah: "",
  },
  {
    id: 3,
    gregorianDate: "2022-01-03",
    hijrahDate: "1443-05-30",
    memorizedFromSorah: "البقرة",
    memorizedFromAyah: 10,
    memorizedToSorah: "البقرة",
    memorizedToAyah: 14,
    smallMemorizedFromSorah: "الفاتحة",
    smallMemorizedFromAyah: 1,
    smallMemorizedToSorah: "البقرة",
    smallMemorizedToAyah: 9,
    biggestMemorizedFromSorah: "",
    biggestMemorizedFromAyah: "",
    biggestMemorizedToSorah: "",
  },
  {
    id: 4,
    gregorianDate: "2022-01-04",
    hijrahDate: "1443-06-01",
    memorizedFromSorah: "البقرة",
    memorizedFromAyah: 15,
    memorizedToSorah: "البقرة",
    memorizedToAyah: 19,
    smallMemorizedFromSorah: "الفاتحة",
    smallMemorizedFromAyah: 1,
    smallMemorizedToSorah: "البقرة",
    smallMemorizedToAyah: 14,
    biggestMemorizedFromSorah: "",
    biggestMemorizedFromAyah: "",
    biggestMemorizedToSorah: "",
  },
  {
    id: 5,
    gregorianDate: "2022-01-05",
    hijrahDate: "1443-06-02",
    memorizedFromSorah: "",
    memorizedFromAyah: "",
    memorizedToSorah: "",
    smallMemorizedFromSorah: "البقرة",
    smallMemorizedFromAyah: 5,
    smallMemorizedToSorah: "البقرة",
    smallMemorizedToAyah: 19,
    biggestMemorizedFromSorah: "",
    biggestMemorizedFromAyah: "",
    biggestMemorizedToSorah: "",
  },
  {
    id: 6,
    gregorianDate: "2022-01-06",
    hijrahDate: "1443-06-03",
    memorizedFromSorah: "",
    memorizedFromAyah: "",
    memorizedToSorah: "",
    smallMemorizedFromSorah: "البقرة",
    smallMemorizedFromAyah: 5,
    smallMemorizedToSorah: "البقرة",
    smallMemorizedToAyah: 19,
    biggestMemorizedFromSorah: "",
    biggestMemorizedFromAyah: "",
    biggestMemorizedToSorah: "",
  },
  {
    id: 7,
    gregorianDate: "2022-01-07",
    hijrahDate: "1443-06-04",
    memorizedFromSorah: "",
    memorizedFromAyah: "",
    memorizedToSorah: "",
    smallMemorizedFromSorah: "البقرة",
    smallMemorizedFromAyah: 5,
    smallMemorizedToSorah: "البقرة",
    smallMemorizedToAyah: 19,
    biggestMemorizedFromSorah: "",
    biggestMemorizedFromAyah: "",
    biggestMemorizedToSorah: "",
  },
  {
    id: 8,
    gregorianDate: "2022-01-08",
    hijrahDate: "1443-06-05",
    memorizedFromSorah: "البقرة",
    memorizedFromAyah: 20,
    memorizedToSorah: "البقرة",
    memorizedToAyah: 25,
    smallMemorizedFromSorah: "البقرة",
    smallMemorizedFromAyah: 5,
    smallMemorizedToSorah: "البقرة",
    smallMemorizedToAyah: 19,
    biggestMemorizedFromSorah: "",
    biggestMemorizedFromAyah: "",
    biggestMemorizedToSorah: "",
  },
  {
    id: 9,
    gregorianDate: "2022-01-09",
    hijrahDate: "1443-06-06",
    memorizedFromSorah: "البقرة",
    memorizedFromAyah: 26,
    memorizedToSorah: "البقرة",
    memorizedToAyah: 28,
    smallMemorizedFromSorah: "البقرة",
    smallMemorizedFromAyah: 10,
    smallMemorizedToSorah: "البقرة",
    smallMemorizedToAyah: 25,
    biggestMemorizedFromSorah: "الفاتحة",
    biggestMemorizedFromAyah: 1,
    biggestMemorizedToSorah: "البقرة",
    biggestMemorizedToAyah: 22,
  },
  {
    id: 10,
    gregorianDate: "2022-01-10",
    hijrahDate: "1443-06-07",
    memorizedFromSorah: "البقرة",
    memorizedFromAyah: 29,
    memorizedToSorah: "البقرة",
    memorizedToAyah: 31,
    smallMemorizedFromSorah: "البقرة",
    smallMemorizedFromAyah: 15,
    smallMemorizedToSorah: "البقرة",
    smallMemorizedToAyah: 28,
    biggestMemorizedFromSorah: "الفاتحة",
    biggestMemorizedFromAyah: 1,
    biggestMemorizedToSorah: "البقرة",
    biggestMemorizedToAyah: 22,
  },
  {
    id: 11,
    gregorianDate: "2022-01-11",
    hijrahDate: "1443-06-08",
    memorizedFromSorah: "البقرة",
    memorizedFromAyah: 32,
    memorizedToSorah: "البقرة",
    memorizedToAyah: 34,
    smallMemorizedFromSorah: "البقرة",
    smallMemorizedFromAyah: 20,
    smallMemorizedToSorah: "البقرة",
    smallMemorizedToAyah: 31,
    biggestMemorizedFromSorah: "الفاتحة",
    biggestMemorizedFromAyah: 1,
    biggestMemorizedToSorah: "البقرة",
    biggestMemorizedToAyah: 22,
  },
  {
    id: 12,
    gregorianDate: "2022-01-12",
    hijrahDate: "1443-06-09",
    memorizedFromSorah: "",
    memorizedFromAyah: "",
    memorizedToSorah: "",
    smallMemorizedFromSorah: "البقرة",
    smallMemorizedFromAyah: 26,
    smallMemorizedToSorah: "البقرة",
    smallMemorizedToAyah: 34,
    biggestMemorizedFromSorah: "الفاتحة",
    biggestMemorizedFromAyah: 1,
    biggestMemorizedToSorah: "البقرة",
    biggestMemorizedToAyah: 22,
  },
  {
    id: 13,
    gregorianDate: "2022-01-13",
    hijrahDate: "1443-06-10",
    memorizedFromSorah: "",
    memorizedFromAyah: "",
    memorizedToSorah: "",
    smallMemorizedFromSorah: "البقرة",
    smallMemorizedFromAyah: 26,
    smallMemorizedToSorah: "البقرة",
    smallMemorizedToAyah: 34,
    biggestMemorizedFromSorah: "الفاتحة",
    biggestMemorizedFromAyah: 1,
    biggestMemorizedToSorah: "البقرة",
    biggestMemorizedToAyah: 22,
  },
  {
    id: 14,
    gregorianDate: "2022-01-14",
    hijrahDate: "1443-06-11",
    memorizedFromSorah: "",
    memorizedFromAyah: "",
    memorizedToSorah: "",
    smallMemorizedFromSorah: "البقرة",
    smallMemorizedFromAyah: 26,
    smallMemorizedToSorah: "البقرة",
    smallMemorizedToAyah: 34,
    biggestMemorizedFromSorah: "الفاتحة",
    biggestMemorizedFromAyah: 1,
    biggestMemorizedToSorah: "البقرة",
    biggestMemorizedToAyah: 22,
  },
  {
    id: 15,
    gregorianDate: "2022-01-15",
    hijrahDate: "1443-06-12",
    memorizedFromSorah: "البقرة",
    memorizedFromAyah: 35,
    memorizedToSorah: "البقرة",
    memorizedToAyah: 42,
    smallMemorizedFromSorah: "البقرة",
    smallMemorizedFromAyah: 26,
    smallMemorizedToSorah: "البقرة",
    smallMemorizedToAyah: 34,
    biggestMemorizedFromSorah: "الفاتحة",
    biggestMemorizedFromAyah: 1,
    biggestMemorizedToSorah: "البقرة",
    biggestMemorizedToAyah: 22,
  },
  {
    id: 16,
    gregorianDate: "2022-01-16",
    hijrahDate: "1443-06-13",
    memorizedFromSorah: "البقرة",
    memorizedFromAyah: 43,
    memorizedToSorah: "البقرة",
    memorizedToAyah: 46,
    smallMemorizedFromSorah: "البقرة",
    smallMemorizedFromAyah: 29,
    smallMemorizedToSorah: "البقرة",
    smallMemorizedToAyah: 42,
    biggestMemorizedFromSorah: "البقرة",
    biggestMemorizedFromAyah: 23,
    biggestMemorizedToSorah: "البقرة",
    biggestMemorizedToAyah: 36,
  },
  {
    id: 17,
    gregorianDate: "2022-01-17",
    hijrahDate: "1443-06-14",
    memorizedFromSorah: "البقرة",
    memorizedFromAyah: 47,
    memorizedToSorah: "البقرة",
    memorizedToAyah: 50,
    smallMemorizedFromSorah: "البقرة",
    smallMemorizedFromAyah: 32,
    smallMemorizedToSorah: "البقرة",
    smallMemorizedToAyah: 46,
    biggestMemorizedFromSorah: "الفاتحة",
    biggestMemorizedFromAyah: 1,
    biggestMemorizedToSorah: "البقرة",
    biggestMemorizedToAyah: 22,
  },
  {
    id: 18,
    gregorianDate: "2022-01-18",
    hijrahDate: "1443-06-15",
    memorizedFromSorah: "البقرة",
    memorizedFromAyah: 51,
    memorizedToSorah: "البقرة",
    memorizedToAyah: 54,
    smallMemorizedFromSorah: "البقرة",
    smallMemorizedFromAyah: 35,
    smallMemorizedToSorah: "البقرة",
    smallMemorizedToAyah: 50,
    biggestMemorizedFromSorah: "البقرة",
    biggestMemorizedFromAyah: 23,
    biggestMemorizedToSorah: "البقرة",
    biggestMemorizedToAyah: 36,
  },
  {
    id: 19,
    gregorianDate: "2022-01-19",
    hijrahDate: "1443-06-16",
    memorizedFromSorah: "",
    memorizedFromAyah: "",
    memorizedToSorah: "",
    smallMemorizedFromSorah: "البقرة",
    smallMemorizedFromAyah: 43,
    smallMemorizedToSorah: "البقرة",
    smallMemorizedToAyah: 54,
    biggestMemorizedFromSorah: "الفاتحة",
    biggestMemorizedFromAyah: 1,
    biggestMemorizedToSorah: "البقرة",
    biggestMemorizedToAyah: 22,
  },
  {
    id: 20,
    gregorianDate: "2022-01-20",
    hijrahDate: "1443-06-17",
    memorizedFromSorah: "",
    memorizedFromAyah: "",
    memorizedToSorah: "",
    smallMemorizedFromSorah: "البقرة",
    smallMemorizedFromAyah: 43,
    smallMemorizedToSorah: "البقرة",
    smallMemorizedToAyah: 54,
    biggestMemorizedFromSorah: "البقرة",
    biggestMemorizedFromAyah: 23,
    biggestMemorizedToSorah: "البقرة",
    biggestMemorizedToAyah: 36,
  },
];

const getTechPlan = "https://api.almaher.org/getTechPlan";

const Test = (props) => {
  const [responseData, setResponseData] = useState([]);
  const [lovlyData, setLovlyData] = useState([]);

  let counter = 1;

  const useEffectVar = useEffect(() => {
    const fetchUsers = async () => {
      let d = await axios.post(getTechPlan, globalData);

      setResponseData(d.data);
      console.log("DATA :: ", d.data);
    };

    fetchUsers();
  }, []);

  const [dataChange, setDataChange] = useState([]);

  const data = useMemo(() => [...lovlyData], [lovlyData]);
  // console.log("Data test ", testData);
  console.log("Data lovlt ", lovlyData);
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

  useEffect(() => {
    setDataChange(responseData);
    var plans = [];

    if (responseData["gregorianDateList"] !== undefined)
      // Iterate over the property names:
      for (var i = 0; i < responseData["gregorianDateList"].length; i++) {
        var dayPlan = {};
        dayPlan["id"] = i + 1;
        for (const t of Object.keys(responseData)) {
          if (
            t === "memorized" ||
            t === "smallMemorized" ||
            t === "biggestMemorized"
          ) {
            if (responseData[t] == null) continue;
            if (responseData[t][i] != undefined && responseData[t][i] != null) {
              // console.log(
              //   "responseData [",
              //   t,
              //   "] [",
              //   i,
              //   "] - من ",
              //   sorahName(responseData[t][i]["from"].sorah),
              //   " : " + responseData[t][i]["from"].ayah
              // );

              dayPlan[t + "FromSorah"] = sorahName(
                responseData[t][i]["from"].sorah
              );
              dayPlan[t + "FromAyah"] = responseData[t][i]["from"].ayah;

              // console.log(
              //   "responseData [",
              //   t,
              //   "] [",
              //   i,
              //   "] - الى ",
              //   sorahName(responseData[t][i]["to"].sorah),
              //   " : " + responseData[t][i]["to"].ayah
              // );
              dayPlan[t + "ToSorah"] = sorahName(
                responseData[t][i]["to"].sorah
              );
              dayPlan[t + "ToAyah"] = responseData[t][i]["to"].ayah;
            } else {
              dayPlan[t + "FromSorah"] = "";
              dayPlan[t + "FromAyah"] = "";
              dayPlan[t + "ToSorah"] = "";
              dayPlan[t + "ToAyah"] = "";
            }
          } else {
            // console.log(
            //   "responseData [",
            //   t,
            //   "] [",
            //   i,
            //   "] - ",
            //   responseData[t][i]
            // );

            dayPlan[t.substring(0, t.length - 4)] = responseData[t][i];
          }
        }

        dayPlan["day"] = daysNameInArabic(
          new Date(dayPlan["gregorianDate"]).getDay()
        );

        plans.push(dayPlan);
      }
    setLovlyData(plans);
  }, [responseData]);

  const tableInctance = useTable({
    columns,
    data,
    initialState: {
      hiddenColumns: [
        ...(responseData["smallMemorized"] == null
          ? [
              "smallMemorizedToAyah",
              "smallMemorizedToSorah",
              "smallMemorizedFromAyah",
              "smallMemorizedFromSorah",
            ]
          : []),
        ...(responseData["biggestMemorized"] == null
          ? [
              "smallMemorizedToAyah",
              "smallMemorizedToSorah",
              "smallMemorizedFromAyah",
              "smallMemorizedFromSorah",
            ]
          : []),
        ...(responseData["memorized"] == null
          ? [
              "memorizedToAyah",
              "memorizedToSorah",
              "memorizedFromAyah",
              "memorizedFromSorah",
            ]
          : []),
      ],
    },
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInctance;
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

function sorahName(number) {
  const sorahName = [
    "الفاتحة",
    "البقرة",
    "آل عمران",
    "النساء",
    "المائدة",
    "الأنعام",
    "الأعراف",
    "الأنفال",
    "التوبة",
    "يونس",
    "هود",
    "يوسف",
    "الرعد",
    "إبراهيم",
    "الحجر",
    "النحل",
    "الإسراء",
    "الكهف",
    "مريم",
    "طه",
    "الأنبياء",
    "الحج",
    "المؤمنون",
    "النور",
    "الفرقان",
    "الشعراء",
    "النمل",
    "القصص",
    "العنكبوت",
    "الروم",
    "لقمان",
    "السجدة",
    "الأحزاب",
    "سبأ",
    "فاطر",
    "يس",
    "الصافات",
    "ص",
    "الزمر",
    "غافر",
    "فصلت",
    "الشورى",
    "الزخرف",
    "الدخان",
    "الجاثية",
    "الأحقاف",
    "محمد",
    "الفتح",
    "الحجرات",
    "ق",
    "الذاريات",
    "الطور",
    "النجم",
    "القمر",
    "الرحمن",
    "الواقعة",
    "الحديد",
    "المجادلة",
    "الحشر",
    "الممتحنة",
    "الصف",
    "الجمعة",
    "المنافقون",
    "التغابن",
    "الطلاق",
    "التحريم",
    "الملك",
    "القلم",
    "الحاقة",
    "المعارج",
    "نوح",
    "الجن",
    "المزمل",
    "المدثر",
    "القيامة",
    "الإنسان",
    "المرسلات",
    "النبأ",
    "النازعات",
    "عبس",
    "التكوير",
    "الانفطار",
    "المطففين",
    "الانشقاق",
    "البروج",
    "الطارق",
    "الأعلى",
    "الغاشية",
    "الفجر",
    "البلد",
    "الشمس",
    "الليل",
    "الضحى",
    "الشرح",
    "التين",
    "العلق",
    "القدر",
    "البينة",
    "الزلزلة",
    "العاديات",
    "القارعة",
    "التكاثر",
    "العصر",
    "الهمزة",
    "الفيل",
    "قريش",
    "الماعون",
    "الكوثر",
    "الكافرون",
    "النصر",
    "المسد",
    "الإخلاص",
    "الفلق",
    "الناس",
  ];

  return sorahName[number - 1];
}

function walkAround(text) {
  var textArabic = "من الى ميلادي هجري ";
}

function daysNameInEnglish(number) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[number];
}
function daysNameInArabic(number) {
  var days = [
    "الاحد",
    "الاثنين",
    "الثلاثاء",
    "الاربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ];

  return days[number];
}

function arabicColumns(englishColumn) {
  const columns = {
    id: "id",
    gregorianDate: "ميلادي",
    hijrahDate: "هجري",
    memorizedFromSorah: "الحفظ من السورة",
    memorizedFromAyah: " من الاية",
    memorizedToSorah: "الى السورة",
    memorizedToAyah: "الى الاية",
    smallMemorizedFromSorah: "المراجعةالصغرى من السورة",
    smallMemorizedFromAyah: "من الاية",
    smallMemorizedToSorah: "الى السورة",
    smallMemorizedToAyah: "الى الاية",
    biggestMemorizedFromSorah: "المراجعة الكبرى من السورة",
    biggestMemorizedFromAyah: "من الاية",
    biggestMemorizedToSorah: "الى السورة",
    biggestMemorizedToAyah: "الى الاية",
  };

  return columns[englishColumn];
}

export default Test;
