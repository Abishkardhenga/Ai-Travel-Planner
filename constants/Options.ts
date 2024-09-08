export type travelerType = {
    id: number, 
    title: string, 
    description: string, 
    icon: string, 
    people: string
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
