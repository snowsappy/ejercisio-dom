const powers =document.querySelectorAll(".power");

const name =document.querySelector("#name");
const bar =document.querySelector("#bar");

powers.forEach(power=>{


    power.addEventListener("click",()=>{


        

        powers.forEach(p=>{

            p.classList.remove("active");

        });



      

        power.classList.add("active");



       

        name.textContent =
        power.innerText;




        document.body.className="";



        if(power.classList.contains("fire")){

            document.body.classList.add(
                "fire-theme"
            );

            bar.style.width="90%";

        }



        if(power.classList.contains("ice")){

            document.body.classList.add(
                "ice-theme"
            );

            bar.style.width="70%";

        }



        if(power.classList.contains("lightning")){

            document.body.classList.add(
                "lightning-theme"
            );

            bar.style.width="95%";

        }



        if(power.classList.contains("nature")){

            document.body.classList.add(
                "nature-theme"
            );

            bar.style.width="80%";

        }



        if(power.classList.contains("dark")){

            document.body.classList.add(
                "dark-theme"
            );

            bar.style.width="100%";

        }



        if(power.classList.contains("light")){

            document.body.classList.add(
                "light-theme"
            );

            bar.style.width="85%";

        }



    });



});