import React, { useEffect, useRef, useState, useContext } from "react";
import { NewDungeon } from 'random-dungeon-generator'
import { AuthContext } from "../../auth/auth";




export default function () {
    let ref = useRef(null);

    const {user,logoutUser} = useContext(AuthContext);

    let [maxWidth, setMaxwidth] = useState(null);
    let [maxHeight, setMaxheight] = useState(null);
    let [minRoom , setMinRoom] = useState(null);
    let [maxRoom, setMaxRoom] = useState(null);

    let [map, setMap] = useState(NewDungeon({}));


    useEffect(() => {

        let context = ref.current.getContext('2d');
        // Current Width of the Canvas
        let w = ref.current.width;

        //Current Height of the Canvas
        let h = ref.current.height;

        //Amount of Rows for the Canvas
        let nRow = map.length || 50;
        //Amount of Columns for the canvas
        let nCol = map[1].length || 50;

        //Setting the width of the block by diving the width by number of columns
        w /= nCol;

        //Setting the height of blocks by diving the height by number of columns
        h /= nRow;

        //Clearing the Canvas
        context.clearRect(0,0,1000,1000);
        context.save();

        //timeout so it doesnt look as bad
        setTimeout(() => {
            context.clearRect(0,0,ref.current.width,ref.current.height);
            //for loop pulling out the info out of the Map
            for (var i = 0; i < nRow; ++i) {
                
                for (var j = 0, col = nCol; j < col; ++j) {

                    let wallTest = map[i][j]
                    //if function to see if its a wall
                if(wallTest === 1) {

                    context.fillRect(j * w , i * h, w, h);
                }
                    
                }
            }

        }, 1000);

    }, [map]);

    return (
        <div className="container center-align">
            <h4>
                <b>Create a New dungeon With a simple click of a button!</b>
            </h4>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s3">
                            <input id="icon_prefix" type="text" className="validate" value={maxWidth} onChange={e => setMaxwidth(e.target.value)}></input>
                            <label htmlFor="icon_prefix">Max Width</label>
                        </div>
                        <div className="input-field col s3">
                            <input id="max_height" type="text" className="validate" value={maxHeight} onChange={e => setMaxheight(e.target.value)}></input>
                            <label htmlFor="max_height" type="text">Max Height</label>
                        </div>
                        <div className="input-field col s3">
                            <input id="min_room" type="text" className="validate" value={minRoom} onChange={e => setMinRoom(e.target.value)}></input>
                            <label htmlFor="min_room" type="text">Min Room Size</label>
                        </div>
                        <div className="input-field col s3">
                            <input id="max_room" type="text" className="validate" value={maxRoom} onChange={e => setMaxRoom(e.target.value)}></input>
                            <label htmlFor="max_room" type="text">Max Room Size</label>
                        </div>
                    </div>
                    <div className="row">
                    <button onClick={e => {
                        e.preventDefault();
                        let options = {
                            width: maxWidth || 50,
                            height: maxHeight || 50,
                            minRoomSize: minRoom || 5,
                            maxRoomSize: maxRoom || 20,
                        }
                        setMap(map = NewDungeon({options}) )
                    }}
                    >CLICK HERE</button>
                    </div>
                </form>

                <canvas id="theCanvas"
                ref={ref}
                style={{
                    width:"560px",
                    height:"560px",
                    border:"2px solid #000000"
                }}></canvas>

                <button style={{
                    width:"250px",
                    borderRadius:"3px",
                    letterSpacing:"1.5px",
                    marginTop:"1rem"
                }}
                onClick={e => {
                    e.preventDefault();
                    fetch("/api/v1/dungeons",{
                        method:"POST",
                        body:JSON.stringify({
                            mapArray: map,
                            Createdby: user.id
                        }),
                        headers:{
                            "Content-Type":"application/json"
                        }
                    })
                        .then(res => res.json())
                        .then(res => console.log(res));
                }}
                className="btn btn-large hoverable green accent-3"
                >
                    Here to save the dungeon to your database
                </button>


            </div>
        </div>
    )
    
}