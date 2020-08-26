import theme from '../constants/theme';

export const px = function px(n) {
  return typeof n === 'number' && n !== 0 ? n + 'px' : n;
};

export const mapToColor = ({ value, maxRating }) => {
  if (maxRating === 0 || value > maxRating) {
    return theme.surveyColors.red;
  }

  const frac = Math.floor((value / maxRating) * 100);

  if (frac <= 20) {
    return `${theme.surveyColors.red}, ${theme.surveyColors.red}`;
  } else if (frac > 20 && frac <= 40) {
    return `${theme.surveyColors.red}, ${theme.surveyColors.lightRed}`;
  } else if (frac > 40 && frac <= 60) {
    return `${theme.surveyColors.lightRed}, ${theme.surveyColors.orange}`;
  } else if (frac > 60 && frac <= 80) {
    return `${theme.surveyColors.orange}, ${theme.surveyColors.lightOrange}`;
  } else if (frac > 80 && frac < 100) {
    return `${theme.surveyColors.lightGreen}, ${theme.surveyColors.green}`;
  } else if (frac === 100) {
    return `${theme.surveyColors.green}, ${theme.surveyColors.green}`;
  } else {
    return `${theme.surveyColors.red}, ${theme.surveyColors.red}`;
  }
};
