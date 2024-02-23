import BotWhatsapp from '@bot-whatsapp/bot';

import welcomeFlow from './welcome.flow';
import paypalFlow from './paypal.flow';
import chatbotFlow from './chatbot.flow';
import nodeFlow from './node.flow';
import manualesFlos from './manuales.flos';
import infografia from './infografia';
import pago from './pago';
import rembolso from './rembolso';
import agente from './PDFS/agente';
import asistencia from './PDFS/asistencia';
import bupaCasa from './PDFS/bupa-casa';
import copago from './PDFS/copago';
import esencial from './PDFS/esencial';
import ghp from './PDFS/ghp';
import NA from './PDFS/NA';
import nacionalPlus from './PDFS/nacional-plus';
import optimo from './PDFS/optimo';
import planes from './PDFS/planes';
import ventas from './PDFS/ventas';
import VitalA from './PDFS/Vital-a';
import vitall from './PDFS/vitall';
vitall


/**
 * Debes de implementasr todos los flujos
 */
export default BotWhatsapp.createFlow(
    [
      
        welcomeFlow,
        vitall,
        ventas,
        VitalA,
        planes,
        optimo,
        nacionalPlus,
        NA,
        ghp,
        esencial,
        copago,
        bupaCasa,
        asistencia,
        agente,
        pago,
        rembolso,
        manualesFlos,
        paypalFlow,
        infografia,
        chatbotFlow,
        nodeFlow
    ]
)