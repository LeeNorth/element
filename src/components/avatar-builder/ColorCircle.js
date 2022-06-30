import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../theme/ThemeContext';
import { ButtonPressAnimation } from '../animations';

const ColorCircle = ({ backgroundColor, isSelected, onPressColor }) => {
  const { colors } = useTheme();

  return (
    <View align="center" height={42} justify="center" width={40}>
      <ButtonPressAnimation
        alignSelf="center"
        duration={100}
        enableHapticFeedback
        justifyContent="center"
        onPress={onPressColor}
        scaleTo={0.7}
        width={40}
      >
        <View
          alignSelf="center"
          backgroundColor={backgroundColor}
          borderRadius={15}
          height={24}
          isSelected={isSelected}
          shadowColor={colors.shadowBlack}
          shadowOffset={{ height: 4, width: 0 }}
          shadowOpacity={0.2}
          shadowRadius={5}
          width={24}
        />
      </ButtonPressAnimation>
    </View>
  );
};

ColorCircle.propTypes = {
  backgroundColor: PropTypes.string,
  isSelected: PropTypes.bool,
  onPressColor: PropTypes.func,
};

ColorCircle.defaultProps = {
  backgroundColor: 'blue',
  isSelected: false,
};

export default ColorCircle;