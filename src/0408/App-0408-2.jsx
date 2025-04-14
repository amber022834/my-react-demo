import img0408a from './assets/img0408/w1200-1.jfif'
import img0408b from './assets/img0408/w1200-2.jfif'
import img0408c from './assets/img0408/w1200-3.jfif'

function App() {
    return (
        <>
            <div id="container">
                <h1>懶人包｜《咒術迴戰》角色術式、背景故事、派別總整理</h1>
                <div id='img'>
                    <img src={img0408a} alt="" />
                    <img id='img1' src={img0408b} alt="" />
                </div>
                <p>繼神作《鬼滅之刃》後，作品《咒術迴戰》堪稱是2021目前最強動漫。第一季已在Netflix上完結，而漫畫部分的「澀谷事變」篇章也已結束，除了超強咒術師乙骨憂太終於登場外，據官方消息表示今年冬天更會上映《劇場版呪術廻戦0》，相當令人期待呀！</p>
                <p>故事中有非常多角色，其中每人又來自於不同家族，所傳承的術式也不相同，而咒術師更有階級之分，資訊量可謂相當龐大。部分內容摘自萌娘百科，以下可能有雷，請自行斟酌觀看！</p>
                <h2>咒術師等級圖表</h2>
                <img className='img2' src={img0408c} alt="" />


            </div >


        </>)
}

export default App;