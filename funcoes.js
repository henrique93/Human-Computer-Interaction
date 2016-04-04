/*//////////////////////////////////////////////////////////////////
 /////////////////////// JAVA SCRIPT //////////////////////////////
////////////////////////////////////////////////////////////////*/

/* Funcao responsavel pelo funcionamento do relogio */
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('bar').innerHTML = h + ":" + m;
    setTimeout(function(){startTime()},500);
    if (sessionStorage.alarme_b1 == 1 || sessionStorage.alarme_b2 == 1 ||
     sessionStorage.alarme_b3 == 1 || sessionStorage.alarme_b4 == 1 ||
     sessionStorage.alarme_b5 == 1 || sessionStorage.alarme_b6 == 1 ||
     sessionStorage.alarme_b7 == 1 || sessionStorage.alarme_b8 == 1 ||
     sessionStorage.alarme_b9 == 1 || sessionStorage.alarme_b10 == 1 ||
     sessionStorage.alarme_b11 == 1 || sessionStorage.alarme_b12 == 1) {
         $(".imagem-alarme").show();
     }
}

/* Funcao auxiliar a funcao startTime */
function checkTime(i) {
    if (i<10) {i = "0" + i}  // add zero in front of numbers < 10
    return i;
}

/* Funcao que usar ambos o butao de retroceder e de bloquear, serve apenas
para chamar as duas funcoes com apenas um comando */
function buttons(event){
    retroceder(event);
    bloquear(event);
}

/* Funcao que muda para o menu anterior ao actual */
function retroceder(event) {
    location.href = 'javascript:history.go(-1)';
}

/* Funcao que muda o ecra para o ecra de bloquado */
function bloquear(event) {
    location.href = 'bloqueado.html';
}

/* Funcao que muda o ecra directamente para o menu inicial */
function inicio(event){
    setInterval(function () {location.href = 'menu_inicial.html';
    sessionStorage.removeItem("pc"); sessionStorage.removeItem("banda");
    sessionStorage.removeItem("amigo"); sessionStorage.removeItem("dp");}, 800);
}

function togglehidden(hide1 ,hide2 ){
    document.getElementById(hide1).style.display = "none";
    document.getElementById(hide2).style.display = "none";
    
}

function start(){
    startTime();
    setTimeout(togglehidden("barra", "barra-feed"),3000);
}

/* Funcao responsavel pela escolha do gif a aparecer no feed da camera, o gif
e escolhido consoante o palco e camera escolhidos pelo utilizador*/
function choosegif(){
    if (sessionStorage.pc == 11) {
        $("#gif").attr("src", "gifs/arctic1.gif");
    }
    else if (sessionStorage.pc == 12) {
        $("#gif").attr("src", "gifs/arctic2.gif"); 
    }
    else if (sessionStorage.pc == 13) {
        $("#gif").attr("src", "gifs/arctic3.gif"); 
    }
    else if (sessionStorage.pc == 14) {
        $("#gif").attr("src", "gifs/arctic4.gif"); 
    }
    else if (sessionStorage.pc == 21) {
        $("#gif").attr("src", "gifs/hardwell1.gif"); 
    }
    else if (sessionStorage.pc == 22) {
        $("#gif").attr("src", "gifs/hardwell2.gif"); 
    }
    else if (sessionStorage.pc == 23) {
        $("#gif").attr("src", "gifs/hardwell3.gif"); 
    }
    else if (sessionStorage.pc == 24) {
        $("#gif").attr("src", "gifs/hardwell4.gif"); 
    }
}

/* Funcao que verifica se existe um alarme agendado e, caso haja, em vez de
dar a opcao de agendar alarme, dá a opcao de remover alarme */
function agendar_remover(){
    if (sessionStorage.banda == "Eminem"){
        if (Number(sessionStorage.alarme_b1) == 1) {
            $("#alarme_remover").attr("src", "imagens/remover-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Remover";
        }
        else {
            $("#alarme_remover").attr("src", "imagens/alarme-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Alarme";
        }
    }
    else if (sessionStorage.banda == "Green Day"){
        if (Number(sessionStorage.alarme_b2) == 1) {
            $("#alarme_remover").attr("src", "imagens/remover-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Remover";
        }
        else {
            $("#alarme_remover").attr("src", "imagens/alarme-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Alarme";
        }
    }
    else if (sessionStorage.banda == "U2"){
        if (Number(sessionStorage.alarme_b3) == 1) {
            $("#alarme_remover").attr("src", "imagens/remover-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Remover";
        }
        else {
            $("#alarme_remover").attr("src", "imagens/alarme-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Alarme";
        }
    }
    else if (sessionStorage.banda == "Coldplay"){
        if (Number(sessionStorage.alarme_b4) == 1) {
            $("#alarme_remover").attr("src", "imagens/remover-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Remover";
        }
        else {
            $("#alarme_remover").attr("src", "imagens/alarme-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Alarme";
        }
    }
    else if (sessionStorage.banda == "Arctic Monkeys"){
        if (Number(sessionStorage.alarme_b5) == 1) {
            $("#alarme_remover").attr("src", "imagens/remover-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Remover";
        }
        else {
            $("#alarme_remover").attr("src", "imagens/alarme-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Alarme";
        }
    }
    else if (sessionStorage.banda == "Snoop Dog"){
        if (Number(sessionStorage.alarme_b6) == 1) {
            $("#alarme_remover").attr("src", "imagens/remover-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Remover";
        }
        else {
            $("#alarme_remover").attr("src", "imagens/alarme-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Alarme";
        }
    }
    else if (sessionStorage.banda == "Hardwell"){
        if (Number(sessionStorage.alarme_b7) == 1) {
            $("#alarme_remover").attr("src", "imagens/remover-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Remover";
        }
        else {
            $("#alarme_remover").attr("src", "imagens/alarme-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Alarme";
        }
    }
    else if (sessionStorage.banda == "Skrillex"){
        if (Number(sessionStorage.alarme_b8) == 1) {
            $("#alarme_remover").attr("src", "imagens/remover-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Remover";
        }
        else {
            $("#alarme_remover").attr("src", "imagens/alarme-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Alarme";
        }
    }
    else if (sessionStorage.banda == "Macklemore"){
        if (Number(sessionStorage.alarme_b9) == 1) {
            $("#alarme_remover").attr("src", "imagens/remover-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Remover";
        }
        else {
            $("#alarme_remover").attr("src", "imagens/alarme-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Alarme";
        }
    }
    else if (sessionStorage.banda == "Martin Garrix"){
        if (Number(sessionStorage.alarme_b10) == 1) {
            $("#alarme_remover").attr("src", "imagens/remover-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Remover";
        }
        else {
            $("#alarme_remover").attr("src", "imagens/alarme-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Alarme";
        }
    }
    else if (sessionStorage.banda == "The Kooks"){
        if (Number(sessionStorage.alarme_b11) == 1) {
            $("#alarme_remover").attr("src", "imagens/remover-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Remover";
        }
        else {
            $("#alarme_remover").attr("src", "imagens/alarme-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Alarme";
        }
    }
    else if (sessionStorage.banda == "MGMT"){
        if (Number(sessionStorage.alarme_b12) == 1) {
            $("#alarme_remover").attr("src", "imagens/remover-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Remover";
        }
        else {
            $("#alarme_remover").attr("src", "imagens/alarme-icon.png");
            document.getElementById("sp-agendar_remover").textContent = "Alarme";
        }
    }
}

/* Funcao responsavel por escrever o palco e camera actuais na barra superior */
function writetext() {
    var palco = (Math.floor(Number(sessionStorage.pc)/10));
    var camera = sessionStorage.pc%10;
    var tutorial = sessionStorage.tutorial;
    $("#palco_camera").html("Palco " + palco + " | Cam "  + camera);
    $("#progresso_tutorial").html("Tutorial " + tutorial + "/5");
    if (isNaN(sessionStorage.antecedencia)) {
        sessionStorage.antecedencia = 10;
    }
    $("#tempo_antecedencia").html(sessionStorage.antecedencia);
}

/* Funcao que cria o perfil do amigo seleccionado pelo utilizador */
function perfil() {
    $("#nome_barra").html(sessionStorage.amigo);
    $("#nome").html(sessionStorage.amigo);
    if (sessionStorage.amigo == "Barack Obama") {
        $("#imagem_sexo").attr("src", "imagens/sexo-m-icon.png");
        $("#imagem_perfil").attr("src", "imagens/perfis/Barack_Obama.jpg");
        $("#idade").html("53");
    }
    else if (sessionStorage.amigo == "Vladimir Putin") {
        $("#imagem_sexo").attr("src", "imagens/sexo-m-icon.png");
        $("#imagem_perfil").attr("src", "imagens/perfis/Vladimir_Putin.jpg");
        $("#idade").html("62");
    }
    else if (sessionStorage.amigo == "Angela Merkel") {
        $("#imagem_sexo").attr("src", "imagens/sexo-f-icon.png");
        $("#imagem_perfil").attr("src", "imagens/perfis/Angela_Merkel.jpg");
        $("#idade").html("60");
    }
    else if (sessionStorage.amigo == "Cavaco Silva") {
        $("#imagem_sexo").attr("src", "imagens/sexo-m-icon.png");
        $("#imagem_perfil").attr("src", "imagens/perfis/Cavaco_Silva.jpg");
        $("#idade").html("75");
    }
    else if (sessionStorage.amigo == "Success Kid") {
        $("#imagem_sexo").attr("src", "imagens/sexo-m-icon.png");
        $("#imagem_perfil").attr("src", "imagens/perfis/Success_Kid.jpg");
        $("#idade").html("8");
    }
    else if (sessionStorage.amigo == "Spider-man") {
        $("#imagem_sexo").attr("src", "imagens/sexo-m-icon.png");
        $("#imagem_perfil").attr("src", "imagens/perfis/Spider-man.jpg");
        $("#idade").html("21");
    }
    else if (sessionStorage.amigo == "Moist") {
        $("#imagem_sexo").attr("src", "imagens/sexo-f-icon.png");
        $("#imagem_perfil").attr("src", "imagens/perfis/Moist.jpg");
        $("#idade").html("78");
    }
    else if (sessionStorage.amigo == "Peter Retard") {
        $("#imagem_sexo").attr("src", "imagens/sexo-f-icon.png");
        $("#imagem_perfil").attr("src", "imagens/perfis/Peter_Retard.jpg");
        $("#idade").html("43");
    }
}

/* Funcao que cria o perfil do amigo encontrado pelo iRave para adicionar */
function adicionar_perfil() {
    if (isNaN(sessionStorage.adicionados)) {
        $("#nome_barra").html("Barack Obama");
        $("#imagem_sexo").attr("src", "imagens/sexo-m-icon.png");
        $("#imagem_perfil").attr("src", "imagens/perfis/Barack_Obama.jpg");
        $("#idade").html("53");
        $("#nome").html("Barack Obama");
    }
    else if (Number(sessionStorage.adicionados) == 1) {
        $("#nome_barra").html("Vladimir Putin");
        $("#imagem_sexo").attr("src", "imagens/sexo-m-icon.png");
        $("#imagem_perfil").attr("src", "imagens/perfis/Vladimir_Putin.jpg");
        $("#idade").html("62");
        $("#nome").html("Vladimir Putin");
    }
    else if (Number(sessionStorage.adicionados) == 2) {
        $("#nome_barra").html("Angela Merkel");
        $("#imagem_sexo").attr("src", "imagens/sexo-f-icon.png");
        $("#imagem_perfil").attr("src", "imagens/perfis/Angela_Merkel.jpg");
        $("#idade").html("60");
        $("#nome").html("Angela Merkel");
    }
    else if (Number(sessionStorage.adicionados) == 3) {
        $("#nome_barra").html("Cavaco Silva");
        $("#imagem_sexo").attr("src", "imagens/sexo-m-icon.png");
        $("#imagem_perfil").attr("src", "imagens/perfis/Cavaco_Silva.jpg");
        $("#idade").html("75");
        $("#nome").html("Cavaco Silva");
    }
    else if (Number(sessionStorage.adicionados) == 4) {
        $("#nome_barra").html("Success Kid");
        $("#imagem_sexo").attr("src", "imagens/sexo-m-icon.png");
        $("#imagem_perfil").attr("src", "imagens/perfis/Success_Kid.jpg");
        $("#idade").html("8");
        $("#nome").html("Success Kid");
    }
    else if (Number(sessionStorage.adicionados) == 5) {
        $("#nome_barra").html("Spider-man");
        $("#imagem_sexo").attr("src", "imagens/sexo-m-icon.png");
        $("#imagem_perfil").attr("src", "imagens/perfis/Spider-man.jpg");
        $("#idade").html("21");
        $("#nome").html("Spider-man");
    }
    else if (Number(sessionStorage.adicionados) == 6) {
        $("#nome_barra").html("Moist");
        $("#imagem_sexo").attr("src", "imagens/sexo-f-icon.png");
        $("#imagem_perfil").attr("src", "imagens/perfis/Moist.jpg");
        $("#idade").html("78");
        $("#nome").html("Moist");
    }
    else if (Number(sessionStorage.adicionados) == 7) {
        $("#nome_barra").html("Peter Retard");
        $("#imagem_sexo").attr("src", "imagens/sexo-m-icon.png");
        $("#imagem_perfil").attr("src", "imagens/perfis/Peter_Retard.jpg");
        $("#idade").html("43");
        $("#nome").html("Peter Retard");
    }
    else if (Number(sessionStorage.adicionados) == 8) {
        $("#imagem_perfil").hide();
        $("#imagem_sexo").hide();
        $("#nome").html("iRave não encontrado");
        $("#idade").hide();
        $("#adicionar").hide();
        $("#cancelar").attr("style", "left:32%");
        $("#cancelar").html("OK");
    }
}

/* Funcao que posiciona as cameras no mapa */
function posicao_cameras() {
    if (Number(sessionStorage.pc) == 10) {
        $("#camera1").attr("style", "top: 30%; left: 30%");
        $("#camera2").attr("style", "top: 50%; left: 50%");
        $("#camera3").attr("style", "top: 20%; left: 70%");
        $("#camera4").attr("style", "top: 80%; left: 30%");
    }
    else if (Number(sessionStorage.pc) == 20) {
        $("#camera1").attr("style", "top:35%; left:60%");
        $("#camera2").attr("style", "top:65%; left:60%");
        $("#camera3").attr("style", "top:20%; left:50%");
        $("#camera4").attr("style", "top:50%; left:30%");
    }
}


/* Funcao responsavel pelo tutorial */
function tutorial() {
    sessionStorage.tutorial = Number(sessionStorage.tutorial) + 1;
    if (Number(sessionStorage.tutorial) == 1) {
        $("#mensagem_tutorial").html("Bem vindo ao tutorial do <br> iRave. <br><br> Toque no ecrã para continuar.");
        writetext();
    }
    else if (Number(sessionStorage.tutorial) == 2) {
        $("#mensagem_tutorial").html("Para voltar atrás, prima o botão da esquerda.");
        writetext();
    }
    else if (Number(sessionStorage.tutorial) == 3) {
        $("#mensagem_tutorial").html("Para voltar ao menu inicial, manter pressionado o botão da esquerda.");
        writetext();
    }
    else if (Number(sessionStorage.tutorial) == 4) {
        $("#mensagem_tutorial").html("Para bloquear <br> ou desbloquear, prima o botão <br> superior direito.");
        writetext();
    }
    else if (Number(sessionStorage.tutorial) == 5) {
        $("#mensagem_tutorial").html("Para obter ajuda, <br> prima o botão <br> inferior direito.");
        writetext();
    }
    else if (Number(sessionStorage.tutorial) == 6) {
        sessionStorage.removeItem("tutorial");
        if (isNaN(sessionStorage.tutorial_feito)) {
            sessionStorage.tutorial_feito = 1
            location.href = 'menu_inicial.html';
        }
        else {
            retroceder(event);
        }
    }
}

/* Funcao responsavel por adicionar amigos */
function adicionar_amigo() {
    $(".no").css("pointerEvents", "none");
    var aux;
    var index = sessionStorage.nr_amigos;
    $("#amigo_adicionado").fadeIn();
    if (isNaN(sessionStorage.adicionados)) {
            var amigos = new Array();
            amigos[0] = "Barack Obama";
            sessionStorage.amigos = JSON.stringify(amigos);
            sessionStorage.adicionados = 1;
            sessionStorage.nr_amigos = 0;
    }
    else if (Number(sessionStorage.adicionados) == 1) {
            aux = JSON.parse(sessionStorage.amigos);
            aux[index] = "Vladimir Putin";
            sessionStorage.amigos = JSON.stringify(aux);
            sessionStorage.adicionados = 2;
    }
    else if (Number(sessionStorage.adicionados) == 2) {

            aux = JSON.parse(sessionStorage.amigos);
            aux[index] = "Angela Merkel";
            sessionStorage.amigos = JSON.stringify(aux);
            sessionStorage.adicionados = 3;
    }
    else if (Number(sessionStorage.adicionados) == 3) {
            aux = JSON.parse(sessionStorage.amigos);
            aux[index] = "Cavaco Silva";
            sessionStorage.amigos = JSON.stringify(aux);
            sessionStorage.adicionados = 4;
    }
    else if (Number(sessionStorage.adicionados) == 4) {
            aux = JSON.parse(sessionStorage.amigos);
            aux[index] = "Success Kid";
            sessionStorage.amigos = JSON.stringify(aux);
            sessionStorage.adicionados = 5;
    }
    else if (Number(sessionStorage.adicionados) == 5) {

            aux = JSON.parse(sessionStorage.amigos);
            aux[index] = "Spider-man";
            sessionStorage.amigos = JSON.stringify(aux);
            sessionStorage.adicionados = 6;
    }
    else if (Number(sessionStorage.adicionados) == 6) {
            aux = JSON.parse(sessionStorage.amigos);
            aux[index] = "Moist";
            sessionStorage.amigos = JSON.stringify(aux);
            sessionStorage.adicionados = 7;
    }
    else if (Number(sessionStorage.adicionados) == 7) {
            aux = JSON.parse(sessionStorage.amigos);
            aux[index] = "Peter Retard";
            sessionStorage.amigos = JSON.stringify(aux);
            sessionStorage.adicionados = 8;
    }
    else if (Number(sessionStorage.adicionados) == 8) {
        /* Limite de amigos alcancado */
    }
    sessionStorage.nr_amigos++;
}

function remover_amigo() {
    var amigos = JSON.parse(sessionStorage.amigos);
    var index = amigos.indexOf(sessionStorage.amigo);
    if (index > -1) {
        amigos.splice(index,1);
         sessionStorage.nr_amigos--;
    }
    sessionStorage.amigos = JSON.stringify(amigos);
    $(".no").css("pointerEvents","none");
    $("#amigo_removido").fadeIn();
}



/* Funcao responsavel por escolher a foto do amigo */
function foto_amigo(nome) {
    if(nome == "Barack Obama") {
        return "imagens/perfis/Barack_Obama.jpg";
    }
    else if(nome == "Vladimir Putin"){
        return "imagens/perfis/Vladimir_Putin.jpg";
    }
    else if(nome == "Angela Merkel"){
        return "imagens/perfis/Angela_Merkel.jpg";
    }
    else if(nome == "Cavaco Silva"){
        return "imagens/perfis/Cavaco_Silva.jpg";
    }
    else if(nome == "Success Kid"){
        return "imagens/perfis/Success_Kid.jpg";
    }
    else if(nome == "Spider-man"){
        return "imagens/perfis/Spider-man.jpg";
    }
    else if(nome == "Moist"){
        return "imagens/perfis/Moist.jpg";
    }
    else if(nome == "Peter Retard"){
        return "imagens/perfis/Peter_Retard.jpg";
    }
}

/* Funcao responsavel por remover todos os alarmes agendados pelo utilizador */
$(document).ready(function(){
    $("#remover").click(function(){
        $("#tabela").css("pointerEvents", "none");
        if (sessionStorage.alarme_b1 == 1 || sessionStorage.alarme_b2 == 1 ||
            sessionStorage.alarme_b3 == 1 || sessionStorage.alarme_b4 == 1 ||
            sessionStorage.alarme_b5 == 1 || sessionStorage.alarme_b6 == 1 ||
            sessionStorage.alarme_b7 == 1 || sessionStorage.alarme_b8 == 1 ||
            sessionStorage.alarme_b9 == 1 || sessionStorage.alarme_b10 == 1 ||
            sessionStorage.alarme_b11 == 1 || sessionStorage.alarme_b12 == 1){
        sessionStorage.removeItem("alarme_b1");
        sessionStorage.removeItem("alarme_b2");
        sessionStorage.removeItem("alarme_b3");
        sessionStorage.removeItem("alarme_b4");
        sessionStorage.removeItem("alarme_b5");
        sessionStorage.removeItem("alarme_b6");
        sessionStorage.removeItem("alarme_b7");
        sessionStorage.removeItem("alarme_b8");
        sessionStorage.removeItem("alarme_b9");
        sessionStorage.removeItem("alarme_b10");
        sessionStorage.removeItem("alarme_b11");
        sessionStorage.removeItem("alarme_b12");
        $("#removido").fadeIn();
        $(".imagem-alarme").hide();
        }
        else
        $("#naoremove").fadeIn();
    });
});

/* Funcao que cria uma variavel que indica o que amigo foi seleccionado pelo
utilizador */
function seleccionar_amigo(){
    if (isNaN(sessionStorage.amigos)) {
        var amigos = JSON.parse(sessionStorage.amigos);
        if (Number(sessionStorage.nr_amigos) == 2) {
            $("#amigo1").click(function(){
            sessionStorage.amigo = amigos[0];
            location.href='amigos_menu_encontrar.html';
        });
            $("#amigo2").click(function(){
            sessionStorage.amigo = amigos[0];
            location.href='amigos_menu_encontrar.html';
        });
            $("#amigo3").click(function(){
            sessionStorage.amigo = amigos[1];
            location.href='amigos_menu_encontrar.html';
        });
            $("#amigo4").click(function(){
            sessionStorage.amigo = amigos[1];
            location.href='amigos_menu_encontrar.html';
        });
        }
        else {
            $("#amigo1").click(function(){
                sessionStorage.amigo = amigos[0];
                location.href='amigos_menu_encontrar.html';
            });
            $("#amigo2").click(function(){
                sessionStorage.amigo = amigos[1];
                location.href='amigos_menu_encontrar.html';
            });
            $("#amigo3").click(function(){
                sessionStorage.amigo = amigos[2];
                location.href='amigos_menu_encontrar.html';
            });
            $("#amigo4").click(function(){
                sessionStorage.amigo = amigos[3];
                location.href='amigos_menu_encontrar.html';
            });
            $("#amigo5").click(function(){
                sessionStorage.amigo = amigos[4];
                location.href='amigos_menu_encontrar.html';
            });
            $("#amigo6").click(function(){
                sessionStorage.amigo = amigos[5];
                location.href='amigos_menu_encontrar.html';
            });
            $("#amigo7").click(function(){
                sessionStorage.amigo = amigos[6];
                location.href='amigos_menu_encontrar.html';
            });
            $("#amigo8").click(function(){
                sessionStorage.amigo = amigos[7];
                location.href='amigos_menu_encontrar.html';
            });
        }
    }
}

/* Funcao responsavel pelo aparecimento dos amigos adicionados no menu dos
amigos */
function amigos_adicionados(){
    if (isNaN(sessionStorage.amigos)) {
        var amigos = JSON.parse(sessionStorage.amigos);
        if (Number(sessionStorage.nr_amigos) == 2) {
            $("#amigo1_foto").attr("src", foto_amigo(amigos[0]));
            $("#amigo2_nome").html(amigos[0]);

            $("#amigo3_foto").attr("src", foto_amigo(amigos[1]));
            $("#amigo4_nome").html(amigos[1]);
        }
        else {
            $("#amigo1_foto").attr("src", foto_amigo(amigos[0]));
            $("#amigo1_nome").html(amigos[0]);

            $("#amigo2_foto").attr("src", foto_amigo(amigos[1]));
            $("#amigo2_nome").html(amigos[1]);

            $("#amigo3_foto").attr("src", foto_amigo(amigos[2]));
            $("#amigo3_nome").html(amigos[2]);

            $("#amigo4_foto").attr("src", foto_amigo(amigos[3]));
            $("#amigo4_nome").html(amigos[3]);

            $("#amigo5_foto").attr("src", foto_amigo(amigos[4]));
            $("#amigo5_nome").html(amigos[4]);

            $("#amigo6_foto").attr("src", foto_amigo(amigos[5]));
            $("#amigo6_nome").html(amigos[5]);

            $("#amigo7_foto").attr("src", foto_amigo(amigos[6]));
            $("#amigo7_nome").html(amigos[6]);

            $("#amigo8_foto").attr("src", foto_amigo(amigos[7]));
            $("#amigo8_nome").html(amigos[7]);
        }
    }
}

function tempo_antecedencia() {
    $("#antecedencia_mais").click(function(){
        if (Number(sessionStorage.antecedencia) != 120) {
            sessionStorage.antecedencia++;
            writetext();
        }
    });
    $("#antecedencia_menos").click(function(){
        if (Number(sessionStorage.antecedencia) != 1) {
            sessionStorage.antecedencia--;
            writetext();
        }
    });
}

/*//////////////////////////////////////////////////////////////////
 ///////////////////// FIM JAVA SCRIPT ////////////////////////////
////////////////////////////////////////////////////////////////*/


/*//////////////////////////////////////////////////////////////////
 ////////////////////////// JQUERY ////////////////////////////////
////////////////////////////////////////////////////////////////*/

/* Funcao responsavel pelo efeito de fade in */
$(document).ready(function(){
    var timer = setTimeout(function(){ $(".fade").fadeOut(); }, 3000);
    $(".ecra").click(function(){
        $(".fade").fadeIn(400,function(){
            clearTimeout(timer);
            timer = setTimeout(function(){ $(".fade").fadeOut(); }, 3000);
        });
    });
});

/* Funcao responsavel pelo efeito de fade out */
$(document).ready(function(){
    $(".botao-ok").click(function(){
        $(".alerta-alarme").fadeOut();
        $(".ajuda-popup").fadeOut();
        $("#tabela").css("pointerEvents", "auto");
        $(".fade").css("pointerEvents", "auto");
        $(".sem_toque").css("pointerEvents","auto");
    });
});

/* Funcao que altera o valor do pc correspondente ao palco, e a camera caso seja
escolhida pelo menu de listar cameras */
$(document).ready(function(){
    $("#palco1").click(function(){
        sessionStorage.pc = 10;
    });
    $("#palco2").click(function(){
        sessionStorage.pc = 20;
    });
    $("#camera1").click(function(){
        sessionStorage.pc = Number(sessionStorage.pc) + 1;
    });
    $("#camera2").click(function(){
        sessionStorage.pc = Number(sessionStorage.pc) + 2;
    });
    $("#camera3").click(function(){
        sessionStorage.pc = Number(sessionStorage.pc) + 3;
    });
    $("#camera4").click(function(){
        sessionStorage.pc = Number(sessionStorage.pc) + 4;
    });
});

/* Funcao que altera o valor do dp correspondente ao dia e ao palco caso seja
escolhidos pelo utilizador */
$(document).ready(function(){
    $("#dia1").click(function(){
        sessionStorage.dp = 10;
    });
    $("#dia2").click(function(){
        sessionStorage.dp = 20;
    });
    $("#eventos_palco1").click(function(){
        sessionStorage.dp = Number(sessionStorage.dp) + 1;
    });
    $("#eventos_palco2").click(function(){
        sessionStorage.dp = Number(sessionStorage.dp) + 2;
    });
});

/* Funcao que altera o valor de pc quando se muda de camera directamente no
feed para a camera seguinte */
$(document).ready(function() {
    $("#right_bt").click(function(){
    if ((sessionStorage.pc % 10) + 1 > 4) {
        sessionStorage.pc = Number(sessionStorage.pc) - 3;
    }
    else {
       sessionStorage.pc = Number(sessionStorage.pc) + 1;
    }
    choosegif();
    writetext();
    });
});

/* Funcao que altera o valor de pc quando se muda de camera directamente no
feed para a camera anterior */
$(document).ready(function() {
    $("#left_bt").click(function(){
    if ((sessionStorage.pc % 10) - 1 < 1) {
        sessionStorage.pc = Number(sessionStorage.pc) + 3;
    }
    else {
       sessionStorage.pc = Number(sessionStorage.pc) - 1;
    }
    choosegif();
    writetext();
    });
});

/* Funcao que remove o valor do pc e do dp correspondente as cameras (2 digito)
+, ou seja, mete o segundo digito do valor do pc e do dp a 0 */
$(document).ready(function() {
    $("#esquerdabtfeed").click(function(){
        sessionStorage.pc = Math.floor(Number(sessionStorage.pc)/10) * 10;
        sessionStorage.dp = Math.floor(Number(sessionStorage.dp)/10) * 10;
    });
});

/* Funcao que remove o valor do pc (palco/camera) assim que o utilizador
retrocede para o menu de escolha dos palcos ou assim que vai directamente
para o menu inicial */
$(document).ready(function() {
    $("#esquerdabtlimpa").click(function(){
        sessionStorage.removeItem("pc");
        sessionStorage.removeItem("dp");
        sessionStorage.removeItem("amigo");
        sessionStorage.removeItem("banda");
    });
});


/* Funcao responsavel pelo aparecimento do pop-up de sincronizar */
$(document).ready(function(){
    $("#sync").click(function() {
        $("#syncbt").attr("src", "gifs/loading.gif");
        $("#sync-popup").delay(3000).fadeIn(400);
        $("#syncbt").delay(3000).queue(function(next) {
            $(this).attr("src", "imagens/sync-icon.png");
            next();
        });
        $(".fade").css("pointerEvents","none");
    });
});

/* Funcao responsavel pelo aparecimento do pop-up de funcionalidade nao
implementada */
$(document).ready(function(){
    $(".nao-implementado").click(function() {
        $("#nao_implementado_popup").fadeIn(400);
        $(".fade").css("pointerEvents","none");
    });
});

/* Funcao responsavel por agendar e remover alarmes para os eventos escolhidos
pelo utilizador */
$(document).ready(function(){
    $("#alarme").click(function(){
        $("#tabela").css("pointerEvents", "none");
        if (sessionStorage.banda == "Eminem") {
            if (Number(sessionStorage.alarme_b1) == 1) {
                sessionStorage.removeItem("alarme_b1");
                $("#ja-criado").fadeIn();
            }
            else {
                $("#alerta-alarme").fadeIn();
                sessionStorage.alarme_b1 = 1;
                $(".imagem-alarme").fadeIn();
            }
        }
        else if (sessionStorage.banda == "Green Day") {
            if (Number(sessionStorage.alarme_b2) == 1) {
                sessionStorage.removeItem("alarme_b2");
                $("#ja-criado").fadeIn();
            }
            else {
                $("#alerta-alarme").fadeIn();
                sessionStorage.alarme_b2 = 1;
                $(".imagem-alarme").fadeIn();
            }
        }
        else if (sessionStorage.banda == "U2") {
            if (Number(sessionStorage.alarme_b3) == 1) {
                sessionStorage.removeItem("alarme_b3");
                $("#ja-criado").fadeIn();
            }
            else {
                $("#alerta-alarme").fadeIn();
                sessionStorage.alarme_b3 = 1;
                $(".imagem-alarme").fadeIn();
            }
        }
        else if (sessionStorage.banda == "Coldplay") {
            if (Number(sessionStorage.alarme_b4) == 1) {
                sessionStorage.removeItem("alarme_b4");
                $("#ja-criado").fadeIn();
            }
            else {
                $("#alerta-alarme").fadeIn();
                sessionStorage.alarme_b4 = 1;
                $(".imagem-alarme").fadeIn();
            }
        }
        else if (sessionStorage.banda == "Arctic Monkeys") {
            if (Number(sessionStorage.alarme_b4) == 1) {
                sessionStorage.removeItem("alarme_b5");
                $("#ja-criado").fadeIn();
            }
            else {
                $("#alerta-alarme").fadeIn();
                sessionStorage.alarme_b5 = 1;
                $(".imagem-alarme").fadeIn();
            }
        }
        else if (sessionStorage.banda == "Snoop Dog") {
            if (Number(sessionStorage.alarme_b6) == 1) {
                sessionStorage.removeItem("alarme_b6");
                $("#ja-criado").fadeIn();
            }
            else {
                $("#alerta-alarme").fadeIn();
                sessionStorage.alarme_b6 = 1;
                $(".imagem-alarme").fadeIn();
            }
        }
        else if (sessionStorage.banda == "Hardwell") {
            if (Number(sessionStorage.alarme_b7) == 1) {
                sessionStorage.removeItem("alarme_b7");
                $("#ja-criado").fadeIn();
            }
            else {
                $("#alerta-alarme").fadeIn();
                sessionStorage.alarme_b7 = 1;
                $(".imagem-alarme").fadeIn();
            }
        }
        else if (sessionStorage.banda == "Skrillex") {
            if (Number(sessionStorage.alarme_b8) == 1) {
                sessionStorage.removeItem("alarme_b8");
                $("#ja-criado").fadeIn();
            }
            else {
                $("#alerta-alarme").fadeIn();
                sessionStorage.alarme_b8 = 1;
                $(".imagem-alarme").fadeIn();
            }
        }
        else if (sessionStorage.banda == "Macklemore") {
            if (Number(sessionStorage.alarme_b9) == 1) {
                sessionStorage.removeItem("alarme_b9");
                $("#ja-criado").fadeIn();
            }
            else {
                $("#alerta-alarme").fadeIn();
                sessionStorage.alarme_b9 = 1;
                $(".imagem-alarme").fadeIn();
            }
        }
        else if (sessionStorage.banda == "Martin Garrix") {
            if (Number(sessionStorage.alarme_b10) == 1) {
                sessionStorage.removeItem("alarme_b10");
                $("#ja-criado").fadeIn();
            }
            else {
                $("#alerta-alarme").fadeIn();
                sessionStorage.alarme_b10 = 1;
                $(".imagem-alarme").fadeIn();
            }
        }
        else if (sessionStorage.banda == "The Kooks") {
            if (Number(sessionStorage.alarme_b11) == 1) {
                sessionStorage.removeItem("alarme_b11");
                $("#ja-criado").fadeIn();
            }
            else {
                $("#alerta-alarme").fadeIn();
                sessionStorage.alarme_b11 = 1;
                $(".imagem-alarme").fadeIn();
            }
        }
        else if (sessionStorage.banda == "MGMT") {
            if (Number(sessionStorage.alarme_b12) == 1) {
                sessionStorage.removeItem("alarme_b12");
                $("#ja-criado").fadeIn();
            }
            else {
                $("#alerta-alarme").fadeIn();
                sessionStorage.alarme_b12 = 1;
                $(".imagem-alarme").fadeIn();
            }
        }
        agendar_remover();
        if (sessionStorage.alarme_b1 != 1 && sessionStorage.alarme_b2 != 1 && 
             sessionStorage.alarme_b3 != 1 && sessionStorage.alarme_b4 != 1 &&
             sessionStorage.alarme_b5 != 1 && sessionStorage.alarme_b6 != 1 &&
             sessionStorage.alarme_b7 != 1 && sessionStorage.alarme_b8 != 1 &&
             sessionStorage.alarme_b9 != 1 && sessionStorage.alarme_b10 != 1 &&
             sessionStorage.alarme_b11 != 1 && sessionStorage.alarme_b12 != 1) {
            $(".imagem-alarme").fadeOut();
        }
    });
});


$(document).ready(function(){
    $(".botao-ok-1").click(function(){
        location.href = 'amigos.html';
    });
});

$(document).ready(function(){
    $(".botao-ok-2").click(function(){
        if(isNaN(sessionStorage.nr_amigos) || sessionStorage.nr_amigos == 0)
            location.href = 'amigos.html';
        else
            location.href = 'amigos_encontrar.html';
    });
});


/* Funcao responsavel pelo botao de ajuda */
$(document).ready(function(){
    /* Ajuda menu inicial */
    $("#btajuda-menu").click(function() {
        $(".ajuda").html("Seleciona a funcionalidade pretendida");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    /* Fim ajuda menu inicial */

    /* Ajuda AMIGOS */
    $("#btajuda-amigos").click(function() {
        $(".ajuda").html("Seleciona uma opção");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    $("#btajuda-amigos_adicionar").click(function() {
        $(".ajuda").html("Aguarda um momento");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    $("#btajuda-amigos_adicionar_1").click(function() {
        $(".ajuda").html("Confirma se pretendes adicionar");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    $("#btajuda-amigos_encontrar").click(function() {
        $(".ajuda").html("Seleciona um amigo");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    $("#btajuda-amigos_menu_encontrar").click(function() {
        $(".ajuda").html("Seleciona uma opção");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    $("#btajuda-amigos_localizar").click(function() {
        $(".ajuda").html("Clica em IR para obter indicações");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    $("#btajuda-amigos_ir").click(function() {
        $(".ajuda").html("Segue a direção da seta");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    $("#btajuda-amigos_perfil").click(function() {
        $(".ajuda").html("Este é o perfil do teu amigo");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    $("#btajuda-amigos_remover").click(function() {
        $(".ajuda").html("Confirma se pretendes remover");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    /* Fim ajuda amigos */

    /* Ajuda CAMARAS */
    $("#btajuda-cameras").click(function() {
        $(".ajuda").html("Seleciona um palco");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    $("#btajuda-cameras_palco").click(function() {
        $(".ajuda").html("Seleciona uma câmara ou clica em listar");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    $("#btajuda-cameras_seleccionar").click(function() {
        $(".ajuda").html("Seleciona uma câmara");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    $("#btajuda-cameras_feed").click(function() {
        $(".ajuda").html("Podes mudar de câmara ou sincronizar o video com outro dispositivo");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    /* Fim ajuda camaras */

    /* Ajuda EVENTOS */
    $("#btajuda-eventos").click(function() {
        $(".ajuda").html("Seleciona uma opção");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    $("#btajuda-eventos_programa").click(function() {
        $(".ajuda").html("Seleciona um dia");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    $("#btajuda-eventos_palcos").click(function() {
        $(".ajuda").html("Seleciona um palco");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    $("#btajuda-eventos_programa_palco").click(function() {
        $(".ajuda").html("Seleciona uma banda / artista");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    $("#btajuda-eventos_artistas").click(function() {
        $(".ajuda").html("Seleciona um artista");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    $("#btajuda-eventos_banda").click(function() {
        $(".ajuda").html("Podes agendar um alarme para esta banda / evento");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    /* Fim ajuda eventos */

    /* Ajuda DEFINICOES */
    $("#btajuda-definicoes").click(function() {
        $(".ajuda").html("Seleciona uma opção");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    $("#btajuda-definicoes_alarme").click(function() {
        $(".ajuda").html("Podes alterar o tempo com que serás alertado ou remover todos os alarmes");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    $("#btajuda-definicoes_perfil").click(function() {
        $(".ajuda").html("Este é o teu perfil que os teus amigos vêem");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    $("#btajuda-tutorial").click(function() {
        $(".ajuda").html("Clica no ecrã para continuar o tutorial");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
    /* Fim ajuda definicoes */
    
    $("#btajuda-bloqueado").click(function() {
        $(".ajuda").html("Pressione o botão superior direito para desbloquear");
        $("#ajuda").fadeIn(400);
        $(".sem_toque").css("pointerEvents","none");
    });
});


/*//////////////////////////////////////////////////////////////////
 /////////////////////// FIM JQUERY ///////////////////////////////
////////////////////////////////////////////////////////////////*/



/*//////////////////////////////////////////////////////////////////
 //////////////////// PERFIS / PROGRAMA ///////////////////////////
////////////////////////////////////////////////////////////////*/


/*//////////////////////// PROGRAMA //////////////////////////////*/
/* Funcao responsavel pelo programa do festival */
function programa() {
    if (Number(sessionStorage.dp) == 11) {
        $("#programa1").html("18h50 <br> MGMT");
        $("#prog_banda1").click(function(){
           sessionStorage.banda = "MGMT";
        });
        $("#programa2").html("20h30 <br> Arctic Monkeys");
        $("#prog_banda2").click(function(){
           sessionStorage.banda = "Arctic Monkeys";
        });
        $("#programa3").html("22h00 <br> Coldplay");
        $("#prog_banda3").click(function(){
           sessionStorage.banda = "Coldplay";
        });
    }
    else if (Number(sessionStorage.dp) == 12) {
        $("#programa1").html("23h00 <br> Martin Garrix");
        $("#prog_banda1").click(function(){
           sessionStorage.banda = "Martin Garrix";
        });
        $("#programa2").html("00h30 <br> Hardwell");
        $("#prog_banda2").click(function(){
           sessionStorage.banda = "Hardwell";
        });
        $("#programa3").html("2h00 <br> Skrillex ");
        $("#prog_banda3").click(function(){
           sessionStorage.banda = "Skrillex";
        });
    }
    else if (Number(sessionStorage.dp) == 21) {
        $("#programa1").html("18h50 <br> The Kooks");
        $("#prog_banda1").click(function(){
           sessionStorage.banda = "The Kooks";
        });
        $("#programa2").html("20h30 <br> Green Day");
        $("#prog_banda2").click(function(){
           sessionStorage.banda = "Green Day";
        });
        $("#programa3").html("22h00 <br> U2");
        $("#prog_banda3").click(function(){
           sessionStorage.banda = "U2";
        });
    }
    else if (Number(sessionStorage.dp) == 22) {
        $("#programa1").html("23h00 <br> Macklemore");
        $("#prog_banda1").click(function(){
           sessionStorage.banda = "Macklemore";
        });
        $("#programa2").html("00h30 <br> Snoop Dog");
        $("#prog_banda2").click(function(){
           sessionStorage.banda = "Snoop Dog";
        });
        $("#programa3").html("2h00 <br> Eminem");
        $("#prog_banda3").click(function(){
           sessionStorage.banda = "Eminem";
        });
    }
}


/*///////////////// SELECCIONAR BANDA ///////////////////////////*/
/* Funcao que cria uma variavel que indica que banda foi seleccionada pelo
utilizador */
$(document).ready(function(){
    $("#banda1").click(function(){
        sessionStorage.banda = "Eminem";
    });
    $("#banda2").click(function(){
        sessionStorage.banda = "Green Day";
    });
    $("#banda3").click(function(){
        sessionStorage.banda = "U2";
    });
    $("#banda4").click(function(){
        sessionStorage.banda = "Coldplay";
    });
    $("#banda5").click(function(){
        sessionStorage.banda = "Arctic Monkeys";
    });
    $("#banda6").click(function(){
        sessionStorage.banda = "Snoop Dog";
    });
    $("#banda7").click(function(){
        sessionStorage.banda = "Hardwell";
    });
    $("#banda8").click(function(){
        sessionStorage.banda = "Skrillex";
    });
    $("#banda9").click(function(){
        sessionStorage.banda = "Macklemore";
    });
    $("#banda10").click(function(){
        sessionStorage.banda = "Martin Garrix";
    });
    $("#banda11").click(function(){
        sessionStorage.banda = "The Kooks";
    });
    $("#banda12").click(function(){
        sessionStorage.banda = "MGMT";
    });
});


/*///////////////////// PERFIS BANDAS ////////////////////////////*/
/* Funcao que cria o perfil da banda seleccionada pelo utilizador */
function perfil_banda() {
    if (sessionStorage.banda == "Arctic Monkeys") {
        $("#dia_palco_hora").html("Dia: 1 <br> Palco: 1 <br> 20h30m");
        $("#imagem").attr("src", "imagens/bandas/articmonkeys.png");
    }
    else if (sessionStorage.banda == "Green Day") {
        $("#dia_palco_hora").html("Dia: 2 <br> Palco: 1 <br> 20h30m");
        $("#imagem").attr("src", "imagens/bandas/greenday.png");
    }
    else if (sessionStorage.banda == "U2") {
        $("#dia_palco_hora").html("Dia: 2 <br> Palco: 1 <br> 22h00m");
        $("#imagem").attr("src", "imagens/bandas/u2.png");
    }
    else if (sessionStorage.banda == "Coldplay") {
        $("#dia_palco_hora").html("Dia: 1 <br> Palco: 1 <br> 22h00m");
        $("#imagem").attr("src", "imagens/bandas/coldplay.png");
    }
    else if (sessionStorage.banda == "Eminem") {
        $("#dia_palco_hora").html("Dia: 2 <br> Palco: 2 <br> 2h00m ");
        $("#imagem").attr("src", "imagens/bandas/eminem.png");
    }
    else if (sessionStorage.banda == "Hardwell") {
        $("#dia_palco_hora").html("Dia: 1 <br> Palco: 2 <br> 0h30m ");
        $("#imagem").attr("src", "imagens/bandas/hardwell.png");
    }
    else if (sessionStorage.banda == "Snoop Dog") {
        $("#dia_palco_hora").html("Dia: 2 <br> Palco: 2 <br> 0h30m ");
        $("#imagem").attr("src", "imagens/bandas/snoopdog.png");
    }
    else if (sessionStorage.banda == "Skrillex") {
        $("#dia_palco_hora").html("Dia: 1 <br> Palco: 2  <br> 2h00m ");
        $("#imagem").attr("src", "imagens/bandas/skrillex.png");
    }
    else if (sessionStorage.banda == "Macklemore") {
        $("#dia_palco_hora").html("Dia: 2 <br> Palco:2  <br> 23h00m ");
        $("#imagem").attr("src", "imagens/bandas/macklemore.png");
    }
    else if (sessionStorage.banda == "Martin Garrix") {
        $("#dia_palco_hora").html("Dia: 1 <br> Palco 1  <br> 23h00m ");
        $("#imagem").attr("src", "imagens/bandas/martingarrix.png");
    }
    else if (sessionStorage.banda == "The Kooks") {
        $("#dia_palco_hora").html("Dia: 2 <br> Palco: 1 <br> 18h50m ");
        $("#imagem").attr("src", "imagens/bandas/thekooks.png");
    }
    else if (sessionStorage.banda == "MGMT") {
        $("#dia_palco_hora").html("Dia: 1 <br> Palco: 1 <br> 18h50m ");
        $("#imagem").attr("src", "imagens/bandas/mgmt.png");
    }
    
}

function encontrar_amigo() {
    if(isNaN(sessionStorage.nr_amigos) || sessionStorage.nr_amigos == 0){
        $("#botao_encontrar").css('background-color', '#E6E6FA');
        $("#botao_encontrar").css({"border-bottom": "1pt solid"});
        $("#botao_encontrar").css("pointerEvents", "none");
    }
}

function escolher_menu() {
    if( sessionStorage.nr_amigos == 1){
        $("#amigo1_foto").attr("class", "imagem-foto1");
        $("#amigo1_nome").attr("class", "sp-nome1 font-align");
        $("#amigo2").hide();
        $("#amigo3").hide();
        $("#amigo4").hide();
        $("#ecra2").hide();
    }
    else if(sessionStorage.nr_amigos == 2){
        $("#amigo1_foto").attr("class", "imagens-amigos");
        $("#amigo2_nome").attr("class", "sp-nome2 font-align");
        $("#amigo3_foto").attr("class", "imagens-amigos");
        $("#amigo4_nome").attr("class", "sp-nome2 font-align");
        $("#amigo2").css('width', "90px");
        $("#amigo4").css('width', "90px");
        $("#amigo1_nome").hide();
        $("#amigo2_foto").hide();
        $("#amigo3_nome").hide();
        $("#amigo4_foto").hide();
        $("#ecra2").hide();
    }
    else if(sessionStorage.nr_amigos == 3){
        $("#amigo1_foto").attr("class", "imagens-menu");
        $("#amigo1_nome").attr("class", "sp-nome3 font-align");
        $("#amigo2_foto").attr("class", "imagens-menu");
        $("#amigo2_nome").attr("class", "sp-nome3 font-align");
        $("#amigo3_foto").attr("class", "imagens-menu");
        $("#amigo3_nome").attr("class", "sp-nome3 font-align");
        $("#amigo3").attr("style", "left: 25%; position: relative;");
        $("#amigo4").hide();
        $("#ecra2").hide();
    }
    else if(sessionStorage.nr_amigos > 3){
        $("#amigo1_foto").attr("class", "imagens-menu");
        $("#amigo1_nome").attr("class", "sp-nome4 font-align");
        $("#amigo2_foto").attr("class", "imagens-menu");
        $("#amigo2_nome").attr("class", "sp-nome4 font-align");
        $("#amigo3_foto").attr("class", "imagens-menu");
        $("#amigo3_nome").attr("class", "sp-nome4 font-align");
        $("#amigo4_foto").attr("class", "imagens-menu");
        $("#amigo4_nome").attr("class", "sp-nome4 font-align");
        $("#amigo5_foto").attr("class", "imagens-menu");
        $("#amigo5_nome").attr("class", "sp-nome4 font-align");
        $("#amigo6_foto").attr("class", "imagens-menu");
        $("#amigo6_nome").attr("class", "sp-nome4 font-align");
        $("#amigo7_foto").attr("class", "imagens-menu");
        $("#amigo7_nome").attr("class", "sp-nome4 font-align");
        $("#amigo8_foto").attr("class", "imagens-menu");
        $("#amigo8_nome").attr("class", "sp-nome4 font-align");
        $("#ecra2").hide();
        if (sessionStorage.nr_amigos == 4) {
            $("#ecra2").hide();
        }
        else if(sessionStorage.nr_amigos == 5) {
            $("#amigo6_foto").hide();
            $("#amigo6_nome").html("");
            $("#amigo7").hide();
            $("#amigo8").hide();
        }
        else if(sessionStorage.nr_amigos == 6) {
            $("#amigo7").hide();
            $("#amigo8").hide();
        }
        else if(sessionStorage.nr_amigos == 7) {
            $("#amigo8").hide();
        }
    }
}

$(document).ready(function(){
    $("#bt_esquerda_tutorial").click(function(){
        if ((Number(sessionStorage.tutorial) == 2) || (Number(sessionStorage.tutorial) == 3))
            tutorial();
    });
    $("#bt_direita_tutorial").click(function(){
        if (Number(sessionStorage.tutorial) == 4)
            tutorial();
    });
});