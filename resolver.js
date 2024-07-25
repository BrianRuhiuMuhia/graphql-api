const db=require("./db/db.js")
const resolvers = {
    Query:{
      getToDos:async ()=>{
try{
const result=await db.query("select * from ToDos")
return result.rows
}
catch(err)
{
  console.error(err)
  return
}
      },
      getToDo:async(_,args)=>{
try{
  const result=await db.query("select * from ToDos where id=$1",[args.id])
  return result.rows
}
catch(err)
{
  console.log(err)
  return
}
      }
  },
  Mutation:{
    addToDo:async (_,args)=>{
const newToDo={
    title:args.title,description:args.description
}
try{
await db.query("insert into ToDos(title,description,completed)values($1,$2,$3)",[newToDo.title,newToDo.description,false])
return newToDo
}
catch(err)
{
    console.log(err)
    return
}
    },
    deleteToDo:async (_,args)=>{
        try{
const result=await db.query("select * from ToDos where id=$1",[args.id])
await db.query("delete from ToDos where id=$1",[args.id])
return result.rows
        }
        catch(err)
        {
            console.error(err)
            return
        }

    },
    updateToDo:async (_,args)=>{
try{
await db.query("update table ToDos set completed=$1 where id=$2",[args.completed,args.id])
}
catch(err)
{
    console.error(err)
    return 
}
    }


}
  }
module.exports=resolvers