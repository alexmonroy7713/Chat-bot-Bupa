import BotWhatsapp from '@bot-whatsapp/bot';

/**
 * Un flujo conversacion que responder a las palabras claves "hola", "buenas", ...
 */
export default BotWhatsapp.addKeyword(['Pdf-I','pdf-i', 'PDF-I'])
    .addAnswer("jsjjsjsjssjsjsj",
    {
        media:"https://www.bupasalud.com.mx/sites/default/files/documentos/2023-08/central/MEX-Infograf%C3%ADa-uso-de-poliza-GHP-2023.pdf"
        
    })
    
    


