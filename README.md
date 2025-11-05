# n8n-nodes-edgetts# n8n-nodes-edgetts# n8n-nodes-_node-name_



This is an n8n community node. It lets you use Edge TTS in your n8n workflows.



Edge TTS is a free text-to-speech service that uses Microsoft Edge's neural voices to convert text into natural-sounding speech across 400+ voices in multiple languages.This is an n8n community node. It lets you use Edge TTS in your n8n workflows.This is an n8n community node. It lets you use _app/service name_ in your n8n workflows.



[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.



[Installation](#installation)  Edge TTS is a free text-to-speech service that uses Microsoft Edge's neural voices to convert text into natural-sounding speech across 400+ voices in multiple languages._App/service name_ is _one or two sentences describing the service this node integrates with_.

[Operations](#operations)  

[Compatibility](#compatibility)  

[Usage](#usage)  

[Resources](#resources)  [n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.



## Installation



Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.[Installation](#installation)  [Installation](#installation)  



## Operations[Operations](#operations)  [Operations](#operations)  



### Synthesize[Compatibility](#compatibility)  [Credentials](#credentials)  <!-- delete if no auth needed -->  

- **Text to Speech** - Convert text or SSML to audio with customizable voice parameters (pitch, rate, volume)

[Usage](#usage)  [Compatibility](#compatibility)  

### Voice

- **List All Voices** - Get all 400+ available voices[Resources](#resources)  [Usage](#usage)  <!-- delete if not using this section -->  

- **Filter by Language** - Filter voices by language code (e.g., en-US, es-ES)

- **Filter by Gender** - Filter voices by gender (Female or Male)[Resources](#resources)  



## Compatibility## Installation[Version history](#version-history)  <!-- delete if not using this section -->  



**Minimum n8n version:** 0.200.0



**Tested against:** n8n version 1.0.0+Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.## Installation



## Usage



### Basic Text-to-Speech## OperationsFollow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.



1. Add the **Edge TTS** node to your workflow

2. Select **Synthesize** → **Text to Speech**

3. Enter text in the **Input Text** field**Synthesize**## Operations

4. Choose a voice (default: `en-US-AriaNeural`)

5. Execute the workflow- Text to Speech - Convert text or SSML to audio with customizable voice parameters (pitch, rate, volume)



The output includes an `audio` field with base64-encoded MP3 data._List the operations supported by your node._



### Voice Parameters**Voice**



Customize the voice output using **Additional Options**:- List All Voices - Get all 400+ available voices## Credentials



**Pitch** - Adjust voice pitch- Filter by Language - Filter voices by language code (e.g., en-US, es-ES)

- Format: `±NHz` (e.g., `+10Hz`, `-15Hz`)

- Range: `-100Hz` to `+100Hz`- Filter by Gender - Filter voices by gender (Female or Male)_If users need to authenticate with the app/service, provide details here. You should include prerequisites (such as signing up with the service), available authentication methods, and how to set them up._

- Higher values = younger/excited sound

- Lower values = serious/authoritative sound



**Rate** - Control speaking speed## Compatibility## Compatibility

- Format: `±N%` (e.g., `+50%`, `-20%`)

- Range: `-100%` to `+200%`

- Positive values = faster speech

- Negative values = slower speechMinimum n8n version: 0.200.0_State the minimum n8n version, as well as which versions you test against. You can also include any known version incompatibility issues._



**Volume** - Adjust audio volume

- Format: `±N%` (e.g., `+90%`, `-50%`)

- Range: `-100%` to `+100%`Tested against n8n version 1.0.0+## Usage



### Popular Voices by Language



**English**## Usage_This is an optional section. Use it to help users with any difficult or confusing aspects of the node._

- `en-US-AriaNeural` - Female, American (friendly, natural)

- `en-US-GuyNeural` - Male, American (professional)

- `en-GB-SoniaNeural` - Female, British

- `en-AU-NatashaNeural` - Female, Australian### Basic Text-to-Speech_By the time users are looking for community nodes, they probably already know n8n basics. But if you expect new users, you can link to the [Try it out](https://docs.n8n.io/try-it-out/) documentation to help them get started._

- `en-IN-NeerjaNeural` - Female, Indian



**Spanish**

- `es-ES-ElviraNeural` - Female, Spain1. Add the Edge TTS node to your workflow## Resources

- `es-MX-DaliaNeural` - Female, Mexico

- `es-AR-ElenaNeural` - Female, Argentina2. Select **Synthesize** > **Text to Speech**

- `es-CO-SalomeNeural` - Female, Colombia

3. Enter text in the **Input Text** field* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)

**French**

- `fr-FR-DeniseNeural` - Female, France4. Choose a voice (default: `en-US-AriaNeural`)* _Link to app/service documentation._

- `fr-CA-SylvieNeural` - Female, Canada

5. Execute the workflow

**German**

- `de-DE-KatjaNeural` - Female## Version history

- `de-DE-ConradNeural` - Male

The output includes an `audio` field with base64-encoded MP3 data.

**Portuguese**

- `pt-BR-FranciscaNeural` - Female, Brazil_This is another optional section. If your node has multiple versions, include a short description of available versions and what changed, as well as any compatibility impact._

- `pt-PT-RaquelNeural` - Female, Portugal

### Voice Parameters

**Italian**

- `it-IT-ElsaNeural` - Female

- `it-IT-DiegoNeural` - MaleCustomize the voice output using **Additional Options**:



**Chinese**- **Pitch**: Adjust voice pitch (`-100Hz` to `+100Hz`, e.g., `+10Hz`)

- `zh-CN-XiaoxiaoNeural` - Female, Mandarin- **Rate**: Control speaking speed (`-100%` to `+200%`, e.g., `+50%`)

- `zh-HK-HiuGaaiNeural` - Female, Cantonese- **Volume**: Adjust audio volume (`-100%` to `+100%`, e.g., `+90%`)

- `zh-TW-HsiaoChenNeural` - Female, Taiwanese

### Popular Voices

**Japanese**

- `ja-JP-NanamiNeural` - Female- **English**: `en-US-AriaNeural`, `en-US-GuyNeural`, `en-GB-SoniaNeural`

- `ja-JP-KeitaNeural` - Male- **Spanish**: `es-ES-ElviraNeural`, `es-MX-DaliaNeural`

- **French**: `fr-FR-DeniseNeural`, `fr-CA-SylvieNeural`

**Korean**- **German**: `de-DE-KatjaNeural`, `de-DE-ConradNeural`

- `ko-KR-SunHiNeural` - Female- **Portuguese**: `pt-BR-FranciscaNeural`, `pt-PT-RaquelNeural`

- `ko-KR-InJoonNeural` - Male

### SSML Support

### SSML Support

Set **Input Type** to `ssml` for advanced control:

For advanced voice control, set **Input Type** to `ssml`:

```xml

**Basic SSML Example:**<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">

```xml  <voice name="en-US-AriaNeural">

<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">    <prosody pitch="+10Hz" rate="+20%">

  <voice name="en-US-AriaNeural">      Welcome!

    <prosody pitch="+10Hz" rate="+20%">    </prosody>

      Welcome to our service!    <break time="500ms"/>

    </prosody>    Please listen carefully.

    <break time="500ms"/>  </voice>

    <prosody rate="-10%"></speak>

      Please listen carefully to the following options.```

    </prosody>

  </voice>## Resources

</speak>

```* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)

* [Microsoft SSML reference](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-synthesis-markup-voice)

**SSML with Multiple Voices:*** [GitHub repository](https://github.com/andresayac/n8n-nodes-edgetts)

```xml
<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">
  <voice name="en-US-GuyNeural">
    Hello, I'm the narrator.
  </voice>
  <break time="300ms"/>
  <voice name="en-US-AriaNeural">
    And I'm the assistant!
  </voice>
</speak>
```

**SSML with Emphasis and Say-As:**
```xml
<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="en-US">
  <voice name="en-US-AriaNeural">
    Your order number is <say-as interpret-as="digits">12345</say-as>.
    <break time="500ms"/>
    The total is <say-as interpret-as="currency" language="en-US">$45.99</say-as>.
    <break time="500ms"/>
    <emphasis level="strong">Thank you for your purchase!</emphasis>
  </voice>
</speak>
```

### Working with Audio Output

The node returns audio as base64-encoded data in this format:
```
data:audio/mp3;base64,<base64-data>
```

**Save to File:**
1. Add a **Write Binary File** node after Edge TTS
2. Set the file path (e.g., `/tmp/speech.mp3`)
3. The audio will be automatically saved

**Use in HTTP Request:**
1. Extract the base64 data from the `audio` field
2. Send it in an HTTP request to APIs that accept base64 audio
3. Or decode and send as binary data

**Play in Browser:**
```html
<audio controls>
  <source src="{{ $json.audio }}" type="audio/mp3">
</audio>
```

### Performance Metrics

The node includes performance data in the output:

```json
{
  "success": true,
  "voice": "en-US-AriaNeural",
  "audio": "data:audio/mp3;base64,...",
  "performance": {
    "synthesizeMs": 1250,
    "conversionMs": 45,
    "totalMs": 1295
  }
}
```

Use these metrics to:
- Monitor API response times
- Identify network latency issues
- Optimize workflow performance
- Debug slow executions

### Batch Processing Example

Convert multiple texts at once using a loop:

**Step 1:** Create array with **Set** node
```json
[
  { "text": "Hello world", "voice": "en-US-AriaNeural", "filename": "hello.mp3" },
  { "text": "Hola mundo", "voice": "es-ES-ElviraNeural", "filename": "hola.mp3" },
  { "text": "Bonjour monde", "voice": "fr-FR-DeniseNeural", "filename": "bonjour.mp3" }
]
```

**Step 2:** Add **Loop Over Items** node

**Step 3:** Add **Edge TTS** node inside loop
- Input Text: `{{ $json.text }}`
- Voice: `{{ $json.voice }}`

**Step 4:** Add **Write Binary File** node
- File Path: `/tmp/{{ $json.filename }}`

### Finding the Right Voice

**Method 1: List All Voices**
1. Use **Voice** → **List All Voices**
2. Browse the complete list of 400+ voices
3. Note the voice name you want to use

**Method 2: Filter by Language**
1. Use **Voice** → **Filter by Language**
2. Enter language code (e.g., `es-MX` for Mexican Spanish)
3. Get all voices for that language

**Method 3: Filter by Gender**
1. Use **Voice** → **Filter by Gender**
2. Select `Female` or `Male`
3. Get filtered list

**Method 4: Combine Filters with Code Node**
```javascript
// Filter Spanish female voices
return items[0].json.voices
  .filter(v => v.language.startsWith('es-') && v.gender === 'Female')
  .map(v => ({ json: v }));
```

### Common Use Cases

**1. Automated Notifications**
- Convert alert messages to speech
- Send audio notifications via Telegram/WhatsApp
- Create voice announcements

**2. E-Learning Content**
- Generate course narrations
- Create language learning materials
- Produce audiobook content

**3. Accessibility**
- Convert articles to audio
- Create voice versions of documents
- Generate audio descriptions

**4. Customer Service**
- IVR menu prompts
- Automated voice responses
- Call center announcements

**5. Social Media**
- Create voiceovers for videos
- Generate podcast intros
- Produce audio for Instagram/TikTok

### Tips and Best Practices

**For Best Quality:**
- Use shorter text segments (under 500 words)
- Choose appropriate voices for your language
- Test different pitch/rate settings
- Use SSML for precise control

**For Better Performance:**
- Cache frequently used audio
- Process in batches when possible
- Monitor `synthesizeMs` metric
- Use parallel processing for multiple items

**For Multilingual Content:**
- Match voice language to text language
- Use SSML to switch voices in same audio
- Consider regional voice variants (es-ES vs es-MX)

### Troubleshooting

**Audio not generating:**
- Check if text is not empty
- Verify voice name is correct (case-sensitive)
- Ensure n8n has internet connection

**Slow performance:**
- Check `performance.synthesizeMs` value
- High values (>3000ms) indicate network issues
- Try shorter text segments
- Check server location vs Microsoft servers

**Voice not found:**
- Use **List All Voices** to verify voice exists
- Voice names are case-sensitive
- Format: `{language}-{region}-{name}Neural`
- Example: `en-US-AriaNeural` (not `en-us-ariaNeural`)

**SSML errors:**
- Validate SSML syntax
- Ensure voice name in SSML matches selected voice
- Check xml:lang attribute matches voice language
- Use proper namespace declarations

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [Microsoft SSML reference](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-synthesis-markup-voice)
* [List of all available voices](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/language-support?tabs=tts)
* [Edge TTS library](https://github.com/andresayac/edge-tts)
* [GitHub repository](https://github.com/andresayac/n8n-nodes-edgetts)
* [npm package](https://www.npmjs.com/package/@andresaya/n8n-nodes-edgetts)
* [Report issues](https://github.com/andresayac/n8n-nodes-edgetts/issues)
