if (isFrontPage) {
    document.addEventListener("DOMContentLoaded", function () {
        var popup = document.querySelector('[data-b24-crm-button-cont]');
        var buttonBlock = document.querySelector('[data-b24-crm-button-block]');
        var closeButton = document.querySelector('.b24-widget-button-close');
        var feedbackForm = document.querySelector('.rating-wrapper');
        const sendBtn = document.querySelector('.submit');
        var panel = document.getElementById('message-panel');
        var feedbackHandler = document.getElementById("feedback_handler"); // Elemento com o id "feedback_handler"
        var nutBat = true;


        // Função para mostrar o elemento após um atraso de 3 segundos (3000 milissegundos)
        function mostrarFeedbackHandler() {
            feedbackHandler.style.display = "block";
        }

        // Aguarde 5 segundos e, em seguida, chame a função para mostrar o elemento
        setTimeout(mostrarFeedbackHandler, 20000);


        popup.addEventListener("click", function (event) {
            if (nutBat) {
                popup.classList.add("b24-widget-button-bottom");
                buttonBlock.classList.remove("b24-widget-button-hide");
                buttonBlock.classList.add("b24-widget-button-show");
                nutBat = false;
            } else {
                if (!feedbackForm.contains(event.target) && event.target !== closeButton) {
                    popup.classList.remove("b24-widget-button-bottom");
                    buttonBlock.classList.add("b24-widget-button-hide");
                    buttonBlock.classList.remove("b24-widget-button-show");
                    nutBat = true;
                }
            }
            sendBtn.addEventListener('click', () => {
                panel.innerHTML = `
		  <div id="panel" style="text-align: center;">
			<h5>Muito Obrigado!</h5>
			<p>Seu comentário será fundamental para aprimorar a experiência em nosso site.</p>
		  </div>
		`;
                nutBat = true;
            });
        });

        // Desabilitar o botão no carregamento
        document.querySelector('button.submit').disabled = true;

        // Habilitar botão
        function enable_submit() {
            document.querySelector('button.submit').disabled = false;
            document.querySelector('button.submit').classList.add('not-disabled');
        }

        // Desabilitar botão
        function disable_submit() {
            document.querySelector('button.submit').disabled = true;
            document.querySelector('button.submit').classList.remove('not-disabled');
        }

        // Exibir feedback após classificação
        document.querySelectorAll('.rating').forEach(rating => {
            rating.addEventListener('click', function () {
                var selectedRating = this.value;

                document.querySelector('.feedback').style.display = "block";

                feedback_validate(selectedRating);
            });
        });

        // Executar a função de habilitar botão com base na entrada
        document.querySelector('.feedback textarea').addEventListener('keyup', function () {
            if (this.value.length > 2) {
                enable_submit();
            }
        });

        // Habilitar ou desabilitar botão pela validação
        function feedback_validate(val) {
            if (val <= 3) {
                disable_submit();
            } else if (val > 3) {
                enable_submit();
            }
        }

        // Limpar texto ao mudar de opção
        document.querySelectorAll('.rating').forEach(rating => {
            rating.addEventListener('click', function () {
                var selectedRating = this.value;
                document.querySelector('.feedback textarea').value = ""; // Limpar o texto do textarea
                document.querySelector('.feedback').style.display = "block";
                feedback_validate(selectedRating);
            });
        });


        // Desabilitar o botão no carregamento
        window.addEventListener('load', function () {
            disable_submit();
        });

        // Função para obter o endereço IP do usuário
        function getIPAddress() {
            return fetch("https://api64.ipify.org?format=json")
                .then((response) => response.json())
                .then((data) => {
                    return data.ip;
                })
                .catch((error) => {
                    return null;
                });
        }


        // Função para capturar o feedback e a avaliação do usuário
        function captureFeedback() {
            const feedbackTextarea = document.querySelector("textarea");
            const feedbackRating = document.querySelector("input[name='rating']:checked");

            let feedbackData = {
                avaliacao: "",
                comentario: "",
                ip: ""
            };

            if (feedbackRating) {
                const ratingValue = feedbackRating.value;

                switch (ratingValue) {
                    case "1":
                        feedbackData.avaliacao = "muito insatisfeito";
                        break;
                    case "2":
                        feedbackData.avaliacao = "insatisfeito";
                        break;
                    case "3":
                        feedbackData.avaliacao = "neutro";
                        break;
                    case "4":
                        feedbackData.avaliacao = "satisfeito";
                        break;
                    case "5":
                        feedbackData.avaliacao = "muito satisfeito";
                        break;
                    default:
                        feedbackData.avaliacao = "avaliação não reconhecida";
                }
            }

            if (feedbackTextarea) {
                feedbackData.comentario = feedbackTextarea.value.trim();
            }

            if (feedbackData.comentario === "") {
                feedbackData.comentario = "nenhum comentario foi enviado";
            }

            getIPAddress().then((ipAddress) => {
                feedbackData.ip = ipAddress || "IP não disponível";

                // Converter o objeto em JSON
                const jsonData = JSON.stringify(feedbackData);

                // Envie os dados para o arquivo PHP usando uma requisição POST
                var xhr = new XMLHttpRequest();
                xhr.open("POST", "../../../../feedback-handler.php", true);
                xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

                xhr.onerror = function () {
                    console.error("Erro na solicitação. Verifique a conexão de rede.");
                };

                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            try {
                                var response = JSON.parse(xhr.responseText);
                                // Verifique se a resposta é JSON válida
                            } catch (e) {
                                console.error("Erro ao analisar a resposta JSON:", e);
                            }
                        } else {
                            console.error("Erro na solicitação. Status:", xhr.status);
                        }
                    }
                };

                xhr.send(jsonData);
            });
        }

        function hideFeedbackHandler() {
            setTimeout(() => {
                feedbackHandler.style.display = "none";
            }, 10000);
        }

        // Event listener para capturar o feedback quando o botão for clicado
        document.getElementById("send").addEventListener("click", function (event) {
            event.preventDefault();
            captureFeedback();
            hideFeedbackHandler();
        });
    });
}