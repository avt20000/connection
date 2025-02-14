
let btn2 = document.getElementById('btn2');
let output3 = document.getElementById('output3');
let output4 = document.getElementById('output4');


let quote3 = [
    "Giv$en th3e cho!ice o*f any1one i#n the w@orld, w%hom w&ould y7ou wa*nt as a d)inner gu!est?",
    "Wou^ld y3ou li#ke to b!e f@amous? I)n wh$a2t wa*y?",
    "Be)fore m@aki9ng a t7eleph#one ca!ll, do y3ou ev4er re&hearse w!hat yo$u a)re go2ing t7o sa^y? W!hy?",
    "Wh#at w@ould co^nstitu9te a 'p!erfect' d%ay f2or y6ou?",
    "Whe3n d!id y*ou l7ast s)ing to y&ourse@lf? To s%omeo#ne e3lse?",
    "I*f yo9u we@re ab7le to li%ve to the a!ge of 9)0 and re&tai^n eithe$r t3he m!ind o&r bo2dy o*f a 3)0-y7ear-old f6or th@e l!ast 6)0 ye@ars o!f yo$ur li)fe, wh3ich w&ould y9ou w@ant?",
    "D&o yo*u ha9ve a s!ecret hu7nch a)bou#t how yo9u w#ill d!ie?",
    "Na$me th!ree th#ings y*ou a7nd I a$ppear t#o ha!ve i%n com&mon.",
    "Fo!r w^hat in yo@ur li2fe d#o yo3u fe@el m!ost g%ratef)ul?",
    "If yo9u cou@ld ch#ange an7yth*ing a!bout th4e w^ay yo*u w@ere r$aise^d, wh@at wo#uld i6t b@e?",
    "T7ake f!our min#utes an)d te3ll m$e yo%ur li3fe s&tory i)n as mu#ch de@tail a5s p!oss#ible.",
    "I5f yo#u co7uld w!ake up t&omorro*w ha^ving g5aine!d an6y o5ne q*ual@ity o^r ab&ility, wh#at w%ould i)t be?",
    "I^f a cr!ystal b3all co@uld te#ll yo*u t!he tru4th a^bout y%ourse@lf, yo#ur li5fe, t7he fu#ture, or a6nythi&ng e3lse, wh@at wo$uld yo&u w^ant to kn6ow?",
    "I7s th!ere so9methi&ng t!hat yo@uve dr3eame%d of do9ing f@or a lo5ng ti5me? Wh*y ha@vent y5ou do7ne i)t?",
    "Wh@at i)s th!e g7reatest ac3compl%ishme*nt o5f yo@ur li5fe?",
    "Wh@at d#o yo@u va5lue m!ost in a f#riendsh4ip?",
    "Wh%at i@s y9our m@ost tr)easur3ed m!emory?",
    "W@hat i4s y#our m%ost t$errib)le m^emory?",
    "If yo7u kn#ew t5hat i5n o^ne ye@ar yo5u w^ould di6e su@ddenl7y, wo@uld y%ou c#hang!e any^thing a$bou#t the wa3y yo@u a&re n!ow li7ving? W7hy?",
    "Wh@at d#oes fr&iendsh4ip me@an t7o y9ou?",
    "Wh@at r5oles d#o l!ove a)nd aff!ection p^lay in y!our l3ife?"

]

let quote4 = [
"L^o$v@e i%s w!h3en y*o5u ca#n ap2pr3e&cia^te so4me!one t@hrough t#he!ir h@a3r$d$est ti2m4es a%nd th3eir b^es&t.",
"I*n we4ddi^ng v*ows th$ey sa4y: 't@o h$ol&d fr#om th^is d*ay f@orw2ard, fo%r be*t$te!r, f#or w*o3rse, fo%r ri6ch@er, f^or p*oo5r^er, in si$ckne@ss a%nd h*ea6lt3h, to lo4ve a4nd to ch%eri6sh, t@ill d#eath us d*o pa^rt,'",
"L$ov!e i6sn^’t a f*eel$ing, i!t’s a d3eci@sio4n.",
"T$he d!ec!is4ion t!o sta6y co^mm*it%ted a@nd so^met!imes th6e un2i^nte!nded ch4as3e of som2e^thing/$s5omeone.",
"L!ov3e fo^r m2y ra^tio4nal si*de, tha5t is i6f I th@ink of i4t as a c2on%ce4pt a5nd wh!at L2ov^e e$ntails, is sh%ari6ng.",
"L4ov@e ca3n enc3ompass m@any re4lat!io6nships, a^nd in m!y opi5nion is a bas4e fo*r mo%st, – yo6u lov!e yo4ur fa^mil4y, y*our fr$ien!ds, yo5ur p@artne2rs, o@r t4hat on$e g!uy y^our fr!ien4ds dis4s on a^ll t@he ti4m2e.",
"I t!hin2k it’6s a b3eaut$iful to!pic fo2r a con!fli4ct.",
"L4ove mak@es m3e gi5ve up t!hing^s I car!e a4bout a^nd val6ue i4n an in$sta4nt fo^r t!he s*ake o^f th2e per@son I l@ov$e.",
"Wh3en y4ou a%re in l4ove, yo2u w!ant yo6ur l2oved o@ne t3o be ha^ppy m$ore tha6n y$ou wa@nt yo3urse!lf to be h@appy.",
"Wh3en yo$ure in lo!ve, yo6u thi4nk abo6ut th3e per^son yo!u l4ove a4ll d^ay lon2g, and if the^y’re str^ugg!ling, if th3ey’re hav$ing a ha4rd ti4me, yo!u w4ant to wo%rk wi6th th!em to s$olve th3eir pro^blem!s a2nd overco^me th*em toge^the2r.",
"To tr2uly lo!ve so$meo6ne re4qui4res hap%piness, responsib^ility, loya2lty, sta3bili5ty, r$espec2t, car6ing, pas4sion, tr@ust, u2ndersta^nd!ing, a3nd cour!age.",
"I t!hink t^he mo4st id3eal rel2ati5onshi2p is on4e where yo!u kn!ow ea4ch o2ther s@o we4ll tha^t yo3u can un3dersta^nd eac4h o5ther v@ery w4ell, wher!e yo^u ca5n tru!st eac2h o@ther no ma6tter h5ow fa3r ap4art y@ou ar6e, where yo!u do3n’t fe2el lo!nely.",
"L4ove mea@ns enth$usi3asti6cally ans5wer@ing my man5y, ma4ny que^stio!ns w!ith a4n unexpe2cted le3vel o!f de!pth.",
"A4t i$ts co^re, lo!ve re4quires t!he bas!ics of c4are.",
"It’4s t!rust th3at my pa2rtner is an acc5urate a^nd h3ealth!y mir$ror f^or s3elf-re2flection a3nd k!nowi4ng I’6m th^e same fo!r th4em.",
"It’6s b!eing br2ave en!ough to gi3ve som4eone th3e parts o4f yo5u tha3t are me^ssy, comp!licat5ed, a6nd not In^sta4gra3m-p!erfect.",
"A hea!lth3y part4nership al$low!s t!hose in i4t to be mo^re of themsel!ves, not le2ss.",
"M4y emot4ions w!heel sa3ys lo!ve i^s a f3eeling o3f light3ne^ss a4nd sec3uri3ty, b!ut I’v3e ne4ver fe^lt tha6t way.",
"L2ove is l!ike s!ink$ing into a warm b5ath at t!he en4d of a^n a^wful d4ay.",
"Hum!ility is6n’t nec4essarily hum3ilia5ting.",
"It’5s kn!owing tha6t alth$ough the4y ho!ld all th4e to@ols to br$eak yo!ur he3art, th!ey’ll bu!ild yo2u up i4nst2ead."
]

btn2.addEventListener('click', function () {
    let randomQuote3 = quote3[Math.floor(Math.random() * quote3.length)];
    output3.innerHTML = "";
    output4.innerHTML = "";
    let randomQuote4 = quote4[Math.floor(Math.random() * quote4.length)];
    typeWriter(randomQuote3, 'output3', 25);
    typeWriter(randomQuote4, 'output4', 25);
})

function typeWriter(text, elementId, speed) {
    let i = 0;
    const targetElement = document.getElementById(elementId);
   
    function type() {
       if (i < text.length) {
         targetElement.innerHTML += text.charAt(i);
         i++;
         setTimeout(type, speed);
       }
     }
   
    type();
   }
 
