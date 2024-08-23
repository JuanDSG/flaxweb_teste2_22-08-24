
// ---------- import Packs
import React from 'react';
import { View } from 'react-native';

// ---------- import Local Tools
import { argSel, getStlValues, mapElements, pathSel } from '../project';
import { useData } from '../../..';

export const css =
  'color: lightblue; background-color: black; font-size: 11px; padding: 2px 6px; border-radius: 3px';

type Tprops = {
  pass: {
    elementsProperties: any;
    styles: any;
    variablePath: string[];
    expectedVal: string[];
    childrenItems: any;
    args: any;
  };
};

// DynView - ccc_dynView Com Esquema Join Leitura de Var. (newBase)
export const DynView = (props: Tprops) => {
  return <View></View>;
};

