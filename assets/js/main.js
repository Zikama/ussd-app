
g=document.querySelector.bind(document);
gA = document.querySelectorAll.bind(document);
// const progressbar = new Progresser("transparent");
const myAccount = new BankAccount();
myAccount.newAccount("Old Kampala","John");
   let loader = new Loader();
(function keyboard(){
    const allButtons = gA(".button-number");
    for(num_btn of allButtons){
        if (num_btn.id != "dailer") {
            num_btn.addEventListener("click",(e)=>{
                const displayer = g('input[name="display"]');
                let current = e.target||e.currentTarget;
                displayer.value += current.value
            })
        }
    }
})();

(function erase(){
    const eraser = g("#erase");
    eraser.addEventListener("click",(e)=>{
        const displayer = g('input[name="display"]');
        displayer.value = displayer.value.split('').reverse().slice(1).reverse().join('')
    });
})();

(function dailer(){
    const dailer = g("#dailer");
    dailer.addEventListener("click",(e)=>{
         let services = [
            "Buy bundles","Change PIN","Call Police","Alert Police"
         ];
        loader.displayModal("flex", ()=>{ 
            loader.callModalButton("0");
            let UIcode = g("#display").value;

            let okBtn = loader.callModalButton("get1");

            okBtn.addEventListener("click",()=>{
               
            });
            function popServices(code){
                if(code == "*130#"){ // Also we can have many codes,so can check if the code provided is one of those
                    let apply = ()=>{

                    if (UIcode != "") {
                        loader.writeToModal("write")
                        .then((placeToWrite)=>{
                            placeToWrite.innerHTML = "";
                            placeToWrite.innerHTML = "<ol></ol>";
                            loader.popPrompt("1");
                        })
                        .catch((err)=>console.error(err));
                    }else{
                        loader.writeToModal("write")
                        .then((placeToWrite)=>{
                            placeToWrite.innerHTML = "";
                            placeToWrite.innerHTML = "Please use our following short codes e.g [ *130# ]";
                            loader.popPrompt("1");
                        })
                        .catch((err)=>console.error(err));
                    }

                    for (let i = 0; i < services.length; i++) {
                            let servicesTemplate = `<li>${services[i]}</li>`;
                             
                             loader.writeToModal("write").then((placeToWrite)=>{
                                placeToWrite.querySelector("ol").innerHTML += servicesTemplate
                             })
                             .catch((err)=>console.error(err));
                        }
                    };apply()
                }
                else{
                    loader.writeToModal("write")
                    .then((e)=>{
                       myAccount.code("all").then(data=>{
                             let initDetails = data;
                            myAccount.code(code,initDetails[1],initDetails[0]).then(data=>{
                                e.innerHTML = "";
                                e.innerHTML = data;
                            })
                            
                        });
                        

                        

                        loader.popPrompt("0");

                        okBtn.addEventListener("click",()=>{
                           loader.callModalButton("get0").click();
                        });
                    })
                    .catch((err)=>console.error(err));
                }
            }
            setTimeout(()=>popServices(UIcode),500);
        })
       
    })
})();
// Modal Left
(function mdl(e){
    const btn_left = g("#md-l");
    btn_left.addEventListener("click",()=>{
        loader.callLayer("1",(md_layer)=>{
                const modal_right = g(".mdl");
            return Promise.resolve((()=>{
                modal_right.classList.add("mdr-open");
            })())
            .then(e=>{
                md_layer.addEventListener("click",(e)=>{
                    modal_right.classList.remove("mdr-open");
                   loader.callLayer("0");
                })
            })
        });
    })
})();
// Modal Right
(function mdr(e){
    const btn_right = g("#md-r");
    btn_right.addEventListener("click",()=>{
        loader.callLayer("1",(md_layer)=>{
                const modal_right = g(".mdr");
            return Promise.resolve((()=>{
                modal_right.classList.add("mdr-open");
            })())
            .then(e=>{
                md_layer.addEventListener("click",(e)=>{
                    modal_right.classList.remove("mdr-open");
                   loader.callLayer("0");
                })
            })
        });
    })
})();
//Accordions     
    function Accordion(doc,panel,cb) {

        if(doc){
            doc.addEventListener("click",function(e){
                let that = e.target;
                let second = panel;
                if(panel&&panel.style.display === "block") {
                    if (cb)
                        cb(that,second)
                    panel.style.display = "none";
                } 
                else {
                    if (cb)
                        cb(that,second)
                   panel.style.display = "block";

                }
            })
        }
    }
 // Display the marked Active Accordion
    (()=>{

        const _active = document.querySelector("._active");
        if(_active){
            if(_active.classList.contains("_active")){
                if(_active.style.display === "none") {
                    _active.style.display ="block";
                    _active.style.height = "auto";
                } else {
                    _active.style.display = "block";
                    _active.style.height = "auto";
                }
            }
        }
    })();

(function popAccordions(){
      // Accordions
      Accordion(g("#theme"),g("#pa-theme"),(that,second)=>{
        g("#pa-theme").style.height = "auto";
        that.classList.toggle("caret-down-b");
        that.classList.toggle("caret-up-b");
      });
      Accordion(g("#m-popular"),g("#pa-popular"),(that,second)=>{
        second.style.height = "auto";
        that.classList.toggle("caret-down-b");
        that.classList.toggle("caret-up-b");
      });
      Accordion(g("#type"),g("#pa-type"),(that,second)=>{
        second.style.height = "auto";
        that.classList.toggle("caret-down-b");
        that.classList.toggle("caret-up-b");
      });
      Accordion(g("#price"),g("#pa-price"),(that,second)=>{
        second.style.height = "auto";
        that.classList.toggle("caret-down-b");
        that.classList.toggle("caret-up-b");
      });
      Accordion(g("#Details"),g("#pa-Details"),(that,second)=>{
        second.style.height = "auto";
        that.classList.toggle("caret-down-b");
        that.classList.toggle("caret-up-b");
      });
})();

(function popThemes(){
    let themePlace = g("#pa-theme");
        themePlace.innerHTML ="";

    function theTheme(){
        if (!this.classList.contains("currentTheme")) {
            let allThemes = gA(".theme");
            for(theme of allThemes){
                theme.classList.remove("currentTheme")
            }
            this.classList.add("currentTheme");
            
            const styleBody = g("style");
           

            loader.displayModal("flex", (m)=>{
                m.style.zIndex = "555";// Bring the Modal to the very to view
                loader.callModalButton("0"); // All the modal to be closed if cansel button is clicked
                const closeMenu = loader.callLayer("get1"); // get The close layer option
                let canselBtn = loader.callModalButton("get0");// Get the cansel button on the Modal

                // Take action after some time
                setTimeout(()=>{
                    let pos = this.getAttribute("position-data");
                    for (let i=1;i<themes[pos]().length;i++){
                        styleBody.innerHTML += themes[pos]()[i](); // Apply new Theme's Styles
                        // console.log(styleBody.innerHTML.replace(`${themes[pos]()[i]()}`,"")) 
                    }

                    closeMenu.click();//Close Right Menu
                    canselBtn.click();//Close Loading
                },500);         
            });
        }
        else 
        {
            loader.displayModal("flex", (m)=>{
                m.style.zIndex = "555";// Bring the Modal to the very to view
                loader.callModalButton("0"); // All the modal to be closed if cansel button is clicked

                const closeMenu = loader.callLayer("get1"); // get The close layer option
                let canselBtn = loader.callModalButton("get0");// Get the cansel button on the Modal
                // Take action after some time

                setTimeout(()=>
                {
                    closeMenu.click();//Close Right Menu
                    canselBtn.click();//Close Loading
                },
                100);         
            });        
        }
    };

    for (var i = 0 ; i <= themes.length -1; i++) {
        themePlace.innerHTML += themes[i]()[0]().themeTemplate        
    }
    let popedThemes = gA(".theme");
    for(popedTheme of popedThemes) {

        popedTheme.addEventListener("click",theTheme)
    }
    
})();
