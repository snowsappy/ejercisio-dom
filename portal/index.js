const cards = document.querySelectorAll(".card");
const title = document.querySelector(".portal h1");
cards.forEach(card => {

    const cardInner = card.querySelector(".card-inner");
    const power = card.querySelector(".power");


    card.addEventListener("mouseenter", () => {

        cardInner.classList.add("flip");
        power.classList.add("glow");

    });


    card.addEventListener("mouseleave", () => {

        power.classList.remove("glow");

        if(!power.classList.contains("active")){

            cardInner.classList.remove("flip");

        }

    });


    card.addEventListener("click", () => {


        document.querySelectorAll(".power").forEach(p => {
            p.classList.remove("active");
        });

        cardInner.classList.add("selected");
            document.querySelectorAll(".card-inner").forEach(c => {
                c.classList.remove("flip");
            });

            
             title.className = ""
            power.classList.add("active");

            cardInner.classList.add("flip");



            document.body.className = "";



            if(power.classList.contains("fire")){

                document.body.classList.add("fire-theme");
                title.classList.add("fire-title");
                
            }

            else if(power.classList.contains("ice")){

                document.body.classList.add("ice-theme");
                title.classList.add("ice-title");
            }

            else if(power.classList.contains("lightning")){

                document.body.classList.add("lightning-theme");
                 title.classList.add("lightning-title");
            }

            else if(power.classList.contains("nature")){

                document.body.classList.add("nature-theme");
                 title.classList.add("nature-title");
            }

            else if(power.classList.contains("dark")){

                document.body.classList.add("dark-theme");
                title.classList.add("dark-title");
            }

            else if(power.classList.contains("light")){

                document.body.classList.add("light-theme");
                title.classList.add("light-title");
            }

        });

});