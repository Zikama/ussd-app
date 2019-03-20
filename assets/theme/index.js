const themes  = [
 function Default(){
 	return [function defaults(){
		 	this.bg="#fbfbfb",
			this.color= "#333"||"#222"||"#000",
			this.themeName="DEFAULT THEME",
			this.id="default";
		return {
			themeTemplate : `<button id="${this.id}" position-data="0" class="theme" style="background:${this.bg};color:${this.color};margin:5px 2px;padding:10px 15px;border:0;border-radius:5em;">${this.themeName}</button>`
		};
}, function body(){
	const styleTemp = `
	body{
		padding: 0;
		margin: 0;
		width: 100%;
		height: 100%;
	    background-color: #fbfbfb;
	}`;

	return styleTemp
},function header(){
	const styleTemp = `
	header {
	    display: flex;
	    width: 100%;
	    max-width: 100vw;
	    max-height: 83px;
	    height: 100%;
	    padding: 7px 0;
	    background: white;  
	    font-family: sans-serif;
	    justify-content: space-around;
	    background-color: white;
	    box-shadow: 1px -5px 14px 1px rgba(0, 0, 0, 0.36);
	    border-bottom: 1px solid hsl(0, 0%, 45%);
	    margin-bottom: 10px;
	    text-align: center;
	}`;
	return styleTemp
},function svgPath(){
	const styleTemp = `
	.gb_he path {
	    fill: unset;
	}`;
	return styleTemp
},function btnMore(){
	const styleTemp = `
	.btn-mo {
	    border: 0;
	    padding: 0;
	    margin: 0 14px;
	    font-size: 13pt;
	    background: 0;
	    font-weight: 800;
	    letter-spacing: 2px;
	    opacity: .55;
	    color: #222;
	    cursor: pointer;
	}`;
	return styleTemp
},function optionsContainer(){
	const styleTemp = `
	.options-container {
	    display: flex;
	    justify-content: space-between;
	    padding: 10px;
	    background: rgb(57, 79, 89);
	    /* border-top: 1px solid rgb(194, 194, 194);rgba(255, 255, 255, 0.39) */
	}`;
	return styleTemp
},function optionsContainerButton(){
	const styleTemp = `
	.options-container button {
	    border: 0;
	    font-size: 20pt;
	    padding: 10px 25px;
	    border-radius: 4px;
	    background: hsla(196, 21%, 31%, 0);
	    cursor: pointer;
	    color: #9ed42f;
	}`;
	return styleTemp
},function disCoContainer(){
	const styleTemp = `
	.dis-co-container {
	    display: flex;
	    border: 1px solid #55c6d4;
	    border-left: 0;
	    border-right: 0;
	    border-bottom: 0;
	    width: 40%;
	    margin: auto;
	    margin-bottom: 26px;
	    background: rgba(180, 235, 242, 0.18);
	}`;
	return styleTemp
},function displayInput(){
	const styleTemp = `
	input[name="display"] {
	    width: 100%;
	    height: 100%;
	    padding: 15px;
	    font-size: 29pt;
	    text-align: right;
	    border: 0;
	    background: transparent;
	    max-width: 70%;
	    color: unset;
	}`;
	return styleTemp
},function btnNumContainer(){
	const styleTemp = `
	.btn-n-container {
	    width: 100%;
	    display: flex;
	    background: transparent;
	    flex-wrap: wrap;
	    max-width: 30%;
	    border: 0;
	}`;
	return styleTemp
},function modalContent(){
	const styleTemp = `
	.modal-content {
	    width: 50%;
	    height: auto;
	    background: rgba(10, 38, 51, 0.77);
	    margin: auto;
	    border-radius: 4px;
	    box-shadow: -1px 5px 14px rgba(0, 0, 0, 0.5);
	    overflow: hidden;
	}`;
	return styleTemp
},function modalContentParagraph(){
	const styleTemp = `
	.modal-content p {
	    text-align: center;
	    font-size: x-large;
	    color: aliceblue;
	    font-family: sans-serif;
	    min-height: 80%;
	}`;
	return styleTemp
},function promptInput(){
	const styleTemp = `
	input#prompt {
	    width: 79%;
	    font-size: 34px;
	    margin: auto 50px;
	    padding: 4px 5px;
	    background: hsla(185, 43%, 79%, 0);
	    border: 0;
	    border-bottom: 1px solid #efefef;
	    -webkit-caret-color: hsl(208, 100%, 97%);
	       -moz-caret-color: hsl(208, 100%, 97%);
	        -ms-caret-color: hsl(208, 100%, 97%);
	         -o-caret-color: hsl(208, 100%, 97%);
	            caret-color: hsl(208, 100%, 97%);
	    color: hsl(208, 100%, 97%);
	    outline: 0;
	}`;
	return styleTemp
}]
},
 function v1(){
 	return [function defaults(){
		 	this.bg="rgb(18, 45, 57)",
			this.color= "azure"||"snow"||"white",
			this.themeName="DARK THEME",
			this.id="dark";
		return {
			themeTemplate : `<button id="${this.id}" position-data="1" class="theme" style="background:${this.bg};color:${this.color};margin:5px 2px;padding:10px 15px;border:0;border-radius:5em;">${this.themeName}</button>`
		};
}, function body(){
	const styleTemp = `
	body {
	    padding: 0;
	    margin: 0;
	    width: 100%;
	    height: 100%;
	    background-color: rgb(18, 45, 57);
	}`;

	return styleTemp
},function header(){
	const styleTemp = `
	header {
	    display: flex;
	    width: 100%;
	    max-width: 100vw;
	    max-height: 83px;
	    height: 100%;
	    padding: 7px 0;
	    background: #506c75;
	    font-family: sans-serif;
	    justify-content: space-around;
	    background-color: #122d39;
	    box-shadow: 1px -5px 14px 1px rgba(0, 0, 0, 0.36);
	    border-bottom: 1px solid #506c75;
	    margin-bottom: 10px;
	    text-align: center;
	}`;
	return styleTemp
},function svgPath(){
	const styleTemp = `
	.gb_he path {
	    fill: white;
	}`;
	return styleTemp
},function btnMore(){
	const styleTemp = `
	.btn-mo {
	    border: 0;
	    padding: 0;
	    margin: 0 14px;
	    font-size: 13pt;
	    background: 0;
	    font-weight: 750;
	    letter-spacing: 3px;
	    opacity: .55;
	    color: #fff;
	    cursor: pointer;
	}`;
	return styleTemp
},function optionsContainer(){
	const styleTemp = `
	.options-container {
	    display: flex;
	    justify-content: space-between;
	    padding: 10px;
	    background: #041b25;
	    box-shadow: 0 0 0;
	}`;
	return styleTemp
},function optionsContainerButton(){
	const styleTemp = `
	.options-container button {
	    border: 0;
	    font-size: 20pt;
	    padding: 10px 25px;
	    border-radius: 4px;
	    background: transparent;
	    cursor: pointer;
	    color: #9ed42f;
	}`;
	return styleTemp
},function disCoContainer(){
	const styleTemp = `
	.dis-co-container {
	    display: flex;
	    border: 1px solid hsla(193, 5%, 64%, 0.62);
	    border-left: 0;
	    border-right: 0;
	    border-bottom: 0;
	    border-top: 0;
	    margin: auto;
	    margin-bottom: 26px;
	    background: transparent;
	}`;
	return styleTemp
},function displayInput(){
	const styleTemp = `
	input[name="display"] {
	    width: 100%;
	    height: 100%;
	    padding: 15px;
	    font-size: 29pt;
	    text-align: right;
	    border: 0;
	    background: transparent;
	    max-width: 70%;
	    color: #ddf4f7;
	}`;
	return styleTemp
},function btnNumContainer(){
	const styleTemp = `
	.btn-n-container {
		display: flex;
	    background: transparent;
	    flex-wrap: wrap;
	    border: 1px solid hsla(193, 5%, 64%, 0.62);
	    border-left: 1px solid hsla(193, 5%, 64%, 0.62);
	    border-right: 1px solid hsla(193, 5%, 64%, 0.62);
	    border-top: 0;
	    border-bottom: 0;
	}`;
	return styleTemp
},function modalContent(){
	const styleTemp = `
	.modal-content {
	    height: auto;
	    background: rgba(4, 27, 37, 0.96);
	    margin: auto;
	    border-radius: 4px;
	    box-shadow: -1px 5px 14px rgba(0, 0, 0, 0.5);
	    overflow: hidden;
	}`;
	return styleTemp
},function modalContentParagraph(){
	const styleTemp = `
	.modal-content p {
	    text-align: center;
	    font-size: x-large;
	    color: #ddf4f7;
	    font-family: sans-serif;
	    min-height: 80%;
	}`;
	return styleTemp
},function promptInput(){
	const styleTemp = `
	input#prompt {
	    width: 79%;
	    font-size: 34px;
	    margin: auto 50px;
	    padding: 4px 5px;
	    background: hsla(185, 43%, 79%, 0);
	    color: #c2c4c5;
	    border: 0;
	    border-bottom: 1px solid #9ed42f;
	    outline: 0;
	    caret-color: yellowgreen;
	}`;
	return styleTemp
}]
},
 function v2(){
 	return [function defaults(){
			this.bg="#7a03d8",
			this.color= "azure"||"snow"||"white",
			this.themeName="VIOLETE THEME",
			this.id="violete";
		return {
			themeTemplate : `<button id="${this.id}" position-data="2" class="theme" style="background:${this.bg};color:${this.color};margin:5px 2px;padding:10px 15px;border:0;border-radius:5em;" >${this.themeName}</button>`
		};
}, function body(){
	const styleTemp = `
	body {
	    padding: 0;
	    margin: 0;
	    width: 100%;
	    height: 100%;
	    background-color: #7a03d8;
	}`;

	return styleTemp
},function header(){
	const styleTemp = `
	header {
	    display: flex;
	    width: 100%;
	    max-width: 100vw;
	    max-height: 83px;
	    height: 100%;
	    padding: 7px 0;
	    font-family: sans-serif;
	    justify-content: space-around;
	    background-color: #7a03d8;
	    box-shadow: 1px -5px 14px 1px rgba(0, 0, 0, 0.36);
	    border-bottom: 1px solid #a27cca;
	    margin-bottom: 10px;
	    text-align: center;
	}`;
	return styleTemp
},function svgPath(){
	const styleTemp = `
	.gb_he path {
	    fill: white;
	}`;
	return styleTemp
},function btnMore(){
	const styleTemp = `
	.btn-mo {
	    border: 0;
	    padding: 0;
	    margin: 0 14px;
	    font-size: 13pt;
	    background: 0;
	    font-weight: 750;
	    letter-spacing: 3px;
	    opacity: .55;
	    color: #fff;
	    cursor: pointer;
	}`;
	return styleTemp
},function optionsContainer(){
	const styleTemp = `
	.options-container {
	    display: flex;
	    justify-content: space-between;
	    padding: 10px;
	    background: #6202af;    
	    box-shadow: 0 0 0;
	}`;
	return styleTemp
},function optionsContainerButton(){
	const styleTemp = `
	.options-container button {
	    border: 0;
	    font-size: 20pt;
	    padding: 10px 25px;
	    border-radius: 4px;
	    background: transparent;
	    cursor: pointer;
	    color: #e7ec13;
	}`;
	return styleTemp
},function disCoContainer(){
	const styleTemp = `
	.dis-co-container {
	    display: flex;
	    border: 1px solid hsla(193, 5%, 64%, 0.62);
	    border-left: 0;
	    border-right: 0;
	    border-bottom: 0;
	    border-top: 0;
	    margin: auto;
	    margin-bottom: 26px;
	    background: transparent;
	}`;
	return styleTemp
},function displayInput(){
	const styleTemp = `
	input[name="display"] {
	    width: 100%;
	    height: 100%;
	    padding: 15px;
	    font-size: 29pt;
	    text-align: right;
	    border: 0;
	    background: transparent;
	    max-width: 70%;
	    color: #ddf4f7;
	}`;
	return styleTemp
},function btnNumContainer(){
	const styleTemp = `
	.btn-n-container {
		display: flex;
	    background: transparent;
	    flex-wrap: wrap;
	    border: 1px solid hsla(193, 5%, 64%, 0.62);
	    border-left: 1px solid hsla(193, 5%, 64%, 0.62);
	    border-right: 1px solid hsla(193, 5%, 64%, 0.62);
	    border-top: 0;
	    border-bottom: 0;
	}`;
	return styleTemp
},function modalContent(){
	const styleTemp = `
	.modal-content {
	    height: auto;
	    background: rgba(98, 3, 174, 0.9);
	    margin: auto;
	    border-radius: 4px;
	    box-shadow: -1px 5px 14px rgba(0, 0, 0, 0.5);
	    overflow: hidden;
	    /*box-shadow: -1px 5px 14px rgba(0, 0, 0, 0.5), inset 0 0 185px 20px rgb(58, 3, 101);*/
	}`;
	return styleTemp
},function modalContentParagraph(){
	const styleTemp = `
	.modal-content p {
	    text-align: center;
	    font-size: x-large;
	    color: #c2c4c5;
	    font-family: sans-serif;
	    min-height: 80%;
	}`;
	return styleTemp
},function promptInput(){
	const styleTemp = `
	input#prompt {
	    width: 79%;
	    font-size: 34px;
	    margin: auto 50px;
	    padding: 4px 5px;
	    background: hsla(185, 43%, 79%, 0);
	    color: #c2c4c5;
	    border: 0;
	    border-bottom: 1px solid #e7ec13;
	    outline: 0;
	    caret-color: #e7ec13;
	}`;
	return styleTemp
	}]
},
 function v3(){
 	return [function defaults(){
			this.bg="#d8038f",
			this.color= "azure"||"snow"||"white",
			this.themeName="PINK THEME",
			this.id="pink";
		return {
			themeTemplate : `<button id="${this.id}" position-data="3" class="theme" style="background:${this.bg};color:${this.color};margin:5px 2px;padding:10px 15px;border:0;border-radius:5em;" >${this.themeName}</button>`
		};
}, function body(){
	const styleTemp = `
	body {
	    padding: 0;
	    margin: 0;
	    width: 100%;
	    height: 100%;
	    background-color: #d8038f;
	}`;

	return styleTemp
},function header(){
	const styleTemp = `
	header {
	    display: flex;
	    width: 100%;
	    max-width: 100vw;
	    max-height: 83px;
	    height: 100%;
	    padding: 7px 0;
	    font-family: sans-serif;
	    justify-content: space-around;
	    background-color: #d8038f;
	    box-shadow: 1px -5px 14px 1px rgba(0, 0, 0, 0.36);
	    border-bottom: 1px solid #ed8dcc;
	    margin-bottom: 10px;
	    text-align: center;
	}`;
	return styleTemp
},function headerHead(){
	const styleTemp = `
	header h1 {
	    margin: auto 0 0;
	    padding: 0;
	    text-transform: uppercase;
	    color: #f5addc;
	    flex-grow: 1;
	}`;
	return styleTemp
},function svgPath(){
	const styleTemp = `
	.gb_he path {
	    fill: white;
	}`;
	return styleTemp
},function btnMore(){
	const styleTemp = `
	.btn-mo {
	    border: 0;
	    padding: 0;
	    margin: 0 14px;
	    font-size: 13pt;
	    background: 0;
	    font-weight: 750;
	    letter-spacing: 3px;
	    opacity: .55;
	    color: #fff;
	    cursor: pointer;
	}`;
	return styleTemp
},function optionsContainer(){
	const styleTemp = `
	.options-container {
	    display: flex;
	    justify-content: space-between;
	    padding: 10px;
	    background: #d00389;
	    box-shadow: inset 0 0 85px 27px rgb(165, 3, 109);
	}`;
	return styleTemp
},function optionsContainerButton(){
	const styleTemp = `
	.options-container button {
	    border: 0;
	    font-size: 20pt;
	    padding: 10px 25px;
	    border-radius: 4px;
	    background: transparent;
	    cursor: pointer;
	    color: #e7ec13;
	}`;
	return styleTemp
},function disCoContainer(){
	const styleTemp = `
	.dis-co-container {
	    display: flex;
	    border: 1px solid hsla(193, 5%, 64%, 0.62);
	    border-left: 0;
	    border-right: 0;
	    border-bottom: 0;
	    border-top: 0;
	    margin: auto;
	    margin-bottom: 26px;
	    background: transparent;
	}`;
	return styleTemp
},function displayInput(){
	const styleTemp = `
	input[name="display"] {
	    width: 100%;
	    height: 100%;
	    padding: 15px;
	    font-size: 29pt;
	    text-align: right;
	    border: 0;
	    background: transparent;
	    max-width: 70%;
	    color: #ddf4f7;
	}`;
	return styleTemp
},function eraser(){
	const styleTemp = `
	#erase {
	    font-size: 25pt;
	    border: 0;
	    color: #f5addc;
	    background: 0;
	    text-transform: capitalize;
	    height: 68px;
	    border-radius: 50%;
	    cursor: pointer;
	    outline: 0;
	    -webkit-transition: .2s linear;
	    -moz-transition: .2s linear;
	    -ms-transition: .2s linear;
	    -o-transition: .2s linear;
	    transition: .2s linear;
	}`;
	return styleTemp
},function btnNumContainer(){
	const styleTemp = `
	.btn-n-container {
		display: flex;
	    background: transparent;
	    flex-wrap: wrap;
	    border: 1px solid hsla(193, 5%, 64%, 0.62);
	    border-left: 1px solid hsla(193, 5%, 64%, 0.62);
	    border-right: 1px solid hsla(193, 5%, 64%, 0.62);
	    border-top: 0;
	    border-bottom: 0;
	}`;
	return styleTemp
},function btnNum(){
	const styleTemp = `
	.button-number {
	    width: 26%;
	    height: 24%;
	    margin: auto;
	    border: 0;
	    font-size: 40pt;
	    border-radius: 5em;
	    background: transparent;
	    color: #f5addc;
	    cursor: pointer;
	    outline: none;
	    -webkit-transition: .2s linear;
	    -moz-transition: .2s linear;
	    -ms-transition: .2s linear;
	    -o-transition: .2s linear;
	    transition: .2s linear;
	}`;
	return styleTemp
},function dailer(){
	const styleTemp = `
	#dailer {
	    border-radius: 5em;
	    text-align: center;
	    background: #c30482;
	    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); 
	    padding: 28px 0;
	    color: aliceblue;
	    font-size: 19pt;
	    width: 17%;
	    height: auto;
	}`;
	return styleTemp
},function modalContent(){
	const styleTemp = `
	.modal-content {
	    height: auto;
	    background: rgba(208, 3, 137, 0.89);
	    margin: auto;
	    border-radius: 4px;
	    box-shadow: -1px 5px 14px rgba(0, 0, 0, 0.5);
	    overflow: hidden;
	    box-shadow: -1px 5px 14px rgba(0, 0, 0, 0.5), inset 0 0 185px 20px #8e045f;
	}`;
	return styleTemp
},function modalContentParagraph(){
	const styleTemp = `
	.modal-content p {
	    text-align: center;
	    font-size: x-large;
	    color: #ffffff;
	    font-family: sans-serif;
	    min-height: 80%;
	}`;
	return styleTemp
},function promptInput(){
	const styleTemp = `
	input#prompt {
	    width: 79%;
	    font-size: 34px;
	    margin: auto 50px;
	    padding: 4px 5px;
	    background: hsla(185, 43%, 79%, 0);
	    color: #c2c4c5;
	    border: 0;
	    border-bottom: 1px solid #e7ec13;
	    outline: 0;
	    caret-color: #e7ec13;
	}`;
	return styleTemp
	}]
}
];/*#038672 v3

    darktheme=()=>{
        const themeTemplate = `
            <button id="dark" class="theme" style="background:${v1[0]().bg};color:${v1[0]().color};margin:5px 2px;padding:10px 15px;border:0;border-radius:5em;">${v1[0]().themeName}</button>
        `;
        themePlace.innerHTML += themeTemplate ;

        let themeV1 = g("#dark");
        const styleBody = g("style");

        themeV1.addEventListener("click",()=>{
            if(g("body").style.backgroundColor !== `${String(v1[0]().bg)}`){

                displayModal("flex", (m)=>{
                    m.style.zIndex = "555";// Bring the Modal to the very to view
                    callModalButton("0"); // All the modal to be closed if cansel button is clicked
                    let canselBtn = callModalButton("get0");// Get the cansel button on the Modal
                    const closeMenu = callLayer("get1"); // get The close layer option

                        // Take action after some time
                        setTimeout(()=>{
                            for (let i=1;i<v1.length;i++){
                                styleBody.innerHTML += v1[i](); // Apply new Theme's Styles
                            }

                            closeMenu.click();//Close Right Menu
                            canselBtn.click();//Close Loading
                        },500);         
                });
                
            }else{
                // console.log(v1[0]().bg.toString())
            }
            
        });
        console.log("v1[0]().bg.toString()")
    };darktheme();

    violetetheme=()=>{
        const themeTemplate = `
            <button id="violete" class="theme" style="background:${v2[0]().bg};color:${v2[0]().color};margin:5px 2px;padding:10px 15px;border:0;border-radius:5em;">${v2[0]().themeName}</button>
        `;
        themePlace.innerHTML += themeTemplate ;

        let themeV2 = g("#violete");
        const styleBody = g("style");

        themeV2.addEventListener("click",()=>{
            if(g("body").style.backgroundColor !== `${String(v2[0]().bg)}`){

                displayModal("flex", (m)=>{
                    m.style.zIndex = "555";// Bring the Modal to the very to view
                    callModalButton("0"); // All the modal to be closed if cansel button is clicked
                    let canselBtn = callModalButton("get0");// Get the cansel button on the Modal
                    const closeMenu = callLayer("get1"); // get The close layer option

                        // Take action after some time
                        setTimeout(()=>{
                            for (let i=1;i<v2.length;i++){
                                styleBody.innerHTML += v2[i](); // Apply new Theme's Styles
                            }

                            closeMenu.click();//Close Right Menu
                            canselBtn.click();//Close Loading
                        },500);         
                });
                
            }else{
                // console.log(v2[0]().bg.toString())
            }
        });
             console.log("v2[0]().bg.toString()");
    };violetetheme();*/