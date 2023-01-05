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
import rtlPlugin from 'stylis-plugin-rtl';


import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";


import Typography from '@mui/material/Typography';


import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FormHelperText from '@mui/material/FormHelperText';

import Input from '@mui/material/Input';



import "moment/locale/ar-sa";

import dayjs from "dayjs";

//import "./../index.css";

// import AdapterHijri from "@date-io/hijri";
// import AdapterJalaali from "@date-io/jalaali";

import Stack from "@mui/material/Stack";

import DataTable from "../body/DataTable";
import { withTheme } from "styled-components";
import { withEmotionCache } from "@emotion/react";
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
const getTechPlan = "https://api.almaher.org/getTechPlan";

const HeaderTab = (classes) => {
  const [textInput, setTextInput] = React.useState("");

  const [dataRequest, setDataRequest] = React.useState(data);
  const [dataResponse, setDataResponse] = React.useState([]);
  const [dataProcessed, setDataProcessed] = React.useState();

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
      console.log(" Request Data <<<:::>>> \n", dataRequest);
      setDataResponse(d.data);
      console.log("<<< - Response Data - >>> ::: \n", dataResponse);
    };

    console.log(dataRequest, "...")
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

        plans.push(dayPlan);
      }

      console.log("dataResponses :: ", dataResponse);
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

                      <FormLabel sx={{ textAlign: "center", color: "black" }} id="labelMemorized"> طريقة الحفظ </FormLabel>
                      <Select

                        labelId="labelMemorized"
                        sx={{ width: 215, height: 40, background: "white" }}
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
                                  console.log("Ayah number :: ", e.target.value);
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
                          console.log("value : ", e.target.value);
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
                          console.log("value : ", e.target.value);
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

              <Button type="submit" sx={{ mb: 1, width: 250 }} variant="contained">إنشاء الخطة</Button>
            </Box>
          </Grid>

        </Box>


        <Grid container direction="row" justifyContent="center" alignItems="center">

          <Button item variant="contained" sx={{ mr: 2.9, width: 112 }} onClick={(e) => {

            const fetchUsersss = async () => {
              let d = await axios.post(`https://api.almaher.org/printData/${dataRequest.printType}`, dataProcessed)

              console.log("fun i... ", d.data);
              const linkSource = `data:application/${dataRequest.printType};base64,${d.data}`;
              const downloadLink = document.createElement("a");
              const fileName = `plan.${dataRequest.printType}`;
              downloadLink.href = linkSource;
              downloadLink.download = fileName;
              downloadLink.click();

            };

            fetchUsersss();
            console.log(dataProcessed)
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
                console.log(e);
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
        <Grid><strong>شكراً لتواصلكم معنا تم حل مشكلة تحميل الخطط، في حال استمرت المشكلة في الظهور الرجاء التواصل معنا</strong></Grid>
        <Grid><strong> : ما زلنا نستقبل رسائلكم واقتراحاتكم</strong></Grid>
        <Grid><strong>Khalid492@gmail.com</strong>
        </Grid>
      </Grid>

      <br />
      {
        dataProcessed && (
          <DataTable
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
