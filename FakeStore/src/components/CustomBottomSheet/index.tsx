import { StyleSheet, Text, Touchable, View } from 'react-native';
import React, { forwardRef, useCallback, useMemo } from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
  TouchableOpacity,
  useBottomSheetModal,
} from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/AntDesign';

export type Ref = BottomSheetModal;

interface CustomButtomSheetProps {
  children: React.ReactNode;
  title: string;
  snapPointsList?: string[];
}

const CustomButtomSheet = forwardRef<Ref, CustomButtomSheetProps>(
  (props, ref) => {
    const { children, title, snapPointsList } = props;
    const snapPoints = useMemo(
      () => snapPointsList || ['50%', '90%'],
      [snapPointsList]
    );
    const { dismiss } = useBottomSheetModal();

    const renderBottomSheetBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        />
      ),
      []
    );

    const renderHandleComponent = useCallback(
      () => (
        <BottomSheetView
          style={{
            backgroundColor: 'white',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingTop: 6,
            paddingBottom: 6,
            borderBottomWidth: 1,
            borderColor: '#666',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}
          >
            <TouchableOpacity
              style={{ position: 'absolute', left: 10 }}
              onPress={() => dismiss()}
            >
              <Icon
                name="close"
                size={22}
                color="#0a0a0a"
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#0a0a0a',
              }}
            >
              {title}
            </Text>
          </View>
        </BottomSheetView>
      ),
      []
    );

    return (
      <BottomSheetModal
        index={0}
        ref={ref}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={renderBottomSheetBackdrop}
        handleComponent={renderHandleComponent}
      >
        <BottomSheetView
          style={{
            backgroundColor: 'white',
            padding: 16,
            flex: 1,
          }}
        >
          {children}
        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);

export default CustomButtomSheet;

const styles = StyleSheet.create({});
