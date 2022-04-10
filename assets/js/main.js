
$(document).ready(function() {
    general_utils();
    blog_posts();
})


function general_utils() {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.extra-link a').smoothScroll();
    $('.profile-pic-link').smoothScroll();

    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		}, 1000);
	});
}

function blog_posts() {

    // keeping it static, can be fetched from a blog dynamically as well
    let posts = [
        {
            url: 'https://blog.naver.com/redlion0929',
            title: 'Naver Blog',
        },
        
    ];

    let post_html = [];

    // for the more posts link
    let post_template = `
    <div class="blog-post" onclick="blog_link_click('https://blog.naver.com/redlion0929');">

        <div class="blog-link">

            <h3><a href="https://blog.naver.com/redlion0929">Naver Blog</a></h3>            

        </div>

        <div class="blog-goto-link">
            <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
        </div>
    </div>
    `;

    post_html.push(post_template);

    $('#rss-feeds').html(post_html);

}

function blog_link_click(url) {
    window.location = url;
}