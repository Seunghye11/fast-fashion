
document.addEventListener('DOMContentLoaded', function(){

    let square = document.querySelector('.square');
    let isClicked = false;

    let messageElement = document.querySelector('.text-main1'); 

    square.addEventListener('click', () => {
        if(!isClicked) {
            square.style.transform = 'translateY(-150vw)';
            showText('');
        }
        else{
            square.style.transform = 'translateX(0px)';

        }
        isClicked = !isClicked;
    });

    let buttn = document.querySelector('.buttn');

    buttn.addEventListener('click', () => {
        square.style.transform = 'translateX(0px)';
        isClicked = false;
        showText('너무 많은 옷을 가지고 있진 않은가요?'); // 멘트 다시 보이기
    });

    let buttnContainer = document.querySelector('.buttn-container');


    function showText(text) {
        if (messageElement) {
            // 애니메이션 초기화
            messageElement.style.animation = 'none';
            void messageElement.offsetWidth; 
            // 애니메이션 적용
            messageElement.textContent = text;
            messageElement.style.opacity = '1';
            messageElement.style.animation = 'fadein 5s forwards'; // 애니메이션 효과 추가
        }
    }


    //이미지 클릭시 텍스트 부여 
    
    let textContent = ["<span class='bigtxt'>33%</span> <br>매년 생산되는 옷 1,000억개 같은 해 버려지는 옷 330억개", 
        "<span class='bigtxt'>12%</span> <br> 한 번도 입지 않고 버리는 옷",
        "<span class='bigtxt'>2.700L</span> <br> 흰 티셔츠 한장을 만드는 데 쓰이는 물 <br> 한 사람이 3년간 마실 물의 양", 
        "<span class='bigtxt'>1,320억</span> <br> 청바지 1개의 탄소 배출량 33kg <br>1년에 만들어지는 청바지 40억 벌",
        "<span class='bigtxt'>빌려입기</span> : 환경에 악영향 <br> 의류 배송과정에서 탄소배출량 증가 <br><br> <span class='bigtxt'>오래입기</span> : 환경에 호영향 <br> 옷의 수명을 연장"];

    
    let txtBox1 = document.querySelector('.txtBox1');
    let txtBox2 = document.querySelector('.txtBox2');
    let txtBox3 = document.querySelector('.txtBox3');
    let txtBox4 = document.querySelector('.txtBox4');
    let txtBox5 = document.querySelector('.txtBox5');

    let txtBoxs = document.querySelectorAll('.txtBox1, .txtBox2, .txtBox3, .txtBox4, .txtBox5');


    function showTextContent(index) {
        txtBoxs[index].innerHTML = textContent[index];
        txtBoxs[index].style.visibility = 'visible';
    }
    
    function hideTextContent() {
        txtBoxs.forEach(txtBox => {
            txtBox.style.visibility = 'hidden';
        });
    }

    let hanger1 = document.querySelector('.hanger1');
    let hanger2 = document.querySelector('.hanger2');
    let hanger3 = document.querySelector('.hanger3');
    let hanger4 = document.querySelector('.hanger4');
    let hanger5 = document.querySelector('.hanger5');


    const hangers = document.querySelectorAll(".hanger-ani");

    let lastClickedIndex = -1;
    
    hanger1.addEventListener('click', function(){
        console.log("hanger1가 클릭되었습니다.");
        if(lastClickedIndex !== 0) {
            moveCloth(0);
            lastClickedIndex = 0;
            showTextContent(0);
        } else {
            // 이미지가 다시 클릭될 때 해당 이미지만 제외하고 다른 이미지들에게 애니메이션을 적용
            for (let i = 0; i < hangers.length; i++) {
                if (i !== 0) {
                    if (i < 0) {
                        hangers[i].style.animation = 'move-back-right 1.5s linear';
                    } else {
                        hangers[i].style.animation = 'move-back-left 1.5s linear';
                    }
                    hangers[i].style.transform = 'translateX(0vw)';
                } else {
                    hideTextContent();
                }
            }
            lastClickedIndex = -1; 
            hanger1.classList.remove('hanger-ani-hover');

        }
    });

    hanger2.addEventListener('click', function() {
        console.log("hanger2가 클릭되었습니다.");
        if(lastClickedIndex !== 1) {
            moveCloth(1);
            lastClickedIndex = 1;
            showTextContent(1);
        } else {
            // 이미지가 다시 클릭될 때 해당 이미지만 제외하고 다른 이미지들에게 애니메이션을 적용
            for (let i = 0; i < hangers.length; i++) {
                if (i !== 1) {
                    if (i < 1) {
                        hangers[i].style.animation = 'move-back-right 1.5s linear';
                    } else {
                        hangers[i].style.animation = 'move-back-left 1.5s linear';
                    }
                    hangers[i].style.transform = 'translateX(0vw)';
                } else {
                    hideTextContent();
                }
            }
            lastClickedIndex = -1; 
            hanger2.classList.remove('hanger-ani-hover');
        }
    });


    hanger3.addEventListener('click', function() {
        console.log("hanger3이 클릭되었습니다.");
        if(lastClickedIndex !== 2) {
            moveCloth(2);
            lastClickedIndex = 2;
            showTextContent(2);
        } else {
            // 이미지가 다시 클릭될 때 해당 이미지만 제외하고 다른 이미지들에게 애니메이션을 적용
            for (let i = 0; i < hangers.length; i++) {
                if (i !== 2) {
                    if (i < 2) {
                        hangers[i].style.animation = 'move-back-right 1.5s linear';
                    } else {
                        hangers[i].style.animation = 'move-back-left 1.5s linear';
                    }
                    hangers[i].style.transform = 'translateX(0vw)';
                } else {
                    hideTextContent();
                }
            }
            lastClickedIndex = -1;
            hanger3.classList.remove('hanger-ani-hover');
        }
    });

    hanger4.addEventListener('click', function() {
        console.log("hanger4가 클릭되었습니다.");
        if(lastClickedIndex !== 3) {
            moveCloth(3);
            lastClickedIndex = 3;
            showTextContent(3);
        } else {
            // 이미지가 다시 클릭될 때 해당 이미지만 제외하고 다른 이미지들에게 애니메이션을 적용
            for (let i = 0; i < hangers.length; i++) {
                if (i !== 3) {
                    if (i < 3) {
                        hangers[i].style.animation = 'move-back-right 1.5s linear';
                    } else {
                        hangers[i].style.animation = 'move-back-left 1.5s linear';
                    }
                    hangers[i].style.transform = 'translateX(0vw)';
                } else {
                    hideTextContent();
                }
            }
            lastClickedIndex = -1;
            hanger4.classList.remove('hanger-ani-hover');
        }
    });

    hanger5.addEventListener('click', function() {
        console.log("hanger5가 클릭되었습니다.");
        if(lastClickedIndex !== 4) {
            moveCloth(4);
            lastClickedIndex = 4;
            showTextContent(4);
        } else {
            // 이미지가 다시 클릭될 때 해당 이미지만 제외하고 다른 이미지들에게 애니메이션을 적용
            for (let i = 0; i < hangers.length; i++) {
                if (i !== 4) {
                    if (i < 4) {
                        hangers[i].style.animation = 'move-back-right 1.5s linear';
                    } else {
                        hangers[i].style.animation = 'move-back-left 1.5s linear';
                    }
                    hangers[i].style.transform = 'translateX(0vw)';
                } else {
                    hideTextContent();
                }
            }
            lastClickedIndex = -1; 
            hanger5.classList.remove('hanger-ani-hover');
        }
    });


    function moveCloth(index)
    {
        let targetPosX = -100;
        let targetPosX2 = 100;
        let newPosition;

        for(let i = 0; i < hangers.length; i++)
        {
            if(i < index)
            {
            newPosition = targetPosX;
            hangers[i].style.transform = 'translateX(' + newPosition + 'vw)';
            hangers[i].style.animation = 'moving-left 2s linear';
            }
            else if(i>index)
            {
            newPosition = targetPosX2;
            hangers[i].style.transform = 'translateX(' + newPosition + 'vw)';
            hangers[i].style.animation = 'moving-right 2s linear';
            }
        }
    }

});

