export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  AllFests?: string;
  NextFest?: string;
  Settings?: string;
  SelectedHoliday?: string;
};

export type TabAllFestsParamList = {
  TabAllFestsScreen: undefined;
  TabSelectedHolidayScreen: undefined;
};

export type TabSettingsParamList = {
  TabSettingsScreen: undefined;
};

export type TabNextFestParamList = {
  TabNextFestScreen: undefined;
  TabSelectedHolidayScreen: undefined;
};

export type TabSelectedHolidayParamList = {
  TabSelectedHolidayScreen: undefined;
};
