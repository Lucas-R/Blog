fetch('https://api.github.com/users/Lucas-R')
.then(response => response.json())
.then(data => {
    $("#photo").attr("src", data.avatar_url),
    document.getElementById("fullname").innerHTML = data.name,
    document.getElementById("username").innerHTML = '@' + data.login,
    document.getElementById("bio").innerHTML = data.bio ? data.bio : " Vazio ",
    document.getElementById("company").innerHTML = data.company ? data.company : " Vazio ",
    document.getElementById("location").innerHTML = data.location ? data.location : " Vazio ",
    $("#location").attr("href", 'https://www.google.com/maps/search/'+ data.location),
    document.getElementById("email").innerHTML = data.email ? data.email : "lucasrodriguesbezerra@outlook.com",
    document.getElementById("website").innerHTML = data.blog ? data.blog : " Vazio ",
    $("#website").attr("href", data.blog ? data.blog : "#"),
    document.getElementById("twitter").innerHTML = data.twitter_username ? '@' + data.twitter_username : " Vazio ",
    $("#twitter").attr("href", 'https://twitter.com/' + data.twitter_username);
});

const getPosition = (position) => 
      window
        .getComputedStyle(document.getElementById('container'))
        .getPropertyValue(position)

const initialPosition = {
    grid : getPosition('grid-template-columns'),
    areas : getPosition('grid-template-areas'),
  }

const close = (columns, areas) => {
    setTimeout(function(){ 
        document.getElementById('container').style.setProperty('grid-template-columns', columns);
        document.getElementById('container').style.setProperty('grid-template-areas', areas);
        document.getElementById('lente-wellcome').style.setProperty('display', 'none');
        document.getElementById('lente-repos').style.setProperty('display', 'none');
        document.getElementById('lente-perfil').style.setProperty('display', 'none');
        document.getElementById('imgWellcome').style.setProperty('display', 'block');
        document.getElementById('imgRepos').style.setProperty('display', 'block');
        document.getElementById('imgPerfil').style.setProperty('display', 'block');
        document.getElementById('close').style.setProperty('display', 'none');
    }, 15000);
}

function handleClose(){
        document.getElementById('container').style.setProperty('grid-template-columns', initialPosition.grid);
        document.getElementById('container').style.setProperty('grid-template-areas', initialPosition.areas);
        document.getElementById('lente-wellcome').style.setProperty('display', 'none');
        document.getElementById('lente-repos').style.setProperty('display', 'none');
        document.getElementById('lente-perfil').style.setProperty('display', 'none');
        document.getElementById('imgWellcome').style.setProperty('display', 'block');
        document.getElementById('imgRepos').style.setProperty('display', 'block');
        document.getElementById('imgPerfil').style.setProperty('display', 'block');
        document.getElementById('close').style.setProperty('display', 'none');
}

function handleView(e){
    if(e == 'wellcome'){
        document.getElementById('container').style.setProperty('grid-template-columns', 'repeat(4, 1fr)');
        document.getElementById('container').style.setProperty('grid-template-areas', '"wellcome wellcome repos perfil" "wellcome wellcome repos perfil" "wellcome wellcome repos perfil"');
        document.getElementById('lente-repos').style.setProperty('display', 'block');
        document.getElementById('lente-perfil').style.setProperty('display', 'block');
        document.getElementById('imgWellcome').style.setProperty('display', 'none');
        document.getElementById('imgRepos').style.setProperty('display', 'none');
        document.getElementById('imgPerfil').style.setProperty('display', 'none');
        document.getElementById('close').style.setProperty('display', 'block');
    }
    if(e == 'repos'){
        document.getElementById('container').style.setProperty('grid-template-columns', 'repeat(4, 1fr)');
        document.getElementById('container').style.setProperty('grid-template-areas', '"wellcome repos repos perfil" "wellcome repos repos perfil" "wellcome repos repos perfil"');
        document.getElementById('lente-wellcome').style.setProperty('display', 'block');
        document.getElementById('lente-perfil').style.setProperty('display', 'block');
        document.getElementById('imgWellcome').style.setProperty('display', 'none');
        document.getElementById('imgRepos').style.setProperty('display', 'none');
        document.getElementById('imgPerfil').style.setProperty('display', 'none');
        document.getElementById('close').style.setProperty('display', 'block');
    }
    if(e == 'perfil'){
        document.getElementById('container').style.setProperty('grid-template-columns', 'repeat(4, 1fr)');
        document.getElementById('container').style.setProperty('grid-template-areas', '"wellcome repos perfil perfil" "wellcome repos perfil perfil" "wellcome repos perfil perfil"')
        document.getElementById('lente-wellcome').style.setProperty('display', 'block');
        document.getElementById('lente-repos').style.setProperty('display', 'block');
        document.getElementById('imgWellcome').style.setProperty('display', 'none');
        document.getElementById('imgRepos').style.setProperty('display', 'none');
        document.getElementById('imgPerfil').style.setProperty('display', 'none');
        document.getElementById('close').style.setProperty('display', 'block');
    }
    close(initialPosition.grid, initialPosition.areas);
}

$('.container-wellcome')
    .mouseover(function(){
        $("#imgWellcome").attr("src", './src/images/amply-white.png')
    })
    .mouseout(function() {
        $("#imgWellcome").attr("src", '')
    });

$('.container-repos')
    .mouseover(function(){
        $("#imgRepos").attr("src", './src/images/amply-black.png')
    })
    .mouseout(function() {
        $("#imgRepos").attr("src", '')
    });

$('.container-perfil')
    .mouseover(function(){
        $("#imgPerfil").attr("src", './src/images/amply-white.png')
    })
    .mouseout(function() {
        $("#imgPerfil").attr("src", '');
    });