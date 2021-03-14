import { https } from './api'


export default {    
    getCharacterIronMan:() => {
        return https.get('v1/public/characters/1009368?ts=1615619120&apikey=3fe13886245b5050848bc973f7a52893&hash=6ad9dbe18c9253a57e37dfe9afd8eb79')
    },
    getCharacterThor: () => {
        return https.get('v1/public/characters/1009664?ts=1615619120&apikey=3fe13886245b5050848bc973f7a52893&hash=6ad9dbe18c9253a57e37dfe9afd8eb79')
    }

}
