import Link from 'next/link'

type PostContent = React.ReactNode

const posts: Record<string, PostContent> = {
  'nasu-kogen-glamping-guide': (
    <div className="space-y-6 text-stone-600 leading-relaxed">
      <h2 className="font-display text-3xl font-light text-stone-900">Why Nasu Kogen for Glamping?</h2>
      <p>
        Nasu Kogen — the highlands of Tochigi Prefecture, about 150 kilometers north of Tokyo — has been a retreat destination for over a thousand years. The Imperial Family has a summer villa here. The hot springs have been in use since the Nara period. The forests of Japanese cedar and beech stretch uninterrupted across volcanic ridges that catch the first snowfall of winter and the last color of autumn.
      </p>
      <p>
        In recent years, Nasu Kogen has become one of Japan's premier <strong className="text-stone-800">glamping</strong> destinations. High-end dome cabins, geodesic structures, and forest lodges have opened across the highlands — offering city-dwellers a way to access the natural environment without sacrificing comfort. For international visitors, this is particularly appealing: no tent-pitching skills required, and no need to navigate Japanese-language campsite rules alone.
      </p>
      <h2 className="font-display text-3xl font-light text-stone-900">Glamping B&V Nasu Kogen</h2>
      <p>
        Our featured partner,{' '}
        <Link href="/packages/nasu-highland-glamping" className="text-forest-600 underline underline-offset-2 hover:text-forest-700">
          Glamping B&V Nasu Kogen
        </Link>
        , is the first resort of its kind in the highlands: every single dome cabin comes with its own private natural hot spring onsen and Finnish barrel sauna. This is not a shared facility — it's your own outdoor bath, fed directly by mineral spring water, available whenever you want.
      </p>
      <ul className="space-y-3 my-6">
        {[
          'Private natural onsen in every cabin — use it at midnight or sunrise',
          'Finnish barrel sauna with cold plunge tub — the Japanese totonoi ritual in a highland forest',
          'Private campfire in every cabin — roast, reflect, and stargaze',
          'Glamping BBQ with locally sourced Tochigi ingredients',
          'Free bar at the communal B&V Terrace',
          '5 dome types for groups of 1–8, including a dog-friendly option',
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1 h-5 w-5 rounded-full bg-forest-100 text-forest-600 text-xs flex items-center justify-center font-bold flex-shrink-0">✓</span>
            {item}
          </li>
        ))}
      </ul>
      <h2 className="font-display text-3xl font-light text-stone-900">Getting to Nasu Kogen from Tokyo</h2>
      <p>
        Nasu Kogen is approximately 2–3 hours from Tokyo depending on your starting point and transport method.
      </p>
      <p>
        <strong className="text-stone-800">By train:</strong> Take the Tohoku Shinkansen (Yamabiko) from Tokyo Station to Nasu-Shiobara Station (~75 minutes, ¥5,000). From there, a taxi takes about 30 minutes (¥3,000–4,000) to the glamping sites in the highlands. From Narita, add about 60 minutes on the Narita Express (N'EX) to Tokyo Station first.
      </p>
      <p>
        <strong className="text-stone-800">By rental car:</strong> Take the Tohoku Expressway north toward Nasu IC. From central Tokyo it's about 2.5 hours. From Narita, budget 3 hours. The drive itself is pleasant — the expressway transitions into highland scenery as you approach Tochigi.
      </p>
      <h2 className="font-display text-3xl font-light text-stone-900">What to Do in Nasu Kogen</h2>
      <p>Beyond your cabin's private onsen and sauna, the Nasu Kogen area offers:</p>
      <ul className="list-disc list-inside space-y-2 ml-4 my-4">
        <li><strong>Nasu Highland Park</strong> — amusement and nature park with mountain views</li>
        <li><strong>Nasu Safari Park</strong> — a rare open safari experience in Japan</li>
        <li><strong>Natadera Temple</strong> — a carved-cliff temple with ancient cedar groves</li>
        <li><strong>Yumotonashi Onsen</strong> — one of Japan's longest-running hot spring towns</li>
        <li><strong>Sessho-seki (Killing Stone)</strong> — a famous volcanic landmark from Japanese legend</li>
        <li>Forest trails through the Nasu mountain range for shinrin-yoku (forest bathing)</li>
      </ul>
      <p>
        Most of these attractions require minimal language skills to visit. Your English guide pack from Digital Detox Japan includes notes on the nearest and most accessible options.
      </p>
      <h2 className="font-display text-3xl font-light text-stone-900">The Best Time to Visit Nasu Kogen for Glamping</h2>
      <p>
        Nasu Kogen glamping is excellent year-round, but each season brings a different character:
      </p>
      <ul className="space-y-3 my-4">
        {[
          { season: 'Spring (March–May)', desc: 'Cherry blossoms, fresh green forest, cooler temperatures. Peak season — book early.' },
          { season: 'Summer (June–August)', desc: 'Lush greenery, warm evenings for campfires, good stargazing. Humidity lower than Tokyo.' },
          { season: 'Autumn (September–November)', desc: 'Foliage season — reds and golds across the highland. Popular with Japanese tourists.' },
          { season: 'Winter (December–February)', desc: 'Snow-dusted forest, private onsen in cold air — arguably the most atmospheric season.' },
        ].map((item) => (
          <li key={item.season} className="rounded-lg bg-stone-50 border border-stone-200 p-4">
            <strong className="text-stone-800 block mb-1">{item.season}</strong>
            <span className="text-stone-600">{item.desc}</span>
          </li>
        ))}
      </ul>
      <h2 className="font-display text-3xl font-light text-stone-900">Book Through Digital Detox Japan</h2>
      <p>
        Booking a glamping site in Japan as an English speaker typically requires navigating Japanese-language portals, making phone inquiries in Japanese, and understanding rules that aren't translated. We handle all of that for you.
      </p>
      <p>
        Our{' '}
        <Link href="/packages/nasu-highland-glamping" className="text-forest-600 underline underline-offset-2">
          Nasu Highland Glamping package
        </Link>{' '}
        includes:
      </p>
      <ul className="list-disc list-inside space-y-2 ml-4 my-4">
        <li>Booking confirmed in your name</li>
        <li>Full English guide PDF — check-in, rules, local tips</li>
        <li>Step-by-step directions from the nearest station or highway exit</li>
        <li>Onsen area map for the surrounding region</li>
        <li>All Japanese communication with the property handled by us</li>
        <li>$20 coordination fee — no payment required upfront</li>
      </ul>
      <div className="my-8 rounded-2xl bg-forest-50 border border-forest-200 p-8 text-center">
        <p className="font-display text-xl font-light text-forest-800 mb-4">
          Ready to book your Nasu Kogen glamping experience?
        </p>
        <Link href="/contact" className="btn-primary">Request your dates</Link>
        <p className="mt-3 text-sm text-stone-400">No payment upfront. Reply within 48 hours (JST).</p>
      </div>
    </div>
  ),

  'shinrin-yoku-guide-for-beginners': (
    <div className="space-y-6 text-stone-600 leading-relaxed">
      <h2 className="font-display text-3xl font-light text-stone-900">What Is Shinrin-Yoku?</h2>
      <p>
        <strong className="text-stone-800">Shinrin-yoku</strong> (森林浴) translates literally as "forest bathing" — not bathing in water, but bathing in the forest atmosphere. It was formally introduced by the Japanese Ministry of Agriculture, Forestry and Fisheries in 1982 as a recognized form of preventive healthcare. Since then, over thirty years of scientific research has documented its measurable effects on human physiology.
      </p>
      <p>
        Unlike hiking, which is goal-oriented (reaching a summit, covering distance), shinrin-yoku is presence-oriented. You move slowly. You pause. You use all five senses. You let the forest absorb you rather than trying to consume it.
      </p>
      <h2 className="font-display text-3xl font-light text-stone-900">The Science Behind Forest Bathing</h2>
      <p>
        The health benefits of shinrin-yoku are attributed to several mechanisms:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        {[
          { metric: 'Phytoncides', desc: 'Organic compounds released by trees — particularly Japanese cedar (hinoki) — that stimulate immune function when inhaled.' },
          { metric: 'Cortisol reduction', desc: 'Studies show 12–13% reduction in the stress hormone cortisol after 2 hours in a forest environment.' },
          { metric: 'NK cell increase', desc: 'Natural Killer immune cells increase by 50%+ after 3 days of forest exposure — effects lasting up to 30 days.' },
          { metric: 'Blood pressure', desc: 'Forest walking reduces blood pressure by approximately 7% compared to urban walking.' },
        ].map((item) => (
          <div key={item.metric} className="rounded-xl bg-forest-50 border border-forest-100 p-5">
            <p className="font-semibold text-forest-700 mb-2">{item.metric}</p>
            <p className="text-sm text-stone-600">{item.desc}</p>
          </div>
        ))}
      </div>
      <h2 className="font-display text-3xl font-light text-stone-900">How to Practice Shinrin-Yoku: A Step-by-Step Guide</h2>
      <p>You don't need a guide or a certified trail. Here's how to practice forest bathing on your own:</p>
      <ol className="space-y-5 my-4">
        {[
          { n: '1', title: 'Leave your phone on silent — or behind', desc: "Notifications break the state immediately. If you need your phone for safety, put it in your bag. The goal is to arrive at the forest's frequency, not maintain your own." },
          { n: '2', title: 'Walk slowly — slower than you think', desc: 'Shinrin-yoku is not hiking. Move at a pace where you could hold a quiet conversation. Stop whenever something catches your eye.' },
          { n: '3', title: 'Use all five senses', desc: 'What do you hear? Birdsong, wind through leaves, your own footsteps. What do you smell? Damp earth, pine resin, rain on stone. Touch tree bark. Notice temperature differences in shade versus sun.' },
          { n: '4', title: 'Sit. Often.', desc: 'Find a rock, a root, or a fallen log. Sit for at least 5 minutes and let the forest recalibrate around you. Most animals return to normal behavior within 3–5 minutes of a human becoming still.' },
          { n: '5', title: 'Follow curiosity, not a map', desc: "There is no destination. If a sound draws you left, go left. If the moss on a stone interests you, stop. Intentional wandering is the practice." },
          { n: '6', title: 'Aim for at least 2 hours', desc: 'Research suggests the measurable physiological benefits — particularly cortisol reduction — begin accumulating after about 90–120 minutes of continuous forest exposure.' },
        ].map((item) => (
          <li key={item.n} className="flex gap-5">
            <span className="font-display text-3xl text-forest-200 leading-none flex-shrink-0">{item.n}.</span>
            <div>
              <strong className="text-stone-800 block mb-1">{item.title}</strong>
              <p className="text-stone-600">{item.desc}</p>
            </div>
          </li>
        ))}
      </ol>
      <h2 className="font-display text-3xl font-light text-stone-900">Shinrin-Yoku in Japan: Where to Go</h2>
      <p>
        Japan designates official <strong className="text-stone-800">Forest Therapy Roads</strong> — trails and areas certified to have measurable therapeutic effects based on scientific research. There are currently over 60 certified sites, concentrated in:
      </p>
      <ul className="list-disc list-inside space-y-2 ml-4 my-4">
        <li><strong>Nagano Prefecture</strong> — particularly around Ina Valley and Agematsu</li>
        <li><strong>Nasu, Tochigi</strong> — accessible from Tokyo, highland cedar and beech forests</li>
        <li><strong>Yakushima Island</strong> — ancient cedar forests, UNESCO World Heritage Site</li>
        <li><strong>Okutama, Tokyo region</strong> — surprisingly accessible from central Tokyo</li>
      </ul>
      <p>
        Our{' '}
        <Link href="/packages/nasu-highland-glamping" className="text-forest-600 underline underline-offset-2">
          Nasu Highland Glamping package
        </Link>{' '}
        is based in the Nasu Kogen highlands — where the forests are ancient, the air is clean, and the elevation keeps summer heat at bay. Your English guide includes a shinrin-yoku primer with specific practices for your time in the forest.
      </p>
      <h2 className="font-display text-3xl font-light text-stone-900">Combining Shinrin-Yoku with Digital Detox</h2>
      <p>
        The reason forest bathing and digital detox work so well together is simple: forest bathing requires presence, and digital devices destroy presence. The practice of shinrin-yoku is essentially incompatible with scrolling.
      </p>
      <p>
        Most of our guests tell us the first hour in the forest is the hardest — not because the forest is uncomfortable, but because the habit of reaching for a phone is so ingrained. By the second hour, that habit fades. By the third, guests describe a quality of attention they haven't felt in years.
      </p>
      <div className="my-8 rounded-2xl bg-forest-50 border border-forest-200 p-8 text-center">
        <p className="font-display text-xl font-light text-forest-800 mb-4">Experience shinrin-yoku in Nasu Kogen</p>
        <p className="text-stone-600 mb-6">Our packages put you in a Japanese highland forest overnight. Forest guide included.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="btn-primary">Request your dates</Link>
          <Link href="/forest-therapy-japan" className="btn-ghost">Forest therapy guide</Link>
        </div>
      </div>
    </div>
  ),

  'digital-detox-tips-before-you-go': (
    <div className="space-y-6 text-stone-600 leading-relaxed">
      <h2 className="font-display text-3xl font-light text-stone-900">Why Preparation Matters</h2>
      <p>
        Walking into a digital detox without preparation is like running a marathon without training — you can do it, but you'll spend the first half struggling with withdrawal rather than enjoying the experience. A few days of intentional preparation dramatically improves the quality of your time offline.
      </p>
      <p>
        The following 12 tips are drawn from guest feedback, neuroscience research on screen habits, and our own experience preparing travelers for digital detox experiences in Japan.
      </p>
      <h2 className="font-display text-3xl font-light text-stone-900">12 Digital Detox Tips for Before You Go</h2>
      <ol className="space-y-6 my-4">
        {[
          { n: '01', title: 'Start reducing screen time 3–5 days before', desc: 'Abrupt removal is harder than gradual reduction. Use your phone\'s Screen Time or Digital Wellbeing settings to set limits on social media and news apps a few days before your trip. Your nervous system will thank you.' },
          { n: '02', title: 'Set an out-of-office reply — and mean it', desc: 'The anxiety about being unreachable is often worse than actually being unreachable. Set an auto-response that gives a return date and an emergency contact. Then trust it.' },
          { n: '03', title: 'Tell people you\'ll be offline', desc: 'Proactively letting friends, family, and colleagues know removes the anxiety of imagining them worrying. A simple "I\'ll be out of contact from X to X" removes the uncertainty.' },
          { n: '04', title: 'Download everything you need offline', desc: 'Maps (Google Maps offline or Maps.me), your English guide pack from us, any entertainment for travel time. Assume zero connectivity at your destination and front-load all information.' },
          { n: '05', title: 'Bring a physical book or journal', desc: 'Idle hands reach for phones. A book or journal gives your hands something to do during quiet moments when the phone-reaching habit kicks in.' },
          { n: '06', title: 'Get a camera or use airplane mode', desc: 'If you want to photograph your trip (you will — Japan is beautiful), either bring a dedicated camera or keep your phone on airplane mode and use it only as a camera.' },
          { n: '07', title: 'Turn off notifications 48 hours before', desc: 'Notifications are the hooks that pull you back in. Turn them all off — not just mute, but fully disabled — two days before your trip. Notice how the background anxiety changes.' },
          { n: '08', title: 'Practice one hour of "phone-free time" daily before you go', desc: 'If you never spend an hour without your phone, going phone-free for a day will feel uncomfortable. Build the muscle incrementally: one hour per day for a week before your trip.' },
          { n: '09', title: 'Identify your main anxiety triggers', desc: 'What specifically do you fear about being offline? Missing news? Being unreachable? FOMO? Naming the anxiety specifically helps you address it rationally rather than just feeling a vague unease.' },
          { n: '10', title: 'Prepare your companions', desc: 'If you\'re traveling with others, align expectations. One person checking their phone constantly while the other is trying to detox creates friction. A brief conversation before departure helps.' },
          { n: '11', title: 'Sleep well the night before', desc: 'Tired brains crave stimulation and reach for screens more often. A good night\'s sleep before your digital detox begins puts you in a better neurological position to manage the transition.' },
          { n: '12', title: 'Have a re-entry plan', desc: 'The most common mistake is going straight from a digital detox back to a full inbox and social feeds. Plan a gradual re-entry: check email once, then close it. Check social once, then put the phone down. The detox is only valuable if you can sustain some of its effects.' },
        ].map((item) => (
          <li key={item.n} className="flex gap-5">
            <span className="font-display text-2xl text-forest-200 leading-none flex-shrink-0 pt-1">{item.n}</span>
            <div>
              <strong className="text-stone-800 block mb-2 text-lg">{item.title}</strong>
              <p className="text-stone-600">{item.desc}</p>
            </div>
          </li>
        ))}
      </ol>
      <h2 className="font-display text-3xl font-light text-stone-900">What to Expect in the First Few Hours</h2>
      <p>
        Even with preparation, the first 2–3 hours offline tend to involve a phase of restlessness. Your nervous system is accustomed to a constant stream of micro-stimulation. When that stream stops, there's an adjustment period — some guests describe it as boredom, others as mild anxiety.
      </p>
      <p>
        This is normal. Push through it by engaging your senses in the physical environment: walk slowly through the forest, sit by a stream, help with the BBQ preparation. Within a few hours, most guests report that the restlessness has passed and something quieter and more spacious has taken its place.
      </p>
      <div className="my-8 rounded-2xl bg-stone-900 p-8 text-center">
        <p className="font-display text-xl font-light text-white mb-4">Ready to try it in Japan?</p>
        <p className="text-stone-300 mb-6">We prepare everything — booking, guide, directions. You just need to show up.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="btn-primary">Request your dates</Link>
          <Link href="/digital-detox-japan" className="btn-ghost">Digital detox Japan guide</Link>
        </div>
      </div>
    </div>
  ),

  'onsen-etiquette-guide-english': (
    <div className="space-y-6 text-stone-600 leading-relaxed">
      <h2 className="font-display text-3xl font-light text-stone-900">Why Onsen Etiquette Matters</h2>
      <p>
        Japanese onsen (温泉) are not just tourist attractions — they're living cultural spaces that many Japanese people visit weekly for health, relaxation, and community. The rules that govern onsen behavior exist to ensure the experience is comfortable and hygienic for everyone. Violating them — especially as a foreign visitor — can create friction or cause genuine offense.
      </p>
      <p>
        The good news: the rules are straightforward once you know them, and following them makes the experience significantly better for you too.
      </p>
      <h2 className="font-display text-3xl font-light text-stone-900">Before You Enter</h2>
      <ul className="space-y-4 my-4">
        {[
          { rule: 'Remove your shoes at the entrance', detail: 'Most onsen facilities have a genkan (entrance area) where shoes are removed. Lockers are usually provided.' },
          { rule: 'Pay the entry fee', detail: 'Public onsen (sento-style) typically cost ¥500–¥1,500 per person. Some facilities require exact change. Our onsen map includes pricing for nearby facilities.' },
          { rule: 'Check the tattoo policy', detail: 'Many traditional onsen prohibit tattoos. This rule is changing slowly, but it\'s still common. Our guide notes which facilities in the area are tattoo-friendly or have private bath options.' },
          { rule: 'Choose the correct changing room', detail: '男 (otoko) is the character for male; 女 (onna) for female. The character is usually prominently displayed, often on different-colored curtains or noren.' },
        ].map((item) => (
          <li key={item.rule} className="rounded-lg bg-stone-50 border border-stone-200 p-5">
            <strong className="text-stone-800 block mb-2">{item.rule}</strong>
            <p className="text-stone-600">{item.detail}</p>
          </li>
        ))}
      </ul>
      <h2 className="font-display text-3xl font-light text-stone-900">In the Changing Room</h2>
      <ul className="space-y-3 my-4">
        {[
          'Leave all clothing in the locker or basket provided.',
          'You enter the bathing area completely naked. Swimwear is not permitted in traditional onsen.',
          'Bring a small towel (tenugui) for modesty — this is placed on your head or folded on the side while soaking, never let it touch the water.',
          'Leave your phone and valuables in the locker.',
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="text-forest-500 flex-shrink-0 mt-0.5">✓</span>
            {item}
          </li>
        ))}
      </ul>
      <h2 className="font-display text-3xl font-light text-stone-900">At the Washing Station</h2>
      <p>
        <strong className="text-stone-800">This is the most important step.</strong> Before entering the communal bath, you must wash yourself thoroughly at the individual washing stations (showers/taps along the wall). This is not optional — it's the fundamental hygiene practice of onsen culture.
      </p>
      <ul className="space-y-2 my-4">
        {[
          'Sit on the small stool provided.',
          'Use the shower or tap to wet yourself.',
          'Use soap and shampoo provided (or bring your own) to wash your whole body.',
          'Rinse thoroughly — no soap should remain.',
          'Leave the washing station clean for the next person.',
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="text-forest-500 flex-shrink-0">→</span>
            {item}
          </li>
        ))}
      </ul>
      <h2 className="font-display text-3xl font-light text-stone-900">In the Bath</h2>
      <ul className="space-y-3 my-4">
        {[
          'Enter slowly — the water is often very hot (40–44°C / 104–111°F).',
          'Keep your towel out of the water. Place it on your head or fold it beside the bath.',
          'No swimming or splashing — onsen are for soaking, not recreation.',
          'Speak quietly. Many Japanese visitors are there for quiet contemplation.',
          'No phones. Ever. This is the one rule that cannot be compromised.',
          'Stay for 10–15 minutes, then cool down, then return if you wish. Alternating is healthy.',
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="text-forest-500 flex-shrink-0">→</span>
            {item}
          </li>
        ))}
      </ul>
      <h2 className="font-display text-3xl font-light text-stone-900">Private Onsen vs. Public</h2>
      <p>
        If you're uncomfortable with the communal bathing aspect, private onsen (kashikiri onsen, 貸切温泉) are widely available. You book a private room with its own bath for a set time period (usually 50–60 minutes). Many ryokan and glamping facilities, including our{' '}
        <Link href="/packages/nasu-highland-glamping" className="text-forest-600 underline underline-offset-2">
          Nasu Highland Glamping package
        </Link>
        , include private onsen in every cabin — completely eliminating the communal aspect while preserving all the health benefits.
      </p>
      <div className="my-8 rounded-2xl bg-forest-50 border border-forest-200 p-8 text-center">
        <p className="font-display text-xl font-light text-forest-800 mb-4">Private onsen included in every cabin</p>
        <p className="text-stone-600 mb-6">Our Nasu Highland package gives you your own private outdoor natural hot spring — no etiquette rules to navigate.</p>
        <Link href="/packages/nasu-highland-glamping" className="btn-primary">See the package</Link>
      </div>
    </div>
  ),

  'glamping-japan-vs-camping-what-to-expect': (
    <div className="space-y-6 text-stone-600 leading-relaxed">
      <h2 className="font-display text-3xl font-light text-stone-900">The Rise of Glamping in Japan</h2>
      <p>
        Japan has one of the most sophisticated glamping industries in Asia. Driven by a post-pandemic surge in domestic travel and a cultural appetite for nature experiences, high-end glamping resorts have opened across the country — from Hokkaido to Okinawa, with a particularly strong concentration in highland areas like Nasu, Izu, and Yamanashi.
      </p>
      <p>
        For international visitors, this is excellent news. Traditional camping in Japan requires navigating Japanese-language booking systems, understanding specific campsite rules, and often bringing your own equipment. Glamping eliminates all of these barriers.
      </p>
      <h2 className="font-display text-3xl font-light text-stone-900">Glamping vs. Camping in Japan: Key Differences</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-stone-200">
              <th className="text-left py-3 pr-6 text-stone-800 font-semibold">Factor</th>
              <th className="text-left py-3 pr-6 text-forest-700 font-semibold">Glamping</th>
              <th className="text-left py-3 text-stone-600 font-semibold">Traditional Camping</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Accommodation', 'Dome cabin, bungalow, or luxury tent — real bed included', 'Tent (usually your own)'],
              ['Cooking', 'BBQ ingredients often provided or available on-site', 'You bring and prepare everything'],
              ['Booking', 'Online, often with English options (or via us)', 'Japanese-language campsite systems'],
              ['Language barrier', 'Low — glamping sites often have English signage', 'High — rural campsites rarely have English support'],
              ['Cost', '¥10,000–¥60,000+ per night per cabin', '¥500–¥3,000 per person per night'],
              ['Hot springs', 'Private or nearby onsen often included/arranged', 'Rare — you research and drive separately'],
              ['Comfort level', 'High — equivalent to a hotel in a natural setting', 'Variable — weather-dependent'],
              ['Experience needed', 'None', 'Moderate — tent setup, campfire skills, etc.'],
            ].map(([factor, glamping, camping]) => (
              <tr key={factor} className="border-b border-stone-100">
                <td className="py-3 pr-6 text-stone-700 font-medium">{factor}</td>
                <td className="py-3 pr-6 text-forest-700">{glamping}</td>
                <td className="py-3 text-stone-500">{camping}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2 className="font-display text-3xl font-light text-stone-900">Who Should Choose Glamping?</h2>
      <p>Glamping in Japan is the right choice if:</p>
      <ul className="space-y-2 my-4">
        {[
          "You want nature immersion without camping logistics",
          "You're traveling as a couple, family, or small group",
          "You want onsen access arranged as part of the experience",
          "You don't speak Japanese and want a prepared, English-friendly experience",
          "You want comfort — real beds, proper bathrooms, climate control",
          "You're on a shorter trip and want maximum impact from a single night",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-1 h-5 w-5 rounded-full bg-forest-100 text-forest-600 text-xs flex items-center justify-center font-bold flex-shrink-0">✓</span>
            {item}
          </li>
        ))}
      </ul>
      <h2 className="font-display text-3xl font-light text-stone-900">Our Recommendation for English Speakers</h2>
      <p>
        For first-time visitors to Japan's wilderness, glamping is almost always the better choice. The language barrier in traditional camping contexts is genuinely high, and the logistics — equipment, food, campfire rules, garbage sorting, onsen research — can consume the mental energy you were hoping to recover.
      </p>
      <p>
        Our{' '}
        <Link href="/packages/nasu-highland-glamping" className="text-forest-600 underline underline-offset-2">
          Nasu Highland Glamping package
        </Link>{' '}
        takes it a step further: every cabin includes a private natural hot spring and Finnish barrel sauna. You arrive, your BBQ is ready, your guide is in hand, and the only decision you have to make is which to use first — the onsen or the campfire.
      </p>
      <div className="my-8 rounded-2xl bg-stone-900 p-8 text-center">
        <p className="font-display text-xl font-light text-white mb-4">Experience glamping in Japan without the planning</p>
        <p className="text-stone-300 mb-6">We handle booking, guide, and directions. You arrive ready to relax.</p>
        <Link href="/contact" className="btn-primary">Request your dates</Link>
      </div>
    </div>
  ),

  'digital-detox-japan-solo-travel-guide': (
    <div className="space-y-6 text-stone-600 leading-relaxed">
      <h2 className="font-display text-3xl font-light text-stone-900">Solo Travel and Digital Detox: A Natural Pairing</h2>
      <p>
        Solo travel creates natural conditions for genuine digital detox. Without companions to fill silence, you're more likely to sit with stillness — which is exactly what shinrin-yoku and onsen culture invite. Without the social obligation to document experiences for others, you're more likely to simply have them.
      </p>
      <p>
        Japan, specifically, is one of the world's most solo-travel-friendly countries. Crime rates are extremely low. Public transport is reliable and logical even without Japanese literacy. Most tourist areas have English signage. Convenience stores (konbini) are everywhere and provide everything from hot meals to ATM access.
      </p>
      <h2 className="font-display text-3xl font-light text-stone-900">Is Solo Glamping Safe in Japan?</h2>
      <p>
        Absolutely. Japan consistently ranks among the world's safest countries for solo travelers of any gender. Rural glamping areas like Nasu Kogen are quiet, well-maintained, and have minimal crime. The main concerns for solo travelers in Japan are practical rather than safety-related:
      </p>
      <ul className="space-y-2 my-4">
        {[
          'Language barriers at rural facilities — solved by our English guide and pre-arranged communication',
          'Getting from the station to the site — covered in our step-by-step directions',
          'Understanding check-in procedures — covered in our English guide PDF',
          'Onsen etiquette — explained in our pre-arrival materials',
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="text-forest-500 flex-shrink-0">→</span>
            {item}
          </li>
        ))}
      </ul>
      <h2 className="font-display text-3xl font-light text-stone-900">What Solo Digital Detox in Japan Looks Like</h2>
      <p>A typical solo digital detox stay in Nasu Kogen might look like this:</p>
      <ol className="space-y-5 my-4">
        {[
          { n: '1', title: 'Arrive mid-afternoon', desc: 'Check in to your dome cabin. Your private onsen is ready. The campfire wood is stacked. The BBQ is set up for the evening.' },
          { n: '2', title: 'Forest walk', desc: 'Spend 1–2 hours walking slowly through the highland forest. No headphones, no podcast. Just the sound of the forest adjusting to your presence.' },
          { n: '3', title: 'Private onsen', desc: 'Your outdoor hot spring is heated and waiting. Soak for 20–30 minutes as the late afternoon light changes. No one else is there.' },
          { n: '4', title: 'Evening BBQ', desc: 'Cook your own dinner at your private BBQ. Eat slowly. Watch the fire. The absence of other people\'s conversation creates space for your own thoughts to surface.' },
          { n: '5', title: 'Sauna and cold plunge', desc: 'The Finnish barrel sauna is a solo experience that hits differently: you heat up, step into the cold plunge, and repeat until you feel something shift — the Japanese call it totonoi (整い), a sense of equilibrium.' },
          { n: '6', title: 'Sleep', desc: 'The absence of screens means your melatonin production is unimpaired. Many guests report that their first night offline produces the deepest sleep they can remember.' },
        ].map((item) => (
          <li key={item.n} className="flex gap-5">
            <span className="font-display text-2xl text-forest-200 leading-none flex-shrink-0 pt-1">{item.n}.</span>
            <div>
              <strong className="text-stone-800 block mb-1">{item.title}</strong>
              <p>{item.desc}</p>
            </div>
          </li>
        ))}
      </ol>
      <h2 className="font-display text-3xl font-light text-stone-900">Practical Tips for Solo Digital Detox in Japan</h2>
      <ul className="space-y-3 my-4">
        {[
          { tip: 'Tell someone your itinerary', detail: 'Basic safety practice for any solo travel: leave your accommodation name and dates with a friend or family member.' },
          { tip: 'Get a Japanese SIM or pocket WiFi', detail: 'Even for a digital detox, having connectivity available for emergencies is sensible. Keep the device in your bag and leave it there.' },
          { tip: 'Bring yen in cash', detail: 'Rural areas often don\'t accept foreign cards. We\'ll advise on the nearest ATM access in your guide.' },
          { tip: 'Download maps offline', detail: 'Google Maps offline mode covers the Nasu area well. Download your maps before arriving.' },
          { tip: 'Pack a journal', detail: 'Solo time in the forest generates thoughts. A journal gives them somewhere to go without involving a screen.' },
        ].map((item) => (
          <li key={item.tip} className="rounded-lg bg-stone-50 border border-stone-200 p-5">
            <strong className="text-stone-800 block mb-1">{item.tip}</strong>
            <p className="text-sm">{item.detail}</p>
          </li>
        ))}
      </ul>
      <div className="my-8 rounded-2xl bg-forest-50 border border-forest-200 p-8 text-center">
        <p className="font-display text-xl font-light text-forest-800 mb-4">Ready for your solo digital detox in Japan?</p>
        <p className="text-stone-600 mb-6">We prepare everything — booking, guide, directions. Solo travelers especially welcome.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="btn-primary">Request your dates</Link>
          <Link href="/unplug-in-japan" className="btn-ghost">How unplugging works</Link>
        </div>
      </div>
    </div>
  ),

  'best-time-to-visit-nasu-kogen': (
    <div className="space-y-6 text-stone-600 leading-relaxed">
      <h2 className="font-display text-3xl font-light text-stone-900">Nasu Kogen: A Four-Season Destination</h2>
      <p>
        Unlike many Japanese tourist destinations that are primarily spring (cherry blossom) or autumn (foliage) experiences, Nasu Kogen is genuinely excellent year-round. Each season transforms the highland landscape in ways that are worth experiencing in their own right.
      </p>
      <p>
        The short answer to "when should I visit" is: whenever your schedule allows. The longer answer is below.
      </p>
      <h2 className="font-display text-3xl font-light text-stone-900">Season by Season Guide</h2>
      <div className="space-y-8 my-6">
        {[
          {
            season: 'Spring — March to May',
            emoji: '🌸',
            highlights: ['Cherry blossoms (late March to early April at lower elevations)', 'Fresh green foliage emerging from the highland beech forests', 'Mild temperatures — typically 10–18°C / 50–64°F', 'Golden Week (late April–early May) is busy — book well in advance'],
            detox: 'Spring is ideal for forest bathing — the fresh growth and birdsong create an atmosphere that\'s harder to find in summer crowds.',
            crowd: 'High — especially during Golden Week.',
          },
          {
            season: 'Summer — June to August',
            emoji: '🌿',
            highlights: ['Lush green forest at its fullest', 'Evenings cool enough for campfires (15–22°C / 59–72°F)', 'Good stargazing — humidity lower than Tokyo', 'Firefly season in early June in valley areas'],
            detox: 'Summer nights at the campfire, with the forest at its densest and darkest, create ideal conditions for disconnection.',
            crowd: 'Moderate — less crowded than spring foliage peaks.',
          },
          {
            season: 'Autumn — September to November',
            emoji: '🍂',
            highlights: ['Peak foliage season — reds, oranges, and golds across the highland', 'Typically late October to early November at elevation', 'Perfect hiking weather — cool but not cold', 'The sauna-outdoor onsen combination becomes particularly compelling'],
            detox: 'Autumn is arguably the most beautiful season. The foliage transforms forest bathing into something close to transcendent.',
            crowd: 'High — Japanese domestic tourists visit in large numbers for koyo (autumn foliage).',
          },
          {
            season: 'Winter — December to February',
            emoji: '❄️',
            highlights: ['Snow-dusted forest — a stark, quiet landscape', 'Private outdoor onsen in cold air — this is the peak onsen experience', 'Very few tourists — true solitude in the highlands', 'Temperatures can drop to -5°C / 23°F at night'],
            detox: 'Winter is the season for the most profound digital detox. The silence is deeper. The onsen is more restorative. The stargazing is exceptional.',
            crowd: 'Low — the quietest season for foreign visitors.',
          },
        ].map((item) => (
          <div key={item.season} className="rounded-2xl border border-stone-200 overflow-hidden">
            <div className="bg-stone-50 px-6 py-4 flex items-center gap-3">
              <span className="text-2xl">{item.emoji}</span>
              <h3 className="font-display text-xl font-light text-stone-800">{item.season}</h3>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Highlights</p>
                <ul className="space-y-1">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm">
                      <span className="text-forest-500 flex-shrink-0">·</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">For digital detox</p>
                <p className="text-sm">{item.detox}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Crowds</p>
                <p className="text-sm">{item.crowd}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="font-display text-3xl font-light text-stone-900">Booking Tips by Season</h2>
      <ul className="space-y-3 my-4">
        {[
          'Golden Week (late April–early May): Book 2–3 months in advance. One of Japan\'s busiest travel periods.',
          'Autumn foliage peak (late October–early November): Book 6–8 weeks in advance.',
          'Summer weekends: Book 3–4 weeks in advance.',
          'Winter and spring weekdays: Often available with 1–2 weeks notice.',
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="text-forest-500 flex-shrink-0">→</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="my-8 rounded-2xl bg-amber-950/30 border border-amber-800/50 p-6">
        <p className="font-semibold text-amber-300 mb-2">Spring & Golden Week dates filling fast</p>
        <p className="text-amber-100/70 text-sm">If you're planning a spring visit, request your dates early — peak season availability is limited.</p>
      </div>
      <div className="rounded-2xl bg-forest-50 border border-forest-200 p-8 text-center">
        <p className="font-display text-xl font-light text-forest-800 mb-4">Ready to plan your Nasu Kogen visit?</p>
        <Link href="/contact" className="btn-primary">Request your dates</Link>
      </div>
    </div>
  ),

  'screen-fatigue-recovery-japan': (
    <div className="space-y-6 text-stone-600 leading-relaxed">
      <h2 className="font-display text-3xl font-light text-stone-900">What Is Screen Fatigue?</h2>
      <p>
        <strong className="text-stone-800">Screen fatigue</strong> (also called digital burnout or screen exhaustion) is a pattern of physical and psychological symptoms that emerge from prolonged, high-frequency screen exposure. It's distinct from simple tiredness — it's a state in which the nervous system has been chronically over-stimulated to the point where recovery requires more than sleep.
      </p>
      <p>Common symptoms include:</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
        {[
          'Difficulty concentrating without external stimulation',
          'Compulsive phone-checking even without conscious intent',
          'Reduced enjoyment of activities that don\'t involve screens',
          'Eye strain, headaches, disrupted sleep',
          'Increased anxiety, irritability, or sense of overwhelm',
          'Feeling "behind" even when objectively on top of obligations',
          'Diminished capacity for deep work or sustained focus',
          'Loss of enjoyment in genuinely quiet moments',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm rounded-lg bg-stone-50 border border-stone-200 p-3">
            <span className="text-red-400 flex-shrink-0 mt-0.5">·</span>
            {item}
          </li>
        ))}
      </ul>
      <h2 className="font-display text-3xl font-light text-stone-900">Why Japan Works for Screen Fatigue Recovery</h2>
      <p>
        Japan offers a unique combination of factors that make it unusually effective for screen fatigue recovery — not by design, but because its culture and landscape align almost perfectly with what the over-stimulated nervous system needs.
      </p>
      <div className="space-y-6 my-6">
        {[
          {
            title: 'Ancient forests with measurable physiological effects',
            body: 'Japan\'s cedar and hinoki cypress forests release phytoncides — airborne organic compounds that measurably reduce cortisol, boost immune function, and lower blood pressure. The forest itself is doing therapeutic work.',
          },
          {
            title: 'Onsen culture — enforced phone-free spaces',
            body: 'Traditional onsen have prohibited phones for decades, long before screen fatigue was a diagnosis. The culture of bathing in silence, in mineral-rich water, surrounded by steam and nature, is one of the most effective nervous system reset environments humans have created.',
          },
          {
            title: 'Ma — the Japanese concept of meaningful silence',
            body: 'Japanese aesthetics embrace ma (間) — the pause, the empty space, the interval between things. This cultural orientation to silence means Japan\'s rural spaces are genuinely quiet in a way that European or American countryside often isn\'t.',
          },
          {
            title: 'Low decision fatigue',
            body: 'When everything is prepared — your accommodation, your food, your directions — your decision-making capacity (a finite resource that screens deplete rapidly) has nothing to process. The nervous system can genuinely rest.',
          },
        ].map((item) => (
          <div key={item.title} className="rounded-xl bg-stone-50 border border-stone-200 p-6">
            <h3 className="font-semibold text-stone-800 mb-3">{item.title}</h3>
            <p className="text-stone-600">{item.body}</p>
          </div>
        ))}
      </div>
      <h2 className="font-display text-3xl font-light text-stone-900">What to Expect During Recovery</h2>
      <p>
        Screen fatigue recovery is not linear, and the first phase — especially the first few hours — involves some discomfort. The nervous system has been calibrated to receive constant micro-stimulation. When that stops, there's an adjustment period.
      </p>
      <ul className="space-y-3 my-4">
        {[
          { phase: 'Hours 1–3', desc: 'Restlessness, boredom, compulsive phone-reaching. This is withdrawal — it\'s normal and it passes.' },
          { phase: 'Hours 4–8', desc: 'Slowing down. Breathing deepens. The senses begin to sharpen — noticing sounds and textures that were previously drowned out.' },
          { phase: 'Day 2', desc: 'Most guests report that the compulsive checking impulse has significantly reduced. Sleep is deeper. Appetite for simple pleasures (food, fire, water) returns.' },
          { phase: 'Day 3+', desc: 'A quality of attention described variously as "clear," "present," or "wide open." The kind of focus that was once ordinary and has become rare.' },
        ].map((item) => (
          <li key={item.phase} className="flex gap-4">
            <span className="font-display text-lg text-forest-300 font-light flex-shrink-0 pt-0.5">{item.phase}:</span>
            <p>{item.desc}</p>
          </li>
        ))}
      </ul>
      <h2 className="font-display text-3xl font-light text-stone-900">The Role of the Environment</h2>
      <p>
        You can attempt screen fatigue recovery at home — setting phone limits, designating screen-free hours. Most people find it very difficult. The environment is working against you: your devices are everywhere, your routines involve them, your social network expects responsiveness.
      </p>
      <p>
        Removing yourself physically to an environment that structurally removes the friction is the most effective approach. Japan's rural glamping sites — particularly those without reliable cell signal — do this automatically. You don't have to discipline yourself into not checking your phone if there's no signal to check.
      </p>
      <div className="my-8 rounded-2xl bg-stone-900 p-8 text-center">
        <p className="font-display text-xl font-light text-white mb-4">Begin your screen fatigue recovery in Japan</p>
        <p className="text-stone-300 mb-6">Private onsen, forest air, and genuine stillness — prepared in English so you arrive ready to rest.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="btn-primary">Request your dates</Link>
          <Link href="/digital-detox-japan" className="btn-ghost">Digital detox Japan guide</Link>
        </div>
      </div>
    </div>
  ),
}

export function getPostContent(slug: string): PostContent {
  return posts[slug] ?? (
    <p className="text-stone-600">Content coming soon.</p>
  )
}
