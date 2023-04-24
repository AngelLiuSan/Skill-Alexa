const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Hola puedes iniciar diciendo un estado de ánimo, como por ejemplo triste o feliz, En que te puedo ayudar';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const TristeIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'TristeIntent';
    },
    handle(handlerInput) {
        const factArr = data_Tris;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speakOutput = GET_FACT_MESSAGE + randomFact;
            return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const FelizIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'FelizIntent';
    },
    handle(handlerInput) {
        const factArr = data_Fe;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speakOutput = GET_FACT_MESSAGE + randomFact;
            return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const InspiIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'InspiIntent';
    },
    handle(handlerInput) {
        const factArr = data_ins;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speakOutput = GET_FACT_MESSAGE + randomFact;
            return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const PensarIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PensarIntent';
    },
    handle(handlerInput) {
        const factArr = data_ins;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speakOutput = GET_FACT_MESSAGE + randomFact;
            return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const EnojoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'EnojoIntent';
    },
    handle(handlerInput) {
        const factArr = data_en;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speakOutput = GET_FACT_MESSAGE + randomFact;
            return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const PreIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PreIntent';
    },
    handle(handlerInput) {
        const factArr = data_pre;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speakOutput = GET_FACT_MESSAGE + randomFact;
            return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const EnaIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'EnaIntent';
    },
    handle(handlerInput) {
        const factArr = data_ena;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speakOutput = GET_FACT_MESSAGE + randomFact;
            return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const AburridoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AburridoIntent';
    },
    handle(handlerInput) {
        const factArr = data_abu;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speakOutput = GET_FACT_MESSAGE + randomFact;
            return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const DepreIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DepreIntent';
    },
    handle(handlerInput) {
        const factArr = data_dep;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speakOutput = GET_FACT_MESSAGE + randomFact;
            return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const SolIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SolIntent';
    },
    handle(handlerInput) {
        const factArr = data_sol;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speakOutput = GET_FACT_MESSAGE + randomFact;
            return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'En que te puedo ayudar?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Vuelve pronto!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento no te entiendo. habla bien.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Épale un error.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const GET_FACT_MESSAGE = 'La frase:   ';
const data_Tris = [
  'Si este es el peor día de tu vida, entonces debes saber que mañana será mejor',
  'Es triste cuando te das cuenta de que no eres tan importante para alguien como creías que eras',
  'Ganamos fortaleza gracias al dolor y la tristeza. Cada vez que morimos, aprendemos a vivir de nuevo',
];
const data_Fe = [
  'Si la vida es un chiste, quiero que te rias, Que saltes de alegria y hagas lo que nunca hiciste. Lo que de verdad te gustaria, lo que llenara tu dia a dia',
  'Si la felicidad tuviera una forma, tendría forma de cristal, porque puede estar a tu alrededor sin que la notes',
  'La vida es un regalo y no pienso desperdiciarla. Nunca se sabe qué cartas repartirá la próxima vez',
];
const data_ins = [
  'No vivas con falsedades ni miedos, porque terminarás odiándote a ti mismo.',
  '¿No es asombroso el cielo? No importa cuantas veces lo mires, nunca es el mismo dos veces. Este cielo de ahora solo existe en este instante',
  'Nadie puede entender perfectamente a otra persona, ya es bastante difícil entenderse a uno mismo, tal vez por eso la vida es tan interesante',
];
const data_pen = [
  'La vida es el examen más difícil. La mayoría fracasa por intentar copiar a los demás, sin darse cuenta de que cada uno tiene un examen diferente...',
  'La vida va demasiado rápido. Si no te paras y miras a tu alrededor de vez en cuando, puedes perdértela',
  'Todos pasan por mi rancho pero nadie se detiene, siempre algún temor les viene que con nada los engancho.',
];
const data_en = [
  'Nunca tomes una decisión cuando estés enfadado, nunca hagas una promesa cuando estés feliz',
  'Puedes maldecir al destino, pero cuando llega el final, tenemos que dejarnos ir',
  'nfadarse con la persona adecuada, en el grado exacto, en el momento oportuno, con el propósito justo y del modo correcto, eso, ciertamente, no resulta tan sencillo',
];
const data_pre = [
  'Alguien que conocí escribió que abandonamos nuestros sueños por miedo a poder fracasar, o peor aún, por miedo a poder triunfar',
  'Sólo tú puedes decidir qué hacer con el tiempo que se te ha dado',
  'Que la vida es corta. Y que hay muchas otras cosas aparte de preocupaciones',
];
const data_ena = [
  'Conocerte. Esa es la mejor cosa que me pudo pasar.',
  'Te amo para amarte y no para ser amada, puesto que nada me complace tanto como verte feliz.',
  'Solía decir, Quiero morir antes de ser viejo, pero gracias a ti podría pensarlo dos veces',
];
const data_abu = [
  'Si estas aburrido te recomiendo que te pongas a estudiar',
  'El aburrimiento es la enfermedad de las personas afortunadas; los desgraciados no se aburren, tienen demasiado que hacer.',
  'El que conoce el arte de vivir consigo mismo ignora el aburrimiento.',
];
const data_dep = [
  'El pasado puede doler, pero, tal como yo lo veo, puedes o huir de él o aprender',
  'Oh, sí... El pasado puede doler, pero tal como yo lo veo puedes huir de él o aprender',
  'Hay veces que un hombre tiene que luchar tanto por la vida, que no tiene tiempo de vivirla.',
];
const data_sol = [
  'Cuando nos damos cuenta de que realmente estamos solos es cuando necesitamos más a otros',
  'Nadie está realmente solo en este mundo: todo el mundo tiene su propio Dios, su dolor o su propio orgullo para hacerle compañía',
  'La soledad es y siempre ha sido la experiencia central e inevitable de todo hombre',
];

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        TristeIntentHandler,
        FelizIntentHandler,
        InspiIntentHandler,
        PensarIntentHandler,
        EnojoIntentHandler,
        PreIntentHandler,
        EnaIntentHandler,
        AburridoIntentHandler,
        DepreIntentHandler,
        SolIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();