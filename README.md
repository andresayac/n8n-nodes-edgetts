# n8n-nodes-edge-tts# n8n-nodes-edge-tts![image](https://github.com/user-attachments/assets/813b7b34-377c-42e8-9f1a-12e27e682c7f)



n8n community node for Edge TTS - Text-to-Speech using Microsoft Edge capabilities.



[n8n](https://n8n.io/) is a workflow automation platform.Este es un nodo personalizado de n8n que integra Edge TTS (Text-to-Speech) usando las capacidades de Microsoft Edge.<p align="center"><br>



## InstallationEste Community Nodes é uma solução 100% gratuita, criada com o intuito de simplificar e auxiliar toda a comunidade a integrar e utilizar ao máximo os principais recursos oferecidos pela <b>Evolution API v2.2+</b> em seus projetos no N8N. <b>Desenvolvido por OrionDesign.</b>



```bash[n8n](https://n8n.io/) es una plataforma de automatización de flujos de trabajo de código abierto y extensible.</p>

npm install n8n-nodes-edge-tts

```<br>



## Features## Características	



- Text-to-Speech with 400+ voices<div align="center">

- SSML support

- Multiple languages- 🎙️ **Text-to-Speech**: Convierte texto a audio de alta calidad  <img src="https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fapi.npmjs.org%2Fdownloads%2Fpoint%2Flast-year%2Fn8n-nodes-evolution-api&query=downloads&style=for-the-badge&label=Total%20de%20Downloads&labelColor=%230d1117&color=%23359514&cacheSeconds=30&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fn8n-nodes-evolution-api" alt="Dynamic JSON Badge">

- Audio customization (pitch, rate, volume)

- Voice filtering- 🗣️ **Soporte SSML**: Acepta SSML personalizado con control de prosodia, estilos, pausas y pronunciaciones</div>



## Usage- 🌍 **Múltiples Voces**: Acceso a más de 400 voces en diferentes idiomas<br>



### Synthesize Text- 🎚️ **Control de Parámetros**: Ajusta pitch, rate y volume</p>



Convert text to speech with customizable parameters.- 📊 **Metadata**: Obtiene información de word boundaries con timestamps precisos<p align="center">



### Manage Voices- 🔍 **Filtrado de Voces**: Filtra por idioma y género  <a href="https://oriondesign.art.br/whatsapp1"><img src="https://github.com/user-attachments/assets/5a469114-2054-4f01-85b2-51a282518658" alt=”SetupOrion” ></a>     



List and filter available voices by language or gender.- 📦 **Múltiples Formatos**: Exporta audio en base64 o binario  <a href="https://oriondesign.art.br/whatsapp2"><img src="https://github.com/user-attachments/assets/3e3580a9-ae8e-4209-84fc-cfc1c03a8f12" alt=”SetupOrion” ></a>     



## License  <a href="https://oriondesign.art.br/whatsapp3"><img src="https://github.com/user-attachments/assets/91aa7733-c09c-474f-9483-54cb678213d2" alt=”SetupOrion” ></a>



MIT## Instalación</p>




### Instalación desde npm

<h1></h1>

Para instalar este nodo en tu instancia de n8n:

<h3>⚙️ Requisitos</h3>

```bash

npm install n8n-nodes-edge-ttsPara utilizar o nosso **Community Node**, é necessário atender aos seguintes requisitos:  

```- **N8N** na versão **1.54.4** ou superior  

- **Evolution API** na versão **2.2.0** ou superior  

### Instalación Manual

<h1></h1>

1. Clona este repositorio en tu carpeta de nodos personalizados de n8n

2. Instala las dependencias:<h3>📌 Recursos Disponíveis</h3>

```bash

pnpm install<h3>Instância</h3>

```🖥️ Este recurso oferece acesso completo às principais funcionalidades relacionadas às instâncias da Evolution API. Ele permite realizar operações essenciais, como criar novas instâncias, conectar-se a elas, obter informações detalhadas, personalizar comportamentos, monitorar presença, reiniciar e até mesmo excluir instâncias de forma prática e eficiente.

<br>

3. Compila el nodo:<details>

```bash  <summary><b>Lista de operações</b></summary>

pnpm build	<details>

```  	<summary>   ✅ <b> Criar Instancia</b></summary>

	</details>

4. Enlaza el nodo a tu instalación de n8n:	<details>

```bash  	<summary>   ✅ <b> Gerar Qr-Code</b></summary>

npm link	</details>

```	<details>

  	<summary>   ✅ <b> Buscar Instancia</b></summary>

5. En tu directorio de n8n:	</details>

```bash	<details>

npm link n8n-nodes-edge-tts  	<summary>   ✅ <b> Definir Comportamento</b></summary>

```	</details>

	<details>

## Uso  	<summary>   ✅ <b> Definir Presença</b></summary>

	</details>

### Recurso: Synthesize	<details>

  	<summary>   ✅ <b> Definir Proxy</b></summary>

Convierte texto o SSML a audio.	</details>

	<details>

#### Operación: Text to Speech  	<summary>   ✅ <b> Buscar Proxy</b></summary>

	</details>

**Parámetros:**	<details>

- **Input Text** (requerido): El texto o SSML a convertir  	<summary>   ✅ <b> Desconectar WhatsApp</b></summary>

- **Input Type**: Auto Detect, Plain Text o SSML	</details>

- **Voice** (requerido): La voz a usar (ej: `en-US-AriaNeural`, `es-ES-ElviraNeural`)	<details>

  	<summary>   ✅ <b> Deletar Instancia</b></summary>

**Opciones Adicionales:**	</details>

- **Pitch**: Ajuste de tono (-100Hz a +100Hz)</details>

- **Rate**: Velocidad del habla (-100% a +200%)

- **Volume**: Volumen (-100% a +100%)<h3> Mensagem</h3>

- **Output Format**: Base64 o Binary✉️ Este recurso concentra todas as funcionalidades relacionadas ao envio e gerenciamento de mensagens através da Evolution API. Com ele, você pode enviar diversos tipos de conteúdo como textos, imagens, vídeos, áudios, documentos, contatos, listas interativas, botões e até mesmo mensagens PIX. Cada tipo de mensagem possui opções avançadas como delay, mentions, replies e formatações especiais. O recurso foi desenvolvido para proporcionar uma experiência completa de comunicação, permitindo explorar ao máximo os recursos nativos do WhatsApp de forma simples e eficiente.

- **Include Audio Info**: Incluir información del audio (tamaño, duración, formato)<br>

- **Include Metadata**: Incluir metadata de word boundaries<details>

  <summary><b>Lista de operações</b></summary>

**Ejemplo de uso con texto simple:**	<details>

```  	<summary>   ✅ <b> Enviar Texto</b></summary>

Input Text: "Hello, world!"	</details>

Voice: "en-US-AriaNeural"	<details>

```  	<summary>   ✅ <b> Enviar Imagem</b></summary>

	</details>

**Ejemplo de uso con SSML:**	<details>

```xml  	<summary>   ✅ <b> Enviar Video</b></summary>

<speak version="1.0"	</details>

       xmlns="http://www.w3.org/2001/10/synthesis"	<details>

       xmlns:mstts="https://www.w3.org/2001/mstts"  	<summary>   ✅ <b> Enviar Audio</b></summary>

       xml:lang="es-CO">	</details>

  <voice name="es-CO-GonzaloNeural">	<details>

    <mstts:express-as style="narration-professional">  	<summary>   ✅ <b> Enviar Documento</b></summary>

      <prosody rate="+5%" pitch="+10Hz" volume="+0%">	</details>

        Hola, este es un ejemplo de <emphasis>SSML</emphasis>.	<details>

        <break time="400ms" />  	<summary>   ✅ <b> Enviar Enquete</b></summary>

      </prosody>	</details>

    </mstts:express-as>	<details>

  </voice>  	<summary>   ✅ <b> Enviar Contato</b></summary>

</speak>	</details>

```	<details>

  	<summary>   ✅ <b> Enviar Lista</b></summary>

### Recurso: Voice	</details>

	<details>

Explora y filtra las voces disponibles.  	<summary>   ✅ <b> Enviar Botão</b></summary>

	</details>

#### Operaciones:	<details>

- **List All**: Obtiene todas las voces disponibles  	<summary>   ✅ <b> Enviar Pix</b></summary>

- **Filter by Language**: Filtra voces por idioma (ej: `en-US`, `es-ES`)	</details>

- **Filter by Gender**: Filtra voces por género (Female/Male)	<details>

  	<summary>   ✅ <b> Enviar Status</b></summary>

**Opciones:**	</details>

- **Limit**: Número máximo de resultados a retornar	<details>

  	<summary>   ✅ <b> Reagir a Mensagem</b></summary>

## Voces Populares	</details>

</details>

### Inglés

- `en-US-AriaNeural` (Female)<h3>Grupo</h3>

- `en-US-GuyNeural` (Male)👥 Com este recurso, você conta com um conjunto completo de funcionalidades para gerenciamento de grupos no WhatsApp por meio da Evolution API. Ele abrange desde a criação e administração de grupos até o gerenciamento de participantes, configuração de permissões, links de convite e mensagens temporárias. Tudo foi projetado para oferecer controle eficiente e simplificado na administração de grupos.

- `en-GB-SoniaNeural` (Female)<br>

- `en-AU-NatashaNeural` (Female)<details>

  <summary><b>Lista de operações</b></summary>

### Español	<details>

- `es-ES-ElviraNeural` (Female)  	<summary>   ✅ <b> Criar Grupo</b></summary>

- `es-ES-AlvaroNeural` (Male)	</details>

- `es-MX-DaliaNeural` (Female)	<details>

- `es-CO-GonzaloNeural` (Male)  	<summary>   ✅ <b> Atualizar Imagem do Grupo</b></summary>

	</details>

### Otros Idiomas	<details>

- `fr-FR-DeniseNeural` (Francés - Female)  	<summary>   ✅ <b> Atualizar Nome do Grupo</b></summary>

- `de-DE-KatjaNeural` (Alemán - Female)	</details>

- `it-IT-ElsaNeural` (Italiano - Female)	<details>

- `pt-BR-FranciscaNeural` (Portugués - Female)  	<summary>   ✅ <b> Atualizar Descrição do Grupo</b></summary>

	</details>

## Desarrollo	<details>

  	<summary>   ✅ <b> Atualizar Configurações do Grupo</b></summary>

### Estructura del Proyecto	</details>

	<details>

```  	<summary>   ✅ <b> Atualizar Membros</b></summary>

nodes/	</details>

  EdgeTTS/	<details>

    EdgeTTS.node.ts          # Nodo principal  	<summary>   ✅ <b> Buscar Link de convite do Grupo</b></summary>

    EdgeTTS.node.json        # Metadata del nodo	</details>

    edgetts.svg              # Icono del nodo	<details>

    properties/  	<summary>   ✅ <b> Revogar Link de convite do Grupo</b></summary>

      index.ts               # Exporta todas las propiedades	</details>

      synthesize.operations.ts	<details>

      synthesize.fields.ts  	<summary>   ✅ <b> Enviar Link de Convite do Grupo</b></summary>

      voice.operations.ts	</details>

      voice.fields.ts	<details>

    execute/  	<summary>   ✅ <b> Encontrar Participantes</b></summary>

      index.ts               # Exporta todas las funciones	</details>

      synthesize/	<details>

        textToSpeech.ts  	<summary>   ✅ <b> Mensagens Temporarias</b></summary>

      voice/	</details>

        voiceOperations.ts	<details>

```  	<summary>   ✅ <b> Sair do Grupo</b></summary>

	</details>

### Scripts Disponibles	<details>

  	<summary>   ✅ <b> Entrar no Grupo</b></summary>

- `pnpm build`: Compila el proyecto	</details>

- `pnpm dev`: Compila en modo watch</details>

- `pnpm lint`: Verifica el código con ESLint

- `pnpm lintfix`: Corrige automáticamente problemas de lint<h3>Chat</h3>

- `pnpm format`: Formatea el código con Prettier💬 Este recurso disponibiliza um conjunto abrangente de ferramentas para o gerenciamento de conversas e interações utilizando a Evolution API. Com ele, é possível verificar números, enviar e gerenciar mensagens, manipular arquivos de mídia, controlar status de leitura, administrar contatos e monitorar presença. Todas as operações são desenvolvidas para proporcionar um controle completo e eficiente das comunicações, facilitando a gestão tanto de conversas individuais quanto em grupo.

<br>

## Recursos<details>

  <summary><b>Lista de operações</b></summary>

- [Edge TTS NPM Package](https://www.npmjs.com/package/@andresaya/edge-tts)	<details>

- [Azure AI Speech SSML Documentation](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-synthesis-markup)  	<summary>   ✅ <b> Verificar Numero</b></summary>

- [n8n Documentation](https://docs.n8n.io/)	</details>

	<details>

## Licencia  	<summary>   ✅ <b> Ler Mensagem</b></summary>

	</details>

MIT	<details>

  	<summary>   ✅ <b> Gerenciar Arquivoo</b></summary>

## Créditos	</details>

	<details>

Este nodo utiliza [@andresaya/edge-tts](https://www.npmjs.com/package/@andresaya/edge-tts) para la síntesis de voz.  	<summary>   ✅ <b> Marcar como Não lido</b></summary>

	</details>
	<details>
  	<summary>   ✅ <b> Deletar Mensagem</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Buscar Foto de Perfil</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Obter Midia em Base64</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Editar Mensagem</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Enviar Presença</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Bloquear Contato</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Buscar Contatos</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Procurar Mensagens</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Procurar Status</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Procurar Chats</b></summary>
	</details>
</details>

<h3>Evento</h3>
⚡ Este recurso oferece mecanismos avançados para integração e monitoramento em tempo real das atividades da Evolution API. Ele permite configurar e gerenciar Webhooks e RabbitMQ, possibilitando o acompanhamento de eventos como mensagens recebidas, alterações em grupos, status de conexão e muito mais. Essas funcionalidades foram projetadas para garantir uma comunicação ágil e automatizada entre sua aplicação e a API, promovendo respostas imediatas a diferentes eventos do WhatsApp.
<br>
<details>
  <summary><b>Lista de operações</b></summary>
	<details>
  	<summary>   ✅ <b> Webhook</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> RabbitMQ</b></summary>
	</details>
</details>

<h3>Integração</h3>
🔗 Este recurso disponibiliza uma ampla gama de conectores para integrar a Evolution API a diversas plataformas e serviços externos. Entre as possibilidades estão conexões com Chatwoot para atendimento ao cliente, Evolution Bot para automações, Typebot para fluxos conversacionais, além de integrações com Flowise e Dify para soluções de inteligência artificial. Essas integrações ampliam as capacidades da API, permitindo criar soluções robustas e automatizadas para diferentes cenários de negócios.
<br>
<details>
  <summary><b>Lista de operações</b></summary>
	<details>
  	<summary>   ✅ <b> Chatwoot</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Evolution Bot</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Typebot</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Dify</b></summary>
	</details>
	<details>
  	<summary>   ✅ <b> Floise</b></summary>
	</details>
</details>

<h1></h1>

<h3>🤝 Contribuição</h3>

Contribua para o crescimento deste projeto! Você pode ajudar de diversas formas:  
- **Pull Requests**: Envie melhorias, correções ou novas funcionalidades.  
- **Issues**: Relate problemas ou sugira novas ideias.  
- **Sugestões**: Compartilhe suas opiniões e feedbacks.  
- **Documentação**: Ajude a melhorar ou expandir a documentação existente.  

<h1></h1>

<h3>📌 Principais contribuidores</h3>
<a align="center" href="https://github.com/oriondesign2015/n8n-nodes-evolution-api/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=oriondesign2015/n8n-nodes-evolution-api" />
</a>

<h1></h1>
<a href="https://star-history.com/#oriondesign2015/SetupOrion&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=oriondesign2015/SetupOrion&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=oriondesign2015/SetupOrion&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=oriondesign2015/SetupOrion&type=Date" />
 </picture>
</a>

<h1></h1>
<p align="center">
Desenvolvido com ❤️ por OrionDesign
</p>
