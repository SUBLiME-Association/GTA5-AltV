// Ceci est l'initiation du core sublime sur altv (qui regroupera beaucoup de fonctionnalité utils pour la création du contenue ainsi que de sublime_framework plus tard)

import * as alt from 'alt-client';
import * as native from 'natives';

let f = [];
export function core() { return f;}

f.drawText2D = function (msg, pos, font, scale, colors, useOutline = true, useDropShadow = true, layer = 0, align = 0){
    native.beginTextCommandDisplayText('STRING');
    native.addTextComponentSubstringPlayerName(msg);
    native.setTextFont(font);
    native.setTextScale(1, scale);
    native.setTextWrap(0.0, 1.0);
    native.setTextCentre(true);
    native.setTextColour(colors[0], colors[1], colors[2], colors[3]);
    native.setTextJustification(align);
    if (useOutline) {native.setTextOutline();}
    if (useDropShadow) {native.setTextDropShadow();}
    native.endTextCommandDisplayText(pos[0], pos[1], 1);
}

f.drawText3D = function (msg,pos,font,scale,colors,useOutline = true,useDropShadow = true,layer = 0) {
    native.setDrawOrigin(pos[0], pos[1], pos[2], 0);
    native.beginTextCommandDisplayText('STRING');
    native.addTextComponentSubstringPlayerName(msg);
    native.setTextFont(font);
    native.setTextScale(1, scale);
    native.setTextWrap(0.0, 1.0);
    native.setTextCentre(true);
    native.setTextColour(colors[0], colors[1], colors[2], colors[3]);
    if (useOutline) {native.setTextOutline();}
    if (useDropShadow) {native.setTextDropShadow();}
    native.endTextCommandDisplayText(0, 0, 1);
    native.clearDrawOrigin();
}

alt.setInterval(() => { // juste pour tester le contenue developper au dessus
    f.drawText2D('Mon texte ~r~2D !', [0.9,0.9], 1, 0.7, [0,0,255,255]); //teste fonction drawText2D
    const pc = {...alt.Player.local.pos}; //recuperer les coords via l'id player altv en local
    const h = native.getEntityPhysicsHeading(native.playerPedId()); //recuperer Heading de l'entity playerPedId() via native
    f.drawText3D('Mon text ~r~3D !', [pc.x, pc.y, pc.z + 1], 0, 0.5, [255,255,255,100]) //teste fonction drawText3D
    f.drawText2D('~u~[~g~x~u~] ~w~=~g~ ' + Math.round(pc.x * 100) / 100 + ' ~u~[~b~y~u~] ~w~=~b~ ' + Math.round(pc.y * 100) / 100, [0.1,0.725], 0, 0.4, [255,255,255,255]) //Tools afficher coords en temps réel x,y
    f.drawText2D('~u~[~r~z~u~] ~w~=~r~ ' + Math.round(pc.z * 100) / 100 + ' ~u~[~o~h~u~] ~w~=~o~ ' + Math.round(h * 100) / 100, [0.1,0.75], 0, 0.4, [255,255,255,255]) //Tools afficher coords  +heading en temps réel z,h
}, 0);





// Tout ce qu'il y a en dessous se sont des testes pour ou des notes à dev plus tards...

/*


 blip = AddBlipForCoord(pos[1], pos[2], pos[3])
 SetBlipSprite (blip, data.sprite)
 SetBlipDisplay(blip, data.display)
 SetBlipScale  (blip, data.scale)
 SetBlipColour (blip, data.colour)
 SetBlipAsShortRange(blip, data.range)
 BeginTextCommandSetBlipName('STRING')
 AddTextComponentSubstringPlayerName(data.name)
 EndTextCommandSetBlipName(blip)

 */







// test partagé
alt.log('Client-side has loaded!');
alt.onServer('Server:Log', (msg1, msg2) => {
    alt.log(`Message From Server: ${msg1}`);
    alt.log(`Message From Server: ${msg2}`);
});

//print une table [k,v]
/*
Object.keys(f).forEach(key => {
    console.log(key, f[key]);
});
*/
