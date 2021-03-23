import React from 'react';
import Badge from '.';
import '../../styles/stories.scss';

export default {
  title: 'Badge',
  component: Badge
};
const style = {
  width: '50px',
  height: '50px',
  backgroundColor: '#f2f3f5',
  borderRadius: '8px'
};
const Child = () => {
  return <div style={style} />;
};
const Basic = () => {
  return (
    <Badge content={12} max={99}>
      <Child />
    </Badge>
  );
};
const BasicHigher = () => {
  return (
    <Badge content={120} max={99}>
      <Child />
    </Badge>
  );
};
const Color = () => {
  return (
    <Badge content='120' max='102' color='#1989FA'>
      <Child />
    </Badge>
  );
};
const Dot = () => {
  return (
    <Badge content={120} max={99} color='#1989FA' dot>
      <Child />
    </Badge>
  );
};
const FCContent = () => {
  return <div>FCContent</div>;
};
const WithFC = () => {
  return (
    <Badge content={FCContent} max={99} color='#1989FA'>
      <Child />
    </Badge>
  );
};
class ClassContent extends React.Component {
  render() {
    return <div>ClassContent</div>;
  }
}
const WithClass = () => {
  return (
    <Badge content={ClassContent} max={99} color='#1989FA'>
      <Child />
    </Badge>
  );
};
export const All = () => {
  return (
    <div className='storybook__container badge'>
      <Basic />
      <BasicHigher />
      <Color />
      <Dot />
      <WithFC />
      <WithClass />
    </div>
  );
};
