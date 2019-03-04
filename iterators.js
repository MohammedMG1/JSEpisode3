/*************************************
* logger(array)
*
* - Accepts an array
* - Logs every element of the array
************************************/
const logger = function (array) {
  array.forEach(element => console.log(element))


};


/*************************************
* toCelsius(temperatures)
*
* - Accepts an array of temperatures
*   in degrees Fahrenheit
* - Returns an array of temperatures
*   in degrees Celsius
*
* The conversion is:
*   C = (F - 32) * (5/9)
************************************/
const toCelsius = function (temperatures) {

  let tempsInC = temperatures.map(temperature => {
    let newTemp = (temperature - 32) * (5 / 9)
    return newTemp
  })
  return tempsInC
}


/**************************************
* hottestDays(temperatures, threshhold)
*
* - Accepts an array of temperatures
* - Accepts a threshhold temperature
* - Returns an array of temperatures
*   that exceed the threshhold
***************************************/
const hottestDays = function (temperatures, threshhold) {
  return temperatures.filter(deg => {
    return deg > threshhold;
  })

}


/******************************************
* logHottestDays(temperatures, threshhold)
*
* - Accepts an array of temperatures
*   IN DEGREES FAHRENHEINT
* - Accepts a threshhold temperature
*   IN DEGREES FAHRENHEINT
* - Logs temperatures that exceed the
*   threshhold to the console
*   IN DEGREES CELSIUS
*
* hint: you can combine
*       all previous functions
*******************************************/
const logHottestDays = function (temperatures, threshhold) {
  toCelsius(hottestDays(temperatures, threshhold)).forEach(c => console.log(c))
}


export { logger, toCelsius, hottestDays, logHottestDays }
