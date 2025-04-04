function StartAdventure() {
    let details = 
    'Your parents die in a fire when you are 2 years old. ' +
    'You are sent to an orphanage and at 8 years old ' +
    'you escape the orphanage and dont know where to go ' +
    'you can either STEAL a car '  +
    'or HIJACK a plane'

    let decision = GetUserDecision(details);

    if (decision == "STEAL") {
        STEALTHECAR();
    }
    else if (decision == "HIJACK") {
        HIJACKTHEPLANE();
    }
    else {
        TheBadEnding();
    }
}

function GetUserDecision(adventureDetails) {
    let decision = prompt(adventureDetails);
    return decision.toUpperCase();
}

function EndAdventure(endingDetails) {
    alert(endingDetails)
}

function TheBadEnding() {
    let details =
    'The FBI chase after you and bring you back to the orphanage and put you in solitary confinment!'

    EndAdventure(details);
}

function HIJACKTHEPLANE() {
    let details =
    'You crash the plane and you some how survive the crash but the police locate the plane but you have run away. Do you TURN yourself in, or keep RUNNING';

    let decision = GetUserDecision(details);

    if (decision == "TURN") {
        TurnYourselfIn();
    }
    else if (decision == "RUNNING") {
        KeepRunningFromThePolice();
    }
    else {
        TheBadEnding();
    }
}

function TurnYourselfIn() {
    let details = 
    'You get put in soltiary confinment due to your stupidty ' 

    let decision = GetUserDecision(details);

    if (decision == "RUNNING") {
        KeepRunningFromThePolice();
    }
    else if (decision == "RUN") {
        RunAwayFromTheEyes();
    }
    else {
        TheBadEnding();
    }
}

function KeepRunningFromThePolice() {
    let details =
    'You find your long lost sister who you thought died in the fire under a bridge.'

    let decision = GetUserDecision(details);

    if (decision == "FLORIDA") {
        GOTOFLORIDA();
    }
}
function STEALTHECAR() {
    let details = 
    'You accidentaly steal the car of the wife of the boss of the Russian Mafia. You can either return the car and JOIN the Mafia or GO to the police  '

    let decision = GetUserDecision(details);

    if (decision == "JOIN") {
        Joinmafia();
    }
    else if (decision == "GO") {
        Gotopolice();
    }
    else {
        TheBadEnding();
    }
}

function  GOTOFLORIDA() {
    let details = 
    'You go to Florida and eat some Gator.'
    

    let decision = EndAdventure(details);

    
}

function Joinmafia() {
    let details =
    'you have joined the mafia and become the young apprentice of the boss. He gives you protection from the police.'

    let decision = GetUserDecision(details);
    
    if (decision == "FLORIDA") {
        GOTOFLORIDA();
    }
    
    

}

function Gotopolice() {
    let details =
    'They belive you have relations to the mafia becuase of the car you stole. They say there going to handcuff you. You can RUN for the bridge or GIVE up.'

 let decision = GetUserDecision(details);


    if (decision == "RUN") {
        KeepRunningFromThePolice();
    }
    else if (decision == "GIVE") {
        TurnYourselfIn();
    }
    else{
        EndAdventure(details);
    }

    
}


function Cabin() {
    let details =
    'Your path has brought you to a cabin in the north of the forest.\n' +
    'You approach it cautiously and notice the dilapidated front door. There is an oversized, brass padlock that is preventing the door from ' +
    'opening. You remember the brass key that the gnome gave you. It is a perfect fit. You unlock the door and enter the cabin. It is largely ' +
    'empty except for a circle of rocks on the floor with a single candle in the middle. You do have a box of matches. Should you LIGHT the candle ' +
    'or turn around and EXIT the cabin?'

    let decision = GetUserDecision(details);

    if (decision == "LIGHT") {
        LightTheCreepyCandle();
    }
    else if (decision == "EXIT") {
        ExitTheCabin();
    }
    else {
        TheBadEnding();
    }
}

function ExitTheCabin() {
    let details =
    'This is a little too creepy for you.\n' +
    'You turn around and leave the cabin. The moment you step out of the door you are greeted by a swarm of Night Goblins. Their towering figures ' +
    'loom over you as they lick their lips hungrily. Maybe if you stand still they won\'t be able to see you like the T-Rex from Jurrassic Park? ' +
    'This logic is faulty because the Night Goblins immediately scoop you up and devour you before you can even scream.'
    EndAdventure(details);
}

function LightTheCreepyCandle() {
    let details = 
    'You are unsure about this, but decide to light the candle.\n' +
    'Once lit, the floor inside the rock circle disappears and is replaced by a bright purple swirling liquid. Your science fiction reading tells you ' +
    'that this is a portal. Do you JUMP into the portal, or EXIT the cabin?'

    let decision = GetUserDecision(details);

    if (decision == "JUMP") {
        JumpIntoThePortal();
    }
    else if (decision == "EXIT") {
        ExitTheCabin();
    }
    else {
        TheBadEnding();
    }
}

function JumpIntoThePortal() {
    let details = 
    'This adventure can not get any weirder. You jump into the portal.\n' +
    'Your body feels tingly. You lose sense of time. Every color of the rainbow flashes in front you separately, but also at the same time. This is weird. ' +
    'You can tell you are falling, but falling towards the ceiling. Where will you end up?'

    EndAdventure(details);

    let postCreditScene = 
    'Your body jolts you awake and you sit up in bed. The alarm on your phone is blaring, alerting you that it is time for you to get ready for school. You toss ' +
    'your head back on your pillow and breath a sigh of relief that you are safe from the Night Goblins.'
    EndAdventure(postCreditScene);
}

function Pond() {
    let details = 
    'Your path has brought you to a pond in the south of the forest.\n' +
    'You are relieved by the beauty of the scene before you. The water is clear with lily pads adorned with beautiful flowers. You approach the pond and bend ' +
    'down to take a sip from the water. Suddenly, at the other end of the pond, you notice a creature in the water. The creature\'s eyes just peering above the ' +
    'the surface. The being watches you curiously. It does not seem hostile. Do you WAVE at the being or slowly BACK away from the pond?'

    let decision = GetUserDecision(details);

    if (decision == "WAVE") {
        WaveToThePondFairy();
    }
    else if (decision == "BACK") {
        BackAwayFromThePondFairy();
    }
    else {
        TheBadEnding();
    }
}

function BackAwayFromThePondFairy() {
    let details =
    'You do not want to mess with any unknown, and possibly mythical creatures.\n' +
    'Unfortunately, the Forest of the Night Goblins cares not for what you want because as you are backing away from the pond, you bump right into a Night Goblin! ' +
    'The towering monster gobbles you up before you can even scream.'

    EndAdventure(details);
}

function WaveToThePondFairy() {
    let details =
    'The being does not seem dangerous. You offer a polite wave to the creature.\n' +
    'The being emerges from the water and flies above the surface with a magnificent set of wings. It is a Pond Fairy!\n' +
    '"Hello traveler," the pond fairy sings angelically, "What is it you seek?"\n' +
    '"I am trying to escape this forest before the Night Goblins gobble me up!" you plead.\n' + 
    '"If you can answer my riddle, I will show you the way out" the fairy challenges. Do you ACCEPT or REJECT the challenge?'

    let decision = GetUserDecision(details);

    if (decision == "ACCEPT") {
        AcceptTheFairyChallenge();
    }
    else if (decision == "REJECT") {
        BackAwayFromThePondFairy();
    }
    else {
        TheBadEnding();
    }
}

function AcceptTheFairyChallenge() {
    let details = 
    'You begrudgingly accept the challenge.\n\n' +
    'The fairy gives you the following riddle: "I am always hungry, I must always be fed. The finger I touch, will soon turn red. What am I?"\n\n' +
    'You hear a roar behind you, the Night Goblins have found you! You must answer quickly if you are to escape their clutches! What is the answer!?'

    let answer = GetUserDecision(details);

    if (answer == "FIRE") {
        WinTheChallenge();
    }
    else {
        FailTheChallenge();
    }
}

function WinTheChallenge() {
    let details = 
    '"Fire!" you yell, "The answer must be fire!"\n' +
    'The fairy smiles at you and waves their hands above their head. A magical chorus erupts from the forest and a blinding light fills the sky. ' +
    'Is the adventure over? You close your eyes to shield from the light and when you open them you realize you are sitting at your desk. You stare ' +
    'down at your test. Long division? Ugh, you would rather be devoured by the Night Goblins...'

    EndAdventure(details);
}


function FailTheChallenge() {
    let details =
    'The fairy is visibly disappointed. You were so confident in your guess! The fairy shakes their head and sinks back into the pond. You desperately splash ' +
    'at the water in an attempt to make them return. What was the answer? You may never know but it is too late now. The Night Goblins emerge from the forest. Each ' +
    'monster is carrying a club that they have lit on fire. As you glance at their clubs you realize the answer! You begin to yell out the answer but the Night Goblins ' +
    'snatch you up before you can get the word out.'

    EndAdventure(details);
}







