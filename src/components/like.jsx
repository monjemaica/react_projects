
const Like = ({liked, onClick}) => {
    let classes = "fa-heart";
    if(!liked){
        classes = `fas ${classes}` ;
    }else{
        classes = `far ${classes}` ;
    }
    
   
    return (
        <i className={classes} onClick={onClick} aria-hidden="true"></i>
    );
}

export default Like;