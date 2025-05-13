import { useEffect } from "react"
import "../0513/App5.css"
import $ from 'jquery'

export default function App() {
    //超連結中尋找ttpshow
    //當滑鼠碰到超連結時，檢查(has)是否有ttpshow類別
    //若有的話。在body區域現有內容最下面(append)增加div區域，並取得超連結下的子元素中的html內容
    //+10為為跳出方框和字產生距離
    useEffect(() => {
        $('a:has(.ttpShow)')
            .on('mouseover', function (e) {
                $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
                $('#ttpPanel').css({
                    top: (e.pageY + 10) + 'px',
                    left: (e.pageX + 10) + 'px'
                }).fadeIn('slow');
            })
            .on('mouseout', function () {
                $('#ttpPanel').remove();
            })
            .on('mousemove', function (e) {
                $('#ttpPanel').css({
                    top: (e.pageY + 10) + 'px',
                    left: (e.pageX + 10) + 'px'
                });
            });
    }, []);


    return (
        <>
           <p>
                ToolTip浮動顯示文字
                <a href='#'>
                    顯示文字
                    <span className='ttpShow'>consectetur內容說明...</span>
                </a>
            </p>           
            <p>
                ToolTip浮動顯示圖片
                <a href='#'>
                    顯示圖片
                    <span className='ttpShow'>
                        <img src="./images/png1.jpg" alt="" style={{ width: '100px' }} />
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </span>
                </a>
            </p>
        </>
    )

}




