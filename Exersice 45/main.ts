//Define a function to create a car object with optional...

function create_car (manufacturer, model, ...options){
      
    //Initialize a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    //Add addditional options to the car object
    options.forEach(option =>{
        let [key, value] = option.split(":")
        car [key.trim()] = value.trim();

    });

    return car;

};

//Call the function to create a car object

let my_car = create_car ("MITSUBISHI", "EVO 8","COLOR: BLUE","TURO: TRUE","YEAR: 2003" );

//Print the variable

console.log(my_car);

               

                           ///////\\\\\\\ ,,...,,,,..,,, ><><><><><><><><><><><<>< ,,...,,,,..,,, ////////\\\\\\\