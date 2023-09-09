import React from "react";
import { Platform, StatusBar, Text, View } from "react-native";
import { Bars3CenterLeftIcon } from "react-native-heroicons/outline";
import { SafeAreaView } from "react-native-safe-area-context";

const ios = Platform.OS = 'ios'

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-neutral-500">
       <SafeAreaView className={ios? "-mb-2" : 'mb-3' }>
          <StatusBar barStyle={} style="light" />
          <View className="flex-row justify-between items-center mx-4">
            <Bars3CenterLeftIcon />
          </View>
       </SafeAreaView>
    </View>
  )
}