// SPDX-FileCopyrightText: 2023 Double Open Oy
//
// SPDX-License-Identifier: MIT

// This is an example of a store that uses zustand, storing the theme of the app.
// (The theme is persisted by next-themes anyway, so this is only here for a future use.)

import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
    appTheme: string;
    treeWidth: number;
};

type Actions = {
    setAppTheme: (appTheme: string) => void;
    setTreeWidth: (treeWidth: number) => void;
};

const useSettingsStore = create<State & Actions>()(
    persist(
        (set) => ({
            appTheme: "light",
            setAppTheme: (appTheme: string) => set({ appTheme }),
            treeWidth: 300,
            setTreeWidth: (treeWidth: number) => set({ treeWidth }),
        }),
        {
            name: "theme-storage",
        },
    ),
);

export default useSettingsStore;