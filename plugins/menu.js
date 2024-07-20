//Copyright ©JOANIMI/KILLUA
//https://whatsapp.com/channel/0029Vab5oDNElagpHtJjmT0B

import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' || device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/2784677013ba9efe6cc03.jpg'}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: ``.trim() },
            footer: { text: `©() بوت`.trim() },  
            header: {
                title: `*اهلا بيك يا* @${mentionId.split('@')[0]} *في بوت () لبيع وشراء الادوات المنزليه* حابب تعمل ايه؟`,
                subtitle: ``,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
  						buttons: [
  							{
  								name: 'single_select',
  						  	buttonParamsJson: JSON.stringify({
  						  		title: '[ شراء ]',
  						  		sections: [
  						  			{
  						  				title: 'حابب تشتري ايه؟',
  						  		    rows: [
  						  		    	{
  						  		    		header: 'ادوات منزليه جديده',
  										      title: '',
  									    	  description: '',
  								    		  id: '.ادوات-جديده'
  						  		    	}
  						  		    ]
  						  			},
  						  			{
  						  				rows: [
  						  					{
  						  		    		header: 'ادوات منزليه مستعمله',
  										      title: '',
  									    	  description: '',
  								    		  id: '.ادوات-مستعمله'
  						  		    	}
  						  				]
  						  			}
  						  		]
  						  	})
  							},
  							{
  								name: 'single_select',
  						  	buttonParamsJson: JSON.stringify({
  						  		title: '[ بيع ]',
  						  		sections: [
  						  			{
  						  				title: 'حابب تبيع ايه؟',
  						  		    rows: [
  						  		    	{
  						  		    		header: 'ادوات منزليه جديده',
  										      title: '',
  									    	  description: '',
  								    		  id: '.بيع الشخص دا عاوز يبيع (ادوات منزليه مستعمله)'
  						  		    	}
  						  		    ]
  						  			},
  						  			{
  						  				rows: [
  						  					{
  						  		    		header: 'ادوات منزليه مستعمله',
  										      title: '',
  									    	  description: '',
  								    		  id: '.بيع الشخص دا عاوز يبيع (ادوات منزليه مستعمله)'
  						  		    	}
  						  				]
  						  			}
  						  		]
  						  	})
  							},
                              {
                                  name: 'cta_url',
                                  buttonParamsJson: JSON.stringify({
                                      display_text: '[ صفحة البوت ]',
                                      url: 'https://www.google.com',
                                      merchant_url: ''
                                  })
                              }
  			  		],
                messageParamsJson: ''
            }
        };        

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};
handler.command = ['بوت'];
export default handler;