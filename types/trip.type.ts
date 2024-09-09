interface Traveler {
    id: number
    title: string
    description: string
    icon: string
    people: string
  }
  
  export interface TripData {
    country: string
    name: string
    longitude: number
    latitude: number
    traveler: Traveler
    startDate: string  
    endDate: string    
    totalDays: number
    budget: string
  }
  
  interface FlightDetails {
    airline: string
    arrival_city : string 
    booking_url:string 
    departure_city: string
    departure_date: string
    flight_number:string 
    price: string 
    return_date:string 
  }
  
  interface HotelOption {
    name: string
    address:string 
    description:string 
    price: number
    rating: number
  }
  
  interface TripPlan {
    budget: string
    daily_plan: string[]
    destination: string
    duration: string
    flight_details: FlightDetails
    hotel_options: HotelOption[]
    traveler: string
  }
  
 export interface UserTrip {
    email: string
    tripdata: string 
    tripplan: TripPlan
    userid: string
  }
  