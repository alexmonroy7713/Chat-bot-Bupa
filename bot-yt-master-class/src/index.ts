import "dotenv/config"
import BotWhatsapp from '@bot-whatsapp/bot'
import database from './database';
import provider from './provider';
import flow from './flow';
import { initServer } from "./services/http";
import { run } from "./services/openai";
import { response } from "express";
import { generatePrompt } from "./services/openai/prompt";
generatePrompt
run

console.log("Modelo utilizado:", "gpt-3.5-turbo");
/**
 * Funcion principal del bot
 */
const main = async () => {
    console.log("Modelo utilizado:", "gpt-3.5-turbo");


    const botFLow = BotWhatsapp.addKeyword('hola').addAnswer('Buenas!') as any

    console.log(botFLow.toJson())
    console.log({ botFLow })
    console.log({ botFLow })


    console.log("Modelo utilizado:", "gpt-3.5-turbo");
   
  
    const botInstance = await BotWhatsapp.createBot({
        database,
        provider,
        flow
    })

    initServer(botInstance)
}


main()