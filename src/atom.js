import { atom } from "recoil";

export const selectedRegionState = atom({
  key: "selectedRegion",
  default: [],
});

export const selectedSportTypeState = atom({
  key: "selectedSportType",
  default: [],
});

export const selectedDisabilityTypeState = atom({
  key: "selectedDisabilityType",
  default: [],
});
export const selectedDateState = atom({
  key: "selectedDate",
  default: [],
});
export const selectedPriceState = atom({
  key: "selectedPrice",
  default: {},
  // default: { min: 0, max: 100000 },
});
