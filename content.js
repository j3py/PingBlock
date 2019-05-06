var anchors = document.getElementsByTagName('a');

for(var i = 0; i < anchors.length; i++){
    var a = anchors[i];
    if(a.hasAttribute('ping')){
        alert("Removing the following ping attribute: " + a.getAttribute('ping'));
        a.removeAttribute('ping');
    }
}