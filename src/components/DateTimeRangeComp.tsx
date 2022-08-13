import React from "react";
import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ctc from 'copy-to-clipboard';

export default function DateTimeRangeComp() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [text, setText] = useState('');

    const td = (n:number):string => {
        return ('0'+n).slice(-2);
    }

    const formatDate = (date:Date):string => {
        const mo = td(date.getMonth()+1);
        const d = td(date.getDate());
        const y = td(date.getFullYear());
        const h = td(((h = date.getHours()) => (h > 12) ? h - 12: (h === 0) ? 12: h)());
        const p = ((h = date.getHours()) => (h > 12) ? 'p': 'a')();
        const mi = td(date.getMinutes());
        return `${d}/${mo}/${y} ${h}:${mi}${p}`;
    }
    
    const formatText = (start: Date, end: Date) => {
        if (start > end) setText('');
        else setText(`PSHARE 304 UYZ-071 ${formatDate(start)} to ${formatDate(end)}`);
    }

    const setStart = (date: Date) => {
        setStartDate(date);
        formatText(date, endDate);
    }

    const setEnd = (date: Date) => {
        setEndDate(date);
        formatText(startDate, date);
    }

    const copy = async () => {
        ctc(text);
        alert('Text copied');
    }

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date:Date) => setStart(date)}
        selectsStart
        showTimeSelect
        startDate={startDate}
        endDate={endDate}
        dateFormat="MMMM d, yyyy h:mm aa"
        onFocus={(e) => e.target.readOnly = true}
      />
      <DatePicker
        selected={endDate}
        onChange={(date:Date) => setEnd(date)}
        selectsEnd
        showTimeSelect
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat="MMMM d, yyyy h:mm aa"
        onFocus={(e) => e.target.readOnly = true}
      />
      <p>{text}</p>
      <button onClick={copy} disabled={!text}>Copy To Clipboard</button>


    </>
  );
}


