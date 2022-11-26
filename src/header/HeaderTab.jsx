import React, { useEffect } from "react";

import axios from "axios";
import ReactDOM from "react-dom/client";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import InputAdornment from "@mui/material/InputAdornment";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


import "moment/locale/ar-sa";

import dayjs from "dayjs";

import "./../index.css";

// import AdapterHijri from "@date-io/hijri";
// import AdapterJalaali from "@date-io/jalaali";

import Stack from "@mui/material/Stack";

import MuhannadTable from "../body/MuhannadTable";
import { withTheme } from "styled-components";
import { withEmotionCache } from "@emotion/react";

const styles = (theme) => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },

  backgroundWhite: {
    background: "white",
  },
});

const data = {
  localDate: "2022-02-10",
  wayForMemorized: false,
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
};
const getTechPlan = "http://localhost:8080/getTechPlan";

const HeaderTab = (classes) => {
  const [textInput, setTextInput] = React.useState("");

  const [dataRequest, setDataRequest] = React.useState(data);
  const [dataResponse, setDataResponse] = React.useState([]);
  const [dataProcessed, setDataProcessed] = React.useState();

  const [valueDate, setValueDate] = React.useState(
    dayjs(dataRequest.localDate)
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
      console.log(" Request Data <<<:::>>> \n", dataRequest);
      setDataResponse(d.data);
      console.log("<<< - Response Data - >>> ::: \n", dataResponse);
    };

    fetchUsers();

    e.preventDefault();
  };

  const handleChange = (event) => {
    console.log("setTextInput : ", setTextInput(event.target.value));
    console.log("Event target : ", event.target.value);
  };

  useEffect(() => {
    var plans = [];

    // this for reorder data structure to be compatple with useTable library
    if (dataResponse["gregorianDateList"] !== undefined) {
      let count = 0;

      for (var i = 0; i < dataResponse["biggestMemorized"].length; i++) {
        if (dataResponse["biggestMemorized"][i] == null) count++;
      }

      if (count === dataResponse["biggestMemorized"].length)
        dataResponse["biggestMemorized"] = null;

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

        plans.push(dayPlan);
      }

      console.log("dataResponses :: ", dataResponse);
      setDataProcessed(plans);
    }
  }, [dataResponse]);

  return (
    <div>
      <p>This is Header app </p>
      <div className="settings">
        <form onSubmit={handleClick}>
          <div className="titleSettings">الاعدادات</div>

          <div className="parts">
            <div className="settingsPart">

            <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" sx={{color:"black"}}> طريقة الحفظ </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel value={true}  control={<Radio />} label="من الفاتحة الى الناس" />
                <FormControlLabel value={false} control={<Radio />} label="من الناس الى الفاتحة" />
              </RadioGroup>
            </FormControl>
              <InputLabel id="labelMemorized"> طريقة الحفظ </InputLabel>
              <Select
                labelId="labelMemorized"
                sx={{ width: 170, height: 35 }}
                id="select"
                value={dataRequest.wayForMemorized}
                onChange={(e) => {
                  console.log(e);
                  setDataRequest({
                    ...dataRequest,
                    wayForMemorized: e.target.value,
                  });
                }}
              >
                <MenuItem key={1} value={true}>
                  من الفاتحة الى الناس
                </MenuItem>
                <MenuItem key={2} value={false}>
                  من الناس الى الفاتحة
                </MenuItem>
              </Select>
              <InputLabel id="labelMemorized">الحفظ سورة</InputLabel>
              <Select
                labelId="labelMemorized"
                sx={{ width: 100, height: 35 }}
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
              <InputLabel id="labelAyah">الاية</InputLabel>
              <Select
                labelId="labelAyah"
                sx={{ width: 100, height: 35 }}
                id="select"
                value={dataRequest.numberOfAyah}
                onChange={(e) => {
                  console.log("Ayah number :: ", e.target.value);
                  setDataRequest({
                    ...dataRequest,
                    numberOfAyah: e.target.value,
                  });
                }}
              >
                {listOfAyah}
              </Select>

              <InputLabel id="labelMemorized">عدد سطور الحفظ</InputLabel>
              <FormControl sx={{ m: 1, width: "15ch" }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weightt"
                  type="number"
                  value={dataRequest.numberOfPageDrs}
                  onChange={(e) => {
                    console.log("value : ", e.target.value);
                    setDataRequest({
                      ...dataRequest,
                      numberOfPageDrs: e.target.value,
                    });
                  }}
                  endAdornment={
                    <InputAdornment position="start">الاوجه</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
                {/* <FormHelperText id="outlined-weight-helper-textt">
                  الاوجه
                </FormHelperText> */}
              </FormControl>

              <FormControl sx={{ m: 1, width: "15ch" }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  type="number"
                  value={dataRequest.numberOfLineDrs}
                  onChange={(e) => {
                    console.log("value : ", e.target.value);
                    setDataRequest({
                      ...dataRequest,
                      numberOfLineDrs: e.target.value,
                    });
                  }}
                  endAdornment={
                    <InputAdornment position="end">السطور</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
                {/* <FormHelperText id="outlined-weight-helper-text">
                  السطور
                </FormHelperText> */}
              </FormControl>
            </div>
            <div className="settingsPart">
              <InputLabel id="labelMemorized">مراجعة الحفظ لأخر</InputLabel>
              <FormControl sx={{ m: 1, width: "15ch" }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weightt"
                  type="number"
                  value={dataRequest.numberOfRememorizedDrs}
                  onChange={(e) =>
                    setDataRequest({
                      ...dataRequest,
                      numberOfRememorizedDrs: e.target.value,
                    })
                  }
                  endAdornment={
                    <InputAdornment position="start">الايام</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
                {/* <FormHelperText id="outlined-weight-helper-textt">
                  الايام
                </FormHelperText> */}
              </FormControl>
              <InputLabel id="labelMemorized">الايام للمراجعة فقط</InputLabel>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weightt"
                  type="number"
                  value={dataRequest.numberOfDaysSmallMemorized}
                  onChange={(e) =>
                    setDataRequest({
                      ...dataRequest,
                      numberOfDaysSmallMemorized: e.target.value,
                    })
                  }
                  endAdornment={
                    <InputAdornment position="start">الايام</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
                {/* <FormHelperText id="outlined-weight-helper-textt">
                  الايام
                </FormHelperText> */}
              </FormControl>
              <InputLabel id="labelMemorized">
                عدد الاوجه للمراجعة الكبرى
              </InputLabel>
              <FormControl
                sx={{ m: 1, width: "15ch", textAlign: "right" }}
                variant="outlined"
              >
                <OutlinedInput
                  id="outlined-adornment-weightt"
                  type="number"
                  value={dataRequest.numberOfPageBiggestMemorized}
                  onChange={(e) =>
                    setDataRequest({
                      ...dataRequest,
                      numberOfPageBiggestMemorized: e.target.value,
                    })
                  }
                  endAdornment={
                    <InputAdornment position="start">الاوجه</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
                {/* <FormHelperText id="outlined-weight-helper-textt">
                  الاوجه
                </FormHelperText> */}
              </FormControl>
            </div>
            <div className="settingsPart">
              <div style={{ display: "flex" }}>
                <FormControl className={[classes.formControl,{ flex: "1" }]}
                style={{ margin: "10px" }}>
                  <InputLabel style={{ margin: "-10px" ,color:"black"}} id="labelAyahaa">الاية</InputLabel>

                  <Select
                    labelId="labelAyahaa"
                    sx={{ width: 100, height: 35 }}
                    id="selecttt"
                    value={dataRequest.numberOfAyahBiggestMemorize}
                    onChange={(e) => {
                      console.log(
                        "numberOfAyahBiggestMemorize :: ",
                        e.target.value
                      );
                      setDataRequest({
                        ...dataRequest,
                        numberOfAyahBiggestMemorize: e.target.value,
                      });
                    }}
                  >
                    {listOfAyahBiggestMemorized}
                  </Select>
                </FormControl>

                <FormControl
                  className={[classes.formControl, { flex: "2" }]}
                  style={{ margin: "10px" }}
                >
                  <InputLabel style={{ margin: "-10px" }} id="labelMemorizeddd">
                    بداية المراجعة سورة
                  </InputLabel>
                  <Select
                    labelId="labelMemorizeddd"
                    sx={{ width: 100, height: 35 }}
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
              </div>
              <InputLabel id="labelMemorized">
                {" "}
                عدد ايام الخطة في الاسبوع
              </InputLabel>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weightt"
                  type="number"
                  value={dataRequest.numberOfDayPeerWeek}
                  onChange={(e) =>
                    setDataRequest({
                      ...dataRequest,
                      numberOfDayPeerWeek: e.target.value,
                    })
                  }
                  endAdornment={
                    <InputAdornment position="start">الايام</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
                {/* <FormHelperText id="outlined-weight-helper-textt">
                  الايام
                </FormHelperText> */}
              </FormControl>

              <InputLabel id="labelMemorized"> عدد الايام للخطة </InputLabel>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weightt"
                  type="number"
                  value={dataRequest.numberOfDayForPlan}
                  onChange={(e) =>
                    setDataRequest({
                      ...dataRequest,
                      numberOfDayForPlan: e.target.value,
                    })
                  }
                  endAdornment={
                    <InputAdornment position="start">الايام</InputAdornment>
                  }
                  aria-describedby="outlined-weight-helper-text"
                  inputProps={{
                    "aria-label": "weight",
                  }}
                />
                {/* <FormHelperText id="outlined-weight-helper-textt">
                  الايام
                </FormHelperText> */}
              </FormControl>
              <br />
              {/* AdapterHijri */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ m: 1, width: "15ch", textAlign: "right" }}
                  
                  disableMaskedInput={true}
                  label="التاريخ"
                  openTo="day"
                  inputFormat={"DD/MM/YYYY"}
                  views={["month", "year", "day"]}
                  value={valueDate}
                  onChange={(e) => {
                    setDataRequest({
                      ...dataRequest,
                      localDate: e.$d.toJSON().substring(0, 10),
                    });
                    setValueDate(e);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
          </div>
          <br />
          <input type="submit" value="Press" />

          
        </form>

        <button onClick={(e) => {

const fetchUsersss = async () => {
  let d = await axios.post("http://localhost:8080/test_data", dataProcessed);
  console.log("fun Call ... ");
};

fetchUsersss();
console.log("Yaoo")
console.log(dataProcessed)
e.preventDefault();

          }} >"Muhannad"</button>
       
      </div>

      <br />
      {dataProcessed && (
        <MuhannadTable
          data={dataProcessed}
          memorized={dataResponse["memorized"]}
          smallMemorized={dataResponse["smallMemorized"]}
          biggestMemorized={dataResponse["biggestMemorized"]}
        />
      )}
    </div>
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
