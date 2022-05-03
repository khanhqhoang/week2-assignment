import React from 'react';
import missedarticles from '../ArticleList/missed-articles';
import Articles from './Articles';
function MArticles() {
    const numOfCol = "3";
    return (
        <div>
            <p class="title">&nbsp;&nbsp;In case you missed it</p>
            <Articles data={missedarticles} colNum={numOfCol}/>
       </div>
    )
}
export default MArticles;
