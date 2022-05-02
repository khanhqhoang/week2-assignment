import React from 'react';
import yourarticles from '../ArticleList/your-articles';
import Articles from './Articles';
function YArticles() {
    const numOfCol = "2";
    return (
        <div>
            <p class="title">&nbsp;&nbsp;For you</p>
            <Articles data={yourarticles} colNum={numOfCol}/>
        </div>
    )
}
export default YArticles;
