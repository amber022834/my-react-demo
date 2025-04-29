import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";



function App() {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const slides = [
        { url: "./images/png1.jpg" },
        { url: "./images/png2.jpg" },
        { url: "./images/png3.jpg" },
    ]

    //當currentIndex改變時會觸發useEffect
    useEffect(() => {
        //每隔一秒鐘換下一張
        const autoplay = setInterval(() => {
            //每隔幾秒鐘換下一張
            nextSlide();
        }, 3000);

        //把上一張照片清掉
        return () => clearInterval(autoplay);
    }, [currentImgIndex]);

    //後一張
    //取德編號，看是不是最後一個編號
    //是的話要回到第一張，不是的話變成下一張
    const nextSlide = () => {
        setCurrentImgIndex((preIndex) => (preIndex === 0 ? slides.length - 1 : preIndex + 1))
    }

    //前一張
    const preSlide = () => {
        setCurrentImgIndex((preIndex) => (preIndex === 0 ? slides.length - 1 : preIndex - 1))
    }


    //按鈕控制
    const Arrow = ({ direction, onClick }) => {
        return (
            <div style={{
                position: "absolute",
                top: "50%",
                cursor: "pointer",
                color: "white",
                [direction]: "20px",
            }}>
                {
                    direction == "left" ? (
                        <FaArrowLeft onClick={onClick} size={50} />
                    ) : (
                        <FaArrowRight onClick={onclick} size={50} />

                    )

                }

            </div>
        )
    }

    return (
        <>
            {/* 最外層 */}
            <div style={{
                maxWidth: "100vw",
                height: "100vh",
                margin: "auto",

            }}>
                {/* 圖 */}
                <div style={{
                    backgroundImage: `url(${slides[currentImgIndex].url})`,
                    width: "100vw",
                    height: "100vh"
                }}>
                    {/* 上一張 */}
                    <Arrow direction="left" onClick={preSlide} />
                    {/* 下一張 */}
                    <Arrow direction="right" onClick={nextSlide} />

                </div>




            </div>
        </>
    )
} export default App