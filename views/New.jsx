import React from 'react'

const New = () => {
  return (
    <div>
        <h1>title</h1>
        <form action="/fruits" method ='POST'>

        Title: <input type="text" name="title"/><br/>
        Entry: <input type="text"name="entry"/><br/>
        shipIsBroken: <input type="checkbox" name='shipIsBroken'/><br/>  
        <input type="submit" value="create log" /> <br/>  




        </form>

    </div>
    
  )
}

module.exports = New;