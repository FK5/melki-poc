import { Spin } from 'antd';
export default function Loading() {
  return (
    <Spin tip="Loading" size="large">
      <div className="content" />
    </Spin>
  );
}
