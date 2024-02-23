import BotWhatsapp from '@bot-whatsapp/bot';

/**
 * Un flujo conversacion que responder a las palabras claves "hola", "buenas", ...
 */
export default BotWhatsapp.addKeyword(['PDF-S22 ','pdf-s22', 'Pdf-s22'])
    .addAnswer("sjjsjsjsjsj",
    {
        media:"https://www.bupasalud.com.mx/sites/default/files/documentos/2023-08/central/Manual_Agente_BUPA_mayo_2021_02.pdf"
        
    })
    
    


