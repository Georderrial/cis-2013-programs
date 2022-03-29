var counter = 1;
var output = "";

while(counter<=100)
  {
    if(counter % 15 === 0)
       {
        output = output + "fizzbuzz\n";
        counter++;
       }
          else if (counter % 5 === 0)
          {
            output = output + "fizz\n";
            counter++;
          }
            else if (counter % 3 === 0)
            {
              output = output + "buzz\n";
              counter++;
            }
              else
              {
                output = output + counter + "\n";
                counter++;
              }
  };
console.log(output);