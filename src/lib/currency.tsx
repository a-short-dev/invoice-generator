import {
  US,
  NG,
  EU,
  JP,
  KR,
  IL,
  VN,
  BD,
  RU,
  BR,
  UA,
  KZ,
  TW,
  GB,
  FlagComponent,
  ID,
} from "country-flag-icons/react/1x1";

export const currencyList: {
  value: string;
  label: string;
  details: {
    country: string;
    currencySymbol: string;
    currencyName: string;
    currencyShortForm: string;
    icon: FlagComponent;
    iconName: string;
  };
}[] = [
  {
    value: "NGN",
    label: "NGN",
    details: {
      country: "Nigeria",
      currencySymbol: "₦",
      currencyName: "Nigerian Naira",
      currencyShortForm: "NGN",
      icon: NG,
      iconName: "NG",
    },
  },
  {
    value: "USD",
    label: "USD",
    details: {
      country: "United States",
      currencySymbol: "$",
      currencyName: "United States Dollar",
      currencyShortForm: "USD",
      icon: US,
      iconName: "US",
    },
  },
  {
    value: "EUR",
    label: "EUR",
    details: {
      country: "European Union",
      currencySymbol: "€",
      currencyName: "Euro",
      currencyShortForm: "EUR",
      icon: EU,
      iconName: "EU",
    },
  },
  {
    value: "GBP",
    label: "GBP",
    details: {
      country: "United Kingdom",
      currencySymbol: "£",
      currencyName: "British Pound Sterling",
      currencyShortForm: "GBP",
      icon: GB,
      iconName: "GB",
    },
  },
];
