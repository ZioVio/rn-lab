import React from 'react';
import { FlatList, StyleSheet, View, TouchableOpacity } from 'react-native';
import ShortCity from '../../../models/shortCity';
import { AppText } from '../../shared/Text';
import City from './City';

interface CitiesListProps {
  cities: ShortCity[];
  onCityPressed: (city: ShortCity) => void;
  loadingCities: boolean;
}

export default function CitiesList({ cities, onCityPressed, loadingCities }: CitiesListProps) {
  const renderItem = ({ item }: { item: ShortCity }) =>
    <TouchableOpacity onPress={() => onCityPressed(item)} testID={`CitiesList.City.${item.id}`}>
      <City city={item} />
    </TouchableOpacity>;

  const keyExtractor = (c: ShortCity) => c.id;
  const shouldShowNotFoundText = !loadingCities && !cities?.length;
  return (
    <View style={styles.list}>
      <FlatList data={cities} keyExtractor={keyExtractor} renderItem={renderItem} />
      {shouldShowNotFoundText && <NotFoundText />}
    </View>
  );
}

function NotFoundText() {
  return (
    <View style={styles.error} testID="CitiesList.NotFoundText">
      <AppText>No cities found</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 50,
  },
  list: {
    marginBottom: 60,
  },
});
