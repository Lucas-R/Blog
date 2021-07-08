$('#button-menu').click(() => {
    $('#list-mobile').toggleClass('active');
})

fetch('https://api.github.com/users/Lucas-R/repos')
.then(result => result.json())
.then(data => {(
    data.map(item => {
        var divRepo = document.createElement('Div');
        divRepo.classList.add('repo');

        var divTitle = document.createElement('Div');
        divTitle.classList.add('title-repo');
        divRepo.appendChild(divTitle);
        var title = document.createElement('h1');
        var textTitle = document.createTextNode(item.name);
        title.appendChild(textTitle);
        divTitle.appendChild(title);

        var divDesc = document.createElement('Div');
        divDesc.classList.add('desc-repo');
        divRepo.appendChild(divDesc);
        var desc = document.createElement('p');
        var textDesc = document.createTextNode(item.description);
        desc.appendChild(textDesc);
        divDesc.appendChild(desc);

        var divFooter = document.createElement('Div');
        divFooter.classList.add('footer-repo');
        divRepo.appendChild(divFooter);
        var link = document.createElement('a');
        var textLink = document.createTextNode('ver no Github');
        link.setAttribute('href', item.html_url);
        link.setAttribute('target', '_blank');
        link.appendChild(textLink);
        divFooter.appendChild(link);

        document.getElementById('repos').appendChild(divRepo);
    })
)});