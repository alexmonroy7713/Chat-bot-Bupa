import BotWhatsapp from '@bot-whatsapp/bot';

/**
 * Un flujo conversacion que responder a las palabras claves "hola", "buenas", ...
 */
export default BotWhatsapp.addKeyword(['PDF-S2','pdf-s2', 'Pdf-s2'])
    .addAnswer("sjjsjsjsjsj",
    {
        media:"https://www.bupasalud.com.mx/sites/default/files/documentos/2023-09/central/V3_DIG_Brochure_Nacional_Plus_7sep23.pdf"
        
    })
    
    


