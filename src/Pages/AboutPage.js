import React from 'react';

function AboutPage() { //Renders an about page, react bootstrap used to center the text.
    return(
        <div className="text-center">
            <h1>About Recipe Finder</h1>
            <h3>This website was created to help food enthusiasts find and explore different recipes. We believe in the power of cooking to bring people together. Find a recipe at the option above, save a favorite, review your favorites, or even add your own recipes. Your recipes will be stored under User Recipes. Happy Cooking!</h3>
        <img src="https://www.signupgenius.com/cms/images/groups/potluck-ideas-tips-large-groups-article-600x400.jpg" alt="potluck"></img>
        </div>
    );
}

export default AboutPage;