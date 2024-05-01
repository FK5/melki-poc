'use client';
import { Calendar as CalendarComp } from 'antd';
import { Spin } from 'antd';

export default function Calendar() {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return (
    <div className="flex flex-col gap-4 flex-shrink-0 flex-grow-0 flex-basis-auto border-2 border-b-gray bg-white rounded-lg py-4 px-4 ">
      <CalendarComp onPanelChange={onPanelChange} />
    </div>
  );
}
