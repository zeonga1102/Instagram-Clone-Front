$(document).ready(function () {
            addFeed()
            showMoreButton()
        })

        let feedArray = []

        function showMoreButton() {
            for(let i=0; i<3; i++) {
                let id = '#text' + i
                let text = $(id).text();
                feedArray[i] = text;

                if (text.length >= 100) {
                    let text_short = text.substring(0, 100).trim() + "... ";
                    let moreButton = `<a onclick="moreButtonClick(this, ${i})" class="showMore">더 보기</a>`;

                    $(id).parent('p').append(moreButton)
                    $(id).text(text_short)
                }
            }
        }

        function moreButtonClick(obj, i) {
            let textId = '#text' + i;
            $(obj).hide();
            $(textId).text(feedArray[i]);
        }

        function inputComment(obj) {
            obj.style.height = '1px';
            obj.style.height = (12 + obj.scrollHeight) + 'px';
            if($(obj).val() != '') {
                $(obj).next('Button').attr('disabled', false);
            }
            else {
                $(obj).next('Button').attr('disabled', true);
            }

        }

        function showModal() {
            $('.modal').css('display', 'flex');
            $('body').css('overflow', 'hidden');
        }

        function addFeed() {
            for (let i=0; i<3; i++) {
                let textId = 'text' + i
                let carouselId = 'carouselId' + i
                let temp_html = `<div class="card">
                                    <div class="card-body">
                    <!--                    프로필 사진, 아이디, 옵션 버튼-->
                                        <div class="feedHeader">
                                            <div class="user">
                                                <img width="30px" height="30px" style="border-radius: 50%" src="https://i.pinimg.com/550x/1c/c5/35/1cc535901e32f18db87fa5e340a18aff.jpg">
                                                <div>
                                                    <p class="userId">user_id</p>
                                                    <p class="optional">location</p>
                                                </div>
                                            </div>
                                            <Button onclick="showModal()" class="optionButton"></Button>
                                        </div>
                    <!--                    이미지 슬라이드 캐러셀-->
                                        <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                                            <div class="carousel-indicators">
                                                <button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="0"
                                                        class="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="1"
                                                        aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#${carouselId}" data-bs-slide-to="2"
                                                        aria-label="Slide 3"></button>
                                            </div>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active">
                                                    <img src="https://media.wired.com/photos/5fb70f2ce7b75db783b7012c/master/pass/Gear-Photos-597589287.jpg" class="d-block w-100" alt="...">
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="https://www.timeoutdubai.com/cloud/timeoutdubai/2022/02/14/How-to-take-great-photos-of%E2%80%A6the-desert-1024x768.jpg" class="d-block w-100" alt="...">
                                                </div>
                                                <div class="carousel-item">
                                                    <img src="https://www.usnews.com/dims4/USNEWS/f13645c/2147483647/resize/1200x%3E/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F24%2F33%2F23be13ed44f3950df8263ccd6753%2Fpods220126-01.JPG" class="d-block w-100" alt="...">
                                                </div>
                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}"
                                                    data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}"
                                                    data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                    <!--                    피드 본문-->
                                        <div class="feedContent">
                                            <div class="feedButton">
                                                <div>
                                                    <img width="24px" height="24px" src="images/heart.png">
                                                    <img width="24px" height="24px" src="images/comment.png">
                                                    <img width="24px" height="24px" src="images/direct.png">
                                                </div>
                                                <img width="24px" height="24px" src="images/bookmark.png">
                                            </div>
                                            <p class="likeCount">좋아요 2개</p>
                                            <div class="feedText">
                                                <p style="font-size: 14px"><span style="font-size: small; font-weight: bold">user_id </span><span id="${textId}">This is a wider card with supporting text below as a natural lead-in
                                                    to
                                                    additional content. This content is a little bit longer.</span></p>
                                            </div>
                                            <div>
                                                <p style="font-size: 14px; color: darkgray">댓글 10개 모두 보기</p>
                                                <p style="font-size: 14px"><span style="font-size: small; font-weight: bold">commenter_id </span><span>댓글입니다.</span></p>
                                            </div>
                                            <p class="elapsedTime">4시간 전</p>
                                        </div>
<!--                                            댓글 다는 부분-->
                                        <div class="commentInput">
                                            <img width="24px" height="24px" src="images/emoji.png">
                                            <textarea onkeydown="inputComment(this)" onkeyup="inputComment(this)" id="textareaComment" placeholder="댓글 달기..."></textarea>
                                            <button disabled="false">게시</button>
                                        </div>
                                    </div>
                                </div>`
                $('.timeline').append(temp_html)

            }
        }

        function closeModalButtonClick() {
            $('.modal').css('display', 'none');
            $('body').css('overflow', 'visible');
        }