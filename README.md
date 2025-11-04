# n8n-nodes-edgetts# n8n-nodes-_node-name_



This is an n8n community node. It lets you use Edge TTS in your n8n workflows.This is an n8n community node. It lets you use _app/service name_ in your n8n workflows.



Edge TTS is a free text-to-speech service that uses Microsoft Edge's neural voices to convert text into natural-sounding speech across 400+ voices in multiple languages._App/service name_ is _one or two sentences describing the service this node integrates with_.



[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.



[Installation](#installation)  [Installation](#installation)  

[Operations](#operations)  [Operations](#operations)  

[Compatibility](#compatibility)  [Credentials](#credentials)  <!-- delete if no auth needed -->  

[Usage](#usage)  [Compatibility](#compatibility)  

[Resources](#resources)  [Usage](#usage)  <!-- delete if not using this section -->  

[Resources](#resources)  

## Installation[Version history](#version-history)  <!-- delete if not using this section -->  



Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.## Installation



## OperationsFollow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.



**Synthesize**## Operations

- Text to Speech - Convert text or SSML to audio with customizable voice parameters (pitch, rate, volume)

_List the operations supported by your node._

**Voice**

- List All Voices - Get all 400+ available voices## Credentials

- Filter by Language - Filter voices by language code (e.g., en-US, es-ES)

- Filter by Gender - Filter voices by gender (Female or Male)_If users need to authenticate with the app/service, provide details here. You should include prerequisites (such as signing up with the service), available authentication methods, and how to set them up._



## Compatibility## Compatibility



Minimum n8n version: 0.200.0_State the minimum n8n version, as well as which versions you test against. You can also include any known version incompatibility issues._



Tested against n8n version 1.0.0+## Usage



## Usage_This is an optional section. Use it to help users with any difficult or confusing aspects of the node._



### Basic Text-to-Speech_By the time users are looking for community nodes, they probably already know n8n basics. But if you expect new users, you can link to the [Try it out](https://docs.n8n.io/try-it-out/) documentation to help them get started._



1. Add the Edge TTS node to your workflow## Resources

2. Select **Synthesize** > **Text to Speech**

3. Enter text in the **Input Text** field* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)

4. Choose a voice (default: `en-US-AriaNeural`)* _Link to app/service documentation._

5. Execute the workflow

## Version history

The output includes an `audio` field with base64-encoded MP3 data.

_This is another optional section. If your node has multiple versions, include a short description of available versions and what changed, as well as any compatibility impact._

### Voice Parameters


Customize the voice output using **Additional Options**:

- **Pitch**: Adjust voice pitch (`-100Hz` to `+100Hz`, e.g., `+10Hz`)
- **Rate**: Control speaking speed (`-100%` to `+200%`, e.g., `+50%`)
- **Volume**: Adjust audio volume (`-100%` to `+100%`, e.g., `+90%`)

### Popular Voices

- **English**: `en-US-AriaNeural`, `en-US-GuyNeural`, `en-GB-SoniaNeural`
- **Spanish**: `es-ES-ElviraNeural`, `es-MX-DaliaNeural`
- **French**: `fr-FR-DeniseNeural`, `fr-CA-SylvieNeural`
- **German**: `de-DE-KatjaNeural`, `de-DE-ConradNeural`
- **Portuguese**: `pt-BR-FranciscaNeural`, `pt-PT-RaquelNeural`

### SSML Support

Set **Input Type** to `ssml` for advanced control:

```xml
<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">
  <voice name="en-US-AriaNeural">
    <prosody pitch="+10Hz" rate="+20%">
      Welcome!
    </prosody>
    <break time="500ms"/>
    Please listen carefully.
  </voice>
</speak>
```

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [Microsoft SSML reference](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-synthesis-markup-voice)
* [GitHub repository](https://github.com/andresayac/n8n-nodes-edgetts)
