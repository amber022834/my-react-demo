import {useState} from "react"
import p1 from './images/p1.jpg'
import p2 from './images/p2.jpg'



function App() {
    const [currentImg, setCurrentImg] = useState();
    //將圖片放入陣列
    const arrPhotos = [p1, p2];
    return (
        <>
            <div className="main">
                {
                    arrPhotos.map((photo, index) => {
                        return (
                            <img
                                key={index} src={photo} alt='' width={100}
                                onMouseOver={e => setCurrentImg(index)}
                                style={{ cursor: "pointer" }}
                            />

                        )
                    }
                    )


                }

            </div>
            {/* 放大圖區 */}
            < div>
                <img src={arrPhotos[currentImg]} alt="" width={400} />
            </div >

        </>
    )
}export default App