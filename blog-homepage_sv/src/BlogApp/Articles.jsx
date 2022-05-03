import React from 'react';
import '../App.css';
import icon from '../graphics/bookmark.PNG'
//function to format a given date
const pDate=(d)=>{
    let pstDate = new Date(d);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let formattedDate = months[pstDate.getMonth()] + " " + pstDate.getDate();

    return formattedDate;
}
//function to hide or show audioAvail div
function isAudio(val){
    if (val===false)
    {
        //document.getElementById("audioAvail").display="none";
    }
}
//function to hide or show memberPreview div
function hasMemberPreview(val){
    if (val===false)
    {
        //document.getElementById("mPreview").display="none";
    }
}
function Articles({data, colNum}){

    const col = {colNum};
    let containerName = "container2";
    let containerDivName = "container2div";
    let showImageName = "showimage2";
    let articleinfoName = "articleinfo2";
    if (col.colNum ==='3') {
        containerName = "container3";
        containerDivName = "container3div";
        showImageName = "showimage3";
        articleinfoName = "articleinfo3";
    }
    const blogs = data.map(
        (blog) => {          
            //console.log({blog}); 
            isAudio(blog.hasAudioAvailable); 
            hasMemberPreview(blog.memberPreview); 
            return (
                <div class={containerDivName}>
                    <img src={blog.image} className={showImageName} alt="ShowImage" />
                    <div class={articleinfoName}>
                        <div class="item title">{blog.title}</div>                        
                        <div class="item titledescription">{blog.description}</div>
                        <div class="authordiv item">                        
                            <div class="item">                    
                                <img src={blog.author.image} className="showimagesmall" alt="ShowImageSmall" />
                            </div>
                            <div class="item titledescription">
                                <div>
                                    <div class="item title">{blog.author.name}</div>
                                </div>
                                <div>
                                    <div class="item">
                                        {pDate(blog.postedDate)} - {blog.minutesToRead} min read
                                    </div>
                                </div>
                            </div>
                            <div class="item" align="left">
                                <div class="bookmark-icon">
                                    <a href={blog.link}>
                                        <img src={icon} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )   
        }
    )
    return (
        <div className={containerName}>                 
            {blogs}   
        </div>
    )
}

export default Articles;