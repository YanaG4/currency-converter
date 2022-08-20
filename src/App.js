
import './App.css';
import CurrencyInputFields from './CurrencyInputFields';
import CurrencyOutput from './CurrencyOutput';
import NavigationBar from './NavigationBar';
import Header from './Header'
import React, { useEffect, useState } from 'react'
const BASE_URL = 'https://api.apilayer.com/exchangerates_data/latest'

var myHeaders = new Headers();
myHeaders.append("apikey", process.env.REACT_APP_API_KEY);

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

function App() {
  const [currencyCode, setCurrencyCode] = useState(['EUR', 'USD', 'JPY'])
  const [fromCurrency, setFromCurrency] = useState('EUR')
  const [toCurrency, setToCurrency] = useState('USD')
  const [amount, setAmount] = useState(1.00)
  const [exchangeRate, setExchangeRate] = useState(0.7)



  return (
    <>
      <div className='nav-header-full-width'></div>
      <section className='body-section'>
        <div className='main-container'>

          <NavigationBar />
          <Header />
          <div className='converter-container'>
            <h1>Currency converter</h1>
            <CurrencyInputFields
              currencyCodes={currencyCode}
              from={fromCurrency}
              to={toCurrency}
              amount={amount}
              onChangeCode={e => setFromCurrency(e.target.value)}
              onChangeAmount={e => setAmount(e.target.value)}
            />
            <CurrencyOutput
              currencyCodes={currencyCode}
              to={toCurrency}
            />
          </div>
          <div className='text-container'>
            <div className='text'>
              <strong>Beyond the Wall of Sleep
                <br /><br />By H. P. Lovecraft</strong>
              <br /><br />I have frequently wondered if the majority of mankind ever pause to reflect upon the occasionally titanic significance of dreams, and of the obscure world to which they belong. Whilst the greater number of our nocturnal visions are perhaps no more than faint and fantastic reflections of our waking experiences—Freud to the contrary with his puerile symbolism—there are still a certain remainder whose immundane and ethereal character permits of no ordinary interpretation, and whose vaguely exciting and disquieting effect suggests possible minute glimpses into a sphere of mental existence no less important than physical life, yet separated from that life by an all but impassable barrier. From my experience I cannot doubt but that man, when lost to terrestrial consciousness, is indeed sojourning in another and uncorporeal life of far different nature from the life we know; and of which only the slightest and most indistinct memories linger after waking. From those blurred and fragmentary memories we may infer much, yet prove little. We may guess that in dreams life, matter, and vitality, as the earth knows such things, are not necessarily constant; and that time and space do not exist as our waking selves comprehend them. Sometimes I believe that this less material life is our truer life, and that our vain presence on the terraqueous globe is itself the secondary or merely virtual phenomenon.
              <br /><br />It was from a youthful reverie filled with speculations of this sort that I arose one afternoon in the winter of 1900–1901, when to the state psychopathic institution in which I served as an interne was brought the man whose case has ever since haunted me so unceasingly. His name, as given on the records, was Joe Slater, or Slaader, and his appearance was that of the typical denizen of the Catskill Mountain region; one of those strange, repellent scions of a primitive colonial peasant stock whose isolation for nearly three centuries in the hilly fastnesses of a little-travelled countryside has caused them to sink to a kind of barbaric degeneracy, rather than advance with their more fortunately placed brethren of the thickly settled districts. Among these odd folk, who correspond exactly to the decadent element of “white trash” in the South, law and morals are non-existent; and their general mental status is probably below that of any other section of the native American people.
              <br /><br />Joe Slater, who came to the institution in the vigilant custody of four state policemen, and who was described as a highly dangerous character, certainly presented no evidence of his perilous disposition when first I beheld him. Though well above the middle stature, and of somewhat brawny frame, he was given an absurd appearance of harmless stupidity by the pale, sleepy blueness of his small watery eyes, the scantiness of his neglected and never-shaven growth of yellow beard, and the listless drooping of his heavy nether lip. His age was unknown, since among his kind neither family records nor permanent family ties exist; but from the baldness of his head in front, and from the decayed condition of his teeth, the head surgeon wrote him down as a man of about forty.
              <br /><br />From the medical and court documents we learned all that could be gathered of his case. This man, a vagabond, hunter, and trapper, had always been strange in the eyes of his primitive associates. He had habitually slept at night beyond the ordinary time, and upon waking would often talk of unknown things in a manner so bizarre as to inspire fear even in the hearts of an unimaginative populace. Not that his form of language was at all unusual, for he never spoke save in the debased patois of his environment; but the tone and tenor of his utterances were of such mysterious wildness, that none might listen without apprehension. He himself was generally as terrified and baffled as his auditors, and within an hour after awakening would forget all that he had said, or at least all that had caused him to say what he did; relapsing into a bovine, half-amiable normality like that of the other hill-dwellers.
              <br /><br />As Slater grew older, it appeared, his matutinal aberrations had gradually increased in frequency and violence; till about a month before his arrival at the institution had occurred the shocking tragedy which caused his arrest by the authorities. One day near noon, after a profound sleep begun in a whiskey debauch at about five of the previous afternoon, the man had roused himself most suddenly; with ululations so horrible and unearthly that they brought several neighbours to his cabin—a filthy sty where he dwelt with a family as indescribable as himself. Rushing out into the snow, he had flung his arms aloft and commenced a series of leaps directly upward in the air; the while shouting his determination to reach some ‘big, big cabin with brightness in the roof and walls and floor, and the loud queer music far away’. As two men of moderate size sought to restrain him, he had struggled with maniacal force and fury, screaming of his desire and need to find and kill a certain ‘thing that shines and shakes and laughs’. At length, after temporarily felling one of his detainers with a sudden blow, he had flung himself upon the other in a daemoniac ecstasy of bloodthirstiness, shrieking fiendishly that he would ‘jump high in the air and burn his way through anything that stopped him’. Family and neighbours had now fled in a panic, and when the more courageous of them returned, Slater was gone, leaving behind an unrecognisable pulp-like thing that had been a living man but an hour before. None of the mountaineers had dared to pursue him, and it is likely that they would have welcomed his death from the cold; but when several mornings later they heard his screams from a distant ravine, they realised that he had somehow managed to survive, and that his removal in one way or another would be necessary. Then had followed an armed searching party, whose purpose (whatever it may have been originally) became that of a sheriff’s posse after one of the seldom popular state troopers had by accident observed, then questioned, and finally joined the seekers.
              <br /><br />On the third day Slater was found unconscious in the hollow of a tree, and taken to the nearest gaol; where alienists from Albany examined him as soon as his senses returned. To them he told a simple story. He had, he said, gone to sleep one afternoon about sundown after drinking much liquor. He had awaked to find himself standing bloody-handed in the snow before his cabin, the mangled corpse of his neighbour Peter Slader at his feet. Horrified, he had taken to the woods in a vague effort to escape from the scene of what must have been his crime. Beyond these things he seemed to know nothing, nor could the expert questioning of his interrogators bring out a single additional fact. That night Slater slept quietly, and the next morning he wakened with no singular feature save a certain alteration of expression. Dr. Barnard, who had been watching the patient, thought he noticed in the pale blue eyes a certain gleam of peculiar quality; and in the flaccid lips an all but imperceptible tightening, as if of intelligent determination. But when questioned, Slater relapsed into the habitual vacancy of the mountaineer, and only reiterated what he had said on the preceding day.
              <br /><br />On the third morning occurred the first of the man’s mental attacks. After some show of uneasiness in sleep, he burst forth into a frenzy so powerful that the combined efforts of four men were needed to bind him in a strait-jacket. The alienists listened with keen attention to his words, since their curiosity had been aroused to a high pitch by the suggestive yet mostly conflicting and incoherent stories of his family and neighbours. Slater raved for upward of fifteen minutes, babbling in his backwoods dialect of great edifices of light, oceans of space, strange music, and shadowy mountains and valleys. But most of all did he dwell upon some mysterious blazing entity that shook and laughed and mocked at him. This vast, vague personality seemed to have done him a terrible wrong, and to kill it in triumphant revenge was his paramount desire. In order to reach it, he said, he would soar through abysses of emptiness, burning every obstacle that stood in his way. Thus ran his discourse, until with the greatest suddenness he ceased. The fire of madness died from his eyes, and in dull wonder he looked at his questioners and asked why he was bound. Dr. Barnard unbuckled the leathern harness and did not restore it till night, when he succeeded in persuading Slater to don it of his own volition, for his own good. The man had now admitted that he sometimes talked queerly, though he knew not why.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
