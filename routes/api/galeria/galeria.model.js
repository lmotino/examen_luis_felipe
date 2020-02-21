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