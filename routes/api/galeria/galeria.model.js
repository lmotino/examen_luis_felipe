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
        userTemplate,
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