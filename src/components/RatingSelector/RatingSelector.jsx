import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import {appStyles} from '../../themes/Common-theme';

const RatingSelector = ({onChange, defaultRating}) => {
  return (
    <View style={styles.container}>
      <Rating
        type="custom"
        defaultRating={defaultRating}
        startingValue={0}
        ratingBackgroundColor={appStyles.Text.color}
        tintColor={appStyles.cardContainer.color}
        ratingColor={appStyles.main.backgroundColor}
        ratingTextColor={appStyles.Text.color}
        ratingCount={5}
        imageSize={50}
        showRating
        fractions={1}
        minValue={0}
        onSwipeRating={rating => onChange(rating)}
        onFinishRating={rating => onChange(rating)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: appStyles.Text.color,
    backgroundColor: appStyles.cardContainer.color,
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 33,
    paddingVertical: 10,
  },
});

export default RatingSelector;
