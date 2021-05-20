                
                
                
                //EXERCICE_1
                
           
                var age = 18;
                if(age > 0 && age < 6){
                    document.write("You are a baby");
                }
                else if(age >= 6 && age < 11){
                    document.write("You are a child");
                }
                else if(age >= 11 && age < 18){
                    document.write("You are a teenager");
                }
                else if(age >= 18 && age <= 45){
                    document.write("You are a young man");
                }
                else if(age > 45 && age < 130){
                    document.write("You are an old man");
                }
                else if(age >= 130){
                    document.write("You are a titan hhhhh");
                }
                else{
                    document.write("ERROR !!");
                }

                
                
                //EXERCICE_2

                var x = 1,result,x_positive;
                if(x < 0){
                    x_positive  = x * (-1);
                    result = x_positive % 2;
                    if(result == 0){
                        document.write(x," is an even number");
                    }
                    else if(result == 1){
                        document.write(x," is an odd number");
                    }
                }
                else{
                    result = x % 2;
                    if(result == 0){
                        document.write(x," is an even number");
                    }
                    else if(result == 1){
                        document.write(x," is an odd number");
                    }
                }
        
                


                //EXERCICE_3

     
                //EXERCICE_3

                
                var arr = [31,162,0.11,587.01,0,585,586,-587,5,0.115,0.3,-62,420,48,0.5];
                var large_number,small_number,stock;
                
                document.write("Before : Table of numbers : >> ",arr,"<br>");
                for(var x = 0;x <= arr.length-1;x++){
                    for(var i = 0;i < arr.length;i++){
                        if(arr[i] > arr[i+1]){
                            stock = arr[i];
                            arr[i] = arr[i+1];
                            arr[i+1] = stock;
                        }
                    }
                    for(var j = arr.length-1;j > 0;j--){
                        if(arr[j] < arr[j-1]){
                            stock = arr[j];
                            arr[j] = arr[j-1];
                            arr[j-1] = stock;
                        }
                    }
                }   
                document.write("After : Table of numbers : >> ",arr,"<br>");
                large_number = arr[arr.length-1];
                small_number = arr[0];
                document.write("<br>The large number is : ",large_number);
                document.write("<br>The small number is : ",small_number);

            



                //EXERCICE_4
                
    
                var star = "*"; 
                number_of_line = 20;
                for(var i = 0;i < number_of_line ; i++){
                    document.write(star,"<br>");
                    star += "*";
                }
       



                //EXERCICE_5

   
                var v1 = 5;
                for(i = 0 ;i <= 12;i++){
                    document.write(" ",v1," * ",i," = ",i*v1,"<br>");
                }
           



                //EXERCICE_6
            
                var min,hour;
                // choose a value > min & hour
                hour=23,min=60;
                var am_pm;  
                //  am | pm << please choose >> AM OR PM 
                am_pm="pm";

                document.write("Time Now is : ",hour," : ",min," ",am_pm,"<br>");
                
                //>>> FOR TIME : PM                
                if((am_pm == "PM" || am_pm == "pm") && (hour>11 && hour<24) && (min<61 && min>-1)){
                    if(hour == 23 && min == 60){
                        hour = 00;
                        min = 00;
                        am_pm = "AM";
                        document.write("Time Now is : ",hour," : ",min," ",am_pm,"<br>");
                    }
                    else if(min == 60){
                        min = 00;
                        hour++;
                        document.write("Time Now is : ",hour," : ",min," ",am_pm,"<br>");
                    }
                    else{
                        document.write("Time Now is : ",hour," : ",min+1," ",am_pm,"<br>");
                    }
                }
                //>>> FOR TIME : AM
                else if((am_pm == "AM" || am_pm == "am") && (hour>-1 && hour<12) && (min<61 && min>-1)){
                    if(hour == 11 && min == 60){
                        hour++;
                        min = 00;
                        am_pm = "PM";
                        document.write("Time Now is : ",hour," : ",min," ",am_pm,"<br>");
                    }
                    else if(min == 60){
                        min = 00;
                        hour++;
                        document.write("Time Now is : ",hour," : ",min," ",am_pm,"<br>");
                    }
                    else{
                        document.write("Time Now is : ",hour," : ",min+1," ",am_pm,"<br>");
                    }
                }
                else{
                    document.write("ERROR PLESE CHANGE THE VALUES am_pm or hour ou min !!");
                }
    



                //EXERCICE_7

                
       
                var code_pin = 1111,code_puk = 111111;var j=3;
                var value_0 = prompt("Please enter your CODE PIN ");
                //document.write(value_0.length);
                var v1 = value_0.length;
                document.write(v1);
                for(var i = 0; i < 3;i++){
                    if(v1 != 4 || v1 == 4 || value_0 != code_pin){
                            if(code_pin == value_0){
                                prompt("You are a valid pin code !!");
                                break;
                            }
                            else if(code_pin != value_0){
                                j--;
                                value_0 =prompt("Please enter your CODE PIN , you have " );
                                if(value_0 == code_pin){
                                    prompt("You are a valid pin code !!");
                                    break;
                                }
                            }
                            if(j == 0){
                                var value_1 = prompt("Please enter your CODE PUK !");
                                if(value_1 != code_puk){
                                    prompt("Your sim card has been blocked contact your service provider");
                                    break;
                                }
                                else{
                                    prompt("You are a valid pin code !!");
                                    break;
                                }
                            }    
                    }else if(value_0 == code_pin){
                        prompt("You are a valid pin code !!");
                        break;
                    }
                }
 

                

                //EXERCICE_8
                
        
                var year = 2010;
                if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
                    document.write(year," is a Leap year");
                }
                else{
                    document.write(year," is a Simple year");
                }
            



                //EXERCICE_9

                //please enter a number
                var num = 59;
                
                var result;
                if(num > 100){
                   result = -1*(num - 100);
                   document.write(result);
                }
                else{
                    result = 100 - num;
                    document.write(result);
                }
                



                //EXERCICE_10


                // ==== >>>> Result In Console Form


                //PLEASE ENTER NUMBER OF LINE YOU WANT !! 'n_line' == Number line
                var n_line = 5;
                var star="*";var sp =" ";
                for(var i = n_line;i > 0;i--){
                    for(var j = 0;j < n_line;j++){
                        sp+=" ";
                    }
                    console.log(sp,star);  
                    star+="**";
                    if(sp == 0){
                        sp=" ";
                    }
                    n_line--;
                    
                }
                
                //or methode _ 2

                var star ="*",sp ="";
                //PLEASE ENTER NUMBER OF LINE YOU WANT !! 'n_line' == Number line
                var n_line = 5,num = 1;
                for(var j = 0;j < n_line;j++){
                    for(var i = 0;i < n_line-num;i++){
                        sp+=" ";
                    }
                    console.log(sp+star); // no ',' >> use '+' 
                    star+="**";
                    if(sp == 0){
                        sp="";
                    }
                    num++;
                }
                  
                



                                                      //different between null and undefined


                // console.log(null == undefined);      //true
                // console.log(null === undefined);     //false

                // console.log(typeof(null));          //object
                // console.log(typeof(undefined));      //undefined

                let fruits = prompt("what is your favourite of fruits ??");
                let lc = fruits.toLowerCase();
                function t1(propriet){
                    switch(propriet){
                        case "kiwi":
                            alert("it's delicous !");
                            break;
                        case "banana":
                            alert("wow");
                            break;
                        case "":
                        case "\"\"":    
                            lc = t1(prompt("what is your favourite of fruits ??").toLowerCase());
                            break;
                        default:
                            for(var i = 0;i < 2;i++){        // yes we can use for or function inside switch
                                alert("nice !");
                                alert("nice !");
                                alert("nice !");
                                break;
                            }
                            lc = t1(prompt("what is your favourite of fruits ???").toLowerCase());
                            break;
                    }
                }
                t1(lc);


                //=== exercice guess an random 

                function guess(){
                    let guess = prompt("Please enter a number between 0 ~ 10");
                    let numberR = Math.floor(Math.random() * 11);
                    while(guess != numberR){
                        guess = prompt("Please enter a number AGAIN , random number = "+numberR);
                        if(guess > numberR){
                            console.log("Your guess is very low");
                        }
                        else if(guess < numberR){
                            console.log("Your guess is very high");
                        }
                    }
                    if(guess == numberR){
                        console.log("you are win !! your guess is : "+guess+", and number random is : "+numberR);
                    }
                }
                guess();


                //exercice triangle

                let n_line = 10;
                let star = "*",sp = ""; 
                for(let i = 0;i < n_line;i++){
                    for(let j = n_line-1;j > i;j--){
                        sp+=" ";
                    }
                    if(i == 0){
                        console.log(sp+star);
                    }
                    else{
                        star+=" *"
                        console.log(sp+star);
                    }
                    sp="";
                }

                // exercice of number is must repeat in array
                
                let arr = [5,2,5,6,6,6,6,6,6,6,6];
                let result = "";
                let cont_1 = 0,cont_2 = 0;

                for(let i = 0;i < arr.length;i++){
                    for(let j = 0;j<arr.length;j++){
                        if(result == arr[i]){
                            break;
                        }
                        if(arr[i] == arr[j]){
                            cont_1++;                         
                        }
                    }
                    if(cont_1 > cont_2){
                        result = arr[i];    // 5,
                        cont_2 = cont_1;    // 2,
                    }
                    cont_1 = 0;
                }
                console.log(`the big number is repeater =>=> ${result} number of repeat is =>=> ${cont_2}`);
