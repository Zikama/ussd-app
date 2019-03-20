
g=document.querySelector.bind(document);
gA = document.querySelectorAll.bind(document);
const progressbar = new Progresser("transparent");
const myAccount = new BankAccount();
myAccount.newAccount("Old Kampala","John");

function displayModal(v,calback) {
    const m = g(".modal");m.style.display = v;
    if(calback)
        calback(m) 
}
function displayMDs(name,v,calback) {
    if(name){
        const m = g(`${name}`);
        m.style.display = v;
        if(calback)
            calback()
    } 
}
function callLayer(ev,cb){
    const md_layer = g(".all_layer");
    if(ev == "0"){
       md_layer.style.maxWidth = "0"; 
       if(cb){
            cb(md_layer)
       }
    }
    if(ev == "1"){
       md_layer.style.maxWidth = "100%"; 
       if(cb){
            cb(md_layer)
       }
    }
    if(ev == "get1"){
        if (cb) {cb(md_layer)}
        return md_layer
    }
    
}
function initialModalContent(){
    const initContent = `<img src="assets/img/load.gif" width="50">`;
    writeToModal("write",(placeToWrite)=>{
        placeToWrite.innerHTML = "";
        placeToWrite.innerHTML = initContent;
    })
}
function popPrompt(ev){
    let promptContainer = g(".prompt-container");
    let promptTemplate = ` <input type="text" name="prompt" id="prompt" autofocus="true"> `;
    if(ev == "0"){
        if(promptContainer.querySelector("#prompt")){
            promptContainer.querySelector("#prompt").remove();
        }
        promptContainer.innerHTML = "";
    }if(ev == "1"){
        promptContainer.innerHTML = "";
        promptContainer.innerHTML = promptTemplate;
        promptContainer.querySelector("#prompt").focus();
    }
}
function writeToModal(text,cb) {
    return new Promise((resolve,reject)=>{
        const placeToWrite = g("#modal-message");
        if(text == "write")
        {
            if(cb){
                cb(placeToWrite)
            }
            return resolve(placeToWrite);
        }
        else if(text == "read")
        {
            let data = placeToWrite.innerHTML
            if(cb){
                cb(data)
            }
            return resolve(data)
        }
        else{
           return reject("The specified value is not one of our command, 'write' or 'read', and it should not be left null or Empty");
        }
            
    })
}

function callModalButton(ev,calback){
    const hideModal = g(".modal button#cansel");
    const okModal = g(".modal button#ok");
    if(ev == "1"){
        okModal.addEventListener("click",()=>{
            if (calback) {
                displayModal("none",calback())}
            else{
             displayModal("none")}
        });
        hideModal.setAttribute("disabled","");
        hideModal.style.opacity = "0";
        hideModal.style.width = "0";
        hideModal.style.fontSize= "1pt";
        hideModal.style.padding= "0";
    }
    if (ev == "0") {
        hideModal.addEventListener("click",()=>{initialModalContent();popPrompt("0");displayModal("none")});    }
    if (ev == "get1")    {
        return okModal   }
    if (ev == "get0")    {
        return hideModal }
}

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
        displayModal("flex", ()=>{ 
            callModalButton("0");
            let UIcode = g("#display").value;

            let okBtn = callModalButton("get1");

            okBtn.addEventListener("click",()=>{
               
            });
            function popServices(code){
                if(code == "*130#"){ // Also we can have many codes,so can check if the code provided is one of those
                    let apply = ()=>{

                    if (UIcode != "") {
                        writeToModal("write")
                        .then((placeToWrite)=>{
                            placeToWrite.innerHTML = "";
                            placeToWrite.innerHTML = "<ol></ol>";
                            popPrompt("1");
                        })
                        .catch((err)=>console.error(err));
                    }else{
                        writeToModal("write")
                        .then((placeToWrite)=>{
                            placeToWrite.innerHTML = "";
                            placeToWrite.innerHTML = "Please use our following short codes e.g [ *130# ]";
                            popPrompt("1");
                        })
                        .catch((err)=>console.error(err));
                    }

                    for (let i = 0; i < services.length; i++) {
                            let servicesTemplate = `<li>${services[i]}</li>`;
                             
                             writeToModal("write").then((placeToWrite)=>{
                                placeToWrite.querySelector("ol").innerHTML += servicesTemplate
                             })
                             .catch((err)=>console.error(err));
                        }
                    };apply()
                }
                else{
                    writeToModal("write")
                    .then((e)=>{
                       myAccount.code("all").then(data=>{
                             let initDetails = data;
                            myAccount.code(code,initDetails[1],initDetails[0]).then(data=>{
                                e.innerHTML = "";
                                e.innerHTML = data;
                            })
                            
                        });
                        

                        

                        popPrompt("0");

                        okBtn.addEventListener("click",()=>{
                           callModalButton("get0").click();
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
        callLayer("1",(md_layer)=>{
                const modal_right = g(".mdl");
            return Promise.resolve((()=>{
                modal_right.classList.add("mdr-open");
            })())
            .then(e=>{
                md_layer.addEventListener("click",(e)=>{
                    modal_right.classList.remove("mdr-open");
                   callLayer("0");
                })
            })
        });
    })
})();
// Modal Right
(function mdr(e){
    const btn_right = g("#md-r");
    btn_right.addEventListener("click",()=>{
        callLayer("1",(md_layer)=>{
                const modal_right = g(".mdr");
            return Promise.resolve((()=>{
                modal_right.classList.add("mdr-open");
            })())
            .then(e=>{
                md_layer.addEventListener("click",(e)=>{
                    modal_right.classList.remove("mdr-open");
                   callLayer("0");
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
           

            displayModal("flex", (m)=>{
                m.style.zIndex = "555";// Bring the Modal to the very to view
                callModalButton("0"); // All the modal to be closed if cansel button is clicked
                const closeMenu = callLayer("get1"); // get The close layer option
                let canselBtn = callModalButton("get0");// Get the cansel button on the Modal

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
            displayModal("flex", (m)=>{
                m.style.zIndex = "555";// Bring the Modal to the very to view
                callModalButton("0"); // All the modal to be closed if cansel button is clicked

                const closeMenu = callLayer("get1"); // get The close layer option
                let canselBtn = callModalButton("get0");// Get the cansel button on the Modal
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
