const form = document.getElementById("carForm");


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('UserPropTest').addEventListener('click', function () {
      heap.addUserProperties({
        identity: "bob@example.com",
        age: "25",
        language: "English",
        profession: "Scientist",
        email: "bob2@example2.com",
        aa: "1",
        b: "2",
        a: "1",
        cb: "2",
        ca: "1",
        fb: "2",
        ffa: "1",
        rb: "2",
        fffa: "1",
        tb: "2",
        wa: "1",
        ssb: "2",
        dda: "1",
        fgdb: "2",
        va: "1",
        flb: "2",
        al: "1",
        bi: "2",
        ai: "1",
        cbuu: "2",
        cap: "1",
        cbq: "2",
        caqq: "1",
        cbqqq: "2",
        cbw: "2",
        casd: "1",
        cbss: "2",
        dax: "1",
        dbxx: "2",
        daxs: "1",
        dbvc: "2",
        daxsa: "1",
        dbert: "2",
        awwq: "1",
        bassd: "2",
        cspl: "3",
        aqwe: "1",
        bw: "2",
        asd: "1",
        bss: "2",
        ax: "1",
        bxx: "2",
        axs: "1",
        bvc: "2",
        axsa: "1",
        bert: "2",
        awwq: "1",
        bassd: "2",
        cspl: "3"
      });
  
      console.log("User properties sent to Heap!");
    });
  });
  
  

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
    // Clear the input field
    carTypeInput.value = '';
} )

document.addEventListener("DOMContentLoaded", function() {
    if (/\/car.html$/.test(window.location.pathname)) {
        let val = 'Not Processed';
        var selector = '#testElementHide';
        var element = document.querySelector(selector);
        
        if (!element) {
            val = "Not Found";
        } else if (window.getComputedStyle(element).display == 'none' || 
                   window.getComputedStyle(element).visibility == 'hidden') {
            val = "Hidden";
        } else {
            val = "Visible";
        }
        
        heap.addEventProperties({
            hiddenOrNotHELAL: val
        });
    }
});
