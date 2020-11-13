import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ShortCity from '../../../models/shortCity';
import { AppText } from '../../shared/Text';
import City from './City';

interface CitiesListProps {
  cities: ShortCity[];
}

export default function CitiesList({ cities }: CitiesListProps) {
  const renderItem = ({ item }: { item: ShortCity }) => <City city={item} />;
  return (
    <View style={styles.list}>
      {cities.length
        ? <FlatList data={cities} keyExtractor={(c: ShortCity) => c.id} renderItem={renderItem} />
        : <NotFoundText />}
    </View>
  );
}

function NotFoundText() {
  return (
    <View style={styles.error}>
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
