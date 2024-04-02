const form = document.querySelector('form');
form.addEventListener('submit',function (e){
    e.preventDefault();
    const Name = document.querySelector('#name').value;
    const Age = parseInt(document.querySelector('#age').value);
    const Height = parseInt(document.querySelector('#height').value);
    const Weight = parseInt(document.querySelector('#weight').value);
    if(Name==''||Age==''||Height==''||Weight==''||Age<0||Height<0||Weight<0||Weight>Height){
        document.querySelector('#result').innerHTML="INVALID";
    }else{
        const BMI = (Weight/((Height*Height)/10000)).toFixed(2);
        console.log(BMI);
        if(BMI>0.00 && BMI<18.5){
            let text = `${Name} as your age is ${Age} according to this you are UnderWeight. BMI: ${BMI}`;
            let Result = document.querySelector('#result');
            Result.textContent=text;
            Result.style.color='red';

        }else if(BMI>=18.5 && BMI<=24.9){
            let text = `${Name} as your age is ${Age} according to this you are Normal. BMI: ${BMI}`;
            let Result = document.querySelector('#result');
            Result.textContent=text;
            Result.style.color='green';
        
        }else if(BMI>=25 && BMI<=29.9){
            let text = `${Name} as your age is ${Age} according to this you are Overweight. BMI: ${BMI}`;
            let Result = document.querySelector('#result');
            Result.textContent=text;
            Result.style.color='orange';
        
        }else if(BMI>=30 && BMI<=34.9){
            let text = `${Name} as your age is ${Age} according to this you are Obese. BMI: ${BMI}`;
            let Result = document.querySelector('#result');
            Result.textContent=text;
            Result.style.color='pink';
        }else if(BMI>=35 && BMI<=39.9){
            let text = `${Name} as your age is ${Age} according to this you are Severly Obese. BMI: ${BMI}`;
            let Result = document.querySelector('#result');
            Result.textContent=text;
            Result.style.color='brown';

        }else if(BMI>=40){
            let text = `${Name} as your age is ${Age} according to this you are Morbid Obese. BMI: ${BMI}`;
            let Result = document.querySelector('#result');
            Result.textContent=text;
            Result.style.color='red';
        }else{
            let text = `${Name} as your age is ${Age} according to this your BMI is ${BMI}`;
            let Result = document.querySelector('#result');
            Result.textContent=text;
            Result.style.color='red';
        }
    }
});