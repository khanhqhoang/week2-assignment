import React from 'react';
import '../App.css';
import icon from '../graphics/bookmark.PNG';

function AudioTrue()
{
    return <p className="titledescription"> * Audio available</p>;
}
function AudioFalse()
{
    return null;
}
function HasAudio(props){
    const gotAudio = props.gotAudio;
    if (gotAudio){
        return <AudioTrue/>;
    }
    return <AudioFalse/>;
}
function PreviewTrue()
{
    return <p className="titledescription"> * Member Preview</p>;
}
function PreviewFalse()
{
    return null;
}
function HasPreview(props){
    const gotPreview = props.gotPreview;
    if (gotPreview){
        return <PreviewTrue/>;
    }
    return <PreviewFalse/>;
}


//function to format a given date
const pDate=(d)=>{
    let pstDate = new Date(d);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let formattedDate = months[pstDate.getMonth()] + " " + pstDate.getDate();

    return formattedDate;
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
          
            return (
                <div className={containerDivName}>
                    <img src={blog.image} className={showImageName} alt="ShowImage" />
                    <div className={articleinfoName}>
                        <div className="hideshowdiv">
                            <HasAudio gotAudio={blog.hasAudioAvailable} />
                            <HasPreview gotPreview={blog.memberPreview} />
                        </div>                      
                        <div className="item title">{blog.title}</div>                        
                        <div className="item titledescription">{blog.description}</div>
                        <div className="authordiv item">
                            <div className="item">                    
                                <img src={blog.author.image} className="showimagesmall" alt="ShowImageSmall" />
                            </div>
                            <div className="item titledescription">
                                <div>
                                    <div className="item title">{blog.author.name}</div>
                                </div>
                                <div>
                                    <div className="item">
                                        {pDate(blog.postedDate)} - {blog.minutesToRead} min read
                                    </div>
                                </div>
                            </div>
                            <div className="item" align="left">
                                <div className="bookmark-icon">
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