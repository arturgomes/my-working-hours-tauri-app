import { describe, it, expect } from 'vitest';
import {
  searchTimezones,
  getCitiesForTimezone,
  getCountryForTimezone,
} from './timezones';

describe('Timezone Search Functionality', () => {
  describe('searchTimezones', () => {
    it('should find timezone by city name - Munich', () => {
      const results = searchTimezones('munich');
      expect(results).toContain('Europe/Berlin');
    });

    it('should find timezone by city name - Barcelona', () => {
      const results = searchTimezones('barcelona');
      expect(results).toContain('Europe/Madrid');
    });

    it('should find timezone by city name - Porto', () => {
      const results = searchTimezones('porto');
      expect(results).toContain('Europe/Lisbon');
    });

    it('should find timezone by city name - Edinburgh', () => {
      const results = searchTimezones('edinburgh');
      expect(results).toContain('Europe/London');
    });

    it('should find timezone by city name - Belfast', () => {
      const results = searchTimezones('belfast');
      expect(results).toContain('Europe/London');
    });

    it('should find timezone by city name - Milan', () => {
      const results = searchTimezones('milan');
      expect(results).toContain('Europe/Rome');
    });

    it('should find timezone by city name - Frankfurt', () => {
      const results = searchTimezones('frankfurt');
      expect(results).toContain('Europe/Berlin');
    });

    it('should find timezone by city name - Calgary', () => {
      const results = searchTimezones('calgary');
      expect(results).toContain('America/Edmonton');
    });

    it('should find timezones by country - Germany', () => {
      const results = searchTimezones('germany');
      expect(results).toContain('Europe/Berlin');
    });

    it('should find timezones by country - Spain', () => {
      const results = searchTimezones('spain');
      expect(results).toContain('Europe/Madrid');
    });

    it('should find timezones by country - Canada', () => {
      const results = searchTimezones('canada');
      expect(results.length).toBeGreaterThan(5);
      expect(results).toContain('America/Toronto');
      expect(results).toContain('America/Vancouver');
      expect(results).toContain('America/Edmonton');
    });

    it('should find timezones by partial timezone name', () => {
      const results = searchTimezones('berlin');
      expect(results).toContain('Europe/Berlin');
    });

    it('should be case insensitive', () => {
      const resultsLower = searchTimezones('munich');
      const resultsUpper = searchTimezones('MUNICH');
      const resultsMixed = searchTimezones('MuNiCh');

      expect(resultsLower).toEqual(resultsUpper);
      expect(resultsLower).toEqual(resultsMixed);
    });

    it('should handle partial matches', () => {
      const results = searchTimezones('mun');
      expect(results).toContain('Europe/Berlin'); // Munich
    });

    it('should return empty array for empty query', () => {
      const results = searchTimezones('');
      expect(results).toEqual([]);
    });

    it('should handle queries with no matches', () => {
      const results = searchTimezones('xyz123notacity');
      expect(results).toEqual([]);
    });
  });

  describe('getCitiesForTimezone', () => {
    it('should return all cities for Europe/Berlin', () => {
      const cities = getCitiesForTimezone('Europe/Berlin');
      expect(cities).toContain('Berlin');
      expect(cities).toContain('Munich');
      expect(cities).toContain('Frankfurt');
      expect(cities).toContain('Hamburg');
    });

    it('should return all cities for Europe/Madrid', () => {
      const cities = getCitiesForTimezone('Europe/Madrid');
      expect(cities).toContain('Madrid');
      expect(cities).toContain('Barcelona');
      expect(cities).toContain('Seville');
    });

    it('should return all cities for Europe/London', () => {
      const cities = getCitiesForTimezone('Europe/London');
      expect(cities).toContain('London');
      expect(cities).toContain('Edinburgh');
      expect(cities).toContain('Belfast');
      expect(cities).toContain('Manchester');
    });

    it('should return capitalized city names', () => {
      const cities = getCitiesForTimezone('Europe/Berlin');
      cities.forEach(city => {
        expect(city[0]).toBe(city[0].toUpperCase());
      });
    });

    it('should return empty array for unknown timezone', () => {
      const cities = getCitiesForTimezone('Unknown/Timezone');
      expect(cities).toEqual([]);
    });
  });

  describe('getCountryForTimezone', () => {
    it('should return country for Europe/Berlin', () => {
      const country = getCountryForTimezone('Europe/Berlin');
      expect(country).toBe('Germany');
    });

    it('should return country for Europe/Madrid', () => {
      const country = getCountryForTimezone('Europe/Madrid');
      expect(country).toBe('Spain');
    });

    it('should return country for America/Edmonton', () => {
      const country = getCountryForTimezone('America/Edmonton');
      expect(country).toBe('Canada');
    });

    it('should return country for America/New_York', () => {
      const country = getCountryForTimezone('America/New_York');
      expect(country).toBe('United States');
    });

    it('should return undefined for unknown timezone', () => {
      const country = getCountryForTimezone('Unknown/Timezone');
      expect(country).toBeUndefined();
    });
  });
});
