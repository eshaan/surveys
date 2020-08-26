import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../constants/theme';

const Question = ({ questionDesc }) => {
  return <div>{questionDesc}</div>;
};

Question.propTypes = {
  questionDesc: PropTypes.string,
  questionType: PropTypes.string
};

export default Question;
