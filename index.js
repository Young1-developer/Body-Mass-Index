const myform = document.getElementById('myform');
const output = document.getElementById('output');

myform.addEventListener('submit',function(event){
    event.preventDefault();
      // get the user weight and height
      const weight = parseInt(document.getElementById('weight').value);
      const height = parseInt(document.getElementById('height').value);
      // Square the height in variable called TotalHeight
      const TotalHeight = height * height;
      // Divide weight and height to get the final result
      let result = (weight/TotalHeight);
     // convert  result from integer to float
      result = parseFloat(Math.round(result,2));
    
          if(result === 18.5){
            output.textContent = `${result}kg/m is underweight`;
          }else if(result >= 18.5 && result <= 24.9){
            output.textContent = `${result}kg/m is Normal Weight`;
          }else if(result >= 25 && result <= 29.9){
            output.textContent = `${result}kg/m is OverWeight`;
            console.log(`${result}kg/m is Overweight`);
          }else if(result >= 30){
            output.textContent = `${result}kg/m is Obecity`;
          }else{
            output.textContent = `Your (BMI) ${result}kg/m  is too low to measure `;
          }
             
  
});

  



