import BotWhatsapp from '@bot-whatsapp/bot';

/**
 * Un flujo conversacion que responder a las palabras claves "hola", "buenas", ...
 */
export default BotWhatsapp.addKeyword(['PDF-S3 ','pdf-s3', 'Pdf-s3'])
    .addAnswer("sjjsjsjsjsj",
    {
        media:"https://www.bupasalud.com.mx/sites/default/files/documentos/2023-11/central/MEX-Brochure-Bupa-Optimo-Empresarial-2023.pdf"
        
    })
    
    


