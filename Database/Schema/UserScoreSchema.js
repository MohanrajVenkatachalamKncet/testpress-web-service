const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const USERSCORE_COLUMN=require("../Column/UserScoreColumn");
const UserScoreSchema=new Schema(
{
    [USERSCORE_COLUMN.USERNAME]:{
        type:String,
        required:'true'
    },
    [USERSCORE_COLUMN.SCORE]:{
        type:String,
        required:'true'
    },
},
{
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
}
);
module.exports=mongoose.model("UserScoreSchema",UserScoreSchema);