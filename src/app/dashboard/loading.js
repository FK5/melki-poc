import { Spin } from 'antd';
export default function Loading() {
  return (
    <div className="flex flex-col gap-4 h-full justify-center flex-shrink-0 flex-grow-0 flex-basis-auto border-2 border-b-gray bg-white rounded-lg py-4 px-4 ">
      <Spin className="justify-center items-center h-full" tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </div>
  );
}
