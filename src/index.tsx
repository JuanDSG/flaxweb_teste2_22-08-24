

//
 
        // ---------- import React Packs
        import React from 'react';
        import * as RN from 'react-native';

        // ---------- import Variables Pack
        import { create } from 'zustand';

        // ---------- import Local Tools
        import { Project } from './src/tools/base/project/';

        // ---------- set Caps Inputs
        const currRoute = 'home';

        let args: any = [];

        const screens = [
          []
        ];

        const initCt = () => ({
          true: "true"
        });
        const initObj = initCt();
        // console.log(initObj);

        const arrInitFuncs = [
          ()=>{}
        ];

        export const useRoutes = create(() => ({ currRoute }));
        export const useData = create(() => initObj);

        // ---------- set Main Component
        export const Router = () => {
          return (
            <Project
              configData={{
                screens,
                initCt,
                arrInitFuncs,
              }}
            />
          );
        };
        
