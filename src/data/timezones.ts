// City to timezone mapping for search functionality
export const CITY_TO_TIMEZONE_MAP: Record<string, string> = {
  'new york': 'America/New_York',
  'boston': 'America/New_York',
  'miami': 'America/New_York',
  'atlanta': 'America/New_York',
  'philadelphia': 'America/New_York',
  'detroit': 'America/Detroit',
  'chicago': 'America/Chicago',
  'dallas': 'America/Chicago',
  'houston': 'America/Chicago',
  'denver': 'America/Denver',
  'salt lake city': 'America/Denver',
  'phoenix': 'America/Phoenix',
  'los angeles': 'America/Los_Angeles',
  'seattle': 'America/Los_Angeles',
  'san diego': 'America/Los_Angeles',
  'san francisco': 'America/Los_Angeles',
  'anchorage': 'America/Anchorage',
  'adak': 'America/Adak',
  'honolulu': 'Pacific/Honolulu',
  'toronto': 'America/Toronto',
  'montreal': 'America/Montreal',
  'halifax': 'America/Halifax',
  'winnipeg': 'America/Winnipeg',
  'regina': 'America/Regina',
  'edmonton': 'America/Edmonton',
  'calgary': 'America/Edmonton',
  'vancouver': 'America/Vancouver',
  "st. john's": 'America/St_Johns',
  'st johns': 'America/St_Johns',
  'london': 'Europe/London',
  'edinburgh': 'Europe/London',
  'belfast': 'Europe/London',
  'manchester': 'Europe/London',
  'dublin': 'Europe/Dublin',
  'lisbon': 'Europe/Lisbon',
  'porto': 'Europe/Lisbon',
  'paris': 'Europe/Paris',
  'lyon': 'Europe/Paris',
  'marseille': 'Europe/Paris',
  'berlin': 'Europe/Berlin',
  'munich': 'Europe/Berlin',
  'frankfurt': 'Europe/Berlin',
  'hamburg': 'Europe/Berlin',
  'amsterdam': 'Europe/Amsterdam',
  'rotterdam': 'Europe/Amsterdam',
  'brussels': 'Europe/Brussels',
  'antwerp': 'Europe/Brussels',
  'luxembourg': 'Europe/Luxembourg',
  'madrid': 'Europe/Madrid',
  'barcelona': 'Europe/Madrid',
  'seville': 'Europe/Madrid',
  'rome': 'Europe/Rome',
  'milan': 'Europe/Rome',
  'naples': 'Europe/Rome',
  'vienna': 'Europe/Vienna',
  'zurich': 'Europe/Zurich',
  'geneva': 'Europe/Zurich',
  'prague': 'Europe/Prague',
  'warsaw': 'Europe/Warsaw',
  'kraków': 'Europe/Warsaw',
  'krakow': 'Europe/Warsaw',
  'budapest': 'Europe/Budapest',
  'bucharest': 'Europe/Bucharest',
  'athens': 'Europe/Athens',
  'stockholm': 'Europe/Stockholm',
  'copenhagen': 'Europe/Copenhagen',
  'oslo': 'Europe/Oslo',
  'helsinki': 'Europe/Helsinki',
  'tallinn': 'Europe/Tallinn',
  'riga': 'Europe/Riga',
  'vilnius': 'Europe/Vilnius',
  'belgrade': 'Europe/Belgrade',
  'zagreb': 'Europe/Zagreb',
  'ljubljana': 'Europe/Ljubljana',
  'bratislava': 'Europe/Bratislava',
  'sofia': 'Europe/Sofia',
  'kyiv': 'Europe/Kiev',
  'kiev': 'Europe/Kiev',
  'moscow': 'Europe/Moscow',
  'mexico city': 'America/Mexico_City',
  'são paulo': 'America/Sao_Paulo',
  'sao paulo': 'America/Sao_Paulo',
  'buenos aires': 'America/Buenos_Aires',
  'tokyo': 'Asia/Tokyo',
  'seoul': 'Asia/Seoul',
  'shanghai': 'Asia/Shanghai',
  'hong kong': 'Asia/Hong_Kong',
  'singapore': 'Asia/Singapore',
  'manila': 'Asia/Manila',
  'bangkok': 'Asia/Bangkok',
  'jakarta': 'Asia/Jakarta',
  'kuala lumpur': 'Asia/Kuala_Lumpur',
  'mumbai': 'Asia/Mumbai',
  'kolkata': 'Asia/Kolkata',
  'dubai': 'Asia/Dubai',
  'tehran': 'Asia/Tehran',
  'baghdad': 'Asia/Baghdad',
  'riyadh': 'Asia/Riyadh',
  'tel aviv': 'Asia/Tel_Aviv',
  'sydney': 'Australia/Sydney',
  'melbourne': 'Australia/Melbourne',
  'brisbane': 'Australia/Brisbane',
  'perth': 'Australia/Perth',
  'auckland': 'Pacific/Auckland',
  'cairo': 'Africa/Cairo',
  'lagos': 'Africa/Lagos',
  'nairobi': 'Africa/Nairobi',
  'johannesburg': 'Africa/Johannesburg',
  'casablanca': 'Africa/Casablanca',
};

export const COUNTRY_TO_TIMEZONES_MAP: Record<string, string[]> = {
  'united states': ['America/New_York', 'America/Detroit', 'America/Chicago', 'America/Denver', 'America/Phoenix', 'America/Los_Angeles', 'America/Anchorage', 'America/Adak', 'Pacific/Honolulu'],
  'usa': ['America/New_York', 'America/Detroit', 'America/Chicago', 'America/Denver', 'America/Phoenix', 'America/Los_Angeles', 'America/Anchorage', 'America/Adak', 'Pacific/Honolulu'],
  'us': ['America/New_York', 'America/Detroit', 'America/Chicago', 'America/Denver', 'America/Phoenix', 'America/Los_Angeles', 'America/Anchorage', 'America/Adak', 'Pacific/Honolulu'],
  'canada': ['America/Toronto', 'America/Montreal', 'America/Halifax', 'America/Winnipeg', 'America/Regina', 'America/Edmonton', 'America/Vancouver', 'America/St_Johns'],
  'united kingdom': ['Europe/London'],
  'uk': ['Europe/London'],
  'ireland': ['Europe/Dublin'],
  'portugal': ['Europe/Lisbon'],
  'france': ['Europe/Paris'],
  'germany': ['Europe/Berlin'],
  'netherlands': ['Europe/Amsterdam'],
  'belgium': ['Europe/Brussels'],
  'luxembourg': ['Europe/Luxembourg'],
  'spain': ['Europe/Madrid'],
  'italy': ['Europe/Rome'],
  'austria': ['Europe/Vienna'],
  'switzerland': ['Europe/Zurich'],
  'czech republic': ['Europe/Prague'],
  'poland': ['Europe/Warsaw'],
  'hungary': ['Europe/Budapest'],
  'romania': ['Europe/Bucharest'],
  'greece': ['Europe/Athens'],
  'sweden': ['Europe/Stockholm'],
  'denmark': ['Europe/Copenhagen'],
  'norway': ['Europe/Oslo'],
  'finland': ['Europe/Helsinki'],
  'estonia': ['Europe/Tallinn'],
  'latvia': ['Europe/Riga'],
  'lithuania': ['Europe/Vilnius'],
  'serbia': ['Europe/Belgrade'],
  'croatia': ['Europe/Zagreb'],
  'slovenia': ['Europe/Ljubljana'],
  'slovakia': ['Europe/Bratislava'],
  'bulgaria': ['Europe/Sofia'],
  'ukraine': ['Europe/Kiev'],
  'russia': ['Europe/Moscow'],
  'mexico': ['America/Mexico_City'],
  'brazil': ['America/Sao_Paulo'],
  'argentina': ['America/Buenos_Aires'],
  'japan': ['Asia/Tokyo'],
  'south korea': ['Asia/Seoul'],
  'korea': ['Asia/Seoul'],
  'china': ['Asia/Shanghai'],
  'hong kong': ['Asia/Hong_Kong'],
  'singapore': ['Asia/Singapore'],
  'philippines': ['Asia/Manila'],
  'thailand': ['Asia/Bangkok'],
  'indonesia': ['Asia/Jakarta'],
  'malaysia': ['Asia/Kuala_Lumpur'],
  'india': ['Asia/Mumbai', 'Asia/Kolkata'],
  'uae': ['Asia/Dubai'],
  'iran': ['Asia/Tehran'],
  'iraq': ['Asia/Baghdad'],
  'saudi arabia': ['Asia/Riyadh'],
  'israel': ['Asia/Tel_Aviv'],
  'australia': ['Australia/Sydney', 'Australia/Melbourne', 'Australia/Brisbane', 'Australia/Perth'],
  'new zealand': ['Pacific/Auckland'],
  'egypt': ['Africa/Cairo'],
  'nigeria': ['Africa/Lagos'],
  'kenya': ['Africa/Nairobi'],
  'south africa': ['Africa/Johannesburg'],
  'morocco': ['Africa/Casablanca'],
};

/**
 * Search for timezones by city, country, or timezone name
 * @param query Search query (case-insensitive)
 * @returns Array of matching timezone identifiers
 */
export function searchTimezones(query: string): string[] {
  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) {
    return [];
  }

  const results = new Set<string>();

  if (COMMON_TIMEZONES.includes(query)) {
    results.add(query);
  }

  COMMON_TIMEZONES.forEach(tz => {
    if (tz.toLowerCase().includes(normalizedQuery)) {
      results.add(tz);
    }
  });

  const cityMatch = CITY_TO_TIMEZONE_MAP[normalizedQuery];
  if (cityMatch) {
    results.add(cityMatch);
  }

  Object.entries(CITY_TO_TIMEZONE_MAP).forEach(([city, tz]) => {
    if (city.includes(normalizedQuery)) {
      results.add(tz);
    }
  });

  const countryTimezones = COUNTRY_TO_TIMEZONES_MAP[normalizedQuery];
  if (countryTimezones) {
    countryTimezones.forEach(tz => results.add(tz));
  }

  Object.entries(COUNTRY_TO_TIMEZONES_MAP).forEach(([country, timezones]) => {
    if (country.includes(normalizedQuery)) {
      timezones.forEach(tz => results.add(tz));
    }
  });

  return Array.from(results);
}

/**
 * Get all cities associated with a timezone
 * @param timezone IANA timezone identifier
 * @returns Array of city names
 */
export function getCitiesForTimezone(timezone: string): string[] {
  return Object.entries(CITY_TO_TIMEZONE_MAP)
    .filter(([_, tz]) => tz === timezone)
    .map(([city]) => city.charAt(0).toUpperCase() + city.slice(1));
}

/**
 * Get country for a timezone
 * @param timezone IANA timezone identifier
 * @returns Country name or undefined
 */
export function getCountryForTimezone(timezone: string): string | undefined {
  const entry = Object.entries(COUNTRY_TO_TIMEZONES_MAP).find(([_, timezones]) =>
    timezones.includes(timezone)
  );
  return entry ? entry[0].split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : undefined;
}

// Static timezone data as fallback
export const COMMON_TIMEZONES = [
  'America/New_York',        // Eastern: New York, Boston, Miami, Atlanta, Philadelphia
  'America/Detroit',         // Eastern: Detroit (separate DST rules)
  'America/Chicago',         // Central: Chicago, Dallas, Houston
  'America/Denver',          // Mountain: Denver, Salt Lake City
  'America/Phoenix',         // Mountain: Phoenix, Arizona (no DST)
  'America/Los_Angeles',     // Pacific: Los Angeles, Seattle, San Diego, San Francisco
  'America/Anchorage',       // Alaska: Anchorage
  'America/Adak',            // Hawaii-Aleutian: Aleutian Islands
  'Pacific/Honolulu',        // Hawaii: Honolulu
  'America/Toronto',         // Eastern: Toronto
  'America/Montreal',        // Eastern: Montreal
  'America/Halifax',         // Atlantic: Halifax
  'America/Winnipeg',        // Central: Winnipeg
  'America/Regina',          // Central: Regina (no DST)
  'America/Edmonton',        // Mountain: Edmonton, Calgary
  'America/Vancouver',       // Pacific: Vancouver
  'America/St_Johns',        // Newfoundland: St. John's
  'Europe/London',           // UK: London, Edinburgh, Belfast, Manchester
  'Europe/Dublin',           // Ireland: Dublin
  'Europe/Lisbon',           // Portugal: Lisbon, Porto
  'Europe/Paris',            // France: Paris, Lyon, Marseille
  'Europe/Berlin',           // Germany: Berlin, Munich, Frankfurt, Hamburg
  'Europe/Amsterdam',        // Netherlands: Amsterdam, Rotterdam
  'Europe/Brussels',         // Belgium: Brussels, Antwerp
  'Europe/Luxembourg',       // Luxembourg
  'Europe/Madrid',           // Spain: Madrid, Barcelona, Seville
  'Europe/Rome',             // Italy: Rome, Milan, Naples
  'Europe/Vienna',           // Austria: Vienna
  'Europe/Zurich',           // Switzerland: Zurich, Geneva
  'Europe/Prague',           // Czech Republic: Prague
  'Europe/Warsaw',           // Poland: Warsaw, Kraków
  'Europe/Budapest',         // Hungary: Budapest
  'Europe/Bucharest',        // Romania: Bucharest
  'Europe/Athens',           // Greece: Athens
  'Europe/Stockholm',        // Sweden: Stockholm
  'Europe/Copenhagen',       // Denmark: Copenhagen
  'Europe/Oslo',             // Norway: Oslo
  'Europe/Helsinki',         // Finland: Helsinki
  'Europe/Tallinn',          // Estonia: Tallinn
  'Europe/Riga',             // Latvia: Riga
  'Europe/Vilnius',          // Lithuania: Vilnius
  'Europe/Belgrade',         // Serbia: Belgrade
  'Europe/Zagreb',           // Croatia: Zagreb
  'Europe/Ljubljana',        // Slovenia: Ljubljana
  'Europe/Bratislava',       // Slovakia: Bratislava
  'Europe/Sofia',            // Bulgaria: Sofia
  'Europe/Kiev',             // Ukraine: Kyiv
  'Europe/Moscow',           // Russia: Moscow

  // Other Americas
  'America/Mexico_City',
  'America/Sao_Paulo',
  'America/Buenos_Aires',
  'Asia/Tokyo',
  'Asia/Seoul',
  'Asia/Shanghai',
  'Asia/Hong_Kong',
  'Asia/Singapore',
  'Asia/Manila',
  'Asia/Bangkok',
  'Asia/Jakarta',
  'Asia/Kuala_Lumpur',
  'Asia/Mumbai',
  'Asia/Kolkata',
  'Asia/Dubai',
  'Asia/Tehran',
  'Asia/Baghdad',
  'Asia/Riyadh',
  'Asia/Tel_Aviv',
  'Australia/Sydney',
  'Australia/Melbourne',
  'Australia/Brisbane',
  'Australia/Perth',
  'Pacific/Auckland',
  'Africa/Cairo',
  'Africa/Lagos',
  'Africa/Nairobi',
  'Africa/Johannesburg',
  'Africa/Casablanca',
];

export const TIMEZONE_CITY_MAP: Record<string, { city: string; country: string }> = {
  'America/New_York': { city: 'New York', country: 'United States' },
  'America/Detroit': { city: 'Detroit', country: 'United States' },
  'America/Chicago': { city: 'Chicago', country: 'United States' },
  'America/Denver': { city: 'Denver', country: 'United States' },
  'America/Phoenix': { city: 'Phoenix', country: 'United States' },
  'America/Los_Angeles': { city: 'Los Angeles', country: 'United States' },
  'America/Anchorage': { city: 'Anchorage', country: 'United States' },
  'America/Adak': { city: 'Adak', country: 'United States' },
  'Pacific/Honolulu': { city: 'Honolulu', country: 'United States' },
  'America/Toronto': { city: 'Toronto', country: 'Canada' },
  'America/Montreal': { city: 'Montreal', country: 'Canada' },
  'America/Halifax': { city: 'Halifax', country: 'Canada' },
  'America/Winnipeg': { city: 'Winnipeg', country: 'Canada' },
  'America/Regina': { city: 'Regina', country: 'Canada' },
  'America/Edmonton': { city: 'Edmonton', country: 'Canada' },
  'America/Vancouver': { city: 'Vancouver', country: 'Canada' },
  'America/St_Johns': { city: 'St. John\'s', country: 'Canada' },
  'Europe/London': { city: 'London', country: 'United Kingdom' },
  'Europe/Dublin': { city: 'Dublin', country: 'Ireland' },
  'Europe/Lisbon': { city: 'Lisbon', country: 'Portugal' },
  'Europe/Paris': { city: 'Paris', country: 'France' },
  'Europe/Berlin': { city: 'Berlin', country: 'Germany' },
  'Europe/Amsterdam': { city: 'Amsterdam', country: 'Netherlands' },
  'Europe/Brussels': { city: 'Brussels', country: 'Belgium' },
  'Europe/Luxembourg': { city: 'Luxembourg', country: 'Luxembourg' },
  'Europe/Madrid': { city: 'Madrid', country: 'Spain' },
  'Europe/Rome': { city: 'Rome', country: 'Italy' },
  'Europe/Vienna': { city: 'Vienna', country: 'Austria' },
  'Europe/Zurich': { city: 'Zurich', country: 'Switzerland' },
  'Europe/Prague': { city: 'Prague', country: 'Czech Republic' },
  'Europe/Warsaw': { city: 'Warsaw', country: 'Poland' },
  'Europe/Budapest': { city: 'Budapest', country: 'Hungary' },
  'Europe/Bucharest': { city: 'Bucharest', country: 'Romania' },
  'Europe/Athens': { city: 'Athens', country: 'Greece' },
  'Europe/Stockholm': { city: 'Stockholm', country: 'Sweden' },
  'Europe/Copenhagen': { city: 'Copenhagen', country: 'Denmark' },
  'Europe/Oslo': { city: 'Oslo', country: 'Norway' },
  'Europe/Helsinki': { city: 'Helsinki', country: 'Finland' },
  'Europe/Tallinn': { city: 'Tallinn', country: 'Estonia' },
  'Europe/Riga': { city: 'Riga', country: 'Latvia' },
  'Europe/Vilnius': { city: 'Vilnius', country: 'Lithuania' },
  'Europe/Belgrade': { city: 'Belgrade', country: 'Serbia' },
  'Europe/Zagreb': { city: 'Zagreb', country: 'Croatia' },
  'Europe/Ljubljana': { city: 'Ljubljana', country: 'Slovenia' },
  'Europe/Bratislava': { city: 'Bratislava', country: 'Slovakia' },
  'Europe/Sofia': { city: 'Sofia', country: 'Bulgaria' },
  'Europe/Kiev': { city: 'Kyiv', country: 'Ukraine' },
  'Europe/Moscow': { city: 'Moscow', country: 'Russia' },
  'America/Mexico_City': { city: 'Mexico City', country: 'Mexico' },
  'America/Sao_Paulo': { city: 'São Paulo', country: 'Brazil' },
  'America/Buenos_Aires': { city: 'Buenos Aires', country: 'Argentina' },
  'Asia/Tokyo': { city: 'Tokyo', country: 'Japan' },
  'Asia/Seoul': { city: 'Seoul', country: 'South Korea' },
  'Asia/Shanghai': { city: 'Shanghai', country: 'China' },
  'Asia/Hong_Kong': { city: 'Hong Kong', country: 'Hong Kong' },
  'Asia/Singapore': { city: 'Singapore', country: 'Singapore' },
  'Asia/Manila': { city: 'Manila', country: 'Philippines' },
  'Asia/Bangkok': { city: 'Bangkok', country: 'Thailand' },
  'Asia/Jakarta': { city: 'Jakarta', country: 'Indonesia' },
  'Asia/Kuala_Lumpur': { city: 'Kuala Lumpur', country: 'Malaysia' },
  'Asia/Mumbai': { city: 'Mumbai', country: 'India' },
  'Asia/Kolkata': { city: 'Kolkata', country: 'India' },
  'Asia/Dubai': { city: 'Dubai', country: 'UAE' },
  'Asia/Tehran': { city: 'Tehran', country: 'Iran' },
  'Asia/Baghdad': { city: 'Baghdad', country: 'Iraq' },
  'Asia/Riyadh': { city: 'Riyadh', country: 'Saudi Arabia' },
  'Asia/Tel_Aviv': { city: 'Tel Aviv', country: 'Israel' },
  'Australia/Sydney': { city: 'Sydney', country: 'Australia' },
  'Australia/Melbourne': { city: 'Melbourne', country: 'Australia' },
  'Australia/Brisbane': { city: 'Brisbane', country: 'Australia' },
  'Australia/Perth': { city: 'Perth', country: 'Australia' },
  'Pacific/Auckland': { city: 'Auckland', country: 'New Zealand' },
  'Africa/Cairo': { city: 'Cairo', country: 'Egypt' },
  'Africa/Lagos': { city: 'Lagos', country: 'Nigeria' },
  'Africa/Nairobi': { city: 'Nairobi', country: 'Kenya' },
  'Africa/Johannesburg': { city: 'Johannesburg', country: 'South Africa' },
  'Africa/Casablanca': { city: 'Casablanca', country: 'Morocco' },
};