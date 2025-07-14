if(["excitedesign","pornhub",undefined].includes(location.pathname.split("/").filter(e => {if(e!=="")return e})[0])){
  document.body.addEventListener('click', function(){
    document.body.requestFullscreen();				
  });
}

let pageTitle = document.title + "　　 ";
setInterval(()=>{
  pageTitle =  pageTitle.substring(1) + pageTitle[0];
  document.title = "\u200C" + pageTitle.replace(/\s|　/g, " $&\u200C");
},500);