import  {useState } from 'react'


export default function Like() {

    //state store

    let [likes, setlikes] = useState(0)



    //handle like function

    function handlelike() {
        setlikes(likes += 1)
    }

    return (
        <>
            <i onClick={handlelike} className="fa fa-thumbs-up"></i>
            <span>{likes}</span>
        </>
    )

}



