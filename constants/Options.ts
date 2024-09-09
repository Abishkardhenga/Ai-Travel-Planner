export type travelerType = {
    id: number, 
    title: string, 
    description: string, 
    icon: string, 
    people?: string
}

export const SelectTravelerList: travelerType[] = [
    {
        id: 1,
        title: "Just Me", 
        description: "Go at your own pace.",
        icon: "✈️",  

        people: "1 Person"
    },
    {
        id: 2,
        title: "Couples", 
        description: "Life Time experience with Partner.",
        icon: "🥂",  
        people: "2 People"
    },
    {
        id: 3,
        title: "Family", 
        description: "Spend quality time together.",
        icon: "🏠", 
        people: "3 to 5 People"
    },
    {
        id: 4,
        title: "Friends", 
        description: " Make Crazy memories together.",
        icon: "⛵",  
        people: "5 to 10 People"
    }
];


export const SelectBudgetOptions: travelerType[] = [
    {
      id: 1,
      title: "Cheap",
      description: "Stay consicous of cost",
      icon: "💸", 
    },
    {
      id: 2,
      title: "Moderate",
      description: "Balanced spending  on average",
      icon: "💵", 
    },
    {
      id: 3,
      title: "Expensive",
      description: "Don't worry about cost",
      icon: "💰", 
    },
  ];
  
  export const AI_PROMPT = `
  Generate travel plan for Location: {location},  FOR  {totalDays} Days  AND {totalNights}
  Night FOR THE {traveler} 
  WITH A {budget} BUDGET WITH FLIGHT DETAILS, FLIGHT PRICE WITH BOOKING URL, HOTEL OPTIONS 
  WITH HOTEL NAME, HOTEL ADDRESS, PRICE, HOTEL IMAGE URL, GEO COORDINATES, RATING, 
  DESCRIPTION AND PLACES TO VISIT NEARBY WITH PLACE NAME, PLACE DETAILS, PLACE IMAGE URL, 
  GEO COORDINATES, TICKET PRICING, AND TRAVEL TIME BETWEEN LOCATIONS FOR {totalDays} Days AND 
 {totalNights} NIGHT WITH EACH DAY'S PLAN INCLUDING BEST TIMES TO VISIT, ALL IN JSON FORMAT.
  `;
  