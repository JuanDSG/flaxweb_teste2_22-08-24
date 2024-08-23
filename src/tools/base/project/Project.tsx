
// ---------- import React Packs
import React from 'react';
import * as RN from 'react-native';
// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Platform, View } from 'react-native';

// ---------- import Variables Pack

// ---------- import Local Tools
import { mapElements } from './mapElements';

// ---------- set Caps Inputs
type Tprops = {
  configData: {
    screens: any[];
    initCt: Record<string, any>;
    arrInitFuncs: (() => void)[];
  };
};

// ---------- set Main Component
export const Project = ({ configData }: Tprops) => {
  // ---------- set Data
  const { screens, arrInitFuncs } = configData;

  // ---------- call Functions (If Exists)
  React.useEffect(() => {
    const callFn = async () => {
      for (const currFunc of arrInitFuncs) await currFunc();
    };

    callFn().catch(err => console.log('Project Start Functions', { err }));
  }, []);

  const condWeb = Platform.OS === 'web';

  const baseStl: RN.ViewStyle = {
    flexDirection: 'column',
    width: '100%',
    // @ts-ignore Juan: to work on web
    // height: condWeb ? '100vh' : '100%',
    height: '100%',
    backgroundColor:'red'
  };

  return (
    <RN.View style={baseStl}>
      <SafeAreaView
        style={{ width: '100%', height: '100%', overflow: 'hidden' }}
      >
        {!condWeb && <View style={{ height: 30 }} />}

        {mapElements(screens)}

        {/* <StatusBar style="light" /> */}
      </SafeAreaView>
    </RN.View>
  );
};

