const form = document.getElementById("carForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Get the value of the "carType" input field
     carTypeInput = document.getElementById("carType");
     carType = carTypeInput.value;

    // Validate that the input is not empty
    if (!carType.trim()) {
        console.error("Car type is empty");
        carType = "Empty"
        return;
    }

    heap.track('Car Type', {
        carType: carType // Send the input value as the "carType" property
    });

    // Log the event to the console
    console.log(`Tracked event with carType: ${carType}`);
    carTypeInput = '';
    CSSConditionRule.log('Car Input set to null')
    
} )