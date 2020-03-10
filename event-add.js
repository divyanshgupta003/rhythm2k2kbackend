const Event = require('./models/Event');

module.exports.add = function(req,res,next){

    Event.create({
        name : 'Indian Classical Music (Vocal)',
        number : 1,
        rules : "i)	A College/Institute may enter with one participant only. <br> ii)	Time allotted not less than 8 minutes and not more than 10 minutes. <br>iii)	Maximum number of accompanists is two.<br> iv)	Cinema/ publically released songs are not allowed.v)	Harmonium and electrical Tanpura shall be allowed only for tonal accompaniment and not for playing of tune.<br>vi)	In addition to this one more instrument can be used either by singer or accompanist. <br> vii)	Judgment will be based on the qualities like Swara, taal selection of Raga, Composition and general impression.",
        category : 'team',
        maxPart : 3,
        type : "Music"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    });
    Event.create({
        name : "Indian Classical Music (Instrumental) Percussion ",
        number : 2,
        rules : "i)	A College/Institute can enter only one participant. <br>ii)	Time allotted for Event is not less than 8 minutes and not more than 10 minutes. <br>iii)	Maximum number of accompanist is two. <br>iv)	Participants must bring their own instruments. <br>v)	Harmonium is allowed. <br>vi)	Judgment will be based on the qualities like Tal, Composition and general impression. ",
        category : 'team',
        maxPart : 3,
        type : "Music"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Indian Classical Music(Instrumental) Non-Percussion',
        number : 3,
        rules : "i)	A College/Institute can enter only one participant. <br>ii)	Time allotted for the event is not less than 8 minutes and not more than 10 minutes. <br>iii)	Maximum no. of accompanist is two. <br>iv)	Participants must bring their own instruments. <br>v)	Harmonium is allowed. <br>vi)	Judgment will be based on the qualities like Tal, Composition and general impression. ",
        category : 'team',
        maxPart : 3,
        type : "Music"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Light MusicVocal(Ghazal) ',
        number : 4,
        rules : "i)	A College/Institute can enter only one participant.<br>ii)	Time allotted for Event is not less than 4 minutes and not more than 6 minutes. <br>iii)	Maximum number of accompanist is two. <br>iv)	Only Non-filmi self composition can be presented. <br>v)	Judgment will be based on the qualities like Voice Swara, Taal, Composition and general impression. <br>vi)	The theme should not be cheap or vulgar. ",
        category : 'team',
        maxPart : 3,
        type : "Music"
    } , function(err , event){
        if(err){
            return console.log('error in creating event',err);
        }
    } );
    Event.create({
        name : 'Light Music Vocal: (Geet/ Bhajan)',
        number : 5,
        rules : "i)	A College/Institute can enter only one participant.<br>ii)	Time allotted for Event is not less than 4 minutes and not more than 6 minutes. <br>iii)	Maximum number of accompanist is two. <br> iv)	Only Non-filmi composition can be presented. <br> v)	Judgment will be based on the qualities like Voice Swara, Taal, Composition and general impression. <br>vi)	The theme should not be cheap or vulgar. ",
        category : 'team',
        maxPart : 3,
        type : "Music"
    } , function(err , event){
        if(err){
            return console.log('error in creating event',err);
        }
    } );
    Event.create({
        name : 'Western Vocal Solo',
        number : 6,
        rules : "i)	Each College/Institution can send one participant. <br>ii)	The number of accompanists should not be more than two. <br>iii)	Time allotted is not less than 4 minutes and not more than 6 minutes. <br>iv)	Judgment will be made on qualities like voice, composition, rhythm, co-ordination and general impression etc. ",
        category : 'team',
        maxPart : 3,
        type : "Music"
    }, function(err , event){
        if(err){
            return console.log('err');
        }
    });
    Event.create({
        name : 'Light Music Vocal Folk Solo',
        number : 7,
         rules : "i) A College/Institute can enter only one participant. <br>ii)	Time allotted for Event is not less than 4 minutes and not more than 6 minutes. <br>iii)	Maximum number of accompanist is two. <br>iv)	Only Non-filmi composition can be presented. <br> v)	Judgment will be based on the qualities like Voice Swara, Taal, Composition and general impression. <br>vi)	The theme should not be cheap or vulgar. ",
        category : 'team',
        maxPart : 3,
        type : "Music"
    }, function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Qawwalli',
        number : 8,
        rules : "i)	Each College/Institution can send only one team of not more than seven participant boys girls<bR>ii)	or both. <br>iii)	Time allotted for Event is not less than 8 minutes and not more than 10 minutes. <br>iv)	Maximum number of accompanists is three. <br>v)	Quawwalli from films and recorded shall not be allowed. <br>vi)	The wording of Quawwalli and costumes shouldn’t be vulgar/obscene or objectionable. <br>vii)	Judgment will be based on quality of singing and musical co-ordination. ",
        category : 'team',
        maxPart : 10,
        type : "Music"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Group Song (General):',
        number : 9,
        rules : "i)	A College/Institute can send only one team of not more than six members. <br>ii)	Time allotted is not less than 8 minutes and not more than 10 minutes, excluding the setting time. The setting time for a group will not be more than 4 minutes. <br>iii)	Cinema songs and publically released recorded tunes are not allowed. <br>iv)	Maximum number of accompanists for playing instruments will be three.<br>v)	Judgment will be based mainly on the quality of singing and not on make-up, costumes <br>vi)	and action of the team. ",
        category : 'team',
        maxPart : 9,
        type : "Music"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Group Song (Western):',
        number : 10,
        rules : "i)	A College/Institute can enter only one team comprising six students. <br>ii)	Maximum number of accompanists playing instruments shall be three. <br>iii)	Language of the song shall only be English. <br>iv)	Time allotted for Events is not less than 8 minutes and not more than 10 minutes. <br> v)	Judgment will be based on the quality of singing, composition, rhythm and general impression. ",
        category : 'team',
        maxPart : 9,
        type : "Music"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Group Song (Folk):',
        number : 11,
        rules : "i)	A College/Institute can send only one team of not more than six members. <br>ii)	Time allotted is not less than 8 minutes and not more than 10 minutes, excluding the setting time the setting time. The setting time for a group will not be more than 4 minutes. <br>iii)	Cinema songs and recorded tunes are not allowed. <br>iv)	Maximum number of accompanists for playing instruments will be three. <br>v)	Judgment will be based mainly on the quality of singing and not on make-up, costumes and action of the team. ",
        category : 'team',
        maxPart : 9,
        type : "Music"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Folk Orchestra:',
        number : 12,
        rules : "i)	A College/Institute may enter only one team of not more than 9students. <br>ii)	Time allotted is not less than 8 minutes and not more than 10 minutes which does not include setting time, which shall be not more than 5 minutes. <br>iii)	Three accompanists are allowed who should be indifferent dress from the students participants so that they could be easily identified and they will not lead. They will sit separately from the participants. <br>iv)	Only Haryanvi/Punjabi Folk Instruments i.e. Sarangi, Bean, Bansali(Folk Flute), Algoja, Ektara, Dutara, Banjo, Nagara, Dholak, Gharva, Tumba, Damroo, Chimta, Khartal, Manjire,Dhup, Clarinet,Dhapli Wooden(not Khanjri) etc. are allowed and other instruments which are termed as Haryanvi/Punjabi Folk Instruments. <br>v)	Locomotive action (moving from place to place) is not allowed. ",
        category : 'team',
        maxPart : 12,
        type : "Music"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Duet Music (Classical/Light/Western):',
        number : 13,
        rules : "i)	A college/institute may participate with one team consisting of 2 participants.<br>ii)	Time allotted is not less than 5 minutes and not more than 7 minutes.<br>iii)	Max number of accompanists is 2.<br>iv)	Judgment will be based upon synchronizes, composition, impression, coordination and selection of song.",
        category : 'team',
        maxPart : 4,
        type : "Music"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Rap battle Event :',
        number : 14,
        rules : "i) A college/institute may participate with one team consisting of 1 participant.<br>ii)	 Time allotted is not less than 3 minutes and not more than 5 minutes.<br>iii)	 No Background music or beat.<br>iv)	 No Vulgar words<br>v)	 All Languages (Hindi, English, Punjabi, Haryanvi )<br>vi)	 Max number of accompanists is 1.<br>vii)	 Singing part should be minimum (approx 10%) rapping part maximum ( approx 90% )",
        category : 'team',
        maxPart : 2,
        type : "Music"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Classical Dance Solo',
        number : 15,
        rules : "i) A College/Institution can enter only one participant in one of the styles of Classical Dances i.e. Bharat Natyam, Kathak, Orissi, Manipuri, Kuchhipuri, Kathkalli etc. <br>ii) Time allotted is not less than 12 minutes and not more than 15 minutes. <br>iii) Three accompanists are permissible. <br>iv) Judgment will be based on the qualities like Tal, Technique, rhythm, and abhinaya of express ion, costumes, Footwork and general impression. <br>v) Recorded music is not allowed. ",
        category : 'team',
        maxPart : 4,
        type : "DANCE"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Dance General Solo (Folk/ Western) (Male/Female): ',
        number : 16,
        rules : "i) A College/Institution can enter only one participant. <br>ii) Time allowed for Dance is not less than 4 minutes and not more than 6 minutes. <br>iii) The number of accompanists admissible is three if required. <br>iv) Judgment will be based on formation, music, singing, costume, make-up, coordination and overall impact.<br>v) Recorded music is allowed.",
        category : 'team',
        maxPart : 4,
        type : "DANCE"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Group Dance (Western/General): ',
        number : 17,
        rules : "i) A College/Institute can enter only one team of not more than 18 students & not less than 6 students and shufflers are not allowed. Team may consist of boys, girls or both. <br>ii)	 Duration of the Dance should not less than 8 minutes and not more than 10 minutes. <br>iii)	 All Group Dances, other than the Folk Dance(Haryanvi/Punjabi) shall be treated as Group Dance(Western/General). <br>iv)	Three accompanists are allowed who should be indifferent dress from the student  participants so that they could be easily identified and they will not lead. They will sit separately from the participants.<br>v)	Puppet and Ballet dances are not allowed. Judgment will be on the basis of formation, rhythm, expression, co-ordination, costume, make-up and overall effects. <br>vi)	 No individual will be adjudged as Best Dancer. <br>vii)	 The participating teams will be responsible for removing of their sets/properties immediately after the completion of their performance.<br>viii)	Background projector video is allowed.<br><br>The participants must report to the Stage Secretary at least 30 minutes before the commencement of the Event. ",
        category : 'team',
        maxPart : 21,
        type : "DANCE"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Group Dance (Folk) ',
        number : 18,
        rules : "i) The group dance shall be of Haryanvi, Punjabi, Rajasthani,Gujrati or any other folk form such as Dhap, Ghumer, Khoria, Bangra, Geeda and Phag Dance etc. <br>ii) A College/Institution can enter only one team of not more than 18 students i.e. 6 to18 dancers on stage and shufflers are not allowed. The team may consist of boys, girls or both. Three accompanists are allowed who should be indifferent dress from the students participants so that they could be easily identified and they will not lead. They will sit separately from the participants.<br>iii) Duration of dance should not less than 8 minutes and not more than 10 minutes. <br>v) Judgment will be based on Choreography, music, costumes, make-up, coordination and overall effect. <br>vi) No individual will be adjudged as Best Dancer. <br>vii) The participating teams will be responsible for removal of their sets/properties immediately after the completion of their performance. <br>viii) The participating teams must report to the Stage Secretary at least 30 minutes before the commencement of this event. <br>ix) Performance starts when music starts.",
        category : 'team',
        maxPart : 21,
        type : "DANCE"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Duet Dance(Folk/Western): ',
        number : 19,
        rules : "i) A College/Institution can enter only 2 participants and 3 musicians if required. <br>ii) Time allowed for Dance is not less than 5 minutes and not more than 7 minutes. <br>iii) Judgment will be based on formation, music, singing, costume, make-up, coordination and overall impact.<br> v) Recorded music is allowed.<br>",
        category : 'team',
        maxPart : 5,
        type : "DANCE"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Skit',
        number : 20,
        rules : "i) A College can enter only one team up to 8 participants with 2 shufflers. <br>ii) Maximum time allowed is not less than 8 minutes and not more than 10 minutes. <br>iii) Use of Make-up, drapery and background music is allowed. <br>iv) The skit should be only in one of the accepted Haryanvi/Hindi dialects. <br>v) Two accompanists are allowed. <br>vi) The theme of skit should be based on some social aesthetic of normal aspect of Indian Social life. <br>vii) Vulgarity and obscenity will be disqualification. Discredit will be given if the Indian culture is distorted. <br>viii) Five minutes will be allowed for stage setting. <br>ix) The Event will be judged basically on the qualities like theme, manner of acting, stage craft, total design and general impression. <br>x) Participating team must report to the Incharge of the stage at least 30 minutes before the presentation of skit. <br> xi) It is hereby impressed on all the Directors/Principals to screen the script of the skit to be staged and ensure that nothing should be vulgar, obscene in the skit. . <br>xii) There should be no tragic element in the skit as the Skit means short performance of comic events having totally flavour of comedy / humour / wits. <br>",
        category : 'team',
        maxPart : 12,
        type : "THEATRE"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Spoof',
        number : 21,
        rules : "i)	A college/institute can participate with only one team of 8 to 10 members with 2 shufflers. The team may consist of either of boys or girls or both.<br>ii)	Time allotted is not less than eight minutes and not more than 10 minutes.<br>iii)	Recorded music is allowed.<br>iv)	Fusion of music or a single music may be allowed.<br>v)	It must carry a moral message.<br>vi)	Vulgarity or obscenity must be avoided in lyrics, action, costume, and gestures of the locomotive movements or else it will lead to the disqualification.<br>vii)	It will be judged on basis of theme, acting and presentation.",
        category : 'team',
        maxPart : 12,
        type : "THEATRE"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Nukkad Nattak',
        number : 22,
        rules : "i)	Only one team from a college can participate. <br>ii)	Each team will be consisting of 12-20 members.<br>iii)	Each team will be given 15 to 20 minutes for its performances. The next 2 minutes will be penalized (negative marking). The play will be disqualified if it exceeds 22 minutes.<br>iv)	No technical support such as mic and musical systems will be provided.<br>v)	Participants can use any 4 instruments of their choice and ghungroo is counted as instrument.<br>vi)	Any 5 props and handmade prop is allowed.<br>vii)	Play will be done during day time in an open ground.<br>viii)	Only decent satire is allowed.<br>ix)	Natak has to be judged on the basis of originality, theme, presentation, formation etc.<br> x)	In all cases, the decision of the judges and the organizers will be irrefutable.<br>xi)	All the participant team should report to the event coordinator atleast two hours before the start of the event. ",
        category : 'team',
        maxPart : 20,
        type : "THEATRE"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Mime',
        number : 23,
        rules : "i) Only one entry for College/Institution will be entertained. <br>ii) Maximum number of six participants are allowed. <br>iii) Time allotted for each team is not less than 4 minutes and not more than 5 minutes. <br> iv) Maximum two accompanists are allowed. <br>v) Judgment will be based on qualities like ideas, creativity of presentation, make-up, costume, music and general impression.  ",
        category : 'team',
        maxPart : 8,
        type : "THEATRE"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Bollywood in Haryana',
        number : 24,
        rules : "1. A college/institute can participate with only one team of 8 members with 2 shufflers. The team may consist of either of boys or girls or both. <br>2. A scene of any movie must be presented in Haryanvi dialect.<br>3. Time allotted is not less than eight minutes and no more than 10 minutes.<br>4. Two accompanists are allowed.<br>5. Recorded music is allowed.<br>6. Vulgarity or obscenity must be avoided in lyrics, action, costume, and gestures of the locomotive movements or else it will lead to the disqualification.<br>7. Fusion of scenes is allowed.<br>It will be judged on the basis of theme, presentation, quality of fusion, acting, stage setting etc.",
        category : 'team',
        maxPart : 12,
        type : "THEATRE"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'One Act Play:',
        number : 25,
        rules : "i)	Only one entry shall be accepted from each college/Institute. <br>ii)	The duration of the play should will be 25- 30 minutes.<br>iii)	Time will be counted as soon as the signal is given to start the play or to start the introduction, whichever is earlier. For stage setting and removal of set and properties, up to 10 minutes will be given after taking charge of the stage.<br>iv)	The number of participants should not exceed 9 and the maximum number of accompanists should not exceed 3. The participating team shall bring their own set/stage paraphernalia, makeup materials, etc, light and general paraphernalia such as ordinary furniture which may be provided on advance information.<br>v)	Participants may speak in Hindi, English or any regional language of India. In case the language is regional one, the synopsis of the play with translation in English of Hindi must be submitted the the in charge of the competition on the day of registration.<br>vi)	The participating team must report to the in-charge of the competition at least two hours before the presentation of the play.vii)	Judgment will be based on the qualities of the play like theme, work on acting, stagecraft, design and general impression etc.<br>viii)	Decision of the panel of judges will be final and binding upon all.<br>ix)	Accompanists will either speak from the background or will play upon musical instruments for background music. They shall be required to appear on the stage.<br>x)	Recorded music is allowed.<br>",
        category : 'team',
        maxPart : 12,
        type : "THEATRE"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Mimicry ',
        number : 26,
        rules : "i)	Each participant shall be given 5 minutes item.<br>ii)	Participants may mimic sound of machines and speeches of will know persons etc. including film personalities.<br>iii)	A College/Institution may send one participant. <br>iv)	Marking will be based on Skill imitating, Variety of sound and voices imitate and Presentation.",
        category : 'solo',
        maxPart : 1,
        type : "THEATRE"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Mono Act Play:',
        number : 27,
        rules : "i)	Each participant shall be given 3-5 minutes. <br>ii)	Participants may mimic the sound of machines and speeches of will know persons etc. including film personalities.<br>iii)	A College/Institution may send one participant. <br> iv)	Marking will be based on Skill imitating, Variety of sound and voices imitate and Presentation.",
        category : 'solo',
        maxPart : 1,
        type : "THEATRE"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Poetic Recitation (Hindi/English): ',
        number : 28,
        rules : "i)	A College/Institution may send one participant. <br>ii)	The contents of the poem should not be vulgar or cheap. <br>iii)	Each participant shall be allowed not less than 3 minutes and not more than 4 minutes. ",
        category : 'solo',
        maxPart : 1,
        type : "LITERARY EVENTS"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Debate(Hindi/English): ',
        number : 29,
        rules : "i)	A College/Institution can send one team comprising of 2 speakers boys, girls or both. <br>ii)	The medium of expression will be Hindi/English. One speaker shall speak for the motion and the other against. It must be intimated to the Stage Secretary before the commencement of the competition. <br.iii)	The subject of the Debate will be announced 24 hours before the program and the participants shall speak after drawing lots to decide, who is to speak first, second and so on. <br>iv)	The time allotted to each participant is not less than 4 minutes and not more than 5 minutes, 1.5 minutes extra time for a question session (Anyone can ask the question from the speaker).<br> v)	Only two best speakers one for the motion and others against the motion will be recommended from each zone. <br>vi)	The first speaker will be the leader of the house and he/she also wind up the Debate.",
        category : 'team',
        maxPart : 2,
        type : "LITERARY EVENTS"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Elocution',
        number : 30,
        rules : "i)	A College/ Institution can enter only one speaker. <br>ii)	The time allotted to a speaker is not less than 4 minutes and not more than 6 minutes. <br>iii)	The Cultural Coordinator will send topics well in advance. <br>iv)	Paper reading will not be allowed. ",
        category : 'solo',
        maxPart : 1,
        type : "LITERARY EVENTS"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Quiz',
        number : 31,
        rules : "i)	A College/Institution can send one team comprising of 3 students. <br>ii)	There will be a written preliminary round and teams will be selected for the final.<br>iii)	Finals will be oral with audio-visual questions.<br>iv)	The specific rules regarding evaluation procedure, time to replay a particular answer and the type of round will given before the actual start of the competition.<br>",
        category : 'team',
        maxPart : 3,
        type : "LITERARY EVENTS"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Open Mic session(Hindi/English) :',
        number : 32,
        rules : "i)	A College/Institution may send one participant. <br>ii)	There will be a written preliminary round (Poem/Prose/Speech) and teams will be selected for the final.<br>iii)	The time allotted to each participant is not less than 4 minutes and not more than 5 minutes.<br>iv)	The contents of the Poem/Prose/Speech should not be vulgar or cheap.<br>",
        category : 'solo',
        maxPart : 1,
        type : "LITERARY EVENTS"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : '33.	On the Spot Painting',
        number : 33,
        rules : "i)	Each College/ Institution. can send one participant.<br> ii)	Painting will be ‘On The Spot’. The subject of the painting will be landscape, portrait or composition which will be given by Organizer/Judges. <br>iii)	Size of the painting will be half imperial size drawing paper i.e. 22” x 15”, which will be got signed by the Organizers/Judges before the start of the competition <br>iv)	Painting can be done in oil, water, pastel/poster colors. <br>v)	The competitors shall bring their own material. <br>vi)	Two hours and 30 minutes shall be allowed to each participant. ",
        category : 'solo',
        maxPart : 1,
        type : "FINE ARTS"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Collage',
        number : 34,
        rules : "i)	Each College/Instt. can send one participant. <br>ii)	The topic of the college will be announced 24 hours before the commencement of the event. <br>iii)	Event will be conducted on the Spot on the given topic/subject size 15” x 22”. <br>iv)	Duration will not be more than 2 hours 30 minutes. <br>v)	The Organizers will not supply blank drawing sheet and sticking paste. <br>",
        category : 'solo',
        maxPart : 1,
        type : "FINE ARTS"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Poster Making (Commercial Art):',
        number : 35,
        rules : "i)	Each College/Instt. can send one participant <br>ii)	Event will be conducted ‘On The Spot’ and the participants will be required to do Poster Making on the subject given by the Organizer/Judges. <br>iii)	Participants will bring their own material. The blank sheet 22” x 15” will be signed by the Organizer/Judges before the start of competition. <br>iv)	Duration will not be more than 2 hours 30 minutes. ",
        category : 'solo',
        maxPart : 1,
        type : "FINE ARTS"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Clay Modelling',
        number : 36,
        rules : "i)	Each College/Instt. can send one participant. <br>ii)	The subject will be some portrait or object. <br>iii)	Event will be conducted on the spot. <br>iv)	The competitors shall bring their own material. <br>v)	Duration will not be more than 2 hours and 30 minutes. ",
        category : 'solo',
        maxPart : 1,
        type : "FINE ARTS"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Cartooning',
        number : 37,
        rules : "i)	Each College/Instt. can send one participant. <br> ii)	Event will be conducted on the spot on the given subject/idea.<br> iii)	The Cartoon must be original and drawn with sketch only. <bR>iv)	Cartoon from Magazine, Newspapers and other printed material will be rejected. <br>v)	Duration will not be more than 2 hours 30 minutes.<br>",
        category : 'solo',
        maxPart : 1,
        type : "FINE ARTS"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Rangoli',
        number : 38,
        rules : "i)	Each College/Instt. can send one participant. <br>ii)	Event will be conducted ‘On the Spot’. <br>iii)	Duration will not be more than 2 hours and 30 minutes. <br>iv)	Participants will bring their own material. <br>v)	The participants shall have to prepare a Rangoli within the space provided by the organizer (Max. 3” x 3”)",
        category : 'solo',
        maxPart : 1,
        type : "FINE ARTS"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Installation/ Best out of Waste',
        number : 39,
        rules : "i)	Only one entry per institute/college will be allowed with four participants.<br>ii)	This item pertains to the arrangement of unity in diversity of elements inspired by material arrangements for which particular space will be provided. <br>iii)	Items will be conducted on spot for which the topic will be mentioned. <br>iv)	Duration will not be more than 2 hours 30 minutes.<br>v)	Materials/Products should be brought by participants themselves. ",
        category : 'team',
        maxPart : 4,
        type : "FINE ARTS"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Spot Photography : ',
        number : 40,
        rules : "i)	Each college/institute will be represented by one participant.<br>ii)	The participants has to bring his/her own Digital camera of not more than 12 MegaPixels.<br>iii)	The digital camera should have a memory card that will be formatted by the judges before the commencement of the contest.<br>iv)	The time will be 2:30 hours.<br>v)	The participant has to capture 5 photographs on the theme announced on the spot by the judges.<br>vi)	No mixing, matching or morphing of photographs will be permitted.<br>vii)	Software such as Photoshop, etc, for enhancing images is not permitted.<br>viii)	The organizers will have all rights for the use of these pictures as and when they deem fit.<br>ix)	Digital images are evaluated on the basis of (1) IMPACT (2) COMPOSITION (3) TECHNICAL QUALITY and (4) SUITABILITY for the specific theme.<br>x)	The additional instructions will be announced on the spot.<br>",
        category : 'solo',
        maxPart : 1,
        type : "FINE ARTS"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );
    Event.create({
        name : 'Sanjhi',
        number : 41,
        rules : "i)	Each college/institute will be represented by two participants.<br>ii)	Only organic material is to be used. The participants are to bring their material on their own.<br>iii)	Sanghi will be evaluated on the basis of (1) IMPACT (2) COMPOSITION (3) TECHNICAL QUALITY and (4) SUITABILITY for the specific theme.<br>iv)	The additional instructions will be announced on the spot.<br>",
        category : 'team',
        maxPart : 2,
        type : "FINE ARTS"
    } , function(err , event){
        if(err){
            console.log('error in creating event',err);
            return;
        }
    } );

    


    next();

}