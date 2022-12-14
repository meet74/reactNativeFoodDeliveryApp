/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import BottomSheet from 'react-native-raw-bottom-sheet';
import Entypo from 'react-native-vector-icons/Entypo';

import Button from '../Button';
import TopMenu from '../TopMenu';

const internalStyle = StyleSheet.create({
  icon: {
    alignSelf: 'flex-end',
    right: 0,
    top: 0,
  },
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  draggableIcon: {
    backgroundColor: '#000',
  },
  sheetContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  //   extraButtonTextStyle:{
  //     color:colors.theme.bottleGreen,
  //     fontFamily:typography.fontFamily.grtskteraMedium,
  //     fontSize:normalize(18)
  //   }
});
function Sheet(props) {
  const submitHandler = () => {
    props.sheetRef.current.close();
  };

  const className = {
    container: 'grow m-5',
    titleText: 'text-black text-xl ',
    extraButtonStyle:
      'items-center self-center justify-center flex-1 mb-10 mt-5 bg-gray',
  };
  return (
    <BottomSheet
      ref={props.sheetRef}
      animationType="fade"
      closeOnPressMask={false}
      height={props.height}
      customStyles={{
        wrapper: internalStyle.wrapper,
        draggableIcon: internalStyle.draggableIcon,
        container: internalStyle.sheetContainer,
      }}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        className={className.container}
        scrollEnabled>
        <View className="flex-row justify-between items-center">
          <TopMenu title="Enter new Address" showRightIcon={false} />
          <TouchableOpacity onPress={() => submitHandler()}>
            <Entypo
              name="cross"
              size={24}
              color="gray"
              style={internalStyle.icon}
            />
          </TouchableOpacity>
        </View>
        {props.title !== '' ? (
          <Text className={className.titleText}>{props.title}</Text>
        ) : null}
        {props.children}
        {props.showButton ? (
          <Button
            title={props.buttonTitle}
            disabledTitle={props.disabledTitle}
            externalButtonStyle={
              {
                //   backgroundColor: props.buttonBGColor,
                //   width: SCREEN_WIDTH * 0.9,
                //   alignSelf: 'center',
              }
            }
            externalTextstyle={{
              color: props.buttonTextColor,
            }}
            loading={props.loading}
            onPress={props.onButtonPress}
          />
        ) : null}
        {props.showExtraButton && (
          <Button
            title={props.extraButtonTitle}
            disabledTitle={props.disabledExtraTitle}
            externalButtonStyle={
              {
                //   backgroundColor: colors.theme.gray1,
                //   width: SCREEN_WIDTH * 0.9,
                //   alignSelf: 'center',
                //   marginTop: 0,
              }
            }
            loading={props.extraButtonLoading}
            externalTextstyle={
              {
                //   color: "black",
              }
            }
            onPress={props.onPressExtraButton}
          />
        )}
      </ScrollView>
    </BottomSheet>
  );
}

export default Sheet;
