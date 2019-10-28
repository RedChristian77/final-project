import React, {useState, useEffect, useContext} from "react";
import {AuthContext} from '../../auth/auth'

export default function() {
    const{user} = useContext(AuthContext)
    let [userDungeons, setDungeons]= useState(1)

    useEffect(() => {
        setTimeout(() => {
            fetch(`/api/v1/dungeons/my-dungeons/${user.id}`)
                .then(res => res.json())
                .then(response => {
                    setDungeons(userDungeons = response)
                    console.log(userDungeons);
                })
        }, 1000)
    })


  return (
    <div className="container center-align">
        <h1>TESTING</h1>
    </div>
  );
}
