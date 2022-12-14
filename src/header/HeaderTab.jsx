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
      "memorizedFromSorah": "???? ??????????",
      "memorizedFromAyah": 1,
      "memorizedToSorah": "???? ??????????",
      "memorizedToAyah": 7,
      "smallMemorizedFromSorah": "",
      "smallMemorizedFromAyah": "",
      "smallMemorizedToSorah": "",
      "smallMemorizedToAyah": "",
      "biggestMemorizedFromSorah": "??????????????",
      "biggestMemorizedFromAyah": 1,
      "biggestMemorizedToSorah": "????????????",
      "biggestMemorizedToAyah": 22,
      "day": "????????????"
    },
    {
      "id": 2,
      "gregorianDate": "2022-02-11",
      "hijrahDate": "1443-07-10",
      "memorizedFromSorah": "???? ??????????",
      "memorizedFromAyah": 8,
      "memorizedToSorah": "???? ??????????",
      "memorizedToAyah": 13,
      "smallMemorizedFromSorah": "???? ??????????",
      "smallMemorizedFromAyah": 1,
      "smallMemorizedToSorah": "???? ??????????",
      "smallMemorizedToAyah": 7,
      "biggestMemorizedFromSorah": "????????????",
      "biggestMemorizedFromAyah": 23,
      "biggestMemorizedToSorah": "????????????",
      "biggestMemorizedToAyah": 36,
      "day": "????????????"
    },
    {
      "id": 3,
      "gregorianDate": "2022-02-12",
      "hijrahDate": "1443-07-11",
      "memorizedFromSorah": "???? ??????????",
      "memorizedFromAyah": 14,
      "memorizedToSorah": "???? ??????????",
      "memorizedToAyah": 17,
      "smallMemorizedFromSorah": "???? ??????????",
      "smallMemorizedFromAyah": 1,
      "smallMemorizedToSorah": "???? ??????????",
      "smallMemorizedToAyah": 13,
      "biggestMemorizedFromSorah": "????????????",
      "biggestMemorizedFromAyah": 37,
      "biggestMemorizedToSorah": "????????????",
      "biggestMemorizedToAyah": 57,
      "day": "??????????"
    },
    {
      "id": 4,
      "gregorianDate": "2022-02-13",
      "hijrahDate": "1443-07-12",
      "memorizedFromSorah": "???? ??????????",
      "memorizedFromAyah": 18,
      "memorizedToSorah": "???? ??????????",
      "memorizedToAyah": 21,
      "smallMemorizedFromSorah": "???? ??????????",
      "smallMemorizedFromAyah": 1,
      "smallMemorizedToSorah": "???? ??????????",
      "smallMemorizedToAyah": 17,
      "biggestMemorizedFromSorah": "????????????",
      "biggestMemorizedFromAyah": 58,
      "biggestMemorizedToSorah": "????????????",
      "biggestMemorizedToAyah": 71,
      "day": "??????????"
    },
    {
      "id": 5,
      "gregorianDate": "2022-02-14",
      "hijrahDate": "1443-07-13",
      "memorizedFromSorah": "???? ??????????",
      "memorizedFromAyah": 22,
      "memorizedToSorah": "???? ??????????",
      "memorizedToAyah": 27,
      "smallMemorizedFromSorah": "???? ??????????",
      "smallMemorizedFromAyah": 8,
      "smallMemorizedToSorah": "???? ??????????",
      "smallMemorizedToAyah": 21,
      "biggestMemorizedFromSorah": "????????????",
      "biggestMemorizedFromAyah": 72,
      "biggestMemorizedToSorah": "????????????",
      "biggestMemorizedToAyah": 85,
      "day": "??????????????"
    },
    {
      "id": 6,
      "gregorianDate": "2022-02-15",
      "hijrahDate": "1443-07-14",
      "memorizedFromSorah": "???? ??????????",
      "memorizedFromAyah": 28,
      "memorizedToSorah": "???? ??????????",
      "memorizedToAyah": 34,
      "smallMemorizedFromSorah": "???? ??????????",
      "smallMemorizedFromAyah": 14,
      "smallMemorizedToSorah": "???? ??????????",
      "smallMemorizedToAyah": 27,
      "biggestMemorizedFromSorah": "????????????",
      "biggestMemorizedFromAyah": 86,
      "biggestMemorizedToSorah": "????????????",
      "biggestMemorizedToAyah": 99,
      "day": "????????????????"
    },
    {
      "id": 7,
      "gregorianDate": "2022-02-16",
      "hijrahDate": "1443-07-15",
      "memorizedFromSorah": "???? ??????????",
      "memorizedFromAyah": 35,
      "memorizedToSorah": "???? ??????????",
      "memorizedToAyah": 39,
      "smallMemorizedFromSorah": "???? ??????????",
      "smallMemorizedFromAyah": 18,
      "smallMemorizedToSorah": "???? ??????????",
      "smallMemorizedToAyah": 34,
      "biggestMemorizedFromSorah": "????????????",
      "biggestMemorizedFromAyah": 100,
      "biggestMemorizedToSorah": "????????????",
      "biggestMemorizedToAyah": 111,
      "day": "????????????????"
    },
    {
      "id": 8,
      "gregorianDate": "2022-02-17",
      "hijrahDate": "1443-07-16",
      "memorizedFromSorah": "???? ??????????",
      "memorizedFromAyah": 40,
      "memorizedToSorah": "???? ??????????",
      "memorizedToAyah": 45,
      "smallMemorizedFromSorah": "???? ??????????",
      "smallMemorizedFromAyah": 22,
      "smallMemorizedToSorah": "???? ??????????",
      "smallMemorizedToAyah": 39,
      "biggestMemorizedFromSorah": "????????????",
      "biggestMemorizedFromAyah": 112,
      "biggestMemorizedToSorah": "????????????",
      "biggestMemorizedToAyah": 126,
      "day": "????????????"
    },
    {
      "id": 9,
      "gregorianDate": "2022-02-18",
      "hijrahDate": "1443-07-17",
      "memorizedFromSorah": "???? ??????????",
      "memorizedFromAyah": 46,
      "memorizedToSorah": "???? ??????????",
      "memorizedToAyah": 50,
      "smallMemorizedFromSorah": "???? ??????????",
      "smallMemorizedFromAyah": 28,
      "smallMemorizedToSorah": "???? ??????????",
      "smallMemorizedToAyah": 45,
      "biggestMemorizedFromSorah": "????????????",
      "biggestMemorizedFromAyah": 127,
      "biggestMemorizedToSorah": "????????????",
      "biggestMemorizedToAyah": 142,
      "day": "????????????"
    },
    {
      "id": 10,
      "gregorianDate": "2022-02-19",
      "hijrahDate": "1443-07-18",
      "memorizedFromSorah": "???? ??????????",
      "memorizedFromAyah": 51,
      "memorizedToSorah": "???? ??????????",
      "memorizedToAyah": 56,
      "smallMemorizedFromSorah": "???? ??????????",
      "smallMemorizedFromAyah": 35,
      "smallMemorizedToSorah": "???? ??????????",
      "smallMemorizedToAyah": 50,
      "biggestMemorizedFromSorah": "????????????",
      "biggestMemorizedFromAyah": 143,
      "biggestMemorizedToSorah": "????????????",
      "biggestMemorizedToAyah": 158,
      "day": "??????????"
    },
    {
      "id": 11,
      "gregorianDate": "2022-02-20",
      "hijrahDate": "1443-07-19",
      "memorizedFromSorah": "???? ??????????",
      "memorizedFromAyah": 57,
      "memorizedToSorah": "???? ??????????",
      "memorizedToAyah": 62,
      "smallMemorizedFromSorah": "???? ??????????",
      "smallMemorizedFromAyah": 40,
      "smallMemorizedToSorah": "???? ??????????",
      "smallMemorizedToAyah": 56,
      "biggestMemorizedFromSorah": "????????????",
      "biggestMemorizedFromAyah": 159,
      "biggestMemorizedToSorah": "????????????",
      "biggestMemorizedToAyah": 174,
      "day": "??????????"
    },
    {
      "id": 12,
      "gregorianDate": "2022-02-21",
      "hijrahDate": "1443-07-20",
      "memorizedFromSorah": "???? ??????????",
      "memorizedFromAyah": 63,
      "memorizedToSorah": "???? ??????????",
      "memorizedToAyah": 68,
      "smallMemorizedFromSorah": "???? ??????????",
      "smallMemorizedFromAyah": 46,
      "smallMemorizedToSorah": "???? ??????????",
      "smallMemorizedToAyah": 62,
      "biggestMemorizedFromSorah": "????????????",
      "biggestMemorizedFromAyah": 175,
      "biggestMemorizedToSorah": "????????????",
      "biggestMemorizedToAyah": 186,
      "day": "??????????????"
    },
    {
      "id": 13,
      "gregorianDate": "2022-02-22",
      "hijrahDate": "1443-07-21",
      "memorizedFromSorah": "???? ??????????",
      "memorizedFromAyah": 69,
      "memorizedToSorah": "???? ??????????",
      "memorizedToAyah": 73,
      "smallMemorizedFromSorah": "???? ??????????",
      "smallMemorizedFromAyah": 51,
      "smallMemorizedToSorah": "???? ??????????",
      "smallMemorizedToAyah": 68,
      "biggestMemorizedFromSorah": "????????????",
      "biggestMemorizedFromAyah": 187,
      "biggestMemorizedToSorah": "????????????",
      "biggestMemorizedToAyah": 199,
      "day": "????????????????"
    },
    {
      "id": 14,
      "gregorianDate": "2022-02-23",
      "hijrahDate": "1443-07-22",
      "memorizedFromSorah": "???? ??????????",
      "memorizedFromAyah": 74,
      "memorizedToSorah": "???? ??????????",
      "memorizedToAyah": 78,
      "smallMemorizedFromSorah": "???? ??????????",
      "smallMemorizedFromAyah": 57,
      "smallMemorizedToSorah": "???? ??????????",
      "smallMemorizedToAyah": 73,
      "biggestMemorizedFromSorah": "????????????",
      "biggestMemorizedFromAyah": 200,
      "biggestMemorizedToSorah": "????????????",
      "biggestMemorizedToAyah": 214,
      "day": "????????????????"
    },
    {
      "id": 15,
      "gregorianDate": "2022-02-24",
      "hijrahDate": "1443-07-23",
      "memorizedFromSorah": "???? ??????????",
      "memorizedFromAyah": 79,
      "memorizedToSorah": "???? ??????????",
      "memorizedToAyah": 82,
      "smallMemorizedFromSorah": "???? ??????????",
      "smallMemorizedFromAyah": 63,
      "smallMemorizedToSorah": "???? ??????????",
      "smallMemorizedToAyah": 78,
      "biggestMemorizedFromSorah": "????????????",
      "biggestMemorizedFromAyah": 215,
      "biggestMemorizedToSorah": "????????????",
      "biggestMemorizedToAyah": 224,
      "day": "????????????"
    },
    {
      "id": 16,
      "gregorianDate": "2022-02-25",
      "hijrahDate": "1443-07-24",
      "memorizedFromSorah": "???? ??????????",
      "memorizedFromAyah": 83,
      "memorizedToSorah": "???? ??????????",
      "memorizedToAyah": 88,
      "smallMemorizedFromSorah": "???? ??????????",
      "smallMemorizedFromAyah": 69,
      "smallMemorizedToSorah": "???? ??????????",
      "smallMemorizedToAyah": 82,
      "biggestMemorizedFromSorah": "????????????",
      "biggestMemorizedFromAyah": 225,
      "biggestMemorizedToSorah": "????????????",
      "biggestMemorizedToAyah": 234,
      "day": "????????????"
    },
    {
      "id": 17,
      "gregorianDate": "2022-02-26",
      "hijrahDate": "1443-07-25",
      "memorizedFromSorah": "???? ??????????",
      "memorizedFromAyah": 89,
      "memorizedToSorah": "???? ??????????",
      "memorizedToAyah": 94,
      "smallMemorizedFromSorah": "???? ??????????",
      "smallMemorizedFromAyah": 74,
      "smallMemorizedToSorah": "???? ??????????",
      "smallMemorizedToAyah": 88,
      "biggestMemorizedFromSorah": "????????????",
      "biggestMemorizedFromAyah": 235,
      "biggestMemorizedToSorah": "????????????",
      "biggestMemorizedToAyah": 247,
      "day": "??????????"
    },
    {
      "id": 18,
      "gregorianDate": "2022-02-27",
      "hijrahDate": "1443-07-26",
      "memorizedFromSorah": "???? ??????????",
      "memorizedFromAyah": 95,
      "memorizedToSorah": "???? ??????????",
      "memorizedToAyah": 101,
      "smallMemorizedFromSorah": "???? ??????????",
      "smallMemorizedFromAyah": 79,
      "smallMemorizedToSorah": "???? ??????????",
      "smallMemorizedToAyah": 94,
      "biggestMemorizedFromSorah": "????????????",
      "biggestMemorizedFromAyah": 248,
      "biggestMemorizedToSorah": "????????????",
      "biggestMemorizedToAyah": 256,
      "day": "??????????"
    },
    {
      "id": 19,
      "gregorianDate": "2022-02-28",
      "hijrahDate": "1443-07-27",
      "memorizedFromSorah": "???? ??????????",
      "memorizedFromAyah": 102,
      "memorizedToSorah": "???? ??????????",
      "memorizedToAyah": 106,
      "smallMemorizedFromSorah": "???? ??????????",
      "smallMemorizedFromAyah": 83,
      "smallMemorizedToSorah": "???? ??????????",
      "smallMemorizedToAyah": 101,
      "biggestMemorizedFromSorah": "????????????",
      "biggestMemorizedFromAyah": 257,
      "biggestMemorizedToSorah": "????????????",
      "biggestMemorizedToAyah": 265,
      "day": "??????????????"
    },
    {
      "id": 20,
      "gregorianDate": "2022-03-01",
      "hijrahDate": "1443-07-28",
      "memorizedFromSorah": "???? ??????????",
      "memorizedFromAyah": 107,
      "memorizedToSorah": "???? ??????????",
      "memorizedToAyah": 111,
      "smallMemorizedFromSorah": "???? ??????????",
      "smallMemorizedFromAyah": 89,
      "smallMemorizedToSorah": "???? ??????????",
      "smallMemorizedToAyah": 106,
      "biggestMemorizedFromSorah": "????????????",
      "biggestMemorizedFromAyah": 266,
      "biggestMemorizedToSorah": "????????????",
      "biggestMemorizedToAyah": 277,
      "day": "????????????????"
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
          <Box sx={{ pb: 1, background: "#3770a2", color: "white" }}>??????????????????</Box>

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
                  <FormLabel>??????????????????</FormLabel>
                  <br />
                  <Grid xs dir="rtl" direction="column">
                    <FormControl>
                      <FormLabel sx={{ mt: 1, mb: -1, color: "black" }}>??????????????</FormLabel>
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
                        ?????? ???????? ?????????? ???? ??????????????
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
                              dataRequest.numberOfDayPeerWeek == 1 ? "??????" : dataRequest.numberOfDayPeerWeek == 2 ? "??????????" : "????????"
                            }</InputAdornment>
                        }

                      />

                    </FormControl>
                  </Grid>
                  <Grid sx={{ mt: 1 }}>
                    <FormControl dir="rtl" variant="outlined">
                      <FormLabel sx={{ color: "black" }} id="labelMemorized" >  ?????? ???????????? ?????????? ?????????? </FormLabel>

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
                            dataRequest.numberOfDayForPlan == 1 ? "??????" : dataRequest.numberOfDayForPlan == 2 ? "??????????" : "????????"
                          }</InputAdornment>
                        }

                      />

                    </FormControl>
                  </Grid>
                  <Grid xs={12}>
                    <FormControl sx={{ mt: 1 }} dir="rtl">

                      <FormLabel sx={{ textAlign: "center", color: "black" }} id="labelMemorized"> ?????????? ?????????????? </FormLabel>
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
                          ???? ?????????????? ?????? ??????????
                        </MenuItem>
                        <MenuItem key={2} value={false} >
                          ???? ?????????? ?????? ??????????????
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
                        <FormLabel sx={{ textAlign: "center" }}>????????????????????</FormLabel>

                        <Grid container gap={2} direction="row-reverse" sx={{ mt: 1 }}>

                          <Grid item >
                            <FormControl item >
                              <FormLabel sx={{ textAlign: "center", color: "black" }}> ????????????</FormLabel>
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
                              <FormLabel sx={{ textAlign: "center", color: "black" }}> ??????</FormLabel>

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
                      <FormLabel sx={{ color: "black", }} id="labelMemorized">?????? ???????? ??????????</FormLabel>

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
                            dataRequest.numberOfPageDrs == 1 ? "??????" : dataRequest.numberOfPageDrs == 2 ? "??????????" : "????????"
                          }</InputAdornment>
                        }

                      />
                    </FormControl>
                  </Grid>

                  <Grid xs={12}
                    sx={{}}>

                    <FormControl item dir="rtl" >
                      <FormLabel sx={{ color: "black" }} id="labelMemorized">?????? ???????? ??????????</FormLabel>

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
                            dataRequest.numberOfLineDrs == 1 ? "??????" : dataRequest.numberOfLineDrs == 2 ? "??????????" : "????????"
                          }
                          </InputAdornment>
                        }
                        aria-describedby="outlined-weight-helper-text"

                      />
                      {/* <FormHelperText id="outlined-weight-helper-text">
                  ????????????
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
                        <FormLabel sx={{ textAlign: "center" }}>???????????????? ????????????</FormLabel>
                      </FormGroup>
                    </FormControl>
                  </Grid>

                  <Grid sx={{ mt: 1 }} >
                    <FormControl dir="rtl" variant="outlined">

                      <FormLabel sx={{ color: "black" }} id="labelMemorized">???????????? ?????????? ????????</FormLabel>

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
                            dataRequest.numberOfRememorizedDrs == 1 ? "??????" : dataRequest.numberOfRememorizedDrs == 2 ? "??????????" : "????????"
                          }</InputAdornment>
                        }

                      />

                    </FormControl>
                  </Grid>
                  <Grid xs={12} sx={{ mt: 1 }}>
                    <FormControl dir="rtl" variant="outlined">
                      <FormLabel sx={{ color: "black" }} id="labelMemorized">???????????? ???????????????? ??????</FormLabel>

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
                            dataRequest.numberOfDaysSmallMemorized == 1 ? "??????" : dataRequest.numberOfDaysSmallMemorized == 2 ? "??????????" : "????????"
                          }</InputAdornment>

                        }
                      // aria-describedby="outlined-weight-helper-text"
                      // inputProps={{
                      //   "aria-label": "weight",
                      // }}
                      />
                      {/* <FormHelperText id="outlined-weight-helper-textt">
                  ????????????
                </FormHelperText> */}
                    </FormControl>
                  </Grid>

                </Grid>

                <Grid item sx={{ mt: 1, }} xs={12} md={3} key={1111} direction="row">


                  <Grid >
                    <FormControl item >

                      <FormGroup aria-label="position"  >
                        <FormLabel sx={{ textAlign: "center" }}>???????????????? ????????????</FormLabel>

                        <Grid container sx={{ mt: 1 }} gap={2} direction="row-reverse">

                          <Grid item >
                            <FormControl item >
                              <FormLabel sx={{ textAlign: "center", color: "black" }}> ????????????</FormLabel>
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
                              <FormLabel sx={{ textAlign: "center", color: "black" }}> ??????</FormLabel>

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
                        ?????? ???????????? ???????????????? ????????????
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
                            dataRequest.numberOfPageBiggestMemorized == 1 ? "??????" : dataRequest.numberOfPageBiggestMemorized == 2 ? "??????????" : "????????"
                          }</InputAdornment>
                        }
                      // aria-describedby="outlined-weight-helper-text"
                      // inputProps={{
                      //   "aria-label": "weight",
                      // }}
                      />
                      {/* <FormHelperText id="outlined-weight-helper-textt">
                  ????????????
                </FormHelperText> */}
                    </FormControl>
                  </Grid>

                </Grid>
              </Grid>
              <br />

              <Button type="submit" sx={{ background: "#3770A2", mb: 1, width: 250 }} variant="contained">?????????? ??????????</Button>
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

          }} >?????????? ????????????</Button>

          <FormControl dir="rtl" sx={{}} >

            <InputLabel shrink sx={{ color: "black" }} id="labelMemorizedssss" >
              ???????? ????????????
            </InputLabel>

            <Select

              labelId="labelMemorizedssss"
              sx={{ width: 115, height: 37, background: "white" }}
              id="seleccct"
              label="???????? ????????????"

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
        <Grid><strong> : ???? ???????? ???????????? ?????????????? ??????????????????????</strong></Grid>
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
    "??????????",
    "??????????????",
    "????????????????",
    "????????????????",
    "????????????",
    "????????????",
    "??????????",
  ];

  return days[number];
}

function arabicColumns(englishColumn) {
  const columns = {
    id: "id",
    gregorianDate: "????????????",
    hijrahDate: "????????",
    memorizedFromSorah: "?????????? ???? ????????????",
    memorizedFromAyah: " ???? ??????????",
    memorizedToSorah: "?????? ????????????",
    memorizedToAyah: "?????? ??????????",
    smallMemorizedFromSorah: "???????????????????????????? ???? ????????????",
    smallMemorizedFromAyah: "???? ??????????",
    smallMemorizedToSorah: "?????? ????????????",
    smallMemorizedToAyah: "?????? ??????????",
    biggestMemorizedFromSorah: "???????????????? ???????????? ???? ????????????",
    biggestMemorizedFromAyah: "???? ??????????",
    biggestMemorizedToSorah: "?????? ????????????",
    biggestMemorizedToAyah: "?????? ??????????",
  };

  return columns[englishColumn];
}

const sorahNames = [
  "??????????????",
  "????????????",
  "???? ??????????",
  "????????????",
  "??????????????",
  "??????????????",
  "??????????????",
  "??????????????",
  "????????????",
  "????????",
  "??????",
  "????????",
  "??????????",
  "??????????????",
  "??????????",
  "??????????",
  "??????????????",
  "??????????",
  "????????",
  "????",
  "????????????????",
  "????????",
  "????????????????",
  "??????????",
  "??????????????",
  "??????????????",
  "??????????",
  "??????????",
  "????????????????",
  "??????????",
  "??????????",
  "????????????",
  "??????????????",
  "??????",
  "????????",
  "????",
  "??????????????",
  "??",
  "??????????",
  "????????",
  "????????",
  "????????????",
  "????????????",
  "????????????",
  "??????????????",
  "??????????????",
  "????????",
  "??????????",
  "??????????????",
  "??",
  "????????????????",
  "??????????",
  "??????????",
  "??????????",
  "????????????",
  "??????????????",
  "????????????",
  "????????????????",
  "??????????",
  "????????????????",
  "????????",
  "????????????",
  "??????????????????",
  "??????????????",
  "????????????",
  "??????????????",
  "??????????",
  "??????????",
  "????????????",
  "??????????????",
  "??????",
  "????????",
  "????????????",
  "????????????",
  "??????????????",
  "??????????????",
  "????????????????",
  "??????????",
  "????????????????",
  "??????",
  "??????????????",
  "????????????????",
  "????????????????",
  "????????????????",
  "????????????",
  "????????????",
  "????????????",
  "??????????????",
  "??????????",
  "??????????",
  "??????????",
  "??????????",
  "??????????",
  "??????????",
  "??????????",
  "??????????",
  "??????????",
  "????????????",
  "??????????????",
  "????????????????",
  "??????????????",
  "??????????????",
  "??????????",
  "????????????",
  "??????????",
  "????????",
  "??????????????",
  "????????????",
  "????????????????",
  "??????????",
  "??????????",
  "??????????????",
  "??????????",
  "??????????",
];

const sorahAyah = [
  7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 11,
  110, 98, 135, 112, 75, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45,
  83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55,
  78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44, 28, 28, 20,
  56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21,
  11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6,
];
