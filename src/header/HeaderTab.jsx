import React, { useEffect } from "react";

import axios from "axios";
import TextField from "@mui/material/TextField";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import rtlPlugin from 'stylis-plugin-rtl';


// import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";


// import Typography from '@mui/material/Typography';


import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { config } from '../Constants'
// import FormHelperText from '@mui/material/FormHelperText';

// import Input from '@mui/material/Input';



// import "moment/locale/ar-sa";

// import dayjs from "dayjs";

//import "./../index.css";

// import AdapterHijri from "@date-io/hijri";
// import AdapterJalaali from "@date-io/jalaali";

// import Stack from "@mui/material/Stack";

import DataTable from "../body/DataTable";
// import { withTheme } from "styled-components";
// import { withEmotionCache } from "@emotion/react";
import { FormLabel } from "@mui/material";

const styles = (theme) => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },

  backgroundWhite: {
    background: "white",
  },
});

const labelSize = {
  width: 170, height: 40
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const data = {
  localDate: "2022-02-10",
  wayForMemorized: true,
  numberOfPageDrs: "0",
  numberOfLineDrs: "9",
  numberOfRememorizedDrs: 3,
  numberOfDaysSmallMemorized: 0,
  numberOfPageBiggestMemorized: 2,
  numberOfAyah: 1,
  numberOfSorah: 3,
  numberOfSorahBiggestMemorize: 1,
  numberOfAyahBiggestMemorize: 1,
  numberOfDayPeerWeek: 7,
  numberOfDayForPlan: 20,
  percentage: "0.3",
  firstName: "Muhannad-vs",
  lastName: "Alduayji-vs",
  printType: "pdf"
};


const getTechPlan = `${config.url.API_URL}/getTechPlan`;

const HeaderTab = (classes) => {
  const [textInput, setTextInput] = React.useState("");

  const [dataRequest, setDataRequest] = React.useState(data);
  const [dataResponse, setDataResponse] = React.useState({
    "gregorianDateList": [
      "2022-02-10",
      "2022-02-11",
      "2022-02-12",
      "2022-02-13",
      "2022-02-14",
      "2022-02-15",
      "2022-02-16",
      "2022-02-17",
      "2022-02-18",
      "2022-02-19",
      "2022-02-20",
      "2022-02-21",
      "2022-02-22",
      "2022-02-23",
      "2022-02-24",
      "2022-02-25",
      "2022-02-26",
      "2022-02-27",
      "2022-02-28",
      "2022-03-01"
    ],
    "hijrahDateList": [
      "1443-07-09",
      "1443-07-10",
      "1443-07-11",
      "1443-07-12",
      "1443-07-13",
      "1443-07-14",
      "1443-07-15",
      "1443-07-16",
      "1443-07-17",
      "1443-07-18",
      "1443-07-19",
      "1443-07-20",
      "1443-07-21",
      "1443-07-22",
      "1443-07-23",
      "1443-07-24",
      "1443-07-25",
      "1443-07-26",
      "1443-07-27",
      "1443-07-28"
    ],
    "memorized": [
      {
        "from": {
          "sorah": 3,
          "ayah": 1
        },
        "to": {
          "sorah": 3,
          "ayah": 7
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 8
        },
        "to": {
          "sorah": 3,
          "ayah": 13
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 14
        },
        "to": {
          "sorah": 3,
          "ayah": 17
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 18
        },
        "to": {
          "sorah": 3,
          "ayah": 21
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 22
        },
        "to": {
          "sorah": 3,
          "ayah": 27
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 28
        },
        "to": {
          "sorah": 3,
          "ayah": 34
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 35
        },
        "to": {
          "sorah": 3,
          "ayah": 39
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 40
        },
        "to": {
          "sorah": 3,
          "ayah": 45
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 46
        },
        "to": {
          "sorah": 3,
          "ayah": 50
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 51
        },
        "to": {
          "sorah": 3,
          "ayah": 56
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 57
        },
        "to": {
          "sorah": 3,
          "ayah": 62
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 63
        },
        "to": {
          "sorah": 3,
          "ayah": 68
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 69
        },
        "to": {
          "sorah": 3,
          "ayah": 73
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 74
        },
        "to": {
          "sorah": 3,
          "ayah": 78
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 79
        },
        "to": {
          "sorah": 3,
          "ayah": 82
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 83
        },
        "to": {
          "sorah": 3,
          "ayah": 88
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 89
        },
        "to": {
          "sorah": 3,
          "ayah": 94
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 95
        },
        "to": {
          "sorah": 3,
          "ayah": 101
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 102
        },
        "to": {
          "sorah": 3,
          "ayah": 106
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 107
        },
        "to": {
          "sorah": 3,
          "ayah": 111
        }
      }
    ],
    "smallMemorized": [
      null,
      {
        "from": {
          "sorah": 3,
          "ayah": 1
        },
        "to": {
          "sorah": 3,
          "ayah": 7
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 1
        },
        "to": {
          "sorah": 3,
          "ayah": 13
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 1
        },
        "to": {
          "sorah": 3,
          "ayah": 17
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 8
        },
        "to": {
          "sorah": 3,
          "ayah": 21
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 14
        },
        "to": {
          "sorah": 3,
          "ayah": 27
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 18
        },
        "to": {
          "sorah": 3,
          "ayah": 34
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 22
        },
        "to": {
          "sorah": 3,
          "ayah": 39
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 28
        },
        "to": {
          "sorah": 3,
          "ayah": 45
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 35
        },
        "to": {
          "sorah": 3,
          "ayah": 50
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 40
        },
        "to": {
          "sorah": 3,
          "ayah": 56
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 46
        },
        "to": {
          "sorah": 3,
          "ayah": 62
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 51
        },
        "to": {
          "sorah": 3,
          "ayah": 68
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 57
        },
        "to": {
          "sorah": 3,
          "ayah": 73
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 63
        },
        "to": {
          "sorah": 3,
          "ayah": 78
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 69
        },
        "to": {
          "sorah": 3,
          "ayah": 82
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 74
        },
        "to": {
          "sorah": 3,
          "ayah": 88
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 79
        },
        "to": {
          "sorah": 3,
          "ayah": 94
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 83
        },
        "to": {
          "sorah": 3,
          "ayah": 101
        }
      },
      {
        "from": {
          "sorah": 3,
          "ayah": 89
        },
        "to": {
          "sorah": 3,
          "ayah": 106
        }
      }
    ],
    "biggestMemorized": [
      {
        "from": {
          "sorah": 1,
          "ayah": 1
        },
        "to": {
          "sorah": 2,
          "ayah": 22
        }
      },
      {
        "from": {
          "sorah": 2,
          "ayah": 23
        },
        "to": {
          "sorah": 2,
          "ayah": 36
        }
      },
      {
        "from": {
          "sorah": 2,
          "ayah": 37
        },
        "to": {
          "sorah": 2,
          "ayah": 57
        }
      },
      {
        "from": {
          "sorah": 2,
          "ayah": 58
        },
        "to": {
          "sorah": 2,
          "ayah": 71
        }
      },
      {
        "from": {
          "sorah": 2,
          "ayah": 72
        },
        "to": {
          "sorah": 2,
          "ayah": 85
        }
      },
      {
        "from": {
          "sorah": 2,
          "ayah": 86
        },
        "to": {
          "sorah": 2,
          "ayah": 99
        }
      },
      {
        "from": {
          "sorah": 2,
          "ayah": 100
        },
        "to": {
          "sorah": 2,
          "ayah": 111
        }
      },
      {
        "from": {
          "sorah": 2,
          "ayah": 112
        },
        "to": {
          "sorah": 2,
          "ayah": 126
        }
      },
      {
        "from": {
          "sorah": 2,
          "ayah": 127
        },
        "to": {
          "sorah": 2,
          "ayah": 142
        }
      },
      {
        "from": {
          "sorah": 2,
          "ayah": 143
        },
        "to": {
          "sorah": 2,
          "ayah": 158
        }
      },
      {
        "from": {
          "sorah": 2,
          "ayah": 159
        },
        "to": {
          "sorah": 2,
          "ayah": 174
        }
      },
      {
        "from": {
          "sorah": 2,
          "ayah": 175
        },
        "to": {
          "sorah": 2,
          "ayah": 186
        }
      },
      {
        "from": {
          "sorah": 2,
          "ayah": 187
        },
        "to": {
          "sorah": 2,
          "ayah": 199
        }
      },
      {
        "from": {
          "sorah": 2,
          "ayah": 200
        },
        "to": {
          "sorah": 2,
          "ayah": 214
        }
      },
      {
        "from": {
          "sorah": 2,
          "ayah": 215
        },
        "to": {
          "sorah": 2,
          "ayah": 224
        }
      },
      {
        "from": {
          "sorah": 2,
          "ayah": 225
        },
        "to": {
          "sorah": 2,
          "ayah": 234
        }
      },
      {
        "from": {
          "sorah": 2,
          "ayah": 235
        },
        "to": {
          "sorah": 2,
          "ayah": 247
        }
      },
      {
        "from": {
          "sorah": 2,
          "ayah": 248
        },
        "to": {
          "sorah": 2,
          "ayah": 256
        }
      },
      {
        "from": {
          "sorah": 2,
          "ayah": 257
        },
        "to": {
          "sorah": 2,
          "ayah": 265
        }
      },
      {
        "from": {
          "sorah": 2,
          "ayah": 266
        },
        "to": {
          "sorah": 2,
          "ayah": 277
        }
      }
    ]
  });
  const [dataProcessed, setDataProcessed] = React.useState([
    {
      "id": 1,
      "gregorianDate": "2022-02-10",
      "hijrahDate": "1443-07-09",
      "memorizedFromSorah": "آل عمران",
      "memorizedFromAyah": 1,
      "memorizedToSorah": "آل عمران",
      "memorizedToAyah": 7,
      "smallMemorizedFromSorah": "",
      "smallMemorizedFromAyah": "",
      "smallMemorizedToSorah": "",
      "smallMemorizedToAyah": "",
      "biggestMemorizedFromSorah": "الفاتحة",
      "biggestMemorizedFromAyah": 1,
      "biggestMemorizedToSorah": "البقرة",
      "biggestMemorizedToAyah": 22,
      "day": "الخميس"
    },
    {
      "id": 2,
      "gregorianDate": "2022-02-11",
      "hijrahDate": "1443-07-10",
      "memorizedFromSorah": "آل عمران",
      "memorizedFromAyah": 8,
      "memorizedToSorah": "آل عمران",
      "memorizedToAyah": 13,
      "smallMemorizedFromSorah": "آل عمران",
      "smallMemorizedFromAyah": 1,
      "smallMemorizedToSorah": "آل عمران",
      "smallMemorizedToAyah": 7,
      "biggestMemorizedFromSorah": "البقرة",
      "biggestMemorizedFromAyah": 23,
      "biggestMemorizedToSorah": "البقرة",
      "biggestMemorizedToAyah": 36,
      "day": "الجمعة"
    },
    {
      "id": 3,
      "gregorianDate": "2022-02-12",
      "hijrahDate": "1443-07-11",
      "memorizedFromSorah": "آل عمران",
      "memorizedFromAyah": 14,
      "memorizedToSorah": "آل عمران",
      "memorizedToAyah": 17,
      "smallMemorizedFromSorah": "آل عمران",
      "smallMemorizedFromAyah": 1,
      "smallMemorizedToSorah": "آل عمران",
      "smallMemorizedToAyah": 13,
      "biggestMemorizedFromSorah": "البقرة",
      "biggestMemorizedFromAyah": 37,
      "biggestMemorizedToSorah": "البقرة",
      "biggestMemorizedToAyah": 57,
      "day": "السبت"
    },
    {
      "id": 4,
      "gregorianDate": "2022-02-13",
      "hijrahDate": "1443-07-12",
      "memorizedFromSorah": "آل عمران",
      "memorizedFromAyah": 18,
      "memorizedToSorah": "آل عمران",
      "memorizedToAyah": 21,
      "smallMemorizedFromSorah": "آل عمران",
      "smallMemorizedFromAyah": 1,
      "smallMemorizedToSorah": "آل عمران",
      "smallMemorizedToAyah": 17,
      "biggestMemorizedFromSorah": "البقرة",
      "biggestMemorizedFromAyah": 58,
      "biggestMemorizedToSorah": "البقرة",
      "biggestMemorizedToAyah": 71,
      "day": "الاحد"
    },
    {
      "id": 5,
      "gregorianDate": "2022-02-14",
      "hijrahDate": "1443-07-13",
      "memorizedFromSorah": "آل عمران",
      "memorizedFromAyah": 22,
      "memorizedToSorah": "آل عمران",
      "memorizedToAyah": 27,
      "smallMemorizedFromSorah": "آل عمران",
      "smallMemorizedFromAyah": 8,
      "smallMemorizedToSorah": "آل عمران",
      "smallMemorizedToAyah": 21,
      "biggestMemorizedFromSorah": "البقرة",
      "biggestMemorizedFromAyah": 72,
      "biggestMemorizedToSorah": "البقرة",
      "biggestMemorizedToAyah": 85,
      "day": "الاثنين"
    },
    {
      "id": 6,
      "gregorianDate": "2022-02-15",
      "hijrahDate": "1443-07-14",
      "memorizedFromSorah": "آل عمران",
      "memorizedFromAyah": 28,
      "memorizedToSorah": "آل عمران",
      "memorizedToAyah": 34,
      "smallMemorizedFromSorah": "آل عمران",
      "smallMemorizedFromAyah": 14,
      "smallMemorizedToSorah": "آل عمران",
      "smallMemorizedToAyah": 27,
      "biggestMemorizedFromSorah": "البقرة",
      "biggestMemorizedFromAyah": 86,
      "biggestMemorizedToSorah": "البقرة",
      "biggestMemorizedToAyah": 99,
      "day": "الثلاثاء"
    },
    {
      "id": 7,
      "gregorianDate": "2022-02-16",
      "hijrahDate": "1443-07-15",
      "memorizedFromSorah": "آل عمران",
      "memorizedFromAyah": 35,
      "memorizedToSorah": "آل عمران",
      "memorizedToAyah": 39,
      "smallMemorizedFromSorah": "آل عمران",
      "smallMemorizedFromAyah": 18,
      "smallMemorizedToSorah": "آل عمران",
      "smallMemorizedToAyah": 34,
      "biggestMemorizedFromSorah": "البقرة",
      "biggestMemorizedFromAyah": 100,
      "biggestMemorizedToSorah": "البقرة",
      "biggestMemorizedToAyah": 111,
      "day": "الاربعاء"
    },
    {
      "id": 8,
      "gregorianDate": "2022-02-17",
      "hijrahDate": "1443-07-16",
      "memorizedFromSorah": "آل عمران",
      "memorizedFromAyah": 40,
      "memorizedToSorah": "آل عمران",
      "memorizedToAyah": 45,
      "smallMemorizedFromSorah": "آل عمران",
      "smallMemorizedFromAyah": 22,
      "smallMemorizedToSorah": "آل عمران",
      "smallMemorizedToAyah": 39,
      "biggestMemorizedFromSorah": "البقرة",
      "biggestMemorizedFromAyah": 112,
      "biggestMemorizedToSorah": "البقرة",
      "biggestMemorizedToAyah": 126,
      "day": "الخميس"
    },
    {
      "id": 9,
      "gregorianDate": "2022-02-18",
      "hijrahDate": "1443-07-17",
      "memorizedFromSorah": "آل عمران",
      "memorizedFromAyah": 46,
      "memorizedToSorah": "آل عمران",
      "memorizedToAyah": 50,
      "smallMemorizedFromSorah": "آل عمران",
      "smallMemorizedFromAyah": 28,
      "smallMemorizedToSorah": "آل عمران",
      "smallMemorizedToAyah": 45,
      "biggestMemorizedFromSorah": "البقرة",
      "biggestMemorizedFromAyah": 127,
      "biggestMemorizedToSorah": "البقرة",
      "biggestMemorizedToAyah": 142,
      "day": "الجمعة"
    },
    {
      "id": 10,
      "gregorianDate": "2022-02-19",
      "hijrahDate": "1443-07-18",
      "memorizedFromSorah": "آل عمران",
      "memorizedFromAyah": 51,
      "memorizedToSorah": "آل عمران",
      "memorizedToAyah": 56,
      "smallMemorizedFromSorah": "آل عمران",
      "smallMemorizedFromAyah": 35,
      "smallMemorizedToSorah": "آل عمران",
      "smallMemorizedToAyah": 50,
      "biggestMemorizedFromSorah": "البقرة",
      "biggestMemorizedFromAyah": 143,
      "biggestMemorizedToSorah": "البقرة",
      "biggestMemorizedToAyah": 158,
      "day": "السبت"
    },
    {
      "id": 11,
      "gregorianDate": "2022-02-20",
      "hijrahDate": "1443-07-19",
      "memorizedFromSorah": "آل عمران",
      "memorizedFromAyah": 57,
      "memorizedToSorah": "آل عمران",
      "memorizedToAyah": 62,
      "smallMemorizedFromSorah": "آل عمران",
      "smallMemorizedFromAyah": 40,
      "smallMemorizedToSorah": "آل عمران",
      "smallMemorizedToAyah": 56,
      "biggestMemorizedFromSorah": "البقرة",
      "biggestMemorizedFromAyah": 159,
      "biggestMemorizedToSorah": "البقرة",
      "biggestMemorizedToAyah": 174,
      "day": "الاحد"
    },
    {
      "id": 12,
      "gregorianDate": "2022-02-21",
      "hijrahDate": "1443-07-20",
      "memorizedFromSorah": "آل عمران",
      "memorizedFromAyah": 63,
      "memorizedToSorah": "آل عمران",
      "memorizedToAyah": 68,
      "smallMemorizedFromSorah": "آل عمران",
      "smallMemorizedFromAyah": 46,
      "smallMemorizedToSorah": "آل عمران",
      "smallMemorizedToAyah": 62,
      "biggestMemorizedFromSorah": "البقرة",
      "biggestMemorizedFromAyah": 175,
      "biggestMemorizedToSorah": "البقرة",
      "biggestMemorizedToAyah": 186,
      "day": "الاثنين"
    },
    {
      "id": 13,
      "gregorianDate": "2022-02-22",
      "hijrahDate": "1443-07-21",
      "memorizedFromSorah": "آل عمران",
      "memorizedFromAyah": 69,
      "memorizedToSorah": "آل عمران",
      "memorizedToAyah": 73,
      "smallMemorizedFromSorah": "آل عمران",
      "smallMemorizedFromAyah": 51,
      "smallMemorizedToSorah": "آل عمران",
      "smallMemorizedToAyah": 68,
      "biggestMemorizedFromSorah": "البقرة",
      "biggestMemorizedFromAyah": 187,
      "biggestMemorizedToSorah": "البقرة",
      "biggestMemorizedToAyah": 199,
      "day": "الثلاثاء"
    },
    {
      "id": 14,
      "gregorianDate": "2022-02-23",
      "hijrahDate": "1443-07-22",
      "memorizedFromSorah": "آل عمران",
      "memorizedFromAyah": 74,
      "memorizedToSorah": "آل عمران",
      "memorizedToAyah": 78,
      "smallMemorizedFromSorah": "آل عمران",
      "smallMemorizedFromAyah": 57,
      "smallMemorizedToSorah": "آل عمران",
      "smallMemorizedToAyah": 73,
      "biggestMemorizedFromSorah": "البقرة",
      "biggestMemorizedFromAyah": 200,
      "biggestMemorizedToSorah": "البقرة",
      "biggestMemorizedToAyah": 214,
      "day": "الاربعاء"
    },
    {
      "id": 15,
      "gregorianDate": "2022-02-24",
      "hijrahDate": "1443-07-23",
      "memorizedFromSorah": "آل عمران",
      "memorizedFromAyah": 79,
      "memorizedToSorah": "آل عمران",
      "memorizedToAyah": 82,
      "smallMemorizedFromSorah": "آل عمران",
      "smallMemorizedFromAyah": 63,
      "smallMemorizedToSorah": "آل عمران",
      "smallMemorizedToAyah": 78,
      "biggestMemorizedFromSorah": "البقرة",
      "biggestMemorizedFromAyah": 215,
      "biggestMemorizedToSorah": "البقرة",
      "biggestMemorizedToAyah": 224,
      "day": "الخميس"
    },
    {
      "id": 16,
      "gregorianDate": "2022-02-25",
      "hijrahDate": "1443-07-24",
      "memorizedFromSorah": "آل عمران",
      "memorizedFromAyah": 83,
      "memorizedToSorah": "آل عمران",
      "memorizedToAyah": 88,
      "smallMemorizedFromSorah": "آل عمران",
      "smallMemorizedFromAyah": 69,
      "smallMemorizedToSorah": "آل عمران",
      "smallMemorizedToAyah": 82,
      "biggestMemorizedFromSorah": "البقرة",
      "biggestMemorizedFromAyah": 225,
      "biggestMemorizedToSorah": "البقرة",
      "biggestMemorizedToAyah": 234,
      "day": "الجمعة"
    },
    {
      "id": 17,
      "gregorianDate": "2022-02-26",
      "hijrahDate": "1443-07-25",
      "memorizedFromSorah": "آل عمران",
      "memorizedFromAyah": 89,
      "memorizedToSorah": "آل عمران",
      "memorizedToAyah": 94,
      "smallMemorizedFromSorah": "آل عمران",
      "smallMemorizedFromAyah": 74,
      "smallMemorizedToSorah": "آل عمران",
      "smallMemorizedToAyah": 88,
      "biggestMemorizedFromSorah": "البقرة",
      "biggestMemorizedFromAyah": 235,
      "biggestMemorizedToSorah": "البقرة",
      "biggestMemorizedToAyah": 247,
      "day": "السبت"
    },
    {
      "id": 18,
      "gregorianDate": "2022-02-27",
      "hijrahDate": "1443-07-26",
      "memorizedFromSorah": "آل عمران",
      "memorizedFromAyah": 95,
      "memorizedToSorah": "آل عمران",
      "memorizedToAyah": 101,
      "smallMemorizedFromSorah": "آل عمران",
      "smallMemorizedFromAyah": 79,
      "smallMemorizedToSorah": "آل عمران",
      "smallMemorizedToAyah": 94,
      "biggestMemorizedFromSorah": "البقرة",
      "biggestMemorizedFromAyah": 248,
      "biggestMemorizedToSorah": "البقرة",
      "biggestMemorizedToAyah": 256,
      "day": "الاحد"
    },
    {
      "id": 19,
      "gregorianDate": "2022-02-28",
      "hijrahDate": "1443-07-27",
      "memorizedFromSorah": "آل عمران",
      "memorizedFromAyah": 102,
      "memorizedToSorah": "آل عمران",
      "memorizedToAyah": 106,
      "smallMemorizedFromSorah": "آل عمران",
      "smallMemorizedFromAyah": 83,
      "smallMemorizedToSorah": "آل عمران",
      "smallMemorizedToAyah": 101,
      "biggestMemorizedFromSorah": "البقرة",
      "biggestMemorizedFromAyah": 257,
      "biggestMemorizedToSorah": "البقرة",
      "biggestMemorizedToAyah": 265,
      "day": "الاثنين"
    },
    {
      "id": 20,
      "gregorianDate": "2022-03-01",
      "hijrahDate": "1443-07-28",
      "memorizedFromSorah": "آل عمران",
      "memorizedFromAyah": 107,
      "memorizedToSorah": "آل عمران",
      "memorizedToAyah": 111,
      "smallMemorizedFromSorah": "آل عمران",
      "smallMemorizedFromAyah": 89,
      "smallMemorizedToSorah": "آل عمران",
      "smallMemorizedToAyah": 106,
      "biggestMemorizedFromSorah": "البقرة",
      "biggestMemorizedFromAyah": 266,
      "biggestMemorizedToSorah": "البقرة",
      "biggestMemorizedToAyah": 277,
      "day": "الثلاثاء"
    }
  ]);

  const [valueDate, setValueDate] = React.useState(
    "2022-02-10"
  );

  const [age, setAge] = React.useState(1);

  const [listOfAyah, setListOfAyah] = React.useState([]);
  const [listOfAyahBiggestMemorized, setListOfAyahBiggestMemorized] =
    React.useState([]);

  let listOfAyahProcess = [];

  useEffect(() => {
    listOfAyahProcess = [];

    for (let i = 1; i <= sorahAyah[dataRequest.numberOfSorah - 1]; i++) {
      listOfAyahProcess.push(
        <MenuItem key={i} value={i}>
          {i}
        </MenuItem>
      );
    }

    setDataRequest({ ...dataRequest, numberOfAyah: 1 });

    setListOfAyah(listOfAyahProcess);
  }, [dataRequest.numberOfSorah]);



  useEffect(() => {
    listOfAyahProcess = [];

    for (
      let i = 1;
      i <= sorahAyah[dataRequest.numberOfSorahBiggestMemorize - 1];
      i++
    ) {
      listOfAyahProcess.push(
        <MenuItem key={i} value={i}>
          {i}
        </MenuItem>
      );
    }

    setDataRequest({ ...dataRequest, numberOfAyahBiggestMemorize: 1 });

    setListOfAyahBiggestMemorized(listOfAyahProcess);
  }, [dataRequest.numberOfSorahBiggestMemorize]);

  const handleClick = (e) => {
    const fetchUsers = async () => {
      let d = await axios.post(getTechPlan, dataRequest);
      // console.log(" Request Data <<<:::>>> \n", dataRequest);
      setDataResponse(d.data);
      // console.log("<<< - Response Data - >>> ::: \n", dataResponse);
    };

    // console.log(dataRequest, "...")
    fetchUsers();

    e.preventDefault();
  };

  const handleChange = (event) => {
    // console.log("setTextInput : ", setTextInput(event.target.value));
    // console.log("Event target : ", event.target.value);
  };

  useEffect(() => {
    var plans = [];

    // this for reorder data structure to be compatple with useTable library
    if (dataResponse["gregorianDateList"] !== undefined) {
      let count = 0;

      if (dataResponse["biggestMemorized"] != null) {
        for (var i = 0; i < dataResponse["biggestMemorized"].length; i++) {
          if (dataResponse["biggestMemorized"][i] == null) count++;
        }

        if (count === dataResponse["biggestMemorized"].length)
          dataResponse["biggestMemorized"] = null;
      }

      // Iterate over the property names:
      for (var i = 0; i < dataResponse["gregorianDateList"].length; i++) {
        var dayPlan = {};
        dayPlan["id"] = i + 1;
        for (const t of Object.keys(dataResponse)) {
          if (
            t === "memorized" ||
            t === "smallMemorized" ||
            t === "biggestMemorized"
          ) {
            if (dataResponse[t] == null) continue;
            if (dataResponse[t][i] != undefined && dataResponse[t][i] != null) {
              dayPlan[t + "FromSorah"] = sorahName(
                dataResponse[t][i]["from"].sorah
              );
              dayPlan[t + "FromAyah"] = dataResponse[t][i]["from"].ayah;

              dayPlan[t + "ToSorah"] = sorahName(
                dataResponse[t][i]["to"].sorah
              );
              dayPlan[t + "ToAyah"] = dataResponse[t][i]["to"].ayah;
            } else {
              dayPlan[t + "FromSorah"] = "";
              dayPlan[t + "FromAyah"] = "";
              dayPlan[t + "ToSorah"] = "";
              dayPlan[t + "ToAyah"] = "";
            }
          } else {
            dayPlan[t.substring(0, t.length - 4)] = dataResponse[t][i];
          }
        }

        dayPlan["day"] = daysNameInArabic(
          new Date(dayPlan["gregorianDate"]).getDay()
        );

        // for khalid he dose not like year appering in table !!
        dayPlan["gregorianDate"] = dayPlan["gregorianDate"].substring(5, 10);
        dayPlan["hijrahDate"] = dayPlan["hijrahDate"].substring(5, 10);
        plans.push(dayPlan);

      }

      setDataProcessed(plans);

    }
  }, [dataResponse]);

  return (
    <Container sx={{ flexWrap: 'wrap' }} >
      <br />
      <Container sx={{ background: "white" }}>

        <Box container sx={{ pb: 2 }}>
          <Box sx={{ pb: 1, background: "#3770a2", color: "white" }}>الاعدادات</Box>

          <Grid item xs="auto"  >

            <Box
              onSubmit={handleClick}
              component="form"
              sx={{
                background: "#ebebeb",
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >

              <Grid container flex={2} rowcSpacing={1} direction="row-reverse"  >


                <Grid item sx={{ mt: 1, borderLeft: "1px solid white" }} xs={12} md={3} key={1114}>
                  <FormLabel>الاعدادات</FormLabel>
                  <br />
                  <Grid xs dir="rtl" direction="column">
                    <FormControl>
                      <FormLabel sx={{ mt: 1, mb: -1, color: "black" }}>التاريخ</FormLabel>
                      <LocalizationProvider
                        id="clock"
                        dateAdapter={AdapterDayjs}>
                        <DatePicker
                          openTo="day"
                          inputFormat={"DD/MM/YYYY"}
                          views={["month", "year", "day"]}
                          value={valueDate}

                          onChange={(e) => {
                            setDataRequest({
                              ...dataRequest,
                              localDate: (e.$d.getFullYear() + "-" + ((e.$d.getMonth() + "").length == 2 ? e.$d.getMonth() : ("0" + (e.$d.getMonth() + 1))) + "-" + ((e.$d.getDate() + "").length == 2 ? e.$d.getDate() : ("0" + e.$d.getDate()))),
                            });
                            setValueDate(e);
                          }}
                          renderInput={(params) => < TextField sx={{ borderRadius: 1, background: "white" }} size="small"  {...params} />}
                        />
                      </LocalizationProvider>
                    </FormControl>
                  </Grid>
                  <Grid sx={{ mt: 0 }}>
                    <FormControl dir="rtl" variant="outlined">
                      <FormLabel sx={{ color: "black" }} id="labelMemorized">
                        عدد ايام الخطة في الاسبوع
                      </FormLabel>

                      <OutlinedInput

                        id="outlined-adornment-weightt"
                        type="number"
                        sx={{ width: 215, height: 40, background: "white" }}
                        value={dataRequest.numberOfDayPeerWeek}
                        inputProps={{ min: 1, max: 7 }}
                        onChange={(e) =>
                          setDataRequest({
                            ...dataRequest,
                            numberOfDayPeerWeek: e.target.value,
                            numberOfDaysSmallMemorized: dataRequest.numberOfDaysSmallMemorized >= e.target.value ? e.target.value - 1 : dataRequest.numberOfDaysSmallMemorized
                          })
                        }
                        endAdornment={
                          <InputAdornment
                            sx={{ ml: 1.5 }}>{
                              dataRequest.numberOfDayPeerWeek == 1 ? "يوم" : dataRequest.numberOfDayPeerWeek == 2 ? "يومان" : "أيام"
                            }</InputAdornment>
                        }

                      />

                    </FormControl>
                  </Grid>
                  <Grid sx={{ mt: 1 }}>
                    <FormControl dir="rtl" variant="outlined">
                      <FormLabel sx={{ color: "black" }} id="labelMemorized" >  عدد الايام للخطة الكلي </FormLabel>

                      <OutlinedInput
                        id="outlined-adornment-weightt"
                        type="number"
                        value={dataRequest.numberOfDayForPlan}
                        sx={{ width: 215, height: 40, background: "white" }}
                        inputProps={{ min: 0 }}

                        onChange={(e) =>
                          setDataRequest({
                            ...dataRequest,
                            numberOfDayForPlan: e.target.value,
                          })
                        }
                        endAdornment={
                          <InputAdornment sx={{ ml: 1.5 }}>{
                            dataRequest.numberOfDayForPlan == 1 ? "يوم" : dataRequest.numberOfDayForPlan == 2 ? "يومان" : "أيام"
                          }</InputAdornment>
                        }

                      />

                    </FormControl>
                  </Grid>
                  <Grid xs={12}>
                    <FormControl sx={{ mt: 1 }} dir="rtl">

                      <FormLabel sx={{ textAlign: "center", color: "black" }} id="labelMemorized"> طريقة التسميع </FormLabel>
                      <Select

                        labelId="labelMemorized"
                        sx={{ width: 215, height: 40, background: "white" }}
                        id="select"
                        value={dataRequest.wayForMemorized}
                        onChange={(e) => {
                          // console.log(e);
                          setDataRequest({
                            ...dataRequest,
                            wayForMemorized: e.target.value,
                          });
                        }}
                      >
                        <MenuItem key={1} value={true} >
                          من الفاتحة الى الناس
                        </MenuItem>
                        <MenuItem key={2} value={false} >
                          من الناس الى الفاتحة
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid item sx={{ mt: 1, borderLeft: "1px solid white" }} xs={12} md={3} key={1113} container
                  direction="row"
                >

                  <Grid xs={12} sx={{ mb: -0.5 }}>
                    <FormControl item >
                      <FormGroup aria-label="position">
                        <FormLabel sx={{ textAlign: "center" }}>الـحــفــظ</FormLabel>

                        <Grid container gap={2} direction="row-reverse" sx={{ mt: 1 }}>

                          <Grid item >
                            <FormControl item >
                              <FormLabel sx={{ textAlign: "center", color: "black" }}> السورة</FormLabel>
                              <Select
                                xs={10}
                                labelId="labelMemorized"
                                sx={{ width: 123, height: 40, background: "white" }}
                                id="select"
                                value={dataRequest.numberOfSorah}
                                onChange={(e) =>
                                  setDataRequest({
                                    ...dataRequest,
                                    numberOfSorah: e.target.value,
                                  })
                                }
                              >
                                {sorahNames.map((e, idx) => (
                                  <MenuItem key={idx + 1} value={1 + idx}>
                                    {e}
                                  </MenuItem>
                                ))}

                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item   >
                            <FormControl item >
                              <FormLabel sx={{ textAlign: "center", color: "black" }}> آية</FormLabel>

                              <Select
                                xs={2}
                                labelId="labelAyah"
                                sx={{ width: 75, height: 40, background: "white" }}
                                id="select"
                                value={dataRequest.numberOfAyah}
                                onChange={(e) => {
                                  // console.log("Ayah number :: ", e.target.value);
                                  setDataRequest({
                                    ...dataRequest,
                                    numberOfAyah: e.target.value,
                                  });
                                }}
                              >
                                {listOfAyah}
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                      </FormGroup>
                    </FormControl>
                  </Grid>
                  <Grid xs={12} sx={{ mb: -1 }}>

                    <FormControl dir="rtl" item >
                      <FormLabel sx={{ color: "black", }} id="labelMemorized">عدد أوجه الحفظ</FormLabel>

                      <OutlinedInput
                        id="outlined-adornment-weightt"
                        type="number"
                        value={dataRequest.numberOfPageDrs}
                        inputProps={{ min: 0 }}
                        sx={{ width: 215, height: 40, background: "white" }}
                        onChange={(e) => {
                          // console.log("value : ", e.target.value);
                          setDataRequest({
                            ...dataRequest,
                            numberOfPageDrs: e.target.value,
                          });
                        }}
                        endAdornment={
                          <InputAdornment sx={{ ml: 1.5 }}>{
                            dataRequest.numberOfPageDrs == 1 ? "وجه" : dataRequest.numberOfPageDrs == 2 ? "وجهان" : "أوجه"
                          }</InputAdornment>
                        }

                      />
                    </FormControl>
                  </Grid>

                  <Grid xs={12}
                    sx={{}}>

                    <FormControl item dir="rtl" >
                      <FormLabel sx={{ color: "black" }} id="labelMemorized">عدد سطور الحفظ</FormLabel>

                      <OutlinedInput
                        id="outlined-adornment-weight"
                        type="number"
                        value={dataRequest.numberOfLineDrs}
                        inputProps={{
                          "aria-label": "weight",
                          min: 0
                        }}
                        sx={{ width: 215, height: 40, background: "white" }}
                        onChange={(e) => {
                          // console.log("value : ", e.target.value);
                          setDataRequest({
                            ...dataRequest,
                            numberOfLineDrs: e.target.value,
                          });
                        }}
                        endAdornment={
                          <InputAdornment sx={{ ml: 1.5 }}>{
                            dataRequest.numberOfLineDrs == 1 ? "سطر" : dataRequest.numberOfLineDrs == 2 ? "سطران" : "سطور"
                          }
                          </InputAdornment>
                        }
                        aria-describedby="outlined-weight-helper-text"

                      />
                      {/* <FormHelperText id="outlined-weight-helper-text">
                  السطور
                </FormHelperText> */}
                    </FormControl>
                  </Grid>

                  <Grid xs={12}>
                    <br />
                    <br />

                  </Grid>

                  {/* AdapterHijri */}
                </Grid>

                <Grid item sx={{ mt: 1, borderLeft: "1px solid white" }} xs={12} md={3} key={1112} direction="row">

                  <Grid xs={12} >
                    <FormControl item >
                      <FormGroup aria-label="position">
                        <FormLabel sx={{ textAlign: "center" }}>المراجعة الصغرى</FormLabel>
                      </FormGroup>
                    </FormControl>
                  </Grid>

                  <Grid sx={{ mt: 1 }} >
                    <FormControl dir="rtl" variant="outlined">

                      <FormLabel sx={{ color: "black" }} id="labelMemorized">مراجعة الحفظ لأخر</FormLabel>

                      <OutlinedInput
                        id="outlined-adornment-weightt"
                        type="number"
                        sx={{ width: 215, height: 40, background: "white" }}
                        value={dataRequest.numberOfRememorizedDrs}
                        onChange={(e) =>
                          setDataRequest({
                            ...dataRequest,
                            numberOfRememorizedDrs: e.target.value,
                          })
                        }
                        endAdornment={
                          <InputAdornment sx={{ ml: 1.5 }} >{
                            dataRequest.numberOfRememorizedDrs == 1 ? "يوم" : dataRequest.numberOfRememorizedDrs == 2 ? "يومان" : "أيام"
                          }</InputAdornment>
                        }

                      />

                    </FormControl>
                  </Grid>
                  <Grid xs={12} sx={{ mt: 1 }}>
                    <FormControl dir="rtl" variant="outlined">
                      <FormLabel sx={{ color: "black" }} id="labelMemorized">الايام للمراجعة فقط</FormLabel>

                      <OutlinedInput
                        id="outlined-adornment-weightt"
                        type="number"
                        value={dataRequest.numberOfDaysSmallMemorized}
                        sx={{ width: 215, height: 40, background: "white" }}
                        inputProps={{ min: 0, max: dataRequest.numberOfDayPeerWeek - 1 }}
                        onChange={(e) =>
                          setDataRequest({
                            ...dataRequest,
                            numberOfDaysSmallMemorized: e.target.value,
                          })
                        }
                        endAdornment={
                          <InputAdornment sx={{ ml: 1.5 }} >{
                            dataRequest.numberOfDaysSmallMemorized == 1 ? "يوم" : dataRequest.numberOfDaysSmallMemorized == 2 ? "يومان" : "أيام"
                          }</InputAdornment>

                        }
                      // aria-describedby="outlined-weight-helper-text"
                      // inputProps={{
                      //   "aria-label": "weight",
                      // }}
                      />
                      {/* <FormHelperText id="outlined-weight-helper-textt">
                  الايام
                </FormHelperText> */}
                    </FormControl>
                  </Grid>

                </Grid>

                <Grid item sx={{ mt: 1, }} xs={12} md={3} key={1111} direction="row">


                  <Grid >
                    <FormControl item >

                      <FormGroup aria-label="position"  >
                        <FormLabel sx={{ textAlign: "center" }}>المراجعة الكبرى</FormLabel>

                        <Grid container sx={{ mt: 1 }} gap={2} direction="row-reverse">

                          <Grid item >
                            <FormControl item >
                              <FormLabel sx={{ textAlign: "center", color: "black" }}> السورة</FormLabel>
                              <Select
                                labelId="labelMemorizeddd"
                                sx={{ width: 123, height: 40, background: "white" }}
                                id="select"
                                value={dataRequest.numberOfSorahBiggestMemorize}
                                onChange={(e) =>
                                  setDataRequest({
                                    ...dataRequest,
                                    numberOfSorahBiggestMemorize: e.target.value,
                                  })
                                }
                              >
                                {sorahNames.map((e, idx) => (
                                  <MenuItem key={idx + 1} value={1 + idx}>
                                    {e}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item   >
                            <FormControl item >
                              <FormLabel sx={{ textAlign: "center", color: "black" }}> آية</FormLabel>

                              <Select
                                xs={2}
                                labelId="labelAyah"
                                sx={{ width: 75, height: 40, background: "white" }}
                                id="select"
                                value={dataRequest.numberOfAyahBiggestMemorize}
                                onChange={(e) => {
                                  // console.log(
                                  //   "numberOfAyahBiggestMemorize :: ",
                                  //   e.target.value
                                  // );
                                  setDataRequest({
                                    ...dataRequest,
                                    numberOfAyahBiggestMemorize: e.target.value,
                                  });
                                }}


                              >
                                {listOfAyah}
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                      </FormGroup>
                    </FormControl>
                  </Grid>

                  < Grid xs={12} >
                    <FormControl sx={{ mt: 1 }} dir="rtl" variant="outlined">
                      <FormLabel sx={{ color: "black" }} id="labelMemorized">
                        عدد الاوجه للمراجعة الكبرى
                      </FormLabel>
                      <OutlinedInput
                        id="outlined-adornment-weightt"
                        type="number"
                        value={dataRequest.numberOfPageBiggestMemorized}
                        inputProps={{ min: 0 }}
                        sx={{ width: 215, height: 40, background: "white" }}
                        onChange={(e) =>
                          setDataRequest({
                            ...dataRequest,
                            numberOfPageBiggestMemorized: e.target.value,
                          })
                        }
                        endAdornment={
                          <InputAdornment sx={{ ml: 1.5 }}>{
                            dataRequest.numberOfPageBiggestMemorized == 1 ? "وجه" : dataRequest.numberOfPageBiggestMemorized == 2 ? "وجهان" : "أوجه"
                          }</InputAdornment>
                        }
                      // aria-describedby="outlined-weight-helper-text"
                      // inputProps={{
                      //   "aria-label": "weight",
                      // }}
                      />
                      {/* <FormHelperText id="outlined-weight-helper-textt">
                  الاوجه
                </FormHelperText> */}
                    </FormControl>
                  </Grid>

                </Grid>
              </Grid>
              <br />

              <Button type="submit" sx={{ background: "#3770A2", mb: 1, width: 250 }} variant="contained">إنشاء الخطة</Button>
            </Box>
          </Grid>

        </Box>


        <Grid container direction="row" justifyContent="center" alignItems="center">

          <Button item variant="contained" sx={{ background: "#3770A2", mr: 2.9, width: 112 }} onClick={(e) => {

            const fetchUsersss = async () => {
              let d = await axios.post(`${config.url.API_URL}/printData/${dataRequest.printType}`, dataProcessed)

              // console.log("fun i... ", d.data);
              const linkSource = `data:application/${dataRequest.printType};base64,${d.data}`;
              const downloadLink = document.createElement("a");
              const fileName = `plan.${dataRequest.printType}`;
              downloadLink.href = linkSource;
              downloadLink.download = fileName;
              downloadLink.click();

            };

            fetchUsersss();
            // console.log(dataProcessed)
            e.preventDefault();

          }} >تحميل الجدول</Button>

          <FormControl dir="rtl" sx={{}} >

            <InputLabel shrink sx={{ color: "black" }} id="labelMemorizedssss" >
              صيغة الجدول
            </InputLabel>

            <Select

              labelId="labelMemorizedssss"
              sx={{ width: 115, height: 37, background: "white" }}
              id="seleccct"
              label="صيغة الجدول"

              value={dataRequest.printType}
              onChange={(e) => {
                // console.log(e);
                setDataRequest({
                  ...dataRequest,
                  printType: e.target.value,
                });
              }}
            >
              <MenuItem key={1} value={"pdf"}>
                PDF
              </MenuItem>
              <MenuItem key={2} value={"xlsx"}>
                Excel
              </MenuItem>
              <MenuItem key={3} value={"docx"}>
                Word
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>

      </Container >
      <br />

      <Grid sx={{ m: 1 }}>
        <Grid><strong> : ما زلنا نستقبل رسائلكم واقتراحاتكم</strong></Grid>
        <Grid><strong>Khalid492@gmail.com</strong>
        </Grid>
      </Grid>

      <br />
      {
        dataProcessed && (
          <DataTable
            numberOfDayPeerWeek={dataRequest.numberOfDayPeerWeek}
            data={dataProcessed}
            memorized={dataResponse["memorized"]}
            smallMemorized={dataResponse["smallMemorized"]}
            biggestMemorized={dataResponse["biggestMemorized"]}
          />
        )
      }
    </Container >
  );
};

export default HeaderTab;

function sorahName(number) {
  return sorahNames[number - 1];
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

const sorahNames = [
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

const sorahAyah = [
  7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 11,
  110, 98, 135, 112, 75, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45,
  83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55,
  78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20,
  56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21,
  11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6,
];
