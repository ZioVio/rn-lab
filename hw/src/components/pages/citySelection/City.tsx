import React from 'react';
import { StyleSheet, View } from 'react-native';
import getReadableStateName from '../../../helpers/getReadableWeatherState';
import ShortCity from '../../../models/shortCity';
import { AppText, AppTextSecondary } from '../../shared/Text';
import sharedStyles from '../../../helpers/styles';

interface CityProps {
  city: ShortCity;
}

export default function City(props: CityProps) {
  const weatherState: string = getReadableStateName(props.city.weatherState);
  return (
    <View style={styles.container}>
      <View style={styles.temperature}>
        <AppText size={60}>{props.city.temperature}°</AppText>
      </View>
      <View style={styles.details}>
        <AppText>{props.city.name}</AppText>
        <AppTextSecondary>{weatherState && ('// ' + weatherState.toUpperCase())}</AppTextSecondary>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    ...sharedStyles.bottomDivider,
    paddingVertical: 15,
  },
  temperature: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
  },
  details: {
    justifyContent: 'center',
    // alignItems: 'center',
    flex: 4,
  },
});
