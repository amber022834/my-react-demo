import { AnimatePresence,motion } from "motion/react";
import { div } from "motion/react-client";
import { useState } from "react"
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

//摺疊效果 Accordion
function App() {
    const [activeQuestion, setActiveQuestion] = useState(null);

    //FAQ資料
    const question = [
        {
            id: 1,
            question: "題目1",
            ans: "答案1",
        },
        {
            id: 2,
            question: "題目2",
            ans: "答案2",

        },
        {
            id: 3,
            question: "題目3",
            ans: "答案3",

        }

    ]




    return (
        <>
            <div style={{
                maxWidth: "100vw",
                height: "100vh",
                backgroundColor: "#333",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                {/* 題目 摺疊面板*/}
                <div style={{
                    width: "90%",
                    margin: "auto",
                    maxWidth: "1200px",
                    backgroundColor: "#aaa",
                    padding: "10px",
                    borderRadius: "5px",
                }}>
                    <h2 style={{
                        textAlign: "center",
                        marginBottom: "6px",
                    }}>FAQ標題</h2>
                    {
                        //帶出陣列資料
                        question.map((question) => {
                            return (
                                <div key={question.id} style={{ marginBottom: "4px", }}>
                                    {/* 按鈕 */}
                                    <button
                                        style={{
                                            width: "100%",
                                            textAlign: "left",
                                            border: "none",
                                            outline: "none",
                                            padding: "4px",
                                            borderRadius: "2px",
                                            backgroundColor: "#ccc",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                        onClick={()=>{setActiveQuestion(activeQuestion===question.id? null:question.id)
                                        }}
                                        >
                                        {question.question}
                                        {activeQuestion === question.id ? <CiCircleMinus /> : <CiCirclePlus />}
                                    </button>

                                    {/* 摺疊 */}
                                    <AnimatePresence>
                                        {
                                            //檢查是否為作用中的題目，若是的話就展開答案，此處&&不是交集，相當於:
                                            //if (activeQuestion===question.id){}
                    
                                            activeQuestion===question.id &&(
                                                <motion.div 
                                                //初始值
                                                initial={{opacity:0, height:0}}
                                                animate={{opacity:1,height:"auto"}}
                                                exit={{opacity:0,height:0}}
                                                style={{marginTop:"5px",backgroundColor:"#333"}}
                                                >
                                                    {question.ans}
                                                </motion.div>
                                            )
                                        }
                                    </AnimatePresence>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default App

