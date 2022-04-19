var parent = document.getElementById("parent");
        var child = document.getElementById("child");

        parent.addEventListener("click",parentYaz,false); //bubbling
        child.addEventListener("click",cocukYaz,false); //bubbling
        //İkiside false olunca parent sirasina gore isler, yani once child, sonra parent.
        //parentYaz true olursa, once parent sonra child olarak degisir.
        function parentYaz(event){
            console.log("parent");

        }
        function cocukYaz(event){
            //event.stopPropagation();                      //Propagasyonu engeller. Yani zinciri kirar.
            //child.removeEventListener("click",cocukYaz);  //Etkinligi siler...
            console.log("child");
        }

