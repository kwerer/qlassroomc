import React, { useState, useEffect } from "react";
import moment from "moment";
import { Container, Segment, Button, Icon, Table } from "semantic-ui-react";
import styles from "../styles.module.css";
import "../SubjectDashboard.css";
import { useSelector, useDispatch } from "react-redux";

function ReviewTabCalender() {
  let dispatch = useDispatch();
  let weekdayShort = moment.weekdaysShort();

  const [dataObject, setDataObject] = useState(moment());
  const [selectedDay, setSelectedDay] = useState(0);
  let dataObjects = dataObject;

  function firstDayOfMonth() {
    let firstDay = moment(dataObjects).startOf("month").format("d"); //day of week 0 is sunday ... 6 in saturday
    return firstDay;
  }
  /*year */
  function Year() {
    return dataObjects.format("Y");
  }
  function Month() {
    return dataObjects.format("MMMM");
  }
  function DaysInMonth() {
    return dataObjects.daysInMonth();
  }
  function CurrentDate() {
    return dataObjects.get("date");
  }
  function CurrentDay() {
    return dataObjects.format("DD");
  }

  function nextMonth() {
    let dataObjects = Object.assign({}, dataObject);
    dataObjects = moment(dataObject).add(1, "month");
    setDataObject(dataObjects);
  }
  function prevMonth() {
    let dataObjects = Object.assign({}, dataObject);
    dataObjects = moment(dataObject).subtract(1, "month");
    setDataObject(dataObjects);
  }

  /*create blank area for the previous month's dates*/
  let blanks = [];
  for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(<Table.Cell className={"NotToday"}>{""}</Table.Cell>);
  }

  /*create list for days of the month*/
  let daysInMonth = [];
  for (let d = 1; d <= DaysInMonth(); d++) {
    /*add terenary opertator here to styles for selected day */
    let className =
      d === CurrentDate() &&
      Month() === moment().format("MMMM") &&
      Year() === moment().format("Y")
        ? "Today"
        : "NotToday";
    daysInMonth.push(
      <Table.Cell className={className}>
        <span
          className={
            d === CurrentDate() &&
            Month() === moment().format("MMMM") &&
            Year() === moment().format("Y")
              ? "TodayDiv"
              : "NotTodayDiv"
          }
          key={d}
          onClick={() => onDayClick(d)}
        >
          {d}
        </span>
      </Table.Cell>
    );
  }

  let totalSlots = [...blanks, ...daysInMonth]; // totalSlots is an addition of blanks + daysInMonth, every 7 would be a saturday
  let rows = [];
  let cells = [];

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      let insertRow = cells.slice();
      rows.push(insertRow);
      cells = [];
      cells.push(row);
    }
    if (i === totalSlots.length - 1) {
      let insertRow = cells.slice();
      rows.push(insertRow);
    }
  });
  /*loop list for weekdays*/
  let trElems = rows.map((d, i) => {
    return <Table.Row>{d}</Table.Row>;
  });
  /*loop list for weekdays header*/
  let weekdays = weekdayShort.map((day) => {
    return (
      <Table.HeaderCell key={day} className={styles.ReviewTabTableHeader}>
        {day}
      </Table.HeaderCell>
    );
  });

  /*get the selected date*/
  function onDayClick(d) {
    setSelectedDay(d);
    console.log(d);
  }

  return (
    <>
      <Segment className={styles.ReviewTabDropdownHeaderSegment}>
        <Button
          icon
          type="button"
          className={styles.ReviewTabDropdownHeaderSegmentButton}
          onClick={prevMonth}
        >
          <Icon name="triangle left" />
        </Button>
        <div className={styles.ReviewTabHeaderSegmentMonth}>
          {`${Month()}   
          ${Year()}`}
        </div>
        <Button
          icon
          type="button"
          className={styles.ReviewTabDropdownHeaderSegmentButton}
          onClick={nextMonth}
        >
          <Icon name="triangle right" />
        </Button>
      </Segment>

      <Table className={styles.ReviewTabCalenderOverallTable}>
        <Table.Body>
          <Table.Row>{weekdays}</Table.Row>
          {trElems}
        </Table.Body>
      </Table>
    </>
  );
}

export default ReviewTabCalender;
