import { View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../store/actions/authActions';
import { AUTH, INITIALPAGE } from '../../../navigation/componentsAndNames';
import Button from '../../../components/Button';

function ProfileScreen({ navigation }) {
  const dispatch = useDispatch();
  return (
    <View className="flex-1 bg-background items-center justify-center">
      <Button
        title="Log Out"
        onPress={() => {
          dispatch(logOut());
          navigation.replace(AUTH.name, { screen: INITIALPAGE.name });
        }}
      />
    </View>
  );
}

export default ProfileScreen;
