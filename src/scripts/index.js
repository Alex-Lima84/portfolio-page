const loader = document.getElementById("preloader");

        const dismissLoadingScreen = () => {
            loader.style.display = "none";
            return loader.style.display
        };
            
        const loadingTime = () => {
          
            const result = setTimeout(dismissLoadingScreen, 2000);
            return result
        };    

        window.addEventListener("load", loadingTime);
        

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
        
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });