import BotWhatsapp from '@bot-whatsapp/bot';

/**
 * Un flujo conversacion que responder a las palabras claves "hola", "buenas", ...
 */
export default BotWhatsapp.addKeyword(['PDF-S4','pdf-s4', 'Pdf-s4'])
    .addAnswer("sjjsjsjsjsj",
    {
        media:"https://www.bupasalud.com.mx/sites/default/files/documentos/2021-12/central/MEX_Folleto_Asistencia_en_el_extranjero_2021.pdf"
        
    })
    
    


