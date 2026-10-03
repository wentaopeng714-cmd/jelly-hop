export const GAMES = [
  {id:'bubble-garage',name:'Bubble Garage',short:'Bubble\nGarage',animal:'SHIBA',tag:'A little soap. A lot of sparkle.',color:'#efaa87',icon:'✦',action:'SPRAY',verb:'HOLD TO WASH',help:'Move around each car. Hold SPRAY to foam and rinse the muddy spots. Refill at the water pad.',goal:'Wash every car',zh:'小柴犬泡泡洗车'},
  {id:'otter-rapids',name:'Otter Rapids',short:'Otter\nRapids',animal:'OTTER',tag:'Little paws. Big river days.',color:'#82c7c9',icon:'≈',action:'PADDLE',verb:'HOLD TO BRAKE',help:'Steer downriver. Hold PADDLE to slow down. Pass between the flags and keep your three hearts.',goal:'Reach the finish',zh:'水獭漂流俱乐部'},
  {id:'panda-putt',name:'Panda Putt',short:'Panda\nPutt',animal:'RED PANDA',tag:'Tiny paws. Perfect putts.',color:'#b0c798',icon:'⚑',action:'PUTT',verb:'HOLD · AIM · RELEASE',help:'Hold PUTT near the ball. Aim with the joystick, then release to hit. Walk to the ball for the next shot.',goal:'Putt into the cup',zh:'小熊猫弹弹高尔夫'},
  {id:'fox-magnet',name:'Fox Magnet',short:'Fox\nMagnet',animal:'FOX',tag:'A pocket full of possibilities.',color:'#c2afd3',icon:'⌁',action:'MAGNET',verb:'HOLD TO ATTRACT',help:'Hold MAGNET to collect matching keys. Release above their matching pads. Fill every pad, then open the chest. Glass keys stay on rails. Avoid aiming at iron balls.',goal:'Unlock the treasure',zh:'小狐狸磁力寻宝'},
  {id:'jelly-hop',name:'Jelly Hop',short:'Jelly\nHop',animal:'HAMSTER',tag:'One soft landing at a time.',color:'#e8a5b5',icon:'↟',action:'JUMP',verb:'HOLD · AIM · RELEASE',help:'Hold JUMP, aim with the joystick, then release. The dotted arc shows your landing. Flag islands save your checkpoint.',goal:'Hop to the last island',zh:'小仓鼠果冻跳跳'}
];
const names=[
 ['First Sparkle','Mint Motors','Pink Parade','Sunny Suds','Around the Back','Moving Day','Foam Festival','Water Wise','Little Bus Stop','Double Conveyor','Corner Clean','Last Drop','Busy Garage','Sparkle Sprint','Showroom Shine'],
 ['First Float','Shell Trail','Lazy Bend','Log Crossing','Two Blue Flags','Whirlpool Waltz','Rock Garden','Small Waterfall','Narrow Waters','Ribbon River','Three Little Falls','Drifting Timber','Twisting Rapids','Shell Sprint','The Grand Float'],
 ['First Putt','Soft Rebound','Through the Gate','Minty Curve','Split Fairway','Uphill Picnic','Candy Spinner','Little Lagoon','Bank Shot','Sloping Green','Wandering Cup','Double Gate','Round the Pond','Perfect Angle','The Club Final'],
 ['First Attraction','Two Little Keys','Color Workshop','Heavy Lifting','Tin Garden','Behind the Glass','Three Switches','Magnetic Windows','Rolling Trouble','Four Corners','Iron Crossing','Battery Break','Clockwork Room','Careful Collector','The Golden Workshop'],
 ['First Bounce','Pink Stepping Stones','Little Zigzag','Longer Leap','Soft Goodbye','Flag Picnic','Moving Jelly','Blueberry Bounce','Sideways Swing','A Little Breeze','Narrow Landings','Spring Surprise','Island Waltz','Cloudy Crossing','The Sweetest Leap']
];
export function levelInfo(mode,i){return {id:i+1,name:names[mode][i],tier:i<5?'PICNIC':i<10?'ADVENTURE':'CHALLENGE'};}
export function describe(mode,i){
 if(mode===0)return `${2+Math.floor(i/5)} cars · ${100+Math.floor(i/5)*40-(i%5)*2}s · ${i>=5?'Moving bays':'Foam + rinse'}`;
 if(mode===1)return `${70+i*6}m river · 3 hearts · ${i>=5?'Whirlpools':'Flag gates'}`;
 if(mode===2)return `Par ${3+Math.floor(i/4)} · ${9+Math.floor(i/4)} shots · ${i>=10?'Moving cup':i>=5?'Slopes + gates':'Soft rebounds'}`;
 if(mode===3)return `${2+Math.floor(i/5)} keys · ${85+i*3}s · ${i>=5?'Glass puzzles':'Matching pads'}`;
 return `${6+Math.floor(i/2)} islands · 3 hearts · ${i>=9?'Wind + moving jelly':i>=4?'Crumbling jelly':'Charge + leap'}`;
}
