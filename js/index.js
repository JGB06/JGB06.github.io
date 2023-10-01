window.onload=function(){
    document.getElementById('pptx').onclick=mostrar;
    document.getElementById('pptxo').onclick=ocultar;
    
}

$showd = document.getElementById('diapositiva');
    document.getElementById('pptxo').style.display = 'none';


function mostrar() { 
    $showd.innerHTML = '<div class="embed-container"><iframe src="https://onedrive.live.com/embed?resid=46A20DE333878396%21329&authkey=!ABLx72hJ-GGKSg4&em=2" frameborder="0" allowfullscreen></iframe></div>';
    document.getElementById('diapositiva').style.display = 'block';
    document.getElementById('pptxo').style.display = 'inline';
    document.getElementById('pptx').style.display = 'none';
    
}
function ocultar(){
    document.getElementById('diapositiva').style.display = 'none';
    document.getElementById('pptx').style.display = 'inline';
    document.getElementById('pptxo').style.display = 'none';
    }

