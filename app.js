 const submitBtn = document.getElementById('sub');
 const submit = submitBtn.addEventListener('click', function(){
        const inpt = document.getElementById('inp').value;
    

        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inpt+'&appid=4a868d6116975b73269f7d5cbfd4a9cb')
        .then(res => res.json())
        .then(data =>{
                
         console.log(data);
            const tem = data.main.temp;
            const temp = tem -273.15;
            const name = data.name;
            const ic = data.weather[0].icon;
            const discription = data.weather[0].main;
            const temp_min = data.main.temp_min;
            const temp_max = data.main.temp_max;
            console.log(ic);
            
            // Display ui

            document.getElementById('deg').innerText = temp.toFixed(2);
            document.getElementById('name').innerText = name;
            const ibox = document.getElementById('icon');
            ibox.innerHTML = `<img src="http://openweathermap.org/img/w/${ic}.png" class="temp-icon"/>`;
            document.getElementById('dis').innerText = discription;
            document.getElementById('min').innerText = temp_min;
            document.getElementById('max').innerText = temp_max;

        })
       
 });