$(document).ready(() => {
    render_projects('native');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/mentors.jpg',
            link: 'https://github.com/redlion0929/KorDPR_NLP',
            title: 'KorDPR',
            demo: false,
            technologies: ['Python'],
            description: "I implemented \"Dense Passage Retrieval for Open-Domain Question Answering\" which is state-of-the-art Retrieval Model using Korean dataset.",
            categories: ['native']
        },
        {
            image: 'assets/images/mobile-landscape.jpg',
            link: 'https://github.com/redlion0929/KorKeyBLD_NLP',
            title: 'KorKeyBLD',
            demo: false,
            technologies: ['Python'],
            description: "I implemented \"KeyBLD: Selecting Key Blocks with Local Pre-ranking for Long Document Information Retrieval\" which is effective Retrieval Model using Korean dataset.",
            categories: ['native']
        },
        {
            image: 'assets/images/collage.jpg',
            link: 'https://github.com/redlion0929/KorSimCSE_NLP',
            title: 'KorSimCSE',
            demo: false,
            technologies: ['Python'],
            description: "I fine-tuned \"SimCSE: Simple Contrastive Learning of Sentence Embeddings\" which is state-of-the-art sentence embedding model using Korean dataset and make a simple demo.",
            categories: ['native']
        },
        {
            image: 'assets/images/mpw.jpg',
            link: 'https://github.com/redlion0929/DQACR',
            title: 'DQACR',
            demo: false,
            technologies: ['Python'],
            description: "I implemented dialogue-based multiple choice QA LM which has improved commonsense reasoning using Semantic Search and Semantic Search.",
            categories: ['native']
        },
        {
            image: 'assets/images/social-share-count.jpeg',
            link: 'https://github.com/redlion0929/ParkingSuwon---2020-summer',
            title: 'Parking Suwon',
            demo: false,
            technologies: ['Html, CSS, JavaScript'],
            description: "A website that shows information about parking lots in Suwon.",
            categories: ['webdev']
        },
        {
            image: 'assets/images/data-destroyer.png',
            link: 'https://github.com/abhn/data-destroyer-gui',
            title: 'Data Destroyer',
            demo: false,
            technologies: ['C++', 'Qt'],
            description: "Native GUI wrapper for GNU coreutils tool 'dd'",
            categories: ['native']
        },
        
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">
                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}
        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>
                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}