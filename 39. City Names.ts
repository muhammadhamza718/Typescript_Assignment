function city_country(city: string, country: string = "pakistan."): void{
  console.log(`${city.toUpperCase()}, ${country.toUpperCase()}`);
}

city_country ("Karachi");
city_country ("Lahore");
city_country ("Islamabad");