import React from 'react';
import Gender from './genderMUI';

export default {
    title: 'Gender',
    component: Gender,
  };

const selectData = [
  {
    name: 'Male',
    choice: 'Choose if assigned Male at birth',
    image: <img className="center" src="path/to/male.png" alt="male" />,
  },
  // Add more data for other options
];

export const Default = () => (
    <Gender title="What was your gender assignment at birth?" select={selectData} />
  );