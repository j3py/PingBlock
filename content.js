var anchors = document.getElementsByTagName('a');

for(var i = 0; i < anchors.length; i++){
    var a = anchors[i];
    if(a.hasAttribute('ping')){
        a.removeAttribute('ping');
    }

    if(i = anchors.length-1){
        alert("PingBlock removed " + i + " ping attributes.");
    }
}