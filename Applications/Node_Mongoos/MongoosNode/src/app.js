const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/shoebChannel", {useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("Connection SUCESSFULL....")).catch((error)=>console.log(error)); 

const playlistSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  ctype: String,
  videos: Number,
  author:String,
  active:Boolean,
  date:{
    type:Date,
    default:Date.now
  }
});


const Playlist = new mongoose.model("Playlist", playlistSchema);

const createDocument = async()=>{
  try{
    const reactPlaylist = new Playlist({
      name:'shoeb2',
      ctype:"front End2 ",
      videos:70,
      author:'ansari2',
      active:true,
    })
    const reactPlaylist2 = new Playlist({
      name:'shoeb3',
      ctype:"front End4 ",
      videos:60,
      author:'ansari4',
      active:true,
    })
    
    const result =  await Playlist.insertMany([reactPlaylist, reactPlaylist2]);
    console.log(result);
  }
  catch(err){
    console.log(err);
  }
}

//createDocument();

const getDocument = async()=>{
  try{
    const result = await Playlist.find({videos:{$lte:60}}).select({name:1})
    console.log(result);
  }
  catch(err){
    console.log(err);
  }
}

//getDocument();

const updateDocument =  async(active)=>{
  try{
  const result =  await Playlist.updateMany({active},{
    $set:{
      name:'Shadabad12321'
    }
  })
  console.log(result)
}
catch(error){
  console.log(error);
}
}

//updateDocument(true)

const deleteDocument =  async(_id)=>{
  try{
  const result =  await Playlist.deleteOne({_id})
  console.log(result)
}
catch(error){
  console.log(error);
}
}

deleteDocument('62515999f0740c6a5ee7917d')