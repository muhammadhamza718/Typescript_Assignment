function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city.toUpperCase()} is in ${country.toUpperCase()}.`);
  }
  
  describe_city("Karachi"); 
  describe_city("Berlin", "Germany");
  describe_city("New York", "United States");
  