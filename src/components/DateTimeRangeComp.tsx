import React from "react";
import { useEffect, useRef, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateTimeRangeComp() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date:Date) => setStartDate(date)}
        selectsStart
        showTimeSelect
        startDate={startDate}
        endDate={endDate}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      <DatePicker
        selected={endDate}
        onChange={(date:Date) => setEndDate(date)}
        selectsEnd
        showTimeSelect
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
    </>
  );
    // return (
    //     <DatePicker
    //         selected={startDate}
    //         onChange={(date: Date) => setStartDate(date)}
    //         showTimeSelect
    //         dateFormat="MMMM d, yyyy h:mm aa"
    //     />
    // );
}


