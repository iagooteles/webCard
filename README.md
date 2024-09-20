# WebCard

## Descrição
WebCard é um aplicativo web que permite aos usuários criar seu próprio cartão virtual. Com uma interface amigável, o aplicativo facilita o upload de uma imagem e o preenchimento de formulários personalizados para gerar um cartão com informações pessoais e links para redes sociais.

## Tecnologias Utilizadas
- **Python** (com Flask para o back-end)
- **HTML5** e **CSS3** para estrutura e estilização
- **JavaScript** para manipulação do DOM e interatividade
- **Flask** para rotas e manipulação de formulários

## Funcionalidades
- Upload de uma imagem para personalizar o cartão.
- Formulários para inserir informações pessoais e links de até 3 redes sociais.
- Mensagens dinâmicas renderizadas com JavaScript para melhorar a experiência do usuário.
- Função de toggle para exibir ou ocultar campos de entrada de redes sociais.
- Modal para facilitar a inserção de informações.

## Funcionalidades Futuras
- Em uma versão futura, o aplicativo permitirá que os usuários façam o download do seu cartão como um arquivo PDF.

## Como Usar
1. Faça o upload de uma imagem.
2. Preencha os campos do formulário com seu nome, título e até 3 redes sociais.
3. Clique em "Gerar Cartão" para visualizar seu cartão virtual.

## Contribuição
Sinta-se à vontade para contribuir para o projeto. Qualquer feedback ou sugestão é bem-vindo!


### Pré-requisitos
- Python 3.x instalado
- pip (gerenciador de pacotes do Python)

### Passos para Executar o Projeto

1. **Clone o Repositório**

   Abra o terminal e execute o seguinte comando para clonar o repositório:

   ```bash
   git clone https://github.com/iagooteles/webCard.git

2. **Navegue até o Diretório do Projeto**
   ```bash
    cd webCard

3. **Crie um Ambiente Virtual (opcional, mas recomendado)**
   ```bash
    python -m venv .venv

4. **Ative o Ambiente Virtual**

    -No Windows:
       ```bash
        .venv\Scripts\activate

    -No macOS/Linux:
       ```bash
        source .venv/bin/activate

5. **Instale as Dependências**
   ```bash
    pip install -r requirements.txt

6. **Execute o Servidor**
   ```bash
    python main.py

7. **Acesse o Aplicativo**
    Abra um navegador e coloque o endereço: 
    - http://127.0.0.1:5000
    