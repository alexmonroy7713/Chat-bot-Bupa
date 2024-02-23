import BotWhatsapp from '@bot-whatsapp/bot';

/**
 * Un flujo conversacion que responder a las palabras claves "hola", "buenas", ...
 */
export default BotWhatsapp.addKeyword(['Pdf-L','pdf-l', 'PDF-L'])
    .addAnswer("sjjsjsjsjsj",
    {
        media:"https://www.bupasalud.com.mx/sites/default/files/documentos/2023-08/central/MEX-Formulario-Solicitud-Reembolso-2023-Fill.pdf"
        
    })
    
    


