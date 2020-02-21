var galeriaModel = {};

var galeriaCollection = [];
var galeriaTemplate = {
    ID:"",
    title:"",
    url:"",
    thumbnailUrl:"",
    album:'',
    userDateCreated:null
}

galeriaModel.getAll = ()=>{
    return galeriaCollection;
}

galeriaModel.getById = (id)=>{
    var filteredGaleria = galeriaCollection.filter(
        (o, i)=>{
            return o.ID === id;
        }
    );
    if(filteredGaleria.length){
        return filteredGaleria[0];
    }else{
        return null
    }
}

galeriaModel.addNew = ( {i_title,i_url,i_thumbnailUrl,i_album} )=>{
    var newGaleria = Object.assign(
        {}, 
        galeriaTemplate,
        {
            title:i_title,
            url:i_url,
            thumbnailUrl:i_thumbnailUrl,
            album:i_album,            
            userDateCreated:new Date().getTime()
        }
    );
    newGaleria.ID = galeriaCollection.length + 1;

    galeriaCollection.push(newGaleria);
    return newGaleria;
};

galeriaModel.update =(id,{ i_title, i_album})=>{
    var updatingGaleria = galeriaCollection.filter(
        (o, i)=>{
            return o.ID === id;
        }
    );
    if(updatingGaleria && updatingGaleria.length>0){
        updatingGaleria = updatingGaleria[0];
    } else {
        return null;
    }
    var updateGaleria = {};
    var newUpdatedCollection = galeriaCollection.map(
        (o, i)=>{
            if(o.userID === id){
                updateGaleria = Object.assign({},
                    o,
                    { title:i_title, album:i_album}
                );
                return updateGaleria;                
            }else{
                return o;
            }
        }
    )
    galeriaCollection = newUpdatedCollection;
    return updateGaleria;
};

galeriaCollection.push(
    Object.assign(
        {}, 
        galeriaTemplate,
        {
            ID:1,
            title:"el grito",
            url:"ejemplo.com",
            thumbnailUrl:"pequeño.com",
            album:'en casa',
            userDateCreated:new Date().getTime()
        }
    )
);


module.exports = galeriaModel;