
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

  return <RN.Text>{'Tem alguém aí?'}</RN.Text>;
  return (
    <RN.View style={{ flexDirection: 'column', width: '100%' }}>
      <SafeAreaView
        style={{ width: '100%', height: '100%', overflow: 'hidden' }}
      >
        {Platform.OS !== 'web' && (
          <View style={{ height: 30, backgroundColor: '#450b2c' }} />
        )}

        {mapElements(screens)}

        {/* <StatusBar style="light" /> */}
      </SafeAreaView>
    </RN.View>
  );
};

