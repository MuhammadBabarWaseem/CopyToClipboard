const copyButton = document.querySelector('.copy-button')
const copyText = document.querySelector('.copy-text')

copyButton.addEventListener('click',()=>{
    copyText.select();
    copyText.setSelectionRange(0,999999);
    document.execCommand('copy')
    copyButton.classList.toggle('Success')
    copyButton.innerHTML="Copied!";

    setTimeout(function(){
        copyButton.classList.toggle('Success')
        copyButton.innerHTML=`Copy`
    },2000);
})

