
let btn3 = document.getElementById('btn3');
let output5 = document.getElementById('output5');
let output6 = document.getElementById('output6');

let quote5 = [
    "G!v$e%n t@h3e ch9o*i^c&e o*f an#y1o2ne i@n t%h$e w&orl^d, wh#o~m w*o!u8l9d y6o2u wa$n&t a#s a d)i)n@ne%r g*u?e$s~t?",
    "W!o@u^l&d y3o*u l*i^k#e t@o b~e f@a8m&o#u$s? I~n w8h$a^t w#a4y?",
    "Be%f$or*e m@a5k!i9n^g a t7e*l@e&p#h~o$n2e c!a(l*l, d~o y7o3u e$v@e^r r@e$h#e@a3r%se w^h!a*t y#o@u a&re g@o2i*n@g t7o s!a^y? W@h4y?",
    "W!h#a^t w#o$u9l%d c&o^n*s!t#i~tu9t!e a 'p!e3r%f$ec^t' d2a!y f^or y6o~u?",
    "W^h!e3n d!i^d y*o%u l^a$st s)in&g t^o y&o~u$r3s#el!f? T#o s%o!m@e#o9n&e e3l^se?",
    "I*f y!o9u w@e7r*e a#b7l^e t$o l!i%v~e t2o t#h!e a!g8e o!f 9)0 a#n~d r&e@t~a*i^n e8i!t&h#er t3h!e m!i@n^d o@r b$o2d^y o*f a 3)0-y7e~a^r-o!l^d f6o~r t@h!e l@a$st 6)0 y@e*a%r&s o!f y#o$u&r l@i)f^e, w#h3i~ch w&ou9l%d y9o@u w~a#n^t?",
    "D&o y!o*u h@a9v^e a s!e!c$r%e*t h#u7n^c*h a)bo#u$t h!o9w y~o9u w#i@l*l d!i^e?",
    "N^a$me t!h3r%e$e t*h#i~n&g#s y*o$u a7n^d I a$p^pe@a~r t#o h!a!v*e i%n c!o&m^mo!n.",
    "F!o~r w^h!a$t i!n y@o~u$r l@i2f*e d#o y3o@u f%e~el m!o^s*t g%r@a*t~e$f)ul?",
    "I^f y!o9u c*o~u@l!d c#h^a$n~g!e a^n&y*t%h~i&n*g a!bo9u$t t!h4e w~a!y y~o*u w@e*r~e r$a~i!s@e^d, w#h@a~t w#o!u^l$d i6t b@e?",
    "T7a~k!e f!o@u~r m!i%n#u%t*e$s a)n~d t*e3l~l m$e y#o%u*r l!i3f@e s&t!o~r%y i!n a^s m%u#c*h d^e@t^a!i~l a5s p!o!s@s#i~b$l^e.",
    "I5f y!o#u c*o7u$l!d w!a*k~e u^p t&o~m%o*r!r$ow h~a^v!i$n*g g5a@i!n^e$d a~n6y o5n^e q*u@a~l!i*t%y o!r a^b&il!i$t^y, w#h^a!t w%o@u~l^d i)t b~e?",
    "I^f a c^r!y@st~a*l b3a$l!l c*o@u$l~d t#e#l*l y!o*u t^h~e t^r@u4t*h a!b$o~u*t y%o!u#r3s#e~l%f, y~o@u$r l!i5f#e, t7h^e f!u#t@u~r%e, o@r a6n^y*t*h~i%n!g e3l@s!e, w#h@a$t w$o$u~l^d y&o!u w^a!n~t t~o k$n6o@w?",
    "I7s t#h!e@r~e s!o9m@e~t*h!i^n*g t!h~a$t y#o@u*v%e d*r3e$a@m^e%d o@f d!o9i~n!g f@o*r a l!o5n%g t*i5m!e? W^h*y h@a!v~e*n’t y5o@u d*o7n!e i)t?",
    "W#h@a~t i~s t*h!e g7r~e$a*t^e%s*t a#c3c!o^m*p*l%i$s~h*m*e^n~t o5f y@o~u$r l~i5f#e?",
    "W#h@a~t d#o y!o@u v~a5l!u*e m!o^s$t i*n a f#r!i~e$n*d@sh4i*p?",
    "W^h!a$t i@s y9o!u$r m@o%s*t t*r)e@$a~s*ur3e!d m!e^m~o$r!y?",
    "W@h#a^t i4s y#o$u~r m%o$s*t t^e@r*r!i%b)l^e m!e^m~o!r@y?",
    "I*f y~o7u k#n^e@w t5h~a$t i5n o^n!e y~e@a$r y#o5u w^o@u$l~d d!i6e s@u@d~d!e*n*l7y, w#o@u~l^d y%o@u c*h!a$n~g^e a*n!y^t*h!i$n~g a$o@b*u!#t t*h#e w!a3y y@o~u a&re n!o~w l!i7v~i*n!g? W7h!y?",
    "W#h@a~t d#o!e%s f*r&i!e$n~d@sh4i$p m!e@a~n t7o y9o*u?",
    "W#h@a^t r5o@l#e~s d#o l!o$v~e a)n~d a*f!f@e$c!t^i$o*n p^l!a*y i~n y!o#u$r l3i~f!e?"
]

let quote6 = [
    "L^x$v!e w%h q*o c#a2n ap^pr3e&c! s*o4m!e@ne thro%ugh3 t#h*! i$r h3@a3r$d t a%n*d th^3eir b^3.",
    "I*n w3dd!n7g v$*o@ws th^e@y: 't@x h$ol%d fr#o7m t*h^ d!ay f@o9rw2ard, fo%r be*t$t@e!r, f#or w*o!3r, fo%r r!6ch, f^ p*o4o5, s^i$ckne@ a%nd h*ea6lth3, to4 a4nd c*he%r!i6, t@ill d!e#ath us p*a^rt,'",
    "L$x$v!e i6sn^ a f3*eel$ing, d3eci@sio4n.",
    "T$h3e d!ec*is4ion t!o sta6 co^m!m$it%ted s@o^m3e^t!i2m4ez th6e un2i^n@t!e$nded ch4a!s3e o*f s!o2m3e^t*h!in4g/s5o!m3e.",
    "f^o4r m2 r^a2ti@o4nal s^i*de L!ov3e, th* i!s i6f I th!ink o4f i4t a7s a co2n%ce4pt wh!at L2ov^e e$nt3ailz, i4s sh%ari6ng.",
    "c!a3n en3c!om@pa5s$ m2a3ny r!el4a6t!i!o2n@shipz, a^nd i m!y opi5ni!o$n i4s L4ov@e a b@a2s4e fo*r mo^ – y6u l!ov!e y*o4u2r fa!m4i4ly, y* fr$!iendz, yo5ur p@a3rtn@e!rs, t4h*at o!n$e g!uy y^o! fr!iendz d!iss a^ll t@h*e t!im2e.",
    "I t!hi*n2k i^t’z a b3e4aut$!fu1 t$o.",
    "L4ov3 m!a$ke2z m!e g*i$ve up t!h@ing!z I ca2r!e a4bout a$nd va!lu6e i4n an in$s4 fo^r t!h3 s!ak@e o^f th2e p$e@rson I l@ov!e.",
    "a2r!e i^n l4ov3, y* w!a2nt Wh3e! y$ y*o6ur l$ov!ed o3ne t*o b3 h@a^ppy mo3r$e th3a6n y$ w!a2nt y3our3s!elf t@ b^ h@a2ppy.",
    "in l!ov3, y6u t!hi4n^k a!bo6 th!e p^er2son y*!o6u l!ov3 a4ll d^a7y l!on2g, a$nd i2f th3e7y’$ h@a2v!in4g a h@ar3d t!i4m3, yo!u w4a!nt wo2rk wi6th t!h@em t0 $olv3 Wh3e4 y!o$u3re th!eir p^ro@blemz a2nd o!ve^rco^ th*em t@og!et^he2r.",
    "s$o2me r!e4qu!i4r3z h!a2p%pi!ne$$, re3spo2nsi!bil^i3ty, lo$yal2ty, sta3b!ili5ty, r!es@pec2t, c!a6ri3ng, pas!sion, tr@u$t, u2nd3er!sta^nd!ing, a3nd co^ur!age. T0 tru2ly l!ov!e",
    "mo4st id3e@a7l re2l3at!ion@shi2p i4s o3n4e wh3er! y*! kn! e@a4ch o2the2r s!o w!el3l t*h@a2 y*!o3u c!a5n u!nd3ersta^nd e@a!ch o5th3r v@e3ry w4ell, w*h@er3e y*!o^u c@a2n t$r3u!st e!ach o2the2r n0 m!a2tte3r h!o5w fa3r ap4art y*!o6 a@r6e, wh!er3e y*!o2u d3o7n’t f!eel lo^n3el!y.",
    "enthus3i!astic!all7y a!nsw3er@in3g my m!a^, ma!n5y qu3esti!o4nz w!ith a4n un3exp2ect!ed l!evel o!f de^p!th. L4ov!e m!e@a^",
    "co!re, l!ov3 r!e4qu!i2re3z t!he b@a!si!c$ of c*!.",
    "acc@ura2t3e a$nd h!eal3th!y mirr$or f^or s@el2f-r3eflect!i2on a^nd kno!wi4ng I’6m t^he sa^ fo!r t4h@em. I!t’z t3ru$st t*h@at my p@art!n2er i3z a7n",
    "o4f y*!o5u tha3t a3r!e me^s$y, co@mp!lica5ted, a6nd n!ot I!nst@ag4ram-p!. I!t’z b!ein^g b!r3ave enou2 to g!iv s*o!m2eone t!h3e p!arts",
    "mo^r3e o3f them3sel!v3s, n0t le2$$. A h!ea2lt3hy p!art!ne^r$h!i3p a$llo3 th! i3t to be",
    "i^z a f3eel!ing o3f l!ig3ht^ness a4nd s!ecu3ri3ty, b!ut I’v3e n!ev2 f!elt t^h@at wa^y. M!y em2o3ti!o4nz wh!eel s@ay$ l!ov3",
    "a w@a2rm b!ath a@t t*h!e en4d o3f a!n a^wfu3l d4ay. L2ov3 i3s l!i7ke s!ink2i^ng int@o",
    "n3c3$$a2ri3ly hum!i!l!i^ati!ng. Hu!mi3lity i6sn’t",
    "tha^ alth$oug7h th3ey h!o5ld all t!h4e t0!ols t0 br!e@ak y*!o2ur he!art, th!ey’l3l b!uild y*!o2u u@p in^st3ead. I!t’z kno^wi2ng"
]



btn3.addEventListener('click', function () {
    let randomQuote5 = quote5[Math.floor(Math.random() * quote5.length)];
    output5.innerHTML = "";
    output6.innerHTML = "";
    let randomQuote6 = quote6[Math.floor(Math.random() * quote6.length)];
    typeWriter(randomQuote5, 'output5', 13);
    typeWriter(randomQuote6, 'output6', 13);
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
 