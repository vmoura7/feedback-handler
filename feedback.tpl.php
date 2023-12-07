<?php $isFrontPage = false;
if ($_SERVER['REQUEST_URI'] == '/') {
    $isFrontPage = true;
} ?>

<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <div id="feedback_handler">
        <div dir="ltr" data-b24-crm-button-cont="" class="b24-widget-button-wrapper b24-widget-button-position-bottom-left b24-widget-button-visible">

            <!-- O forms -->

            <div data-b24-crm-button-block="" class="b24-widget-button-social b24-widget-button-hide">

                <form id="message-panel" class="rating-wrapper">
                    <label class="rating-label">Por favor, avalie sua experiência no site?</label>
                    <div class="ratingItemList">
                        <input class="rating rating-1" id="rating-1-2" type="radio" value="1" name="rating">
                        <label class="rating rating-1" for="rating-1-2">
                            <i class="em em-angry"></i>
                        </label>
                        <input class="rating rating-2" id="rating-2-2" type="radio" value="2" name="rating">
                        <label class="rating rating-2" for="rating-2-2">
                            <i class="em em-disappointed"></i>
                        </label>
                        <input class="rating rating-3" id="rating-3-2" type="radio" value="3" name="rating">
                        <label class="rating rating-3" for="rating-3-2">
                            <i class="em em-expressionless"></i>
                        </label>
                        <input class="rating rating-4" id="rating-4-2" type="radio" value="4" name="rating">
                        <label class="rating rating-4" for="rating-4-2">
                            <i class="em em-grinning"></i>
                        </label>
                        <input class="rating rating-5" id="rating-5-2" type="radio" value="5" name="rating">
                        <label class="rating rating-5" for="rating-5-2">
                            <i class="em em-star-struck"></i>
                        </label>
                    </div>
                    <div class="feedback">
                        <textarea placeholder="O que podemos fazer para melhorar?"></textarea>
                        <button id="send" class="submit">Envie seu feedback</button>
                    </div>

                </form>

            </div>
            <div data-b24-crm-button-block-button="" class="b24-widget-button-inner-container">
                <div data-b24-crm-button-block-border="" class="b24-widget-button-inner-mask" style="background: #ffce00;">
                </div>
                <div class="b24-widget-button-block">
                    <div data-b24-crm-button-pulse="" class="b24-widget-button-pulse b24-widget-button-pulse-animate" style="border-color: #ffce00;"></div>
                    <div data-b24-crm-button-block-inner="" class="b24-widget-button-inner-block" style="background: #ffce00;">
                        <div class="b24-widget-button-icon-container">
                            <div data-b24-crm-button-icon="crmform" class="b24-widget-button-inner-item b24-widget-button-icon-animation" style="">
                                <svg class="b24-crm-button-icon" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 90 88" enable-background="new 0 0 64 64" xml:space="preserve" fill="#FFFFFF">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g>
                                            <path fill="#ffffff" d="M56,44c-1.832,0-4-2.168-4-4V20C52,8.973,43.027,0,32,0S12,8.973,12,20v20c0,1.793-2.207,4-4,4 c-2.211,0-4,1.789-4,4s1.789,4,4,4h48c2.211,0,4-1.789,4-4S58.211,44,56,44z">
                                            </path>
                                            <path fill="#ffffff" d="M32,64c4.418,0,8-3.582,8-8H24C24,60.418,27.582,64,32,64z"></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>

                        </div>
                        <div class="b24-widget-button-inner-item b24-widget-button-close">
                            <svg class="b24-widget-button-icon b24-widget-button-close-item" xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29">
                                <path fill="#FFF" fill-rule="evenodd" d="M18.866 14.45l9.58-9.582L24.03.448l-9.587 9.58L4.873.447.455 4.866l9.575 9.587-9.583 9.57 4.418 4.42 9.58-9.577 9.58 9.58 4.42-4.42">
                                </path>
                            </svg>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>

</body>
<script>
    var isFrontPage = <?php echo json_encode($isFrontPage); ?>;
</script>
<script src="feedback_handler.js"></script>

</html>