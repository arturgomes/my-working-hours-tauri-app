import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { TimezoneData, CitySearchResult } from '../../types';
import {
  searchTimezones,
  getCitiesForTimezone,
  getCountryForTimezone,
  TIMEZONE_CITY_MAP
} from '../../data/timezones';

export const timezoneApi = createApi({
  reducerPath: 'timezoneApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://worldtimeapi.org/api',
  }),
  tagTypes: ['Timezone'],
  endpoints: (builder) => ({
    getTimezones: builder.query<string[], void>({
      query: () => '/timezone',
      providesTags: ['Timezone'],
    }),
    getTimezoneData: builder.query<TimezoneData, string>({
      query: (timezone) => `/timezone/${timezone}`,
      providesTags: (_result, _error, timezone) => [
        { type: 'Timezone', id: timezone },
      ],
    }),
    searchCities: builder.query<CitySearchResult[], string>({
      queryFn: async (query: string) => {
        if (!query.trim()) return { data: [] };

        try {
          // Try API first
          const response = await fetch('https://worldtimeapi.org/api/timezone');
          if (!response.ok) throw new Error('API failed');

          const timezones = await response.json();
          const filtered = timezones
            .filter((tz: string) =>
              tz.toLowerCase().includes(query.toLowerCase()) ||
              tz.split('/').some((part: string) =>
                part.toLowerCase().includes(query.toLowerCase())
              )
            )
            .slice(0, 10)
            .map((timezone: string) => {
              const parts = timezone.split('/');
              const city = parts[parts.length - 1].replace(/_/g, ' ');
              const region = parts.length > 1 ? parts[0] : '';

              return {
                timezone,
                city,
                country: region,
                display_name: `${city}${region ? ` (${region})` : ''}`
              };
            });

          return { data: filtered };
        } catch {
          // Fallback to enhanced static data with city/country search
          const matchedTimezones = searchTimezones(query);

          const results = matchedTimezones
            .slice(0, 15) // Increased limit for better results
            .map(timezone => {
              const cityData = TIMEZONE_CITY_MAP[timezone];
              const cities = getCitiesForTimezone(timezone);
              const country = getCountryForTimezone(timezone);

              // Use the primary city from TIMEZONE_CITY_MAP or the first city
              const primaryCity = cityData?.city || cities[0] || timezone.split('/').pop()?.replace(/_/g, ' ') || '';
              const countryName = cityData?.country || country || '';

              // Create display name with all cities if multiple
              const cityDisplay = cities.length > 1
                ? `${primaryCity} (+ ${cities.length - 1} more)`
                : primaryCity;

              return {
                timezone,
                city: primaryCity,
                country: countryName,
                display_name: `${cityDisplay}${countryName ? ` - ${countryName}` : ''}`,
                allCities: cities, // Include all cities for reference
              };
            })
            // Sort by relevance: exact city matches first, then timezone matches
            .sort((a, b) => {
              const queryLower = query.toLowerCase();
              const aCityMatch = a.city.toLowerCase().includes(queryLower);
              const bCityMatch = b.city.toLowerCase().includes(queryLower);

              if (aCityMatch && !bCityMatch) return -1;
              if (!aCityMatch && bCityMatch) return 1;

              // Then by country match
              const aCountryMatch = a.country.toLowerCase().includes(queryLower);
              const bCountryMatch = b.country.toLowerCase().includes(queryLower);

              if (aCountryMatch && !bCountryMatch) return -1;
              if (!aCountryMatch && bCountryMatch) return 1;

              return 0;
            });

          return { data: results };
        }
      },
      providesTags: ['Timezone'],
    }),
  }),
});

export const {
  useGetTimezonesQuery,
  useGetTimezoneDataQuery,
  useSearchCitiesQuery,
  useLazySearchCitiesQuery,
} = timezoneApi;