//Using filter() method
//Using Filter on taxi system
//For drivers na we shall use string
//Property should match the string and return name 

//code Solution

function findMatching(drivers, string){

    const newDrivers = drivers.filter(function (driver) {return string.toLowerCase() === driver.toLowerCase()});
  
    return newDrivers;
  }
  
  function fuzzyMatch(drivers, string) {
    let num = string.length
  
    const newDrivers = drivers.filter(
      function(driver){
        return string.toLowerCase() === driver.toLowerCase().substring(0,num)
      })
  
    return newDrivers;
  }
  
  function matchName(drivers, name){
    const newDrivers = drivers.filter(
      function(driver){
        return driver.name.toLowerCase() === name.toLowerCase();
  
      })
    return newDrivers;
  }