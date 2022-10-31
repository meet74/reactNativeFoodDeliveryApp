/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-array-index-key */
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TopMenu from '../../../components/TopMenu';
import Input from '../../../components/Input';

import RestaurantCard from '../../../components/RestaurantCard';
import { RESTAURANTDETAILSCREEN } from '../../../navigation/componentsAndNames';
import { searchRestaurant } from '../../../store/actions/restaurantAction';
import colors from '../../../theme/colors';

function SearchScreen({ navigation }) {
  const restaurantData = useSelector((state) => state.restaurant);
  const authData = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const [searchedRestaurantData, setSearchedRestaurantData] = useState(
    restaurantData.searchedRestaurant
  );
  const [searchData, setsearchData] = useState('');

  useEffect(() => {
    if (searchData.length > 0) {
      setSearchedRestaurantData(restaurantData.searchedRestaurant);
    } else {
      setSearchedRestaurantData(restaurantData.allRestaurants);
    }
  }, [restaurantData.searchedRestaurant]);

  const searchHandler = (value) => {
    setsearchData(value);
    if (value.length === 0) {
      dispatch(
        searchRestaurant({
          restaurantName: '',
          city: '',
          token: authData.token,
        })
      );
    } else {
      dispatch(
        searchRestaurant({
          restaurantName: value,
          city: '',
          token: authData.token,
        })
      );
    }
  };
  console.log(searchedRestaurantData);
  return (
    <SafeAreaView className="flex-1 bg-displayWhite">
      <ScrollView>
        <KeyboardAvoidingView>
          <TopMenu title="Search" showRightIcon={false} />
          <View className="py-2">
            <Input
              value={searchData}
              icon={<FontAwesome name="search" size={16} color="black" />}
              placeholder="Search"
              onChangeText={searchHandler}
              externalInputFieldStyle="border border-displayLightGray"
            />
          </View>
          <Text className="text-black m-4 font-displayMedium text-lg">
            Top Restaurants
          </Text>
          {searchedRestaurantData.length ? (
            restaurantData.isFetching ? (
              <ActivityIndicator color={colors.primary} size={30} />
            ) : (
              searchedRestaurantData.map((restaurant, index) => (
                <View className="flex-1" key={index}>
                  <RestaurantCard
                    available={
                      !!restaurantData.allRestaurants.some(
                        (res) => res.id === restaurant.id
                      )
                    }
                    onPress={() =>
                      restaurantData.allRestaurants.some(
                        (res) => res.id === restaurant.id
                      ) &&
                      navigation.navigate(RESTAURANTDETAILSCREEN.name, {
                        restaurant,
                      })
                    }
                    restaurantName={restaurant.name}
                  />
                </View>
              ))
            )
          ) : (
            <Text className="text-primary self-center m-4 font-displayMedium text-lg">
              No Restaurants found
            </Text>
          )}
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SearchScreen;
