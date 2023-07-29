export interface Employee {
  id:                  number;
  first_name?:          string;
  last_name?:           string;
  username?:            string;
  email?:               string;
  gender?:              string;
  phone_number?:        string;
  date_of_birth?:       Date;
  employment?:          Employment;
  address?:             Address;
  subscription?:        Subscription;
  uuid?:                string;
  profile_picture_url?: string;
}

export interface Address {
  city:           string;
  street_name:    string;
  street_address: string;
  zip_code:       string;
  state:          string;
  country:        string;
  coordinates:    Coordinates;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Employment {
  title:     string;
  key_skill: string;
}

export interface Subscription {
  plan:           string;
  status:         string;
  payment_method: string;
  term:           string;
}


export type Inputs = {
  searchQuery: string;
};
